var routerWordBook = require('./Routers/wordbookrouter.js')
var routerUnit = require('./Routers/unitrouter.js')
var routerVocabulary = require('./Routers/vocabularyrouter.js')

module.exports = {
  configure: function(app) {
    routerWordBook.configure(app)
    routerUnit.configure(app)
    routerVocabulary.configure(app)
  }
}
