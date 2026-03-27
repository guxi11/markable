var assert = require('assert');
var markable = require('../src/markable.js');

describe('Heading Tests', function() {
  it('should translate fullwidth # to heading', function() {
    assert.equal(markable('\uff03 \u6807\u9898'), '# \u6807\u9898');
    assert.equal(markable('\uff03\uff03 \u6807\u9898'), '## \u6807\u9898');
    assert.equal(markable('\uff03\uff03\uff03 \u6807\u9898'), '### \u6807\u9898');
    assert.equal(markable('\uff03\uff03\uff03\uff03 \u6807\u9898'), '#### \u6807\u9898');
    assert.equal(markable('\uff03\uff03\uff03\uff03\uff03 \u6807\u9898'), '##### \u6807\u9898');
    assert.equal(markable('\uff03\uff03\uff03\uff03\uff03\uff03 \u6807\u9898'), '###### \u6807\u9898');
  });

  it('should translate mixed # and \uff03', function() {
    assert.equal(markable('#\uff03 \u6807\u9898'), '## \u6807\u9898');
    assert.equal(markable('\uff03# \u6807\u9898'), '## \u6807\u9898');
  });

  it('should keep ASCII # as is', function() {
    assert.equal(markable('# heading'), '# heading');
    assert.equal(markable('## heading'), '## heading');
  });

  it('should translate heading with inline content', function() {
    assert.equal(markable('\uff03 \uff0a\uff0a\u52a0\u7c97\uff0a\uff0a'), '# **\u52a0\u7c97**');
    assert.equal(markable('\uff03 \u00b7code\u00b7'), '# `code`');
  });
});

describe('Horizontal Rule Tests', function() {
  it('should translate fullwidth dashes', function() {
    assert.equal(markable('\uff0d\uff0d\uff0d\n'), '---\n');
    assert.equal(markable('\uff0d\uff0d\uff0d\uff0d\uff0d\n'), '-----\n');
  });

  it('should translate fullwidth asterisks', function() {
    assert.equal(markable('\uff0a\uff0a\uff0a\n'), '***\n');
  });

  it('should keep ASCII hr as is', function() {
    assert.equal(markable('---\n'), '---\n');
    assert.equal(markable('***\n'), '***\n');
    assert.equal(markable('___\n'), '___\n');
  });

  it('should translate mixed dashes', function() {
    assert.equal(markable('-\uff0d-\n'), '---\n');
  });
});

describe('Bold (Strong) Tests', function() {
  it('should translate fullwidth ** bold', function() {
    assert.equal(markable('\uff0a\uff0a\u52a0\u7c97\uff0a\uff0a'), '**\u52a0\u7c97**');
  });

  it('should keep ASCII ** bold', function() {
    assert.equal(markable('**bold**'), '**bold**');
  });

  it('should translate mixed markers', function() {
    assert.equal(markable('\uff0a*bold*\uff0a'), '**bold**');
  });

  it('should translate bold with nested content', function() {
    assert.equal(markable('\uff0a\uff0a\u00b7code\u00b7\uff0a\uff0a'), '**`code`**');
  });
});

describe('Italic (Emphasis) Tests', function() {
  it('should translate fullwidth * italic', function() {
    assert.equal(markable('\uff0a\u659c\u4f53\uff0a'), '*\u659c\u4f53*');
  });

  it('should keep ASCII * italic', function() {
    assert.equal(markable('*italic*'), '*italic*');
  });
});

describe('Strikethrough Tests', function() {
  it('should translate fullwidth ~~ strikethrough', function() {
    assert.equal(markable('\uff5e\uff5e\u5220\u9664\u7ebf\uff5e\uff5e'), '~~\u5220\u9664\u7ebf~~');
  });

  it('should keep ASCII ~~ strikethrough', function() {
    assert.equal(markable('~~deleted~~'), '~~deleted~~');
  });

  it('should translate mixed tildes', function() {
    assert.equal(markable('~\uff5e\u5220\u9664\uff5e~'), '~~\u5220\u9664~~');
  });
});

describe('Table Tests', function() {
  it('should translate fullwidth table', function() {
    var input = '\uff5c h1 \uff5c h2 \uff5c\n\uff5c\uff0d\uff0d\uff0d\uff5c\uff0d\uff0d\uff0d\uff5c\n\uff5c a \uff5c b \uff5c\n';
    var expected = '| h1 | h2 |\n|---|---|\n| a | b |\n';
    assert.equal(markable(input), expected);
  });

  it('should translate mixed pipes', function() {
    var input = '| h1 \uff5c h2 |\n|---\uff5c---|\n| a \uff5c b |\n';
    var expected = '| h1 | h2 |\n|---|---|\n| a | b |\n';
    assert.equal(markable(input), expected);
  });

  it('should translate table with alignment', function() {
    var input = '\uff5c left \uff5c center \uff5c right \uff5c\n\uff5c\uff1a\uff0d\uff0d\uff0d\uff5c\uff1a\uff0d\uff0d\uff0d\uff1a\uff5c\uff0d\uff0d\uff0d\uff1a\uff5c\n\uff5c a \uff5c b \uff5c c \uff5c\n';
    var expected = '| left | center | right |\n|:---|:---:|---:|\n| a | b | c |\n';
    assert.equal(markable(input), expected);
  });

  it('should keep ASCII table as is', function() {
    var input = '| h1 | h2 |\n|---|---|\n| a | b |\n';
    assert.equal(markable(input), input);
  });
});

describe('Code Fence Tests (extended)', function() {
  it('should translate \u00b7\u00b7\u00b7 with language', function() {
    assert.equal(markable('\u00b7\u00b7\u00b7python\nprint("hi")\n\u00b7\u00b7\u00b7'), '```python\nprint("hi")\n```');
  });

  it('should translate ~~~ fences', function() {
    assert.equal(markable('~~~js\ncode\n~~~'), '~~~js\ncode\n~~~');
  });

  it('should translate \uff5e\uff5e\uff5e fences', function() {
    assert.equal(markable('\uff5e\uff5e\uff5ejs\ncode\n\uff5e\uff5e\uff5e'), '~~~js\ncode\n~~~');
  });

  it('should not translate code inside fences', function() {
    assert.equal(markable('\u00b7\u00b7\u00b7\n\uff03 not a heading\n\u00b7\u00b7\u00b7'), '```\n\uff03 not a heading\n```');
  });
});

describe('Blockquote Tests (extended)', function() {
  it('should translate nested blockquotes', function() {
    assert.equal(markable('\u300b\u300b\u300b nested'), '>>> nested');
  });

  it('should translate blockquote with inline formatting', function() {
    assert.equal(markable('\u300b \uff0a\uff0abold\uff0a\uff0a'), '> **bold**');
    assert.equal(markable('\u300b \u00b7code\u00b7'), '> `code`');
  });
});

describe('Link Tests (extended)', function() {
  it('should translate link with fullwidth quotes in title', function() {
    assert.equal(
      markable('\u3010link\u3011\uff08http://a.com \u201ctitle\u201d\uff09'),
      '[link](http://a.com "title")'
    );
  });

  it('should translate link with single quotes in title', function() {
    assert.equal(
      markable("\u3010link\u3011\uff08http://a.com \u2018title\u2019\uff09"),
      "[link](http://a.com 'title')"
    );
  });

  it('should handle empty link text', function() {
    assert.equal(markable('\u3010text\u3011\uff08http://a.com\uff09'), '[text](http://a.com)');
  });

  it('should translate image with title', function() {
    assert.equal(
      markable('\uff01\u3010alt\u3011\uff08http://img.png \u201ctitle\u201d\uff09'),
      '![alt](http://img.png "title")'
    );
  });

  it('should translate reference link definition with fullwidth colon', function() {
    assert.equal(
      markable('\u30103\u3011\uff1a http://example.com'),
      '[3]: http://example.com'
    );
  });
});

describe('Inline Code Tests (extended)', function() {
  it('should handle multiple backticks', function() {
    assert.equal(markable('\u00b7\u00b7\u00b7code with \u00b7 inside\u00b7\u00b7\u00b7'), '```code with ` inside```');
  });

  it('should preserve content inside code', function() {
    assert.equal(markable('\u00b7\uff0a\uff0anot bold\uff0a\uff0a\u00b7'), '`\uff0a\uff0anot bold\uff0a\uff0a`');
  });
});

describe('List Tests', function() {
  it('should handle fullwidth list markers in blockquotes', function() {
    assert.equal(markable('- \u300b item'), '- > item');
    assert.equal(markable('* \u300b item'), '* > item');
    assert.equal(markable('+ \u300b item'), '+ > item');
  });

  it('should handle ordered list in blockquotes', function() {
    assert.equal(markable('1. \u300b item'), '1. > item');
    assert.equal(markable('99. \u300b item'), '99. > item');
  });
});

describe('Mixed/Complex Tests', function() {
  it('should translate heading with link', function() {
    assert.equal(
      markable('\uff03 \u3010click\u3011\uff08http://a.com\uff09'),
      '# [click](http://a.com)'
    );
  });

  it('should translate blockquote with bold and code', function() {
    assert.equal(
      markable('\u300b \uff0a\uff0abold\uff0a\uff0a and \u00b7code\u00b7'),
      '> **bold** and `code`'
    );
  });

  it('should translate multiple lines', function() {
    var input = '\uff03 Title\n\nparagraph\n\n\u300b quote\n';
    var expected = '# Title\n\nparagraph\n\n> quote\n';
    assert.equal(markable(input), expected);
  });

  it('should handle bold inside link', function() {
    assert.equal(
      markable('\u3010\uff0a\uff0abold\uff0a\uff0a\u3011\uff08http://a.com\uff09'),
      '[**bold**](http://a.com)'
    );
  });

  it('should handle strikethrough in text', function() {
    assert.equal(
      markable('before \uff5e\uff5edeleted\uff5e\uff5e after'),
      'before ~~deleted~~ after'
    );
  });
});

describe('Edge Cases', function() {
  it('should handle empty string', function() {
    assert.equal(markable(''), '');
  });

  it('should handle plain text without symbols', function() {
    assert.equal(markable('plain text'), 'plain text');
    assert.equal(markable('\u4e2d\u6587\u6587\u672c'), '\u4e2d\u6587\u6587\u672c');
  });

  it('should handle whitespace only', function() {
    assert.equal(markable('   '), '   ');
  });

  it('should normalize line endings', function() {
    assert.equal(markable('\uff03 hi\r\n'), '# hi\n');
    assert.equal(markable('\uff03 hi\r'), '# hi\n');
  });

  it('should handle consecutive newlines', function() {
    assert.equal(markable('\n\n\n'), '\n\n\n');
  });

  it('should not translate symbols in normal text context', function() {
    assert.equal(markable('\u300a\u7a0b\u5e8f\u5458\u7684\u81ea\u6211\u4fee\u517b\u300b'), '\u300a\u7a0b\u5e8f\u5458\u7684\u81ea\u6211\u4fee\u517b\u300b');
    assert.equal(markable('\u3010\u7a0b\u5e8f\u5458\u7684\u81ea\u6211\u4fee\u517b\u3011\u3001\uff08\u666e\u901a\u8bf4\u660e\uff09'), '\u3010\u7a0b\u5e8f\u5458\u7684\u81ea\u6211\u4fee\u517b\u3011\u3001\uff08\u666e\u901a\u8bf4\u660e\uff09');
  });

  it('should handle tabs in input', function() {
    assert.equal(markable('\t\uff03 heading'), '    \uff03 heading');
  });
});
