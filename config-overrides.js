const { addBabelPlugin, override } = require('customize-cra');

const rootImportConfig = [
  'root-import',
  {
    rootPathPrefix: '~',
    rootPathSuffix: 'src',
  },
];

module.exports = override(addBabelPlugin(rootImportConfig));
