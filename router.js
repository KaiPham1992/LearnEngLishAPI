var routerWordBook = require('./Routers/wordbookrouter.js')

module.exports = {
  configure: function(app) {
    routerWordBook.configure(app)
  }
}
