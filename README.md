Babel [proposals](https://babeljs.io/docs/en/plugins-list#tc39-proposals) plugins
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
  "class-static-block": true,
  "decorators": { "legacy": true },
  "class-properties": { "loose": true },
  "do-expressions": true,
  "export-default-from": true,
  "export-namespace-from": true,
  "function-bind": true,
  "function-sent": true,
  "partial-application": true,
  "pipeline-operator": { "proposal": "minimal" },
  "private-methods": { "loose": true },
  "private-property-in-object": { "loose": true },
  "record-and-tuple": { "syntaxType": "hash" },
  "throw-expressions": true
}
```
