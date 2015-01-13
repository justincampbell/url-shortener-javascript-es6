import express from 'express';
import shortener from './shortener';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', function (req, res, next) {
  res.redirect('https://github.com/justincampbell/url-shorteners');
});

app.get('/shorten', function (req, res, next) {
  let { url } = req.query;

  if (!url) { return res.sendStatus(400); }

  let token = shortener.shorten(url);
  res.status(201).send('/' + token);
});

app.get('/:token', function (req, res, next) {
  let { token } = req.params;
  let url = shortener.expand(token);

  if (!url) { return res.sendStatus(404); }

  res.redirect(url);
});

app.listen(port);
console.log('Listening on ' + port);

export { app };
