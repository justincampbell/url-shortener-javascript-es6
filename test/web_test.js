var assert = require('assert');
var request = require('supertest');

var app = require('../web').app;
var url = 'http://justincampbell.me';

describe('GET /', function() {
  it('redirects to the home page', function(done) {
    request(app)
      .get('/')
      .expect('Location', 'https://github.com/justincampbell/url-shorteners')
      .expect(302, done);
  });
});

describe('GET /shorten', function() {
  it('returns a token path when given a url', function(done) {
    request(app)
      .get('/shorten?url=' + url)
      .expect(/\/\d+/)
      .expect(201, done);
  });

  it('returns bad request when the url is missing', function(done) {
    request(app)
      .get('/shorten')
      .expect(400, done);
  });

  it('returns bad request when the url is blank', function(done) {
    request(app)
      .get('/shorten?url=')
      .expect(400, done);
  });
});
