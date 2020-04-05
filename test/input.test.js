var assert = require('assert');

var markable = require('../src/markable.js');

describe('Input Tests', function() {
  describe('Not String Tests', function() {
    it('should throw error: input is undefined or null', function(done) {
      assert.throws(() => markable(), Error, 'input parameter is undefined');
      assert.throws(() => markable(null), Error, 'input parameter is null');
      done();
    });

    it('should throw error: string expected', function(done) {
      assert.throws(() => markable(12), Error, 'input parameter is of type [object Number]');
      assert.throws(() => markable(true), Error, 'input parameter is of type [object Boolean]');
      assert.throws(() => markable({}), Error, 'input parameter is of type [object Object]');
      assert.throws(() => markable([]), Error, 'input parameter is of type [object Array]');
      done();
    });
  });
});