var workBook = require('../Models/WorkBook.js')

const urlWorkBook = "/api/v1/wordbook"

module.exports = {
  configure: function(app) {
    wordBookRouter(app)
  }
}

function wordBookRouter(app) {
  app.get(urlWorkBook, function(req, res) {
    workBook.getAll(res)
  })

  app.post(urlWorkBook, function(req, res) {
    workBook.post(res, req.body)
  })

  app.delete(urlWorkBook + '/:id', function(req, res) {
    workBook.delete(res, req.params.id)
  })

  app.put(urlWorkBook + '/:id', function(req, res) {
    workBook.put(res, req.body)
  })

  app.get(urlWorkBook + '/:id', function(req, res) {
    workBook.getOne(res, req.params.id)
  })
}
