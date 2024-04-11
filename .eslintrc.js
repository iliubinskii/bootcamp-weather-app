module.exports = {
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 2017,
    sourceType: "module"
  },
  env: {
    browser: true,
    commonjs: true,
    es2017: true,
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
