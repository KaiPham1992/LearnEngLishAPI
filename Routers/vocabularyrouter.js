var vocabulary = require('../Models/Vocabulary.js')

const urlvocabulary = "/api/v1/vocabulary"
const urlvocabularyofunit = "/api/v1/vocabularyofunit"

module.exports = {
  configure: function(app) {
    vocabularyRouter(app)
  }
}


function vocabularyRouter(app) {
  app.get(urlvocabulary, function(req, res) {
    vocabulary.getAll(res)
  })
  //
  // app.post(urlunit, function(req, res) {
  //   unit.post(res, req.body)
  // })
  //
  // app.delete(urlunit + '/:id', function(req, res) {
  //   unit.delete(res, req.params.id)
  // })
  //
  // app.put(urlunit + '/:id', function(req, res) {
  //   unit.put(res, req.body)
  // })

  app.get(urlvocabularyofunit + '/:id', function(req, res) {
    vocabulary.getOfUnit(res, req.params.id)
  })
}
