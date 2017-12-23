const mysql = require('mysql')
const errorHandle = require('../Database/ErrorHandle.js')

console.log(__dirname);
// info database
const hostName = "localhost"
const userName = "root"
const password = ""
const databaseName = "LearnEnglish"


function Connection() {
  this.pool = null

  this.init = function() {
    this.pool = mysql.createPool({
      connectionLimit: 50,
      host: hostName,
      user: userName,
      password: password,
      database: databaseName
    })
  }

  this.acquire = function(res, callBack) {
    this.pool.getConnection(function(err, connection) {
      if (err) {
        console.log("jhgfkjlkljkljkljkljlk");
        errorHandle.sendErrorConnectDB(res, err)
      } else {
          callBack(connection)
      }
    })
  }
}


module.exports = new Connection()
