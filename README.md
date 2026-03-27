# Markable

[![npm](https://badgen.net/npm/v/markable)](https://www.npmjs.com/package/markable)
[![gzip size](https://badgen.net/badgesize/gzip/https://cdn.jsdelivr.net/npm/markable@0.1.0/markable.min.js)](https://cdn.jsdelivr.net/npm/markable@0.1.0/markable.min.js)
[![install size](https://badgen.net/packagephobia/install/markable)](https://packagephobia.now.sh/result?p=markable)
[![downloads](https://badgen.net/npm/dt/markable)](https://www.npmjs.com/package/markable)

Markable allows you to write markdown documents in any language. Markable translates your non-English [Markdown syntax](https://daringfireball.net/projects/markdown/syntax) related symbols into English, so that they can be parsed by any markdown parser.

Read this in other languages: English | [简体中文](https://github.com/guxi11/markable/blob/master/README_ZH-CN.md)

## Demo

Checkout the [demo](http://guxi11.com/markable-markdown-editor/) to see markable in action.

## Installation

```
npm install markable
```

## Supported Symbols

| Markdown Syntax | Chinese Input | Output |
|---|---|---|
| Heading | `＃ 标题` | `# 标题` |
| Bold | `＊＊加粗＊＊` | `**加粗**` |
| Italic | `＊斜体＊` | `*斜体*` |
| Strikethrough | `～～删除线～～` | `~~删除线~~` |
| Blockquote | `》 引用` | `> 引用` |
| Inline Code | `·code·` | `` `code` `` |
| Code Block | `···js` | ` ```js ` |
| Link | `【标题】（url）` | `[标题](url)` |
| Image | `！【alt】（url）` | `![alt](url)` |
| Table | `｜head｜` | `\|head\|` |
| Horizontal Rule | `－－－` | `---` |

## Usage

### Node

```js
var markable = require('markable');
console.log(markable('＃ 青山一道同云雨'));  // # 青山一道同云雨
console.log(markable('＊＊加粗＊＊'));       // **加粗**
console.log(markable('》 引用'));            // > 引用
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
  <script src="https://cdn.jsdelivr.net/npm/markable@0.1.0/markable.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
  <script>
    var text = '＃ Hello\n\n》 青山一道同云雨\n\n···js\n Hello World\n···';
    document.getElementById('content').innerHTML =
      marked(markable(text));
  </script>
</body>
</html>
```

## Contributing

Contributions are always welcome, no matter how large or small. Before contributing, please read the [Contributing](https://github.com/guxi11/markable/blob/master/CONTRIBUTING.md).

## License

[MIT](https://github.com/guxi11/markable/blob/master/LICENSE)
