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

  // src/code.ts
  var require_code = __commonJS({
    "src/code.ts"(exports) {
      init_create_data();
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
          figma.ui.postMessage({
            type: "selection-check-result",
            nodes: results,
            empty: false,
            themeName: currentThemeName,
            totalScanned: counter.count
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
      });
    }
  });
  require_code();
})();
