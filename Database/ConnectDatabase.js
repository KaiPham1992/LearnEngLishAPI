const mysql = require('mysql')
const errorHandle = require('../Database/ErrorHandle.js')

// info database
const hostName = "localhost"
const userName = "root"
const password = ""
const databaseName = "LearnEnglish"


// const hostName = "us-cdbr-iron-east-05.cleardb.net"
// const userName = "bad0c15058c54d"
// const password = "3b263140"
// const databaseName = "heroku_4fd0694d05ea27d"


function Connection() {
  this.pool = null

  this.init = function() {
    this.pool = mysql.createPool({
      connectionLimit: 50,
      host: hostName,
      user: userName,
      password: password,
      database: databaseName,
      charset: "utf8"
    })
  }

  this.acquire = function(res, callBack) {
    this.pool.getConnection(function(err, connection) {
      if (err) {
        errorHandle.sendErrorConnectDB(res, err)
      } else {
          callBack(connection)
      }
    })
  }

//-- use import data
  this.import = function(callBack) {
    this.pool.getConnection(function(err, connection) {
      if (err) {
        console.log("Import data fail line 38 Connect database dot js");
      } else {
          callBack(connection)
      }
    })
  }
}


module.exports = new Connection()
