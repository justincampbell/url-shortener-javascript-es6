var assert = require('assert');
var request = require('supertest');

var app = require('../web').app;

describe('GET /', function(){
  it('redirects to the home page', function(done){
    request(app)
      .get('/')
      .expect('Location', 'https://github.com/justincampbell/url-shorteners')
      .expect(302, done);
  })
});
