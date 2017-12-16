
function ErrorHandle() {
  this.sendError = function(response, error) {
    response.send({status: {code: 400, status: false, message: error.sqlMessage }, data: null})
  }

  this.sendResult = function(response, message, result) {
    response.send({status: {code: 200, status: true, message: message }, data: result})
  }
}
module.exports = new ErrorHandle()
