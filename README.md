# rich-text-editor

[![npm version][npmv-image]][npmv-url]
[![build status][build-image]][build-url]
[![coverage status][codecov-image]][codecov-url]
[![npm downloads][npmd-image]][npmd-url]

> An opinionated configurable Slate implementation for React

## Basic Usage

```jsx
import React from 'react'
import {render} from 'react-dom'
import RichTextEditor from "@drkstr101/rich-text-editor";

render(RichTextEditor, document.getElementById('root'))
```

## Live Examples

- [Playground](https://sb-editor.vercel.app/)

## API

**Props**

- `defaultValue` - Something something.

**Example**

```jsx
import RichTextEditor from "./rich-text-editor";

() => <RichTextEditor />
```

## Installation

```
$ npm install @drkstr101/rich-text-editor --save
```

There are also UMD builds available via [unpkg](https://unpkg.com/):

- https://unpkg.com/drkstr101/rich-text-editor/dist/rich-text-editor.umd.development.js
- https://unpkg.com/drkstr101/rich-text-editor/dist/rich-text-editor.umd.production.js

For the non-minified development version, make sure you have already included:

- [`React`](https://unpkg.com/react/umd/react.development.js)
- [`ReactDOM`](https://unpkg.com/react-dom/umd/react-dom.development.js)
- [`PropTypes`](https://unpkg.com/prop-types/prop-types.js)

For the minified production version, make sure you have already included:

- [`React`](https://unpkg.com/react/umd/react.production.min.js)
- [`ReactDOM`](https://unpkg.com/react-dom/umd/react-dom.production.min.js)

## License

MIT

[build-image]: https://img.shields.io/github/workflow/status/drkstr101/rich-text-editor/CI?style=flat-square
[build-url]: https://github.com/drkstr101/rich-text-editor/actions?query=workflow%3ACI
[codecov-image]: https://img.shields.io/codecov/c/github/drkstr101/rich-text-editor.svg?style=flat-square
[codecov-url]: https://codecov.io/gh/drkstr101/rich-text-editor
[npmv-image]: https://img.shields.io/npm/v/rich-text-editor.svg?style=flat-square
[npmv-url]: https://www.npmjs.com/package/rich-text-editor
[npmd-image]: https://img.shields.io/npm/dm/rich-text-editor.svg?style=flat-square
[npmd-url]: https://www.npmjs.com/package/rich-text-editor
