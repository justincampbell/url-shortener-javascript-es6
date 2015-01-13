function *tokenGenerator() {
  let id = 0;
  while (true) {
    id += 1;
    yield id.toString();
  };
}

export default {
  tokenGenerator: tokenGenerator(),
  urls: new Map(),

  shorten(url) {
    let { value: token } = this.tokenGenerator.next();
    this.urls.set(token, url);
    return token;
  },

  expand(token) {
    return this.urls.get(token);
  }
};
