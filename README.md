# Markable

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
console.log(markable('》 Hello World')); // > Hello World
```

