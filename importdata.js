const connection = require('./Database/ConnectDatabase.js')
const sqlite3 = require('sqlite3').verbose();

const queryInsertUnit = 'insert into Unit set ?'
const queryInsertVocabulary = 'insert into Vocabulary set ?'

let db = new sqlite3.Database('./Database/bookData.sqlite', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the database.');
});

connection.init()

// importDataUnit(db)
importDataVocabulary(db)

// cac ham import

function importDataUnit(db) {
  // import unit
  let sqlUnit = "select * from Unit where idWordBook = 'Wb1'"
  db.all(sqlUnit, [], (err, rows) => {
    if (err) {
      throw err;
    }
    deleteUnit()
    rows.forEach((row) => {
      let param = {"idUnit": row.idUnit, "idWordBook": row.idWordBook, nameUnit: row.nameUnit}
        insertUnit(param)
        // sleep.sleep(0.5)
    });
  });
}


function importDataVocabulary(db) {
  let sqlVocabulary = "select * from Vocabulary"

  db.all(sqlVocabulary, [], (err, rows) => {
    if (err) {
      throw err;
    }
   deleteVocabulary()
    rows.forEach((row) => {
      let param = {"stt": row.stt,
      "english": row.english,
      "vnRaw": row.vnRaw,
      "example": row.example,
      "vietnamese": row.vietnamese,
      "idUnit": row.idUnit,
      "thumbUrl": row.thumbUrl,
      "voice": row.voice,
      "translate": row.translate
    }
    
      insertVocabulary(param)
    });
  });
}


// UNIT HELPER

function deleteUnit() {
  connection.import(function(con){
    con.query("delete from Unit", function(err, result){
      con.release()
      if (err) {
        console.log("error delete Unit " + err);
      } else {
        console.log(" delete Unit success");
      }
    })
  })
}

function insertUnit(fieldData) {
  connection.import(function(con) {
    con.query(queryInsertUnit,fieldData, function(err, result){
      con.release()
      if (err) {
        console.log("error import Unit " + err);
      } else {
        console.log(" import Unit success" + fieldData.idUnit);
      }
    })
  })
}

// VOCABULARY HELPER

function deleteVocabulary() {
  connection.import(function(con){
    con.query("delete from Vocabulary", function(err, result){
      con.release()
      if (err) {
        console.log("error delete Vocabulary " + err);
      } else {
        console.log(" delete Vocabulary success");
      }
    })
  })
}

function insertVocabulary(fieldData) {
  connection.import(function(con) {
    con.query(queryInsertVocabulary,fieldData, function(err, result){
      con.release()
      if (err) {
        console.log("error import Vocabulary " + err);
      } else {
        console.log(" import Vocabulary success" + fieldData.stt);
      }
    })
  })
}



// close the database connection
db.close();
