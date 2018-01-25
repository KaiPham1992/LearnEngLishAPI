const connection = require('../Database/ConnectDatabase.js')
const errorHandle = require('../Database/ErrorHandle.js')
const globalVariable = require('../Database/GlobalVariable.js')

const querygetAllVocabulary = 'select * from Vocabulary'
const querygetVocabularyOfUnit = 'select * from Vocabulary where idUnit = ?'

module.exports = new Vocabulary()
const baseUrl = globalVariable.baseUrl

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
          for (i = 0; i < result.length; i ++) {
            result[i].thumbUrl = baseUrl + "/learnenglish/images/vocabulary/"+result[i].english+".jpg"
            result[i].voice = baseUrl + "/learnenglish/voices/vocabulary/"+result[i].english+".mp3"
          }
          errorHandle.sendResult(res, "Success !", result)
        } else {
          errorHandle.sendResult(res, "Success !", null)
        }
      }
    })
  })
}
