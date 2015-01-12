module.exports = {
  id: 0,
  urls: {},

  shorten: function(url) {
    token = this.generateToken();
    this.urls[token] = url;
    return token;
  },

  expand: function(token) {
    return this.urls[token];
  },

  generateToken: function() {
    this.id += 1;
    return this.id;
  }
}
