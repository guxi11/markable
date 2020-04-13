# Roadmap to version 0.1.0

## Features

- [x] BLOCKQUOTES

  - [x] ``》 青山一道同云雨，明月何曾是两乡。`` → ``> 青山一道同云雨，明月何曾是两乡。``
  - [x] ``》〉 青山一道同云雨，明月何曾是两乡。`` → ``>> 青山一道同云雨，明月何曾是两乡。``
  - [x] ``- 》 青山一道同云雨，明月何曾是两乡。 `` → ``- > 青山一道同云雨，明月何曾是两乡。 `` 
  - [x] Ignore normal uses (e.g. ``《程序员的自我修养》`` )

- [x] CODE BLOCKS

  - [x] ``···js\n code \n···  `` → `` ```js\n code \n```  `` 

- [x] CODE

  - [x] ``··code··  `` → ``` ``code`` ```
  - [x] ``·code·  `` → ``` `code` ```

- [x] LINKS

  - [x] ``【标题】（http://example.net/）`` → ``[标题](http://example.net/)``
  - [x] ``【标题】【文献1】`` 、``【文献1】： http://example.com/ ``  → ``[标题][文献1]`` 、``[文献1]: http://example.com/``
  - [x] ``【!【标题】（http://example.net/1.png）】（http://example.net）`` → ``[![标题](http://example.net/1.png)](http://example.net)``
  - [x] Ignore normal uses (e.g. ``【程序员的自我修养】``、``（普通说明）`` )

- [x] IMAGES

  - [x] ``!【标题】（http://example.net/1.png）`` → ``[标题](http://example.net/1.png)``
  - [x] ``!【标题】（http://example.net/1.png “图片Title”）`` → ``![标题](http://example.net/1.png "图片Title")``


## Docs

- [ ] add document
- [x] add features in TASKS.TODO

## Test

- [x] add translate tests
- [x] add intput tests
- [x] add expose tests

