const connection = require('../Database/ConnectDatabase.js')
const errorHandle = require('../Database/ErrorHandle.js')

const queryGetAllUnit= 'select * from Unit'
const queryGetOneUnit= 'select * from Unit where idWordBook = ?'

module.exports = new Unit()

function Unit() {
  //---
  this.getAll = getAllUnit
  this.getOne = getOneUnit
  //---
}

function getAllUnit(res) {
  connection.acquire(res, function(con) {
    con.query(queryGetAllUnit, function (err, result) {
      con.release()
      if (err) {
        errorHandle.sendError(res, err)
      } else {
        errorHandle.sendResult(res, "Success !", result)
      }
    })
  })
}

//---
function getOneUnit(res, id) {
  connection.acquire(res, function(con) {
    con.query(queryGetOneUnit, id, function(err, result){
      con.release()
      if (err) {
        errorHandle.sendError(res, err)
      } else {
        if (result.length > 0 ) {
          errorHandle.sendResult(res, "Success !", result)
        } else {
          errorHandle.sendResult(res, "Success !", null)
        }
      }
    })
  })
}
