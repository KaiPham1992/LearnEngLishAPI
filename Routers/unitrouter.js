var unit = require('../Models/Unit.js')

const urlUnit = "/api/v1/unit"
const urlUnitOfWordbook = "/api/v1/unitOfWordBook"

module.exports = {
  configure: function(app) {
    unitRouter(app)
  }
}


function unitRouter(app) {
  app.get(urlUnit, function(req, res) {
    unit.getAll(res)
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

  app.get(urlUnitOfWordbook + '/:id', function(req, res) {
    unit.getOne(res, req.params.id)
  })
}
