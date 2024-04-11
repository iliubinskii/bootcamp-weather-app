module.exports = {
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 2019,
    sourceType: "module"
  },
  env: {
    browser: true,
    commonjs: true,
    es2019: true,
    node: true
  },
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  rules: {
    "prettier/prettier": [
      "warn",
      {
        arrowParens: "avoid",
        endOfLine: "lf",
        quoteProps: "preserve",
        trailingComma: "none"
      }
    ]
  }
};
