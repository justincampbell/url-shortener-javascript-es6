import assert from 'assert';
import shortener from '../shortener';

const url = "http://justincampbell.me";

describe('Shortener', function() {
  it('shortens and expands a url', function() {
    let token = shortener.shorten(url);
    assert(shortener.expand(token) === url);
  });

  it('generates unique tokens', function() {
    assert(shortener.shorten(url) !== shortener.shorten(url));
  });

  it('generates tokens as strings', function() {
    let token = shortener.shorten(url);
    assert(typeof(token) === 'string');
  });
});
