var express = require('express');
var shortener = require('./shortener');

var app = express();

app.get('/', function (req, res, next) {
  res.redirect('https://github.com/justincampbell/url-shorteners');
});

app.get('/shorten', function (req, res, next) {
  var url = req.query.url;

  if (!url) { return res.sendStatus(400); }

  var token = shortener.shorten(url);
  res.status(201).send('/' + token);
});


app.listen(process.env.PORT || 3000);

module.exports = { app: app };
