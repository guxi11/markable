# Markable

[![npm](https://badgen.net/npm/v/markable)](https://www.npmjs.com/package/markable)
[![gzip size](https://badgen.net/badgesize/gzip/https://cdn.jsdelivr.net/npm/markable@0.0.3/src/markable.min.js)](https://cdn.jsdelivr.net/npm/markable@0.0.3/src/markable.min.js)
[![install size](https://badgen.net/packagephobia/install/markable)](https://packagephobia.now.sh/result?p=markable)
[![downloads](https://badgen.net/npm/dt/markable)](https://www.npmjs.com/package/markable)

- make non-English Markdown plain text markable
- works in a browser or on a server

## Features

You can write markdown text in non-English languages without switching input methods, Markable will make it markable by translating the relevant characters in [Markdown syntax](https://daringfireball.net/projects/markdown/syntax) into English.

Take Chinese as an example:

**BLOCKQUOTES**

```
》 青山一道同云雨，明月何曾是两乡。
```

will turn into:

```
> 青山一道同云雨，明月何曾是两乡。
```

**CODE BLOCKS**

```
···js
console.log(Hello World');
···
```

will turn into:

```
​```js
console.log(Hello World');
​```
```

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
