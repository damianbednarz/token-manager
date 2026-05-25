// This file runs in the Figma plugin sandbox
// It has access to the Figma API but not to browser APIs

import { THEMES, STYLES, BASE_THEMES, DEFAULT_BASE, STYLE_RADIUS } from './create-data';

figma.showUI(__html__, { width: 460, height: 700 });

let currentThemeName: string | null = null;
let inspectScreenActive = false;

figma.on('selectionchange', async () => {
  if (!inspectScreenActive) return;
  await runSelectionCheck();
});

interface TokenValue {
  value: string | number;
  type?: string;
  $value?: string | number;
  $type?: string;
}

interface Tokens {
  [key: string]: TokenValue | Tokens;
}

function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16) / 255,
        g: parseInt(result[2], 16) / 255,
        b: parseInt(result[3], 16) / 255,
      }
    : null;
}

function parseTokenValue(token: TokenValue): { value: any; type: string } {
  const value = token.$value ?? token.value;
  const type = token.$type ?? token.type ?? 'string';
  return { value, type };
}

async function findOrCreateVariable(
  collection: VariableCollection,
  name: string,
  type: VariableResolvedDataType
): Promise<Variable> {
  const existingVar = collection.variableIds
    .map((id) => figma.variables.getVariableById(id))
    .find((v) => v?.name === name);

  if (existingVar) {
    return existingVar;
  }

  return figma.variables.createVariable(name, collection, type);
}

async function processTokens(tokens: Tokens, prefix: string = ''): Promise<{
  updated: number;
  created: number;
  skipped: number;
  errors: string[];
}> {
  const results = {
    updated: 0,
    created: 0,
    skipped: 0,
    errors: [] as string[],
  };

  const collections = await figma.variables.getLocalVariableCollectionsAsync();
  let targetCollection = collections[0];

  if (!targetCollection) {
    targetCollection = figma.variables.createVariableCollection('Design Tokens');
  }

  const defaultMode = targetCollection.modes[0].modeId;

  for (const [key, tokenOrGroup] of Object.entries(tokens)) {
    const fullName = prefix ? `${prefix}/${key}` : key;

    if (typeof tokenOrGroup === 'object' && tokenOrGroup !== null) {
      const hasValue = '$value' in tokenOrGroup || 'value' in tokenOrGroup;

      if (hasValue) {
        try {
          const { value, type } = parseTokenValue(tokenOrGroup as TokenValue);

          let variableType: VariableResolvedDataType = 'STRING';
          let figmaValue: any = value;

          if (type === 'color') {
            variableType = 'COLOR';
            const rgb = hexToRgb(value as string);
            if (rgb) {
              figmaValue = rgb;
            } else {
              results.errors.push(`Invalid color value for ${fullName}: ${value}`);
              results.skipped++;
              continue;
            }
          } else if (type === 'number' || type === 'dimension' || type === 'float' || type === 'spacing' || type === 'sizing' || type === 'border-radius' || type === 'border-width' || type === 'font-size' || type === 'line-height' || type === 'letter-spacing') {
            variableType = 'FLOAT';
            figmaValue = typeof value === 'number' ? value : parseFloat(value as string);
          } else if (type === 'boolean') {
            variableType = 'BOOLEAN';
            figmaValue = value === 'true' || value === true;
          }

          const variable = await findOrCreateVariable(targetCollection, fullName, variableType);

          if (variable.resolvedType === variableType) {
            const existingValue = variable.valuesByMode[defaultMode];
            variable.setValueForMode(defaultMode, figmaValue);

            if (existingValue !== undefined) {
              results.updated++;
            } else {
              results.created++;
            }
          } else {
            results.errors.push(
              `Type mismatch for ${fullName}: expected ${variable.resolvedType}, got ${variableType}`
            );
            results.skipped++;
          }
        } catch (error) {
          results.errors.push(`Error processing ${fullName}: ${error}`);
          results.skipped++;
        }
      } else {
        const nestedResults = await processTokens(tokenOrGroup as Tokens, fullName);
        results.updated += nestedResults.updated;
        results.created += nestedResults.created;
        results.skipped += nestedResults.skipped;
        results.errors.push(...nestedResults.errors);
      }
    }
  }

  return results;
}

function parseOklch(value: string): { l: number; c: number; h: number } | null {
  const m = value.match(/^oklch\(\s*([0-9.]+)\s+([0-9.]+)\s+([0-9.]+)\s*\)$/i);
  if (!m) return null;
  return { l: parseFloat(m[1]), c: parseFloat(m[2]), h: parseFloat(m[3]) };
}

// OKLCH (CSS Color 4) → linear sRGB → sRGB. Algorithm follows the spec
// (Björn Ottosson's Oklab) — see https://bottosson.github.io/posts/oklab/
function oklchToRgb(value: string): { r: number; g: number; b: number } | null {
  const ok = parseOklch(value);
  if (!ok) return null;

  const hRad = (ok.h * Math.PI) / 180;
  const a = ok.c * Math.cos(hRad);
  const b = ok.c * Math.sin(hRad);

  const l_ = ok.l + 0.3963377774 * a + 0.2158037573 * b;
  const m_ = ok.l - 0.1055613458 * a - 0.0638541728 * b;
  const s_ = ok.l - 0.0894841775 * a - 1.2914855480 * b;

  const lc = l_ * l_ * l_;
  const mc = m_ * m_ * m_;
  const sc = s_ * s_ * s_;

  let lr = +4.0767416621 * lc - 3.3077115913 * mc + 0.2309699292 * sc;
  let lg = -1.2684380046 * lc + 2.6097574011 * mc - 0.3413193965 * sc;
  let lb = -0.0041960863 * lc - 0.7034186147 * mc + 1.7076147010 * sc;

  const toSrgb = (n: number) => {
    const x = Math.max(0, Math.min(1, n));
    return x <= 0.0031308 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055;
  };

  return { r: toSrgb(lr), g: toSrgb(lg), b: toSrgb(lb) };
}

function colorValueToRgb(value: string): { r: number; g: number; b: number } | null {
  if (!value) return null;
  if (value.startsWith('oklch(')) return oklchToRgb(value);
  if (value.startsWith('#')) {
    const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(value);
    if (!m) return null;
    return { r: parseInt(m[1], 16) / 255, g: parseInt(m[2], 16) / 255, b: parseInt(m[3], 16) / 255 };
  }
  return null;
}

function buildThemeBlock(themeName: string, mode: 'light' | 'dark'): Record<string, string> {
  const theme = THEMES.find(t => t.name === themeName);
  if (!theme) return {};
  const isBase = BASE_THEMES.indexOf(themeName) !== -1;
  if (isBase) return theme.cssVars[mode] || {};
  // Overlay theme — merge over the default base
  const base = THEMES.find(t => t.name === DEFAULT_BASE);
  const baseBlock = (base && base.cssVars[mode]) || {};
  return Object.assign({}, baseBlock, theme.cssVars[mode] || {});
}

function lineHeightToString(lh: LineHeight): string {
  if (lh.unit === 'AUTO') return 'AUTO';
  return lh.unit === 'PERCENT' ? `${lh.value}%` : `${lh.value}px`;
}

function letterSpacingToString(ls: LetterSpacing): string {
  return ls.unit === 'PERCENT' ? `${ls.value}%` : `${ls.value}px`;
}

function parseUnitValue(v: any): { unit: 'PIXELS' | 'PERCENT'; value: number } | { unit: 'AUTO' } | null {
  if (typeof v === 'number') return { unit: 'PIXELS', value: v };
  if (typeof v !== 'string') return null;
  if (v === 'AUTO') return { unit: 'AUTO' };
  const m = v.match(/^(-?\d+(?:\.\d+)?)\s*(px|%)?$/);
  if (!m) return null;
  return { unit: m[2] === '%' ? 'PERCENT' : 'PIXELS', value: parseFloat(m[1]) };
}

async function buildTypographyTokens(): Promise<any> {
  const styles = await figma.getLocalTextStylesAsync();
  const out: any = {};

  for (const style of styles) {
    const value: any = {
      fontFamily: style.fontName.family,
      fontWeight: style.fontName.style,
      fontSize: style.fontSize,
      lineHeight: lineHeightToString(style.lineHeight),
      letterSpacing: letterSpacingToString(style.letterSpacing),
      paragraphSpacing: style.paragraphSpacing,
      paragraphIndent: style.paragraphIndent,
      textCase: style.textCase,
      textDecoration: style.textDecoration
    };

    const parts = style.name.split('/');
    let cursor = out;
    for (let i = 0; i < parts.length - 1; i++) {
      if (!cursor[parts[i]] || typeof cursor[parts[i]] !== 'object') {
        cursor[parts[i]] = {};
      }
      cursor = cursor[parts[i]];
    }
    cursor[parts[parts.length - 1]] = { $type: 'typography', $value: value };
  }

  return out;
}

function flattenTypography(obj: any, prefix: string = ''): Record<string, any> {
  const out: Record<string, any> = {};
  if (!obj || typeof obj !== 'object') return out;

  for (const key of Object.keys(obj)) {
    if (key.startsWith('$')) continue;
    const val = obj[key];
    if (!val || typeof val !== 'object') continue;

    const fullName = prefix ? `${prefix}/${key}` : key;
    const tokenValue = val.$value !== undefined ? val.$value : val.value;
    const tokenType = val.$type || val.type;
    const looksLikeTypography = tokenValue && typeof tokenValue === 'object'
      && (tokenType === 'typography' || 'fontFamily' in tokenValue || 'fontSize' in tokenValue);

    if (looksLikeTypography) {
      out[fullName] = tokenValue;
    } else {
      Object.assign(out, flattenTypography(val, fullName));
    }
  }

  return out;
}

function applyTypography(style: TextStyle, val: any): void {
  if (val.fontFamily && val.fontWeight) {
    style.fontName = { family: String(val.fontFamily), style: String(val.fontWeight) };
  }
  if (typeof val.fontSize === 'number') style.fontSize = val.fontSize;

  const lh = parseUnitValue(val.lineHeight);
  if (lh) style.lineHeight = lh as LineHeight;

  const ls = parseUnitValue(val.letterSpacing);
  if (ls && ls.unit !== 'AUTO') style.letterSpacing = ls as LetterSpacing;

  if (typeof val.paragraphSpacing === 'number') style.paragraphSpacing = val.paragraphSpacing;
  if (typeof val.paragraphIndent === 'number') style.paragraphIndent = val.paragraphIndent;
  if (val.textCase) style.textCase = val.textCase as TextCase;
  if (val.textDecoration) style.textDecoration = val.textDecoration as TextDecoration;
}

interface RebindStats {
  variables: number;
  nodes: number;
  paintStyles: number;
  effectStyles: number;
  textStyles: number;
}

function remapPaintArray(
  paints: ReadonlyArray<Paint>,
  remapping: Map<string, Variable>
): { paints: Paint[]; changed: boolean } {
  let changed = false;
  const next = paints.map((paint) => {
    const bv: any = (paint as any).boundVariables;
    if (!bv) return paint;
    let p = paint;
    if (bv.color && bv.color.id) {
      const nv = remapping.get(bv.color.id);
      if (nv) {
        p = figma.variables.setBoundVariableForPaint(p as SolidPaint, 'color', nv);
        changed = true;
      }
    }
    return p;
  });
  return { paints: next, changed };
}

function remapEffectArray(
  effects: ReadonlyArray<Effect>,
  remapping: Map<string, Variable>
): { effects: Effect[]; changed: boolean } {
  const fields: VariableBindableEffectField[] = ['color', 'radius', 'spread', 'offsetX', 'offsetY'];
  let changed = false;
  const next = effects.map((effect) => {
    const bv: any = (effect as any).boundVariables;
    if (!bv) return effect;
    let e = effect;
    for (const field of fields) {
      const ref = bv[field];
      if (ref && ref.id) {
        const nv = remapping.get(ref.id);
        if (nv) {
          e = figma.variables.setBoundVariableForEffect(e, field, nv);
          changed = true;
        }
      }
    }
    return e;
  });
  return { effects: next, changed };
}

function remapGridArray(
  grids: ReadonlyArray<LayoutGrid>,
  remapping: Map<string, Variable>
): { grids: LayoutGrid[]; changed: boolean } {
  const fields: VariableBindableLayoutGridField[] = ['sectionSize', 'count', 'offset', 'gutterSize'];
  let changed = false;
  const next = grids.map((grid) => {
    const bv: any = (grid as any).boundVariables;
    if (!bv) return grid;
    let g = grid;
    for (const field of fields) {
      const ref = bv[field];
      if (ref && ref.id) {
        const nv = remapping.get(ref.id);
        if (nv) {
          g = figma.variables.setBoundVariableForLayoutGrid(g, field, nv);
          changed = true;
        }
      }
    }
    return g;
  });
  return { grids: next, changed };
}

function rebindScalarBindings(target: any, remapping: Map<string, Variable>): boolean {
  if (!target || !target.boundVariables) return false;
  let changed = false;
  for (const prop of Object.keys(target.boundVariables)) {
    const binding = target.boundVariables[prop];
    if (!binding) continue;
    // Skip array-shaped (fills/strokes/effects/layoutGrids) — handled by the paint/effect/grid remap
    if (Array.isArray(binding)) continue;
    if (binding.type === 'VARIABLE_ALIAS' && binding.id) {
      const nv = remapping.get(binding.id);
      if (nv && typeof target.setBoundVariable === 'function') {
        try {
          target.setBoundVariable(prop as VariableBindableNodeField, nv);
          changed = true;
        } catch (e) {
          // Some props are not rebindable on every node type — ignore
        }
      }
    }
  }
  return changed;
}

function rebindNode(node: BaseNode, remapping: Map<string, Variable>): boolean {
  let changed = false;

  if (rebindScalarBindings(node, remapping)) changed = true;

  if ('fills' in node) {
    const fills = (node as any).fills;
    if (Array.isArray(fills)) {
      const r = remapPaintArray(fills as Paint[], remapping);
      if (r.changed) { (node as any).fills = r.paints; changed = true; }
    }
  }
  if ('strokes' in node) {
    const strokes = (node as any).strokes;
    if (Array.isArray(strokes)) {
      const r = remapPaintArray(strokes as Paint[], remapping);
      if (r.changed) { (node as any).strokes = r.paints; changed = true; }
    }
  }
  if ('effects' in node) {
    const effects = (node as any).effects;
    if (Array.isArray(effects)) {
      const r = remapEffectArray(effects as Effect[], remapping);
      if (r.changed) { (node as any).effects = r.effects; changed = true; }
    }
  }
  if ('layoutGrids' in node) {
    const grids = (node as any).layoutGrids;
    if (Array.isArray(grids)) {
      const r = remapGridArray(grids as LayoutGrid[], remapping);
      if (r.changed) { (node as any).layoutGrids = r.grids; changed = true; }
    }
  }

  // Per-segment fills on text nodes
  if (node.type === 'TEXT') {
    const t = node as TextNode;
    try {
      const segments = t.getStyledTextSegments(['fills']);
      for (const seg of segments) {
        const r = remapPaintArray(seg.fills as Paint[], remapping);
        if (r.changed) { t.setRangeFills(seg.start, seg.end, r.paints); changed = true; }
      }
    } catch (e) {
      // Font not loaded or other text-API hiccup — skip silently
    }
  }

  return changed;
}

async function rebindAllReferences(remapping: Map<string, Variable>): Promise<RebindStats> {
  const stats: RebindStats = { variables: 0, nodes: 0, paintStyles: 0, effectStyles: 0, textStyles: 0 };
  if (remapping.size === 0) return stats;

  // 1. Other variables' aliases
  const collections = await figma.variables.getLocalVariableCollectionsAsync();
  for (const col of collections) {
    for (const vId of col.variableIds) {
      const v = await figma.variables.getVariableByIdAsync(vId);
      if (!v) continue;
      const modeIds = Object.keys(v.valuesByMode);
      for (const modeId of modeIds) {
        const val: any = v.valuesByMode[modeId];
        if (val && typeof val === 'object' && val.type === 'VARIABLE_ALIAS' && val.id) {
          const nv = remapping.get(val.id);
          if (nv) {
            try { v.setValueForMode(modeId, { type: 'VARIABLE_ALIAS', id: nv.id }); stats.variables++; } catch {}
          }
        }
      }
    }
  }

  // 2. Walk every node on every page
  const visit = (node: BaseNode) => {
    if (rebindNode(node, remapping)) stats.nodes++;
    if ('children' in node) {
      for (const child of (node as ChildrenMixin).children) visit(child);
    }
  };
  for (const page of figma.root.children) visit(page);

  // 3. Local styles
  const paintStyles = await figma.getLocalPaintStylesAsync();
  for (const style of paintStyles) {
    const r = remapPaintArray(style.paints, remapping);
    if (r.changed) { style.paints = r.paints; stats.paintStyles++; }
  }
  const effectStyles = await figma.getLocalEffectStylesAsync();
  for (const style of effectStyles) {
    const r = remapEffectArray(style.effects, remapping);
    if (r.changed) { style.effects = r.effects; stats.effectStyles++; }
  }
  const textStyles = await figma.getLocalTextStylesAsync();
  for (const style of textStyles) {
    if (rebindScalarBindings(style, remapping)) stats.textStyles++;
  }

  return stats;
}

async function getFigmaVariables() {
  const collections = await figma.variables.getLocalVariableCollectionsAsync();
  const variables: any[] = [];

  for (const collection of collections) {
    for (const variableId of collection.variableIds) {
      const variable = figma.variables.getVariableById(variableId);
      if (variable) {
        const defaultMode = collection.modes[0].modeId;
        const value = variable.valuesByMode[defaultMode];

        variables.push({
          id: variable.id,
          name: variable.name,
          type: variable.resolvedType,
          value: value
        });
      }
    }
  }

  return variables;
}

// ── Inspect feature ────────────────────────────────────────────────────────

function rgbToHex(r: number, g: number, b: number): string {
  const h = (v: number) => Math.round(v * 255).toString(16).padStart(2, '0');
  return '#' + h(r) + h(g) + h(b);
}

function rgbClose(
  a: { r: number; g: number; b: number },
  b: { r: number; g: number; b: number }
): boolean {
  return Math.abs(a.r - b.r) < 0.015 && Math.abs(a.g - b.g) < 0.015 && Math.abs(a.b - b.b) < 0.015;
}

interface LayerIssue {
  category: 'color' | 'spacing' | 'typography';
  property: string;
  status: 'hardcoded' | 'mismatch' | 'ok';
  colorHex?: string;
  expectedHex?: string;
  currentValue?: string;
  expectedValue?: string;
  variableName?: string;
  tokenName?: string;
}

interface NodeResult {
  nodeId: string;
  nodeName: string;
  nodeType: string;
  path: string;
  issues: LayerIssue[];
}

async function checkPaints(
  paints: ReadonlyArray<Paint>,
  propertyName: string,
  themeColorMap: Map<string, { r: number; g: number; b: number }>,
  issues: LayerIssue[]
): Promise<void> {
  for (let i = 0; i < paints.length; i++) {
    const paint = paints[i];
    if (paint.type !== 'SOLID') continue;

    const solid = paint as SolidPaint;
    const colorHex = rgbToHex(solid.color.r, solid.color.g, solid.color.b);
    const label = paints.length > 1 ? `${propertyName}[${i}]` : propertyName;
    const boundColor = (solid as any).boundVariables?.color;

    if (!boundColor?.id) {
      issues.push({ category: 'color', property: label, status: 'hardcoded', colorHex });
      continue;
    }

    const variable = await figma.variables.getVariableByIdAsync(boundColor.id);
    if (!variable) {
      issues.push({ category: 'color', property: label, status: 'hardcoded', colorHex });
      continue;
    }

    const varName = variable.name;
    const tokenKey = (varName.split('/').pop() || varName).toLowerCase();

    if (themeColorMap.size === 0) {
      issues.push({ category: 'color', property: label, status: 'ok', colorHex, variableName: varName, tokenName: tokenKey });
      continue;
    }

    const expectedRgb = themeColorMap.get(tokenKey);
    if (!expectedRgb) {
      issues.push({ category: 'color', property: label, status: 'ok', colorHex, variableName: varName, tokenName: tokenKey });
      continue;
    }

    const expectedHex = rgbToHex(expectedRgb.r, expectedRgb.g, expectedRgb.b);
    const isMatch = rgbClose(solid.color, expectedRgb);
    issues.push({
      category: 'color',
      property: label,
      status: isMatch ? 'ok' : 'mismatch',
      colorHex,
      expectedHex: isMatch ? undefined : expectedHex,
      variableName: varName,
      tokenName: tokenKey
    });
  }
}

function checkFloatProp(node: BaseNode, propName: string, issues: LayerIssue[]): void {
  const val = (node as any)[propName];
  if (typeof val !== 'number' || val === 0) return;
  const bound = (node as any).boundVariables?.[propName];
  if (bound?.type === 'VARIABLE_ALIAS') {
    const variable = figma.variables.getVariableById(bound.id);
    if (variable && variable.resolvedType === 'FLOAT') {
      issues.push({ category: 'spacing', property: propName, status: 'ok', currentValue: String(val), variableName: variable.name });
    }
    return;
  }
  issues.push({ category: 'spacing', property: propName, status: 'hardcoded', currentValue: String(val) });
}

function checkTypographyNode(node: TextNode, issues: LayerIssue[]): void {
  const styleId = node.textStyleId;
  if (!styleId || typeof styleId === 'symbol') {
    let fontDesc = '';
    try {
      if (typeof node.fontName !== 'symbol') fontDesc = (node.fontName as FontName).family;
      if (typeof node.fontSize === 'number') fontDesc += (fontDesc ? ' ' : '') + node.fontSize + 'px';
    } catch {}
    issues.push({ category: 'typography', property: 'textStyle', status: 'hardcoded', currentValue: fontDesc || 'no style' });
  } else {
    const style = figma.getStyleById(styleId as string);
    issues.push({ category: 'typography', property: 'textStyle', status: 'ok', variableName: style ? style.name : 'unknown style' });
  }
}

async function scanNode(
  node: BaseNode,
  themeColorMap: Map<string, { r: number; g: number; b: number }>,
  results: NodeResult[],
  pathParts: string[],
  depth: number,
  counter: { count: number; max: number },
  maxDepth = 8
): Promise<void> {
  if (depth > maxDepth || counter.count > counter.max) return;
  counter.count++;

  const issues: LayerIssue[] = [];

  if ('fills' in node) {
    const fills = (node as any).fills;
    if (Array.isArray(fills) && fills.length > 0) {
      await checkPaints(fills as Paint[], 'fill', themeColorMap, issues);
    }
  }
  if ('strokes' in node) {
    const strokes = (node as any).strokes;
    if (Array.isArray(strokes) && strokes.length > 0) {
      await checkPaints(strokes as Paint[], 'stroke', themeColorMap, issues);
    }
  }

  for (const prop of ['paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom', 'cornerRadius']) {
    if (prop in node) checkFloatProp(node, prop, issues);
  }
  if ('itemSpacing' in node && (node as any).layoutMode && (node as any).layoutMode !== 'NONE') {
    checkFloatProp(node, 'itemSpacing', issues);
  }

  if (node.type === 'TEXT') checkTypographyNode(node as TextNode, issues);

  if (issues.length > 0) {
    results.push({
      nodeId: node.id,
      nodeName: node.name,
      nodeType: node.type,
      path: pathParts.join(' › '),
      issues
    });
  }

  if ('children' in node) {
    for (const child of (node as ChildrenMixin).children) {
      await scanNode(child, themeColorMap, results, [...pathParts, child.name], depth + 1, counter, maxDepth);
    }
  }
}

async function runSelectionCheck(): Promise<void> {
  const selection = figma.currentPage.selection;

  if (selection.length === 0) {
    figma.ui.postMessage({ type: 'selection-check-result', nodes: [], empty: true, themeName: currentThemeName });
    return;
  }

  const themeColorMap = new Map<string, { r: number; g: number; b: number }>();
  if (currentThemeName) {
    const lightBlock = buildThemeBlock(currentThemeName, 'light');
    for (const [key, value] of Object.entries(lightBlock)) {
      const rgb = colorValueToRgb(value);
      if (rgb) themeColorMap.set(key.toLowerCase(), rgb);
    }
  }

  const results: NodeResult[] = [];
  const counter = { count: 0, max: 200 };
  for (const node of selection) {
    await scanNode(node, themeColorMap, results, [node.name], 0, counter);
  }

  figma.ui.postMessage({
    type: 'selection-check-result',
    nodes: results,
    empty: false,
    themeName: currentThemeName,
    totalScanned: counter.count
  });
}

function parsePropKey(raw: string): { propName: 'fills' | 'strokes'; index: number } {
  const m = raw.match(/^(fill|stroke)\[(\d+)\]$/);
  if (m) return { propName: m[1] === 'stroke' ? 'strokes' : 'fills', index: parseInt(m[2]) };
  return { propName: raw.startsWith('stroke') ? 'strokes' : 'fills', index: 0 };
}

async function fixSingleIssue(
  nodeId: string,
  propertyRaw: string,
  status: string,
  variableName: string | undefined,
  themeName: string | null
): Promise<void> {
  const node = figma.getNodeById(nodeId);
  if (!node) return;

  const collections = await figma.variables.getLocalVariableCollectionsAsync();

  const spacingPropNames = ['paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom', 'itemSpacing', 'cornerRadius'];
  if (spacingPropNames.indexOf(propertyRaw) !== -1) {
    if (status === 'hardcoded') {
      const val = (node as any)[propertyRaw];
      if (typeof val !== 'number') return;
      let bestVar: Variable | null = null;
      let bestDist = Infinity;
      for (const col of collections) {
        const modeId = col.modes[0].modeId;
        for (const id of col.variableIds) {
          const v = await figma.variables.getVariableByIdAsync(id);
          if (!v || v.resolvedType !== 'FLOAT') continue;
          const varVal = v.valuesByMode[modeId];
          if (typeof varVal !== 'number') continue;
          const dist = Math.abs(varVal - val);
          if (dist < bestDist) { bestDist = dist; bestVar = v; }
        }
      }
      if (bestVar) {
        try { (node as any).setBoundVariable(propertyRaw as VariableBindableNodeField, bestVar); } catch {}
      }
    }
    return;
  }

  const { propName, index } = parsePropKey(propertyRaw);
  const rawPaints: Paint[] = [...((node as any)[propName] || [])];
  const paint = rawPaints[index];
  if (!paint || paint.type !== 'SOLID') return;
  const solid = paint as SolidPaint;

  if (status === 'mismatch' && variableName && themeName) {
    for (const col of collections) {
      for (const id of col.variableIds) {
        const v = await figma.variables.getVariableByIdAsync(id);
        if (!v || v.name !== variableName) continue;
        const lightBlock = buildThemeBlock(themeName, 'light');
        const tokenKey = (v.name.split('/').pop() || v.name).toLowerCase();
        const expectedVal = lightBlock[tokenKey] ||
          lightBlock[Object.keys(lightBlock).find(k => k.toLowerCase() === tokenKey) || ''] || '';
        const rgb = colorValueToRgb(expectedVal);
        if (rgb) { try { v.setValueForMode(col.modes[0].modeId, rgb); } catch {} }
        return;
      }
    }
    return;
  }

  if (status === 'hardcoded') {
    let bestVar: Variable | null = null;
    let bestDist = Infinity;
    for (const col of collections) {
      const modeId = col.modes[0].modeId;
      for (const id of col.variableIds) {
        const v = await figma.variables.getVariableByIdAsync(id);
        if (!v || v.resolvedType !== 'COLOR') continue;
        const val = v.valuesByMode[modeId] as any;
        if (!val || typeof val.r !== 'number') continue;
        const dist = (val.r - solid.color.r) ** 2 +
                     (val.g - solid.color.g) ** 2 +
                     (val.b - solid.color.b) ** 2;
        if (dist < bestDist) { bestDist = dist; bestVar = v; }
      }
    }
    if (bestVar) {
      const newPaint = figma.variables.setBoundVariableForPaint(solid, 'color', bestVar);
      rawPaints[index] = newPaint;
      (node as any)[propName] = rawPaints;
    }
  }
}

// ── Page Audit ─────────────────────────────────────────────────────────────

async function runPageAudit(): Promise<void> {
  const themeColorMap = new Map<string, { r: number; g: number; b: number }>();
  if (currentThemeName) {
    const lightBlock = buildThemeBlock(currentThemeName, 'light');
    for (const [key, value] of Object.entries(lightBlock)) {
      const rgb = colorValueToRgb(value);
      if (rgb) themeColorMap.set(key.toLowerCase(), rgb);
    }
  }

  const results: NodeResult[] = [];
  const counter = { count: 0, max: 5000 };
  for (const node of figma.currentPage.children) {
    await scanNode(node, themeColorMap, results, [node.name], 0, counter, 30);
  }

  let hardcoded = 0, mismatch = 0, ok = 0;
  const byCategory = { color: { hardcoded: 0, mismatch: 0 }, spacing: { hardcoded: 0 }, typography: { hardcoded: 0 } };
  for (const n of results) {
    for (const iss of n.issues) {
      if (iss.status === 'hardcoded') {
        hardcoded++;
        if (iss.category === 'color') byCategory.color.hardcoded++;
        else if (iss.category === 'spacing') byCategory.spacing.hardcoded++;
        else byCategory.typography.hardcoded++;
      } else if (iss.status === 'mismatch') { mismatch++; byCategory.color.mismatch++; }
      else ok++;
    }
  }
  const total = hardcoded + mismatch + ok;
  const score = total > 0 ? Math.round((ok / total) * 100) : 100;

  figma.ui.postMessage({
    type: 'page-audit-result',
    nodes: results,
    totalScanned: counter.count,
    hardcoded, mismatch, ok, score, byCategory,
    themeName: currentThemeName
  });
}

// ── Unused Variables ────────────────────────────────────────────────────────

function extractUsedVariableIds(node: BaseNode, usedIds: Set<string>): void {
  const bv = (node as any).boundVariables;
  if (bv) {
    for (const key of Object.keys(bv)) {
      const binding = bv[key];
      if (!binding) continue;
      if (Array.isArray(binding)) {
        for (const b of binding) { if (b?.type === 'VARIABLE_ALIAS') usedIds.add(b.id); }
      } else if (binding.type === 'VARIABLE_ALIAS') {
        usedIds.add(binding.id);
      }
    }
  }
  for (const prop of ['fills', 'strokes', 'effects']) {
    const arr = (node as any)[prop];
    if (!Array.isArray(arr)) continue;
    for (const item of arr) {
      const itemBv = (item as any).boundVariables;
      if (!itemBv) continue;
      for (const key of Object.keys(itemBv)) {
        const b = itemBv[key];
        if (b?.type === 'VARIABLE_ALIAS') usedIds.add(b.id);
      }
    }
  }
}

async function findUnusedVariables(): Promise<{
  unused: Array<{ id: string; name: string; type: string; collection: string; value: string }>;
  total: number;
}> {
  const usedIds = new Set<string>();
  const visit = (node: BaseNode) => {
    extractUsedVariableIds(node, usedIds);
    if ('children' in node) {
      for (const child of (node as ChildrenMixin).children) visit(child);
    }
  };
  for (const page of figma.root.children) visit(page);

  const paintStyles = await figma.getLocalPaintStylesAsync();
  for (const style of paintStyles) {
    for (const paint of style.paints) {
      const bv = (paint as any).boundVariables;
      if (!bv) continue;
      for (const key of Object.keys(bv)) {
        const b = bv[key];
        if (b?.type === 'VARIABLE_ALIAS') usedIds.add(b.id);
      }
    }
  }

  const collections = await figma.variables.getLocalVariableCollectionsAsync();
  const unused: Array<{ id: string; name: string; type: string; collection: string; value: string }> = [];
  let total = 0;
  for (const col of collections) {
    total += col.variableIds.length;
    for (const id of col.variableIds) {
      if (usedIds.has(id)) continue;
      const v = await figma.variables.getVariableByIdAsync(id);
      if (!v) continue;
      const val = v.valuesByMode[col.modes[0].modeId];
      let displayVal = '';
      if (v.resolvedType === 'COLOR' && val && typeof val === 'object' && 'r' in val) {
        displayVal = rgbToHex((val as any).r, (val as any).g, (val as any).b);
      } else { displayVal = String(val); }
      unused.push({ id, name: v.name, type: v.resolvedType, collection: col.name, value: displayVal });
    }
  }
  return { unused, total };
}

// ── Component Token Export ──────────────────────────────────────────────────

function collectComponentTokens(nodes: readonly BaseNode[]): Array<{
  variableId: string; name: string; type: string; value: string; property: string;
}> {
  const found = new Map<string, { variableId: string; name: string; type: string; value: string; property: string }>();

  const visitNode = (node: BaseNode) => {
    const bv = (node as any).boundVariables;
    if (bv) {
      for (const [prop, binding] of Object.entries(bv)) {
        if (!binding || Array.isArray(binding)) continue;
        const b = binding as any;
        if (b.type !== 'VARIABLE_ALIAS' || found.has(b.id)) continue;
        const v = figma.variables.getVariableById(b.id);
        if (!v) continue;
        const val = v.valuesByMode[Object.keys(v.valuesByMode)[0]];
        let displayVal = '';
        if (v.resolvedType === 'COLOR' && val && typeof val === 'object' && 'r' in val) {
          displayVal = rgbToHex((val as any).r, (val as any).g, (val as any).b);
        } else { displayVal = String(val); }
        found.set(b.id, { variableId: b.id, name: v.name, type: v.resolvedType, value: displayVal, property: prop });
      }
    }
    for (const paintProp of ['fills', 'strokes']) {
      const arr = (node as any)[paintProp];
      if (!Array.isArray(arr)) continue;
      for (const paint of arr) {
        const paintBv = (paint as any).boundVariables;
        if (!paintBv) continue;
        for (const [, b] of Object.entries(paintBv)) {
          const binding = b as any;
          if (!binding || binding.type !== 'VARIABLE_ALIAS' || found.has(binding.id)) continue;
          const v = figma.variables.getVariableById(binding.id);
          if (!v) continue;
          const val = v.valuesByMode[Object.keys(v.valuesByMode)[0]];
          let displayVal = '';
          if (v.resolvedType === 'COLOR' && val && typeof val === 'object' && 'r' in val) {
            displayVal = rgbToHex((val as any).r, (val as any).g, (val as any).b);
          } else { displayVal = String(val); }
          found.set(binding.id, { variableId: binding.id, name: v.name, type: v.resolvedType, value: displayVal, property: paintProp });
        }
      }
    }
    if ('children' in node) {
      for (const child of (node as ChildrenMixin).children) visitNode(child);
    }
  };

  for (const node of nodes) visitNode(node);
  return Array.from(found.values());
}

// ── Astro Component Map ─────────────────────────────────────────────────────

// All 43 components from https://github.com/bejamas/ui/tree/main/packages/ui/src/components
// Import paths use the shadcn copy-into-project pattern: npx bejamas@latest add <name>
const ASTRO_COMPONENT_MAP: Record<string, {
  component: string; importPath: string; variants?: string[]; example: string; description: string;
}> = {
  // Keys use the exact folder names from bejamas/ui for reliable matching
  'accordion': { component: 'Accordion', importPath: "import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/ui/accordion';", example: '<Accordion>\n  <AccordionItem value="item-1">\n    <AccordionTrigger>Title</AccordionTrigger>\n    <AccordionContent>Content</AccordionContent>\n  </AccordionItem>\n</Accordion>', description: 'Collapsible content sections' },
  'alert': { component: 'Alert', importPath: "import { Alert, AlertTitle, AlertDescription } from '@/ui/alert';", variants: ['default', 'destructive'], example: '<Alert>\n  <AlertTitle>Heads up!</AlertTitle>\n  <AlertDescription>Something important.</AlertDescription>\n</Alert>', description: 'Contextual feedback messages' },
  'avatar': { component: 'Avatar', importPath: "import { Avatar, AvatarImage, AvatarFallback, AvatarBadge, AvatarGroup } from '@/ui/avatar';", example: '<Avatar>\n  <AvatarImage src="/photo.png" />\n  <AvatarFallback>AB</AvatarFallback>\n</Avatar>', description: 'User profile image with fallback and group support' },
  'badge': { component: 'Badge', importPath: "import { Badge } from '@/ui/badge';", variants: ['default', 'secondary', 'destructive', 'outline'], example: '<Badge variant="default">New</Badge>', description: 'Small status descriptor label' },
  'breadcrumb': { component: 'Breadcrumb', importPath: "import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbSeparator } from '@/ui/breadcrumb';", example: '<Breadcrumb>\n  <BreadcrumbList>\n    <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>\n    <BreadcrumbSeparator />\n    <BreadcrumbItem>Page</BreadcrumbItem>\n  </BreadcrumbList>\n</Breadcrumb>', description: 'Navigation breadcrumb trail' },
  'button-group': { component: 'ButtonGroup', importPath: "import { ButtonGroup } from '@/ui/button-group';", example: '<ButtonGroup>\n  <Button>One</Button>\n  <Button>Two</Button>\n</ButtonGroup>', description: 'Visually grouped set of buttons' },
  'button': { component: 'Button', importPath: "import { Button } from '@/ui/button';", variants: ['default', 'secondary', 'outline', 'ghost', 'destructive', 'link'], example: '<Button variant="default" size="default">Click me</Button>', description: 'Interactive trigger (sizes: default, sm, lg, icon, icon-sm, icon-lg)' },
  'card': { component: 'Card', importPath: "import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, CardMedia, CardAction } from '@/ui/card';", example: '<Card>\n  <CardHeader>\n    <CardTitle>Title</CardTitle>\n    <CardDescription>Description</CardDescription>\n  </CardHeader>\n  <CardContent>Content</CardContent>\n  <CardFooter>Footer</CardFooter>\n</Card>', description: 'Sectioned content container' },
  'carousel': { component: 'Carousel', importPath: "import { Carousel, CarouselItem } from '@/ui/carousel';", example: '<Carousel>\n  <CarouselItem>Slide 1</CarouselItem>\n  <CarouselItem>Slide 2</CarouselItem>\n</Carousel>', description: 'Horizontally scrollable item carousel' },
  'checkbox': { component: 'Checkbox', importPath: "import { Checkbox } from '@/ui/checkbox';", example: '<label>\n  <Checkbox id="terms" />\n  Accept terms\n</label>', description: 'Binary selection checkbox' },
  'collapsible': { component: 'Collapsible', importPath: "import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/ui/collapsible';", example: '<Collapsible>\n  <CollapsibleTrigger>Toggle</CollapsibleTrigger>\n  <CollapsibleContent>Hidden content</CollapsibleContent>\n</Collapsible>', description: 'Show/hide content with a trigger' },
  'combobox': { component: 'Combobox', importPath: "import { Combobox } from '@/ui/combobox';", example: '<Combobox placeholder="Search..." />', description: 'Searchable select combobox' },
  'command': { component: 'Command', importPath: "import { Command, CommandInput, CommandList, CommandItem, CommandGroup } from '@/ui/command';", example: '<Command>\n  <CommandInput placeholder="Type a command..." />\n  <CommandList>\n    <CommandGroup heading="Suggestions">\n      <CommandItem>Action</CommandItem>\n    </CommandGroup>\n  </CommandList>\n</Command>', description: 'Command palette / search dialog' },
  'date': { component: 'DatePicker', importPath: "import { DatePicker } from '@/ui/date';", example: '<DatePicker />', description: 'Date picker input' },
  'dialog': { component: 'Dialog', importPath: "import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from '@/ui/dialog';", example: '<Dialog>\n  <DialogTrigger>Open</DialogTrigger>\n  <DialogContent>\n    <DialogHeader>\n      <DialogTitle>Title</DialogTitle>\n      <DialogDescription>Description</DialogDescription>\n    </DialogHeader>\n    <DialogFooter><DialogClose>Close</DialogClose></DialogFooter>\n  </DialogContent>\n</Dialog>', description: 'Modal dialog overlay' },
  'dropdown-menu': { component: 'DropdownMenu', importPath: "import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuLabel, DropdownMenuGroup } from '@/ui/dropdown-menu';", example: '<DropdownMenu>\n  <DropdownMenuTrigger>Open</DropdownMenuTrigger>\n  <DropdownMenuContent>\n    <DropdownMenuLabel>Label</DropdownMenuLabel>\n    <DropdownMenuSeparator />\n    <DropdownMenuItem>Item</DropdownMenuItem>\n  </DropdownMenuContent>\n</DropdownMenu>', description: 'Dropdown action menu' },
  'field': { component: 'Field', importPath: "import { Field, FieldLabel, FieldError } from '@/ui/field';", example: '<Field>\n  <FieldLabel>Email</FieldLabel>\n  <Input type="email" />\n  <FieldError>Invalid email</FieldError>\n</Field>', description: 'Form field wrapper with label and error' },
  'hover-card': { component: 'HoverCard', importPath: "import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/ui/hover-card';", example: '<HoverCard>\n  <HoverCardTrigger>Hover me</HoverCardTrigger>\n  <HoverCardContent>Preview content</HoverCardContent>\n</HoverCard>', description: 'Rich hover preview card' },
  'icon': { component: 'Icon', importPath: "import { Icon } from '@/ui/icon';", example: '<Icon name="arrow-right" />', description: 'Icon display component' },
  'input-group': { component: 'InputGroup', importPath: "import { InputGroup } from '@/ui/input-group';", example: '<InputGroup>\n  <span>@</span>\n  <Input placeholder="username" />\n</InputGroup>', description: 'Input with prefix/suffix addons' },
  'input': { component: 'Input', importPath: "import { Input } from '@/ui/input';", example: '<Input type="text" placeholder="Enter value..." />', description: 'Single-line text input' },
  'kbd': { component: 'Kbd', importPath: "import { Kbd } from '@/ui/kbd';", example: '<Kbd>⌘K</Kbd>', description: 'Keyboard shortcut display' },
  'label': { component: 'Label', importPath: "import { Label } from '@/ui/label';", example: '<Label for="field-id">Field label</Label>', description: 'Accessible form field label' },
  'link-group': { component: 'LinkGroup', importPath: "import { LinkGroup } from '@/ui/link-group';", example: '<LinkGroup>\n  <a href="/">Home</a>\n  <a href="/about">About</a>\n</LinkGroup>', description: 'Grouped set of links' },
  'marquee': { component: 'Marquee', importPath: "import { Marquee } from '@/ui/marquee';", example: '<Marquee>\n  <span>Scrolling content ·</span>\n</Marquee>', description: 'Continuously scrolling content strip' },
  'native-select': { component: 'NativeSelect', importPath: "import { NativeSelect } from '@/ui/native-select';", example: '<NativeSelect>\n  <option value="a">Option A</option>\n  <option value="b">Option B</option>\n</NativeSelect>', description: 'Styled native HTML select element' },
  'navigation-menu': { component: 'NavigationMenu', importPath: "import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from '@/ui/navigation-menu';", example: '<NavigationMenu>\n  <NavigationMenuList>\n    <NavigationMenuItem>\n      <NavigationMenuTrigger>Products</NavigationMenuTrigger>\n      <NavigationMenuContent>...</NavigationMenuContent>\n    </NavigationMenuItem>\n  </NavigationMenuList>\n</NavigationMenu>', description: 'Accessible top-level navigation menu' },
  'popover': { component: 'Popover', importPath: "import { Popover, PopoverTrigger, PopoverContent, PopoverClose, PopoverHeader, PopoverTitle, PopoverDescription } from '@/ui/popover';", example: '<Popover>\n  <PopoverTrigger>Open</PopoverTrigger>\n  <PopoverContent>\n    <PopoverHeader><PopoverTitle>Title</PopoverTitle></PopoverHeader>\n    Content\n  </PopoverContent>\n</Popover>', description: 'Floating anchored content panel' },
  'radio-group': { component: 'RadioGroup', importPath: "import { RadioGroup, RadioGroupItem } from '@/ui/radio-group';", example: '<RadioGroup defaultValue="a">\n  <label><RadioGroupItem value="a" /> Option A</label>\n  <label><RadioGroupItem value="b" /> Option B</label>\n</RadioGroup>', description: 'Single-select radio button group' },
  'select': { component: 'Select', importPath: "import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem, SelectGroup, SelectLabel } from '@/ui/select';", example: '<Select>\n  <SelectTrigger><SelectValue placeholder="Select..." /></SelectTrigger>\n  <SelectContent>\n    <SelectGroup>\n      <SelectLabel>Options</SelectLabel>\n      <SelectItem value="a">Option A</SelectItem>\n    </SelectGroup>\n  </SelectContent>\n</Select>', description: 'Dropdown select menu' },
  'separator': { component: 'Separator', importPath: "import { Separator } from '@/ui/separator';", example: '<Separator orientation="horizontal" />', description: 'Visual divider line' },
  'skeleton': { component: 'Skeleton', importPath: "import { Skeleton } from '@/ui/skeleton';", example: '<Skeleton class="h-4 w-48 rounded" />', description: 'Loading skeleton placeholder' },
  'slider': { component: 'Slider', importPath: "import { Slider } from '@/ui/slider';", example: '<Slider defaultValue={[50]} min={0} max={100} step={1} />', description: 'Range value slider' },
  'spinner': { component: 'Spinner', importPath: "import { Spinner } from '@/ui/spinner';", example: '<Spinner />', description: 'Loading spinner indicator' },
  'switch': { component: 'Switch', importPath: "import { Switch } from '@/ui/switch';", example: '<Switch id="toggle" />', description: 'Toggle on/off control' },
  'table': { component: 'Table', importPath: "import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell, TableFooter, TableCaption } from '@/ui/table';", example: '<Table>\n  <TableHeader><TableRow><TableHead>Name</TableHead></TableRow></TableHeader>\n  <TableBody><TableRow><TableCell>Value</TableCell></TableRow></TableBody>\n</Table>', description: 'Data table layout' },
  'tabs': { component: 'Tabs', importPath: "import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/ui/tabs';", example: '<Tabs defaultValue="tab1">\n  <TabsList><TabsTrigger value="tab1">Tab</TabsTrigger></TabsList>\n  <TabsContent value="tab1">Content</TabsContent>\n</Tabs>', description: 'Tabbed content navigation' },
  'textarea': { component: 'Textarea', importPath: "import { Textarea } from '@/ui/textarea';", example: '<Textarea placeholder="Enter text..." rows={4} />', description: 'Multi-line text input' },
  'toggle-group': { component: 'ToggleGroup', importPath: "import { ToggleGroup, ToggleGroupItem } from '@/ui/toggle-group';", example: '<ToggleGroup type="single">\n  <ToggleGroupItem value="a">A</ToggleGroupItem>\n  <ToggleGroupItem value="b">B</ToggleGroupItem>\n</ToggleGroup>', description: 'Group of mutually exclusive toggles' },
  'toggle': { component: 'Toggle', importPath: "import { Toggle } from '@/ui/toggle';", variants: ['default', 'outline'], example: '<Toggle>Bold</Toggle>', description: 'Togglable button state' },
  'tooltip': { component: 'Tooltip', importPath: "import { Tooltip, TooltipTrigger, TooltipContent } from '@/ui/tooltip';", example: '<Tooltip>\n  <TooltipTrigger>Hover me</TooltipTrigger>\n  <TooltipContent>Helpful text</TooltipContent>\n</Tooltip>', description: 'Hover information overlay' },
};

// Pre-sorted longest-key-first for substring matching — prevents "button" from
// stealing matches that belong to the more-specific "button-group".
const ASTRO_SORTED_KEYS = Object.entries(ASTRO_COMPONENT_MAP)
  .sort((a, b) => b[0].replace(/[-_]/g, '').length - a[0].replace(/[-_]/g, '').length);

function matchComponentName(name: string): (typeof ASTRO_COMPONENT_MAP[string] & { matchedKey: string }) | null {
  // Strip hyphens/spaces/slashes so "Button Group", "button-group", "ButtonGroup" all normalize to "buttongroup"
  const lower = name.toLowerCase().replace(/[-_\s\/]/g, '');
  // Check longer keys first (toggle-group before toggle, button-group before button, etc.)
  for (const [key, info] of ASTRO_SORTED_KEYS) {
    const keyNorm = key.replace(/[-_]/g, '');
    if (lower === keyNorm || lower.includes(keyNorm)) {
      return { ...info, matchedKey: key };
    }
  }
  return null;
}

type ComponentMatchResult = (typeof ASTRO_COMPONENT_MAP[string] & { matchedKey: string }) | null;

function getComponentMap(nodes: ReadonlyArray<SceneNode>): Array<{
  figmaName: string; nodeId: string; nodeType: string;
  match: ComponentMatchResult;
}> {
  const seen = new Set<string>();
  const results: Array<{ figmaName: string; nodeId: string; nodeType: string; match: ComponentMatchResult }> = [];

  const effectiveName = (node: BaseNode): string => {
    if (node.type === 'INSTANCE') {
      const mc = (node as InstanceNode).mainComponent;
      if (mc) {
        const parent = mc.parent;
        if (parent && parent.type === 'COMPONENT_SET') return parent.name;
        return mc.name;
      }
      return (node as SceneNode).name;
    }
    if (node.type === 'COMPONENT') {
      const parent = (node as ComponentNode).parent;
      if (parent && parent.type === 'COMPONENT_SET') return parent.name;
      return node.name;
    }
    return (node as SceneNode).name;
  };

  const visit = (node: BaseNode) => {
    const isComponent = node.type === 'COMPONENT' || node.type === 'COMPONENT_SET' || node.type === 'INSTANCE';
    const isFrame = node.type === 'FRAME';
    if (isComponent || isFrame) {
      const rawName = effectiveName(node);
      const nameKey = rawName.toLowerCase();
      const match = matchComponentName(rawName);
      if (!seen.has(nameKey) && (isComponent || match)) {
        seen.add(nameKey);
        results.push({ figmaName: rawName, nodeId: node.id, nodeType: node.type, match });
      }
    }
    if ('children' in node && node.type !== 'INSTANCE') {
      for (const child of (node as ChildrenMixin).children) visit(child);
    }
  };

  for (const node of nodes) visit(node);
  return results;
}

// ── End feature functions ───────────────────────────────────────────────────

figma.ui.onmessage = async (msg) => {
  if (msg.type === 'get-dashboard-data') {
    try {
      const variables = await getFigmaVariables();

      // Per-file storage: each Figma file has its own GitHub config
      const stored = figma.root.getPluginData('githubConfig');
      const githubConfig = stored ? JSON.parse(stored) : null;

      figma.ui.postMessage({
        type: 'dashboard-data',
        data: {
          variableCount: variables.length,
          githubConnected: !!githubConfig,
          githubRepo: githubConfig ? `${githubConfig.owner}/${githubConfig.repo}` : null
        }
      });

      if (githubConfig) {
        figma.ui.postMessage({
          type: 'github-config-loaded',
          config: githubConfig
        });
      }
    } catch (error) {
      figma.ui.postMessage({
        type: 'error',
        error: String(error)
      });
    }
  }

  if (msg.type === 'save-github-config') {
    try {
      // Store per-file so each Figma file has its own GitHub connection
      figma.root.setPluginData('githubConfig', JSON.stringify(msg.config));
      figma.notify('GitHub settings saved for this file');
    } catch (error) {
      figma.ui.postMessage({
        type: 'error',
        error: String(error)
      });
    }
  }

  if (msg.type === 'export-tokens') {
    try {
      const allCollections = await figma.variables.getLocalVariableCollectionsAsync();
      const filterIds: string[] | undefined = Array.isArray(msg.collectionIds) ? msg.collectionIds : undefined;
      const collections = filterIds && filterIds.length > 0
        ? allCollections.filter(c => filterIds.indexOf(c.id) !== -1)
        : allCollections;

      const exportData: any = {};

      for (const collection of collections) {
        for (const variableId of collection.variableIds) {
          const variable = figma.variables.getVariableById(variableId);
          if (variable) {
            const defaultMode = collection.modes[0].modeId;
            const value = variable.valuesByMode[defaultMode];

            let formattedValue = value;
            if (variable.resolvedType === 'COLOR' && typeof value === 'object') {
              const r = Math.round((value as any).r * 255);
              const g = Math.round((value as any).g * 255);
              const b = Math.round((value as any).b * 255);
              formattedValue = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
            }

            const parts = variable.name.split('/');
            let current = exportData;
            for (let i = 0; i < parts.length - 1; i++) {
              if (!current[parts[i]]) {
                current[parts[i]] = {};
              }
              current = current[parts[i]];
            }

            const lastPart = parts[parts.length - 1];
            current[lastPart] = {
              $value: formattedValue,
              $type: variable.resolvedType === 'COLOR' ? 'color' :
                     variable.resolvedType === 'FLOAT' ? 'number' :
                     variable.resolvedType === 'BOOLEAN' ? 'boolean' : 'string'
            };
          }
        }
      }

      const jsonString = JSON.stringify(exportData, null, 2);
      figma.ui.postMessage({
        type: 'download-json',
        json: jsonString,
        filename: 'figma-tokens.json'
      });

      figma.notify('Tokens exported successfully');
    } catch (error) {
      figma.ui.postMessage({
        type: 'error',
        error: String(error)
      });
    }
  }

  if (msg.type === 'get-tokens-for-push') {
    try {
      const collections = await figma.variables.getLocalVariableCollectionsAsync();
      const exportData: any = {};

      for (const collection of collections) {
        for (const variableId of collection.variableIds) {
          const variable = figma.variables.getVariableById(variableId);
          if (variable) {
            const defaultMode = collection.modes[0].modeId;
            const value = variable.valuesByMode[defaultMode];

            let formattedValue = value;
            if (variable.resolvedType === 'COLOR' && typeof value === 'object') {
              const r = Math.round((value as any).r * 255);
              const g = Math.round((value as any).g * 255);
              const b = Math.round((value as any).b * 255);
              formattedValue = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
            }

            const parts = variable.name.split('/');
            let current = exportData;
            for (let i = 0; i < parts.length - 1; i++) {
              if (!current[parts[i]]) current[parts[i]] = {};
              current = current[parts[i]];
            }

            const lastPart = parts[parts.length - 1];
            current[lastPart] = {
              $value: formattedValue,
              $type: variable.resolvedType === 'COLOR' ? 'color' :
                     variable.resolvedType === 'FLOAT' ? 'number' :
                     variable.resolvedType === 'BOOLEAN' ? 'boolean' : 'string'
            };
          }
        }
      }

      figma.ui.postMessage({
        type: 'tokens-ready-for-push',
        json: JSON.stringify(exportData, null, 2)
      });
    } catch (error) {
      figma.ui.postMessage({
        type: 'error',
        error: String(error)
      });
    }
  }

  if (msg.type === 'get-variables') {
    try {
      const variables = await getFigmaVariables();
      figma.ui.postMessage({
        type: 'figma-variables',
        variables
      });
    } catch (error) {
      figma.ui.postMessage({
        type: 'error',
        error: String(error)
      });
    }
  }

  if (msg.type === 'get-collections') {
    try {
      const collections = await figma.variables.getLocalVariableCollectionsAsync();
      const result = collections.map(collection => {
        const defaultMode = collection.modes[0].modeId;
        const variables = collection.variableIds.map(id => {
          const v = figma.variables.getVariableById(id);
          if (!v) return null;
          const value = v.valuesByMode[defaultMode];
          let displayValue: any = value;
          if (v.resolvedType === 'COLOR' && typeof value === 'object') {
            const r = Math.round((value as any).r * 255);
            const g = Math.round((value as any).g * 255);
            const b = Math.round((value as any).b * 255);
            displayValue = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
          } else if (typeof value === 'number') {
            displayValue = value;
          } else if (typeof value === 'boolean') {
            displayValue = value;
          } else {
            displayValue = String(value);
          }
          return { id: v.id, name: v.name, type: v.resolvedType, value: displayValue };
        }).filter(Boolean);
        return { id: collection.id, name: collection.name, variables };
      });
      figma.ui.postMessage({ type: 'collections-data', collections: result });
    } catch (error) {
      figma.ui.postMessage({ type: 'error', error: String(error) });
    }
  }

  if (msg.type === 'move-variables') {
    try {
      const collections = await figma.variables.getLocalVariableCollectionsAsync();
      const targetCollection = collections.find(c => c.id === msg.targetCollectionId);
      if (!targetCollection) throw new Error('Target collection not found');

      const variableIds: string[] = Array.isArray(msg.variableIds) ? msg.variableIds : [msg.variableIds];

      // Step 1: Create new variables in target, preserving metadata and per-mode values.
      // Build a remap of oldId → newVar so we can rebind every reference in step 2.
      const remapping = new Map<string, Variable>();
      const oldVariables: Variable[] = [];

      for (const variableId of variableIds) {
        const variable = await figma.variables.getVariableByIdAsync(variableId);
        if (!variable) continue;
        const sourceCollection = collections.find(c => c.variableIds.includes(variableId));
        if (!sourceCollection || sourceCollection.id === targetCollection.id) continue;

        const newVar = figma.variables.createVariable(variable.name, targetCollection, variable.resolvedType);

        try { if (variable.description) newVar.description = variable.description; } catch {}
        try { newVar.hiddenFromPublishing = variable.hiddenFromPublishing; } catch {}
        try { newVar.scopes = variable.scopes; } catch {}
        try {
          const cs: any = (variable as any).codeSyntax;
          if (cs) {
            if (cs.WEB) newVar.setVariableCodeSyntax('WEB', cs.WEB);
            if (cs.ANDROID) newVar.setVariableCodeSyntax('ANDROID', cs.ANDROID);
            if (cs.iOS) newVar.setVariableCodeSyntax('iOS', cs.iOS);
          }
        } catch {}

        // Copy each source-mode value to the target mode with the same name; fall back to default.
        for (const sMode of sourceCollection.modes) {
          const val = variable.valuesByMode[sMode.modeId];
          if (val === undefined) continue;
          const match = targetCollection.modes.find(m => m.name.toLowerCase() === sMode.name.toLowerCase());
          const targetModeId = (match || targetCollection.modes[0]).modeId;
          try { newVar.setValueForMode(targetModeId, val); } catch {}
        }

        remapping.set(variable.id, newVar);
        oldVariables.push(variable);
      }

      if (remapping.size === 0) {
        figma.ui.postMessage({ type: 'variables-moved', moved: 0, rebound: null });
        return;
      }

      figma.notify('Rebinding references…');

      // Step 2: Walk the document and rebind every reference from old ids to new variables.
      const rebound = await rebindAllReferences(remapping);

      // Step 3: Now safe to remove the originals.
      for (const v of oldVariables) {
        try { v.remove(); } catch {}
      }

      const movedCount = remapping.size;
      figma.notify(`Moved ${movedCount} variable${movedCount !== 1 ? 's' : ''} — rebound ${rebound.nodes} node${rebound.nodes !== 1 ? 's' : ''}, ${rebound.variables} alias${rebound.variables !== 1 ? 'es' : ''}`);
      figma.ui.postMessage({ type: 'variables-moved', moved: movedCount, rebound });
    } catch (error) {
      figma.ui.postMessage({ type: 'error', error: String(error) });
    }
  }

  if (msg.type === 'get-create-data') {
    figma.ui.postMessage({
      type: 'create-data',
      styles: STYLES,
      themes: THEMES.map(t => ({ name: t.name, title: t.title, isBase: BASE_THEMES.indexOf(t.name) !== -1 }))
    });
  }

  if (msg.type === 'page-audit') {
    try { await runPageAudit(); } catch (error) { figma.ui.postMessage({ type: 'error', error: String(error) }); }
    return;
  }

  if (msg.type === 'find-unused-variables') {
    try {
      const result = await findUnusedVariables();
      figma.ui.postMessage({ type: 'unused-variables-result', ...result });
    } catch (error) { figma.ui.postMessage({ type: 'error', error: String(error) }); }
    return;
  }

  if (msg.type === 'delete-variables') {
    try {
      const ids: string[] = msg.variableIds || [];
      let deleted = 0;
      for (const id of ids) {
        try { const v = figma.variables.getVariableById(id); if (v) { v.remove(); deleted++; } } catch {}
      }
      figma.notify(`Deleted ${deleted} variable${deleted !== 1 ? 's' : ''}`);
      const result = await findUnusedVariables();
      figma.ui.postMessage({ type: 'unused-variables-result', ...result });
    } catch (error) { figma.ui.postMessage({ type: 'error', error: String(error) }); }
    return;
  }

  if (msg.type === 'export-component-tokens') {
    try {
      const selection = figma.currentPage.selection;
      if (selection.length === 0) {
        figma.ui.postMessage({ type: 'component-tokens-result', groups: [], selectionName: '' });
        return;
      }
      const groups = selection.map(node => ({
        name: node.name,
        nodeId: node.id,
        tokens: collectComponentTokens([node])
      }));
      const selectionName = selection.length === 1 ? selection[0].name : `${selection.length} components`;
      figma.ui.postMessage({ type: 'component-tokens-result', groups, selectionName });
    } catch (error) { figma.ui.postMessage({ type: 'error', error: String(error) }); }
    return;
  }

  if (msg.type === 'get-component-map') {
    try {
      const selection = figma.currentPage.selection;
      const source = selection.length > 0 ? selection : figma.currentPage.children;
      const components = getComponentMap(source as ReadonlyArray<SceneNode>);
      figma.ui.postMessage({ type: 'component-map-result', components, scannedPage: selection.length === 0 });
    } catch (error) { figma.ui.postMessage({ type: 'error', error: String(error) }); }
    return;
  }

  if (msg.type === 'navigate-to-node') {
    try {
      const node = figma.getNodeById(msg.nodeId);
      if (node && node.type !== 'DOCUMENT' && node.type !== 'PAGE') {
        const sceneNode = node as SceneNode;
        if (sceneNode.parent && 'type' in sceneNode.parent) {
          figma.currentPage.selection = [sceneNode];
          figma.viewport.scrollAndZoomIntoView([sceneNode]);
        }
      }
    } catch {}
    return;
  }

  if (msg.type === 'activate-inspect') {
    inspectScreenActive = true;
    await runSelectionCheck();
    return;
  }

  if (msg.type === 'deactivate-inspect') {
    inspectScreenActive = false;
    return;
  }

  if (msg.type === 'check-selection') {
    if (msg.themeName) currentThemeName = msg.themeName;
    await runSelectionCheck();
    return;
  }

  if (msg.type === 'fix-issue') {
    try {
      await fixSingleIssue(msg.nodeId, msg.propertyRaw, msg.status, msg.variableName, currentThemeName);
      await runSelectionCheck();
    } catch (error) {
      figma.ui.postMessage({ type: 'error', error: String(error) });
    }
    return;
  }

  if (msg.type === 'fix-all-issues') {
    try {
      const fixes: any[] = msg.fixes || [];
      for (const fix of fixes) {
        try { await fixSingleIssue(fix.nodeId, fix.propertyRaw, fix.status, fix.variableName, currentThemeName); } catch {}
      }
      await runSelectionCheck();
    } catch (error) {
      figma.ui.postMessage({ type: 'error', error: String(error) });
    }
    return;
  }

  if (msg.type === 'apply-theme') {
    try {
      const themeName: string = msg.themeName;
      currentThemeName = themeName;
      const lightBlock = buildThemeBlock(themeName, 'light');
      const darkBlock = buildThemeBlock(themeName, 'dark');

      if (Object.keys(lightBlock).length === 0) {
        throw new Error('Theme "' + themeName + '" not found');
      }

      const collections = await figma.variables.getLocalVariableCollectionsAsync();
      let updated = 0;
      let darkModeBlocked = false;
      const unmatched: string[] = [];
      const tokenNames = Object.keys(lightBlock);

      for (const collection of collections) {
        // Determine which mode receives light vs dark values
        const lightModes: string[] = [];
        const darkModes: string[] = [];
        const otherModes: string[] = [];
        for (const mode of collection.modes) {
          const n = mode.name.toLowerCase();
          if (n.indexOf('dark') !== -1) darkModes.push(mode.modeId);
          else if (n.indexOf('light') !== -1) lightModes.push(mode.modeId);
          else otherModes.push(mode.modeId);
        }
        // If there's no explicit light mode, default mode receives light values
        if (lightModes.length === 0 && otherModes.length > 0) {
          lightModes.push(otherModes[0]);
        }

        // Build a name → variable map for fast lookups (case-insensitive, last-segment match)
        const colorVars: { variable: Variable; key: string }[] = [];
        for (const id of collection.variableIds) {
          const v = await figma.variables.getVariableByIdAsync(id);
          if (!v || v.resolvedType !== 'COLOR') continue;
          const last = v.name.split('/').pop() || v.name;
          colorVars.push({ variable: v, key: last.toLowerCase() });
        }

        for (const tokenName of tokenNames) {
          const matching = colorVars.filter(cv => cv.key === tokenName.toLowerCase());
          if (matching.length === 0) continue;

          const lightRgb = colorValueToRgb(lightBlock[tokenName]);
          const darkRgb = colorValueToRgb(darkBlock[tokenName] || lightBlock[tokenName]);

          const firstModeId = collection.modes[0].modeId;
          for (const { variable } of matching) {
            if (lightRgb) {
              let wroteLight = false;
              for (const modeId of lightModes) {
                try { variable.setValueForMode(modeId, lightRgb); wroteLight = true; } catch {}
              }
              // Free-plan fallback: if the named light mode was inaccessible, write to mode[0]
              if (!wroteLight) {
                try { variable.setValueForMode(firstModeId, lightRgb); } catch {}
              }
            }
            if (darkRgb) {
              for (const modeId of darkModes) {
                try { variable.setValueForMode(modeId, darkRgb); } catch { darkModeBlocked = true; }
              }
            }
            updated++;
          }
        }
      }

      // Report which token names had no Figma variable to update
      for (const tokenName of tokenNames) {
        if (!colorValueToRgb(lightBlock[tokenName])) continue; // skip non-color (e.g. "radius")
        let found = false;
        for (const c of collections) {
          for (const id of c.variableIds) {
            const v = await figma.variables.getVariableByIdAsync(id);
            if (v && v.resolvedType === 'COLOR' && (v.name.split('/').pop() || v.name).toLowerCase() === tokenName.toLowerCase()) {
              found = true; break;
            }
          }
          if (found) break;
        }
        if (!found) unmatched.push(tokenName);
      }

      // Apply style-driven radius override. The chosen style sets the LG anchor
      // (`--radius` in bejamas/ui CSS); other sizes follow bejamas's actual calc() formulas:
      //   sm = lg - 4, md = lg - 2, lg = anchor, xl = lg + 4, 2xl = lg + 8, 3xl = lg + 16
      // `xs` isn't defined by bejamas — extrapolated linearly (sm - 2) so it stays distinct.
      // Negative results clamp to 0 (a radius can't be negative); positives pass through, so
      // Lyra's xl/2xl/3xl correctly end up at 4/8/16 even though lg = 0.
      const SIZE_OFFSETS: Record<string, number> = {
        xs: -6, sm: -4, md: -2, lg: 0, xl: 4, '2xl': 8, '3xl': 16,
        small: -4, medium: -2, large: 0
      };
      const NEUTRAL_SIZES = new Set(['none', 'full', 'round', 'pill', 'circle']);
      const SIZE_REGEX = /(?:^|[^a-z0-9])(3xl|2xl|xl|lg|md|sm|xs|small|medium|large|none|full|round|pill|circle)(?:$|[^a-z0-9])/i;

      let radiusUpdated = 0;
      let radiusFailed = 0;
      let radiusFloatCount = 0;
      let radiusNameMatched = 0;
      const radiusSamples: string[] = [];
      const radiusFailures: string[] = [];
      const floatSamples: string[] = [];
      const styleName: string | undefined = msg.styleName;
      const radiusBase = styleName ? STYLE_RADIUS[styleName] : null;

      if (radiusBase !== null && radiusBase !== undefined) {
        for (const collection of collections) {
          for (const id of collection.variableIds) {
            const v = await figma.variables.getVariableByIdAsync(id);
            if (!v || v.resolvedType !== 'FLOAT') continue;
            radiusFloatCount++;
            if (floatSamples.length < 8) floatSamples.push(v.name);

            const lower = v.name.toLowerCase();
            if (lower.indexOf('radius') === -1 && lower.indexOf('rounded') === -1) continue;
            radiusNameMatched++;

            const sizeMatch = lower.match(SIZE_REGEX);
            const size = sizeMatch ? sizeMatch[1] : null;
            if (size && NEUTRAL_SIZES.has(size)) continue;

            const offset = (size && SIZE_OFFSETS[size] !== undefined) ? SIZE_OFFSETS[size] : 0;
            const target = Math.max(0, radiusBase + offset);

            let wroteOne = false;
            for (const mode of collection.modes) {
              try {
                v.setValueForMode(mode.modeId, target);
                wroteOne = true;
              } catch (e) {
                if (radiusFailures.length < 5) radiusFailures.push(v.name + ' [' + mode.name + ']: ' + String(e));
              }
            }
            if (wroteOne) {
              radiusUpdated++;
              if (radiusSamples.length < 8) radiusSamples.push(v.name + ' → ' + target);
            } else {
              radiusFailed++;
            }
          }
        }
      }

      const parts: string[] = [updated + ' color variable' + (updated !== 1 ? 's' : '')];
      if (radiusUpdated > 0) parts.push(radiusUpdated + ' radius variable' + (radiusUpdated !== 1 ? 's' : ''));
      if (darkModeBlocked) parts.push('dark mode skipped (free plan)');
      figma.notify('Applied "' + themeName + '" — ' + parts.join(', '));
      figma.ui.postMessage({
        type: 'apply-theme-complete',
        updated, radiusUpdated, radiusFailed, radiusFloatCount, radiusNameMatched,
        radiusSamples, radiusFailures, floatSamples, unmatched, darkModeBlocked
      });
    } catch (error) {
      figma.ui.postMessage({ type: 'error', error: String(error) });
    }
  }

  if (msg.type === 'get-text-styles') {
    try {
      const tokens = await buildTypographyTokens();
      figma.ui.postMessage({ type: 'text-styles-data', tokens });
    } catch (error) {
      figma.ui.postMessage({ type: 'error', error: String(error) });
    }
  }

  if (msg.type === 'export-text-styles') {
    try {
      const tokens = await buildTypographyTokens();
      figma.ui.postMessage({
        type: 'download-json',
        json: JSON.stringify(tokens, null, 2),
        filename: 'figma-typography.json'
      });
      figma.notify('Text styles exported');
    } catch (error) {
      figma.ui.postMessage({ type: 'error', error: String(error) });
    }
  }

  if (msg.type === 'import-text-styles') {
    try {
      const flat = flattenTypography(msg.tokens);
      const names = Object.keys(flat);
      if (names.length === 0) {
        figma.ui.postMessage({ type: 'error', error: 'No typography tokens found in JSON.' });
        return;
      }

      // Pre-load every (family, style) pair we'll need
      const fontPairs = new Set<string>();
      for (const name of names) {
        const v = flat[name];
        if (v && v.fontFamily && v.fontWeight) {
          fontPairs.add(JSON.stringify({ family: String(v.fontFamily), style: String(v.fontWeight) }));
        }
      }
      const loadedFonts = new Set<string>();
      await Promise.all(Array.from(fontPairs).map(async (key) => {
        const fn = JSON.parse(key);
        try {
          await figma.loadFontAsync(fn);
          loadedFonts.add(key);
        } catch (e) {
          // Font unavailable on this machine — styles using it will be skipped
        }
      }));

      const existing = await figma.getLocalTextStylesAsync();
      const byName = new Map<string, TextStyle>();
      existing.forEach((s) => byName.set(s.name, s));

      let created = 0;
      let updated = 0;
      let skipped = 0;
      const errors: string[] = [];

      for (const name of names) {
        const val = flat[name];
        try {
          const requiredFontKey = val.fontFamily && val.fontWeight
            ? JSON.stringify({ family: String(val.fontFamily), style: String(val.fontWeight) })
            : null;

          if (requiredFontKey && !loadedFonts.has(requiredFontKey)) {
            errors.push(`${name}: font "${val.fontFamily} ${val.fontWeight}" not available`);
            skipped++;
            continue;
          }

          let style = byName.get(name);
          let isNew = false;
          if (!style) {
            style = figma.createTextStyle();
            style.name = name;
            isNew = true;
          }
          applyTypography(style, val);
          if (isNew) created++; else updated++;
        } catch (e) {
          errors.push(`${name}: ${String(e)}`);
          skipped++;
        }
      }

      figma.notify(`Typography: ${created} created, ${updated} updated${skipped ? `, ${skipped} skipped` : ''}`);
      figma.ui.postMessage({
        type: 'typography-import-complete',
        results: { created, updated, skipped, errors }
      });
    } catch (error) {
      figma.ui.postMessage({ type: 'error', error: String(error) });
    }
  }

  if (msg.type === 'replace-tokens') {
    try {
      const results = await processTokens(msg.tokens);
      figma.ui.postMessage({
        type: 'replace-complete',
        results
      });
    } catch (error) {
      figma.ui.postMessage({
        type: 'error',
        error: String(error)
      });
    }
  }

  if (msg.type === 'find-duplicate-tokens') {
    try {
      const collections = await figma.variables.getLocalVariableCollectionsAsync();
      const varMap = new Map<string, Variable>();
      const colNameMap = new Map<string, string>();
      for (const col of collections) {
        colNameMap.set(col.id, col.name);
        for (const varId of col.variableIds) {
          const v = await figma.variables.getVariableByIdAsync(varId);
          if (v) varMap.set(v.id, v);
        }
      }

      function resolveValue(v: Variable): any {
        const modeId = Object.keys(v.valuesByMode)[0];
        if (!modeId) return null;
        let cur: any = v.valuesByMode[modeId];
        let safety = 0;
        while (cur && typeof cur === 'object' && cur.type === 'VARIABLE_ALIAS' && safety++ < 20) {
          const target = varMap.get(cur.id);
          if (!target) break;
          cur = target.valuesByMode[Object.keys(target.valuesByMode)[0]];
        }
        return cur;
      }

      function valueKey(raw: any, type: string): string {
        if (raw === null || raw === undefined) return '';
        if (type === 'COLOR' && typeof raw === 'object' && 'r' in raw) {
          const r = Math.round(raw.r * 255), g = Math.round(raw.g * 255), b = Math.round(raw.b * 255);
          const a = raw.a !== undefined ? Math.round(raw.a * 1000) / 1000 : 1;
          return `color:${r},${g},${b},${a}`;
        }
        return String(raw);
      }

      function displayValue(key: string, type: string): string {
        if (key.startsWith('color:')) {
          const [r, g, b] = key.slice(6).split(',').map(Number);
          return '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');
        }
        return key;
      }

      const byValue = new Map<string, any[]>();
      for (const [, v] of varMap) {
        const raw = resolveValue(v);
        const key = valueKey(raw, v.resolvedType);
        if (!key) continue;
        if (!byValue.has(key)) byValue.set(key, []);
        byValue.get(key)!.push({
          id: v.id,
          name: v.name,
          collection: colNameMap.get(v.variableCollectionId) || '',
          type: v.resolvedType,
        });
      }

      const groups = [];
      for (const [key, vars] of byValue) {
        if (vars.length >= 2) {
          groups.push({ value: displayValue(key, vars[0].type), type: vars[0].type, variables: vars });
        }
      }
      groups.sort((a, b) => b.variables.length - a.variables.length);
      figma.ui.postMessage({ type: 'duplicate-tokens-result', groups });
    } catch (error) {
      figma.ui.postMessage({ type: 'error', error: String(error) });
    }
  }

if (msg.type === 'get-all-variables-for-diff') {
    try {
      const collections = await figma.variables.getLocalVariableCollectionsAsync();
      const variables: any[] = [];
      for (const col of collections) {
        const modeId = col.modes[0].modeId;
        for (const varId of col.variableIds) {
          const v = await figma.variables.getVariableByIdAsync(varId);
          if (!v) continue;
          const raw = v.valuesByMode[modeId];
          let displayValue: string;
          if (v.resolvedType === 'COLOR' && typeof raw === 'object' && raw && 'r' in raw) {
            const r = Math.round((raw as any).r * 255), g = Math.round((raw as any).g * 255), b = Math.round((raw as any).b * 255);
            displayValue = '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');
          } else if (raw && typeof raw === 'object' && (raw as any).type === 'VARIABLE_ALIAS') {
            displayValue = `alias:${(raw as any).id}`;
          } else {
            displayValue = String(raw ?? '');
          }
          variables.push({ name: v.name, collection: col.name, type: v.resolvedType, value: displayValue });
        }
      }
      figma.ui.postMessage({ type: 'all-variables-for-diff', variables });
    } catch (error) {
      figma.ui.postMessage({ type: 'error', error: String(error) });
    }
  }

  if (msg.type === 'cancel') {
    figma.closePlugin();
  }
};
