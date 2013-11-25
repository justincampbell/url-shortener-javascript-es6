var assert = require("assert");
var shortener = require("../shortener");

describe('Shortener', function(){
  describe('#foo', function(){
    it('returns 1', function(){
      assert.equal(1, shortener.foo());
    })
  })
})
