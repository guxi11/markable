var assert = require('assert');

var markable = require('../src/markable.js');

describe('Translate Block Tests', function() {
  describe('BLOCKQUOTES Tests', function() {
    it('should translate blockquotes', function(done) {
      assert.equal(markable('》 青山'), '> 青山');
      assert.equal(markable('》 ·青山·'), '> `青山`');
      assert.equal(markable('\n》 青山'), '\n> 青山');
      assert.equal(markable('》〉青山'), '>>青山');
      done();
    });

    it('should ignore normal uses', function(done) {
      assert.equal(markable('《青山》'), '《青山》');
      done();
    });
  });

  describe('LISTQUOTES Tests', function() {
    it('should translate listquotes', function(done) {
      assert.equal(markable('- 》 青山'), '- > 青山');
      assert.equal(markable('  - 》 青山'), '  - > 青山');
      assert.equal(markable('* 》〉青山'), '* >>青山');
      assert.equal(markable('12. 》〉青山'), '12. >>青山');
      done();
    });
  });

  describe('CODE BLOCKS Tests', function() {
    it('should turn "···" into "```"', function(done) {
      assert.equal(markable('···js\n Hello World\n···'), '```js\n Hello World\n```');
      assert.equal(markable('···js\n Hello World\n···\n···'), '```js\n Hello World\n```\n···');
      done();
    });
  });
});

describe('Translate Inline Tests', function() {
  describe('Link Tests', function() {
    it('should translate link and image', function(done) {
      assert.equal(markable('！【label】（http）'), '![label](http)');
      assert.equal(markable('【label】（http）'), '[label](http)');
      assert.equal(markable('！【标题】（http://example.net/1.png “图片Title”）'), '![标题](http://example.net/1.png "图片Title")');
      assert.equal(markable('！【标题】（http://example.net/1.png "图片Title"）'), '![标题](http://example.net/1.png "图片Title")');
      done();
    });

    it('should translate nested title', function(done) {
      assert.equal(markable('【!【label】（http）】（http）'), '[![label](http)](http)');
      assert.equal(markable('！【【label】（http）】（http://example.net/1.png "图片Title"）'), '![[label](http)](http://example.net/1.png "图片Title")');
      done();
    });

    it('should translate reference link', function(done) {
      assert.equal(markable('【程序员的自我修养】【3】值得一读'), '[程序员的自我修养][3]值得一读');
      assert.equal(markable('【程序员的自我修养】 【3】值得一读'), '【程序员的自我修养】 【3】值得一读');
      done();
    });

    it('should translate link definition', function(done) {
      assert.equal(markable('【3】：https://github.com/hbhde/markable “Markable”'), '[3]:https://github.com/hbhde/markable "Markable"');
      assert.equal(markable('【3】： https://github.com/hbhde/markable “Markable”'), '[3]: https://github.com/hbhde/markable "Markable"');
      done();
    });

    it('should ignore normal uses', function(done) {
      assert.equal(markable('【程序员的自我修养】、（普通说明）'), '【程序员的自我修养】、（普通说明）');
      done();
    });
  });

  describe('Code Tests', function() {
    it('should turn "·code·" into "`code`"', function(done) {
      assert.equal(markable('·code·'), '`code`');
      assert.equal(markable('··code··'), '``code``');
      assert.equal(markable('》》·code·'), '>>`code`');
      done();
    });
  });
});
