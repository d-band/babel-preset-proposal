const proposals = [
  'class-static-block',
  'decorators',
  'class-properties',
  'do-expressions',
  'export-default-from',
  'export-namespace-from',
  'function-bind',
  'function-sent',
  'partial-application',
  'pipeline-operator',
  'private-methods',
  'private-property-in-object',
  'record-and-tuple',
  'throw-expressions'
];
const defaultOptions = {
  'decorators': { legacy: true },
  'class-properties': { loose: true },
  'private-property-in-object': { loose: true },
  'pipeline-operator': { proposal: 'minimal' },
  'private-methods': { loose: true }
};

module.exports = (api, options) => {
  options = options || {};
  const plugins = [require('@babel/plugin-syntax-top-level-await')];
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
      plugins.push([plugin, Object.assign({}, option, value)]);
    }
  });
  return { plugins: plugins };
};
