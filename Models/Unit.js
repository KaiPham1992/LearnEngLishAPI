const connection = require('../Database/ConnectDatabase.js')
const errorHandle = require('../Database/ErrorHandle.js')
const globalVariable = require('../Database/GlobalVariable.js')

const queryGetAllUnit= 'select * from Unit'
const queryGetOneUnit= 'select * from Unit where idWordBook = ?'

module.exports = new Unit()
const baseUrl = globalVariable.baseUrl

function Unit() {
  //---
  this.getAll = getAllUnit
  this.getOne = getOneUnit
  //---
}

function getAllUnit(res) {
  console.log("skakajkljsakljalkjlsk");
  connection.acquire(res, function(con) {
    con.query(queryGetAllUnit, function (err, result) {
      con.release()
      if (err) {
        errorHandle.sendError(res, err)
      } else {
        for (i = 0; i < result.length; i ++) {
         result[i].score = "20"
          result[i].urlUnit = baseUrl + "/learnenglish/images/unit"+result[i].idUnit+".jpg"
        }
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
          for (i = 0; i < result.length; i ++) {
            result[i].score = 40
            result[i].urlUnit = baseUrl + "/learnenglish/images/unit/"+result[i].idUnit+".jpg"
          }
          errorHandle.sendResult(res, "Success !", result)
        } else {
          errorHandle.sendResult(res, "Success !", null)
        }
      }
    })
  })
}
