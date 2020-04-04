var assert = require('assert');

var markable = require('../src/markable.js');

describe('Markable Tests', function() {
  describe('BLOCKQUOTES Tests', function() {
      it('should turn "》 " into "> "', function(done) {
          assert.equal(markable('》 青山'), '> 青山');
          done();
      });
  });

  describe('CODE BLOCKS Tests', function() {
      it('should turn "···" into "```"', function(done) {
          assert.equal(markable('···js\n Hello World\n···'), '```js\n Hello World\n```');
          done();
      });
  });
});