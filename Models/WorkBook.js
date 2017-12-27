const connection = require('../Database/ConnectDatabase.js')
const errorHandle = require('../Database/ErrorHandle.js')

const queryGetAllWorkBook = 'select * from WorkBook'
const queryPostWorkBook = 'insert into WorkBook set ?'
const queryDeleteWorkBook = 'delete from WorkBook where idWordBook = ?'
const queryPutWorkBook = 'Update WorkBook set ? where idWordBook = ?'
const queryGetOneWorkBook = 'select * from WorkBook where idWordBook = ?'

module.exports = new WorkBook()

function WorkBook() {
  //---
  this.getAll = getAllWb
  this.post = postWb
  this.delete = deleteWb
  this.put = putWb
  this.getOne = getOneWb
  //---
}

//---
function getAllWb(res) {
  connection.acquire(res, function(con) {
    con.query(queryGetAllWorkBook, function (err, result) {
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
function postWb(res, fieldData) {
  connection.acquire(res, function(con) {
    con.query(queryPostWorkBook,fieldData, function(err, result){
      con.release()
      if (err) {
        errorHandle.sendError(res, err)
      } else {
        errorHandle.sendResult(res, "Post word book success !", fieldData)
      }
    })
  })
}

function putWb(res, fieldData) {
  connection.acquire(res, function(con) {
    con.query(queryPutWorkBook,[fieldData, fieldData.idWordBook], function(err, result){
      con.release()
      if (err) {
        errorHandle.sendError(res, err)
      } else {
        errorHandle.sendResult(res, "Update word book success !", fieldData)
      }
    })
  })
}


//---
function deleteWb(res, id) {
  connection.acquire(res, function(con) {
    con.query(queryDeleteWorkBook, id, function(err, result){
      con.release()
      if (err) {
        errorHandle.sendError(res, err)
      } else {
        errorHandle.sendResult(res, "Delete success !", null)
      }
    })
  })
}

//---
function getOneWb(res, id) {
  connection.acquire(res, function(con) {
    con.query(queryGetOneWorkBook, id, function(err, result){
      con.release()
      if (err) {
        errorHandle.sendError(res, err)
      } else {
        if (result.length > 0 ) {
          errorHandle.sendResult(res, "Success !", result[0])
        } else {
          errorHandle.sendResult(res, "Success !", null)
        }
      }
    })
  })
}
