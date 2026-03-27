## 0.1.0(2026-03-27)

### Features

- Heading: ``＃ 标题`` → ``# 标题`` (supports ＃ to ######)
- Bold: ``＊＊加粗＊＊`` → ``**加粗**``
- Italic: ``＊斜体＊`` → ``*斜体*``
- Strikethrough: ``～～删除线～～`` → ``~~删除线~~``
- Horizontal Rule: ``－－－`` → ``---``, ``＊＊＊`` → ``***``
- Table: ``｜head｜`` → ``|head|`` with fullwidth ``－``, ``：`` support
- Code Fence (tilde): ``～～～js`` → ``~~~js``
- Single quotes: ``'title'`` → ``'title'``

### Improvements

- Added fullwidth symbol mappings: ＃, ＊, ～, ｜, －, ＋
- Fixed Unicode curly quote (""/'') handling in link titles
- Inline text rule now correctly stops at fullwidth ＊ and ～

### Tests

- Added 48 comprehensive test cases covering all new and existing features

## 0.0.7(2020-04-13)

- translate nested text

## 0.0.6(2020-04-08)

- fix InlineTranslator superimposed error

## 0.0.5(2020-04-08)

- add symbols
- add InlineTranslator
- build with rollup and uglify-js

## 0.0.4(2020-04-06)

- add Translator, fix some translation issues

## 0.0.3(2020-04-02)

### Features

- Expose to Regular Browser
- use jsDelivr

### Docs

- Add usage example in broswer

## 0.0.2(2020-04-02)

### Features

- Expose to Regular Browser
- use jsDelivr

### Docs

- Add usage example in broswer

This version is unavalible. In fact, I forgot to update docs, to fix this, I unpublished version 0.0.2, just thought I could roll back, and now I realized what have I done.

## 0.0.1(2020-04-02)

### Docs

Add badge

## 0.0.0(2020-04-02)

### Release Information

Make non-English Markdown plain text markable

### Features

- ``》 青山一道同云雨，明月何曾是两乡。`` → ``> 青山一道同云雨，明月何曾是两乡。``
- ``···js\n code \n···  `` → `` ```js\n code \n```  `` 
