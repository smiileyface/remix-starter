/** @type {import('prettier').Config} */
module.exports = {
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
  importOrder: [
    "^(react|@remix-run?/?([a-zA-Z/]*))$",
    "<THIRD_PARTY_MODULES>",
    "^~/(.*)$",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: [
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
};
