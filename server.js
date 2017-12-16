const express = require('express')
const bodyParser = require('body-parser')

//--
const connection = require('./Database/ConnectDatabase.js')
const router = require('./router.js')

var app = express()
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

connection.init()
router.configure(app)

var server = app.listen(3000, function(){
  console.log("Server is running with port " + server.address().port);
})
