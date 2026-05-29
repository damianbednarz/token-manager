"use strict";
(() => {
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __pow = Math.pow;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // src/create-data.ts
  var BASE_THEMES, DEFAULT_BASE, STYLE_RADIUS, STYLES, THEMES;
  var init_create_data = __esm({
    "src/create-data.ts"() {
      "use strict";
      BASE_THEMES = ["neutral", "stone", "zinc", "mauve", "olive", "mist", "taupe"];
      DEFAULT_BASE = "neutral";
      STYLE_RADIUS = {
        juno: 10,
        vega: 10,
        nova: 10,
        lyra: 0,
        maia: 14,
        mira: 10,
        luma: 10
      };
      STYLES = [
        {
          "name": "juno",
          "id": "bejamas-juno",
          "title": "Juno",
          "description": "Balanced and versatile baseline for Bejamas interfaces."
        },
        {
          "name": "vega",
          "id": "bejamas-vega",
          "title": "Vega",
          "description": "Clean, neutral, and familiar."
        },
        {
          "name": "nova",
          "id": "bejamas-nova",
          "title": "Nova",
          "description": "Reduced padding and tighter spacing."
        },
        {
          "name": "lyra",
          "id": "bejamas-lyra",
          "title": "Lyra",
          "description": "Boxy and sharp for mono-heavy interfaces."
        },
        {
          "name": "maia",
          "id": "bejamas-maia",
          "title": "Maia",
          "description": "Rounded and softer with larger surfaces."
        },
        {
          "name": "mira",
          "id": "bejamas-mira",
          "title": "Mira",
          "description": "Compact and text-dense with smaller controls."
        },
        {
          "name": "luma",
          "id": "bejamas-luma",
          "title": "Luma",
          "description": "Fluid, luminous, and glassy."
        }
      ];
      THEMES = [
        {
          "name": "neutral",
          "title": "Neutral",
          "cssVars": {
            "light": {
              "background": "oklch(1 0 0)",
              "foreground": "oklch(0.145 0 0)",
              "card": "oklch(1 0 0)",
              "card-foreground": "oklch(0.145 0 0)",
              "popover": "oklch(1 0 0)",
              "popover-foreground": "oklch(0.145 0 0)",
              "primary": "oklch(0.205 0 0)",
              "primary-foreground": "oklch(0.985 0 0)",
              "secondary": "oklch(0.97 0 0)",
              "secondary-foreground": "oklch(0.205 0 0)",
              "muted": "oklch(0.97 0 0)",
              "muted-foreground": "oklch(0.556 0 0)",
              "accent": "oklch(0.97 0 0)",
              "accent-foreground": "oklch(0.205 0 0)",
              "destructive": "oklch(0.58 0.22 27)",
              "border": "oklch(0.922 0 0)",
              "input": "oklch(0.922 0 0)",
              "ring": "oklch(0.708 0 0)",
              "chart-1": "oklch(0.809 0.105 251.813)",
              "chart-2": "oklch(0.623 0.214 259.815)",
              "chart-3": "oklch(0.546 0.245 262.881)",
              "chart-4": "oklch(0.488 0.243 264.376)",
              "chart-5": "oklch(0.424 0.199 265.638)",
              "radius": "0.625rem",
              "sidebar": "oklch(0.985 0 0)",
              "sidebar-foreground": "oklch(0.145 0 0)",
              "sidebar-primary": "oklch(0.205 0 0)",
              "sidebar-primary-foreground": "oklch(0.985 0 0)",
              "sidebar-accent": "oklch(0.97 0 0)",
              "sidebar-accent-foreground": "oklch(0.205 0 0)",
              "sidebar-border": "oklch(0.922 0 0)",
              "sidebar-ring": "oklch(0.708 0 0)"
            },
            "dark": {
              "background": "oklch(0.145 0 0)",
              "foreground": "oklch(0.985 0 0)",
              "card": "oklch(0.205 0 0)",
              "card-foreground": "oklch(0.985 0 0)",
              "popover": "oklch(0.205 0 0)",
              "popover-foreground": "oklch(0.985 0 0)",
              "primary": "oklch(0.87 0.00 0)",
              "primary-foreground": "oklch(0.205 0 0)",
              "secondary": "oklch(0.269 0 0)",
              "secondary-foreground": "oklch(0.985 0 0)",
              "muted": "oklch(0.269 0 0)",
              "muted-foreground": "oklch(0.708 0 0)",
              "accent": "oklch(0.371 0 0)",
              "accent-foreground": "oklch(0.985 0 0)",
              "destructive": "oklch(0.704 0.191 22.216)",
              "border": "oklch(1 0 0 / 10%)",
              "input": "oklch(1 0 0 / 15%)",
              "ring": "oklch(0.556 0 0)",
              "chart-1": "oklch(0.809 0.105 251.813)",
              "chart-2": "oklch(0.623 0.214 259.815)",
              "chart-3": "oklch(0.546 0.245 262.881)",
              "chart-4": "oklch(0.488 0.243 264.376)",
              "chart-5": "oklch(0.424 0.199 265.638)",
              "sidebar": "oklch(0.205 0 0)",
              "sidebar-foreground": "oklch(0.985 0 0)",
              "sidebar-primary": "oklch(0.488 0.243 264.376)",
              "sidebar-primary-foreground": "oklch(0.985 0 0)",
              "sidebar-accent": "oklch(0.269 0 0)",
              "sidebar-accent-foreground": "oklch(0.985 0 0)",
              "sidebar-border": "oklch(1 0 0 / 10%)",
              "sidebar-ring": "oklch(0.556 0 0)"
            }
          }
        },
        {
          "name": "stone",
          "title": "Stone",
          "cssVars": {
            "light": {
              "background": "oklch(1 0 0)",
              "foreground": "oklch(0.147 0.004 49.25)",
              "card": "oklch(1 0 0)",
              "card-foreground": "oklch(0.147 0.004 49.25)",
              "popover": "oklch(1 0 0)",
              "popover-foreground": "oklch(0.147 0.004 49.25)",
              "primary": "oklch(0.216 0.006 56.043)",
              "primary-foreground": "oklch(0.985 0.001 106.423)",
              "secondary": "oklch(0.97 0.001 106.424)",
              "secondary-foreground": "oklch(0.216 0.006 56.043)",
              "muted": "oklch(0.97 0.001 106.424)",
              "muted-foreground": "oklch(0.553 0.013 58.071)",
              "accent": "oklch(0.97 0.001 106.424)",
              "accent-foreground": "oklch(0.216 0.006 56.043)",
              "destructive": "oklch(0.577 0.245 27.325)",
              "border": "oklch(0.923 0.003 48.717)",
              "input": "oklch(0.923 0.003 48.717)",
              "ring": "oklch(0.709 0.01 56.259)",
              "chart-1": "oklch(0.897 0.196 126.665)",
              "chart-2": "oklch(0.768 0.233 130.85)",
              "chart-3": "oklch(0.648 0.2 131.684)",
              "chart-4": "oklch(0.532 0.157 131.589)",
              "chart-5": "oklch(0.453 0.124 130.933)",
              "radius": "0.625rem",
              "sidebar": "oklch(0.985 0.001 106.423)",
              "sidebar-foreground": "oklch(0.147 0.004 49.25)",
              "sidebar-primary": "oklch(0.216 0.006 56.043)",
              "sidebar-primary-foreground": "oklch(0.985 0.001 106.423)",
              "sidebar-accent": "oklch(0.97 0.001 106.424)",
              "sidebar-accent-foreground": "oklch(0.216 0.006 56.043)",
              "sidebar-border": "oklch(0.923 0.003 48.717)",
              "sidebar-ring": "oklch(0.709 0.01 56.259)"
            },
            "dark": {
              "background": "oklch(0.147 0.004 49.25)",
              "foreground": "oklch(0.985 0.001 106.423)",
              "card": "oklch(0.216 0.006 56.043)",
              "card-foreground": "oklch(0.985 0.001 106.423)",
              "popover": "oklch(0.216 0.006 56.043)",
              "popover-foreground": "oklch(0.985 0.001 106.423)",
              "primary": "oklch(0.923 0.003 48.717)",
              "primary-foreground": "oklch(0.216 0.006 56.043)",
              "secondary": "oklch(0.268 0.007 34.298)",
              "secondary-foreground": "oklch(0.985 0.001 106.423)",
              "muted": "oklch(0.268 0.007 34.298)",
              "muted-foreground": "oklch(0.709 0.01 56.259)",
              "accent": "oklch(0.268 0.007 34.298)",
              "accent-foreground": "oklch(0.985 0.001 106.423)",
              "destructive": "oklch(0.704 0.191 22.216)",
              "border": "oklch(1 0 0 / 10%)",
              "input": "oklch(1 0 0 / 15%)",
              "ring": "oklch(0.553 0.013 58.071)",
              "chart-1": "oklch(0.897 0.196 126.665)",
              "chart-2": "oklch(0.768 0.233 130.85)",
              "chart-3": "oklch(0.648 0.2 131.684)",
              "chart-4": "oklch(0.532 0.157 131.589)",
              "chart-5": "oklch(0.453 0.124 130.933)",
              "sidebar": "oklch(0.216 0.006 56.043)",
              "sidebar-foreground": "oklch(0.985 0.001 106.423)",
              "sidebar-primary": "oklch(0.488 0.243 264.376)",
              "sidebar-primary-foreground": "oklch(0.985 0.001 106.423)",
              "sidebar-accent": "oklch(0.268 0.007 34.298)",
              "sidebar-accent-foreground": "oklch(0.985 0.001 106.423)",
              "sidebar-border": "oklch(1 0 0 / 10%)",
              "sidebar-ring": "oklch(0.553 0.013 58.071)"
            }
          }
        },
        {
          "name": "zinc",
          "title": "Zinc",
          "cssVars": {
            "light": {
              "background": "oklch(1 0 0)",
              "foreground": "oklch(0.141 0.005 285.823)",
              "card": "oklch(1 0 0)",
              "card-foreground": "oklch(0.141 0.005 285.823)",
              "popover": "oklch(1 0 0)",
              "popover-foreground": "oklch(0.141 0.005 285.823)",
              "primary": "oklch(0.21 0.006 285.885)",
              "primary-foreground": "oklch(0.985 0 0)",
              "secondary": "oklch(0.967 0.001 286.375)",
              "secondary-foreground": "oklch(0.21 0.006 285.885)",
              "muted": "oklch(0.967 0.001 286.375)",
              "muted-foreground": "oklch(0.552 0.016 285.938)",
              "accent": "oklch(0.967 0.001 286.375)",
              "accent-foreground": "oklch(0.21 0.006 285.885)",
              "destructive": "oklch(0.577 0.245 27.325)",
              "border": "oklch(0.92 0.004 286.32)",
              "input": "oklch(0.92 0.004 286.32)",
              "ring": "oklch(0.705 0.015 286.067)",
              "chart-1": "oklch(0.879 0.169 91.605)",
              "chart-2": "oklch(0.769 0.188 70.08)",
              "chart-3": "oklch(0.666 0.179 58.318)",
              "chart-4": "oklch(0.555 0.163 48.998)",
              "chart-5": "oklch(0.473 0.137 46.201)",
              "radius": "0.625rem",
              "sidebar": "oklch(0.985 0 0)",
              "sidebar-foreground": "oklch(0.141 0.005 285.823)",
              "sidebar-primary": "oklch(0.21 0.006 285.885)",
              "sidebar-primary-foreground": "oklch(0.985 0 0)",
              "sidebar-accent": "oklch(0.967 0.001 286.375)",
              "sidebar-accent-foreground": "oklch(0.21 0.006 285.885)",
              "sidebar-border": "oklch(0.92 0.004 286.32)",
              "sidebar-ring": "oklch(0.705 0.015 286.067)"
            },
            "dark": {
              "background": "oklch(0.141 0.005 285.823)",
              "foreground": "oklch(0.985 0 0)",
              "card": "oklch(0.21 0.006 285.885)",
              "card-foreground": "oklch(0.985 0 0)",
              "popover": "oklch(0.21 0.006 285.885)",
              "popover-foreground": "oklch(0.985 0 0)",
              "primary": "oklch(0.92 0.004 286.32)",
              "primary-foreground": "oklch(0.21 0.006 285.885)",
              "secondary": "oklch(0.274 0.006 286.033)",
              "secondary-foreground": "oklch(0.985 0 0)",
              "muted": "oklch(0.274 0.006 286.033)",
              "muted-foreground": "oklch(0.705 0.015 286.067)",
              "accent": "oklch(0.274 0.006 286.033)",
              "accent-foreground": "oklch(0.985 0 0)",
              "destructive": "oklch(0.704 0.191 22.216)",
              "border": "oklch(1 0 0 / 10%)",
              "input": "oklch(1 0 0 / 15%)",
              "ring": "oklch(0.552 0.016 285.938)",
              "chart-1": "oklch(0.879 0.169 91.605)",
              "chart-2": "oklch(0.769 0.188 70.08)",
              "chart-3": "oklch(0.666 0.179 58.318)",
              "chart-4": "oklch(0.555 0.163 48.998)",
              "chart-5": "oklch(0.473 0.137 46.201)",
              "sidebar": "oklch(0.21 0.006 285.885)",
              "sidebar-foreground": "oklch(0.985 0 0)",
              "sidebar-primary": "oklch(0.488 0.243 264.376)",
              "sidebar-primary-foreground": "oklch(0.985 0 0)",
              "sidebar-accent": "oklch(0.274 0.006 286.033)",
              "sidebar-accent-foreground": "oklch(0.985 0 0)",
              "sidebar-border": "oklch(1 0 0 / 10%)",
              "sidebar-ring": "oklch(0.552 0.016 285.938)"
            }
          }
        },
        {
          "name": "mauve",
          "title": "Mauve",
          "cssVars": {
            "light": {
              "background": "oklch(1 0 0)",
              "foreground": "oklch(0.145 0.008 326)",
              "card": "oklch(1 0 0)",
              "card-foreground": "oklch(0.145 0.008 326)",
              "popover": "oklch(1 0 0)",
              "popover-foreground": "oklch(0.145 0.008 326)",
              "primary": "oklch(0.212 0.019 322.12)",
              "primary-foreground": "oklch(0.985 0 0)",
              "secondary": "oklch(0.96 0.003 325.6)",
              "secondary-foreground": "oklch(0.212 0.019 322.12)",
              "muted": "oklch(0.96 0.003 325.6)",
              "muted-foreground": "oklch(0.542 0.034 322.5)",
              "accent": "oklch(0.96 0.003 325.6)",
              "accent-foreground": "oklch(0.212 0.019 322.12)",
              "destructive": "oklch(0.577 0.245 27.325)",
              "border": "oklch(0.922 0.005 325.62)",
              "input": "oklch(0.922 0.005 325.62)",
              "ring": "oklch(0.711 0.019 323.02)",
              "chart-1": "oklch(0.845 0.143 164.978)",
              "chart-2": "oklch(0.696 0.17 162.48)",
              "chart-3": "oklch(0.596 0.145 163.225)",
              "chart-4": "oklch(0.508 0.118 165.612)",
              "chart-5": "oklch(0.432 0.095 166.913)",
              "radius": "0.625rem",
              "sidebar": "oklch(0.985 0 0)",
              "sidebar-foreground": "oklch(0.145 0.008 326)",
              "sidebar-primary": "oklch(0.212 0.019 322.12)",
              "sidebar-primary-foreground": "oklch(0.985 0 0)",
              "sidebar-accent": "oklch(0.96 0.003 325.6)",
              "sidebar-accent-foreground": "oklch(0.212 0.019 322.12)",
              "sidebar-border": "oklch(0.922 0.005 325.62)",
              "sidebar-ring": "oklch(0.711 0.019 323.02)"
            },
            "dark": {
              "background": "oklch(0.145 0.008 326)",
              "foreground": "oklch(0.985 0 0)",
              "card": "oklch(0.212 0.019 322.12)",
              "card-foreground": "oklch(0.985 0 0)",
              "popover": "oklch(0.212 0.019 322.12)",
              "popover-foreground": "oklch(0.985 0 0)",
              "primary": "oklch(0.922 0.005 325.62)",
              "primary-foreground": "oklch(0.212 0.019 322.12)",
              "secondary": "oklch(0.263 0.024 320.12)",
              "secondary-foreground": "oklch(0.985 0 0)",
              "muted": "oklch(0.263 0.024 320.12)",
              "muted-foreground": "oklch(0.711 0.019 323.02)",
              "accent": "oklch(0.263 0.024 320.12)",
              "accent-foreground": "oklch(0.985 0 0)",
              "destructive": "oklch(0.704 0.191 22.216)",
              "border": "oklch(1 0 0 / 10%)",
              "input": "oklch(1 0 0 / 15%)",
              "ring": "oklch(0.542 0.034 322.5)",
              "chart-1": "oklch(0.845 0.143 164.978)",
              "chart-2": "oklch(0.696 0.17 162.48)",
              "chart-3": "oklch(0.596 0.145 163.225)",
              "chart-4": "oklch(0.508 0.118 165.612)",
              "chart-5": "oklch(0.432 0.095 166.913)",
              "sidebar": "oklch(0.212 0.019 322.12)",
              "sidebar-foreground": "oklch(0.985 0 0)",
              "sidebar-primary": "oklch(0.488 0.243 264.376)",
              "sidebar-primary-foreground": "oklch(0.985 0 0)",
              "sidebar-accent": "oklch(0.263 0.024 320.12)",
              "sidebar-accent-foreground": "oklch(0.985 0 0)",
              "sidebar-border": "oklch(1 0 0 / 10%)",
              "sidebar-ring": "oklch(0.542 0.034 322.5)"
            }
          }
        },
        {
          "name": "olive",
          "title": "Olive",
          "cssVars": {
            "light": {
              "background": "oklch(1 0 0)",
              "foreground": "oklch(0.153 0.006 107.1)",
              "card": "oklch(1 0 0)",
              "card-foreground": "oklch(0.153 0.006 107.1)",
              "popover": "oklch(1 0 0)",
              "popover-foreground": "oklch(0.153 0.006 107.1)",
              "primary": "oklch(0.228 0.013 107.4)",
              "primary-foreground": "oklch(0.988 0.003 106.5)",
              "secondary": "oklch(0.966 0.005 106.5)",
              "secondary-foreground": "oklch(0.228 0.013 107.4)",
              "muted": "oklch(0.966 0.005 106.5)",
              "muted-foreground": "oklch(0.58 0.031 107.3)",
              "accent": "oklch(0.966 0.005 106.5)",
              "accent-foreground": "oklch(0.228 0.013 107.4)",
              "destructive": "oklch(0.577 0.245 27.325)",
              "border": "oklch(0.93 0.007 106.5)",
              "input": "oklch(0.93 0.007 106.5)",
              "ring": "oklch(0.737 0.021 106.9)",
              "chart-1": "oklch(0.811 0.111 293.571)",
              "chart-2": "oklch(0.606 0.25 292.717)",
              "chart-3": "oklch(0.541 0.281 293.009)",
              "chart-4": "oklch(0.491 0.27 292.581)",
              "chart-5": "oklch(0.432 0.232 292.759)",
              "radius": "0.625rem",
              "sidebar": "oklch(0.988 0.003 106.5)",
              "sidebar-foreground": "oklch(0.153 0.006 107.1)",
              "sidebar-primary": "oklch(0.228 0.013 107.4)",
              "sidebar-primary-foreground": "oklch(0.988 0.003 106.5)",
              "sidebar-accent": "oklch(0.966 0.005 106.5)",
              "sidebar-accent-foreground": "oklch(0.228 0.013 107.4)",
              "sidebar-border": "oklch(0.93 0.007 106.5)",
              "sidebar-ring": "oklch(0.737 0.021 106.9)"
            },
            "dark": {
              "background": "oklch(0.153 0.006 107.1)",
              "foreground": "oklch(0.988 0.003 106.5)",
              "card": "oklch(0.228 0.013 107.4)",
              "card-foreground": "oklch(0.988 0.003 106.5)",
              "popover": "oklch(0.228 0.013 107.4)",
              "popover-foreground": "oklch(0.988 0.003 106.5)",
              "primary": "oklch(0.93 0.007 106.5)",
              "primary-foreground": "oklch(0.228 0.013 107.4)",
              "secondary": "oklch(0.286 0.016 107.4)",
              "secondary-foreground": "oklch(0.988 0.003 106.5)",
              "muted": "oklch(0.286 0.016 107.4)",
              "muted-foreground": "oklch(0.737 0.021 106.9)",
              "accent": "oklch(0.286 0.016 107.4)",
              "accent-foreground": "oklch(0.988 0.003 106.5)",
              "destructive": "oklch(0.704 0.191 22.216)",
              "border": "oklch(1 0 0 / 10%)",
              "input": "oklch(1 0 0 / 15%)",
              "ring": "oklch(0.58 0.031 107.3)",
              "chart-1": "oklch(0.811 0.111 293.571)",
              "chart-2": "oklch(0.606 0.25 292.717)",
              "chart-3": "oklch(0.541 0.281 293.009)",
              "chart-4": "oklch(0.491 0.27 292.581)",
              "chart-5": "oklch(0.432 0.232 292.759)",
              "sidebar": "oklch(0.228 0.013 107.4)",
              "sidebar-foreground": "oklch(0.988 0.003 106.5)",
              "sidebar-primary": "oklch(0.488 0.243 264.376)",
              "sidebar-primary-foreground": "oklch(0.988 0.003 106.5)",
              "sidebar-accent": "oklch(0.286 0.016 107.4)",
              "sidebar-accent-foreground": "oklch(0.988 0.003 106.5)",
              "sidebar-border": "oklch(1 0 0 / 10%)",
              "sidebar-ring": "oklch(0.58 0.031 107.3)"
            }
          }
        },
        {
          "name": "mist",
          "title": "Mist",
          "cssVars": {
            "light": {
              "background": "oklch(1 0 0)",
              "foreground": "oklch(0.148 0.004 228.8)",
              "card": "oklch(1 0 0)",
              "card-foreground": "oklch(0.148 0.004 228.8)",
              "popover": "oklch(1 0 0)",
              "popover-foreground": "oklch(0.148 0.004 228.8)",
              "primary": "oklch(0.218 0.008 223.9)",
              "primary-foreground": "oklch(0.987 0.002 197.1)",
              "secondary": "oklch(0.963 0.002 197.1)",
              "secondary-foreground": "oklch(0.218 0.008 223.9)",
              "muted": "oklch(0.963 0.002 197.1)",
              "muted-foreground": "oklch(0.56 0.021 213.5)",
              "accent": "oklch(0.963 0.002 197.1)",
              "accent-foreground": "oklch(0.218 0.008 223.9)",
              "destructive": "oklch(0.577 0.245 27.325)",
              "border": "oklch(0.925 0.005 214.3)",
              "input": "oklch(0.925 0.005 214.3)",
              "ring": "oklch(0.723 0.014 214.4)",
              "chart-1": "oklch(0.81 0.117 11.638)",
              "chart-2": "oklch(0.645 0.246 16.439)",
              "chart-3": "oklch(0.586 0.253 17.585)",
              "chart-4": "oklch(0.514 0.222 16.935)",
              "chart-5": "oklch(0.455 0.188 13.697)",
              "radius": "0.625rem",
              "sidebar": "oklch(0.987 0.002 197.1)",
              "sidebar-foreground": "oklch(0.148 0.004 228.8)",
              "sidebar-primary": "oklch(0.218 0.008 223.9)",
              "sidebar-primary-foreground": "oklch(0.987 0.002 197.1)",
              "sidebar-accent": "oklch(0.963 0.002 197.1)",
              "sidebar-accent-foreground": "oklch(0.218 0.008 223.9)",
              "sidebar-border": "oklch(0.925 0.005 214.3)",
              "sidebar-ring": "oklch(0.723 0.014 214.4)"
            },
            "dark": {
              "background": "oklch(0.148 0.004 228.8)",
              "foreground": "oklch(0.987 0.002 197.1)",
              "card": "oklch(0.218 0.008 223.9)",
              "card-foreground": "oklch(0.987 0.002 197.1)",
              "popover": "oklch(0.218 0.008 223.9)",
              "popover-foreground": "oklch(0.987 0.002 197.1)",
              "primary": "oklch(0.925 0.005 214.3)",
              "primary-foreground": "oklch(0.218 0.008 223.9)",
              "secondary": "oklch(0.275 0.011 216.9)",
              "secondary-foreground": "oklch(0.987 0.002 197.1)",
              "muted": "oklch(0.275 0.011 216.9)",
              "muted-foreground": "oklch(0.723 0.014 214.4)",
              "accent": "oklch(0.275 0.011 216.9)",
              "accent-foreground": "oklch(0.987 0.002 197.1)",
              "destructive": "oklch(0.704 0.191 22.216)",
              "border": "oklch(1 0 0 / 10%)",
              "input": "oklch(1 0 0 / 15%)",
              "ring": "oklch(0.56 0.021 213.5)",
              "chart-1": "oklch(0.81 0.117 11.638)",
              "chart-2": "oklch(0.645 0.246 16.439)",
              "chart-3": "oklch(0.586 0.253 17.585)",
              "chart-4": "oklch(0.514 0.222 16.935)",
              "chart-5": "oklch(0.455 0.188 13.697)",
              "sidebar": "oklch(0.218 0.008 223.9)",
              "sidebar-foreground": "oklch(0.987 0.002 197.1)",
              "sidebar-primary": "oklch(0.488 0.243 264.376)",
              "sidebar-primary-foreground": "oklch(0.987 0.002 197.1)",
              "sidebar-accent": "oklch(0.275 0.011 216.9)",
              "sidebar-accent-foreground": "oklch(0.987 0.002 197.1)",
              "sidebar-border": "oklch(1 0 0 / 10%)",
              "sidebar-ring": "oklch(0.56 0.021 213.5)"
            }
          }
        },
        {
          "name": "taupe",
          "title": "Taupe",
          "cssVars": {
            "light": {
              "background": "oklch(1 0 0)",
              "foreground": "oklch(0.147 0.004 49.3)",
              "card": "oklch(1 0 0)",
              "card-foreground": "oklch(0.147 0.004 49.3)",
              "popover": "oklch(1 0 0)",
              "popover-foreground": "oklch(0.147 0.004 49.3)",
              "primary": "oklch(0.214 0.009 43.1)",
              "primary-foreground": "oklch(0.986 0.002 67.8)",
              "secondary": "oklch(0.96 0.002 17.2)",
              "secondary-foreground": "oklch(0.214 0.009 43.1)",
              "muted": "oklch(0.96 0.002 17.2)",
              "muted-foreground": "oklch(0.547 0.021 43.1)",
              "accent": "oklch(0.96 0.002 17.2)",
              "accent-foreground": "oklch(0.214 0.009 43.1)",
              "destructive": "oklch(0.577 0.245 27.325)",
              "border": "oklch(0.922 0.005 34.3)",
              "input": "oklch(0.922 0.005 34.3)",
              "ring": "oklch(0.714 0.014 41.2)",
              "chart-1": "oklch(0.865 0.127 207.078)",
              "chart-2": "oklch(0.715 0.143 215.221)",
              "chart-3": "oklch(0.609 0.126 221.723)",
              "chart-4": "oklch(0.52 0.105 223.128)",
              "chart-5": "oklch(0.45 0.085 224.283)",
              "radius": "0.625rem",
              "sidebar": "oklch(0.986 0.002 67.8)",
              "sidebar-foreground": "oklch(0.147 0.004 49.3)",
              "sidebar-primary": "oklch(0.214 0.009 43.1)",
              "sidebar-primary-foreground": "oklch(0.986 0.002 67.8)",
              "sidebar-accent": "oklch(0.96 0.002 17.2)",
              "sidebar-accent-foreground": "oklch(0.214 0.009 43.1)",
              "sidebar-border": "oklch(0.922 0.005 34.3)",
              "sidebar-ring": "oklch(0.714 0.014 41.2)"
            },
            "dark": {
              "background": "oklch(0.147 0.004 49.3)",
              "foreground": "oklch(0.986 0.002 67.8)",
              "card": "oklch(0.214 0.009 43.1)",
              "card-foreground": "oklch(0.986 0.002 67.8)",
              "popover": "oklch(0.214 0.009 43.1)",
              "popover-foreground": "oklch(0.986 0.002 67.8)",
              "primary": "oklch(0.922 0.005 34.3)",
              "primary-foreground": "oklch(0.214 0.009 43.1)",
              "secondary": "oklch(0.268 0.011 36.5)",
              "secondary-foreground": "oklch(0.986 0.002 67.8)",
              "muted": "oklch(0.268 0.011 36.5)",
              "muted-foreground": "oklch(0.714 0.014 41.2)",
              "accent": "oklch(0.268 0.011 36.5)",
              "accent-foreground": "oklch(0.986 0.002 67.8)",
              "destructive": "oklch(0.704 0.191 22.216)",
              "border": "oklch(1 0 0 / 10%)",
              "input": "oklch(1 0 0 / 15%)",
              "ring": "oklch(0.547 0.021 43.1)",
              "chart-1": "oklch(0.865 0.127 207.078)",
              "chart-2": "oklch(0.715 0.143 215.221)",
              "chart-3": "oklch(0.609 0.126 221.723)",
              "chart-4": "oklch(0.52 0.105 223.128)",
              "chart-5": "oklch(0.45 0.085 224.283)",
              "sidebar": "oklch(0.214 0.009 43.1)",
              "sidebar-foreground": "oklch(0.986 0.002 67.8)",
              "sidebar-primary": "oklch(0.488 0.243 264.376)",
              "sidebar-primary-foreground": "oklch(0.986 0.002 67.8)",
              "sidebar-accent": "oklch(0.268 0.011 36.5)",
              "sidebar-accent-foreground": "oklch(0.986 0.002 67.8)",
              "sidebar-border": "oklch(1 0 0 / 10%)",
              "sidebar-ring": "oklch(0.547 0.021 43.1)"
            }
          }
        },
        {
          "name": "amber",
          "title": "Amber",
          "cssVars": {
            "light": {
              "primary": "oklch(0.555 0.163 48.998)",
              "primary-foreground": "oklch(0.987 0.022 95.277)",
              "secondary": "oklch(0.967 0.001 286.375)",
              "secondary-foreground": "oklch(0.21 0.006 285.885)",
              "chart-1": "oklch(0.879 0.169 91.605)",
              "chart-2": "oklch(0.769 0.188 70.08)",
              "chart-3": "oklch(0.666 0.179 58.318)",
              "chart-4": "oklch(0.555 0.163 48.998)",
              "chart-5": "oklch(0.473 0.137 46.201)",
              "sidebar-primary": "oklch(0.666 0.179 58.318)",
              "sidebar-primary-foreground": "oklch(0.987 0.022 95.277)"
            },
            "dark": {
              "primary": "oklch(0.473 0.137 46.201)",
              "primary-foreground": "oklch(0.987 0.022 95.277)",
              "secondary": "oklch(0.274 0.006 286.033)",
              "secondary-foreground": "oklch(0.985 0 0)",
              "chart-1": "oklch(0.879 0.169 91.605)",
              "chart-2": "oklch(0.769 0.188 70.08)",
              "chart-3": "oklch(0.666 0.179 58.318)",
              "chart-4": "oklch(0.555 0.163 48.998)",
              "chart-5": "oklch(0.473 0.137 46.201)",
              "sidebar-primary": "oklch(0.769 0.188 70.08)",
              "sidebar-primary-foreground": "oklch(0.279 0.077 45.635)"
            }
          }
        },
        {
          "name": "blue",
          "title": "Blue",
          "cssVars": {
            "light": {
              "primary": "oklch(0.488 0.243 264.376)",
              "primary-foreground": "oklch(0.97 0.014 254.604)",
              "secondary": "oklch(0.967 0.001 286.375)",
              "secondary-foreground": "oklch(0.21 0.006 285.885)",
              "chart-1": "oklch(0.809 0.105 251.813)",
              "chart-2": "oklch(0.623 0.214 259.815)",
              "chart-3": "oklch(0.546 0.245 262.881)",
              "chart-4": "oklch(0.488 0.243 264.376)",
              "chart-5": "oklch(0.424 0.199 265.638)",
              "sidebar-primary": "oklch(0.546 0.245 262.881)",
              "sidebar-primary-foreground": "oklch(0.97 0.014 254.604)"
            },
            "dark": {
              "primary": "oklch(0.424 0.199 265.638)",
              "primary-foreground": "oklch(0.97 0.014 254.604)",
              "secondary": "oklch(0.274 0.006 286.033)",
              "secondary-foreground": "oklch(0.985 0 0)",
              "chart-1": "oklch(0.809 0.105 251.813)",
              "chart-2": "oklch(0.623 0.214 259.815)",
              "chart-3": "oklch(0.546 0.245 262.881)",
              "chart-4": "oklch(0.488 0.243 264.376)",
              "chart-5": "oklch(0.424 0.199 265.638)",
              "sidebar-primary": "oklch(0.623 0.214 259.815)",
              "sidebar-primary-foreground": "oklch(0.97 0.014 254.604)"
            }
          }
        },
        {
          "name": "cyan",
          "title": "Cyan",
          "cssVars": {
            "light": {
              "primary": "oklch(0.52 0.105 223.128)",
              "primary-foreground": "oklch(0.984 0.019 200.873)",
              "secondary": "oklch(0.967 0.001 286.375)",
              "secondary-foreground": "oklch(0.21 0.006 285.885)",
              "chart-1": "oklch(0.865 0.127 207.078)",
              "chart-2": "oklch(0.715 0.143 215.221)",
              "chart-3": "oklch(0.609 0.126 221.723)",
              "chart-4": "oklch(0.52 0.105 223.128)",
              "chart-5": "oklch(0.45 0.085 224.283)",
              "sidebar-primary": "oklch(0.609 0.126 221.723)",
              "sidebar-primary-foreground": "oklch(0.984 0.019 200.873)"
            },
            "dark": {
              "primary": "oklch(0.45 0.085 224.283)",
              "primary-foreground": "oklch(0.984 0.019 200.873)",
              "secondary": "oklch(0.274 0.006 286.033)",
              "secondary-foreground": "oklch(0.985 0 0)",
              "chart-1": "oklch(0.865 0.127 207.078)",
              "chart-2": "oklch(0.715 0.143 215.221)",
              "chart-3": "oklch(0.609 0.126 221.723)",
              "chart-4": "oklch(0.52 0.105 223.128)",
              "chart-5": "oklch(0.45 0.085 224.283)",
              "sidebar-primary": "oklch(0.715 0.143 215.221)",
              "sidebar-primary-foreground": "oklch(0.302 0.056 229.695)"
            }
          }
        },
        {
          "name": "emerald",
          "title": "Emerald",
          "cssVars": {
            "light": {
              "primary": "oklch(0.508 0.118 165.612)",
              "primary-foreground": "oklch(0.979 0.021 166.113)",
              "secondary": "oklch(0.967 0.001 286.375)",
              "secondary-foreground": "oklch(0.21 0.006 285.885)",
              "chart-1": "oklch(0.845 0.143 164.978)",
              "chart-2": "oklch(0.696 0.17 162.48)",
              "chart-3": "oklch(0.596 0.145 163.225)",
              "chart-4": "oklch(0.508 0.118 165.612)",
              "chart-5": "oklch(0.432 0.095 166.913)",
              "sidebar-primary": "oklch(0.596 0.145 163.225)",
              "sidebar-primary-foreground": "oklch(0.979 0.021 166.113)"
            },
            "dark": {
              "primary": "oklch(0.432 0.095 166.913)",
              "primary-foreground": "oklch(0.979 0.021 166.113)",
              "secondary": "oklch(0.274 0.006 286.033)",
              "secondary-foreground": "oklch(0.985 0 0)",
              "chart-1": "oklch(0.845 0.143 164.978)",
              "chart-2": "oklch(0.696 0.17 162.48)",
              "chart-3": "oklch(0.596 0.145 163.225)",
              "chart-4": "oklch(0.508 0.118 165.612)",
              "chart-5": "oklch(0.432 0.095 166.913)",
              "sidebar-primary": "oklch(0.696 0.17 162.48)",
              "sidebar-primary-foreground": "oklch(0.262 0.051 172.552)"
            }
          }
        },
        {
          "name": "fuchsia",
          "title": "Fuchsia",
          "cssVars": {
            "light": {
              "primary": "oklch(0.518 0.253 323.949)",
              "primary-foreground": "oklch(0.977 0.017 320.058)",
              "secondary": "oklch(0.967 0.001 286.375)",
              "secondary-foreground": "oklch(0.21 0.006 285.885)",
              "chart-1": "oklch(0.833 0.145 321.434)",
              "chart-2": "oklch(0.667 0.295 322.15)",
              "chart-3": "oklch(0.591 0.293 322.896)",
              "chart-4": "oklch(0.518 0.253 323.949)",
              "chart-5": "oklch(0.452 0.211 324.591)",
              "sidebar-primary": "oklch(0.591 0.293 322.896)",
              "sidebar-primary-foreground": "oklch(0.977 0.017 320.058)"
            },
            "dark": {
              "primary": "oklch(0.452 0.211 324.591)",
              "primary-foreground": "oklch(0.977 0.017 320.058)",
              "secondary": "oklch(0.274 0.006 286.033)",
              "secondary-foreground": "oklch(0.985 0 0)",
              "chart-1": "oklch(0.833 0.145 321.434)",
              "chart-2": "oklch(0.667 0.295 322.15)",
              "chart-3": "oklch(0.591 0.293 322.896)",
              "chart-4": "oklch(0.518 0.253 323.949)",
              "chart-5": "oklch(0.452 0.211 324.591)",
              "sidebar-primary": "oklch(0.667 0.295 322.15)",
              "sidebar-primary-foreground": "oklch(0.977 0.017 320.058)"
            }
          }
        },
        {
          "name": "green",
          "title": "Green",
          "cssVars": {
            "light": {
              "primary": "oklch(0.532 0.157 131.589)",
              "primary-foreground": "oklch(0.986 0.031 120.757)",
              "secondary": "oklch(0.967 0.001 286.375)",
              "secondary-foreground": "oklch(0.21 0.006 285.885)",
              "chart-1": "oklch(0.871 0.15 154.449)",
              "chart-2": "oklch(0.723 0.219 149.579)",
              "chart-3": "oklch(0.627 0.194 149.214)",
              "chart-4": "oklch(0.527 0.154 150.069)",
              "chart-5": "oklch(0.448 0.119 151.328)",
              "sidebar-primary": "oklch(0.648 0.2 131.684)",
              "sidebar-primary-foreground": "oklch(0.986 0.031 120.757)"
            },
            "dark": {
              "primary": "oklch(0.453 0.124 130.933)",
              "primary-foreground": "oklch(0.986 0.031 120.757)",
              "secondary": "oklch(0.274 0.006 286.033)",
              "secondary-foreground": "oklch(0.985 0 0)",
              "chart-1": "oklch(0.871 0.15 154.449)",
              "chart-2": "oklch(0.723 0.219 149.579)",
              "chart-3": "oklch(0.627 0.194 149.214)",
              "chart-4": "oklch(0.527 0.154 150.069)",
              "chart-5": "oklch(0.448 0.119 151.328)",
              "sidebar-primary": "oklch(0.768 0.233 130.85)",
              "sidebar-primary-foreground": "oklch(0.986 0.031 120.757)"
            }
          }
        },
        {
          "name": "indigo",
          "title": "Indigo",
          "cssVars": {
            "light": {
              "primary": "oklch(0.457 0.24 277.023)",
              "primary-foreground": "oklch(0.962 0.018 272.314)",
              "secondary": "oklch(0.967 0.001 286.375)",
              "secondary-foreground": "oklch(0.21 0.006 285.885)",
              "chart-1": "oklch(0.785 0.115 274.713)",
              "chart-2": "oklch(0.585 0.233 277.117)",
              "chart-3": "oklch(0.511 0.262 276.966)",
              "chart-4": "oklch(0.457 0.24 277.023)",
              "chart-5": "oklch(0.398 0.195 277.366)",
              "sidebar-primary": "oklch(0.511 0.262 276.966)",
              "sidebar-primary-foreground": "oklch(0.962 0.018 272.314)"
            },
            "dark": {
              "primary": "oklch(0.398 0.195 277.366)",
              "primary-foreground": "oklch(0.962 0.018 272.314)",
              "secondary": "oklch(0.274 0.006 286.033)",
              "secondary-foreground": "oklch(0.985 0 0)",
              "chart-1": "oklch(0.785 0.115 274.713)",
              "chart-2": "oklch(0.585 0.233 277.117)",
              "chart-3": "oklch(0.511 0.262 276.966)",
              "chart-4": "oklch(0.457 0.24 277.023)",
              "chart-5": "oklch(0.398 0.195 277.366)",
              "sidebar-primary": "oklch(0.585 0.233 277.117)",
              "sidebar-primary-foreground": "oklch(0.962 0.018 272.314)"
            }
          }
        },
        {
          "name": "lime",
          "title": "Lime",
          "cssVars": {
            "light": {
              "primary": "oklch(0.532 0.157 131.589)",
              "primary-foreground": "oklch(0.986 0.031 120.757)",
              "secondary": "oklch(0.967 0.001 286.375)",
              "secondary-foreground": "oklch(0.21 0.006 285.885)",
              "chart-1": "oklch(0.897 0.196 126.665)",
              "chart-2": "oklch(0.768 0.233 130.85)",
              "chart-3": "oklch(0.648 0.2 131.684)",
              "chart-4": "oklch(0.532 0.157 131.589)",
              "chart-5": "oklch(0.453 0.124 130.933)",
              "sidebar-primary": "oklch(0.648 0.2 131.684)",
              "sidebar-primary-foreground": "oklch(0.986 0.031 120.757)"
            },
            "dark": {
              "primary": "oklch(0.453 0.124 130.933)",
              "primary-foreground": "oklch(0.986 0.031 120.757)",
              "secondary": "oklch(0.274 0.006 286.033)",
              "secondary-foreground": "oklch(0.985 0 0)",
              "chart-1": "oklch(0.897 0.196 126.665)",
              "chart-2": "oklch(0.768 0.233 130.85)",
              "chart-3": "oklch(0.648 0.2 131.684)",
              "chart-4": "oklch(0.532 0.157 131.589)",
              "chart-5": "oklch(0.453 0.124 130.933)",
              "sidebar-primary": "oklch(0.768 0.233 130.85)",
              "sidebar-primary-foreground": "oklch(0.274 0.072 132.109)"
            }
          }
        },
        {
          "name": "orange",
          "title": "Orange",
          "cssVars": {
            "light": {
              "primary": "oklch(0.553 0.195 38.402)",
              "primary-foreground": "oklch(0.98 0.016 73.684)",
              "secondary": "oklch(0.967 0.001 286.375)",
              "secondary-foreground": "oklch(0.21 0.006 285.885)",
              "chart-1": "oklch(0.837 0.128 66.29)",
              "chart-2": "oklch(0.705 0.213 47.604)",
              "chart-3": "oklch(0.646 0.222 41.116)",
              "chart-4": "oklch(0.553 0.195 38.402)",
              "chart-5": "oklch(0.47 0.157 37.304)",
              "sidebar-primary": "oklch(0.646 0.222 41.116)",
              "sidebar-primary-foreground": "oklch(0.98 0.016 73.684)"
            },
            "dark": {
              "primary": "oklch(0.47 0.157 37.304)",
              "primary-foreground": "oklch(0.98 0.016 73.684)",
              "secondary": "oklch(0.274 0.006 286.033)",
              "secondary-foreground": "oklch(0.985 0 0)",
              "chart-1": "oklch(0.837 0.128 66.29)",
              "chart-2": "oklch(0.705 0.213 47.604)",
              "chart-3": "oklch(0.646 0.222 41.116)",
              "chart-4": "oklch(0.553 0.195 38.402)",
              "chart-5": "oklch(0.47 0.157 37.304)",
              "sidebar-primary": "oklch(0.705 0.213 47.604)",
              "sidebar-primary-foreground": "oklch(0.98 0.016 73.684)"
            }
          }
        },
        {
          "name": "pink",
          "title": "Pink",
          "cssVars": {
            "light": {
              "primary": "oklch(0.525 0.223 3.958)",
              "primary-foreground": "oklch(0.971 0.014 343.198)",
              "secondary": "oklch(0.967 0.001 286.375)",
              "secondary-foreground": "oklch(0.21 0.006 285.885)",
              "chart-1": "oklch(0.823 0.12 346.018)",
              "chart-2": "oklch(0.656 0.241 354.308)",
              "chart-3": "oklch(0.592 0.249 0.584)",
              "chart-4": "oklch(0.525 0.223 3.958)",
              "chart-5": "oklch(0.459 0.187 3.815)",
              "sidebar-primary": "oklch(0.592 0.249 0.584)",
              "sidebar-primary-foreground": "oklch(0.971 0.014 343.198)"
            },
            "dark": {
              "primary": "oklch(0.459 0.187 3.815)",
              "primary-foreground": "oklch(0.971 0.014 343.198)",
              "secondary": "oklch(0.274 0.006 286.033)",
              "secondary-foreground": "oklch(0.985 0 0)",
              "chart-1": "oklch(0.823 0.12 346.018)",
              "chart-2": "oklch(0.656 0.241 354.308)",
              "chart-3": "oklch(0.592 0.249 0.584)",
              "chart-4": "oklch(0.525 0.223 3.958)",
              "chart-5": "oklch(0.459 0.187 3.815)",
              "sidebar-primary": "oklch(0.656 0.241 354.308)",
              "sidebar-primary-foreground": "oklch(0.971 0.014 343.198)"
            }
          }
        },
        {
          "name": "purple",
          "title": "Purple",
          "cssVars": {
            "light": {
              "primary": "oklch(0.496 0.265 301.924)",
              "primary-foreground": "oklch(0.977 0.014 308.299)",
              "secondary": "oklch(0.967 0.001 286.375)",
              "secondary-foreground": "oklch(0.21 0.006 285.885)",
              "chart-1": "oklch(0.827 0.119 306.383)",
              "chart-2": "oklch(0.627 0.265 303.9)",
              "chart-3": "oklch(0.558 0.288 302.321)",
              "chart-4": "oklch(0.496 0.265 301.924)",
              "chart-5": "oklch(0.438 0.218 303.724)",
              "sidebar-primary": "oklch(0.558 0.288 302.321)",
              "sidebar-primary-foreground": "oklch(0.977 0.014 308.299)"
            },
            "dark": {
              "primary": "oklch(0.438 0.218 303.724)",
              "primary-foreground": "oklch(0.977 0.014 308.299)",
              "secondary": "oklch(0.274 0.006 286.033)",
              "secondary-foreground": "oklch(0.985 0 0)",
              "chart-1": "oklch(0.827 0.119 306.383)",
              "chart-2": "oklch(0.627 0.265 303.9)",
              "chart-3": "oklch(0.558 0.288 302.321)",
              "chart-4": "oklch(0.496 0.265 301.924)",
              "chart-5": "oklch(0.438 0.218 303.724)",
              "sidebar-primary": "oklch(0.627 0.265 303.9)",
              "sidebar-primary-foreground": "oklch(0.977 0.014 308.299)"
            }
          }
        },
        {
          "name": "red",
          "title": "Red",
          "cssVars": {
            "light": {
              "primary": "oklch(0.505 0.213 27.518)",
              "primary-foreground": "oklch(0.971 0.013 17.38)",
              "secondary": "oklch(0.967 0.001 286.375)",
              "secondary-foreground": "oklch(0.21 0.006 285.885)",
              "chart-1": "oklch(0.808 0.114 19.571)",
              "chart-2": "oklch(0.637 0.237 25.331)",
              "chart-3": "oklch(0.577 0.245 27.325)",
              "chart-4": "oklch(0.505 0.213 27.518)",
              "chart-5": "oklch(0.444 0.177 26.899)",
              "sidebar-primary": "oklch(0.577 0.245 27.325)",
              "sidebar-primary-foreground": "oklch(0.971 0.013 17.38)"
            },
            "dark": {
              "primary": "oklch(0.444 0.177 26.899)",
              "primary-foreground": "oklch(0.971 0.013 17.38)",
              "secondary": "oklch(0.274 0.006 286.033)",
              "secondary-foreground": "oklch(0.985 0 0)",
              "chart-1": "oklch(0.808 0.114 19.571)",
              "chart-2": "oklch(0.637 0.237 25.331)",
              "chart-3": "oklch(0.577 0.245 27.325)",
              "chart-4": "oklch(0.505 0.213 27.518)",
              "chart-5": "oklch(0.444 0.177 26.899)",
              "sidebar-primary": "oklch(0.637 0.237 25.331)",
              "sidebar-primary-foreground": "oklch(0.971 0.013 17.38)"
            }
          }
        },
        {
          "name": "rose",
          "title": "Rose",
          "cssVars": {
            "light": {
              "primary": "oklch(0.514 0.222 16.935)",
              "primary-foreground": "oklch(0.969 0.015 12.422)",
              "secondary": "oklch(0.967 0.001 286.375)",
              "secondary-foreground": "oklch(0.21 0.006 285.885)",
              "chart-1": "oklch(0.81 0.117 11.638)",
              "chart-2": "oklch(0.645 0.246 16.439)",
              "chart-3": "oklch(0.586 0.253 17.585)",
              "chart-4": "oklch(0.514 0.222 16.935)",
              "chart-5": "oklch(0.455 0.188 13.697)",
              "sidebar-primary": "oklch(0.586 0.253 17.585)",
              "sidebar-primary-foreground": "oklch(0.969 0.015 12.422)"
            },
            "dark": {
              "primary": "oklch(0.455 0.188 13.697)",
              "primary-foreground": "oklch(0.969 0.015 12.422)",
              "secondary": "oklch(0.274 0.006 286.033)",
              "secondary-foreground": "oklch(0.985 0 0)",
              "chart-1": "oklch(0.81 0.117 11.638)",
              "chart-2": "oklch(0.645 0.246 16.439)",
              "chart-3": "oklch(0.586 0.253 17.585)",
              "chart-4": "oklch(0.514 0.222 16.935)",
              "chart-5": "oklch(0.455 0.188 13.697)",
              "sidebar": "oklch(0.21 0.006 285.885)",
              "sidebar-primary": "oklch(0.645 0.246 16.439)",
              "sidebar-primary-foreground": "oklch(0.969 0.015 12.422)"
            }
          }
        },
        {
          "name": "sky",
          "title": "Sky",
          "cssVars": {
            "light": {
              "primary": "oklch(0.5 0.134 242.749)",
              "primary-foreground": "oklch(0.977 0.013 236.62)",
              "secondary": "oklch(0.967 0.001 286.375)",
              "secondary-foreground": "oklch(0.21 0.006 285.885)",
              "chart-1": "oklch(0.828 0.111 230.318)",
              "chart-2": "oklch(0.685 0.169 237.323)",
              "chart-3": "oklch(0.588 0.158 241.966)",
              "chart-4": "oklch(0.5 0.134 242.749)",
              "chart-5": "oklch(0.443 0.11 240.79)",
              "sidebar-primary": "oklch(0.588 0.158 241.966)",
              "sidebar-primary-foreground": "oklch(0.977 0.013 236.62)"
            },
            "dark": {
              "primary": "oklch(0.443 0.11 240.79)",
              "primary-foreground": "oklch(0.977 0.013 236.62)",
              "secondary": "oklch(0.274 0.006 286.033)",
              "secondary-foreground": "oklch(0.985 0 0)",
              "chart-1": "oklch(0.828 0.111 230.318)",
              "chart-2": "oklch(0.685 0.169 237.323)",
              "chart-3": "oklch(0.588 0.158 241.966)",
              "chart-4": "oklch(0.5 0.134 242.749)",
              "chart-5": "oklch(0.443 0.11 240.79)",
              "sidebar-primary": "oklch(0.685 0.169 237.323)",
              "sidebar-primary-foreground": "oklch(0.293 0.066 243.157)"
            }
          }
        },
        {
          "name": "teal",
          "title": "Teal",
          "cssVars": {
            "light": {
              "primary": "oklch(0.511 0.096 186.391)",
              "primary-foreground": "oklch(0.984 0.014 180.72)",
              "secondary": "oklch(0.967 0.001 286.375)",
              "secondary-foreground": "oklch(0.21 0.006 285.885)",
              "chart-1": "oklch(0.855 0.138 181.071)",
              "chart-2": "oklch(0.704 0.14 182.503)",
              "chart-3": "oklch(0.6 0.118 184.704)",
              "chart-4": "oklch(0.511 0.096 186.391)",
              "chart-5": "oklch(0.437 0.078 188.216)",
              "sidebar-primary": "oklch(0.6 0.118 184.704)",
              "sidebar-primary-foreground": "oklch(0.984 0.014 180.72)"
            },
            "dark": {
              "primary": "oklch(0.437 0.078 188.216)",
              "primary-foreground": "oklch(0.984 0.014 180.72)",
              "secondary": "oklch(0.274 0.006 286.033)",
              "secondary-foreground": "oklch(0.985 0 0)",
              "chart-1": "oklch(0.855 0.138 181.071)",
              "chart-2": "oklch(0.704 0.14 182.503)",
              "chart-3": "oklch(0.6 0.118 184.704)",
              "chart-4": "oklch(0.511 0.096 186.391)",
              "chart-5": "oklch(0.437 0.078 188.216)",
              "sidebar-primary": "oklch(0.704 0.14 182.503)",
              "sidebar-primary-foreground": "oklch(0.277 0.046 192.524)"
            }
          }
        },
        {
          "name": "violet",
          "title": "Violet",
          "cssVars": {
            "light": {
              "primary": "oklch(0.491 0.27 292.581)",
              "primary-foreground": "oklch(0.969 0.016 293.756)",
              "secondary": "oklch(0.967 0.001 286.375)",
              "secondary-foreground": "oklch(0.21 0.006 285.885)",
              "chart-1": "oklch(0.811 0.111 293.571)",
              "chart-2": "oklch(0.606 0.25 292.717)",
              "chart-3": "oklch(0.541 0.281 293.009)",
              "chart-4": "oklch(0.491 0.27 292.581)",
              "chart-5": "oklch(0.432 0.232 292.759)",
              "sidebar-primary": "oklch(0.541 0.281 293.009)",
              "sidebar-primary-foreground": "oklch(0.969 0.016 293.756)"
            },
            "dark": {
              "primary": "oklch(0.432 0.232 292.759)",
              "primary-foreground": "oklch(0.969 0.016 293.756)",
              "secondary": "oklch(0.274 0.006 286.033)",
              "secondary-foreground": "oklch(0.985 0 0)",
              "chart-1": "oklch(0.811 0.111 293.571)",
              "chart-2": "oklch(0.606 0.25 292.717)",
              "chart-3": "oklch(0.541 0.281 293.009)",
              "chart-4": "oklch(0.491 0.27 292.581)",
              "chart-5": "oklch(0.432 0.232 292.759)",
              "sidebar-primary": "oklch(0.606 0.25 292.717)",
              "sidebar-primary-foreground": "oklch(0.969 0.016 293.756)"
            }
          }
        },
        {
          "name": "yellow",
          "title": "Yellow",
          "cssVars": {
            "light": {
              "primary": "oklch(0.852 0.199 91.936)",
              "primary-foreground": "oklch(0.421 0.095 57.708)",
              "secondary": "oklch(0.967 0.001 286.375)",
              "secondary-foreground": "oklch(0.21 0.006 285.885)",
              "chart-1": "oklch(0.905 0.182 98.111)",
              "chart-2": "oklch(0.795 0.184 86.047)",
              "chart-3": "oklch(0.681 0.162 75.834)",
              "chart-4": "oklch(0.554 0.135 66.442)",
              "chart-5": "oklch(0.476 0.114 61.907)",
              "sidebar-primary": "oklch(0.681 0.162 75.834)",
              "sidebar-primary-foreground": "oklch(0.987 0.026 102.212)"
            },
            "dark": {
              "primary": "oklch(0.795 0.184 86.047)",
              "primary-foreground": "oklch(0.421 0.095 57.708)",
              "secondary": "oklch(0.274 0.006 286.033)",
              "secondary-foreground": "oklch(0.985 0 0)",
              "chart-1": "oklch(0.905 0.182 98.111)",
              "chart-2": "oklch(0.795 0.184 86.047)",
              "chart-3": "oklch(0.681 0.162 75.834)",
              "chart-4": "oklch(0.554 0.135 66.442)",
              "chart-5": "oklch(0.476 0.114 61.907)",
              "sidebar-primary": "oklch(0.795 0.184 86.047)",
              "sidebar-primary-foreground": "oklch(0.987 0.026 102.212)"
            }
          }
        },
        {
          "name": "bejamas-blue",
          "title": "Marine",
          "cssVars": {
            "light": {
              "primary": "oklch(0.4634 0.2647 264.76)",
              "primary-foreground": "oklch(0.97 0.014 264.76)",
              "secondary": "oklch(0.967 0.001 286.375)",
              "secondary-foreground": "oklch(0.21 0.006 285.885)",
              "chart-1": "oklch(0.729 0.132 267.96)",
              "chart-2": "oklch(0.579 0.237 266.56)",
              "chart-3": "oklch(0.493 0.277 263.66)",
              "chart-4": "oklch(0.463 0.265 264.76)",
              "chart-5": "oklch(0.373 0.213 261.56)",
              "sidebar-primary": "oklch(0.4634 0.2647 264.76)",
              "sidebar-primary-foreground": "oklch(0.97 0.014 264.76)"
            },
            "dark": {
              "primary": "oklch(0.4634 0.2647 264.76)",
              "primary-foreground": "oklch(0.97 0.014 264.76)",
              "secondary": "oklch(0.274 0.006 286.033)",
              "secondary-foreground": "oklch(0.985 0 0)",
              "chart-1": "oklch(0.729 0.132 267.96)",
              "chart-2": "oklch(0.579 0.237 266.56)",
              "chart-3": "oklch(0.493 0.277 263.66)",
              "chart-4": "oklch(0.463 0.265 264.76)",
              "chart-5": "oklch(0.373 0.213 261.56)",
              "sidebar-primary": "oklch(0.4634 0.2647 264.76)",
              "sidebar-primary-foreground": "oklch(0.97 0.014 264.76)"
            }
          }
        },
        {
          "name": "bejamas-neon-yellow",
          "title": "Lime",
          "cssVars": {
            "light": {
              "primary": "oklch(91.98% 0.1905 128.5)",
              "primary-foreground": "oklch(0 0 0)",
              "secondary": "oklch(0.967 0.001 286.375)",
              "secondary-foreground": "oklch(0.21 0.006 285.885)",
              "chart-1": "oklch(0.905 0.182 98.111)",
              "chart-2": "oklch(0.795 0.184 86.047)",
              "chart-3": "oklch(0.681 0.162 75.834)",
              "chart-4": "oklch(91.98% 0.1905 128.5)",
              "chart-5": "oklch(0.476 0.114 61.907)",
              "sidebar-primary": "oklch(91.98% 0.1905 128.5)",
              "sidebar-primary-foreground": "oklch(0.421 0.095 57.708)"
            },
            "dark": {
              "primary": "oklch(91.98% 0.1905 128.5)",
              "primary-foreground": "oklch(0 0 0)",
              "secondary": "oklch(0.274 0.006 286.033)",
              "secondary-foreground": "oklch(0.985 0 0)",
              "chart-1": "oklch(0.905 0.182 98.111)",
              "chart-2": "oklch(0.795 0.184 86.047)",
              "chart-3": "oklch(0.681 0.162 75.834)",
              "chart-4": "oklch(91.98% 0.1905 128.5)",
              "chart-5": "oklch(0.476 0.114 61.907)",
              "sidebar-primary": "oklch(91.98% 0.1905 128.5)",
              "sidebar-primary-foreground": "oklch(0.421 0.095 57.708)"
            }
          }
        },
        {
          "name": "bejamas-apple",
          "title": "Apple",
          "cssVars": {
            "light": {
              "primary": "oklch(0.5468 0.2237 29.24)",
              "primary-foreground": "oklch(0.97 0.015 29.24)",
              "secondary": "oklch(0.967 0.001 286.375)",
              "secondary-foreground": "oklch(0.21 0.006 285.885)",
              "chart-1": "oklch(0.786 0.112 32.44)",
              "chart-2": "oklch(0.646 0.198 31.53)",
              "chart-3": "oklch(0.537 0.246 28.14)",
              "chart-4": "oklch(0.547 0.224 29.24)",
              "chart-5": "oklch(0.417 0.201 25.84)",
              "sidebar-primary": "oklch(0.5468 0.2237 29.24)",
              "sidebar-primary-foreground": "oklch(0.97 0.015 29.24)"
            },
            "dark": {
              "primary": "oklch(0.5468 0.2237 29.24)",
              "primary-foreground": "oklch(0.97 0.015 29.24)",
              "secondary": "oklch(0.274 0.006 286.033)",
              "secondary-foreground": "oklch(0.985 0 0)",
              "chart-1": "oklch(0.786 0.112 32.44)",
              "chart-2": "oklch(0.646 0.198 31.53)",
              "chart-3": "oklch(0.537 0.246 28.14)",
              "chart-4": "oklch(0.547 0.224 29.24)",
              "chart-5": "oklch(0.417 0.201 25.84)",
              "sidebar-primary": "oklch(0.5468 0.2237 29.24)",
              "sidebar-primary-foreground": "oklch(0.97 0.015 29.24)"
            }
          }
        },
        {
          "name": "bejamas-orange",
          "title": "Orange",
          "cssVars": {
            "light": {
              "primary": "oklch(0.7307 0.1848 51.7)",
              "primary-foreground": "oklch(0 0 0)",
              "secondary": "oklch(0.967 0.001 286.375)",
              "secondary-foreground": "oklch(0.21 0.006 285.885)",
              "chart-1": "oklch(0.858 0.105 38.59)",
              "chart-2": "oklch(0.748 0.195 37.19)",
              "chart-3": "oklch(0.648 0.232 34.29)",
              "chart-4": "oklch(0.678 0.211 35.39)",
              "chart-5": "oklch(0.538 0.190 32.19)",
              "sidebar-primary": "oklch(0.7307 0.1848 51.7)",
              "sidebar-primary-foreground": "oklch(0 0 0)"
            },
            "dark": {
              "primary": "oklch(0.7307 0.1848 51.7)",
              "primary-foreground": "oklch(0 0 0)",
              "secondary": "oklch(0.274 0.006 286.033)",
              "secondary-foreground": "oklch(0.985 0 0)",
              "chart-1": "oklch(0.858 0.105 38.59)",
              "chart-2": "oklch(0.748 0.195 37.19)",
              "chart-3": "oklch(0.648 0.232 34.29)",
              "chart-4": "oklch(0.678 0.211 35.39)",
              "chart-5": "oklch(0.538 0.190 32.19)",
              "sidebar-primary": "oklch(0.7307 0.1848 51.7)",
              "sidebar-primary-foreground": "oklch(0 0 0)"
            }
          }
        },
        {
          "name": "bejamas-sunflower",
          "title": "Sunflower",
          "cssVars": {
            "light": {
              "primary": "oklch(0.8989 0.1751 97.34)",
              "primary-foreground": "oklch(0 0 0)",
              "secondary": "oklch(0.967 0.001 286.375)",
              "secondary-foreground": "oklch(0.21 0.006 285.885)",
              "chart-1": "oklch(0.929 0.140 100.54)",
              "chart-2": "oklch(0.819 0.168 95.14)",
              "chart-3": "oklch(0.699 0.150 91.84)",
              "chart-4": "oklch(0.899 0.175 97.34)",
              "chart-5": "oklch(0.559 0.125 87.54)",
              "sidebar-primary": "oklch(0.8989 0.1751 97.34)",
              "sidebar-primary-foreground": "oklch(0 0 0)"
            },
            "dark": {
              "primary": "oklch(0.8989 0.1751 97.34)",
              "primary-foreground": "oklch(0 0 0)",
              "secondary": "oklch(0.274 0.006 286.033)",
              "secondary-foreground": "oklch(0.985 0 0)",
              "chart-1": "oklch(0.929 0.140 100.54)",
              "chart-2": "oklch(0.819 0.168 95.14)",
              "chart-3": "oklch(0.699 0.150 91.84)",
              "chart-4": "oklch(0.899 0.175 97.34)",
              "chart-5": "oklch(0.559 0.125 87.54)",
              "sidebar-primary": "oklch(0.8989 0.1751 97.34)",
              "sidebar-primary-foreground": "oklch(0 0 0)"
            }
          }
        },
        {
          "name": "bejamas-violet",
          "title": "Violet",
          "cssVars": {
            "light": {
              "primary": "oklch(0.6018 0.2871 308.31)",
              "primary-foreground": "oklch(0.97 0.015 308.31)",
              "secondary": "oklch(0.967 0.001 286.375)",
              "secondary-foreground": "oklch(0.21 0.006 285.885)",
              "chart-1": "oklch(0.812 0.144 311.51)",
              "chart-2": "oklch(0.682 0.257 310.01)",
              "chart-3": "oklch(0.582 0.306 307.21)",
              "chart-4": "oklch(0.602 0.287 308.31)",
              "chart-5": "oklch(0.462 0.244 305.01)",
              "sidebar-primary": "oklch(0.6018 0.2871 308.31)",
              "sidebar-primary-foreground": "oklch(0.97 0.015 308.31)"
            },
            "dark": {
              "primary": "oklch(0.6018 0.2871 308.31)",
              "primary-foreground": "oklch(0.97 0.015 308.31)",
              "secondary": "oklch(0.274 0.006 286.033)",
              "secondary-foreground": "oklch(0.985 0 0)",
              "chart-1": "oklch(0.812 0.144 311.51)",
              "chart-2": "oklch(0.682 0.257 310.01)",
              "chart-3": "oklch(0.582 0.306 307.21)",
              "chart-4": "oklch(0.602 0.287 308.31)",
              "chart-5": "oklch(0.462 0.244 305.01)",
              "sidebar-primary": "oklch(0.6018 0.2871 308.31)",
              "sidebar-primary-foreground": "oklch(0.97 0.015 308.31)"
            }
          }
        },
        {
          "name": "bejamas-turquoise",
          "title": "Turquoise",
          "cssVars": {
            "light": {
              "primary": "oklch(0.5431 0.0927 194.77)",
              "primary-foreground": "oklch(0.97 0.015 194.77)",
              "secondary": "oklch(0.967 0.001 286.375)",
              "secondary-foreground": "oklch(0.21 0.006 285.885)",
              "chart-1": "oklch(0.773 0.046 197.97)",
              "chart-2": "oklch(0.643 0.083 196.57)",
              "chart-3": "oklch(0.563 0.097 193.67)",
              "chart-4": "oklch(0.543 0.093 194.77)",
              "chart-5": "oklch(0.433 0.079 191.57)",
              "sidebar-primary": "oklch(0.5431 0.0927 194.77)",
              "sidebar-primary-foreground": "oklch(0.97 0.015 194.77)"
            },
            "dark": {
              "primary": "oklch(0.5431 0.0927 194.77)",
              "primary-foreground": "oklch(0.97 0.015 194.77)",
              "secondary": "oklch(0.274 0.006 286.033)",
              "secondary-foreground": "oklch(0.985 0 0)",
              "chart-1": "oklch(0.773 0.046 197.97)",
              "chart-2": "oklch(0.643 0.083 196.57)",
              "chart-3": "oklch(0.563 0.097 193.67)",
              "chart-4": "oklch(0.543 0.093 194.77)",
              "chart-5": "oklch(0.433 0.079 191.57)",
              "sidebar-primary": "oklch(0.5431 0.0927 194.77)",
              "sidebar-primary-foreground": "oklch(0.97 0.015 194.77)"
            }
          }
        },
        {
          "name": "bejamas-magenta",
          "title": "Magenta",
          "cssVars": {
            "light": {
              "primary": "oklch(0.6428 0.2311 1.62)",
              "primary-foreground": "oklch(0.97 0.015 1.62)",
              "secondary": "oklch(0.967 0.001 286.375)",
              "secondary-foreground": "oklch(0.21 0.006 285.885)",
              "chart-1": "oklch(0.823 0.116 4.82)",
              "chart-2": "oklch(0.713 0.207 3.42)",
              "chart-3": "oklch(0.623 0.246 0.52)",
              "chart-4": "oklch(0.643 0.231 1.62)",
              "chart-5": "oklch(0.513 0.197 358.42)",
              "sidebar-primary": "oklch(0.6428 0.2311 1.62)",
              "sidebar-primary-foreground": "oklch(0.97 0.015 1.62)"
            },
            "dark": {
              "primary": "oklch(0.6428 0.2311 1.62)",
              "primary-foreground": "oklch(0.97 0.015 1.62)",
              "secondary": "oklch(0.274 0.006 286.033)",
              "secondary-foreground": "oklch(0.985 0 0)",
              "chart-1": "oklch(0.823 0.116 4.82)",
              "chart-2": "oklch(0.713 0.207 3.42)",
              "chart-3": "oklch(0.623 0.246 0.52)",
              "chart-4": "oklch(0.643 0.231 1.62)",
              "chart-5": "oklch(0.513 0.197 358.42)",
              "sidebar-primary": "oklch(0.6428 0.2311 1.62)",
              "sidebar-primary-foreground": "oklch(0.97 0.015 1.62)"
            }
          }
        }
      ];
    }
  });

  // src/mcp-commands.ts
  function safeChannel(value) {
    if (value === void 0 || value === null)
      return NaN;
    var n = typeof value === "number" ? value : parseFloat(value);
    return isNaN(n) ? NaN : Math.max(0, Math.min(1, n));
  }
  function safePaint(color) {
    if (!color || typeof color !== "object")
      return null;
    var r = safeChannel(color.r);
    var g = safeChannel(color.g);
    var b = safeChannel(color.b);
    if (isNaN(r) || isNaN(g) || isNaN(b))
      return null;
    var a = safeChannel(color.a);
    return {
      type: "SOLID",
      color: { r, g, b },
      opacity: isNaN(a) ? 1 : a
    };
  }
  function sendProgressUpdate(commandId, commandType, status, progress, totalItems, processedItems, message, payload = null) {
    const update = {
      type: "command_progress",
      commandId,
      commandType,
      status,
      progress,
      totalItems,
      processedItems,
      message,
      timestamp: Date.now()
    };
    if (payload) {
      if (payload.currentChunk !== void 0 && payload.totalChunks !== void 0) {
        update.currentChunk = payload.currentChunk;
        update.totalChunks = payload.totalChunks;
        update.chunkSize = payload.chunkSize;
      }
      update.payload = payload;
    }
    figma.ui.postMessage(update);
    console.log(`Progress update: ${status} - ${progress}% - ${message}`);
    return update;
  }
  function getNodeByIdSafe(nodeId) {
    return __async(this, null, function* () {
      if (!nodeId)
        return null;
      return yield figma.getNodeByIdAsync(nodeId);
    });
  }
  function handleCommand(command, params) {
    return __async(this, null, function* () {
      switch (command) {
        case "ping":
          return { status: "ok" };
        case "get_document_info":
          return yield getDocumentInfo();
        case "get_selection":
          return yield getSelection();
        case "get_node_info":
          if (!params || !params.nodeId) {
            throw new Error("Missing nodeId parameter");
          }
          return yield getNodeInfo(params.nodeId);
        case "get_nodes_info":
          if (!params || !params.nodeIds || !Array.isArray(params.nodeIds)) {
            throw new Error("Missing or invalid nodeIds parameter");
          }
          return yield getNodesInfo(params.nodeIds);
        case "create_rectangle":
          return yield createRectangle(params);
        case "create_frame":
          return yield createFrame(params);
        case "create_text":
          return yield createText(params);
        case "set_fill_color":
          return yield setFillColor(params);
        case "set_stroke_color":
          return yield setStrokeColor(params);
        case "set_selection_colors":
          return yield setSelectionColors(params);
        case "move_node":
          return yield moveNode(params);
        case "resize_node":
          return yield resizeNode(params);
        case "delete_node":
          return yield deleteNode(params);
        case "get_styles":
          return yield getStyles();
        case "get_local_components":
          return yield getLocalComponents();
        case "create_component_instance":
          return yield createComponentInstance(params);
        case "export_node_as_image":
          return yield exportNodeAsImage(params);
        case "set_corner_radius":
          return yield setCornerRadius(params);
        case "set_text_content":
          return yield setTextContent(params);
        case "clone_node":
          return yield cloneNode(params);
        case "scan_text_nodes":
          return yield scanTextNodes(params);
        case "set_multiple_text_contents":
          return yield setMultipleTextContents(params);
        case "set_auto_layout":
          return yield setAutoLayout(params);
        case "set_font_name":
          return yield setFontName(params);
        case "set_font_size":
          return yield setFontSize(params);
        case "set_font_weight":
          return yield setFontWeight(params);
        case "set_letter_spacing":
          return yield setLetterSpacing(params);
        case "set_line_height":
          return yield setLineHeight(params);
        case "set_paragraph_spacing":
          return yield setParagraphSpacing(params);
        case "set_text_case":
          return yield setTextCase(params);
        case "set_text_decoration":
          return yield setTextDecoration(params);
        case "set_text_align":
          return yield setTextAlign(params);
        case "get_styled_text_segments":
          return yield getStyledTextSegments(params);
        case "load_font_async":
          return yield loadFontAsyncWrapper(params);
        case "get_remote_components":
          return yield getRemoteComponents(params);
        case "set_effects":
          return yield setEffects(params);
        case "set_effect_style_id":
          return yield setEffectStyleId(params);
        case "set_text_style_id":
          return yield setTextStyleId(params);
        case "group_nodes":
          return yield groupNodes(params);
        case "ungroup_nodes":
          return yield ungroupNodes(params);
        case "flatten_node":
          return yield flattenNode(params);
        case "insert_child":
          return yield insertChild(params);
        case "create_ellipse":
          return yield createEllipse(params);
        case "create_polygon":
          return yield createPolygon(params);
        case "create_star":
          return yield createStar(params);
        case "create_vector":
          return yield createVector(params);
        case "create_line":
          return yield createLine(params);
        case "create_component_from_node":
          return yield createComponentFromNode(params);
        case "create_component_set":
          return yield createComponentSet(params);
        case "set_instance_variant":
          return yield setInstanceVariant(params);
        case "create_page":
          return yield createPage(params);
        case "delete_page":
          return yield deletePage(params);
        case "rename_page":
          return yield renamePage(params);
        case "get_pages":
          return yield getPages();
        case "set_current_page":
          return yield setCurrentPage(params);
        case "rename_node":
          return yield renameNode(params);
        case "set_image_fill":
          return yield setImageFill(params);
        case "get_image_from_node":
          return yield getImageFromNode(params);
        case "replace_image_fill":
          return yield replaceImageFill(params);
        case "apply_image_transform":
          return yield applyImageTransform(params);
        case "set_image_filters":
          return yield setImageFilters(params);
        case "rotate_node":
          return yield rotateNode(params);
        case "set_node_properties":
          return yield setNodeProperties(params);
        case "reorder_node":
          return yield reorderNode(params);
        case "duplicate_page":
          return yield duplicatePage(params);
        case "convert_to_frame":
          return yield convertToFrame(params);
        case "set_gradient":
          return yield setGradient(params);
        case "boolean_operation":
          return yield booleanOperation(params);
        case "set_svg":
          return yield setSvg(params);
        case "get_svg":
          return yield getSvg(params);
        case "set_image":
          return yield setImage(params);
        case "set_grid":
          return yield setGrid(params);
        case "get_grid":
          return yield getGrid(params);
        case "set_guide":
          return yield setGuide(params);
        case "get_guide":
          return yield getGuide(params);
        case "set_annotation":
          return yield setAnnotation(params);
        case "get_annotation":
          return yield getAnnotation(params);
        case "get_variables":
          return yield getVariables(params);
        case "set_variable":
          return yield setVariable(params);
        case "apply_variable_to_node":
          return yield applyVariableToNode(params);
        case "switch_variable_mode":
          return yield switchVariableMode(params);
        case "get_figjam_elements":
          return yield getFigJamElements();
        case "create_sticky":
          return yield createSticky(params);
        case "set_sticky_text":
          return yield setStickyText(params);
        case "create_shape_with_text":
          return yield createShapeWithText(params);
        case "create_connector":
          return yield createConnector(params);
        case "create_section":
          return yield createSection(params);
        case "set_reactions":
          return yield setReactions(params);
        case "get_reactions":
          return yield getReactions(params);
        case "detach_instance":
          return yield detachInstance(params);
        case "create_text_style":
          return yield createTextStyle(params);
        case "create_paint_style":
          return yield createPaintStyle(params);
        case "create_effect_style":
          return yield createEffectStyle(params);
        default:
          throw new Error(`Unknown command: ${command}`);
      }
    });
  }
  function getDocumentInfo() {
    return __async(this, null, function* () {
      yield figma.currentPage.loadAsync();
      const page = figma.currentPage;
      return {
        name: page.name,
        id: page.id,
        type: page.type,
        children: page.children.map((node) => ({
          id: node.id,
          name: node.name,
          type: node.type
        })),
        currentPage: {
          id: page.id,
          name: page.name,
          childCount: page.children.length
        },
        pages: [
          {
            id: page.id,
            name: page.name,
            childCount: page.children.length
          }
        ]
      };
    });
  }
  function getSelection() {
    return __async(this, null, function* () {
      return {
        selectionCount: figma.currentPage.selection.length,
        selection: figma.currentPage.selection.map((node) => ({
          id: node.id,
          name: node.name,
          type: node.type,
          visible: node.visible
        }))
      };
    });
  }
  function getNodeInfo(nodeId) {
    return __async(this, null, function* () {
      const node = yield getNodeByIdSafe(nodeId);
      if (!node) {
        throw new Error(`Node not found with ID: ${nodeId}`);
      }
      const response = yield node.exportAsync({
        format: "JSON_REST_V1"
      });
      if ("x" in node && "y" in node) {
        response.document.localPosition = {
          x: node.x,
          y: node.y
        };
      }
      return response.document;
    });
  }
  function getNodesInfo(nodeIds) {
    return __async(this, null, function* () {
      try {
        const nodes = yield Promise.all(
          nodeIds.map((id) => getNodeByIdSafe(id))
        );
        const validNodes = nodes.filter((node) => node !== null);
        const responses = yield Promise.all(
          validNodes.map((node) => __async(this, null, function* () {
            const response = yield node.exportAsync({
              format: "JSON_REST_V1"
            });
            const doc = response.document;
            if ("x" in node && "y" in node) {
              doc.localPosition = {
                x: node.x,
                y: node.y
              };
            }
            return {
              nodeId: node.id,
              document: doc
            };
          }))
        );
        return responses;
      } catch (error) {
        throw new Error(`Error getting nodes info: ${error.message}`);
      }
    });
  }
  function createRectangle(params) {
    return __async(this, null, function* () {
      const {
        x = 0,
        y = 0,
        width = 100,
        height = 100,
        name = "Rectangle",
        parentId,
        fillColor,
        strokeColor,
        strokeWeight
      } = params || {};
      const rect = figma.createRectangle();
      rect.x = x;
      rect.y = y;
      rect.resize(width, height);
      rect.name = name;
      if (fillColor) {
        var fillPaint = safePaint(fillColor);
        if (fillPaint)
          rect.fills = [fillPaint];
      }
      if (strokeColor) {
        var strokePaint = safePaint(strokeColor);
        if (strokePaint)
          rect.strokes = [strokePaint];
      }
      if (strokeWeight !== void 0) {
        rect.strokeWeight = strokeWeight;
      }
      if (parentId) {
        const parentNode = yield getNodeByIdSafe(parentId);
        if (!parentNode) {
          throw new Error(`Parent node not found with ID: ${parentId}`);
        }
        if (!("appendChild" in parentNode)) {
          throw new Error(`Parent node does not support children: ${parentId}`);
        }
        parentNode.appendChild(rect);
      } else {
        figma.currentPage.appendChild(rect);
      }
      return {
        id: rect.id,
        name: rect.name,
        x: rect.x,
        y: rect.y,
        width: rect.width,
        height: rect.height,
        parentId: rect.parent ? rect.parent.id : void 0
      };
    });
  }
  function createFrame(params) {
    return __async(this, null, function* () {
      const {
        x = 0,
        y = 0,
        width = 100,
        height = 100,
        name = "Frame",
        parentId,
        fillColor,
        strokeColor,
        strokeWeight
      } = params || {};
      const frame = figma.createFrame();
      frame.x = x;
      frame.y = y;
      frame.resize(width, height);
      frame.name = name;
      if (fillColor) {
        var fillPaint = safePaint(fillColor);
        if (fillPaint)
          frame.fills = [fillPaint];
      }
      if (strokeColor) {
        var strokePaint = safePaint(strokeColor);
        if (strokePaint)
          frame.strokes = [strokePaint];
      }
      if (strokeWeight !== void 0) {
        frame.strokeWeight = strokeWeight;
      }
      var targetParent = figma.currentPage;
      if (parentId) {
        const parentNode = yield getNodeByIdSafe(parentId);
        if (!parentNode) {
          throw new Error(`Parent node not found with ID: ${parentId}`);
        }
        if (!("appendChild" in parentNode)) {
          throw new Error(`Parent node does not support children: ${parentId}`);
        }
        targetParent = parentNode;
      }
      targetParent.appendChild(frame);
      if (targetParent.type === "PAGE") {
        var colCount = 4;
        if (width >= 1024)
          colCount = 12;
        else if (width >= 768)
          colCount = 8;
        frame.layoutGrids = [
          {
            pattern: "COLUMNS",
            alignment: "STRETCH",
            count: colCount,
            gutterSize: 20,
            offset: 20,
            visible: false,
            color: { r: 1, g: 0, b: 0, a: 0.1 }
          }
        ];
      }
      return {
        id: frame.id,
        name: frame.name,
        x: frame.x,
        y: frame.y,
        width: frame.width,
        height: frame.height,
        fills: frame.fills,
        strokes: frame.strokes,
        strokeWeight: frame.strokeWeight,
        parentId: frame.parent ? frame.parent.id : void 0
      };
    });
  }
  function createText(params) {
    return __async(this, null, function* () {
      const {
        x = 0,
        y = 0,
        text = "Text",
        fontSize = 14,
        fontWeight = 400,
        fontColor = { r: 0, g: 0, b: 0, a: 1 },
        // Default to black
        name = "Text",
        parentId,
        textAlignHorizontal,
        textAutoResize,
        width
      } = params || {};
      const getFontStyle = (weight) => {
        switch (weight) {
          case 100:
            return "Thin";
          case 200:
            return "Extra Light";
          case 300:
            return "Light";
          case 400:
            return "Regular";
          case 500:
            return "Medium";
          case 600:
            return "Semi Bold";
          case 700:
            return "Bold";
          case 800:
            return "Extra Bold";
          case 900:
            return "Black";
          default:
            return "Regular";
        }
      };
      const textNode = figma.createText();
      textNode.x = x;
      textNode.y = y;
      textNode.name = name;
      try {
        yield figma.loadFontAsync({
          family: "Inter",
          style: getFontStyle(fontWeight)
        });
        textNode.fontName = { family: "Inter", style: getFontStyle(fontWeight) };
        textNode.fontSize = parseInt(fontSize);
      } catch (error) {
        console.error("Error setting font size", error);
      }
      yield setCharacters(textNode, text);
      const paintStyle = {
        type: "SOLID",
        color: {
          r: parseFloat(fontColor.r) || 0,
          g: parseFloat(fontColor.g) || 0,
          b: parseFloat(fontColor.b) || 0
        },
        opacity: parseFloat(fontColor.a) || 1
      };
      textNode.fills = [paintStyle];
      if (textAlignHorizontal && ["LEFT", "CENTER", "RIGHT", "JUSTIFIED"].includes(textAlignHorizontal)) {
        textNode.textAlignHorizontal = textAlignHorizontal;
      }
      if (textAutoResize && ["WIDTH_AND_HEIGHT", "HEIGHT", "NONE", "TRUNCATE"].includes(textAutoResize)) {
        textNode.textAutoResize = textAutoResize;
      }
      if (width && typeof width === "number" && width > 0) {
        textNode.resize(width, textNode.height);
      }
      if (parentId) {
        const parentNode = yield getNodeByIdSafe(parentId);
        if (!parentNode) {
          throw new Error(`Parent node not found with ID: ${parentId}`);
        }
        if (!("appendChild" in parentNode)) {
          throw new Error(`Parent node does not support children: ${parentId}`);
        }
        parentNode.appendChild(textNode);
      } else {
        figma.currentPage.appendChild(textNode);
      }
      return {
        id: textNode.id,
        name: textNode.name,
        x: textNode.x,
        y: textNode.y,
        width: textNode.width,
        height: textNode.height,
        characters: textNode.characters,
        fontSize: textNode.fontSize,
        fontWeight,
        fontColor,
        fontName: textNode.fontName,
        fills: textNode.fills,
        parentId: textNode.parent ? textNode.parent.id : void 0
      };
    });
  }
  function setFillColor(params) {
    return __async(this, null, function* () {
      const {
        nodeId,
        color
      } = params || {};
      if (!nodeId) {
        throw new Error("Missing nodeId parameter");
      }
      const node = yield getNodeByIdSafe(nodeId);
      if (!node) {
        throw new Error(`Node not found with ID: ${nodeId}`);
      }
      if (!("fills" in node)) {
        throw new Error(`Node does not support fills: ${nodeId}`);
      }
      const fillPaint = safePaint(color);
      if (!fillPaint) {
        throw new Error("Invalid color data received from MCP layer.");
      }
      node.fills = [fillPaint];
      return {
        id: node.id,
        name: node.name,
        fills: [fillPaint]
      };
    });
  }
  function setStrokeColor(params) {
    return __async(this, null, function* () {
      const {
        nodeId,
        color,
        strokeWeight
      } = params || {};
      if (!nodeId) {
        throw new Error("Missing nodeId parameter");
      }
      const node = yield getNodeByIdSafe(nodeId);
      if (!node) {
        throw new Error(`Node not found with ID: ${nodeId}`);
      }
      if (!("strokes" in node)) {
        throw new Error(`Node does not support strokes: ${nodeId}`);
      }
      const strokePaint = safePaint(color);
      if (!strokePaint) {
        throw new Error("Invalid color data received from MCP layer.");
      }
      node.strokes = [strokePaint];
      if (strokeWeight !== void 0) {
        node.strokeWeight = parseFloat(strokeWeight);
      }
      return {
        id: node.id,
        name: node.name,
        strokes: node.strokes,
        strokeWeight: "strokeWeight" in node ? node.strokeWeight : void 0
      };
    });
  }
  function setSelectionColors(params) {
    return __async(this, null, function* () {
      const { nodeId, r, g, b, a, commandId } = params || {};
      if (!nodeId) {
        throw new Error("Missing nodeId parameter");
      }
      const node = yield getNodeByIdSafe(nodeId);
      if (!node) {
        throw new Error(`Node not found with ID: ${nodeId}`);
      }
      if (r === void 0 || g === void 0 || b === void 0) {
        throw new Error("RGB components (r, g, b) are required");
      }
      const newColor = {
        r: parseFloat(r),
        g: parseFloat(g),
        b: parseFloat(b)
      };
      const opacity = a !== void 0 ? parseFloat(a) : 1;
      let targets = [];
      if ("findAll" in node) {
        targets = [node].concat(node.findAll(() => true));
      } else {
        targets = [node];
      }
      let changedCount = 0;
      const totalNodes = targets.length;
      const chunkSize = 200;
      sendProgressUpdate(commandId, "set_selection_colors", "started", 0, totalNodes, 0, `Starting color update for ${totalNodes} nodes...`);
      for (let i = 0; i < totalNodes; i += chunkSize) {
        const chunk = targets.slice(i, i + chunkSize);
        for (const n of chunk) {
          let nodeModified = false;
          if ("strokes" in n && Array.isArray(n.strokes) && n.strokes.length > 0) {
            let strokesChanged = false;
            const newStrokes = n.strokes.map((s) => {
              if (s.type === "SOLID") {
                if (s.color.r !== newColor.r || s.color.g !== newColor.g || s.color.b !== newColor.b || s.opacity !== opacity) {
                  strokesChanged = true;
                  return Object.assign({}, s, { color: newColor, opacity });
                }
              }
              return s;
            });
            if (strokesChanged) {
              n.strokes = newStrokes;
              nodeModified = true;
            }
          }
          if ("fills" in n && Array.isArray(n.fills) && n.fills.length > 0) {
            let fillsChanged = false;
            const newFills = n.fills.map((f) => {
              if (f.type === "SOLID" && f.visible !== false) {
                if (f.color.r !== newColor.r || f.color.g !== newColor.g || f.color.b !== newColor.b || f.opacity !== opacity) {
                  fillsChanged = true;
                  return Object.assign({}, f, { color: newColor, opacity, visible: true });
                }
              }
              return f;
            });
            if (fillsChanged) {
              n.fills = newFills;
              nodeModified = true;
            }
          }
          if (nodeModified) {
            changedCount++;
          }
        }
        const processedCount = Math.min(i + chunkSize, totalNodes);
        const progress = Math.round(processedCount / totalNodes * 100);
        sendProgressUpdate(commandId, "set_selection_colors", "in_progress", progress, totalNodes, processedCount, `Processed ${processedCount}/${totalNodes} nodes...`);
        yield new Promise((resolve) => setTimeout(resolve, 1));
      }
      return {
        id: node.id,
        name: node.name,
        nodesChanged: changedCount,
        totalProcessed: totalNodes
      };
    });
  }
  function moveNode(params) {
    return __async(this, null, function* () {
      const { nodeId, x, y } = params || {};
      if (!nodeId) {
        throw new Error("Missing nodeId parameter");
      }
      if (x === void 0 || y === void 0) {
        throw new Error("Missing x or y parameters");
      }
      const node = yield getNodeByIdSafe(nodeId);
      if (!node) {
        throw new Error(`Node not found with ID: ${nodeId}`);
      }
      if (!("x" in node) || !("y" in node)) {
        throw new Error(`Node does not support position: ${nodeId}`);
      }
      node.x = x;
      node.y = y;
      return {
        id: node.id,
        name: node.name,
        x: node.x,
        y: node.y
      };
    });
  }
  function resizeNode(params) {
    return __async(this, null, function* () {
      const { nodeId, width, height } = params || {};
      if (!nodeId) {
        throw new Error("Missing nodeId parameter");
      }
      if (width === void 0 || height === void 0) {
        throw new Error("Missing width or height parameters");
      }
      const node = yield getNodeByIdSafe(nodeId);
      if (!node) {
        throw new Error(`Node not found with ID: ${nodeId}`);
      }
      if (!("resize" in node)) {
        throw new Error(`Node does not support resizing: ${nodeId}`);
      }
      node.resize(width, height);
      return {
        id: node.id,
        name: node.name,
        width: node.width,
        height: node.height
      };
    });
  }
  function deleteNode(params) {
    return __async(this, null, function* () {
      const { nodeId } = params || {};
      if (!nodeId) {
        throw new Error("Missing nodeId parameter");
      }
      const node = yield getNodeByIdSafe(nodeId);
      if (!node) {
        throw new Error(`Node not found with ID: ${nodeId}`);
      }
      const nodeInfo = {
        id: node.id,
        name: node.name,
        type: node.type
      };
      node.remove();
      return nodeInfo;
    });
  }
  function getStyles() {
    return __async(this, null, function* () {
      const styles = {
        colors: yield figma.getLocalPaintStylesAsync(),
        texts: yield figma.getLocalTextStylesAsync(),
        effects: yield figma.getLocalEffectStylesAsync(),
        grids: yield figma.getLocalGridStylesAsync()
      };
      return {
        colors: styles.colors.map((style) => ({
          id: style.id,
          name: style.name,
          key: style.key,
          paint: style.paints[0]
        })),
        texts: styles.texts.map((style) => ({
          id: style.id,
          name: style.name,
          key: style.key,
          fontSize: style.fontSize,
          fontName: style.fontName
        })),
        effects: styles.effects.map((style) => ({
          id: style.id,
          name: style.name,
          key: style.key
        })),
        grids: styles.grids.map((style) => ({
          id: style.id,
          name: style.name,
          key: style.key
        }))
      };
    });
  }
  function getLocalComponents() {
    return __async(this, null, function* () {
      yield figma.loadAllPagesAsync();
      const components = figma.root.findAllWithCriteria({
        types: ["COMPONENT"]
      });
      return {
        count: components.length,
        components: components.map((component) => ({
          id: component.id,
          name: component.name,
          key: "key" in component ? component.key : null
        }))
      };
    });
  }
  function createComponentInstance(params) {
    return __async(this, null, function* () {
      const { componentKey, x = 0, y = 0, parentId } = params || {};
      if (!componentKey) {
        throw new Error("Missing componentKey parameter");
      }
      try {
        console.log(`Looking for component with key: ${componentKey}...`);
        let component = null;
        try {
          const currentPageComponents = figma.currentPage.findAllWithCriteria({
            types: ["COMPONENT"]
          });
          component = currentPageComponents.find((c) => c.key === componentKey);
          if (!component) {
            console.log(`Not on current page, searching all pages...`);
            yield figma.loadAllPagesAsync();
            const allComponents = figma.root.findAllWithCriteria({
              types: ["COMPONENT"]
            });
            component = allComponents.find((c) => c.key === componentKey);
          }
          if (component) {
            console.log(`Found component locally: ${component.name}`);
          }
        } catch (findError) {
          console.log(`Error searching locally: ${findError.message}`);
        }
        if (!component) {
          console.log(`Component not found locally, trying import...`);
          let timeoutId;
          const timeoutPromise = new Promise((_, reject) => {
            timeoutId = setTimeout(() => {
              reject(new Error("Timeout while importing component (10s). The component may be in a team library you don't have access to."));
            }, 1e4);
          });
          const importPromise = figma.importComponentByKeyAsync(componentKey);
          component = yield Promise.race([importPromise, timeoutPromise]).finally(() => {
            clearTimeout(timeoutId);
          });
        }
        console.log(`Component ready, creating instance...`);
        try {
          const instance = component.createInstance();
          instance.x = x;
          instance.y = y;
          if (parentId) {
            const parentNode = yield getNodeByIdSafe(parentId);
            if (!parentNode) {
              throw new Error(`Parent node not found with ID: ${parentId}`);
            }
            if (!("appendChild" in parentNode)) {
              throw new Error(`Parent node does not support children: ${parentId}`);
            }
            parentNode.appendChild(instance);
          } else {
            figma.currentPage.appendChild(instance);
          }
          console.log(`Component instance created and added to ${parentId ? "parent " + parentId : "page"} successfully`);
          return {
            id: instance.id,
            name: instance.name,
            x: instance.x,
            y: instance.y,
            width: instance.width,
            height: instance.height,
            componentId: instance.componentId
          };
        } catch (instanceError) {
          console.error(`Error creating component instance: ${instanceError.message}`);
          throw new Error(`Error creating component instance: ${instanceError.message}`);
        }
      } catch (error) {
        console.error(`Detailed error creating component instance: ${error.message || "Unknown error"}`);
        console.error(`Stack trace: ${error.stack || "Not available"}`);
        if (error.message.includes("timeout") || error.message.includes("Timeout")) {
          throw new Error(`The component import timed out after 10 seconds. This usually happens with complex remote components or network issues. Try again later or use a simpler component.`);
        } else if (error.message.includes("not found") || error.message.includes("Not found")) {
          throw new Error(`Component with key "${componentKey}" not found. Make sure the component exists and is accessible in your document or team libraries.`);
        } else if (error.message.includes("permission") || error.message.includes("Permission")) {
          throw new Error(`You don't have permission to use this component. Make sure you have access to the team library containing this component.`);
        } else {
          throw new Error(`Error creating component instance: ${error.message}`);
        }
      }
    });
  }
  function exportNodeAsImage(params) {
    return __async(this, null, function* () {
      const { nodeId, scale = 1, format = "PNG" } = params || {};
      if (!nodeId) {
        throw new Error("Missing nodeId parameter");
      }
      console.log(`[exportNodeAsImage] Starting export for node ${nodeId}, scale: ${scale}, format: ${format}`);
      const startTime = Date.now();
      const node = yield getNodeByIdSafe(nodeId);
      if (!node) {
        throw new Error(`Node not found with ID: ${nodeId}`);
      }
      console.log(`[exportNodeAsImage] Node found: ${node.name}, type: ${node.type}, size: ${node.width}x${node.height}`);
      if (!("exportAsync" in node)) {
        throw new Error(`Node does not support exporting: ${nodeId}`);
      }
      try {
        const settings = {
          format,
          constraint: { type: "SCALE", value: scale }
        };
        let timeoutId;
        const timeoutPromise = new Promise((_, reject) => {
          timeoutId = setTimeout(() => {
            reject(new Error(`Export timed out after 60s for node ${nodeId} (${node.name}, ${node.width}x${node.height})`));
          }, 6e4);
        });
        const exportPromise = node.exportAsync(settings);
        const bytes = yield Promise.race([exportPromise, timeoutPromise]).finally(() => {
          clearTimeout(timeoutId);
        });
        console.log(`[exportNodeAsImage] Export completed in ${Date.now() - startTime}ms, bytes: ${bytes.length}`);
        let mimeType;
        switch (format) {
          case "PNG":
            mimeType = "image/png";
            break;
          case "JPG":
            mimeType = "image/jpeg";
            break;
          case "SVG":
            mimeType = "image/svg+xml";
            break;
          case "PDF":
            mimeType = "application/pdf";
            break;
          default:
            mimeType = "application/octet-stream";
        }
        const base64 = customBase64Encode(bytes);
        return {
          nodeId,
          format,
          scale,
          mimeType,
          imageData: base64
        };
      } catch (error) {
        throw new Error(`Error exporting node as image: ${error.message}`);
      }
    });
  }
  function customBase64Encode(bytes) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    let base64 = "";
    const byteLength = bytes.byteLength;
    const byteRemainder = byteLength % 3;
    const mainLength = byteLength - byteRemainder;
    let a, b, c, d;
    let chunk;
    for (let i = 0; i < mainLength; i = i + 3) {
      chunk = bytes[i] << 16 | bytes[i + 1] << 8 | bytes[i + 2];
      a = (chunk & 16515072) >> 18;
      b = (chunk & 258048) >> 12;
      c = (chunk & 4032) >> 6;
      d = chunk & 63;
      base64 += chars[a] + chars[b] + chars[c] + chars[d];
    }
    if (byteRemainder === 1) {
      chunk = bytes[mainLength];
      a = (chunk & 252) >> 2;
      b = (chunk & 3) << 4;
      base64 += chars[a] + chars[b] + "==";
    } else if (byteRemainder === 2) {
      chunk = bytes[mainLength] << 8 | bytes[mainLength + 1];
      a = (chunk & 64512) >> 10;
      b = (chunk & 1008) >> 4;
      c = (chunk & 15) << 2;
      base64 += chars[a] + chars[b] + chars[c] + "=";
    }
    return base64;
  }
  function customBase64Decode(base64) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    const lookup = new Uint8Array(256);
    for (let i = 0; i < chars.length; i++) {
      lookup[chars.charCodeAt(i)] = i;
    }
    let padding = 0;
    if (base64.length > 0 && base64[base64.length - 1] === "=")
      padding++;
    if (base64.length > 1 && base64[base64.length - 2] === "=")
      padding++;
    const byteLength = base64.length * 3 / 4 - padding;
    const bytes = new Uint8Array(byteLength);
    let p = 0;
    for (let i = 0; i < base64.length; i += 4) {
      const a = lookup[base64.charCodeAt(i)];
      const b = lookup[base64.charCodeAt(i + 1)];
      const c = lookup[base64.charCodeAt(i + 2)];
      const d = lookup[base64.charCodeAt(i + 3)];
      bytes[p++] = a << 2 | b >> 4;
      if (p < byteLength)
        bytes[p++] = (b & 15) << 4 | c >> 2;
      if (p < byteLength)
        bytes[p++] = (c & 3) << 6 | d;
    }
    return bytes;
  }
  function setCornerRadius(params) {
    return __async(this, null, function* () {
      const { nodeId, radius, corners } = params || {};
      if (!nodeId) {
        throw new Error("Missing nodeId parameter");
      }
      if (radius === void 0) {
        throw new Error("Missing radius parameter");
      }
      const node = yield getNodeByIdSafe(nodeId);
      if (!node) {
        throw new Error(`Node not found with ID: ${nodeId}`);
      }
      if (!("cornerRadius" in node)) {
        throw new Error(`Node does not support corner radius: ${nodeId}`);
      }
      if (corners && Array.isArray(corners) && corners.length === 4) {
        if ("topLeftRadius" in node) {
          if (corners[0])
            node.topLeftRadius = radius;
          if (corners[1])
            node.topRightRadius = radius;
          if (corners[2])
            node.bottomRightRadius = radius;
          if (corners[3])
            node.bottomLeftRadius = radius;
        } else {
          node.cornerRadius = radius;
        }
      } else {
        node.cornerRadius = radius;
      }
      return {
        id: node.id,
        name: node.name,
        cornerRadius: "cornerRadius" in node ? node.cornerRadius : void 0,
        topLeftRadius: "topLeftRadius" in node ? node.topLeftRadius : void 0,
        topRightRadius: "topRightRadius" in node ? node.topRightRadius : void 0,
        bottomRightRadius: "bottomRightRadius" in node ? node.bottomRightRadius : void 0,
        bottomLeftRadius: "bottomLeftRadius" in node ? node.bottomLeftRadius : void 0
      };
    });
  }
  function setTextContent(params) {
    return __async(this, null, function* () {
      const { nodeId, text } = params || {};
      if (!nodeId) {
        throw new Error("Missing nodeId parameter");
      }
      if (text === void 0) {
        throw new Error("Missing text parameter");
      }
      const node = yield getNodeByIdSafe(nodeId);
      if (!node) {
        throw new Error(`Node not found with ID: ${nodeId}`);
      }
      if (node.type !== "TEXT") {
        throw new Error(`Node is not a text node: ${nodeId}`);
      }
      try {
        yield figma.loadFontAsync(node.fontName);
        yield setCharacters(node, text);
        return {
          id: node.id,
          name: node.name,
          characters: node.characters,
          fontName: node.fontName
        };
      } catch (error) {
        throw new Error(`Error setting text content: ${error.message}`);
      }
    });
  }
  function uniqBy(arr, predicate) {
    const cb = typeof predicate === "function" ? predicate : (o) => o[predicate];
    return [
      ...arr.reduce((map, item) => {
        const key = item === null || item === void 0 ? item : cb(item);
        map.has(key) || map.set(key, item);
        return map;
      }, /* @__PURE__ */ new Map()).values()
    ];
  }
  function cloneNode(params) {
    return __async(this, null, function* () {
      const { nodeId, x, y, parentId } = params || {};
      if (!nodeId) {
        throw new Error("Missing nodeId parameter");
      }
      const node = yield getNodeByIdSafe(nodeId);
      if (!node) {
        throw new Error(`Node not found with ID: ${nodeId}`);
      }
      const clone = node.clone();
      if (x !== void 0 && y !== void 0) {
        if (!("x" in clone) || !("y" in clone)) {
          throw new Error(`Cloned node does not support position: ${nodeId}`);
        }
        clone.x = x;
        clone.y = y;
      }
      if (parentId) {
        const parentNode = yield getNodeByIdSafe(parentId);
        if (!parentNode) {
          throw new Error(`Parent node not found with ID: ${parentId}`);
        }
        if (!("appendChild" in parentNode)) {
          throw new Error(`Parent node does not support children: ${parentId}`);
        }
        parentNode.appendChild(clone);
      } else if (node.parent) {
        node.parent.appendChild(clone);
      } else {
        figma.currentPage.appendChild(clone);
      }
      return {
        id: clone.id,
        name: clone.name,
        x: "x" in clone ? clone.x : void 0,
        y: "y" in clone ? clone.y : void 0,
        width: "width" in clone ? clone.width : void 0,
        height: "height" in clone ? clone.height : void 0
      };
    });
  }
  function scanTextNodes(params) {
    return __async(this, null, function* () {
      console.log(`Starting to scan text nodes from node ID: ${params.nodeId}`);
      const { nodeId, useChunking = true, chunkSize = 10, commandId = generateCommandId() } = params || {};
      const node = yield getNodeByIdSafe(nodeId);
      if (!node) {
        console.error(`Node with ID ${nodeId} not found`);
        sendProgressUpdate(
          commandId,
          "scan_text_nodes",
          "error",
          0,
          0,
          0,
          `Node with ID ${nodeId} not found`,
          { error: `Node not found: ${nodeId}` }
        );
        throw new Error(`Node with ID ${nodeId} not found`);
      }
      if (!useChunking) {
        const textNodes = [];
        try {
          sendProgressUpdate(
            commandId,
            "scan_text_nodes",
            "started",
            0,
            1,
            // Not known yet how many nodes there are
            0,
            `Starting scan of node "${node.name || nodeId}" without chunking`,
            null
          );
          yield findTextNodes(node, [], 0, textNodes);
          sendProgressUpdate(
            commandId,
            "scan_text_nodes",
            "completed",
            100,
            textNodes.length,
            textNodes.length,
            `Scan complete. Found ${textNodes.length} text nodes.`,
            { textNodes }
          );
          return {
            success: true,
            message: `Scanned ${textNodes.length} text nodes.`,
            count: textNodes.length,
            textNodes,
            commandId
          };
        } catch (error) {
          console.error("Error scanning text nodes:", error);
          sendProgressUpdate(
            commandId,
            "scan_text_nodes",
            "error",
            0,
            0,
            0,
            `Error scanning text nodes: ${error.message}`,
            { error: error.message }
          );
          throw new Error(`Error scanning text nodes: ${error.message}`);
        }
      }
      console.log(`Using chunked scanning with chunk size: ${chunkSize}`);
      const nodesToProcess = [];
      sendProgressUpdate(
        commandId,
        "scan_text_nodes",
        "started",
        0,
        0,
        // Not known yet how many nodes there are
        0,
        `Starting chunked scan of node "${node.name || nodeId}"`,
        { chunkSize }
      );
      yield collectNodesToProcess(node, [], 0, nodesToProcess);
      const totalNodes = nodesToProcess.length;
      console.log(`Found ${totalNodes} total nodes to process`);
      const totalChunks = Math.ceil(totalNodes / chunkSize);
      console.log(`Will process in ${totalChunks} chunks`);
      sendProgressUpdate(
        commandId,
        "scan_text_nodes",
        "in_progress",
        5,
        // 5% progress for collection phase
        totalNodes,
        0,
        `Found ${totalNodes} nodes to scan. Will process in ${totalChunks} chunks.`,
        {
          totalNodes,
          totalChunks,
          chunkSize
        }
      );
      const allTextNodes = [];
      let processedNodes = 0;
      let chunksProcessed = 0;
      for (let i = 0; i < totalNodes; i += chunkSize) {
        const chunkEnd = Math.min(i + chunkSize, totalNodes);
        console.log(`Processing chunk ${chunksProcessed + 1}/${totalChunks} (nodes ${i} to ${chunkEnd - 1})`);
        sendProgressUpdate(
          commandId,
          "scan_text_nodes",
          "in_progress",
          Math.round(5 + chunksProcessed / totalChunks * 90),
          // 5-95% for processing
          totalNodes,
          processedNodes,
          `Processing chunk ${chunksProcessed + 1}/${totalChunks}`,
          {
            currentChunk: chunksProcessed + 1,
            totalChunks,
            textNodesFound: allTextNodes.length
          }
        );
        const chunkNodes = nodesToProcess.slice(i, chunkEnd);
        const chunkTextNodes = [];
        for (const nodeInfo of chunkNodes) {
          if (nodeInfo.node.type === "TEXT") {
            try {
              const textNodeInfo = yield processTextNode(nodeInfo.node, nodeInfo.parentPath, nodeInfo.depth);
              if (textNodeInfo) {
                chunkTextNodes.push(textNodeInfo);
              }
            } catch (error) {
              console.error(`Error processing text node: ${error.message}`);
            }
          }
          yield delay(5);
        }
        allTextNodes.push(...chunkTextNodes);
        processedNodes += chunkNodes.length;
        chunksProcessed++;
        sendProgressUpdate(
          commandId,
          "scan_text_nodes",
          "in_progress",
          Math.round(5 + chunksProcessed / totalChunks * 90),
          // 5-95% for processing
          totalNodes,
          processedNodes,
          `Processed chunk ${chunksProcessed}/${totalChunks}. Found ${allTextNodes.length} text nodes so far.`,
          {
            currentChunk: chunksProcessed,
            totalChunks,
            processedNodes,
            textNodesFound: allTextNodes.length,
            chunkResult: chunkTextNodes
          }
        );
        if (i + chunkSize < totalNodes) {
          yield delay(50);
        }
      }
      sendProgressUpdate(
        commandId,
        "scan_text_nodes",
        "completed",
        100,
        totalNodes,
        processedNodes,
        `Scan complete. Found ${allTextNodes.length} text nodes.`,
        {
          textNodes: allTextNodes,
          processedNodes,
          chunks: chunksProcessed
        }
      );
      return {
        success: true,
        message: `Chunked scan complete. Found ${allTextNodes.length} text nodes.`,
        totalNodes: allTextNodes.length,
        processedNodes,
        chunks: chunksProcessed,
        textNodes: allTextNodes,
        commandId
      };
    });
  }
  function collectNodesToProcess(_0) {
    return __async(this, arguments, function* (node, parentPath = [], depth = 0, nodesToProcess = []) {
      if (node.visible === false)
        return;
      const nodePath = [...parentPath, node.name || `Unnamed ${node.type}`];
      nodesToProcess.push({
        node,
        parentPath: nodePath,
        depth
      });
      if ("children" in node) {
        for (const child of node.children) {
          yield collectNodesToProcess(child, nodePath, depth + 1, nodesToProcess);
        }
      }
    });
  }
  function processTextNode(node, parentPath, depth) {
    return __async(this, null, function* () {
      if (node.type !== "TEXT")
        return null;
      try {
        let fontFamily = "";
        let fontStyle = "";
        if (node.fontName) {
          if (typeof node.fontName === "object") {
            if ("family" in node.fontName)
              fontFamily = node.fontName.family;
            if ("style" in node.fontName)
              fontStyle = node.fontName.style;
          }
        }
        const safeTextNode = {
          id: node.id,
          name: node.name || "Text",
          type: node.type,
          characters: node.characters,
          fontSize: typeof node.fontSize === "number" ? node.fontSize : 0,
          fontFamily,
          fontStyle,
          x: typeof node.x === "number" ? node.x : 0,
          y: typeof node.y === "number" ? node.y : 0,
          width: typeof node.width === "number" ? node.width : 0,
          height: typeof node.height === "number" ? node.height : 0,
          path: parentPath.join(" > "),
          depth
        };
        try {
          const originalFills = JSON.parse(JSON.stringify(node.fills));
          node.fills = [
            {
              type: "SOLID",
              color: { r: 1, g: 0.5, b: 0 },
              opacity: 0.3
            }
          ];
          yield delay(100);
          try {
            node.fills = originalFills;
          } catch (err) {
            console.error("Error resetting fills:", err);
          }
        } catch (highlightErr) {
          console.error("Error highlighting text node:", highlightErr);
        }
        return safeTextNode;
      } catch (nodeErr) {
        console.error("Error processing text node:", nodeErr);
        return null;
      }
    });
  }
  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  function findTextNodes(_0) {
    return __async(this, arguments, function* (node, parentPath = [], depth = 0, textNodes = []) {
      if (node.visible === false)
        return;
      const nodePath = [...parentPath, node.name || `Unnamed ${node.type}`];
      if (node.type === "TEXT") {
        try {
          let fontFamily = "";
          let fontStyle = "";
          if (node.fontName) {
            if (typeof node.fontName === "object") {
              if ("family" in node.fontName)
                fontFamily = node.fontName.family;
              if ("style" in node.fontName)
                fontStyle = node.fontName.style;
            }
          }
          const safeTextNode = {
            id: node.id,
            name: node.name || "Text",
            type: node.type,
            characters: node.characters,
            fontSize: typeof node.fontSize === "number" ? node.fontSize : 0,
            fontFamily,
            fontStyle,
            x: typeof node.x === "number" ? node.x : 0,
            y: typeof node.y === "number" ? node.y : 0,
            width: typeof node.width === "number" ? node.width : 0,
            height: typeof node.height === "number" ? node.height : 0,
            path: nodePath.join(" > "),
            depth
          };
          try {
            const originalFills = JSON.parse(JSON.stringify(node.fills));
            node.fills = [
              {
                type: "SOLID",
                color: { r: 1, g: 0.5, b: 0 },
                opacity: 0.3
              }
            ];
            yield delay(500);
            try {
              node.fills = originalFills;
            } catch (err) {
              console.error("Error resetting fills:", err);
            }
          } catch (highlightErr) {
            console.error("Error highlighting text node:", highlightErr);
          }
          textNodes.push(safeTextNode);
        } catch (nodeErr) {
          console.error("Error processing text node:", nodeErr);
        }
      }
      if ("children" in node) {
        for (const child of node.children) {
          yield findTextNodes(child, nodePath, depth + 1, textNodes);
        }
      }
    });
  }
  function setMultipleTextContents(params) {
    return __async(this, null, function* () {
      const { nodeId, text } = params || {};
      const commandId = params.commandId || generateCommandId();
      if (!nodeId || !text || !Array.isArray(text)) {
        const errorMsg = "Missing required parameters: nodeId and text array";
        sendProgressUpdate(
          commandId,
          "set_multiple_text_contents",
          "error",
          0,
          0,
          0,
          errorMsg,
          { error: errorMsg }
        );
        throw new Error(errorMsg);
      }
      console.log(
        `Starting text replacement for node: ${nodeId} with ${text.length} text replacements`
      );
      sendProgressUpdate(
        commandId,
        "set_multiple_text_contents",
        "started",
        0,
        text.length,
        0,
        `Starting text replacement for ${text.length} nodes`,
        { totalReplacements: text.length }
      );
      const results = [];
      let successCount = 0;
      let failureCount = 0;
      const CHUNK_SIZE = 5;
      const chunks = [];
      for (let i = 0; i < text.length; i += CHUNK_SIZE) {
        chunks.push(text.slice(i, i + CHUNK_SIZE));
      }
      console.log(`Split ${text.length} replacements into ${chunks.length} chunks`);
      sendProgressUpdate(
        commandId,
        "set_multiple_text_contents",
        "in_progress",
        5,
        // 5% progress for planning phase
        text.length,
        0,
        `Preparing to replace text in ${text.length} nodes using ${chunks.length} chunks`,
        {
          totalReplacements: text.length,
          chunks: chunks.length,
          chunkSize: CHUNK_SIZE
        }
      );
      for (let chunkIndex = 0; chunkIndex < chunks.length; chunkIndex++) {
        const chunk = chunks[chunkIndex];
        console.log(`Processing chunk ${chunkIndex + 1}/${chunks.length} with ${chunk.length} replacements`);
        sendProgressUpdate(
          commandId,
          "set_multiple_text_contents",
          "in_progress",
          Math.round(5 + chunkIndex / chunks.length * 90),
          // 5-95% for processing
          text.length,
          successCount + failureCount,
          `Processing text replacements chunk ${chunkIndex + 1}/${chunks.length}`,
          {
            currentChunk: chunkIndex + 1,
            totalChunks: chunks.length,
            successCount,
            failureCount
          }
        );
        const chunkPromises = chunk.map((replacement) => __async(this, null, function* () {
          if (!replacement.nodeId || replacement.text === void 0) {
            console.error(`Missing nodeId or text for replacement`);
            return {
              success: false,
              nodeId: replacement.nodeId || "unknown",
              error: "Missing nodeId or text in replacement entry"
            };
          }
          try {
            console.log(`Attempting to replace text in node: ${replacement.nodeId}`);
            const textNode = yield getNodeByIdSafe(replacement.nodeId);
            if (!textNode) {
              console.error(`Text node not found: ${replacement.nodeId}`);
              return {
                success: false,
                nodeId: replacement.nodeId,
                error: `Node not found: ${replacement.nodeId}`
              };
            }
            if (textNode.type !== "TEXT") {
              console.error(`Node is not a text node: ${replacement.nodeId} (type: ${textNode.type})`);
              return {
                success: false,
                nodeId: replacement.nodeId,
                error: `Node is not a text node: ${replacement.nodeId} (type: ${textNode.type})`
              };
            }
            const originalText = textNode.characters;
            console.log(`Original text: "${originalText}"`);
            console.log(`Will translate to: "${replacement.text}"`);
            let originalFills;
            try {
              originalFills = JSON.parse(JSON.stringify(textNode.fills));
              textNode.fills = [
                {
                  type: "SOLID",
                  color: { r: 1, g: 0.5, b: 0 },
                  opacity: 0.3
                }
              ];
            } catch (highlightErr) {
              console.error(`Error highlighting text node: ${highlightErr.message}`);
            }
            yield setTextContent({
              nodeId: replacement.nodeId,
              text: replacement.text
            });
            if (originalFills) {
              try {
                yield delay(500);
                textNode.fills = originalFills;
              } catch (restoreErr) {
                console.error(`Error restoring fills: ${restoreErr.message}`);
              }
            }
            console.log(`Successfully replaced text in node: ${replacement.nodeId}`);
            return {
              success: true,
              nodeId: replacement.nodeId,
              originalText,
              translatedText: replacement.text
            };
          } catch (error) {
            console.error(`Error replacing text in node ${replacement.nodeId}: ${error.message}`);
            return {
              success: false,
              nodeId: replacement.nodeId,
              error: `Error applying replacement: ${error.message}`
            };
          }
        }));
        const chunkResults = yield Promise.all(chunkPromises);
        chunkResults.forEach((result) => {
          if (result.success) {
            successCount++;
          } else {
            failureCount++;
          }
          results.push(result);
        });
        sendProgressUpdate(
          commandId,
          "set_multiple_text_contents",
          "in_progress",
          Math.round(5 + (chunkIndex + 1) / chunks.length * 90),
          // 5-95% for processing
          text.length,
          successCount + failureCount,
          `Completed chunk ${chunkIndex + 1}/${chunks.length}. ${successCount} successful, ${failureCount} failed so far.`,
          {
            currentChunk: chunkIndex + 1,
            totalChunks: chunks.length,
            successCount,
            failureCount,
            chunkResults
          }
        );
        if (chunkIndex < chunks.length - 1) {
          console.log("Pausing between chunks to avoid overloading Figma...");
          yield delay(1e3);
        }
      }
      console.log(
        `Replacement complete: ${successCount} successful, ${failureCount} failed`
      );
      sendProgressUpdate(
        commandId,
        "set_multiple_text_contents",
        "completed",
        100,
        text.length,
        successCount + failureCount,
        `Text replacement complete: ${successCount} successful, ${failureCount} failed`,
        {
          totalReplacements: text.length,
          replacementsApplied: successCount,
          replacementsFailed: failureCount,
          completedInChunks: chunks.length,
          results
        }
      );
      return {
        success: successCount > 0,
        nodeId,
        replacementsApplied: successCount,
        replacementsFailed: failureCount,
        totalReplacements: text.length,
        results,
        completedInChunks: chunks.length,
        commandId
      };
    });
  }
  function generateCommandId() {
    return "cmd_" + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }
  function setAutoLayout(params) {
    return __async(this, null, function* () {
      const {
        nodeId,
        layoutMode,
        paddingTop,
        paddingBottom,
        paddingLeft,
        paddingRight,
        itemSpacing,
        primaryAxisAlignItems,
        counterAxisAlignItems,
        layoutWrap,
        strokesIncludedInLayout
      } = params || {};
      if (!nodeId) {
        throw new Error("Missing nodeId parameter");
      }
      if (!layoutMode) {
        throw new Error("Missing layoutMode parameter");
      }
      const node = yield getNodeByIdSafe(nodeId);
      if (!node) {
        throw new Error(`Node not found with ID: ${nodeId}`);
      }
      if (!("layoutMode" in node)) {
        throw new Error(`Node does not support auto layout: ${nodeId}`);
      }
      if (layoutMode === "NONE") {
        node.layoutMode = "NONE";
      } else {
        node.layoutMode = layoutMode;
        if (paddingTop !== void 0)
          node.paddingTop = paddingTop;
        if (paddingBottom !== void 0)
          node.paddingBottom = paddingBottom;
        if (paddingLeft !== void 0)
          node.paddingLeft = paddingLeft;
        if (paddingRight !== void 0)
          node.paddingRight = paddingRight;
        if (itemSpacing !== void 0)
          node.itemSpacing = itemSpacing;
        if (primaryAxisAlignItems !== void 0) {
          node.primaryAxisAlignItems = primaryAxisAlignItems;
        }
        if (counterAxisAlignItems !== void 0) {
          node.counterAxisAlignItems = counterAxisAlignItems;
        }
        if (layoutWrap !== void 0) {
          node.layoutWrap = layoutWrap;
        }
        if (strokesIncludedInLayout !== void 0) {
          node.strokesIncludedInLayout = strokesIncludedInLayout;
        }
      }
      return {
        id: node.id,
        name: node.name,
        layoutMode: node.layoutMode,
        paddingTop: node.paddingTop,
        paddingBottom: node.paddingBottom,
        paddingLeft: node.paddingLeft,
        paddingRight: node.paddingRight,
        itemSpacing: node.itemSpacing,
        primaryAxisAlignItems: node.primaryAxisAlignItems,
        counterAxisAlignItems: node.counterAxisAlignItems,
        layoutWrap: node.layoutWrap,
        strokesIncludedInLayout: node.strokesIncludedInLayout
      };
    });
  }
  function setFontName(params) {
    return __async(this, null, function* () {
      const { nodeId, family, style } = params || {};
      if (!nodeId || !family) {
        throw new Error("Missing nodeId or font family");
      }
      const node = yield getNodeByIdSafe(nodeId);
      if (!node) {
        throw new Error(`Node not found with ID: ${nodeId}`);
      }
      if (node.type !== "TEXT") {
        throw new Error(`Node is not a text node: ${nodeId}`);
      }
      try {
        yield figma.loadFontAsync({ family, style: style || "Regular" });
        node.fontName = { family, style: style || "Regular" };
        return {
          id: node.id,
          name: node.name,
          fontName: node.fontName
        };
      } catch (error) {
        throw new Error(`Error setting font name: ${error.message}`);
      }
    });
  }
  function setFontSize(params) {
    return __async(this, null, function* () {
      const { nodeId, fontSize } = params || {};
      if (!nodeId || fontSize === void 0) {
        throw new Error("Missing nodeId or fontSize");
      }
      const node = yield getNodeByIdSafe(nodeId);
      if (!node) {
        throw new Error(`Node not found with ID: ${nodeId}`);
      }
      if (node.type !== "TEXT") {
        throw new Error(`Node is not a text node: ${nodeId}`);
      }
      try {
        yield figma.loadFontAsync(node.fontName);
        node.fontSize = fontSize;
        return {
          id: node.id,
          name: node.name,
          fontSize: node.fontSize
        };
      } catch (error) {
        throw new Error(`Error setting font size: ${error.message}`);
      }
    });
  }
  function setFontWeight(params) {
    return __async(this, null, function* () {
      const { nodeId, weight } = params || {};
      if (!nodeId || weight === void 0) {
        throw new Error("Missing nodeId or weight");
      }
      const getFontStyle = (weight2) => {
        switch (weight2) {
          case 100:
            return "Thin";
          case 200:
            return "Extra Light";
          case 300:
            return "Light";
          case 400:
            return "Regular";
          case 500:
            return "Medium";
          case 600:
            return "Semi Bold";
          case 700:
            return "Bold";
          case 800:
            return "Extra Bold";
          case 900:
            return "Black";
          default:
            return "Regular";
        }
      };
      const node = yield getNodeByIdSafe(nodeId);
      if (!node) {
        throw new Error(`Node not found with ID: ${nodeId}`);
      }
      if (node.type !== "TEXT") {
        throw new Error(`Node is not a text node: ${nodeId}`);
      }
      try {
        const family = node.fontName.family;
        const style = getFontStyle(weight);
        yield figma.loadFontAsync({ family, style });
        node.fontName = { family, style };
        return {
          id: node.id,
          name: node.name,
          fontName: node.fontName,
          weight
        };
      } catch (error) {
        throw new Error(`Error setting font weight: ${error.message}`);
      }
    });
  }
  function setLetterSpacing(params) {
    return __async(this, null, function* () {
      const { nodeId, letterSpacing, unit = "PIXELS" } = params || {};
      if (!nodeId || letterSpacing === void 0) {
        throw new Error("Missing nodeId or letterSpacing");
      }
      const node = yield getNodeByIdSafe(nodeId);
      if (!node) {
        throw new Error(`Node not found with ID: ${nodeId}`);
      }
      if (node.type !== "TEXT") {
        throw new Error(`Node is not a text node: ${nodeId}`);
      }
      try {
        yield figma.loadFontAsync(node.fontName);
        node.letterSpacing = { value: letterSpacing, unit };
        return {
          id: node.id,
          name: node.name,
          letterSpacing: node.letterSpacing
        };
      } catch (error) {
        throw new Error(`Error setting letter spacing: ${error.message}`);
      }
    });
  }
  function setLineHeight(params) {
    return __async(this, null, function* () {
      const { nodeId, lineHeight, unit = "PIXELS" } = params || {};
      if (!nodeId || lineHeight === void 0) {
        throw new Error("Missing nodeId or lineHeight");
      }
      const node = yield getNodeByIdSafe(nodeId);
      if (!node) {
        throw new Error(`Node not found with ID: ${nodeId}`);
      }
      if (node.type !== "TEXT") {
        throw new Error(`Node is not a text node: ${nodeId}`);
      }
      try {
        yield figma.loadFontAsync(node.fontName);
        node.lineHeight = { value: lineHeight, unit };
        return {
          id: node.id,
          name: node.name,
          lineHeight: node.lineHeight
        };
      } catch (error) {
        throw new Error(`Error setting line height: ${error.message}`);
      }
    });
  }
  function setParagraphSpacing(params) {
    return __async(this, null, function* () {
      const { nodeId, paragraphSpacing } = params || {};
      if (!nodeId || paragraphSpacing === void 0) {
        throw new Error("Missing nodeId or paragraphSpacing");
      }
      const node = yield getNodeByIdSafe(nodeId);
      if (!node) {
        throw new Error(`Node not found with ID: ${nodeId}`);
      }
      if (node.type !== "TEXT") {
        throw new Error(`Node is not a text node: ${nodeId}`);
      }
      try {
        yield figma.loadFontAsync(node.fontName);
        node.paragraphSpacing = paragraphSpacing;
        return {
          id: node.id,
          name: node.name,
          paragraphSpacing: node.paragraphSpacing
        };
      } catch (error) {
        throw new Error(`Error setting paragraph spacing: ${error.message}`);
      }
    });
  }
  function setTextCase(params) {
    return __async(this, null, function* () {
      const { nodeId, textCase } = params || {};
      if (!nodeId || textCase === void 0) {
        throw new Error("Missing nodeId or textCase");
      }
      if (!["ORIGINAL", "UPPER", "LOWER", "TITLE"].includes(textCase)) {
        throw new Error("Invalid textCase value. Must be one of: ORIGINAL, UPPER, LOWER, TITLE");
      }
      const node = yield getNodeByIdSafe(nodeId);
      if (!node) {
        throw new Error(`Node not found with ID: ${nodeId}`);
      }
      if (node.type !== "TEXT") {
        throw new Error(`Node is not a text node: ${nodeId}`);
      }
      try {
        yield figma.loadFontAsync(node.fontName);
        node.textCase = textCase;
        return {
          id: node.id,
          name: node.name,
          textCase: node.textCase
        };
      } catch (error) {
        throw new Error(`Error setting text case: ${error.message}`);
      }
    });
  }
  function setTextDecoration(params) {
    return __async(this, null, function* () {
      const { nodeId, textDecoration } = params || {};
      if (!nodeId || textDecoration === void 0) {
        throw new Error("Missing nodeId or textDecoration");
      }
      if (!["NONE", "UNDERLINE", "STRIKETHROUGH"].includes(textDecoration)) {
        throw new Error("Invalid textDecoration value. Must be one of: NONE, UNDERLINE, STRIKETHROUGH");
      }
      const node = yield getNodeByIdSafe(nodeId);
      if (!node) {
        throw new Error(`Node not found with ID: ${nodeId}`);
      }
      if (node.type !== "TEXT") {
        throw new Error(`Node is not a text node: ${nodeId}`);
      }
      try {
        yield figma.loadFontAsync(node.fontName);
        node.textDecoration = textDecoration;
        return {
          id: node.id,
          name: node.name,
          textDecoration: node.textDecoration
        };
      } catch (error) {
        throw new Error(`Error setting text decoration: ${error.message}`);
      }
    });
  }
  function setTextAlign(params) {
    return __async(this, null, function* () {
      const { nodeId, textAlignHorizontal, textAlignVertical } = params || {};
      if (!nodeId) {
        throw new Error("Missing nodeId");
      }
      const validHorizontal = ["LEFT", "CENTER", "RIGHT", "JUSTIFIED"];
      const validVertical = ["TOP", "CENTER", "BOTTOM"];
      if (textAlignHorizontal && !validHorizontal.includes(textAlignHorizontal)) {
        throw new Error("Invalid textAlignHorizontal value. Must be one of: LEFT, CENTER, RIGHT, JUSTIFIED");
      }
      if (textAlignVertical && !validVertical.includes(textAlignVertical)) {
        throw new Error("Invalid textAlignVertical value. Must be one of: TOP, CENTER, BOTTOM");
      }
      if (!textAlignHorizontal && !textAlignVertical) {
        throw new Error("Must provide textAlignHorizontal or textAlignVertical");
      }
      const node = yield getNodeByIdSafe(nodeId);
      if (!node) {
        throw new Error(`Node not found with ID: ${nodeId}`);
      }
      if (node.type !== "TEXT") {
        throw new Error(`Node is not a text node: ${nodeId}`);
      }
      try {
        yield figma.loadFontAsync(node.fontName);
        if (textAlignHorizontal) {
          node.textAlignHorizontal = textAlignHorizontal;
        }
        if (textAlignVertical) {
          node.textAlignVertical = textAlignVertical;
        }
        return {
          id: node.id,
          name: node.name,
          textAlignHorizontal: node.textAlignHorizontal,
          textAlignVertical: node.textAlignVertical
        };
      } catch (error) {
        throw new Error(`Error setting text alignment: ${error.message}`);
      }
    });
  }
  function getStyledTextSegments(params) {
    return __async(this, null, function* () {
      const { nodeId, property } = params || {};
      if (!nodeId || !property) {
        throw new Error("Missing nodeId or property");
      }
      const validProperties = [
        "fillStyleId",
        "fontName",
        "fontSize",
        "textCase",
        "textDecoration",
        "textStyleId",
        "fills",
        "letterSpacing",
        "lineHeight",
        "fontWeight"
      ];
      if (!validProperties.includes(property)) {
        throw new Error(`Invalid property. Must be one of: ${validProperties.join(", ")}`);
      }
      const node = yield getNodeByIdSafe(nodeId);
      if (!node) {
        throw new Error(`Node not found with ID: ${nodeId}`);
      }
      if (node.type !== "TEXT") {
        throw new Error(`Node is not a text node: ${nodeId}`);
      }
      try {
        const segments = node.getStyledTextSegments([property]);
        const safeSegments = segments.map((segment) => {
          const safeSegment = {
            characters: segment.characters,
            start: segment.start,
            end: segment.end
          };
          if (property === "fontName") {
            if (segment[property] && typeof segment[property] === "object") {
              safeSegment[property] = {
                family: segment[property].family || "",
                style: segment[property].style || ""
              };
            } else {
              safeSegment[property] = { family: "", style: "" };
            }
          } else if (property === "letterSpacing" || property === "lineHeight") {
            if (segment[property] && typeof segment[property] === "object") {
              safeSegment[property] = {
                value: segment[property].value || 0,
                unit: segment[property].unit || "PIXELS"
              };
            } else {
              safeSegment[property] = { value: 0, unit: "PIXELS" };
            }
          } else if (property === "fills") {
            safeSegment[property] = segment[property] ? JSON.parse(JSON.stringify(segment[property])) : [];
          } else {
            safeSegment[property] = segment[property];
          }
          return safeSegment;
        });
        return {
          id: node.id,
          name: node.name,
          property,
          segments: safeSegments
        };
      } catch (error) {
        throw new Error(`Error getting styled text segments: ${error.message}`);
      }
    });
  }
  function loadFontAsyncWrapper(params) {
    return __async(this, null, function* () {
      const { family, style = "Regular" } = params || {};
      if (!family) {
        throw new Error("Missing font family");
      }
      try {
        yield figma.loadFontAsync({ family, style });
        return {
          success: true,
          family,
          style,
          message: `Successfully loaded ${family} ${style}`
        };
      } catch (error) {
        throw new Error(`Error loading font: ${error.message}`);
      }
    });
  }
  function getRemoteComponents() {
    return __async(this, null, function* () {
      try {
        if (!figma.teamLibrary) {
          console.error("Error: figma.teamLibrary API is not available");
          throw new Error("The figma.teamLibrary API is not available in this context");
        }
        if (!figma.teamLibrary.getAvailableComponentsAsync) {
          console.error("Error: figma.teamLibrary.getAvailableComponentsAsync is not available");
          throw new Error("The getAvailableComponentsAsync method is not available");
        }
        console.log("Starting remote components retrieval...");
        let timeoutId;
        const timeoutPromise = new Promise((_, reject) => {
          timeoutId = setTimeout(() => {
            reject(new Error("Internal timeout while retrieving remote components (45s)"));
          }, 45e3);
        });
        const fetchPromise = figma.teamLibrary.getAvailableComponentsAsync();
        const teamComponents = yield Promise.race([fetchPromise, timeoutPromise]).finally(() => {
          clearTimeout(timeoutId);
        });
        console.log(`Retrieved ${teamComponents.length} remote components`);
        return {
          success: true,
          count: teamComponents.length,
          components: teamComponents.map((component) => ({
            key: component.key,
            name: component.name,
            description: component.description || "",
            libraryName: component.libraryName
          }))
        };
      } catch (error) {
        console.error(`Detailed error retrieving remote components: ${error.message || "Unknown error"}`);
        console.error(`Stack trace: ${error.stack || "Not available"}`);
        throw new Error(`Error retrieving remote components: ${error.message}`);
      }
    });
  }
  function setEffects(params) {
    return __async(this, null, function* () {
      const { nodeId, effects } = params || {};
      if (!nodeId) {
        throw new Error("Missing nodeId parameter");
      }
      if (!effects || !Array.isArray(effects)) {
        throw new Error("Missing or invalid effects parameter. Must be an array.");
      }
      const node = yield getNodeByIdSafe(nodeId);
      if (!node) {
        throw new Error(`Node not found with ID: ${nodeId}`);
      }
      if (!("effects" in node)) {
        throw new Error(`Node does not support effects: ${nodeId}`);
      }
      try {
        const validEffects = effects.map((effect) => {
          if (!effect.type) {
            throw new Error("Each effect must have a type property");
          }
          switch (effect.type) {
            case "DROP_SHADOW":
            case "INNER_SHADOW":
              return {
                type: effect.type,
                color: effect.color || { r: 0, g: 0, b: 0, a: 0.5 },
                offset: effect.offset || { x: 0, y: 0 },
                radius: effect.radius || 5,
                spread: effect.spread || 0,
                visible: effect.visible !== void 0 ? effect.visible : true,
                blendMode: effect.blendMode || "NORMAL"
              };
            case "LAYER_BLUR":
            case "BACKGROUND_BLUR":
              return {
                type: effect.type,
                radius: effect.radius || 5,
                visible: effect.visible !== void 0 ? effect.visible : true
              };
            default:
              throw new Error(`Unsupported effect type: ${effect.type}`);
          }
        });
        node.effects = validEffects;
        return {
          id: node.id,
          name: node.name,
          effects: node.effects
        };
      } catch (error) {
        throw new Error(`Error setting effects: ${error.message}`);
      }
    });
  }
  function setEffectStyleId(params) {
    return __async(this, null, function* () {
      const { nodeId, effectStyleId } = params || {};
      if (!nodeId) {
        throw new Error("Missing nodeId parameter");
      }
      if (!effectStyleId) {
        throw new Error("Missing effectStyleId parameter");
      }
      try {
        let timeoutId;
        const timeoutPromise = new Promise((_, reject) => {
          timeoutId = setTimeout(() => {
            reject(new Error("Timeout while setting effect style ID (20s). The operation took too long to complete."));
          }, 2e4);
        });
        console.log(`Starting to set effect style ID ${effectStyleId} on node ${nodeId}...`);
        const nodePromise = (() => __async(this, null, function* () {
          const node = yield getNodeByIdSafe(nodeId);
          if (!node) {
            throw new Error(`Node not found with ID: ${nodeId}`);
          }
          if (!("effectStyleId" in node)) {
            throw new Error(`Node with ID ${nodeId} does not support effect styles`);
          }
          console.log(`Fetching effect styles to validate style ID: ${effectStyleId}`);
          const effectStyles = yield figma.getLocalEffectStylesAsync();
          const foundStyle = effectStyles.find((style) => style.id === effectStyleId);
          if (!foundStyle) {
            throw new Error(`Effect style not found with ID: ${effectStyleId}. Available styles: ${effectStyles.length}`);
          }
          console.log(`Effect style found, applying to node...`);
          node.effectStyleId = effectStyleId;
          return {
            id: node.id,
            name: node.name,
            effectStyleId: node.effectStyleId,
            appliedEffects: node.effects
          };
        }))();
        const result = yield Promise.race([nodePromise, timeoutPromise]).finally(() => {
          clearTimeout(timeoutId);
        });
        console.log(`Successfully set effect style ID on node ${nodeId}`);
        return result;
      } catch (error) {
        console.error(`Error setting effect style ID: ${error.message || "Unknown error"}`);
        console.error(`Stack trace: ${error.stack || "Not available"}`);
        if (error.message.includes("timeout") || error.message.includes("Timeout")) {
          throw new Error(`The operation timed out after 8 seconds. This could happen with complex nodes or effects. Try with a simpler node or effect style.`);
        } else if (error.message.includes("not found") && error.message.includes("Node")) {
          throw new Error(`Node with ID "${nodeId}" not found. Make sure the node exists in the current document.`);
        } else if (error.message.includes("not found") && error.message.includes("style")) {
          throw new Error(`Effect style with ID "${effectStyleId}" not found. Make sure the style exists in your local styles.`);
        } else if (error.message.includes("does not support")) {
          throw new Error(`The selected node type does not support effect styles. Only certain node types like frames, components, and instances can have effect styles.`);
        } else {
          throw new Error(`Error setting effect style ID: ${error.message}`);
        }
      }
    });
  }
  function setTextStyleId(params) {
    return __async(this, null, function* () {
      const { nodeId, textStyleId } = params || {};
      if (!nodeId) {
        throw new Error("Missing nodeId parameter");
      }
      if (!textStyleId) {
        throw new Error("Missing textStyleId parameter");
      }
      try {
        let timeoutId;
        const timeoutPromise = new Promise((_, reject) => {
          timeoutId = setTimeout(() => {
            reject(new Error("Timeout while setting text style ID (8s). The operation took too long to complete."));
          }, 8e3);
        });
        console.log(`Starting to set text style ID ${textStyleId} on node ${nodeId}...`);
        const nodePromise = (() => __async(this, null, function* () {
          const node = yield getNodeByIdSafe(nodeId);
          if (!node) {
            throw new Error(`Node not found with ID: ${nodeId}`);
          }
          if (node.type !== "TEXT") {
            throw new Error(`Node with ID ${nodeId} is not a text node (type: ${node.type})`);
          }
          console.log(`Fetching text styles to validate style ID: ${textStyleId}`);
          const textStyles = yield figma.getLocalTextStylesAsync();
          const foundStyle = textStyles.find((style) => style.id === textStyleId || style.key === textStyleId);
          if (!foundStyle) {
            throw new Error(`Text style with ID "${textStyleId}" not found. Make sure the style exists in your local styles.`);
          }
          const actualStyleId = foundStyle.id;
          console.log(`Text style "${foundStyle.name}" found, applying to node...`);
          yield figma.loadFontAsync(foundStyle.fontName);
          yield node.setTextStyleIdAsync(actualStyleId);
          return {
            id: node.id,
            name: node.name,
            textStyleId: node.textStyleId,
            styleName: foundStyle.name
          };
        }))();
        const result = yield Promise.race([nodePromise, timeoutPromise]).finally(() => {
          clearTimeout(timeoutId);
        });
        console.log(`Successfully set text style ID on node ${nodeId}`);
        return result;
      } catch (error) {
        console.error(`Error setting text style ID: ${error.message || "Unknown error"}`);
        console.error(`Stack trace: ${error.stack || "Not available"}`);
        if (error.message.includes("timeout") || error.message.includes("Timeout")) {
          throw new Error(`The operation timed out after 8 seconds. This could happen with complex nodes. Try with a simpler node.`);
        } else if (error.message.includes("not found") && error.message.includes("Node")) {
          throw new Error(`Node with ID "${nodeId}" not found. Make sure the node exists in the current document.`);
        } else if (error.message.includes("not found") && error.message.includes("style")) {
          throw new Error(`Text style with ID "${textStyleId}" not found. Make sure the style exists in your local styles.`);
        } else if (error.message.includes("not a text node")) {
          throw new Error(`The selected node is not a text node. Only text nodes can have text styles applied.`);
        } else {
          throw new Error(`Error setting text style ID: ${error.message}`);
        }
      }
    });
  }
  function groupNodes(params) {
    return __async(this, null, function* () {
      const { nodeIds, name } = params || {};
      if (!nodeIds || !Array.isArray(nodeIds) || nodeIds.length < 2) {
        throw new Error("Must provide at least two nodeIds to group");
      }
      try {
        const nodesToGroup = [];
        for (const nodeId of nodeIds) {
          const node = yield getNodeByIdSafe(nodeId);
          if (!node) {
            throw new Error(`Node not found with ID: ${nodeId}`);
          }
          nodesToGroup.push(node);
        }
        const parent = nodesToGroup[0].parent;
        for (const node of nodesToGroup) {
          if (node.parent !== parent) {
            throw new Error("All nodes must have the same parent to be grouped");
          }
        }
        const group = figma.group(nodesToGroup, parent);
        if (name) {
          group.name = name;
        }
        return {
          id: group.id,
          name: group.name,
          type: group.type,
          children: group.children.map((child) => ({ id: child.id, name: child.name, type: child.type }))
        };
      } catch (error) {
        throw new Error(`Error grouping nodes: ${error.message}`);
      }
    });
  }
  function ungroupNodes(params) {
    return __async(this, null, function* () {
      const { nodeId } = params || {};
      if (!nodeId) {
        throw new Error("Missing nodeId parameter");
      }
      try {
        const node = yield getNodeByIdSafe(nodeId);
        if (!node) {
          throw new Error(`Node not found with ID: ${nodeId}`);
        }
        if (node.type !== "GROUP" && node.type !== "FRAME") {
          throw new Error(`Node with ID ${nodeId} is not a GROUP or FRAME`);
        }
        const parent = node.parent;
        const children = [...node.children];
        const ungroupedItems = figma.ungroup(node);
        return {
          success: true,
          ungroupedCount: ungroupedItems.length,
          items: ungroupedItems.map((item) => ({ id: item.id, name: item.name, type: item.type }))
        };
      } catch (error) {
        throw new Error(`Error ungrouping node: ${error.message}`);
      }
    });
  }
  function flattenNode(params) {
    return __async(this, null, function* () {
      const { nodeId } = params || {};
      if (!nodeId) {
        throw new Error("Missing nodeId parameter");
      }
      try {
        const node = yield getNodeByIdSafe(nodeId);
        if (!node) {
          throw new Error(`Node not found with ID: ${nodeId}`);
        }
        const flattenableTypes = ["VECTOR", "BOOLEAN_OPERATION", "STAR", "POLYGON", "ELLIPSE", "RECTANGLE"];
        if (!flattenableTypes.includes(node.type)) {
          throw new Error(`Node with ID ${nodeId} and type ${node.type} cannot be flattened. Only vector-based nodes can be flattened.`);
        }
        if (typeof node.flatten !== "function") {
          throw new Error(`Node with ID ${nodeId} does not support the flatten operation.`);
        }
        let timeoutId;
        const timeoutPromise = new Promise((_, reject) => {
          timeoutId = setTimeout(() => {
            reject(new Error("Flatten operation timed out after 20 seconds. The node may be too complex."));
          }, 2e4);
        });
        const flattenPromise = new Promise((resolve, reject) => {
          setTimeout(() => {
            try {
              console.log(`Starting flatten operation for node ID ${nodeId}...`);
              const flattened2 = node.flatten();
              console.log(`Flatten operation completed successfully for node ID ${nodeId}`);
              resolve(flattened2);
            } catch (err) {
              console.error(`Error during flatten operation: ${err.message}`);
              reject(err);
            }
          }, 0);
        });
        const flattened = yield Promise.race([flattenPromise, timeoutPromise]).finally(() => {
          clearTimeout(timeoutId);
        });
        return {
          id: flattened.id,
          name: flattened.name,
          type: flattened.type
        };
      } catch (error) {
        console.error(`Error in flattenNode: ${error.message}`);
        if (error.message.includes("timed out")) {
          throw new Error(`The flatten operation timed out. This usually happens with complex nodes. Try simplifying the node first or breaking it into smaller parts.`);
        } else {
          throw new Error(`Error flattening node: ${error.message}`);
        }
      }
    });
  }
  function insertChild(params) {
    return __async(this, null, function* () {
      const { parentId, childId, index } = params || {};
      if (!parentId) {
        throw new Error("Missing parentId parameter");
      }
      if (!childId) {
        throw new Error("Missing childId parameter");
      }
      try {
        const parent = yield getNodeByIdSafe(parentId);
        if (!parent) {
          throw new Error(`Parent node not found with ID: ${parentId}`);
        }
        const child = yield getNodeByIdSafe(childId);
        if (!child) {
          throw new Error(`Child node not found with ID: ${childId}`);
        }
        if (!("appendChild" in parent)) {
          throw new Error(`Parent node with ID ${parentId} cannot have children`);
        }
        const originalParent = child.parent;
        if (index !== void 0 && index >= 0 && index <= parent.children.length) {
          parent.insertChild(index, child);
        } else {
          parent.appendChild(child);
        }
        const newIndex = parent.children.indexOf(child);
        return {
          parentId: parent.id,
          childId: child.id,
          index: newIndex,
          success: newIndex !== -1,
          previousParentId: originalParent ? originalParent.id : null
        };
      } catch (error) {
        console.error(`Error inserting child: ${error.message}`, error);
        throw new Error(`Error inserting child: ${error.message}`);
      }
    });
  }
  function createEllipse(params) {
    return __async(this, null, function* () {
      const {
        x = 0,
        y = 0,
        width = 100,
        height = 100,
        name = "Ellipse",
        parentId,
        fillColor = { r: 0.8, g: 0.8, b: 0.8, a: 1 },
        strokeColor,
        strokeWeight
      } = params || {};
      const ellipse = figma.createEllipse();
      ellipse.name = name;
      ellipse.x = x;
      ellipse.y = y;
      ellipse.resize(width, height);
      if (fillColor) {
        var fillPaint = safePaint(fillColor);
        if (fillPaint)
          ellipse.fills = [fillPaint];
      }
      if (strokeColor) {
        var strokePaint = safePaint(strokeColor);
        if (strokePaint)
          ellipse.strokes = [strokePaint];
      }
      if (strokeWeight !== void 0) {
        ellipse.strokeWeight = strokeWeight;
      }
      if (parentId) {
        const parentNode = yield getNodeByIdSafe(parentId);
        if (!parentNode) {
          throw new Error(`Parent node not found with ID: ${parentId}`);
        }
        if (!("appendChild" in parentNode)) {
          throw new Error(`Parent node does not support children: ${parentId}`);
        }
        parentNode.appendChild(ellipse);
      } else {
        figma.currentPage.appendChild(ellipse);
      }
      return {
        id: ellipse.id,
        name: ellipse.name,
        type: ellipse.type,
        x: ellipse.x,
        y: ellipse.y,
        width: ellipse.width,
        height: ellipse.height
      };
    });
  }
  function createPolygon(params) {
    return __async(this, null, function* () {
      const {
        x = 0,
        y = 0,
        width = 100,
        height = 100,
        sides = 6,
        name = "Polygon",
        parentId,
        fillColor,
        strokeColor,
        strokeWeight
      } = params || {};
      const polygon = figma.createPolygon();
      polygon.x = x;
      polygon.y = y;
      polygon.resize(width, height);
      polygon.name = name;
      if (sides >= 3) {
        polygon.pointCount = sides;
      }
      if (fillColor) {
        var fillPaint = safePaint(fillColor);
        if (fillPaint)
          polygon.fills = [fillPaint];
      }
      if (strokeColor) {
        var strokePaint = safePaint(strokeColor);
        if (strokePaint)
          polygon.strokes = [strokePaint];
      }
      if (strokeWeight !== void 0) {
        polygon.strokeWeight = strokeWeight;
      }
      if (parentId) {
        const parentNode = yield getNodeByIdSafe(parentId);
        if (!parentNode) {
          throw new Error(`Parent node not found with ID: ${parentId}`);
        }
        if (!("appendChild" in parentNode)) {
          throw new Error(`Parent node does not support children: ${parentId}`);
        }
        parentNode.appendChild(polygon);
      } else {
        figma.currentPage.appendChild(polygon);
      }
      return {
        id: polygon.id,
        name: polygon.name,
        type: polygon.type,
        x: polygon.x,
        y: polygon.y,
        width: polygon.width,
        height: polygon.height,
        pointCount: polygon.pointCount,
        fills: polygon.fills,
        strokes: polygon.strokes,
        strokeWeight: polygon.strokeWeight,
        parentId: polygon.parent ? polygon.parent.id : void 0
      };
    });
  }
  function createStar(params) {
    return __async(this, null, function* () {
      const {
        x = 0,
        y = 0,
        width = 100,
        height = 100,
        points = 5,
        innerRadius = 0.5,
        // As a proportion of the outer radius
        name = "Star",
        parentId,
        fillColor,
        strokeColor,
        strokeWeight
      } = params || {};
      const star = figma.createStar();
      star.x = x;
      star.y = y;
      star.resize(width, height);
      star.name = name;
      if (points >= 3) {
        star.pointCount = points;
      }
      if (innerRadius > 0 && innerRadius < 1) {
        star.innerRadius = innerRadius;
      }
      if (fillColor) {
        var fillPaint = safePaint(fillColor);
        if (fillPaint)
          star.fills = [fillPaint];
      }
      if (strokeColor) {
        var strokePaint = safePaint(strokeColor);
        if (strokePaint)
          star.strokes = [strokePaint];
      }
      if (strokeWeight !== void 0) {
        star.strokeWeight = strokeWeight;
      }
      if (parentId) {
        const parentNode = yield getNodeByIdSafe(parentId);
        if (!parentNode) {
          throw new Error(`Parent node not found with ID: ${parentId}`);
        }
        if (!("appendChild" in parentNode)) {
          throw new Error(`Parent node does not support children: ${parentId}`);
        }
        parentNode.appendChild(star);
      } else {
        figma.currentPage.appendChild(star);
      }
      return {
        id: star.id,
        name: star.name,
        type: star.type,
        x: star.x,
        y: star.y,
        width: star.width,
        height: star.height,
        pointCount: star.pointCount,
        innerRadius: star.innerRadius,
        fills: star.fills,
        strokes: star.strokes,
        strokeWeight: star.strokeWeight,
        parentId: star.parent ? star.parent.id : void 0
      };
    });
  }
  function createVector(params) {
    return __async(this, null, function* () {
      const {
        x = 0,
        y = 0,
        width = 100,
        height = 100,
        name = "Vector",
        parentId,
        vectorPaths = [],
        fillColor,
        strokeColor,
        strokeWeight
      } = params || {};
      const vector = figma.createVector();
      vector.x = x;
      vector.y = y;
      vector.resize(width, height);
      vector.name = name;
      if (vectorPaths && vectorPaths.length > 0) {
        vector.vectorPaths = vectorPaths.map((path) => {
          return {
            windingRule: path.windingRule || "EVENODD",
            data: path.data || ""
          };
        });
      }
      if (fillColor) {
        const paintStyle = {
          type: "SOLID",
          color: {
            r: parseFloat(fillColor.r) || 0,
            g: parseFloat(fillColor.g) || 0,
            b: parseFloat(fillColor.b) || 0
          },
          opacity: parseFloat(fillColor.a) || 1
        };
        vector.fills = [paintStyle];
      }
      if (strokeColor) {
        const strokeStyle = {
          type: "SOLID",
          color: {
            r: parseFloat(strokeColor.r) || 0,
            g: parseFloat(strokeColor.g) || 0,
            b: parseFloat(strokeColor.b) || 0
          },
          opacity: parseFloat(strokeColor.a) || 1
        };
        vector.strokes = [strokeStyle];
      }
      if (strokeWeight !== void 0) {
        vector.strokeWeight = strokeWeight;
      }
      if (parentId) {
        const parentNode = yield getNodeByIdSafe(parentId);
        if (!parentNode) {
          throw new Error(`Parent node not found with ID: ${parentId}`);
        }
        if (!("appendChild" in parentNode)) {
          throw new Error(`Parent node does not support children: ${parentId}`);
        }
        parentNode.appendChild(vector);
      } else {
        figma.currentPage.appendChild(vector);
      }
      return {
        id: vector.id,
        name: vector.name,
        type: vector.type,
        x: vector.x,
        y: vector.y,
        width: vector.width,
        height: vector.height,
        vectorNetwork: vector.vectorNetwork,
        fills: vector.fills,
        strokes: vector.strokes,
        strokeWeight: vector.strokeWeight,
        parentId: vector.parent ? vector.parent.id : void 0
      };
    });
  }
  function createLine(params) {
    return __async(this, null, function* () {
      const {
        x1 = 0,
        y1 = 0,
        x2 = 100,
        y2 = 0,
        name = "Line",
        parentId,
        strokeColor = { r: 0, g: 0, b: 0, a: 1 },
        strokeWeight = 1,
        strokeCap = "NONE"
        // Can be "NONE", "ROUND", "SQUARE", "ARROW_LINES", or "ARROW_EQUILATERAL"
      } = params || {};
      const line = figma.createVector();
      line.name = name;
      line.x = x1;
      line.y = y1;
      const width = Math.abs(x2 - x1);
      const height = Math.abs(y2 - y1);
      line.resize(width > 0 ? width : 1, height > 0 ? height : 1);
      const dx = x2 - x1;
      const dy = y2 - y1;
      const endX = dx > 0 ? width : 0;
      const endY = dy > 0 ? height : 0;
      const startX = dx > 0 ? 0 : width;
      const startY = dy > 0 ? 0 : height;
      const pathData = `M ${startX} ${startY} L ${endX} ${endY}`;
      line.vectorPaths = [{
        windingRule: "NONZERO",
        data: pathData
      }];
      const strokeStyle = {
        type: "SOLID",
        color: {
          r: parseFloat(strokeColor.r) || 0,
          g: parseFloat(strokeColor.g) || 0,
          b: parseFloat(strokeColor.b) || 0
        },
        opacity: parseFloat(strokeColor.a) || 1
      };
      line.strokes = [strokeStyle];
      line.strokeWeight = strokeWeight;
      if (["NONE", "ROUND", "SQUARE", "ARROW_LINES", "ARROW_EQUILATERAL"].includes(strokeCap)) {
        line.strokeCap = strokeCap;
      }
      line.fills = [];
      if (parentId) {
        const parentNode = yield getNodeByIdSafe(parentId);
        if (!parentNode) {
          throw new Error(`Parent node not found with ID: ${parentId}`);
        }
        if (!("appendChild" in parentNode)) {
          throw new Error(`Parent node does not support children: ${parentId}`);
        }
        parentNode.appendChild(line);
      } else {
        figma.currentPage.appendChild(line);
      }
      return {
        id: line.id,
        name: line.name,
        type: line.type,
        x: line.x,
        y: line.y,
        width: line.width,
        height: line.height,
        strokeWeight: line.strokeWeight,
        strokeCap: line.strokeCap,
        strokes: line.strokes,
        vectorPaths: line.vectorPaths,
        parentId: line.parent ? line.parent.id : void 0
      };
    });
  }
  function renameNode(params) {
    return __async(this, null, function* () {
      const { nodeId, name } = params || {};
      if (!nodeId) {
        throw new Error("Missing nodeId parameter");
      }
      if (!name) {
        throw new Error("Missing name parameter");
      }
      const node = yield getNodeByIdSafe(nodeId);
      if (!node) {
        throw new Error(`Node not found with ID: ${nodeId}`);
      }
      if (node.type === "DOCUMENT") {
        throw new Error("Cannot rename the document node");
      }
      const oldName = node.name;
      node.name = name;
      return {
        id: node.id,
        name: node.name,
        oldName,
        type: node.type
      };
    });
  }
  function createComponentFromNode(params) {
    return __async(this, null, function* () {
      const { nodeId, name, parentId } = params || {};
      if (!nodeId) {
        throw new Error("Missing nodeId parameter");
      }
      const node = yield getNodeByIdSafe(nodeId);
      if (!node) {
        throw new Error(`Node not found with ID: ${nodeId}`);
      }
      if (node.type === "DOCUMENT" || node.type === "PAGE") {
        throw new Error(`Cannot create component from ${node.type}`);
      }
      if (node.type === "COMPONENT") {
        return {
          id: node.id,
          name: node.name,
          key: node.key,
          alreadyComponent: true
        };
      }
      let component;
      if ("createComponentFromNode" in figma && (node.type === "FRAME" || node.type === "GROUP" || node.type === "INSTANCE")) {
        component = figma.createComponentFromNode(node);
      } else {
        const parent = node.parent;
        const index = parent ? parent.children.indexOf(node) : 0;
        if (node.type === "RECTANGLE" || node.type === "ELLIPSE" || node.type === "POLYGON" || node.type === "STAR" || node.type === "VECTOR" || node.type === "TEXT" || node.type === "LINE") {
          component = figma.createComponent();
          component.x = node.x;
          component.y = node.y;
          component.resize(node.width, node.height);
          const clone = node.clone();
          clone.x = 0;
          clone.y = 0;
          if (parentId) {
            const parentNode = yield getNodeByIdSafe(parentId);
            if (!parentNode) {
              throw new Error(`Parent node not found with ID: ${parentId}`);
            }
            if (!("appendChild" in parentNode)) {
              throw new Error(`Parent node does not support children: ${parentId}`);
            }
            parentNode.appendChild(component);
          } else {
            figma.currentPage.appendChild(component);
          }
          component.appendChild(clone);
          if (parent && "insertChild" in parent) {
            parent.insertChild(index, component);
          } else {
            figma.currentPage.appendChild(component);
          }
          node.remove();
        } else if (node.type === "FRAME" || node.type === "GROUP") {
          component = figma.createComponent();
          component.x = node.x;
          component.y = node.y;
          component.resize(node.width, node.height);
          for (const child of [...node.children]) {
            component.appendChild(child);
          }
          if ("fills" in node && "fills" in component) {
            component.fills = node.fills;
          }
          if ("strokes" in node && "strokes" in component) {
            component.strokes = node.strokes;
          }
          if ("effects" in node && "effects" in component) {
            component.effects = node.effects;
          }
          if ("cornerRadius" in node && "cornerRadius" in component) {
            component.cornerRadius = node.cornerRadius;
          }
          if (parent && "insertChild" in parent) {
            parent.insertChild(index, component);
          } else {
            figma.currentPage.appendChild(component);
          }
          node.remove();
        } else {
          throw new Error(`Cannot create component from node type: ${node.type}`);
        }
      }
      if (name) {
        component.name = name;
      }
      return {
        id: component.id,
        name: component.name,
        key: component.key,
        width: component.width,
        height: component.height,
        x: component.x,
        y: component.y
      };
    });
  }
  function createComponentSet(params) {
    return __async(this, null, function* () {
      const { componentIds, name } = params || {};
      if (!componentIds || !Array.isArray(componentIds) || componentIds.length === 0) {
        throw new Error("Missing or empty componentIds parameter");
      }
      const components = [];
      for (const id of componentIds) {
        const node = yield getNodeByIdSafe(id);
        if (!node) {
          throw new Error(`Node not found with ID: ${id}`);
        }
        if (node.type !== "COMPONENT") {
          throw new Error(`Node with ID ${id} is not a component (type: ${node.type})`);
        }
        components.push(node);
      }
      let container = figma.currentPage;
      if (params.parentId) {
        const parentNode = yield getNodeByIdSafe(params.parentId);
        if (!parentNode) {
          throw new Error(`Parent node not found with ID: ${params.parentId}`);
        }
        if (!("appendChild" in parentNode)) {
          throw new Error(`Parent node does not support children: ${params.parentId}`);
        }
        container = parentNode;
      }
      const componentSet = figma.combineAsVariants(components, container);
      if (name) {
        componentSet.name = name;
      }
      return {
        id: componentSet.id,
        name: componentSet.name,
        key: componentSet.key,
        variantCount: componentSet.children.length,
        width: componentSet.width,
        height: componentSet.height
      };
    });
  }
  function setInstanceVariant(params) {
    return __async(this, null, function* () {
      const { nodeId, properties } = params || {};
      if (!nodeId) {
        throw new Error("Missing nodeId parameter");
      }
      if (!properties || typeof properties !== "object") {
        throw new Error("Missing or invalid properties parameter");
      }
      if (Object.keys(properties).length === 0) {
        throw new Error("Properties object cannot be empty");
      }
      const node = yield getNodeByIdSafe(nodeId);
      if (!node) {
        throw new Error(`Node not found with ID: ${nodeId}`);
      }
      if (node.type !== "INSTANCE") {
        throw new Error(`Node with ID ${nodeId} is not a component instance (type: ${node.type})`);
      }
      if (!("setProperties" in node)) {
        throw new Error(`Node does not support variant properties`);
      }
      node.setProperties(properties);
      return {
        id: node.id,
        name: node.name,
        properties: node.componentProperties
      };
    });
  }
  function createPage(params) {
    return __async(this, null, function* () {
      const { name } = params || {};
      if (!name) {
        throw new Error("Missing name parameter");
      }
      const page = figma.createPage();
      page.name = name;
      return {
        id: page.id,
        name: page.name
      };
    });
  }
  function deletePage(params) {
    return __async(this, null, function* () {
      const { pageId } = params || {};
      if (!pageId) {
        throw new Error("Missing pageId parameter");
      }
      if (figma.root.children.length <= 1) {
        throw new Error("Cannot delete the only page in the document");
      }
      const page = figma.root.children.find((p) => p.id === pageId);
      if (!page) {
        throw new Error(`Page not found with ID: ${pageId}`);
      }
      const pageName = page.name;
      if (figma.currentPage.id === pageId) {
        const otherPage = figma.root.children.find((p) => p.id !== pageId);
        if (otherPage) {
          yield figma.setCurrentPageAsync(otherPage);
        }
      }
      page.remove();
      return {
        success: true,
        name: pageName
      };
    });
  }
  function renamePage(params) {
    return __async(this, null, function* () {
      const { pageId, name } = params || {};
      if (!pageId) {
        throw new Error("Missing pageId parameter");
      }
      if (!name) {
        throw new Error("Missing name parameter");
      }
      const page = figma.root.children.find((p) => p.id === pageId);
      if (!page) {
        throw new Error(`Page not found with ID: ${pageId}`);
      }
      const oldName = page.name;
      page.name = name;
      return {
        id: page.id,
        name: page.name,
        oldName
      };
    });
  }
  function getPages() {
    return __async(this, null, function* () {
      yield figma.loadAllPagesAsync();
      return {
        pages: figma.root.children.map((page) => ({
          id: page.id,
          name: page.name,
          childCount: page.children.length,
          isCurrent: page.id === figma.currentPage.id
        })),
        currentPageId: figma.currentPage.id
      };
    });
  }
  function setCurrentPage(params) {
    return __async(this, null, function* () {
      const { pageId } = params || {};
      if (!pageId) {
        throw new Error("Missing pageId parameter");
      }
      const page = figma.root.children.find((p) => p.id === pageId);
      if (!page) {
        throw new Error(`Page not found with ID: ${pageId}`);
      }
      yield figma.setCurrentPageAsync(page);
      return {
        id: page.id,
        name: page.name
      };
    });
  }
  function base64ToUint8Array(base64) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    const lookup = new Uint8Array(256);
    for (let i = 0; i < chars.length; i++) {
      lookup[chars.charCodeAt(i)] = i;
    }
    const paddingLength = base64.endsWith("==") ? 2 : base64.endsWith("=") ? 1 : 0;
    const cleanBase64 = base64.replace(/[^A-Za-z0-9+/]/g, "");
    const len = cleanBase64.length;
    const byteLength = len * 3 / 4 - paddingLength;
    const bytes = new Uint8Array(byteLength);
    let p = 0;
    for (let i = 0; i < len; i += 4) {
      const encoded1 = lookup[cleanBase64.charCodeAt(i)];
      const encoded2 = lookup[cleanBase64.charCodeAt(i + 1)];
      const encoded3 = lookup[cleanBase64.charCodeAt(i + 2)];
      const encoded4 = lookup[cleanBase64.charCodeAt(i + 3)];
      bytes[p++] = encoded1 << 2 | encoded2 >> 4;
      if (i + 2 < len && cleanBase64[i + 2] !== "=") {
        bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
      }
      if (i + 3 < len && cleanBase64[i + 3] !== "=") {
        bytes[p++] = (encoded3 & 3) << 6 | encoded4;
      }
    }
    return bytes;
  }
  function setImageFill(params) {
    return __async(this, null, function* () {
      try {
        const { nodeId, imageSource, sourceType, scaleMode } = params || {};
        if (!nodeId || !imageSource || !sourceType) {
          throw new Error("Missing required parameters: nodeId, imageSource, sourceType");
        }
        const node = yield figma.getNodeByIdAsync(nodeId);
        if (!node) {
          throw new Error(`Node not found with ID: ${nodeId}`);
        }
        if (!("fills" in node)) {
          throw new Error(`Node type ${node.type} does not support fills`);
        }
        let image;
        if (sourceType === "url") {
          image = yield figma.createImageAsync(imageSource);
        } else if (sourceType === "base64") {
          const imageBytes = base64ToUint8Array(imageSource);
          image = figma.createImage(imageBytes);
        } else {
          throw new Error(`Invalid sourceType: ${sourceType}. Must be 'url' or 'base64'`);
        }
        const imageSize = yield image.getSizeAsync();
        if (imageSize.width > 4096 || imageSize.height > 4096) {
          throw new Error(`Image size ${imageSize.width}x${imageSize.height} exceeds Figma limit of 4096x4096`);
        }
        const imageFill = {
          type: "IMAGE",
          scaleMode: scaleMode || "FILL",
          imageHash: image.hash
        };
        node.fills = [imageFill];
        return {
          name: node.name,
          scaleMode: imageFill.scaleMode
        };
      } catch (error) {
        const errorMsg = error instanceof Error ? error.message : String(error);
        throw new Error(`Error setting image fill: ${errorMsg}`);
      }
    });
  }
  function getImageFromNode(params) {
    return __async(this, null, function* () {
      try {
        const { nodeId } = params || {};
        if (!nodeId) {
          throw new Error("Missing nodeId parameter");
        }
        const node = yield figma.getNodeByIdAsync(nodeId);
        if (!node) {
          throw new Error(`Node not found with ID: ${nodeId}`);
        }
        if (!("fills" in node)) {
          throw new Error(`Node type ${node.type} does not support fills`);
        }
        const fills = Array.isArray(node.fills) ? node.fills : [];
        const imageFill = fills.find((fill) => fill.type === "IMAGE");
        if (!imageFill) {
          return {
            name: node.name,
            hasImage: false
          };
        }
        const image = figma.getImageByHash(imageFill.imageHash);
        const imageSize = image ? yield image.getSizeAsync() : null;
        return {
          name: node.name,
          hasImage: true,
          imageHash: imageFill.imageHash,
          scaleMode: imageFill.scaleMode,
          imageSize,
          rotation: imageFill.rotation || 0,
          filters: imageFill.filters || null
        };
      } catch (error) {
        const errorMsg = error instanceof Error ? error.message : String(error);
        throw new Error(`Error getting image from node: ${errorMsg}`);
      }
    });
  }
  function replaceImageFill(params) {
    return __async(this, null, function* () {
      try {
        const { nodeId, newImageSource, sourceType, preserveTransform } = params || {};
        if (!nodeId || !newImageSource || !sourceType) {
          throw new Error("Missing required parameters: nodeId, newImageSource, sourceType");
        }
        const node = yield figma.getNodeByIdAsync(nodeId);
        if (!node) {
          throw new Error(`Node not found with ID: ${nodeId}`);
        }
        if (!("fills" in node)) {
          throw new Error(`Node type ${node.type} does not support fills`);
        }
        const fills = Array.isArray(node.fills) ? node.fills : [];
        const imageFillIndex = fills.findIndex((fill) => fill.type === "IMAGE");
        if (imageFillIndex === -1) {
          throw new Error(`Node does not have an existing image fill to replace`);
        }
        const existingImageFill = fills[imageFillIndex];
        let newImage;
        if (sourceType === "url") {
          newImage = yield figma.createImageAsync(newImageSource);
        } else if (sourceType === "base64") {
          const imageBytes = base64ToUint8Array(newImageSource);
          newImage = figma.createImage(imageBytes);
        } else {
          throw new Error(`Invalid sourceType: ${sourceType}`);
        }
        const newImageFill = {
          type: "IMAGE",
          imageHash: newImage.hash
        };
        if (preserveTransform !== false) {
          if (existingImageFill.scaleMode)
            newImageFill.scaleMode = existingImageFill.scaleMode;
          if (existingImageFill.imageTransform)
            newImageFill.imageTransform = existingImageFill.imageTransform;
          if (existingImageFill.rotation)
            newImageFill.rotation = existingImageFill.rotation;
          if (existingImageFill.scalingFactor)
            newImageFill.scalingFactor = existingImageFill.scalingFactor;
          if (existingImageFill.filters)
            newImageFill.filters = existingImageFill.filters;
        } else {
          newImageFill.scaleMode = "FILL";
        }
        const newFills = fills.slice();
        newFills[imageFillIndex] = newImageFill;
        node.fills = newFills;
        return {
          name: node.name,
          preserved: preserveTransform !== false
        };
      } catch (error) {
        const errorMsg = error instanceof Error ? error.message : String(error);
        throw new Error(`Error replacing image fill: ${errorMsg}`);
      }
    });
  }
  function applyImageTransform(params) {
    return __async(this, null, function* () {
      try {
        const { nodeId, scaleMode, rotation, translateX, translateY, scale } = params || {};
        if (!nodeId) {
          throw new Error("Missing nodeId parameter");
        }
        const node = yield figma.getNodeByIdAsync(nodeId);
        if (!node) {
          throw new Error(`Node not found with ID: ${nodeId}`);
        }
        if (!("fills" in node)) {
          throw new Error(`Node type ${node.type} does not support fills`);
        }
        const fills = Array.isArray(node.fills) ? node.fills : [];
        const imageFillIndex = fills.findIndex((fill) => fill.type === "IMAGE");
        if (imageFillIndex === -1) {
          throw new Error(`Node does not have an image fill`);
        }
        const imageFill = Object.assign({}, fills[imageFillIndex]);
        const transformApplied = [];
        if (scaleMode !== void 0) {
          imageFill.scaleMode = scaleMode;
          transformApplied.push(`scaleMode: ${scaleMode}`);
        }
        if (rotation !== void 0) {
          if (![0, 90, 180, 270].includes(rotation)) {
            throw new Error("Rotation must be 0, 90, 180, or 270 degrees");
          }
          imageFill.rotation = rotation;
          transformApplied.push(`rotation: ${rotation}\xB0`);
        }
        if (translateX !== void 0 || translateY !== void 0 || scale !== void 0) {
          const currentTransform = imageFill.imageTransform || [[1, 0, 0], [0, 1, 0]];
          const newTransform = [
            [currentTransform[0][0], currentTransform[0][1], currentTransform[0][2]],
            [currentTransform[1][0], currentTransform[1][1], currentTransform[1][2]]
          ];
          if (scale !== void 0) {
            newTransform[0][0] = scale;
            newTransform[1][1] = scale;
            transformApplied.push(`scale: ${scale}`);
          }
          if (translateX !== void 0) {
            newTransform[0][2] = translateX;
            transformApplied.push(`translateX: ${translateX}`);
          }
          if (translateY !== void 0) {
            newTransform[1][2] = translateY;
            transformApplied.push(`translateY: ${translateY}`);
          }
          imageFill.imageTransform = newTransform;
        }
        const newFills = fills.slice();
        newFills[imageFillIndex] = imageFill;
        node.fills = newFills;
        return {
          name: node.name,
          transformApplied: transformApplied.length > 0 ? transformApplied : ["no changes"]
        };
      } catch (error) {
        const errorMsg = error instanceof Error ? error.message : String(error);
        throw new Error(`Error applying image transform: ${errorMsg}`);
      }
    });
  }
  function setImageFilters(params) {
    return __async(this, null, function* () {
      try {
        const nodeId = params.nodeId;
        const filters = params.filters;
        if (!nodeId || !filters) {
          throw new Error("Missing required parameters: nodeId, filters");
        }
        const node = yield figma.getNodeByIdAsync(nodeId);
        if (!node) {
          throw new Error("Node not found with ID: " + nodeId);
        }
        if (!("fills" in node)) {
          throw new Error("Node type " + node.type + " does not support fills");
        }
        const fills = Array.isArray(node.fills) ? node.fills : [];
        const imageFillIndex = fills.findIndex(function(f) {
          return f.type === "IMAGE";
        });
        if (imageFillIndex === -1) {
          throw new Error("Node does not have an image fill");
        }
        const imageFill = Object.assign({}, fills[imageFillIndex]);
        const currentFilters = imageFill.filters || {};
        const newFilters = Object.assign({}, currentFilters);
        if (filters.exposure !== void 0)
          newFilters.exposure = filters.exposure;
        if (filters.contrast !== void 0)
          newFilters.contrast = filters.contrast;
        if (filters.saturation !== void 0)
          newFilters.saturation = filters.saturation;
        if (filters.temperature !== void 0)
          newFilters.temperature = filters.temperature;
        if (filters.tint !== void 0)
          newFilters.tint = filters.tint;
        if (filters.highlights !== void 0)
          newFilters.highlights = filters.highlights;
        if (filters.shadows !== void 0)
          newFilters.shadows = filters.shadows;
        imageFill.filters = newFilters;
        const newFills = fills.slice();
        newFills[imageFillIndex] = imageFill;
        node.fills = newFills;
        return {
          name: node.name,
          appliedFilters: newFilters
        };
      } catch (error) {
        const errorMsg = error instanceof Error ? error.message : String(error);
        throw new Error("Error setting image filters: " + errorMsg);
      }
    });
  }
  function rotateNode(params) {
    return __async(this, null, function* () {
      const { nodeId, angle, relative } = params || {};
      if (!nodeId) {
        throw new Error("Missing nodeId parameter");
      }
      if (angle === void 0) {
        throw new Error("Missing angle parameter");
      }
      const node = yield getNodeByIdSafe(nodeId);
      if (!node) {
        throw new Error(`Node not found with ID: ${nodeId}`);
      }
      if (!("rotation" in node)) {
        throw new Error(`Node type ${node.type} does not support rotation`);
      }
      if (relative) {
        node.rotation = node.rotation + angle;
      } else {
        node.rotation = angle;
      }
      return {
        id: node.id,
        name: node.name,
        rotation: node.rotation
      };
    });
  }
  function setNodeProperties(params) {
    return __async(this, null, function* () {
      const { nodeId, visible, locked, opacity } = params || {};
      if (!nodeId) {
        throw new Error("Missing nodeId parameter");
      }
      const node = yield getNodeByIdSafe(nodeId);
      if (!node) {
        throw new Error(`Node not found with ID: ${nodeId}`);
      }
      if (visible !== void 0) {
        node.visible = visible;
      }
      if (locked !== void 0) {
        node.locked = locked;
      }
      if (opacity !== void 0) {
        if (!("opacity" in node)) {
          throw new Error(`Node type ${node.type} does not support opacity`);
        }
        node.opacity = opacity;
      }
      return {
        id: node.id,
        name: node.name,
        visible: node.visible,
        locked: node.locked,
        opacity: "opacity" in node ? node.opacity : void 0
      };
    });
  }
  function reorderNode(params) {
    return __async(this, null, function* () {
      const { nodeId, position, index } = params || {};
      if (!nodeId) {
        throw new Error("Missing nodeId parameter");
      }
      const node = yield getNodeByIdSafe(nodeId);
      if (!node) {
        throw new Error(`Node not found with ID: ${nodeId}`);
      }
      const parent = node.parent;
      if (!parent || !("children" in parent)) {
        throw new Error("Node has no parent container or parent does not support children");
      }
      const siblings = parent.children;
      const currentIndex = siblings.indexOf(node);
      let targetIndex;
      if (index !== void 0) {
        targetIndex = Math.max(0, Math.min(index, siblings.length - 1));
      } else if (position) {
        switch (position) {
          case "front":
            targetIndex = siblings.length - 1;
            break;
          case "back":
            targetIndex = 0;
            break;
          case "forward":
            targetIndex = Math.min(currentIndex + 1, siblings.length - 1);
            break;
          case "backward":
            targetIndex = Math.max(currentIndex - 1, 0);
            break;
          default:
            throw new Error(`Invalid position: ${position}. Use front, back, forward, or backward.`);
        }
      } else {
        throw new Error("Either position or index must be provided");
      }
      parent.insertChild(targetIndex, node);
      return {
        id: node.id,
        name: node.name,
        newIndex: targetIndex,
        parentChildCount: siblings.length
      };
    });
  }
  function duplicatePage(params) {
    return __async(this, null, function* () {
      const { pageId, name } = params || {};
      if (!pageId) {
        throw new Error("Missing pageId parameter");
      }
      const page = figma.root.children.find((p) => p.id === pageId);
      if (!page) {
        throw new Error(`Page not found with ID: ${pageId}`);
      }
      const originalName = page.name;
      const clonedPage = page.clone();
      if (name) {
        clonedPage.name = name;
      } else {
        clonedPage.name = `${originalName} (Copy)`;
      }
      return {
        id: clonedPage.id,
        name: clonedPage.name,
        originalName,
        childCount: clonedPage.children.length
      };
    });
  }
  function convertToFrame(params) {
    return __async(this, null, function* () {
      const { nodeId } = params || {};
      if (!nodeId) {
        throw new Error("Missing nodeId parameter");
      }
      const node = yield getNodeByIdSafe(nodeId);
      if (!node) {
        throw new Error(`Node not found with ID: ${nodeId}`);
      }
      if (node.type === "FRAME" || node.type === "COMPONENT" || node.type === "COMPONENT_SET") {
        throw new Error(`Node is already a ${node.type}. No conversion needed.`);
      }
      if (node.type === "PAGE" || node.type === "DOCUMENT") {
        throw new Error(`Cannot convert ${node.type} to a frame`);
      }
      const parent = node.parent;
      if (!parent || !("children" in parent)) {
        throw new Error("Node has no parent container");
      }
      const originalType = node.type;
      const originalName = node.name;
      const siblings = parent.children;
      const originalIndex = siblings.indexOf(node);
      const frame = figma.createFrame();
      frame.name = originalName;
      frame.x = node.x;
      frame.y = node.y;
      frame.resize(node.width, node.height);
      if ("fills" in node)
        frame.fills = JSON.parse(JSON.stringify(node.fills));
      if ("strokes" in node)
        frame.strokes = JSON.parse(JSON.stringify(node.strokes));
      if ("strokeWeight" in node)
        frame.strokeWeight = node.strokeWeight;
      if ("effects" in node)
        frame.effects = JSON.parse(JSON.stringify(node.effects));
      if ("cornerRadius" in node)
        frame.cornerRadius = node.cornerRadius;
      if ("opacity" in node)
        frame.opacity = node.opacity;
      if ("rotation" in node)
        frame.rotation = node.rotation;
      if ("clipsContent" in node)
        frame.clipsContent = node.clipsContent;
      let childCount = 0;
      const isGroup = node.type === "GROUP";
      if ("children" in node) {
        const children = [...node.children];
        childCount = children.length;
        for (const child of children) {
          frame.appendChild(child);
        }
      }
      let nodeStillExists = true;
      if (isGroup) {
        try {
          nodeStillExists = node.parent !== null;
        } catch (e) {
          nodeStillExists = false;
        }
      }
      const insertIndex = nodeStillExists ? originalIndex : Math.min(originalIndex, parent.children.length);
      parent.insertChild(insertIndex, frame);
      if (nodeStillExists) {
        try {
          node.remove();
        } catch (e) {
        }
      }
      return {
        id: frame.id,
        name: frame.name,
        originalType,
        childCount
      };
    });
  }
  function setGradient(params) {
    return __async(this, null, function* () {
      const { nodeId, type, stops, gradientTransform } = params || {};
      if (!nodeId) {
        throw new Error("Missing nodeId parameter");
      }
      const node = yield getNodeByIdSafe(nodeId);
      if (!node) {
        throw new Error(`Node not found with ID: ${nodeId}`);
      }
      if (!("fills" in node)) {
        throw new Error(`Node type ${node.type} does not support fills`);
      }
      if (!stops || !Array.isArray(stops) || stops.length < 2) {
        throw new Error("Gradient requires at least 2 color stops");
      }
      const gradientStops = stops.map((stop) => ({
        position: stop.position,
        color: {
          r: stop.color.r,
          g: stop.color.g,
          b: stop.color.b,
          a: stop.color.a !== void 0 ? stop.color.a : 1
        }
      }));
      const gradientFill = {
        type,
        gradientStops,
        gradientTransform: gradientTransform || [[1, 0, 0], [0, 1, 0]]
      };
      node.fills = [gradientFill];
      return {
        id: node.id,
        name: node.name,
        fills: node.fills
      };
    });
  }
  function booleanOperation(params) {
    return __async(this, null, function* () {
      const { nodeIds, operation, name } = params || {};
      if (!nodeIds || !Array.isArray(nodeIds) || nodeIds.length < 2) {
        throw new Error("At least 2 node IDs are required for boolean operations");
      }
      if (!operation) {
        throw new Error("Missing operation parameter");
      }
      const nodes = [];
      for (const id of nodeIds) {
        const node = yield getNodeByIdSafe(id);
        if (!node) {
          throw new Error(`Node not found with ID: ${id}`);
        }
        nodes.push(node);
      }
      const parents = new Set(nodes.map((n) => n.parent ? n.parent.id : null));
      if (parents.size > 1) {
        throw new Error(
          `All nodes must share the same parent. Found ${parents.size} different parents. Move nodes into the same frame before performing boolean operations.`
        );
      }
      const parent = nodes[0].parent;
      if (!parent) {
        throw new Error("Nodes have no parent container");
      }
      let result;
      switch (operation) {
        case "UNION":
          result = figma.union(nodes, parent);
          break;
        case "SUBTRACT":
          result = figma.subtract(nodes, parent);
          break;
        case "INTERSECT":
          result = figma.intersect(nodes, parent);
          break;
        case "EXCLUDE":
          result = figma.exclude(nodes, parent);
          break;
        default:
          throw new Error(`Invalid operation: ${operation}. Use UNION, SUBTRACT, INTERSECT, or EXCLUDE.`);
      }
      if (name) {
        result.name = name;
      }
      return {
        id: result.id,
        name: result.name,
        type: result.type
      };
    });
  }
  function sanitizeSvg(svgString) {
    let clean = svgString;
    clean = clean.replace(/<script[\s\S]*?<\/script>/gi, "");
    clean = clean.replace(/\bon\w+\s*=\s*"[^"]*"/gi, "");
    clean = clean.replace(/\bon\w+\s*=\s*'[^']*'/gi, "");
    clean = clean.replace(/xlink:href\s*=\s*["']https?:\/\/[^"']*["']/gi, "");
    clean = clean.replace(/href\s*=\s*["']https?:\/\/[^"']*["']/gi, "");
    clean = clean.replace(/href\s*=\s*["']data:text\/html[^"']*["']/gi, "");
    return clean;
  }
  function setSvg(params) {
    return __async(this, null, function* () {
      const { svgString, x, y, name, parentId } = params || {};
      if (!svgString) {
        throw new Error("Missing svgString parameter");
      }
      if (!svgString.includes("<svg") && !svgString.includes("<?xml")) {
        throw new Error("Invalid SVG: string must contain an <svg> element");
      }
      const cleanSvg = sanitizeSvg(svgString);
      const node = figma.createNodeFromSvg(cleanSvg);
      if (x !== void 0)
        node.x = x;
      if (y !== void 0)
        node.y = y;
      if (name)
        node.name = name;
      if (parentId) {
        const parentNode = yield getNodeByIdSafe(parentId);
        if (!parentNode) {
          throw new Error(`Parent node not found with ID: ${parentId}`);
        }
        if (!("appendChild" in parentNode)) {
          throw new Error(`Parent node does not support children: ${parentId}`);
        }
        parentNode.appendChild(node);
      }
      return {
        id: node.id,
        name: node.name,
        width: node.width,
        height: node.height,
        type: node.type
      };
    });
  }
  function getSvg(params) {
    return __async(this, null, function* () {
      const { nodeId } = params || {};
      if (!nodeId) {
        throw new Error("Missing nodeId parameter");
      }
      const node = yield getNodeByIdSafe(nodeId);
      if (!node) {
        throw new Error(`Node not found with ID: ${nodeId}`);
      }
      if (!("exportAsync" in node)) {
        throw new Error(`Node type ${node.type} does not support export`);
      }
      const svgString = yield node.exportAsync({ format: "SVG_STRING" });
      return {
        svgString,
        name: node.name,
        id: node.id
      };
    });
  }
  function setImage(params) {
    return __async(this, null, function* () {
      const { nodeId, imageData, scaleMode } = params || {};
      if (!nodeId) {
        throw new Error("Missing nodeId parameter");
      }
      if (!imageData) {
        throw new Error("Missing imageData parameter");
      }
      const node = yield getNodeByIdSafe(nodeId);
      if (!node) {
        throw new Error(`Node not found with ID: ${nodeId}`);
      }
      if (!("fills" in node)) {
        throw new Error(`Node type ${node.type} does not support fills`);
      }
      if (!/^[A-Za-z0-9+/=]+$/.test(imageData)) {
        throw new Error("Invalid base64 encoding. Ensure the string contains only valid base64 characters (no data URI prefix).");
      }
      const bytes = customBase64Decode(imageData);
      if (bytes.length > 5 * 1024 * 1024) {
        throw new Error("Image exceeds 5MB limit. Use a smaller image or compress it first.");
      }
      const image = figma.createImage(bytes);
      node.fills = [{
        type: "IMAGE",
        imageHash: image.hash,
        scaleMode: scaleMode || "FILL",
        visible: true,
        opacity: 1
      }];
      return {
        id: node.id,
        name: node.name,
        imageHash: image.hash,
        scaleMode: scaleMode || "FILL"
      };
    });
  }
  function setGrid(params) {
    return __async(this, null, function* () {
      const { nodeId, grids } = params || {};
      if (!nodeId) {
        throw new Error("Missing nodeId parameter");
      }
      if (!grids || !Array.isArray(grids)) {
        throw new Error("Missing or invalid grids parameter");
      }
      const node = yield getNodeByIdSafe(nodeId);
      if (!node) {
        throw new Error(`Node not found with ID: ${nodeId}`);
      }
      if (!("layoutGrids" in node)) {
        throw new Error(`Node type ${node.type} does not support layout grids. Use a frame node.`);
      }
      const layoutGrids = grids.map((grid) => {
        const layoutGrid = {
          pattern: grid.pattern,
          visible: grid.visible !== void 0 ? grid.visible : true
        };
        if (grid.pattern === "GRID") {
          layoutGrid.sectionSize = grid.sectionSize !== void 0 ? grid.sectionSize : 10;
        } else {
          layoutGrid.alignment = grid.alignment !== void 0 ? grid.alignment : "STRETCH";
          if (layoutGrid.alignment === "STRETCH") {
            layoutGrid.count = grid.count !== void 0 ? grid.count : 5;
            layoutGrid.gutterSize = grid.gutterSize !== void 0 ? grid.gutterSize : 10;
            layoutGrid.offset = grid.offset !== void 0 ? grid.offset : 0;
          } else {
            layoutGrid.sectionSize = grid.sectionSize !== void 0 ? grid.sectionSize : 10;
            layoutGrid.count = grid.count !== void 0 ? grid.count : 1;
            layoutGrid.gutterSize = grid.gutterSize !== void 0 ? grid.gutterSize : 0;
            layoutGrid.offset = grid.offset !== void 0 ? grid.offset : 0;
          }
        }
        if (grid.color) {
          layoutGrid.color = {
            r: grid.color.r,
            g: grid.color.g,
            b: grid.color.b,
            a: grid.color.a !== void 0 ? grid.color.a : 0.1
          };
        }
        return layoutGrid;
      });
      node.layoutGrids = layoutGrids;
      return {
        id: node.id,
        name: node.name,
        gridCount: layoutGrids.length
      };
    });
  }
  function getGrid(params) {
    return __async(this, null, function* () {
      const { nodeId } = params || {};
      if (!nodeId) {
        throw new Error("Missing nodeId parameter");
      }
      const node = yield getNodeByIdSafe(nodeId);
      if (!node) {
        throw new Error(`Node not found with ID: ${nodeId}`);
      }
      if (!("layoutGrids" in node)) {
        throw new Error(`Node type ${node.type} does not support layout grids. Use a frame node.`);
      }
      return {
        id: node.id,
        name: node.name,
        grids: node.layoutGrids.map((grid) => ({
          pattern: grid.pattern,
          visible: grid.visible,
          sectionSize: grid.sectionSize,
          count: grid.count,
          gutterSize: grid.gutterSize,
          offset: grid.offset,
          alignment: grid.alignment,
          color: grid.color
        }))
      };
    });
  }
  function setGuide(params) {
    return __async(this, null, function* () {
      const { pageId, guides } = params || {};
      if (!pageId) {
        throw new Error("Missing pageId parameter");
      }
      if (!guides || !Array.isArray(guides)) {
        throw new Error("Missing or invalid guides parameter");
      }
      const page = figma.root.children.find((p) => p.id === pageId);
      if (!page) {
        throw new Error(`Page not found with ID: ${pageId}`);
      }
      page.guides = guides.map((guide) => ({
        axis: guide.axis,
        offset: guide.offset
      }));
      return {
        id: page.id,
        name: page.name,
        guideCount: guides.length
      };
    });
  }
  function getGuide(params) {
    return __async(this, null, function* () {
      const { pageId } = params || {};
      if (!pageId) {
        throw new Error("Missing pageId parameter");
      }
      const page = figma.root.children.find((p) => p.id === pageId);
      if (!page) {
        throw new Error(`Page not found with ID: ${pageId}`);
      }
      return {
        id: page.id,
        name: page.name,
        guides: (page.guides || []).map((guide) => ({
          axis: guide.axis,
          offset: guide.offset
        }))
      };
    });
  }
  function setAnnotation(params) {
    return __async(this, null, function* () {
      const { nodeId, label } = params || {};
      if (!nodeId) {
        throw new Error("Missing nodeId parameter");
      }
      if (!label) {
        throw new Error("Missing label parameter");
      }
      const node = yield getNodeByIdSafe(nodeId);
      if (!node) {
        throw new Error(`Node not found with ID: ${nodeId}`);
      }
      if (!("annotations" in node)) {
        throw new Error(
          "Annotations API is not available on this node type (" + node.type + "). Supported types: Frame, Rectangle, Ellipse, Text, Component, Instance, etc."
        );
      }
      const existing = node.annotations ? node.annotations.map((a) => {
        const copy = JSON.parse(JSON.stringify(a));
        if (copy.label && copy.labelMarkdown) {
          delete copy.labelMarkdown;
        }
        return copy;
      }) : [];
      existing.push({ label, properties: [] });
      node.annotations = existing;
      return {
        id: node.id,
        name: node.name,
        annotationCount: existing.length
      };
    });
  }
  function getAnnotation(params) {
    return __async(this, null, function* () {
      const { nodeId } = params || {};
      if (!nodeId) {
        throw new Error("Missing nodeId parameter");
      }
      const node = yield getNodeByIdSafe(nodeId);
      if (!node) {
        throw new Error(`Node not found with ID: ${nodeId}`);
      }
      if (!("annotations" in node)) {
        throw new Error(
          "Annotations API is not available in this Figma version. Please update Figma Desktop to the latest version. This feature requires the proposed API (enableProposedApi: true in manifest)."
        );
      }
      return {
        id: node.id,
        name: node.name,
        annotations: node.annotations || []
      };
    });
  }
  function getVariables() {
    return __async(this, null, function* () {
      if (!figma.variables) {
        throw new Error(
          "Variables API is not available. This feature requires Figma with Variables support. Ensure enableProposedApi is true in the plugin manifest."
        );
      }
      const collections = yield figma.variables.getLocalVariableCollectionsAsync();
      const result = [];
      for (const collection of collections) {
        const variables = [];
        for (const variableId of collection.variableIds) {
          const variable = yield figma.variables.getVariableByIdAsync(variableId);
          if (variable) {
            variables.push({
              id: variable.id,
              name: variable.name,
              resolvedType: variable.resolvedType,
              valuesByMode: variable.valuesByMode
            });
          }
        }
        result.push({
          id: collection.id,
          name: collection.name,
          modes: collection.modes,
          variableIds: collection.variableIds,
          variables
        });
      }
      return { collections: result };
    });
  }
  function setVariable(params) {
    return __async(this, null, function* () {
      const { collectionId, collectionName, name, resolvedType, value, modeId } = params || {};
      if (!figma.variables) {
        throw new Error(
          "Variables API is not available. This feature requires Figma with Variables support."
        );
      }
      if (!name) {
        throw new Error("Missing name parameter");
      }
      if (!resolvedType) {
        throw new Error("Missing resolvedType parameter");
      }
      if (value === void 0 || value === null) {
        throw new Error("Missing value parameter");
      }
      let collection;
      if (collectionId) {
        collection = yield figma.variables.getVariableCollectionByIdAsync(collectionId);
        if (!collection) {
          throw new Error(`Variable collection not found: ${collectionId}`);
        }
      } else if (collectionName) {
        const collections = yield figma.variables.getLocalVariableCollectionsAsync();
        collection = collections.find((c) => c.name === collectionName);
        if (!collection) {
          collection = figma.variables.createVariableCollection(collectionName);
        }
      } else {
        throw new Error("Either collectionId or collectionName must be provided");
      }
      let variable = null;
      for (const varId of collection.variableIds) {
        const v = yield figma.variables.getVariableByIdAsync(varId);
        if (v && v.name === name) {
          variable = v;
          break;
        }
      }
      if (!variable) {
        variable = figma.variables.createVariable(name, collection, resolvedType);
      }
      const targetModeId = modeId || collection.modes[0].modeId;
      let finalValue = value;
      if (typeof value === "string") {
        if (resolvedType === "FLOAT") {
          const parsed = parseFloat(value);
          if (!isNaN(parsed))
            finalValue = parsed;
        } else if (resolvedType === "BOOLEAN") {
          if (value.toLowerCase() === "true")
            finalValue = true;
          if (value.toLowerCase() === "false")
            finalValue = false;
        } else if (resolvedType === "COLOR") {
          try {
            if (value.startsWith("{")) {
              finalValue = JSON.parse(value);
            }
          } catch (e) {
          }
        }
      }
      if (resolvedType === "COLOR") {
        if (typeof finalValue !== "object" || finalValue === null || finalValue.r === void 0) {
          throw new Error("Value does not match resolvedType. Expected COLOR object {r, g, b, a}, got " + typeof finalValue);
        }
      } else if (resolvedType === "FLOAT") {
        if (typeof finalValue !== "number") {
          throw new Error("Value does not match resolvedType. Expected FLOAT (number), got " + typeof finalValue);
        }
      } else if (resolvedType === "STRING") {
        if (typeof finalValue !== "string") {
          throw new Error("Value does not match resolvedType. Expected STRING, got " + typeof finalValue);
        }
      } else if (resolvedType === "BOOLEAN") {
        if (typeof finalValue !== "boolean") {
          throw new Error("Value does not match resolvedType. Expected BOOLEAN, got " + typeof finalValue);
        }
      }
      variable.setValueForMode(targetModeId, finalValue);
      return {
        variableId: variable.id,
        variableName: variable.name,
        collectionId: collection.id,
        collectionName: collection.name,
        resolvedType: variable.resolvedType,
        value: finalValue
      };
    });
  }
  function applyVariableToNode(params) {
    return __async(this, null, function* () {
      const { nodeId, variableId, field } = params || {};
      if (!figma.variables) {
        throw new Error(
          "Variables API is not available. This feature requires Figma with Variables support."
        );
      }
      if (!nodeId) {
        throw new Error("Missing nodeId parameter");
      }
      if (!variableId) {
        throw new Error("Missing variableId parameter");
      }
      if (!field) {
        throw new Error("Missing field parameter");
      }
      const node = yield getNodeByIdSafe(nodeId);
      if (!node) {
        throw new Error(`Node not found with ID: ${nodeId}`);
      }
      const variable = yield figma.variables.getVariableByIdAsync(variableId);
      if (!variable) {
        throw new Error(`Variable not found with ID: ${variableId}`);
      }
      if (!("setBoundVariable" in node)) {
        throw new Error(`Node type ${node.type} does not support variable bindings`);
      }
      const paintMatch = field.match(/^(fills|strokes)\/(\d+)\/color$/);
      if (paintMatch) {
        const paintProp = paintMatch[1];
        const paintIndex = parseInt(paintMatch[2], 10);
        if (!(paintProp in node)) {
          throw new Error(`Node does not have ${paintProp} property`);
        }
        const paints = [...node[paintProp]];
        if (paintIndex >= paints.length) {
          throw new Error(`${paintProp} index ${paintIndex} out of range (node has ${paints.length} ${paintProp})`);
        }
        const paint = Object.assign({}, paints[paintIndex]);
        paint.boundVariables = Object.assign({}, paint.boundVariables || {});
        paint.boundVariables.color = { type: "VARIABLE_ALIAS", id: variable.id };
        paints[paintIndex] = paint;
        node[paintProp] = paints;
      } else {
        node.setBoundVariable(field, variable);
      }
      return {
        nodeId: node.id,
        nodeName: node.name,
        variableId: variable.id,
        variableName: variable.name,
        field
      };
    });
  }
  function switchVariableMode(params) {
    return __async(this, null, function* () {
      const { nodeId, collectionId, modeId } = params || {};
      if (!figma.variables) {
        throw new Error(
          "Variables API is not available. This feature requires Figma with Variables support."
        );
      }
      if (!nodeId) {
        throw new Error("Missing nodeId parameter");
      }
      if (!collectionId) {
        throw new Error("Missing collectionId parameter");
      }
      if (!modeId) {
        throw new Error("Missing modeId parameter");
      }
      const node = yield getNodeByIdSafe(nodeId);
      if (!node) {
        throw new Error(`Node not found with ID: ${nodeId}`);
      }
      if (!("setExplicitVariableModeForCollection" in node)) {
        throw new Error(`Node type ${node.type} does not support variable mode switching`);
      }
      const collection = yield figma.variables.getVariableCollectionByIdAsync(collectionId);
      if (!collection) {
        throw new Error(`Variable collection not found: ${collectionId}`);
      }
      const mode = collection.modes.find((m) => m.modeId === modeId);
      if (!mode) {
        throw new Error(`Mode not found with ID: ${modeId} in collection "${collection.name}"`);
      }
      node.setExplicitVariableModeForCollection(collection, mode.modeId);
      return {
        nodeId: node.id,
        nodeName: node.name,
        collectionId: collection.id,
        collectionName: collection.name,
        modeId: mode.modeId,
        modeName: mode.name
      };
    });
  }
  function stickyColorToFill(color) {
    var palette = {
      yellow: [1, 0.886, 0.6],
      pink: [1, 0.659, 0.859],
      green: [0.702, 0.937, 0.741],
      blue: [0.659, 0.855, 1],
      purple: [0.827, 0.741, 1],
      red: [1, 0.686, 0.639],
      orange: [1, 0.827, 0.659],
      teal: [0.702, 0.957, 0.937],
      gray: [0.902, 0.902, 0.902],
      white: [1, 1, 1]
    };
    var rgb = palette[color] || palette["yellow"];
    return [{ type: "SOLID", color: { r: rgb[0], g: rgb[1], b: rgb[2] }, opacity: 1, visible: true, blendMode: "NORMAL" }];
  }
  function getFigJamElements() {
    return __async(this, null, function* () {
      yield figma.currentPage.loadAsync();
      const figjamTypes = /* @__PURE__ */ new Set(["STICKY", "CONNECTOR", "SHAPE_WITH_TEXT", "SECTION", "STAMP"]);
      const results = { stickies: [], connectors: [], shapesWithText: [], sections: [], stamps: [] };
      function walk(node) {
        if (figjamTypes.has(node.type)) {
          const base = { id: node.id, name: node.name, type: node.type, x: node.x, y: node.y };
          switch (node.type) {
            case "STICKY":
              results.stickies.push(Object.assign({}, base, {
                width: node.width,
                height: node.height,
                text: node.text ? node.text.characters : "",
                fills: node.fills,
                isWide: node.isWide,
                authorName: node.authorName
              }));
              break;
            case "CONNECTOR":
              results.connectors.push(Object.assign({}, base, {
                connectorStart: node.connectorStart,
                connectorEnd: node.connectorEnd,
                connectorLineType: node.connectorLineType,
                connectorStartStrokeCap: node.connectorStartStrokeCap,
                connectorEndStrokeCap: node.connectorEndStrokeCap,
                strokeWeight: node.strokeWeight,
                strokes: node.strokes
              }));
              break;
            case "SHAPE_WITH_TEXT":
              results.shapesWithText.push(Object.assign({}, base, {
                width: node.width,
                height: node.height,
                shapeType: node.shapeType,
                text: node.text ? node.text.characters : "",
                fills: node.fills
              }));
              break;
            case "SECTION":
              results.sections.push(Object.assign({}, base, {
                width: node.width,
                height: node.height,
                fills: node.fills,
                childCount: "children" in node ? node.children.length : 0
              }));
              break;
            case "STAMP":
              results.stamps.push(Object.assign({}, base, {
                width: node.width,
                height: node.height,
                authorName: node.authorName
              }));
              break;
          }
        }
        if ("children" in node) {
          for (const child of node.children) {
            walk(child);
          }
        }
      }
      for (const child of figma.currentPage.children) {
        walk(child);
      }
      return {
        pageId: figma.currentPage.id,
        pageName: figma.currentPage.name,
        totalElements: results.stickies.length + results.connectors.length + results.shapesWithText.length + results.sections.length + results.stamps.length,
        stickies: results.stickies,
        connectors: results.connectors,
        shapesWithText: results.shapesWithText,
        sections: results.sections,
        stamps: results.stamps
      };
    });
  }
  function createSticky(params) {
    return __async(this, null, function* () {
      const {
        x = 0,
        y = 0,
        text = "",
        color = "yellow",
        isWide = false,
        name,
        parentId
      } = params || {};
      if (!figma.createSticky) {
        throw new Error("createSticky is not available. This command requires a FigJam document.");
      }
      const sticky = figma.createSticky();
      if (parentId) {
        const parentNode = yield getNodeByIdSafe(parentId);
        if (!parentNode) {
          throw new Error("Parent node not found with ID: " + parentId);
        }
        if (!("appendChild" in parentNode)) {
          throw new Error("Parent node does not support children: " + parentId);
        }
        parentNode.appendChild(sticky);
      }
      try {
        sticky.x = x;
        sticky.y = y;
        try {
          sticky.isWide = isWide;
        } catch (e) {
        }
        if (name) {
          sticky.name = name;
        }
        try {
          sticky.color = color.toUpperCase();
        } catch (e) {
          try {
            sticky.fills = stickyColorToFill(color);
          } catch (fillErr) {
            console.warn("create_sticky: could not apply color '" + color + "':", fillErr);
          }
        }
        if (text) {
          yield figma.loadFontAsync(sticky.text.fontName);
          sticky.text.characters = text;
        }
      } catch (propErr) {
        throw new Error("create_sticky failed: " + propErr.message);
      }
      var resultFills;
      try {
        resultFills = sticky.fills;
      } catch (e) {
        resultFills = [];
      }
      return {
        id: sticky.id,
        name: sticky.name,
        type: sticky.type,
        x: sticky.x,
        y: sticky.y,
        width: sticky.width,
        height: sticky.height,
        text: sticky.text ? sticky.text.characters : "",
        isWide: sticky.isWide,
        fills: resultFills,
        parentId: sticky.parent ? sticky.parent.id : void 0
      };
    });
  }
  function setStickyText(params) {
    return __async(this, null, function* () {
      const { nodeId, text } = params || {};
      if (!nodeId) {
        throw new Error("Missing nodeId parameter");
      }
      if (text === void 0 || text === null) {
        throw new Error("Missing text parameter");
      }
      const node = yield getNodeByIdSafe(nodeId);
      if (!node) {
        throw new Error(`Node not found with ID: ${nodeId}`);
      }
      if (node.type !== "STICKY") {
        throw new Error(`Node ${nodeId} is not a sticky note (type: ${node.type})`);
      }
      yield figma.loadFontAsync(node.text.fontName);
      node.text.characters = text;
      return {
        id: node.id,
        name: node.name,
        type: node.type,
        text: node.text.characters
      };
    });
  }
  function createShapeWithText(params) {
    return __async(this, null, function* () {
      const {
        x = 0,
        y = 0,
        width = 200,
        height = 200,
        shapeType = "ROUNDED_RECTANGLE",
        text = "",
        fillColor,
        name,
        parentId
      } = params || {};
      if (!figma.createShapeWithText) {
        throw new Error("createShapeWithText is not available. This command requires a FigJam document.");
      }
      const shape = figma.createShapeWithText();
      shape.x = x;
      shape.y = y;
      shape.resize(width, height);
      shape.shapeType = shapeType;
      if (name) {
        shape.name = name;
      }
      if (fillColor) {
        shape.fills = [
          {
            type: "SOLID",
            color: {
              r: parseFloat(fillColor.r) || 0,
              g: parseFloat(fillColor.g) || 0,
              b: parseFloat(fillColor.b) || 0
            },
            opacity: fillColor.a !== void 0 ? parseFloat(fillColor.a) : 1
          }
        ];
      }
      if (text) {
        yield figma.loadFontAsync(shape.text.fontName);
        shape.text.characters = text;
      }
      if (parentId) {
        const parentNode = yield getNodeByIdSafe(parentId);
        if (!parentNode) {
          throw new Error(`Parent node not found with ID: ${parentId}`);
        }
        if (!("appendChild" in parentNode)) {
          throw new Error(`Parent node does not support children: ${parentId}`);
        }
        parentNode.appendChild(shape);
      } else {
        figma.currentPage.appendChild(shape);
      }
      return {
        id: shape.id,
        name: shape.name,
        type: shape.type,
        shapeType: shape.shapeType,
        x: shape.x,
        y: shape.y,
        width: shape.width,
        height: shape.height,
        text: shape.text.characters,
        fills: shape.fills,
        parentId: shape.parent ? shape.parent.id : void 0
      };
    });
  }
  function createConnector(params) {
    return __async(this, null, function* () {
      const {
        startNodeId,
        startX,
        startY,
        endNodeId,
        endX,
        endY,
        connectorLineType = "ELBOWED",
        startStrokeCap = "NONE",
        endStrokeCap = "ARROW",
        strokeColor,
        strokeWeight,
        name,
        parentId
      } = params || {};
      if (!figma.createConnector) {
        throw new Error("createConnector is not available. This command requires a FigJam document.");
      }
      const connector = figma.createConnector();
      if (startNodeId) {
        const startNode = yield getNodeByIdSafe(startNodeId);
        if (!startNode) {
          throw new Error(`Start node not found with ID: ${startNodeId}`);
        }
        connector.connectorStart = { endpointNodeId: startNodeId, magnet: "AUTO" };
      } else if (startX !== void 0 && startY !== void 0) {
        connector.connectorStart = { position: { x: startX, y: startY } };
      } else {
        throw new Error("Either startNodeId or both startX and startY must be provided");
      }
      if (endNodeId) {
        const endNode = yield getNodeByIdSafe(endNodeId);
        if (!endNode) {
          throw new Error(`End node not found with ID: ${endNodeId}`);
        }
        connector.connectorEnd = { endpointNodeId: endNodeId, magnet: "AUTO" };
      } else if (endX !== void 0 && endY !== void 0) {
        connector.connectorEnd = { position: { x: endX, y: endY } };
      } else {
        throw new Error("Either endNodeId or both endX and endY must be provided");
      }
      connector.connectorLineType = connectorLineType;
      connector.connectorStartStrokeCap = startStrokeCap;
      connector.connectorEndStrokeCap = endStrokeCap;
      if (strokeColor) {
        connector.strokes = [
          {
            type: "SOLID",
            color: {
              r: parseFloat(strokeColor.r) || 0,
              g: parseFloat(strokeColor.g) || 0,
              b: parseFloat(strokeColor.b) || 0
            },
            opacity: strokeColor.a !== void 0 ? parseFloat(strokeColor.a) : 1
          }
        ];
      }
      if (strokeWeight !== void 0) {
        connector.strokeWeight = strokeWeight;
      }
      if (name) {
        connector.name = name;
      }
      if (parentId) {
        const parentNode = yield getNodeByIdSafe(parentId);
        if (!parentNode) {
          throw new Error("Parent node not found with ID: " + parentId);
        }
        if (!("appendChild" in parentNode)) {
          throw new Error("Parent node does not support children: " + parentId);
        }
        parentNode.appendChild(connector);
      } else {
        figma.currentPage.appendChild(connector);
      }
      return {
        id: connector.id,
        name: connector.name,
        type: connector.type,
        connectorStart: connector.connectorStart,
        connectorEnd: connector.connectorEnd,
        connectorLineType: connector.connectorLineType,
        connectorStartStrokeCap: connector.connectorStartStrokeCap,
        connectorEndStrokeCap: connector.connectorEndStrokeCap,
        strokeWeight: connector.strokeWeight,
        strokes: connector.strokes
      };
    });
  }
  function createSection(params) {
    return __async(this, null, function* () {
      const {
        x = 0,
        y = 0,
        width = 800,
        height = 600,
        name = "Section",
        fillColor,
        parentId
      } = params || {};
      if (!figma.createSection) {
        throw new Error("createSection is not available. This command requires a FigJam document.");
      }
      const section = figma.createSection();
      section.x = x;
      section.y = y;
      section.resizeWithoutConstraints(width, height);
      section.name = name;
      if (fillColor) {
        section.fills = [
          {
            type: "SOLID",
            color: {
              r: parseFloat(fillColor.r) || 0,
              g: parseFloat(fillColor.g) || 0,
              b: parseFloat(fillColor.b) || 0
            },
            opacity: fillColor.a !== void 0 ? parseFloat(fillColor.a) : 1
          }
        ];
      }
      if (parentId) {
        const parentNode = yield getNodeByIdSafe(parentId);
        if (!parentNode) {
          throw new Error("Parent node not found with ID: " + parentId);
        }
        if (!("appendChild" in parentNode)) {
          throw new Error("Parent node does not support children: " + parentId);
        }
        parentNode.appendChild(section);
      } else {
        figma.currentPage.appendChild(section);
      }
      return {
        id: section.id,
        name: section.name,
        type: section.type,
        x: section.x,
        y: section.y,
        width: section.width,
        height: section.height,
        fills: section.fills
      };
    });
  }
  function setReactions(params) {
    return __async(this, null, function* () {
      if (!params || !params.nodeId) {
        throw new Error("Missing nodeId parameter");
      }
      if (!params.reactions || !Array.isArray(params.reactions)) {
        throw new Error("Missing or invalid reactions parameter");
      }
      const node = yield getNodeByIdSafe(params.nodeId);
      if (!node) {
        throw new Error(`Node not found: ${params.nodeId}`);
      }
      const overlayDebug = [];
      for (const r of params.reactions) {
        if (r.actions && Array.isArray(r.actions)) {
          for (const a of r.actions) {
            if (a.type === "NODE" && a.navigation === "OVERLAY" && a.destinationId) {
              try {
                const destNode = yield figma.getNodeByIdAsync(a.destinationId);
                const info = { destId: a.destinationId, type: destNode ? destNode.type : "not found" };
                if (destNode) {
                  let targetNode = destNode;
                  if (destNode.type === "INSTANCE") {
                    const mainComp = yield destNode.getMainComponentAsync();
                    if (mainComp) {
                      targetNode = mainComp;
                      info.usingMainComponent = targetNode.id;
                    }
                  }
                  info.targetType = targetNode.type;
                  info.hasOverlayPositionType = "overlayPositionType" in targetNode;
                  info.beforePositionType = targetNode.overlayPositionType;
                  info.beforeBgInteraction = targetNode.overlayBackgroundInteraction;
                  try {
                    targetNode.overlayPositionType = a.overlayPositionType || "CENTER";
                    info.afterPositionType = targetNode.overlayPositionType;
                  } catch (e) {
                    info.positionTypeError = e.message || String(e);
                  }
                  try {
                    targetNode.overlayBackgroundInteraction = a.overlayBackgroundInteraction || "CLOSE_ON_CLICK_OUTSIDE";
                    info.afterBgInteraction = targetNode.overlayBackgroundInteraction;
                  } catch (e) {
                    info.bgInteractionError = e.message || String(e);
                  }
                }
                overlayDebug.push(info);
              } catch (e) {
                overlayDebug.push({ destId: a.destinationId, error: e.message || String(e) });
              }
            }
          }
        }
      }
      const reactions = params.reactions.map((r) => {
        const reaction = {};
        if (r.trigger) {
          reaction.trigger = { type: r.trigger.type };
          if (r.trigger.delay !== void 0) {
            reaction.trigger.delay = r.trigger.delay;
          }
        }
        const buildTransition = (t) => {
          if (!t)
            return null;
          return {
            type: t.type || "DISSOLVE",
            easing: t.easing || { type: "EASE_IN_AND_OUT" },
            duration: t.duration !== void 0 ? t.duration : 0.2
          };
        };
        if (r.actions && Array.isArray(r.actions)) {
          const mappedActions = r.actions.map((a) => {
            if (a.type === "NODE") {
              const nav = a.navigation || "NAVIGATE";
              const nodeAction = {
                type: "NODE",
                destinationId: a.destinationId || null,
                navigation: nav,
                transition: buildTransition(a.transition),
                preserveScrollPosition: a.preserveScrollPosition || false,
                resetVideoPosition: a.resetVideoPosition || false,
                resetScrollPosition: a.resetScrollPosition || false,
                resetInteractiveComponents: a.resetInteractiveComponents || false
              };
              if (nav === "OVERLAY" && a.overlayRelativePosition) {
                nodeAction.overlayRelativePosition = a.overlayRelativePosition;
              }
              return nodeAction;
            } else if (a.type === "BACK") {
              return { type: "BACK", transition: buildTransition(a.transition) };
            } else if (a.type === "CLOSE") {
              return { type: "CLOSE" };
            } else if (a.type === "URL") {
              return { type: "URL", url: a.url || "" };
            }
            return { type: a.type };
          });
          reaction.actions = mappedActions;
        }
        return reaction;
      });
      const debugJson = JSON.stringify(reactions, null, 2);
      console.log("setReactionsAsync input:", debugJson);
      try {
        yield node.setReactionsAsync(reactions);
      } catch (e) {
        try {
          const reactionsOldFormat = reactions.map((r) => ({
            trigger: r.trigger,
            action: r.actions ? r.actions[0] : r.action
          }));
          yield node.setReactionsAsync(reactionsOldFormat);
        } catch (e2) {
          const errStr = e ? e.message || e.toString() || JSON.stringify(e) : "unknown";
          const errStr2 = e2 ? e2.message || e2.toString() || JSON.stringify(e2) : "unknown";
          throw new Error(`setReactionsAsync failed.
New API error: ${errStr}
Old API error: ${errStr2}
Input: ${debugJson}`);
        }
      }
      const actualReactions = node.reactions;
      const actualCount = actualReactions ? actualReactions.length : 0;
      const actualJson = JSON.stringify(actualReactions, null, 2);
      return {
        id: node.id,
        name: node.name,
        reactionsCount: reactions.length,
        actualReactionsCount: actualCount,
        sentToFigma: debugJson,
        readBackFromFigma: actualJson,
        overlayDebug: overlayDebug.length > 0 ? overlayDebug : void 0,
        message: `Set ${reactions.length} reaction(s) on node "${node.name}" (verified: ${actualCount} persisted)`
      };
    });
  }
  function getReactions(params) {
    return __async(this, null, function* () {
      if (!params || !params.nodeId) {
        throw new Error("Missing nodeId parameter");
      }
      const node = yield getNodeByIdSafe(params.nodeId);
      if (!node) {
        throw new Error(`Node not found: ${params.nodeId}`);
      }
      const reactions = node.reactions;
      return {
        id: node.id,
        name: node.name,
        type: node.type,
        reactionsCount: reactions ? reactions.length : 0,
        reactions: reactions ? JSON.parse(JSON.stringify(reactions)) : []
      };
    });
  }
  function detachInstance(params) {
    return __async(this, null, function* () {
      const { nodeId } = params || {};
      if (!nodeId) {
        throw new Error("Missing nodeId parameter");
      }
      const node = yield getNodeByIdSafe(nodeId);
      if (!node) {
        throw new Error(`Node not found with ID: ${nodeId}`);
      }
      if (node.type !== "INSTANCE") {
        throw new Error(`Node with ID ${nodeId} is not a component INSTANCE`);
      }
      const detachedFrame = node.detachInstance();
      return {
        success: true,
        frameId: detachedFrame.id,
        frameName: detachedFrame.name,
        frameType: detachedFrame.type
      };
    });
  }
  function createTextStyle(params) {
    return __async(this, null, function* () {
      const {
        name,
        fontFamily,
        fontStyle = "Regular",
        fontSize,
        letterSpacing,
        letterSpacingUnit = "PIXELS",
        lineHeight,
        lineHeightUnit = "PIXELS",
        textCase = "ORIGINAL",
        textDecoration = "NONE"
      } = params || {};
      const style = figma.createTextStyle();
      style.name = name;
      yield figma.loadFontAsync({ family: fontFamily, style: fontStyle });
      style.fontName = { family: fontFamily, style: fontStyle };
      style.fontSize = fontSize;
      if (letterSpacing !== void 0) {
        style.letterSpacing = { value: letterSpacing, unit: letterSpacingUnit };
      }
      if (lineHeight !== void 0) {
        if (lineHeightUnit === "AUTO") {
          style.lineHeight = { unit: "AUTO" };
        } else {
          style.lineHeight = { value: lineHeight, unit: lineHeightUnit };
        }
      }
      style.textCase = textCase;
      style.textDecoration = textDecoration;
      return { id: style.id, name: style.name, key: style.key };
    });
  }
  function createPaintStyle(params) {
    return __async(this, null, function* () {
      const { name, r, g, b, a = 1 } = params || {};
      const style = figma.createPaintStyle();
      style.name = name;
      style.paints = [
        {
          type: "SOLID",
          color: { r, g, b },
          opacity: a
        }
      ];
      return { id: style.id, name: style.name, key: style.key };
    });
  }
  function createEffectStyle(params) {
    return __async(this, null, function* () {
      const { name, effects } = params || {};
      const style = figma.createEffectStyle();
      style.name = name;
      style.effects = (effects || []).map((effect) => ({
        type: effect.type,
        radius: effect.radius || 0,
        visible: effect.visible !== false,
        color: effect.color ? { r: effect.color.r, g: effect.color.g, b: effect.color.b, a: effect.color.a !== void 0 ? effect.color.a : 1 } : { r: 0, g: 0, b: 0, a: 0.25 },
        offset: effect.offset ? { x: effect.offset.x, y: effect.offset.y } : { x: 0, y: 0 },
        spread: effect.spread || 0,
        blendMode: effect.blendMode || "NORMAL"
      }));
      return {
        id: style.id,
        name: style.name,
        key: style.key,
        effectCount: style.effects.length
      };
    });
  }
  var setCharacters, setCharactersWithStrictMatchFont, getDelimiterPos, buildLinearOrder, setCharactersWithSmartMatchFont;
  var init_mcp_commands = __esm({
    "src/mcp-commands.ts"() {
      "use strict";
      setCharacters = (node, characters, options) => __async(void 0, null, function* () {
        const fallbackFont = options && options.fallbackFont || {
          family: "Inter",
          style: "Regular"
        };
        try {
          if (node.fontName === figma.mixed) {
            if (options && options.smartStrategy === "prevail") {
              const fontHashTree = {};
              for (let i = 1; i < node.characters.length; i++) {
                const charFont = node.getRangeFontName(i - 1, i);
                const key = `${charFont.family}::${charFont.style}`;
                fontHashTree[key] = fontHashTree[key] ? fontHashTree[key] + 1 : 1;
              }
              const prevailedTreeItem = Object.entries(fontHashTree).sort(
                (a, b) => b[1] - a[1]
              )[0];
              const [family, style] = prevailedTreeItem[0].split("::");
              const prevailedFont = {
                family,
                style
              };
              yield figma.loadFontAsync(prevailedFont);
              node.fontName = prevailedFont;
            } else if (options && options.smartStrategy === "strict") {
              return setCharactersWithStrictMatchFont(node, characters, fallbackFont);
            } else if (options && options.smartStrategy === "experimental") {
              return setCharactersWithSmartMatchFont(node, characters, fallbackFont);
            } else {
              const firstCharFont = node.getRangeFontName(0, 1);
              yield figma.loadFontAsync(firstCharFont);
              node.fontName = firstCharFont;
            }
          } else {
            yield figma.loadFontAsync({
              family: node.fontName.family,
              style: node.fontName.style
            });
          }
        } catch (err) {
          console.warn(
            `Failed to load "${node.fontName["family"]} ${node.fontName["style"]}" font and replaced with fallback "${fallbackFont.family} ${fallbackFont.style}"`,
            err
          );
          yield figma.loadFontAsync(fallbackFont);
          node.fontName = fallbackFont;
        }
        try {
          node.characters = characters;
          return true;
        } catch (err) {
          console.warn(`Failed to set characters. Skipped.`, err);
          return false;
        }
      });
      setCharactersWithStrictMatchFont = (node, characters, fallbackFont) => __async(void 0, null, function* () {
        const fontHashTree = {};
        for (let i = 1; i < node.characters.length; i++) {
          const startIdx = i - 1;
          const startCharFont = node.getRangeFontName(startIdx, i);
          const startCharFontVal = `${startCharFont.family}::${startCharFont.style}`;
          while (i < node.characters.length) {
            i++;
            const charFont = node.getRangeFontName(i - 1, i);
            if (startCharFontVal !== `${charFont.family}::${charFont.style}`) {
              break;
            }
          }
          fontHashTree[`${startIdx}_${i}`] = startCharFontVal;
        }
        yield figma.loadFontAsync(fallbackFont);
        node.fontName = fallbackFont;
        node.characters = characters;
        console.log(fontHashTree);
        yield Promise.all(
          Object.keys(fontHashTree).map((range) => __async(void 0, null, function* () {
            console.log(range, fontHashTree[range]);
            const [start, end] = range.split("_");
            const [family, style] = fontHashTree[range].split("::");
            const matchedFont = {
              family,
              style
            };
            yield figma.loadFontAsync(matchedFont);
            return node.setRangeFontName(Number(start), Number(end), matchedFont);
          }))
        );
        return true;
      });
      getDelimiterPos = (str, delimiter, startIdx = 0, endIdx = str.length) => {
        const indices = [];
        let temp = startIdx;
        for (let i = 0; i < endIdx; i++) {
          if (str[i] === delimiter && i + startIdx !== endIdx && temp !== i + startIdx) {
            indices.push([temp, i + startIdx]);
            temp = i + startIdx + 1;
          }
        }
        temp !== endIdx && indices.push([temp, endIdx]);
        return indices.filter(Boolean);
      };
      buildLinearOrder = (node) => {
        const fontTree = [];
        const newLinesPos = getDelimiterPos(node.characters, "\n");
        newLinesPos.forEach(([newLinesRangeStart, newLinesRangeEnd], n) => {
          const newLinesRangeFont = node.getRangeFontName(
            newLinesRangeStart,
            newLinesRangeEnd
          );
          if (newLinesRangeFont === figma.mixed) {
            const spacesPos = getDelimiterPos(
              node.characters,
              " ",
              newLinesRangeStart,
              newLinesRangeEnd
            );
            spacesPos.forEach(([spacesRangeStart, spacesRangeEnd], s) => {
              const spacesRangeFont = node.getRangeFontName(
                spacesRangeStart,
                spacesRangeEnd
              );
              if (spacesRangeFont === figma.mixed) {
                const spacesRangeFont2 = node.getRangeFontName(
                  spacesRangeStart,
                  spacesRangeStart[0]
                );
                fontTree.push({
                  start: spacesRangeStart,
                  delimiter: " ",
                  family: spacesRangeFont2.family,
                  style: spacesRangeFont2.style
                });
              } else {
                fontTree.push({
                  start: spacesRangeStart,
                  delimiter: " ",
                  family: spacesRangeFont.family,
                  style: spacesRangeFont.style
                });
              }
            });
          } else {
            fontTree.push({
              start: newLinesRangeStart,
              delimiter: "\n",
              family: newLinesRangeFont.family,
              style: newLinesRangeFont.style
            });
          }
        });
        return fontTree.sort((a, b) => +a.start - +b.start).map(({ family, style, delimiter }) => ({ family, style, delimiter }));
      };
      setCharactersWithSmartMatchFont = (node, characters, fallbackFont) => __async(void 0, null, function* () {
        const rangeTree = buildLinearOrder(node);
        const fontsToLoad = uniqBy(
          rangeTree,
          ({ family, style }) => `${family}::${style}`
        ).map(({ family, style }) => ({
          family,
          style
        }));
        yield Promise.all([...fontsToLoad, fallbackFont].map(figma.loadFontAsync));
        node.fontName = fallbackFont;
        node.characters = characters;
        let prevPos = 0;
        rangeTree.forEach(({ family, style, delimiter }) => {
          if (prevPos < node.characters.length) {
            const delimeterPos = node.characters.indexOf(delimiter, prevPos);
            const endPos = delimeterPos > prevPos ? delimeterPos : node.characters.length;
            const matchedFont = {
              family,
              style
            };
            node.setRangeFontName(prevPos, endPos, matchedFont);
            prevPos = endPos + 1;
          }
        });
        return true;
      });
    }
  });

  // src/code.ts
  var require_code = __commonJS({
    "src/code.ts"(exports) {
      init_create_data();
      init_mcp_commands();
      figma.showUI(__html__, { width: 460, height: 700 });
      var currentThemeName = null;
      var inspectScreenActive = false;
      figma.on("selectionchange", () => __async(exports, null, function* () {
        if (!inspectScreenActive)
          return;
        yield runSelectionCheck();
      }));
      function hexToRgb(hex) {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
          r: parseInt(result[1], 16) / 255,
          g: parseInt(result[2], 16) / 255,
          b: parseInt(result[3], 16) / 255
        } : null;
      }
      function parseTokenValue(token) {
        var _a, _b, _c;
        const value = (_a = token.$value) != null ? _a : token.value;
        const type = (_c = (_b = token.$type) != null ? _b : token.type) != null ? _c : "string";
        return { value, type };
      }
      function findOrCreateVariable(collection, name, type) {
        return __async(this, null, function* () {
          const existingVar = collection.variableIds.map((id) => figma.variables.getVariableById(id)).find((v) => (v == null ? void 0 : v.name) === name);
          if (existingVar) {
            return existingVar;
          }
          return figma.variables.createVariable(name, collection, type);
        });
      }
      function processTokens(tokens, prefix = "") {
        return __async(this, null, function* () {
          const results = {
            updated: 0,
            created: 0,
            skipped: 0,
            errors: []
          };
          const collections = yield figma.variables.getLocalVariableCollectionsAsync();
          let targetCollection = collections[0];
          if (!targetCollection) {
            targetCollection = figma.variables.createVariableCollection("Design Tokens");
          }
          const defaultMode = targetCollection.modes[0].modeId;
          for (const [key, tokenOrGroup] of Object.entries(tokens)) {
            const fullName = prefix ? `${prefix}/${key}` : key;
            if (typeof tokenOrGroup === "object" && tokenOrGroup !== null) {
              const hasValue = "$value" in tokenOrGroup || "value" in tokenOrGroup;
              if (hasValue) {
                try {
                  const { value, type } = parseTokenValue(tokenOrGroup);
                  let variableType = "STRING";
                  let figmaValue = value;
                  if (type === "color") {
                    variableType = "COLOR";
                    const rgb = hexToRgb(value);
                    if (rgb) {
                      figmaValue = rgb;
                    } else {
                      results.errors.push(`Invalid color value for ${fullName}: ${value}`);
                      results.skipped++;
                      continue;
                    }
                  } else if (type === "number" || type === "dimension" || type === "float" || type === "spacing" || type === "sizing" || type === "border-radius" || type === "border-width" || type === "font-size" || type === "line-height" || type === "letter-spacing") {
                    variableType = "FLOAT";
                    figmaValue = typeof value === "number" ? value : parseFloat(value);
                  } else if (type === "boolean") {
                    variableType = "BOOLEAN";
                    figmaValue = value === "true" || value === true;
                  }
                  const variable = yield findOrCreateVariable(targetCollection, fullName, variableType);
                  if (variable.resolvedType === variableType) {
                    const existingValue = variable.valuesByMode[defaultMode];
                    variable.setValueForMode(defaultMode, figmaValue);
                    if (existingValue !== void 0) {
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
                const nestedResults = yield processTokens(tokenOrGroup, fullName);
                results.updated += nestedResults.updated;
                results.created += nestedResults.created;
                results.skipped += nestedResults.skipped;
                results.errors.push(...nestedResults.errors);
              }
            }
          }
          return results;
        });
      }
      function parseOklch(value) {
        const m = value.match(/^oklch\(\s*([0-9.]+)\s+([0-9.]+)\s+([0-9.]+)\s*\)$/i);
        if (!m)
          return null;
        return { l: parseFloat(m[1]), c: parseFloat(m[2]), h: parseFloat(m[3]) };
      }
      function oklchToRgb(value) {
        const ok = parseOklch(value);
        if (!ok)
          return null;
        const hRad = ok.h * Math.PI / 180;
        const a = ok.c * Math.cos(hRad);
        const b = ok.c * Math.sin(hRad);
        const l_ = ok.l + 0.3963377774 * a + 0.2158037573 * b;
        const m_ = ok.l - 0.1055613458 * a - 0.0638541728 * b;
        const s_ = ok.l - 0.0894841775 * a - 1.291485548 * b;
        const lc = l_ * l_ * l_;
        const mc = m_ * m_ * m_;
        const sc = s_ * s_ * s_;
        let lr = 4.0767416621 * lc - 3.3077115913 * mc + 0.2309699292 * sc;
        let lg = -1.2684380046 * lc + 2.6097574011 * mc - 0.3413193965 * sc;
        let lb = -0.0041960863 * lc - 0.7034186147 * mc + 1.707614701 * sc;
        const toSrgb = (n) => {
          const x = Math.max(0, Math.min(1, n));
          return x <= 31308e-7 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055;
        };
        return { r: toSrgb(lr), g: toSrgb(lg), b: toSrgb(lb) };
      }
      function colorValueToRgb(value) {
        if (!value)
          return null;
        if (value.startsWith("oklch("))
          return oklchToRgb(value);
        if (value.startsWith("#")) {
          const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(value);
          if (!m)
            return null;
          return { r: parseInt(m[1], 16) / 255, g: parseInt(m[2], 16) / 255, b: parseInt(m[3], 16) / 255 };
        }
        return null;
      }
      function buildThemeBlock(themeName, mode) {
        const theme = THEMES.find((t) => t.name === themeName);
        if (!theme)
          return {};
        const isBase = BASE_THEMES.indexOf(themeName) !== -1;
        if (isBase)
          return theme.cssVars[mode] || {};
        const base = THEMES.find((t) => t.name === DEFAULT_BASE);
        const baseBlock = base && base.cssVars[mode] || {};
        return Object.assign({}, baseBlock, theme.cssVars[mode] || {});
      }
      function lineHeightToString(lh) {
        if (lh.unit === "AUTO")
          return "AUTO";
        return lh.unit === "PERCENT" ? `${lh.value}%` : `${lh.value}px`;
      }
      function letterSpacingToString(ls) {
        return ls.unit === "PERCENT" ? `${ls.value}%` : `${ls.value}px`;
      }
      function parseUnitValue(v) {
        if (typeof v === "number")
          return { unit: "PIXELS", value: v };
        if (typeof v !== "string")
          return null;
        if (v === "AUTO")
          return { unit: "AUTO" };
        const m = v.match(/^(-?\d+(?:\.\d+)?)\s*(px|%)?$/);
        if (!m)
          return null;
        return { unit: m[2] === "%" ? "PERCENT" : "PIXELS", value: parseFloat(m[1]) };
      }
      function buildTypographyTokens() {
        return __async(this, null, function* () {
          const styles = yield figma.getLocalTextStylesAsync();
          const out = {};
          for (const style of styles) {
            const value = {
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
            const parts = style.name.split("/");
            let cursor = out;
            for (let i = 0; i < parts.length - 1; i++) {
              if (!cursor[parts[i]] || typeof cursor[parts[i]] !== "object") {
                cursor[parts[i]] = {};
              }
              cursor = cursor[parts[i]];
            }
            cursor[parts[parts.length - 1]] = { $type: "typography", $value: value };
          }
          return out;
        });
      }
      function flattenTypography(obj, prefix = "") {
        const out = {};
        if (!obj || typeof obj !== "object")
          return out;
        for (const key of Object.keys(obj)) {
          if (key.startsWith("$"))
            continue;
          const val = obj[key];
          if (!val || typeof val !== "object")
            continue;
          const fullName = prefix ? `${prefix}/${key}` : key;
          const tokenValue = val.$value !== void 0 ? val.$value : val.value;
          const tokenType = val.$type || val.type;
          const looksLikeTypography = tokenValue && typeof tokenValue === "object" && (tokenType === "typography" || "fontFamily" in tokenValue || "fontSize" in tokenValue);
          if (looksLikeTypography) {
            out[fullName] = tokenValue;
          } else {
            Object.assign(out, flattenTypography(val, fullName));
          }
        }
        return out;
      }
      function applyTypography(style, val) {
        if (val.fontFamily && val.fontWeight) {
          style.fontName = { family: String(val.fontFamily), style: String(val.fontWeight) };
        }
        if (typeof val.fontSize === "number")
          style.fontSize = val.fontSize;
        const lh = parseUnitValue(val.lineHeight);
        if (lh)
          style.lineHeight = lh;
        const ls = parseUnitValue(val.letterSpacing);
        if (ls && ls.unit !== "AUTO")
          style.letterSpacing = ls;
        if (typeof val.paragraphSpacing === "number")
          style.paragraphSpacing = val.paragraphSpacing;
        if (typeof val.paragraphIndent === "number")
          style.paragraphIndent = val.paragraphIndent;
        if (val.textCase)
          style.textCase = val.textCase;
        if (val.textDecoration)
          style.textDecoration = val.textDecoration;
      }
      function remapPaintArray(paints, remapping) {
        let changed = false;
        const next = paints.map((paint) => {
          const bv = paint.boundVariables;
          if (!bv)
            return paint;
          let p = paint;
          if (bv.color && bv.color.id) {
            const nv = remapping.get(bv.color.id);
            if (nv) {
              p = figma.variables.setBoundVariableForPaint(p, "color", nv);
              changed = true;
            }
          }
          return p;
        });
        return { paints: next, changed };
      }
      function remapEffectArray(effects, remapping) {
        const fields = ["color", "radius", "spread", "offsetX", "offsetY"];
        let changed = false;
        const next = effects.map((effect) => {
          const bv = effect.boundVariables;
          if (!bv)
            return effect;
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
      function remapGridArray(grids, remapping) {
        const fields = ["sectionSize", "count", "offset", "gutterSize"];
        let changed = false;
        const next = grids.map((grid) => {
          const bv = grid.boundVariables;
          if (!bv)
            return grid;
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
      function rebindScalarBindings(target, remapping) {
        if (!target || !target.boundVariables)
          return false;
        let changed = false;
        for (const prop of Object.keys(target.boundVariables)) {
          const binding = target.boundVariables[prop];
          if (!binding)
            continue;
          if (Array.isArray(binding))
            continue;
          if (binding.type === "VARIABLE_ALIAS" && binding.id) {
            const nv = remapping.get(binding.id);
            if (nv && typeof target.setBoundVariable === "function") {
              try {
                target.setBoundVariable(prop, nv);
                changed = true;
              } catch (e) {
              }
            }
          }
        }
        return changed;
      }
      function rebindNode(node, remapping) {
        let changed = false;
        if (rebindScalarBindings(node, remapping))
          changed = true;
        if ("fills" in node) {
          const fills = node.fills;
          if (Array.isArray(fills)) {
            const r = remapPaintArray(fills, remapping);
            if (r.changed) {
              node.fills = r.paints;
              changed = true;
            }
          }
        }
        if ("strokes" in node) {
          const strokes = node.strokes;
          if (Array.isArray(strokes)) {
            const r = remapPaintArray(strokes, remapping);
            if (r.changed) {
              node.strokes = r.paints;
              changed = true;
            }
          }
        }
        if ("effects" in node) {
          const effects = node.effects;
          if (Array.isArray(effects)) {
            const r = remapEffectArray(effects, remapping);
            if (r.changed) {
              node.effects = r.effects;
              changed = true;
            }
          }
        }
        if ("layoutGrids" in node) {
          const grids = node.layoutGrids;
          if (Array.isArray(grids)) {
            const r = remapGridArray(grids, remapping);
            if (r.changed) {
              node.layoutGrids = r.grids;
              changed = true;
            }
          }
        }
        if (node.type === "TEXT") {
          const t = node;
          try {
            const segments = t.getStyledTextSegments(["fills"]);
            for (const seg of segments) {
              const r = remapPaintArray(seg.fills, remapping);
              if (r.changed) {
                t.setRangeFills(seg.start, seg.end, r.paints);
                changed = true;
              }
            }
          } catch (e) {
          }
        }
        return changed;
      }
      function rebindAllReferences(remapping) {
        return __async(this, null, function* () {
          const stats = { variables: 0, nodes: 0, paintStyles: 0, effectStyles: 0, textStyles: 0 };
          if (remapping.size === 0)
            return stats;
          const collections = yield figma.variables.getLocalVariableCollectionsAsync();
          for (const col of collections) {
            for (const vId of col.variableIds) {
              const v = yield figma.variables.getVariableByIdAsync(vId);
              if (!v)
                continue;
              const modeIds = Object.keys(v.valuesByMode);
              for (const modeId of modeIds) {
                const val = v.valuesByMode[modeId];
                if (val && typeof val === "object" && val.type === "VARIABLE_ALIAS" && val.id) {
                  const nv = remapping.get(val.id);
                  if (nv) {
                    try {
                      v.setValueForMode(modeId, { type: "VARIABLE_ALIAS", id: nv.id });
                      stats.variables++;
                    } catch (e) {
                    }
                  }
                }
              }
            }
          }
          const visit = (node) => {
            if (rebindNode(node, remapping))
              stats.nodes++;
            if ("children" in node) {
              for (const child of node.children)
                visit(child);
            }
          };
          for (const page of figma.root.children)
            visit(page);
          const paintStyles = yield figma.getLocalPaintStylesAsync();
          for (const style of paintStyles) {
            const r = remapPaintArray(style.paints, remapping);
            if (r.changed) {
              style.paints = r.paints;
              stats.paintStyles++;
            }
          }
          const effectStyles = yield figma.getLocalEffectStylesAsync();
          for (const style of effectStyles) {
            const r = remapEffectArray(style.effects, remapping);
            if (r.changed) {
              style.effects = r.effects;
              stats.effectStyles++;
            }
          }
          const textStyles = yield figma.getLocalTextStylesAsync();
          for (const style of textStyles) {
            if (rebindScalarBindings(style, remapping))
              stats.textStyles++;
          }
          return stats;
        });
      }
      function getFigmaVariables() {
        return __async(this, null, function* () {
          const collections = yield figma.variables.getLocalVariableCollectionsAsync();
          const variables = [];
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
                  value
                });
              }
            }
          }
          return variables;
        });
      }
      function rgbToHex(r, g, b) {
        const h = (v) => Math.round(v * 255).toString(16).padStart(2, "0");
        return "#" + h(r) + h(g) + h(b);
      }
      function toLinear(c) {
        return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
      }
      function relativeLuminance(r, g, b) {
        return 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b);
      }
      function wcagContrastRatio(l1, l2) {
        const lighter = Math.max(l1, l2);
        const darker = Math.min(l1, l2);
        return (lighter + 0.05) / (darker + 0.05);
      }
      function getFirstSolidFillColor(node) {
        if (!("fills" in node))
          return null;
        const fills = node.fills;
        if (!Array.isArray(fills))
          return null;
        for (const fill of fills) {
          if (fill.type === "SOLID" && fill.visible !== false) {
            return { r: fill.color.r, g: fill.color.g, b: fill.color.b };
          }
        }
        return null;
      }
      function findBackgroundColor(node) {
        let current = node.parent;
        while (current && current.type !== "PAGE" && current.type !== "DOCUMENT") {
          const fill = getFirstSolidFillColor(current);
          if (fill)
            return fill;
          current = current.parent;
        }
        return { r: 1, g: 1, b: 1 };
      }
      function computeContrastChecks(nodes) {
        const results = [];
        const visit = (node, pathParts) => {
          if (node.type === "TEXT") {
            const text = node;
            const textFill = getFirstSolidFillColor(text);
            if (!textFill)
              return;
            const bgFill = findBackgroundColor(text);
            const textLum = relativeLuminance(textFill.r, textFill.g, textFill.b);
            const bgLum = relativeLuminance(bgFill.r, bgFill.g, bgFill.b);
            const ratio = Math.round(wcagContrastRatio(textLum, bgLum) * 100) / 100;
            const fontSize = typeof text.fontSize === "number" ? text.fontSize : 16;
            const fontStyle = typeof text.fontName !== "symbol" ? text.fontName.style.toLowerCase() : "";
            const isBold = /bold|semibold|black|heavy/.test(fontStyle);
            const isLargeText = fontSize >= 18 || fontSize >= 14 && isBold;
            const aaThreshold = isLargeText ? 3 : 4.5;
            const aaaThreshold = isLargeText ? 4.5 : 7;
            results.push({
              nodeId: text.id,
              nodeName: text.name,
              path: pathParts.join(" \u203A "),
              textHex: rgbToHex(textFill.r, textFill.g, textFill.b),
              bgHex: rgbToHex(bgFill.r, bgFill.g, bgFill.b),
              ratio,
              fontSize,
              isBold,
              isLargeText,
              aaPass: ratio >= aaThreshold,
              aaaPass: ratio >= aaaThreshold
            });
          }
          if ("children" in node) {
            for (const child of node.children) {
              visit(child, [...pathParts, child.name]);
            }
          }
        };
        for (const node of nodes)
          visit(node, [node.name]);
        return results;
      }
      function rgbClose(a, b) {
        return Math.abs(a.r - b.r) < 0.015 && Math.abs(a.g - b.g) < 0.015 && Math.abs(a.b - b.b) < 0.015;
      }
      function checkPaints(paints, propertyName, themeColorMap, issues) {
        return __async(this, null, function* () {
          var _a;
          for (let i = 0; i < paints.length; i++) {
            const paint = paints[i];
            if (paint.type !== "SOLID")
              continue;
            const solid = paint;
            const colorHex = rgbToHex(solid.color.r, solid.color.g, solid.color.b);
            const label = paints.length > 1 ? `${propertyName}[${i}]` : propertyName;
            const boundColor = (_a = solid.boundVariables) == null ? void 0 : _a.color;
            if (!(boundColor == null ? void 0 : boundColor.id)) {
              issues.push({ category: "color", property: label, status: "hardcoded", colorHex });
              continue;
            }
            const variable = yield figma.variables.getVariableByIdAsync(boundColor.id);
            if (!variable) {
              issues.push({ category: "color", property: label, status: "hardcoded", colorHex });
              continue;
            }
            const varName = variable.name;
            const tokenKey = (varName.split("/").pop() || varName).toLowerCase();
            if (themeColorMap.size === 0) {
              issues.push({ category: "color", property: label, status: "ok", colorHex, variableName: varName, tokenName: tokenKey });
              continue;
            }
            const expectedRgb = themeColorMap.get(tokenKey);
            if (!expectedRgb) {
              issues.push({ category: "color", property: label, status: "ok", colorHex, variableName: varName, tokenName: tokenKey });
              continue;
            }
            const expectedHex = rgbToHex(expectedRgb.r, expectedRgb.g, expectedRgb.b);
            const isMatch = rgbClose(solid.color, expectedRgb);
            issues.push({
              category: "color",
              property: label,
              status: isMatch ? "ok" : "mismatch",
              colorHex,
              expectedHex: isMatch ? void 0 : expectedHex,
              variableName: varName,
              tokenName: tokenKey
            });
          }
        });
      }
      function checkFloatProp(node, propName, issues) {
        var _a;
        const val = node[propName];
        if (typeof val !== "number" || val === 0)
          return;
        const bound = (_a = node.boundVariables) == null ? void 0 : _a[propName];
        if ((bound == null ? void 0 : bound.type) === "VARIABLE_ALIAS") {
          const variable = figma.variables.getVariableById(bound.id);
          if (variable && variable.resolvedType === "FLOAT") {
            issues.push({ category: "spacing", property: propName, status: "ok", currentValue: String(val), variableName: variable.name });
          }
          return;
        }
        issues.push({ category: "spacing", property: propName, status: "hardcoded", currentValue: String(val) });
      }
      function checkTypographyNode(node, issues) {
        const styleId = node.textStyleId;
        if (!styleId || typeof styleId === "symbol") {
          let fontDesc = "";
          try {
            if (typeof node.fontName !== "symbol")
              fontDesc = node.fontName.family;
            if (typeof node.fontSize === "number")
              fontDesc += (fontDesc ? " " : "") + node.fontSize + "px";
          } catch (e) {
          }
          issues.push({ category: "typography", property: "textStyle", status: "hardcoded", currentValue: fontDesc || "no style" });
        } else {
          const style = figma.getStyleById(styleId);
          issues.push({ category: "typography", property: "textStyle", status: "ok", variableName: style ? style.name : "unknown style" });
        }
      }
      function scanNode(node, themeColorMap, results, pathParts, depth, counter, maxDepth = 8) {
        return __async(this, null, function* () {
          if (depth > maxDepth || counter.count > counter.max)
            return;
          counter.count++;
          const issues = [];
          if ("fills" in node) {
            const fills = node.fills;
            if (Array.isArray(fills) && fills.length > 0) {
              yield checkPaints(fills, "fill", themeColorMap, issues);
            }
          }
          if ("strokes" in node) {
            const strokes = node.strokes;
            if (Array.isArray(strokes) && strokes.length > 0) {
              yield checkPaints(strokes, "stroke", themeColorMap, issues);
            }
          }
          for (const prop of ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "cornerRadius"]) {
            if (prop in node)
              checkFloatProp(node, prop, issues);
          }
          if ("itemSpacing" in node && node.layoutMode && node.layoutMode !== "NONE") {
            checkFloatProp(node, "itemSpacing", issues);
          }
          if (node.type === "TEXT")
            checkTypographyNode(node, issues);
          if (issues.length > 0) {
            results.push({
              nodeId: node.id,
              nodeName: node.name,
              nodeType: node.type,
              path: pathParts.join(" \u203A "),
              issues
            });
          }
          if ("children" in node) {
            for (const child of node.children) {
              yield scanNode(child, themeColorMap, results, [...pathParts, child.name], depth + 1, counter, maxDepth);
            }
          }
        });
      }
      function runSelectionCheck() {
        return __async(this, null, function* () {
          const selection = figma.currentPage.selection;
          if (selection.length === 0) {
            figma.ui.postMessage({ type: "selection-check-result", nodes: [], empty: true, themeName: currentThemeName });
            return;
          }
          const themeColorMap = /* @__PURE__ */ new Map();
          if (currentThemeName) {
            const lightBlock = buildThemeBlock(currentThemeName, "light");
            for (const [key, value] of Object.entries(lightBlock)) {
              const rgb = colorValueToRgb(value);
              if (rgb)
                themeColorMap.set(key.toLowerCase(), rgb);
            }
          }
          const results = [];
          const counter = { count: 0, max: 200 };
          for (const node of selection) {
            yield scanNode(node, themeColorMap, results, [node.name], 0, counter);
          }
          const contrastChecks = computeContrastChecks(selection);
          figma.ui.postMessage({
            type: "selection-check-result",
            nodes: results,
            empty: false,
            themeName: currentThemeName,
            totalScanned: counter.count,
            contrastChecks
          });
        });
      }
      function parsePropKey(raw) {
        const m = raw.match(/^(fill|stroke)\[(\d+)\]$/);
        if (m)
          return { propName: m[1] === "stroke" ? "strokes" : "fills", index: parseInt(m[2]) };
        return { propName: raw.startsWith("stroke") ? "strokes" : "fills", index: 0 };
      }
      function fixSingleIssue(nodeId, propertyRaw, status, variableName, themeName) {
        return __async(this, null, function* () {
          const node = figma.getNodeById(nodeId);
          if (!node)
            return;
          const collections = yield figma.variables.getLocalVariableCollectionsAsync();
          const spacingPropNames = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "itemSpacing", "cornerRadius"];
          if (spacingPropNames.indexOf(propertyRaw) !== -1) {
            if (status === "hardcoded") {
              const val = node[propertyRaw];
              if (typeof val !== "number")
                return;
              let bestVar = null;
              let bestDist = Infinity;
              for (const col of collections) {
                const modeId = col.modes[0].modeId;
                for (const id of col.variableIds) {
                  const v = yield figma.variables.getVariableByIdAsync(id);
                  if (!v || v.resolvedType !== "FLOAT")
                    continue;
                  const varVal = v.valuesByMode[modeId];
                  if (typeof varVal !== "number")
                    continue;
                  const dist = Math.abs(varVal - val);
                  if (dist < bestDist) {
                    bestDist = dist;
                    bestVar = v;
                  }
                }
              }
              if (bestVar) {
                try {
                  node.setBoundVariable(propertyRaw, bestVar);
                } catch (e) {
                }
              }
            }
            return;
          }
          const { propName, index } = parsePropKey(propertyRaw);
          const rawPaints = [...node[propName] || []];
          const paint = rawPaints[index];
          if (!paint || paint.type !== "SOLID")
            return;
          const solid = paint;
          if (status === "mismatch" && variableName && themeName) {
            for (const col of collections) {
              for (const id of col.variableIds) {
                const v = yield figma.variables.getVariableByIdAsync(id);
                if (!v || v.name !== variableName)
                  continue;
                const lightBlock = buildThemeBlock(themeName, "light");
                const tokenKey = (v.name.split("/").pop() || v.name).toLowerCase();
                const expectedVal = lightBlock[tokenKey] || lightBlock[Object.keys(lightBlock).find((k) => k.toLowerCase() === tokenKey) || ""] || "";
                const rgb = colorValueToRgb(expectedVal);
                if (rgb) {
                  try {
                    v.setValueForMode(col.modes[0].modeId, rgb);
                  } catch (e) {
                  }
                }
                return;
              }
            }
            return;
          }
          if (status === "hardcoded") {
            let bestVar = null;
            let bestDist = Infinity;
            for (const col of collections) {
              const modeId = col.modes[0].modeId;
              for (const id of col.variableIds) {
                const v = yield figma.variables.getVariableByIdAsync(id);
                if (!v || v.resolvedType !== "COLOR")
                  continue;
                const val = v.valuesByMode[modeId];
                if (!val || typeof val.r !== "number")
                  continue;
                const dist = __pow(val.r - solid.color.r, 2) + __pow(val.g - solid.color.g, 2) + __pow(val.b - solid.color.b, 2);
                if (dist < bestDist) {
                  bestDist = dist;
                  bestVar = v;
                }
              }
            }
            if (bestVar) {
              const newPaint = figma.variables.setBoundVariableForPaint(solid, "color", bestVar);
              rawPaints[index] = newPaint;
              node[propName] = rawPaints;
            }
          }
        });
      }
      function runPageAudit() {
        return __async(this, null, function* () {
          const themeColorMap = /* @__PURE__ */ new Map();
          if (currentThemeName) {
            const lightBlock = buildThemeBlock(currentThemeName, "light");
            for (const [key, value] of Object.entries(lightBlock)) {
              const rgb = colorValueToRgb(value);
              if (rgb)
                themeColorMap.set(key.toLowerCase(), rgb);
            }
          }
          const results = [];
          const counter = { count: 0, max: 5e3 };
          for (const node of figma.currentPage.children) {
            yield scanNode(node, themeColorMap, results, [node.name], 0, counter, 30);
          }
          let hardcoded = 0, mismatch = 0, ok = 0;
          const byCategory = { color: { hardcoded: 0, mismatch: 0 }, spacing: { hardcoded: 0 }, typography: { hardcoded: 0 } };
          for (const n of results) {
            for (const iss of n.issues) {
              if (iss.status === "hardcoded") {
                hardcoded++;
                if (iss.category === "color")
                  byCategory.color.hardcoded++;
                else if (iss.category === "spacing")
                  byCategory.spacing.hardcoded++;
                else
                  byCategory.typography.hardcoded++;
              } else if (iss.status === "mismatch") {
                mismatch++;
                byCategory.color.mismatch++;
              } else
                ok++;
            }
          }
          const total = hardcoded + mismatch + ok;
          const score = total > 0 ? Math.round(ok / total * 100) : 100;
          figma.ui.postMessage({
            type: "page-audit-result",
            nodes: results,
            totalScanned: counter.count,
            hardcoded,
            mismatch,
            ok,
            score,
            byCategory,
            themeName: currentThemeName
          });
        });
      }
      function extractUsedVariableIds(node, usedIds) {
        const bv = node.boundVariables;
        if (bv) {
          for (const key of Object.keys(bv)) {
            const binding = bv[key];
            if (!binding)
              continue;
            if (Array.isArray(binding)) {
              for (const b of binding) {
                if ((b == null ? void 0 : b.type) === "VARIABLE_ALIAS")
                  usedIds.add(b.id);
              }
            } else if (binding.type === "VARIABLE_ALIAS") {
              usedIds.add(binding.id);
            }
          }
        }
        for (const prop of ["fills", "strokes", "effects"]) {
          const arr = node[prop];
          if (!Array.isArray(arr))
            continue;
          for (const item of arr) {
            const itemBv = item.boundVariables;
            if (!itemBv)
              continue;
            for (const key of Object.keys(itemBv)) {
              const b = itemBv[key];
              if ((b == null ? void 0 : b.type) === "VARIABLE_ALIAS")
                usedIds.add(b.id);
            }
          }
        }
      }
      function findUnusedVariables() {
        return __async(this, null, function* () {
          const usedIds = /* @__PURE__ */ new Set();
          const visit = (node) => {
            extractUsedVariableIds(node, usedIds);
            if ("children" in node) {
              for (const child of node.children)
                visit(child);
            }
          };
          for (const page of figma.root.children)
            visit(page);
          const paintStyles = yield figma.getLocalPaintStylesAsync();
          for (const style of paintStyles) {
            for (const paint of style.paints) {
              const bv = paint.boundVariables;
              if (!bv)
                continue;
              for (const key of Object.keys(bv)) {
                const b = bv[key];
                if ((b == null ? void 0 : b.type) === "VARIABLE_ALIAS")
                  usedIds.add(b.id);
              }
            }
          }
          const collections = yield figma.variables.getLocalVariableCollectionsAsync();
          const unused = [];
          let total = 0;
          for (const col of collections) {
            total += col.variableIds.length;
            for (const id of col.variableIds) {
              if (usedIds.has(id))
                continue;
              const v = yield figma.variables.getVariableByIdAsync(id);
              if (!v)
                continue;
              const val = v.valuesByMode[col.modes[0].modeId];
              let displayVal = "";
              if (v.resolvedType === "COLOR" && val && typeof val === "object" && "r" in val) {
                displayVal = rgbToHex(val.r, val.g, val.b);
              } else {
                displayVal = String(val);
              }
              unused.push({ id, name: v.name, type: v.resolvedType, collection: col.name, value: displayVal });
            }
          }
          return { unused, total };
        });
      }
      function collectComponentTokens(nodes) {
        const found = /* @__PURE__ */ new Map();
        const visitNode = (node) => {
          const bv = node.boundVariables;
          if (bv) {
            for (const [prop, binding] of Object.entries(bv)) {
              if (!binding || Array.isArray(binding))
                continue;
              const b = binding;
              if (b.type !== "VARIABLE_ALIAS" || found.has(b.id))
                continue;
              const v = figma.variables.getVariableById(b.id);
              if (!v)
                continue;
              const val = v.valuesByMode[Object.keys(v.valuesByMode)[0]];
              let displayVal = "";
              if (v.resolvedType === "COLOR" && val && typeof val === "object" && "r" in val) {
                displayVal = rgbToHex(val.r, val.g, val.b);
              } else {
                displayVal = String(val);
              }
              found.set(b.id, { variableId: b.id, name: v.name, type: v.resolvedType, value: displayVal, property: prop });
            }
          }
          for (const paintProp of ["fills", "strokes"]) {
            const arr = node[paintProp];
            if (!Array.isArray(arr))
              continue;
            for (const paint of arr) {
              const paintBv = paint.boundVariables;
              if (!paintBv)
                continue;
              for (const [, b] of Object.entries(paintBv)) {
                const binding = b;
                if (!binding || binding.type !== "VARIABLE_ALIAS" || found.has(binding.id))
                  continue;
                const v = figma.variables.getVariableById(binding.id);
                if (!v)
                  continue;
                const val = v.valuesByMode[Object.keys(v.valuesByMode)[0]];
                let displayVal = "";
                if (v.resolvedType === "COLOR" && val && typeof val === "object" && "r" in val) {
                  displayVal = rgbToHex(val.r, val.g, val.b);
                } else {
                  displayVal = String(val);
                }
                found.set(binding.id, { variableId: binding.id, name: v.name, type: v.resolvedType, value: displayVal, property: paintProp });
              }
            }
          }
          if ("children" in node) {
            for (const child of node.children)
              visitNode(child);
          }
        };
        for (const node of nodes)
          visitNode(node);
        return Array.from(found.values());
      }
      var ASTRO_COMPONENT_MAP = {
        // Keys use the exact folder names from bejamas/ui for reliable matching
        "accordion": { component: "Accordion", importPath: "import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/ui/accordion';", example: '<Accordion>\n  <AccordionItem value="item-1">\n    <AccordionTrigger>Title</AccordionTrigger>\n    <AccordionContent>Content</AccordionContent>\n  </AccordionItem>\n</Accordion>', description: "Collapsible content sections" },
        "alert": { component: "Alert", importPath: "import { Alert, AlertTitle, AlertDescription } from '@/ui/alert';", variants: ["default", "destructive"], example: "<Alert>\n  <AlertTitle>Heads up!</AlertTitle>\n  <AlertDescription>Something important.</AlertDescription>\n</Alert>", description: "Contextual feedback messages" },
        "avatar": { component: "Avatar", importPath: "import { Avatar, AvatarImage, AvatarFallback, AvatarBadge, AvatarGroup } from '@/ui/avatar';", example: '<Avatar>\n  <AvatarImage src="/photo.png" />\n  <AvatarFallback>AB</AvatarFallback>\n</Avatar>', description: "User profile image with fallback and group support" },
        "badge": { component: "Badge", importPath: "import { Badge } from '@/ui/badge';", variants: ["default", "secondary", "destructive", "outline"], example: '<Badge variant="default">New</Badge>', description: "Small status descriptor label" },
        "breadcrumb": { component: "Breadcrumb", importPath: "import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbSeparator } from '@/ui/breadcrumb';", example: '<Breadcrumb>\n  <BreadcrumbList>\n    <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>\n    <BreadcrumbSeparator />\n    <BreadcrumbItem>Page</BreadcrumbItem>\n  </BreadcrumbList>\n</Breadcrumb>', description: "Navigation breadcrumb trail" },
        "button-group": { component: "ButtonGroup", importPath: "import { ButtonGroup } from '@/ui/button-group';", example: "<ButtonGroup>\n  <Button>One</Button>\n  <Button>Two</Button>\n</ButtonGroup>", description: "Visually grouped set of buttons" },
        "button": { component: "Button", importPath: "import { Button } from '@/ui/button';", variants: ["default", "secondary", "outline", "ghost", "destructive", "link"], example: '<Button variant="default" size="default">Click me</Button>', description: "Interactive trigger (sizes: default, sm, lg, icon, icon-sm, icon-lg)" },
        "card": { component: "Card", importPath: "import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, CardMedia, CardAction } from '@/ui/card';", example: "<Card>\n  <CardHeader>\n    <CardTitle>Title</CardTitle>\n    <CardDescription>Description</CardDescription>\n  </CardHeader>\n  <CardContent>Content</CardContent>\n  <CardFooter>Footer</CardFooter>\n</Card>", description: "Sectioned content container" },
        "carousel": { component: "Carousel", importPath: "import { Carousel, CarouselItem } from '@/ui/carousel';", example: "<Carousel>\n  <CarouselItem>Slide 1</CarouselItem>\n  <CarouselItem>Slide 2</CarouselItem>\n</Carousel>", description: "Horizontally scrollable item carousel" },
        "checkbox": { component: "Checkbox", importPath: "import { Checkbox } from '@/ui/checkbox';", example: '<label>\n  <Checkbox id="terms" />\n  Accept terms\n</label>', description: "Binary selection checkbox" },
        "collapsible": { component: "Collapsible", importPath: "import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/ui/collapsible';", example: "<Collapsible>\n  <CollapsibleTrigger>Toggle</CollapsibleTrigger>\n  <CollapsibleContent>Hidden content</CollapsibleContent>\n</Collapsible>", description: "Show/hide content with a trigger" },
        "combobox": { component: "Combobox", importPath: "import { Combobox } from '@/ui/combobox';", example: '<Combobox placeholder="Search..." />', description: "Searchable select combobox" },
        "command": { component: "Command", importPath: "import { Command, CommandInput, CommandList, CommandItem, CommandGroup } from '@/ui/command';", example: '<Command>\n  <CommandInput placeholder="Type a command..." />\n  <CommandList>\n    <CommandGroup heading="Suggestions">\n      <CommandItem>Action</CommandItem>\n    </CommandGroup>\n  </CommandList>\n</Command>', description: "Command palette / search dialog" },
        "date": { component: "DatePicker", importPath: "import { DatePicker } from '@/ui/date';", example: "<DatePicker />", description: "Date picker input" },
        "dialog": { component: "Dialog", importPath: "import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from '@/ui/dialog';", example: "<Dialog>\n  <DialogTrigger>Open</DialogTrigger>\n  <DialogContent>\n    <DialogHeader>\n      <DialogTitle>Title</DialogTitle>\n      <DialogDescription>Description</DialogDescription>\n    </DialogHeader>\n    <DialogFooter><DialogClose>Close</DialogClose></DialogFooter>\n  </DialogContent>\n</Dialog>", description: "Modal dialog overlay" },
        "dropdown-menu": { component: "DropdownMenu", importPath: "import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuLabel, DropdownMenuGroup } from '@/ui/dropdown-menu';", example: "<DropdownMenu>\n  <DropdownMenuTrigger>Open</DropdownMenuTrigger>\n  <DropdownMenuContent>\n    <DropdownMenuLabel>Label</DropdownMenuLabel>\n    <DropdownMenuSeparator />\n    <DropdownMenuItem>Item</DropdownMenuItem>\n  </DropdownMenuContent>\n</DropdownMenu>", description: "Dropdown action menu" },
        "field": { component: "Field", importPath: "import { Field, FieldLabel, FieldError } from '@/ui/field';", example: '<Field>\n  <FieldLabel>Email</FieldLabel>\n  <Input type="email" />\n  <FieldError>Invalid email</FieldError>\n</Field>', description: "Form field wrapper with label and error" },
        "hover-card": { component: "HoverCard", importPath: "import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/ui/hover-card';", example: "<HoverCard>\n  <HoverCardTrigger>Hover me</HoverCardTrigger>\n  <HoverCardContent>Preview content</HoverCardContent>\n</HoverCard>", description: "Rich hover preview card" },
        "icon": { component: "Icon", importPath: "import { Icon } from '@/ui/icon';", example: '<Icon name="arrow-right" />', description: "Icon display component" },
        "input-group": { component: "InputGroup", importPath: "import { InputGroup } from '@/ui/input-group';", example: '<InputGroup>\n  <span>@</span>\n  <Input placeholder="username" />\n</InputGroup>', description: "Input with prefix/suffix addons" },
        "input": { component: "Input", importPath: "import { Input } from '@/ui/input';", example: '<Input type="text" placeholder="Enter value..." />', description: "Single-line text input" },
        "kbd": { component: "Kbd", importPath: "import { Kbd } from '@/ui/kbd';", example: "<Kbd>\u2318K</Kbd>", description: "Keyboard shortcut display" },
        "label": { component: "Label", importPath: "import { Label } from '@/ui/label';", example: '<Label for="field-id">Field label</Label>', description: "Accessible form field label" },
        "link-group": { component: "LinkGroup", importPath: "import { LinkGroup } from '@/ui/link-group';", example: '<LinkGroup>\n  <a href="/">Home</a>\n  <a href="/about">About</a>\n</LinkGroup>', description: "Grouped set of links" },
        "marquee": { component: "Marquee", importPath: "import { Marquee } from '@/ui/marquee';", example: "<Marquee>\n  <span>Scrolling content \xB7</span>\n</Marquee>", description: "Continuously scrolling content strip" },
        "native-select": { component: "NativeSelect", importPath: "import { NativeSelect } from '@/ui/native-select';", example: '<NativeSelect>\n  <option value="a">Option A</option>\n  <option value="b">Option B</option>\n</NativeSelect>', description: "Styled native HTML select element" },
        "navigation-menu": { component: "NavigationMenu", importPath: "import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from '@/ui/navigation-menu';", example: "<NavigationMenu>\n  <NavigationMenuList>\n    <NavigationMenuItem>\n      <NavigationMenuTrigger>Products</NavigationMenuTrigger>\n      <NavigationMenuContent>...</NavigationMenuContent>\n    </NavigationMenuItem>\n  </NavigationMenuList>\n</NavigationMenu>", description: "Accessible top-level navigation menu" },
        "popover": { component: "Popover", importPath: "import { Popover, PopoverTrigger, PopoverContent, PopoverClose, PopoverHeader, PopoverTitle, PopoverDescription } from '@/ui/popover';", example: "<Popover>\n  <PopoverTrigger>Open</PopoverTrigger>\n  <PopoverContent>\n    <PopoverHeader><PopoverTitle>Title</PopoverTitle></PopoverHeader>\n    Content\n  </PopoverContent>\n</Popover>", description: "Floating anchored content panel" },
        "radio-group": { component: "RadioGroup", importPath: "import { RadioGroup, RadioGroupItem } from '@/ui/radio-group';", example: '<RadioGroup defaultValue="a">\n  <label><RadioGroupItem value="a" /> Option A</label>\n  <label><RadioGroupItem value="b" /> Option B</label>\n</RadioGroup>', description: "Single-select radio button group" },
        "select": { component: "Select", importPath: "import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem, SelectGroup, SelectLabel } from '@/ui/select';", example: '<Select>\n  <SelectTrigger><SelectValue placeholder="Select..." /></SelectTrigger>\n  <SelectContent>\n    <SelectGroup>\n      <SelectLabel>Options</SelectLabel>\n      <SelectItem value="a">Option A</SelectItem>\n    </SelectGroup>\n  </SelectContent>\n</Select>', description: "Dropdown select menu" },
        "separator": { component: "Separator", importPath: "import { Separator } from '@/ui/separator';", example: '<Separator orientation="horizontal" />', description: "Visual divider line" },
        "skeleton": { component: "Skeleton", importPath: "import { Skeleton } from '@/ui/skeleton';", example: '<Skeleton class="h-4 w-48 rounded" />', description: "Loading skeleton placeholder" },
        "slider": { component: "Slider", importPath: "import { Slider } from '@/ui/slider';", example: "<Slider defaultValue={[50]} min={0} max={100} step={1} />", description: "Range value slider" },
        "spinner": { component: "Spinner", importPath: "import { Spinner } from '@/ui/spinner';", example: "<Spinner />", description: "Loading spinner indicator" },
        "switch": { component: "Switch", importPath: "import { Switch } from '@/ui/switch';", example: '<Switch id="toggle" />', description: "Toggle on/off control" },
        "table": { component: "Table", importPath: "import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell, TableFooter, TableCaption } from '@/ui/table';", example: "<Table>\n  <TableHeader><TableRow><TableHead>Name</TableHead></TableRow></TableHeader>\n  <TableBody><TableRow><TableCell>Value</TableCell></TableRow></TableBody>\n</Table>", description: "Data table layout" },
        "tabs": { component: "Tabs", importPath: "import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/ui/tabs';", example: '<Tabs defaultValue="tab1">\n  <TabsList><TabsTrigger value="tab1">Tab</TabsTrigger></TabsList>\n  <TabsContent value="tab1">Content</TabsContent>\n</Tabs>', description: "Tabbed content navigation" },
        "textarea": { component: "Textarea", importPath: "import { Textarea } from '@/ui/textarea';", example: '<Textarea placeholder="Enter text..." rows={4} />', description: "Multi-line text input" },
        "toggle-group": { component: "ToggleGroup", importPath: "import { ToggleGroup, ToggleGroupItem } from '@/ui/toggle-group';", example: '<ToggleGroup type="single">\n  <ToggleGroupItem value="a">A</ToggleGroupItem>\n  <ToggleGroupItem value="b">B</ToggleGroupItem>\n</ToggleGroup>', description: "Group of mutually exclusive toggles" },
        "toggle": { component: "Toggle", importPath: "import { Toggle } from '@/ui/toggle';", variants: ["default", "outline"], example: "<Toggle>Bold</Toggle>", description: "Togglable button state" },
        "tooltip": { component: "Tooltip", importPath: "import { Tooltip, TooltipTrigger, TooltipContent } from '@/ui/tooltip';", example: "<Tooltip>\n  <TooltipTrigger>Hover me</TooltipTrigger>\n  <TooltipContent>Helpful text</TooltipContent>\n</Tooltip>", description: "Hover information overlay" }
      };
      var ASTRO_SORTED_KEYS = Object.entries(ASTRO_COMPONENT_MAP).sort((a, b) => b[0].replace(/[-_]/g, "").length - a[0].replace(/[-_]/g, "").length);
      function matchComponentName(name) {
        const lower = name.toLowerCase().replace(/[-_\s\/]/g, "");
        for (const [key, info] of ASTRO_SORTED_KEYS) {
          const keyNorm = key.replace(/[-_]/g, "");
          if (lower === keyNorm || lower.includes(keyNorm)) {
            return __spreadProps(__spreadValues({}, info), { matchedKey: key });
          }
        }
        return null;
      }
      function getComponentMap(nodes) {
        const seen = /* @__PURE__ */ new Set();
        const results = [];
        const effectiveName = (node) => {
          if (node.type === "INSTANCE") {
            const mc = node.mainComponent;
            if (mc) {
              const parent = mc.parent;
              if (parent && parent.type === "COMPONENT_SET")
                return parent.name;
              return mc.name;
            }
            return node.name;
          }
          if (node.type === "COMPONENT") {
            const parent = node.parent;
            if (parent && parent.type === "COMPONENT_SET")
              return parent.name;
            return node.name;
          }
          return node.name;
        };
        const visit = (node) => {
          const isComponent = node.type === "COMPONENT" || node.type === "COMPONENT_SET" || node.type === "INSTANCE";
          const isFrame = node.type === "FRAME";
          if (isComponent || isFrame) {
            const rawName = effectiveName(node);
            const nameKey = rawName.toLowerCase();
            const match = matchComponentName(rawName);
            if (!seen.has(nameKey) && (isComponent || match)) {
              seen.add(nameKey);
              results.push({ figmaName: rawName, nodeId: node.id, nodeType: node.type, match });
            }
          }
          if ("children" in node && node.type !== "INSTANCE") {
            for (const child of node.children)
              visit(child);
          }
        };
        for (const node of nodes)
          visit(node);
        return results;
      }
      figma.ui.onmessage = (msg) => __async(exports, null, function* () {
        if (msg.type === "get-dashboard-data") {
          try {
            const variables = yield getFigmaVariables();
            const stored = figma.root.getPluginData("githubConfig");
            const githubConfig = stored ? JSON.parse(stored) : null;
            figma.ui.postMessage({
              type: "dashboard-data",
              data: {
                variableCount: variables.length,
                githubConnected: !!githubConfig,
                githubRepo: githubConfig ? `${githubConfig.owner}/${githubConfig.repo}` : null
              }
            });
            if (githubConfig) {
              figma.ui.postMessage({
                type: "github-config-loaded",
                config: githubConfig
              });
            }
          } catch (error) {
            figma.ui.postMessage({
              type: "error",
              error: String(error)
            });
          }
        }
        if (msg.type === "save-github-config") {
          try {
            figma.root.setPluginData("githubConfig", JSON.stringify(msg.config));
            figma.notify("GitHub settings saved for this file");
          } catch (error) {
            figma.ui.postMessage({
              type: "error",
              error: String(error)
            });
          }
        }
        if (msg.type === "export-tokens") {
          try {
            const allCollections = yield figma.variables.getLocalVariableCollectionsAsync();
            const filterIds = Array.isArray(msg.collectionIds) ? msg.collectionIds : void 0;
            const collections = filterIds && filterIds.length > 0 ? allCollections.filter((c) => filterIds.indexOf(c.id) !== -1) : allCollections;
            const exportData = {};
            for (const collection of collections) {
              for (const variableId of collection.variableIds) {
                const variable = figma.variables.getVariableById(variableId);
                if (variable) {
                  const defaultMode = collection.modes[0].modeId;
                  const value = variable.valuesByMode[defaultMode];
                  let formattedValue = value;
                  if (variable.resolvedType === "COLOR" && typeof value === "object") {
                    const r = Math.round(value.r * 255);
                    const g = Math.round(value.g * 255);
                    const b = Math.round(value.b * 255);
                    formattedValue = `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
                  }
                  const parts = variable.name.split("/");
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
                    $type: variable.resolvedType === "COLOR" ? "color" : variable.resolvedType === "FLOAT" ? "number" : variable.resolvedType === "BOOLEAN" ? "boolean" : "string"
                  };
                }
              }
            }
            const jsonString = JSON.stringify(exportData, null, 2);
            figma.ui.postMessage({
              type: "download-json",
              json: jsonString,
              filename: "figma-tokens.json"
            });
            figma.notify("Tokens exported successfully");
          } catch (error) {
            figma.ui.postMessage({
              type: "error",
              error: String(error)
            });
          }
        }
        if (msg.type === "get-tokens-for-push") {
          try {
            const collections = yield figma.variables.getLocalVariableCollectionsAsync();
            const exportData = {};
            for (const collection of collections) {
              for (const variableId of collection.variableIds) {
                const variable = figma.variables.getVariableById(variableId);
                if (variable) {
                  const defaultMode = collection.modes[0].modeId;
                  const value = variable.valuesByMode[defaultMode];
                  let formattedValue = value;
                  if (variable.resolvedType === "COLOR" && typeof value === "object") {
                    const r = Math.round(value.r * 255);
                    const g = Math.round(value.g * 255);
                    const b = Math.round(value.b * 255);
                    formattedValue = `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
                  }
                  const parts = variable.name.split("/");
                  let current = exportData;
                  for (let i = 0; i < parts.length - 1; i++) {
                    if (!current[parts[i]])
                      current[parts[i]] = {};
                    current = current[parts[i]];
                  }
                  const lastPart = parts[parts.length - 1];
                  current[lastPart] = {
                    $value: formattedValue,
                    $type: variable.resolvedType === "COLOR" ? "color" : variable.resolvedType === "FLOAT" ? "number" : variable.resolvedType === "BOOLEAN" ? "boolean" : "string"
                  };
                }
              }
            }
            figma.ui.postMessage({
              type: "tokens-ready-for-push",
              json: JSON.stringify(exportData, null, 2)
            });
          } catch (error) {
            figma.ui.postMessage({
              type: "error",
              error: String(error)
            });
          }
        }
        if (msg.type === "get-variables") {
          try {
            const variables = yield getFigmaVariables();
            figma.ui.postMessage({
              type: "figma-variables",
              variables
            });
          } catch (error) {
            figma.ui.postMessage({
              type: "error",
              error: String(error)
            });
          }
        }
        if (msg.type === "get-collections") {
          try {
            const collections = yield figma.variables.getLocalVariableCollectionsAsync();
            const result = collections.map((collection) => {
              const defaultMode = collection.modes[0].modeId;
              const variables = collection.variableIds.map((id) => {
                const v = figma.variables.getVariableById(id);
                if (!v)
                  return null;
                const value = v.valuesByMode[defaultMode];
                let displayValue2 = value;
                if (v.resolvedType === "COLOR" && typeof value === "object") {
                  const r = Math.round(value.r * 255);
                  const g = Math.round(value.g * 255);
                  const b = Math.round(value.b * 255);
                  displayValue2 = `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
                } else if (typeof value === "number") {
                  displayValue2 = value;
                } else if (typeof value === "boolean") {
                  displayValue2 = value;
                } else {
                  displayValue2 = String(value);
                }
                return { id: v.id, name: v.name, type: v.resolvedType, value: displayValue2 };
              }).filter(Boolean);
              return { id: collection.id, name: collection.name, variables };
            });
            figma.ui.postMessage({ type: "collections-data", collections: result });
          } catch (error) {
            figma.ui.postMessage({ type: "error", error: String(error) });
          }
        }
        if (msg.type === "move-variables") {
          try {
            const collections = yield figma.variables.getLocalVariableCollectionsAsync();
            const targetCollection = collections.find((c) => c.id === msg.targetCollectionId);
            if (!targetCollection)
              throw new Error("Target collection not found");
            const variableIds = Array.isArray(msg.variableIds) ? msg.variableIds : [msg.variableIds];
            const remapping = /* @__PURE__ */ new Map();
            const oldVariables = [];
            for (const variableId of variableIds) {
              const variable = yield figma.variables.getVariableByIdAsync(variableId);
              if (!variable)
                continue;
              const sourceCollection = collections.find((c) => c.variableIds.includes(variableId));
              if (!sourceCollection || sourceCollection.id === targetCollection.id)
                continue;
              const newVar = figma.variables.createVariable(variable.name, targetCollection, variable.resolvedType);
              try {
                if (variable.description)
                  newVar.description = variable.description;
              } catch (e) {
              }
              try {
                newVar.hiddenFromPublishing = variable.hiddenFromPublishing;
              } catch (e) {
              }
              try {
                newVar.scopes = variable.scopes;
              } catch (e) {
              }
              try {
                const cs = variable.codeSyntax;
                if (cs) {
                  if (cs.WEB)
                    newVar.setVariableCodeSyntax("WEB", cs.WEB);
                  if (cs.ANDROID)
                    newVar.setVariableCodeSyntax("ANDROID", cs.ANDROID);
                  if (cs.iOS)
                    newVar.setVariableCodeSyntax("iOS", cs.iOS);
                }
              } catch (e) {
              }
              for (const sMode of sourceCollection.modes) {
                const val = variable.valuesByMode[sMode.modeId];
                if (val === void 0)
                  continue;
                const match = targetCollection.modes.find((m) => m.name.toLowerCase() === sMode.name.toLowerCase());
                const targetModeId = (match || targetCollection.modes[0]).modeId;
                try {
                  newVar.setValueForMode(targetModeId, val);
                } catch (e) {
                }
              }
              remapping.set(variable.id, newVar);
              oldVariables.push(variable);
            }
            if (remapping.size === 0) {
              figma.ui.postMessage({ type: "variables-moved", moved: 0, rebound: null });
              return;
            }
            figma.notify("Rebinding references\u2026");
            const rebound = yield rebindAllReferences(remapping);
            for (const v of oldVariables) {
              try {
                v.remove();
              } catch (e) {
              }
            }
            const movedCount = remapping.size;
            figma.notify(`Moved ${movedCount} variable${movedCount !== 1 ? "s" : ""} \u2014 rebound ${rebound.nodes} node${rebound.nodes !== 1 ? "s" : ""}, ${rebound.variables} alias${rebound.variables !== 1 ? "es" : ""}`);
            figma.ui.postMessage({ type: "variables-moved", moved: movedCount, rebound });
          } catch (error) {
            figma.ui.postMessage({ type: "error", error: String(error) });
          }
        }
        if (msg.type === "get-create-data") {
          figma.ui.postMessage({
            type: "create-data",
            styles: STYLES,
            themes: THEMES.map((t) => ({ name: t.name, title: t.title, isBase: BASE_THEMES.indexOf(t.name) !== -1 }))
          });
        }
        if (msg.type === "page-audit") {
          try {
            yield runPageAudit();
          } catch (error) {
            figma.ui.postMessage({ type: "error", error: String(error) });
          }
          return;
        }
        if (msg.type === "find-unused-variables") {
          try {
            const result = yield findUnusedVariables();
            figma.ui.postMessage(__spreadValues({ type: "unused-variables-result" }, result));
          } catch (error) {
            figma.ui.postMessage({ type: "error", error: String(error) });
          }
          return;
        }
        if (msg.type === "delete-variables") {
          try {
            const ids = msg.variableIds || [];
            let deleted = 0;
            for (const id of ids) {
              try {
                const v = figma.variables.getVariableById(id);
                if (v) {
                  v.remove();
                  deleted++;
                }
              } catch (e) {
              }
            }
            figma.notify(`Deleted ${deleted} variable${deleted !== 1 ? "s" : ""}`);
            const result = yield findUnusedVariables();
            figma.ui.postMessage(__spreadValues({ type: "unused-variables-result" }, result));
          } catch (error) {
            figma.ui.postMessage({ type: "error", error: String(error) });
          }
          return;
        }
        if (msg.type === "export-component-tokens") {
          try {
            const selection = figma.currentPage.selection;
            if (selection.length === 0) {
              figma.ui.postMessage({ type: "component-tokens-result", groups: [], selectionName: "" });
              return;
            }
            const groups = selection.map((node) => ({
              name: node.name,
              nodeId: node.id,
              tokens: collectComponentTokens([node])
            }));
            const selectionName = selection.length === 1 ? selection[0].name : `${selection.length} components`;
            figma.ui.postMessage({ type: "component-tokens-result", groups, selectionName });
          } catch (error) {
            figma.ui.postMessage({ type: "error", error: String(error) });
          }
          return;
        }
        if (msg.type === "get-component-map") {
          try {
            const selection = figma.currentPage.selection;
            const source = selection.length > 0 ? selection : figma.currentPage.children;
            const components = getComponentMap(source);
            figma.ui.postMessage({ type: "component-map-result", components, scannedPage: selection.length === 0 });
          } catch (error) {
            figma.ui.postMessage({ type: "error", error: String(error) });
          }
          return;
        }
        if (msg.type === "navigate-to-node") {
          try {
            const node = figma.getNodeById(msg.nodeId);
            if (node && node.type !== "DOCUMENT" && node.type !== "PAGE") {
              const sceneNode = node;
              if (sceneNode.parent && "type" in sceneNode.parent) {
                figma.currentPage.selection = [sceneNode];
                figma.viewport.scrollAndZoomIntoView([sceneNode]);
              }
            }
          } catch (e) {
          }
          return;
        }
        if (msg.type === "activate-inspect") {
          inspectScreenActive = true;
          yield runSelectionCheck();
          return;
        }
        if (msg.type === "deactivate-inspect") {
          inspectScreenActive = false;
          return;
        }
        if (msg.type === "check-selection") {
          if (msg.themeName)
            currentThemeName = msg.themeName;
          yield runSelectionCheck();
          return;
        }
        if (msg.type === "fix-issue") {
          try {
            yield fixSingleIssue(msg.nodeId, msg.propertyRaw, msg.status, msg.variableName, currentThemeName);
            yield runSelectionCheck();
          } catch (error) {
            figma.ui.postMessage({ type: "error", error: String(error) });
          }
          return;
        }
        if (msg.type === "fix-all-issues") {
          try {
            const fixes = msg.fixes || [];
            for (const fix of fixes) {
              try {
                yield fixSingleIssue(fix.nodeId, fix.propertyRaw, fix.status, fix.variableName, currentThemeName);
              } catch (e) {
              }
            }
            yield runSelectionCheck();
          } catch (error) {
            figma.ui.postMessage({ type: "error", error: String(error) });
          }
          return;
        }
        if (msg.type === "apply-theme") {
          try {
            const themeName = msg.themeName;
            currentThemeName = themeName;
            const lightBlock = buildThemeBlock(themeName, "light");
            const darkBlock = buildThemeBlock(themeName, "dark");
            if (Object.keys(lightBlock).length === 0) {
              throw new Error('Theme "' + themeName + '" not found');
            }
            const collections = yield figma.variables.getLocalVariableCollectionsAsync();
            let updated = 0;
            let darkModeBlocked = false;
            const unmatched = [];
            const tokenNames = Object.keys(lightBlock);
            for (const collection of collections) {
              const lightModes = [];
              const darkModes = [];
              const otherModes = [];
              for (const mode of collection.modes) {
                const n = mode.name.toLowerCase();
                if (n.indexOf("dark") !== -1)
                  darkModes.push(mode.modeId);
                else if (n.indexOf("light") !== -1)
                  lightModes.push(mode.modeId);
                else
                  otherModes.push(mode.modeId);
              }
              if (lightModes.length === 0 && otherModes.length > 0) {
                lightModes.push(otherModes[0]);
              }
              const colorVars = [];
              for (const id of collection.variableIds) {
                const v = yield figma.variables.getVariableByIdAsync(id);
                if (!v || v.resolvedType !== "COLOR")
                  continue;
                const last = v.name.split("/").pop() || v.name;
                colorVars.push({ variable: v, key: last.toLowerCase() });
              }
              for (const tokenName of tokenNames) {
                const matching = colorVars.filter((cv) => cv.key === tokenName.toLowerCase());
                if (matching.length === 0)
                  continue;
                const lightRgb = colorValueToRgb(lightBlock[tokenName]);
                const darkRgb = colorValueToRgb(darkBlock[tokenName] || lightBlock[tokenName]);
                const firstModeId = collection.modes[0].modeId;
                for (const { variable } of matching) {
                  if (lightRgb) {
                    let wroteLight = false;
                    for (const modeId of lightModes) {
                      try {
                        variable.setValueForMode(modeId, lightRgb);
                        wroteLight = true;
                      } catch (e) {
                      }
                    }
                    if (!wroteLight) {
                      try {
                        variable.setValueForMode(firstModeId, lightRgb);
                      } catch (e) {
                      }
                    }
                  }
                  if (darkRgb) {
                    for (const modeId of darkModes) {
                      try {
                        variable.setValueForMode(modeId, darkRgb);
                      } catch (e) {
                        darkModeBlocked = true;
                      }
                    }
                  }
                  updated++;
                }
              }
            }
            for (const tokenName of tokenNames) {
              if (!colorValueToRgb(lightBlock[tokenName]))
                continue;
              let found = false;
              for (const c of collections) {
                for (const id of c.variableIds) {
                  const v = yield figma.variables.getVariableByIdAsync(id);
                  if (v && v.resolvedType === "COLOR" && (v.name.split("/").pop() || v.name).toLowerCase() === tokenName.toLowerCase()) {
                    found = true;
                    break;
                  }
                }
                if (found)
                  break;
              }
              if (!found)
                unmatched.push(tokenName);
            }
            const SIZE_OFFSETS = {
              xs: -6,
              sm: -4,
              md: -2,
              lg: 0,
              xl: 4,
              "2xl": 8,
              "3xl": 16,
              small: -4,
              medium: -2,
              large: 0
            };
            const NEUTRAL_SIZES = /* @__PURE__ */ new Set(["none", "full", "round", "pill", "circle"]);
            const SIZE_REGEX = /(?:^|[^a-z0-9])(3xl|2xl|xl|lg|md|sm|xs|small|medium|large|none|full|round|pill|circle)(?:$|[^a-z0-9])/i;
            let radiusUpdated = 0;
            let radiusFailed = 0;
            let radiusFloatCount = 0;
            let radiusNameMatched = 0;
            const radiusSamples = [];
            const radiusFailures = [];
            const floatSamples = [];
            const styleName = msg.styleName;
            const radiusBase = styleName ? STYLE_RADIUS[styleName] : null;
            if (radiusBase !== null && radiusBase !== void 0) {
              for (const collection of collections) {
                for (const id of collection.variableIds) {
                  const v = yield figma.variables.getVariableByIdAsync(id);
                  if (!v || v.resolvedType !== "FLOAT")
                    continue;
                  radiusFloatCount++;
                  if (floatSamples.length < 8)
                    floatSamples.push(v.name);
                  const lower = v.name.toLowerCase();
                  if (lower.indexOf("radius") === -1 && lower.indexOf("rounded") === -1)
                    continue;
                  radiusNameMatched++;
                  const sizeMatch = lower.match(SIZE_REGEX);
                  const size = sizeMatch ? sizeMatch[1] : null;
                  if (size && NEUTRAL_SIZES.has(size))
                    continue;
                  const offset = size && SIZE_OFFSETS[size] !== void 0 ? SIZE_OFFSETS[size] : 0;
                  const target = Math.max(0, radiusBase + offset);
                  let wroteOne = false;
                  for (const mode of collection.modes) {
                    try {
                      v.setValueForMode(mode.modeId, target);
                      wroteOne = true;
                    } catch (e) {
                      if (radiusFailures.length < 5)
                        radiusFailures.push(v.name + " [" + mode.name + "]: " + String(e));
                    }
                  }
                  if (wroteOne) {
                    radiusUpdated++;
                    if (radiusSamples.length < 8)
                      radiusSamples.push(v.name + " \u2192 " + target);
                  } else {
                    radiusFailed++;
                  }
                }
              }
            }
            const parts = [updated + " color variable" + (updated !== 1 ? "s" : "")];
            if (radiusUpdated > 0)
              parts.push(radiusUpdated + " radius variable" + (radiusUpdated !== 1 ? "s" : ""));
            if (darkModeBlocked)
              parts.push("dark mode skipped (free plan)");
            figma.notify('Applied "' + themeName + '" \u2014 ' + parts.join(", "));
            figma.ui.postMessage({
              type: "apply-theme-complete",
              updated,
              radiusUpdated,
              radiusFailed,
              radiusFloatCount,
              radiusNameMatched,
              radiusSamples,
              radiusFailures,
              floatSamples,
              unmatched,
              darkModeBlocked
            });
          } catch (error) {
            figma.ui.postMessage({ type: "error", error: String(error) });
          }
        }
        if (msg.type === "get-text-styles") {
          try {
            const tokens = yield buildTypographyTokens();
            figma.ui.postMessage({ type: "text-styles-data", tokens });
          } catch (error) {
            figma.ui.postMessage({ type: "error", error: String(error) });
          }
        }
        if (msg.type === "export-text-styles") {
          try {
            const tokens = yield buildTypographyTokens();
            figma.ui.postMessage({
              type: "download-json",
              json: JSON.stringify(tokens, null, 2),
              filename: "figma-typography.json"
            });
            figma.notify("Text styles exported");
          } catch (error) {
            figma.ui.postMessage({ type: "error", error: String(error) });
          }
        }
        if (msg.type === "import-text-styles") {
          try {
            const flat = flattenTypography(msg.tokens);
            const names = Object.keys(flat);
            if (names.length === 0) {
              figma.ui.postMessage({ type: "error", error: "No typography tokens found in JSON." });
              return;
            }
            const fontPairs = /* @__PURE__ */ new Set();
            for (const name of names) {
              const v = flat[name];
              if (v && v.fontFamily && v.fontWeight) {
                fontPairs.add(JSON.stringify({ family: String(v.fontFamily), style: String(v.fontWeight) }));
              }
            }
            const loadedFonts = /* @__PURE__ */ new Set();
            yield Promise.all(Array.from(fontPairs).map((key) => __async(exports, null, function* () {
              const fn = JSON.parse(key);
              try {
                yield figma.loadFontAsync(fn);
                loadedFonts.add(key);
              } catch (e) {
              }
            })));
            const existing = yield figma.getLocalTextStylesAsync();
            const byName = /* @__PURE__ */ new Map();
            existing.forEach((s) => byName.set(s.name, s));
            let created = 0;
            let updated = 0;
            let skipped = 0;
            const errors = [];
            for (const name of names) {
              const val = flat[name];
              try {
                const requiredFontKey = val.fontFamily && val.fontWeight ? JSON.stringify({ family: String(val.fontFamily), style: String(val.fontWeight) }) : null;
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
                if (isNew)
                  created++;
                else
                  updated++;
              } catch (e) {
                errors.push(`${name}: ${String(e)}`);
                skipped++;
              }
            }
            figma.notify(`Typography: ${created} created, ${updated} updated${skipped ? `, ${skipped} skipped` : ""}`);
            figma.ui.postMessage({
              type: "typography-import-complete",
              results: { created, updated, skipped, errors }
            });
          } catch (error) {
            figma.ui.postMessage({ type: "error", error: String(error) });
          }
        }
        if (msg.type === "replace-tokens") {
          try {
            const results = yield processTokens(msg.tokens);
            figma.ui.postMessage({
              type: "replace-complete",
              results
            });
          } catch (error) {
            figma.ui.postMessage({
              type: "error",
              error: String(error)
            });
          }
        }
        if (msg.type === "find-duplicate-tokens") {
          try {
            let resolveValue2 = function(v) {
              const modeId = Object.keys(v.valuesByMode)[0];
              if (!modeId)
                return null;
              let cur = v.valuesByMode[modeId];
              let safety = 0;
              while (cur && typeof cur === "object" && cur.type === "VARIABLE_ALIAS" && safety++ < 20) {
                const target = varMap.get(cur.id);
                if (!target)
                  break;
                cur = target.valuesByMode[Object.keys(target.valuesByMode)[0]];
              }
              return cur;
            }, valueKey2 = function(raw, type) {
              if (raw === null || raw === void 0)
                return "";
              if (type === "COLOR" && typeof raw === "object" && "r" in raw) {
                const r = Math.round(raw.r * 255), g = Math.round(raw.g * 255), b = Math.round(raw.b * 255);
                const a = raw.a !== void 0 ? Math.round(raw.a * 1e3) / 1e3 : 1;
                return `color:${r},${g},${b},${a}`;
              }
              return String(raw);
            }, displayValue2 = function(key, type) {
              if (key.startsWith("color:")) {
                const [r, g, b] = key.slice(6).split(",").map(Number);
                return "#" + [r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("");
              }
              return key;
            };
            var resolveValue = resolveValue2, valueKey = valueKey2, displayValue = displayValue2;
            const collections = yield figma.variables.getLocalVariableCollectionsAsync();
            const varMap = /* @__PURE__ */ new Map();
            const colNameMap = /* @__PURE__ */ new Map();
            for (const col of collections) {
              colNameMap.set(col.id, col.name);
              for (const varId of col.variableIds) {
                const v = yield figma.variables.getVariableByIdAsync(varId);
                if (v)
                  varMap.set(v.id, v);
              }
            }
            const byValue = /* @__PURE__ */ new Map();
            for (const [, v] of varMap) {
              const raw = resolveValue2(v);
              const key = valueKey2(raw, v.resolvedType);
              if (!key)
                continue;
              if (!byValue.has(key))
                byValue.set(key, []);
              byValue.get(key).push({
                id: v.id,
                name: v.name,
                collection: colNameMap.get(v.variableCollectionId) || "",
                type: v.resolvedType
              });
            }
            const groups = [];
            for (const [key, vars] of byValue) {
              if (vars.length >= 2) {
                groups.push({ value: displayValue2(key, vars[0].type), type: vars[0].type, variables: vars });
              }
            }
            groups.sort((a, b) => b.variables.length - a.variables.length);
            figma.ui.postMessage({ type: "duplicate-tokens-result", groups });
          } catch (error) {
            figma.ui.postMessage({ type: "error", error: String(error) });
          }
        }
        if (msg.type === "get-all-variables-for-diff") {
          try {
            const collections = yield figma.variables.getLocalVariableCollectionsAsync();
            const variables = [];
            for (const col of collections) {
              const modeId = col.modes[0].modeId;
              for (const varId of col.variableIds) {
                const v = yield figma.variables.getVariableByIdAsync(varId);
                if (!v)
                  continue;
                const raw = v.valuesByMode[modeId];
                let displayValue2;
                if (v.resolvedType === "COLOR" && typeof raw === "object" && raw && "r" in raw) {
                  const r = Math.round(raw.r * 255), g = Math.round(raw.g * 255), b = Math.round(raw.b * 255);
                  displayValue2 = "#" + [r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("");
                } else if (raw && typeof raw === "object" && raw.type === "VARIABLE_ALIAS") {
                  displayValue2 = `alias:${raw.id}`;
                } else {
                  displayValue2 = String(raw != null ? raw : "");
                }
                variables.push({ name: v.name, collection: col.name, type: v.resolvedType, value: displayValue2 });
              }
            }
            figma.ui.postMessage({ type: "all-variables-for-diff", variables });
          } catch (error) {
            figma.ui.postMessage({ type: "error", error: String(error) });
          }
        }
        if (msg.type === "cancel") {
          figma.closePlugin();
        }
        if (msg.type === "notify") {
          figma.notify(msg.message);
        }
        if (msg.type === "resize-plugin") {
          figma.ui.resize(msg.width, msg.height);
        }
        if (msg.type === "execute-command") {
          try {
            const result = yield handleCommand(msg.command, msg.params);
            figma.ui.postMessage({ type: "command-result", id: msg.id, result });
          } catch (error) {
            figma.ui.postMessage({ type: "command-error", id: msg.id, error: error.message || "Error executing command" });
          }
        }
      });
    }
  });
  require_code();
})();
