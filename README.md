# Markable

[![npm](https://badgen.net/npm/v/markable)](https://www.npmjs.com/package/markable)
[![install size](https://badgen.net/packagephobia/install/markable)](https://packagephobia.now.sh/result?p=markable)

- make non-English Markdown plain text markable
- works in a browser or on a server

## Features

Take Chinese as an example:

### BLOCKQUOTES

```
》 青山一道同云雨，明月何曾是两乡。
```

will turn into:

```
> 青山一道同云雨，明月何曾是两乡。
```

### CODE BLOCKS

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

