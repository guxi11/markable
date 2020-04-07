# Markable

[![npm](https://badgen.net/npm/v/markable)](https://www.npmjs.com/package/markable)
[![gzip size](https://badgen.net/badgesize/gzip/https://cdn.jsdelivr.net/npm/markable@0.0.3/src/markable.min.js)](https://cdn.jsdelivr.net/npm/markable@0.0.3/src/markable.min.js)
[![install size](https://badgen.net/packagephobia/install/markable)](https://packagephobia.now.sh/result?p=markable)
[![downloads](https://badgen.net/npm/dt/markable)](https://www.npmjs.com/package/markable)

Markable可以将与[ Markdown 语法](https://www.jianshu.com/p/b03a8d7b1719)相关的非英文符号翻译成英文，因此当您使用英文以外的其他语言书写时，若想使用 Markdown 语法，无需切换输入法。

用其他语言阅读：[English](https://github.com/hbhde/markable/blob/master/README.md) | 简体中文

## 演示

查看[演示](http://lengyue.ink/markable-markdown-editor/)以查看实际效果。

## 安装

### npm

```
npm install -s markable
```

## 使用

### Node

```js
var markable = require('markable');
console.log(markable('》 青山一道同云雨，明月何曾是两乡。')); // > 青山一道同云雨，明月何曾是两乡。
```

### 浏览器

你可以将 markable 与 [marked](https://github.com/markedjs/marked) 一起使用。

```html
<!doctype html>
<html>
<head>
  <meta charset="utf-8"/>
  <title>Marked Markable in the browser</title>
</head>
<body>
  <div id="content"></div>
  <script src="https://cdn.jsdelivr.net/npm/markable@0.0.5/markable.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
  <script>
    var text = '》 青山一道同云雨，明月何曾是两乡。\n\n···js\n Hello World\n···';
    document.getElementById('content').innerHTML =
      marked(markable(text));
  </script>
</body>
</html>
```

## 许可证

[MIT](https://github.com/hbhde/markable/blob/master/LICENSE)

