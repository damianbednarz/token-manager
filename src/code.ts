// This file runs in the Figma plugin sandbox
// It has access to the Figma API but not to browser APIs

figma.showUI(__html__, { width: 450, height: 600 });

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
      const githubConfig = await figma.clientStorage.getAsync('githubConfig');

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
      await figma.clientStorage.setAsync('githubConfig', msg.config);
      figma.notify('GitHub settings saved');
    } catch (error) {
      figma.ui.postMessage({
        type: 'error',
        error: String(error)
      });
    }
  }

  if (msg.type === 'export-tokens') {
    try {
      const variables = await getFigmaVariables();
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

      const targetMode = targetCollection.modes[0].modeId;
      const variableIds: string[] = Array.isArray(msg.variableIds) ? msg.variableIds : [msg.variableIds];
      let movedCount = 0;

      for (const variableId of variableIds) {
        const variable = figma.variables.getVariableById(variableId);
        if (!variable) continue;
        const sourceCollection = collections.find(c => c.variableIds.includes(variableId));
        if (!sourceCollection || sourceCollection.id === targetCollection.id) continue;

        const sourceMode = sourceCollection.modes[0].modeId;
        const value = variable.valuesByMode[sourceMode];
        const newVar = figma.variables.createVariable(variable.name, targetCollection, variable.resolvedType);
        newVar.setValueForMode(targetMode, value);
        variable.remove();
        movedCount++;
      }

      figma.notify(`Moved ${movedCount} variable${movedCount !== 1 ? 's' : ''} to "${targetCollection.name}"`);
      figma.ui.postMessage({ type: 'variables-moved' });
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
