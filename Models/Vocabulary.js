const connection = require('../Database/ConnectDatabase.js')
const errorHandle = require('../Database/ErrorHandle.js')

const querygetAllVocabulary = 'select * from Vocabulary'
const querygetVocabularyOfUnit = 'select * from Vocabulary where idUnit = ?'

module.exports = new Vocabulary()

function Vocabulary() {
  //---
  this.getAll = getAllVocabulary
  this.edit = editVocabulary
  this.getOfUnit = getVocabularyOfUnit
  //---
}

function getAllVocabulary(res) {
  connection.acquire(res, function(con) {
    con.query(querygetAllVocabulary, function (err, result) {
      con.release()
      if (err) {
        errorHandle.sendError(res, err)
      } else {
        errorHandle.sendResult(res, "Success !", result)
      }
    })
  })
}

function editVocabulary() {

}

//---
function getVocabularyOfUnit (res, id) {
  connection.acquire(res, function(con) {
    con.query(querygetVocabularyOfUnit, id, function(err, result){
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