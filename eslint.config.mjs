import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import globals from "globals";
import js from "@eslint/js";

export default [
  { languageOptions: { globals: globals.browser } },
  js.configs.recommended,
  eslintPluginPrettierRecommended,
  {
    rules: {
      "prettier/prettier": [
        "error",
        {
          arrowParens: "avoid",
          endOfLine: "lf",
          quoteProps: "preserve",
          trailingComma: "none"
        }
      ]
    }
  }
];
