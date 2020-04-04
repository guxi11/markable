# Markable

[![npm](https://badgen.net/npm/v/markable)](https://www.npmjs.com/package/markable)
[![gzip size](https://badgen.net/badgesize/gzip/https://cdn.jsdelivr.net/npm/markable@0.0.3/src/markable.min.js)](https://cdn.jsdelivr.net/npm/markable@0.0.3/src/markable.min.js)
[![install size](https://badgen.net/packagephobia/install/markable)](https://packagephobia.now.sh/result?p=markable)
[![downloads](https://badgen.net/npm/dt/markable)](https://www.npmjs.com/package/markable)

- make non-English Markdown plain text markable
- works in a browser or on a server

## Features

Markable can translate non-English symbols related to  [Markdown syntax](https://daringfireball.net/projects/markdown/syntax) into English, so when you write in a language other than English, you do not need to switch input methods.

## Demo

Checkout the [demo](http://lengyue.ink/markable-markdown-editor/) to see markable in action.

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
  <script src="https://cdn.jsdelivr.net/npm/markable@0.0.3/src/markable.min.js"></script>
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

Feel free to dive in! Please follow this [guide](https://github.com/hbhde/markable/blob/dev/CONTRIBUTING.md).

## License

Copyright 2020 Guxi11 and contributors. Licensed [MIT](https://github.com/hbhde/markable/blob/master/LICENSE).
