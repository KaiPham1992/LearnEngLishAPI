const express = require('express')
const bodyParser = require('body-parser')

//--
const connection = require('./Database/ConnectDatabase.js')
const router = require('./router.js')

var port = process.env.PORT || 3000

var app = express()
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

connection.init()
router.configure(app)

var server = app.listen(port, function(){
  console.log("Server is running with port " + server.address().port);
})
