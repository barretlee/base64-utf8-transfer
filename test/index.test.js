var assert = require('assert');
var base64_utf8 = require('../lib/index');

describe('base64_utf8', () => {
  it('encode', () => {
    var encodeString = base64_utf8.encode('小胡子哥');
    assert(encodeString === '5bCP6IOh5a2Q5ZOl', 'encode error'); 
  });
  it('decode', () => {
    var decodeString = base64_utf8.decode('5bCP6IOh5a2Q5ZOl');
    assert(decodeString === '小胡子哥', 'decode error');
  });
});
