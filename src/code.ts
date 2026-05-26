// This file runs in the Figma plugin sandbox
// It has access to the Figma API but not to browser APIs

import { THEMES, STYLES, BASE_THEMES, DEFAULT_BASE, STYLE_RADIUS } from './create-data';

figma.showUI(__html__, { width: 450, height: 600 });

function getDesignExportBaseName(): string {
  const normalized = figma.root.name
    .trim()
    .toLowerCase()
    .replace(/["']/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

  return normalized || 'figma';
}

function getDesignExportFileName(kind: 'tokens' | 'typography'): string {
  return `${getDesignExportBaseName()}-${kind}.json`;
}

interface TokenValue {
  value: string | number;
  type?: string;
  $value?: string | number;
  $type?: string;
}

interface Tokens {
  [key: string]: TokenValue | Tokens;
}

function hexToRgb(hex: string): RGBA | null {
  const normalized = hex.trim().replace(/^#/, '');

  if (!/^[a-f\d]{3,4}$|^[a-f\d]{6}$|^[a-f\d]{8}$/i.test(normalized)) {
    return null;
  }

  const expanded = normalized.length === 3 || normalized.length === 4
    ? normalized.split('').map((char) => char + char).join('')
    : normalized;

  return {
    r: parseInt(expanded.slice(0, 2), 16) / 255,
    g: parseInt(expanded.slice(2, 4), 16) / 255,
    b: parseInt(expanded.slice(4, 6), 16) / 255,
    a: expanded.length === 8 ? parseInt(expanded.slice(6, 8), 16) / 255 : 1,
  };
}

function rgbToHex(value: RGB | RGBA): string {
  const r = Math.round(value.r * 255);
  const g = Math.round(value.g * 255);
  const b = Math.round(value.b * 255);
  const alpha = 'a' in value && typeof value.a === 'number' ? Math.round(value.a * 255) : 255;
  const hex = [r, g, b].map((channel) => channel.toString(16).padStart(2, '0')).join('');

  return alpha < 255
    ? `#${hex}${alpha.toString(16).padStart(2, '0')}`
    : `#${hex}`;
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
            v.setValueForMode(modeId, { type: 'VARIABLE_ALIAS', id: nv.id });
            stats.variables++;
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

function formatVariableValue(variable: Variable, value: VariableValue): string | number | boolean {
  if (variable.resolvedType === 'COLOR' && typeof value === 'object') {
    return rgbToHex(value as RGB | RGBA);
  }

  return value as string | number | boolean;
}

function getTokenType(variable: Variable): string {
  return variable.resolvedType === 'COLOR' ? 'color' :
         variable.resolvedType === 'FLOAT' ? 'number' :
         variable.resolvedType === 'BOOLEAN' ? 'boolean' : 'string';
}

function setNestedTokenValue(target: Record<string, any>, variableName: string, token: Record<string, any>) {
  const parts = variableName.split('/');
  let current = target;

  for (let i = 0; i < parts.length - 1; i++) {
    if (!current[parts[i]]) {
      current[parts[i]] = {};
    }
    current = current[parts[i]];
  }

  current[parts[parts.length - 1]] = token;
}

async function buildVariableExportData(collections?: VariableCollection[]): Promise<any> {
  const sourceCollections = collections || await figma.variables.getLocalVariableCollectionsAsync();
  const hasMultiModeCollection = sourceCollections.some((collection) => collection.modes.length > 1);

  if (!hasMultiModeCollection) {
    const exportData: Record<string, any> = {};

    for (const collection of sourceCollections) {
      const defaultMode = collection.modes[0]?.modeId;
      if (!defaultMode) continue;

      for (const variableId of collection.variableIds) {
        const variable = figma.variables.getVariableById(variableId);
        if (!variable) continue;

        const value = variable.valuesByMode[defaultMode];
        if (value === undefined) continue;
        setNestedTokenValue(exportData, variable.name, {
          $value: formatVariableValue(variable, value),
          $type: getTokenType(variable)
        });
      }
    }

    return exportData;
  }

  const exportData: Array<Record<string, any>> = [];

  for (const collection of sourceCollections) {
    const collectionData: Record<string, any> = { modes: {} };

    for (const mode of collection.modes) {
      const modeData: Record<string, any> = {};

      for (const variableId of collection.variableIds) {
        const variable = figma.variables.getVariableById(variableId);
        if (!variable) continue;

        const value = variable.valuesByMode[mode.modeId];
        if (value === undefined) continue;
        setNestedTokenValue(modeData, variable.name, {
          $value: formatVariableValue(variable, value),
          $type: getTokenType(variable)
        });
      }

      collectionData.modes[mode.name] = modeData;
    }

    exportData.push({ [collection.name]: collectionData });
  }

  return exportData;
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

      const exportData = await buildVariableExportData(collections);

      const jsonString = JSON.stringify(exportData, null, 2);
      figma.ui.postMessage({
        type: 'download-json',
        json: jsonString,
        filename: getDesignExportFileName('tokens')
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
      const exportData = await buildVariableExportData();

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
            displayValue = rgbToHex(value as RGB | RGBA);
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

  if (msg.type === 'apply-theme') {
    try {
      const themeName: string = msg.themeName;
      const lightBlock = buildThemeBlock(themeName, 'light');
      const darkBlock = buildThemeBlock(themeName, 'dark');

      if (Object.keys(lightBlock).length === 0) {
        throw new Error('Theme "' + themeName + '" not found');
      }

      const collections = await figma.variables.getLocalVariableCollectionsAsync();
      let updated = 0;
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

          for (const { variable } of matching) {
            if (lightRgb) {
              for (const modeId of lightModes) variable.setValueForMode(modeId, lightRgb);
            }
            if (darkRgb) {
              for (const modeId of darkModes) variable.setValueForMode(modeId, darkRgb);
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
      figma.notify('Applied "' + themeName + '" — ' + parts.join(', '));
      figma.ui.postMessage({
        type: 'apply-theme-complete',
        updated, radiusUpdated, radiusFailed, radiusFloatCount, radiusNameMatched,
        radiusSamples, radiusFailures, floatSamples, unmatched
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
        filename: getDesignExportFileName('typography')
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

  if (msg.type === 'cancel') {
    figma.closePlugin();
  }
};
