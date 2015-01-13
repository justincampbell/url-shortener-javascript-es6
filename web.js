var express = require('express');
var shortener = require('./shortener');

var app = express();
var port = process.env.PORT || 3000;

app.get('/', function (req, res, next) {
  res.redirect('https://github.com/justincampbell/url-shorteners');
});

app.get('/shorten', function (req, res, next) {
  var url = req.query.url;

  if (!url) { return res.sendStatus(400); }

  var token = shortener.shorten(url);
  res.status(201).send('/' + token);
});

app.get('/:token', function (req, res, next) {
  var token = req.params.token;
  var url = shortener.expand(token);

  if (!url) { return res.sendStatus(404); }

  res.redirect(url);
});

app.listen(port);
console.log('Listening on ' + port);

module.exports = { app: app };
