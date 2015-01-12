var assert = require("assert");
var shortener = require("../shortener");

var url = "http://justincampbell.me";

describe('Shortener', function() {
  it('shortens and expands a url', function() {
    var token = shortener.shorten(url);
    assert(shortener.expand(token) === url);
  });

  it('generates unique tokens', function() {
    assert(shortener.shorten(url) !== shortener.shorten(url));
  });

  it('generates tokens as strings', function() {
    var token = shortener.shorten(url);
    assert(typeof(token) === 'string');
  });
});
