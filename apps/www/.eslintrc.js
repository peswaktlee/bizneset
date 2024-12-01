/** @type {import("eslint").Linter.Config} */

module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
  ignorePatterns: [
    ".eslintrc.js",
    "node_modules",
    "next.config.js",
    "next-env.d.ts",
    ".next",
  ],
  rules: {
    "react-hooks/exhaustive-deps": "off",
    "@next/next/no-img-element": "off",
    indent: ["error", 4],
    "linebreak-style": "off",
    quotes: ["error", "single"],
    semi: ["error", "never"],
    "comma-dangle": ["error", "never"],
    "jsx-quotes": ["error", "prefer-single"],
  }
}