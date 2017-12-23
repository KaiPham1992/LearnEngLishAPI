
function ErrorHandle() {
  this.sendError = function(response, error) {
    res.statusCode = 400
    response.send({status: {code: 400, status: false, message: error.sqlMessage }, data: null})
  }

  this.sendResult = function(response, message, result) {
    response.send({status: {code: 200, status: true, message: message }, data: result})
  }

  this.sendErrorConnectDB = function(response, error) {
    response.send({status: {code: 401, status: false, message: 'Error connect database'}, data: null})
  }
}
module.exports = new ErrorHandle()
