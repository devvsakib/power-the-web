/*
This is a workaround to make the 2 prettier plugins compatible with each other.
Found solution at https://github.com/tailwindlabs/prettier-plugin-tailwindcss/issues/31#issuecomment-1195411734
When the issue is solved upstream, the prettier settings can (but doesn't have to) be moved back to .prettierrc
See https://prettier.io/docs/en/configuration.html for prettier configuration options
*/

const pluginSortImports = require('@trivago/prettier-plugin-sort-imports')
const pluginTailwindcss = require('prettier-plugin-tailwindcss')

/** @type {import("prettier").Parser}  */
const myParser = {
  ...pluginSortImports.parsers.typescript,
  parse: pluginTailwindcss.parsers.typescript.parse,
}

/** @type {import("prettier").Plugin}  */
const myPlugin = {
  parsers: {
    typescript: myParser,
  },
}

module.exports = {
  plugins: [myPlugin],
  endOfLine: 'auto',
  singleQuote: true,
  semi: false,
  importOrder: [
    '^(.*).css',
    '<THIRD_PARTY_MODULES>',
    '^@/components/(.*)$',
    '^@/constants/(.*)$',
    '^@/context/(.*)$',
    '^@/lib/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
}
