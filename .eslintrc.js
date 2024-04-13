module.exports = {
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 2020,
    sourceType: "module"
  },
  env: {
    browser: true,
    commonjs: true,
    es2020: true,
    node: true
  },
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  plugins: ["sort-imports-requires", "spellcheck"],
  rules: {
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
          "jsx",
          "keyof",
          "lang",
          "lf",
          "parens",
          "typeof"
        ],
        "minLength": 2
      }
    ]
  }
};
