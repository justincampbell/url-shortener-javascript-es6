module.exports = {
  urls: {},

  shorten: function(url) {
    token = "123";
    this.urls[token] = url;
    return token;
  },

  expand: function(token) {
    return this.urls[token];
  }
}
