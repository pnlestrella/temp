module.exports = function (api) {
  api.cache(true);
  let plugins = ["nativewind/babel"];

  return {
    presets: [['babel-preset-expo', { jsxImportSource: 'nativewind' }], 'nativewind/babel'],

  };
};
