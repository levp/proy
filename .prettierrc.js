/**
 * @see https://prettier.io/docs/configuration
 * @type {import('prettier').Config}
 */
export default {
  semi: false,
  singleQuote: false,
  plugins: ["@ianvs/prettier-plugin-sort-imports"],
  // Configuration for the sort import plugin.
  // See: https://github.com/IanVS/prettier-plugin-sort-imports/tree/v4.7.0?tab=readme-ov-file#options
  importOrder: ["^node:", "^[a-z]", "^\\./", "^\\.\\./"],
}



