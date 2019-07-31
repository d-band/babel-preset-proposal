const proposals = [
  'decorators',
  'class-properties',
  'do-expressions',
  'export-default-from',
  'export-namespace-from',
  'function-bind',
  'function-sent',
  'logical-assignment-operators',
  'nullish-coalescing-operator',
  'numeric-separator',
  'optional-chaining',
  'partial-application',
  'pipeline-operator',
  'private-methods',
  'throw-expressions'
];
const defaultOptions = {
  'decorators': { legacy: true },
  'class-properties': { loose: true },
  'pipeline-operator': { proposal: 'minimal' }
};

module.exports = (api, options) => {
  options = options || {};
  const plugins = [require('@babel/plugin-syntax-import-meta')];
  proposals.forEach((key) => {
    const name = `@babel/plugin-proposal-${key}`;
    const value = options[key] || options[name];
    if (value === false || value === null) return;
    const plugin = require.resolve(name);
    const option = defaultOptions[key];
    if (value === true) {
      if (option) {
        plugins.push([plugin, option]);
      } else {
        plugins.push(plugin);
      }
    } else {
      plugins.push([plugin, Object.assign(value, option)]);
    }
  });
  return { plugins: plugins };
};
