# b/ui - Token Manager

A Figma plugin for managing design tokens — import JSON token files, sync with GitHub, and push changes directly into your Figma Variables.

## Features

- **Import JSON tokens** — drag & drop or browse for any token JSON file
- **Automatic format detection** — normalizes any common token format automatically:
  - Design Tokens Community Group (DTCG) format with `$value`/`$type`
  - Style Dictionary format with `value`/`type`
  - Array format with collections and modes (e.g. `[{ "Theme Collection": { "modes": { "Dark": { ... } } } }]`)
  - Plain nested objects (type guessed from value)
- **GitHub integration** — fetch tokens directly from a GitHub repository using a Personal Access Token
- **Smart variable matching** — matches JSON tokens to Figma Variables by name and updates them
- **Auto-create variables** — creates missing variables and collections automatically
- **Export tokens** — export your current Figma Variables as a JSON file
- **Dashboard** — overview of your variable count and GitHub connection status

## Supported Token Types

| JSON `$type` | Figma Variable Type |
|---|---|
| `color` | COLOR |
| `float`, `number`, `dimension`, `spacing`, `sizing`, `border-radius`, `border-width`, `font-size`, `line-height`, `letter-spacing` | FLOAT |
| `boolean` | BOOLEAN |
| `string` | STRING |

## Setup

### For users (no build required)

1. Clone or download this repository
2. Open Figma Desktop
3. Go to **Menu → Plugins → Development → Import plugin from manifest**
4. Select `manifest.json` from this directory

### For developers

```bash
npm install
npm run build
```

Watch mode for development:
```bash
npm run dev
```

## GitHub Integration

To fetch tokens from GitHub:

1. [Create a Personal Access Token](https://github.com/settings/tokens) with `repo` scope
2. Open the plugin in Figma
3. Click **GitHub Settings** from the dashboard
4. Fill in your token, repository owner, repo name, branch, and file path
5. Click **Save Settings**
6. Go to **Import JSON** and click **Fetch from GitHub**

## Token Format Examples

### DTCG format
```json
{
  "colors": {
    "primary": { "$value": "#0066FF", "$type": "color" },
    "secondary": { "$value": "#6B7280", "$type": "color" }
  },
  "spacing": {
    "sm": { "$value": 8, "$type": "float" },
    "md": { "$value": 16, "$type": "float" }
  }
}
```

### Array format with collections and modes
```json
[
  {
    "Theme Collection": {
      "modes": {
        "Dark": {
          "colors": {
            "background": { "$value": "#0F1C2E", "$type": "color" }
          }
        }
      }
    }
  }
]
```

### Style Dictionary format
```json
{
  "color": {
    "primary": { "value": "#0066FF", "type": "color" }
  }
}
```

## License

MIT
