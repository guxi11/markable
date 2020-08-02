# Markable

[![npm](https://badgen.net/npm/v/markable)](https://www.npmjs.com/package/markable)
[![gzip size](https://badgen.net/badgesize/gzip/https://cdn.jsdelivr.net/npm/markable@0.0.3/src/markable.min.js)](https://cdn.jsdelivr.net/npm/markable@0.0.3/src/markable.min.js)
[![install size](https://badgen.net/packagephobia/install/markable)](https://packagephobia.now.sh/result?p=markable)
[![downloads](https://badgen.net/npm/dt/markable)](https://www.npmjs.com/package/markable)

Markalbe allows you to write markdown document in any language. Markable translate your  non-English [Markdown syntax](https://daringfireball.net/projects/markdown/syntax) related symbols into English, so that they can be parse by any markdown parser.

Read this in other languages: English | [简体中文](https://github.com/hbhde/markable/blob/master/README_ZH-CN.md)

## Demo

Checkout the [demo](http://guxi11.com/markable-markdown-editor/) to see markable in action.

## Installation

### npm

```
npm install -s markable
```

## Usage

### Node

```js
var markable = require('markable');
console.log(markable('》 青山一道同云雨，明月何曾是两乡。')); // > 青山一道同云雨，明月何曾是两乡。
```

### Browser

You can use markable with [marked](https://github.com/markedjs/marked)

```html
<!doctype html>
<html>
<head>
  <meta charset="utf-8"/>
  <title>Marked Markable in the browser</title>
</head>
<body>
  <div id="content"></div>
  <script src="https://cdn.jsdelivr.net/npm/markable@0.0.7/markable.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
  <script>
    var text = '》 青山一道同云雨，明月何曾是两乡。\n\n···js\n Hello World\n···';
    document.getElementById('content').innerHTML =
      marked(markable(text));
  </script>
</body>
</html>
```

## Contributing 

Contributions are always welcome, no matter how large or small. Before contributing, please read the [Contributing](https://github.com/hbhde/markable/blob/master/CONTRIBUTING.md).

## License

[MIT](https://github.com/hbhde/markable/blob/master/LICENSE)

