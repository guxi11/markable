# Markable

[![npm](https://badgen.net/npm/v/markable)](https://www.npmjs.com/package/markable)
[![gzip size](https://badgen.net/badgesize/gzip/https://cdn.jsdelivr.net/npm/markable@0.1.0/markable.min.js)](https://cdn.jsdelivr.net/npm/markable@0.1.0/markable.min.js)
[![install size](https://badgen.net/packagephobia/install/markable)](https://packagephobia.now.sh/result?p=markable)
[![downloads](https://badgen.net/npm/dt/markable)](https://www.npmjs.com/package/markable)

Markable 能让你用任何语言编写 Markdown 文档。Markable 将非英语的 [Markdown 语法](https://daringfireball.net/projects/markdown/syntax) 相关符号翻译成英文，以便任何 Markdown 解析器都可以解析它们。

用其他语言阅读：[English](https://github.com/guxi11/markable/blob/master/README.md) | 简体中文

## 演示

查看[演示](http://guxi11.com/markable-markdown-editor/)以查看实际效果。

## 安装

```
npm install markable
```

## 支持的符号

| Markdown 语法 | 中文输入 | 输出 |
|---|---|---|
| 标题 | `＃ 标题` | `# 标题` |
| 加粗 | `＊＊加粗＊＊` | `**加粗**` |
| 斜体 | `＊斜体＊` | `*斜体*` |
| 删除线 | `～～删除线～～` | `~~删除线~~` |
| 引用 | `》 引用` | `> 引用` |
| 行内代码 | `·code·` | `` `code` `` |
| 代码块 | `···js` | ` ```js ` |
| 链接 | `【标题】（url）` | `[标题](url)` |
| 图片 | `！【alt】（url）` | `![alt](url)` |
| 表格 | `｜head｜` | `\|head\|` |
| 分隔线 | `－－－` | `---` |

## 使用

### Node

```js
var markable = require('markable');
console.log(markable('＃ 青山一道同云雨'));  // # 青山一道同云雨
console.log(markable('＊＊加粗＊＊'));       // **加粗**
console.log(markable('》 引用'));            // > 引用
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

## 贡献

不论大小，总是欢迎贡献。贡献之前，请先阅读[贡献](https://github.com/guxi11/markable/blob/master/CONTRIBUTING.md)。

## 许可证

[MIT](https://github.com/guxi11/markable/blob/master/LICENSE)
