module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2020: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:promise/recommended",
    "plugin:prettier/recommended"
  ],
  globals: { dateFns: "readonly" },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 2020,
    project: "tsconfig.json",
    sourceType: "module"
  },
  plugins: ["only-warn", "sort-imports-requires", "spellcheck"],
  rules: {
    "@typescript-eslint/no-floating-promises": "warn",
    "@typescript-eslint/no-misused-promises": "warn",
    "prettier/prettier": [
      "warn",
      {
        arrowParens: "avoid",
        endOfLine: "lf",
        quoteProps: "preserve",
        trailingComma: "none"
      }
    ],
    "sort-imports-requires/sort-imports": ["warn", { unsafeAutofix: true }],
    "sort-imports-requires/sort-requires": ["warn", { unsafeAutofix: true }],
    "spellcheck/spell-checker": [
      "warn",
      {
        "comments": true,
        "strings": true,
        "identifiers": true,
        "templates": true,
        "lang": "en_US",
        "skipWords": [
          "autofix",
          "aviv",
          "commonjs",
          "ecma",
          "eee",
          "favicons",
          "globals",
          "jsx",
          "keyof",
          "lang",
          "parens",
          "readonly",
          "rerender",
          "subdomain",
          "tsconfig",
          "typeof"
        ],
        "minLength": 3
      }
    ]
  }
};
