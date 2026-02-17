console.log('=== UI.TSX TOP OF FILE ===');

import * as React from 'react';
import { createRoot } from 'react-dom/client';

console.log('=== IMPORTS LOADED ===');
console.log('React:', typeof React);
console.log('createRoot:', typeof createRoot);

type Screen = 'upload' | 'compare' | 'results';

interface FigmaVariable {
  id: string;
  name: string;
  type: string;
  value: any;
}

interface TokenComparison {
  name: string;
  figmaValue: any;
  jsonValue: any;
  matched: boolean;
  type: string;
}

function App() {
  const [screen, setScreen] = React.useState<Screen>('upload');
  const [jsonTokens, setJsonTokens] = React.useState<any>(null);
  const [figmaVariables, setFigmaVariables] = React.useState<FigmaVariable[]>([]);
  const [comparisons, setComparisons] = React.useState<TokenComparison[]>([]);
  const [fileName, setFileName] = React.useState<string>('');
  const [isDragging, setIsDragging] = React.useState(false);

  React.useEffect(() => {
    window.onmessage = (event) => {
      const msg = event.data.pluginMessage;

      if (msg.type === 'figma-variables') {
        setFigmaVariables(msg.variables);
        compareTokens(jsonTokens, msg.variables);
      } else if (msg.type === 'replace-complete') {
        setScreen('results');
      }
    };
  }, [jsonTokens]);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      processFile(files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      processFile(files[0]);
    }
  };

  const processFile = (file: File) => {
    setFileName(file.name);
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const result = e.target && e.target.result;
        const json = JSON.parse(result as string);
        setJsonTokens(json);
        parent.postMessage({ pluginMessage: { type: 'get-variables' } }, '*');
        setScreen('compare');
      } catch (error) {
        alert('Error parsing JSON file: ' + error);
      }
    };
    reader.readAsText(file);
  };

  const compareTokens = (tokens: any, variables: FigmaVariable[]) => {
    const flatTokens = flattenTokens(tokens);
    const comparisonsArray: TokenComparison[] = [];

    Object.keys(flatTokens).forEach((tokenName) => {
      const token = flatTokens[tokenName];
      const matchingVar = variables.find((v) => v.name === tokenName);

      if (matchingVar) {
        comparisonsArray.push({
          name: tokenName,
          figmaValue: matchingVar.value,
          jsonValue: token.value,
          matched: true,
          type: token.type || 'string'
        });
      }
    });

    setComparisons(comparisonsArray);
  };

  const flattenTokens = (obj: any, prefix: string = ''): any => {
    const result: any = {};

    for (const key in obj) {
      const value = obj[key];
      const fullName = prefix ? prefix + '/' + key : key;

      if (value && typeof value === 'object') {
        const hasValue = '$value' in value || 'value' in value;

        if (hasValue) {
          result[fullName] = {
            value: value.$value || value.value,
            type: value.$type || value.type
          };
        } else {
          Object.assign(result, flattenTokens(value, fullName));
        }
      }
    }

    return result;
  };

  const handleReplace = () => {
    parent.postMessage({
      pluginMessage: {
        type: 'replace-tokens',
        tokens: jsonTokens
      }
    }, '*');
  };

  const handleBack = () => {
    setScreen('upload');
    setJsonTokens(null);
    setFigmaVariables([]);
    setComparisons([]);
    setFileName('');
  };

  const formatValue = (value: any, type: string) => {
    if (type === 'color' && typeof value === 'object' && value.r !== undefined) {
      const r = Math.round(value.r * 255);
      const g = Math.round(value.g * 255);
      const b = Math.round(value.b * 255);
      return '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');
    }
    return String(value);
  };

  if (screen === 'upload') {
    return (
      <div style={{ padding: '16px' }}>
        <h2 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 600 }}>
          Design Token Replacer
        </h2>

        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          style={{
            border: '2px dashed ' + (isDragging ? '#18A0FB' : '#e0e0e0'),
            borderRadius: '8px',
            padding: '40px 20px',
            textAlign: 'center',
            backgroundColor: isDragging ? '#f0f8ff' : '#fafafa',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
        >
          <div style={{ fontSize: '40px', marginBottom: '16px' }}>📄</div>
          <div style={{ fontSize: '13px', fontWeight: 500, marginBottom: '8px' }}>
            Drop your JSON file here
          </div>
          <div style={{ fontSize: '11px', color: '#999', marginBottom: '16px' }}>
            or click to browse
          </div>
          <input
            type="file"
            accept=".json"
            onChange={handleFileSelect}
            style={{ display: 'none' }}
            id="file-input"
          />
          <label
            htmlFor="file-input"
            style={{
              display: 'inline-block',
              padding: '8px 16px',
              fontSize: '12px',
              fontWeight: 500,
              backgroundColor: '#18A0FB',
              color: 'white',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Choose File
          </label>
        </div>
      </div>
    );
  }

  if (screen === 'compare') {
    return (
      <div style={{ padding: '16px' }}>
        <div style={{ marginBottom: '16px' }}>
          <button
            onClick={handleBack}
            style={{
              padding: '6px 12px',
              fontSize: '11px',
              border: '1px solid #e0e0e0',
              borderRadius: '4px',
              backgroundColor: 'white',
              cursor: 'pointer'
            }}
          >
            ← Back
          </button>
        </div>

        <h2 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: 600 }}>
          Token Comparison
        </h2>
        <div style={{ fontSize: '11px', color: '#666', marginBottom: '16px' }}>
          File: {fileName}
        </div>

        {comparisons.length === 0 ? (
          <div style={{
            padding: '20px',
            textAlign: 'center',
            backgroundColor: '#fff3cd',
            borderRadius: '4px',
            fontSize: '12px'
          }}>
            No matching variables found between JSON and Figma
          </div>
        ) : (
          <>
            <div style={{
              fontSize: '12px',
              fontWeight: 500,
              marginBottom: '12px',
              color: '#18A0FB'
            }}>
              Found {comparisons.length} matching variable{comparisons.length !== 1 ? 's' : ''}
            </div>

            <div style={{
              maxHeight: '400px',
              overflowY: 'auto',
              marginBottom: '16px'
            }}>
              {comparisons.map((comp, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '12px',
                    marginBottom: '8px',
                    backgroundColor: '#f8f9fa',
                    borderRadius: '4px',
                    fontSize: '11px'
                  }}
                >
                  <div style={{ fontWeight: 600, marginBottom: '8px' }}>
                    {comp.name}
                  </div>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ color: '#666', marginBottom: '4px' }}>
                        Current (Figma)
                      </div>
                      <div style={{
                        padding: '6px 8px',
                        backgroundColor: 'white',
                        borderRadius: '3px',
                        fontFamily: 'monospace'
                      }}>
                        {formatValue(comp.figmaValue, comp.type)}
                      </div>
                    </div>
                    <div style={{ alignSelf: 'center', fontSize: '16px' }}>→</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ color: '#666', marginBottom: '4px' }}>
                        New (JSON)
                      </div>
                      <div style={{
                        padding: '6px 8px',
                        backgroundColor: '#e8f5e9',
                        borderRadius: '3px',
                        fontFamily: 'monospace'
                      }}>
                        {formatValue(comp.jsonValue, comp.type)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={handleReplace}
              style={{
                width: '100%',
                padding: '12px',
                fontSize: '13px',
                fontWeight: 600,
                backgroundColor: '#18A0FB',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Replace All Variables
            </button>
          </>
        )}
      </div>
    );
  }

  return (
    <div style={{ padding: '16px', textAlign: 'center' }}>
      <div style={{ fontSize: '48px', marginBottom: '16px' }}>✓</div>
      <h2 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 600 }}>
        Replacement Complete!
      </h2>
      <div style={{ fontSize: '12px', color: '#666', marginBottom: '20px' }}>
        {comparisons.length} variable{comparisons.length !== 1 ? 's' : ''} updated successfully
      </div>
      <button
        onClick={handleBack}
        style={{
          padding: '10px 20px',
          fontSize: '12px',
          fontWeight: 500,
          backgroundColor: '#18A0FB',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Import Another File
      </button>
    </div>
  );
}

// Run immediately - Figma plugins don't need DOMContentLoaded
(function initializeApp() {
  console.log('initializeApp called');
  const container = document.getElementById('root');
  console.log('Container found:', container);

  if (container) {
    try {
      console.log('Creating React root...');
      const root = createRoot(container);
      console.log('React root created, rendering App...');
      root.render(<App />);
      console.log('App rendered!');
    } catch (error) {
      console.error('Error during React initialization:', error);
    }
  } else {
    console.log('Container not found, retrying...');
    // Retry after a short delay if root isn't ready yet
    setTimeout(initializeApp, 10);
  }
})();
