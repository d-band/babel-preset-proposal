Babel [experimental](https://babeljs.io/docs/en/plugins#experimental) plugins
=====

## Install

```bash
$ npm install --save-dev babel-preset-proposal
```

## Usage

```json
{
  "presets": ["proposal"]
}
```

or with options:

```json
{
  "presets": [
    ["proposal", {
      "decorators": { "legacy": false },
      "class-properties": { "loose": false },
      "pipeline-operator": { "proposal": "smart" }
    }]
  ]
}
```

## Options

```json
{
  "decorators": { "legacy": true },
  "class-properties": { "loose": true },
  "do-expressions": true,
  "export-default-from": true,
  "export-namespace-from": true,
  "function-bind": true,
  "function-sent": true,
  "logical-assignment-operators": true,
  "nullish-coalescing-operator": true,
  "numeric-separator": true,
  "optional-chaining": true,
  "partial-application": true,
  "pipeline-operator": { "proposal": "minimal" },
  "private-methods": true,
  "throw-expressions": true
}
```
