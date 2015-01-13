var express = require('express');

var app = express();

app.get('/', function (req, res) {
  res.redirect('https://github.com/justincampbell/url-shorteners');
});

app.listen(process.env.PORT || 3000);

module.exports = { app: app };
