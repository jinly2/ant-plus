module.exports = {
  singleQuote: true,

  plugins: ['@trivago/prettier-plugin-sort-imports'],
  importOrder: [
    '^react',
    '^rollup',
    '^@rollup',
    '^vite',
    '^@vite',
    '^antd',
    '<THIRD_PARTY_MODULES>',
    '^[./]',
  ],
  importOrderSortSpecifiers: true,
  importOrderGroupNamespaceSpecifiers: true,
  importOrderCaseInsensitive: true,
};
