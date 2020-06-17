const mysql = require('mysql');

var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
  });
  
  
  db.connect(function(err) {
    if (err) throw err;  
    console.log("Connected!");  
    db.query("CREATE DATABASE explo_project", function (err, result) {  
    if (err) throw err;  
    console.log("Database created");
  });  
  });

//   con.connect(function(err) {  
// if (err) throw err;  
// console.log("Connected!");  
// con.query("CREATE DATABASE javatpoint", function (err, result) {  
// if (err) throw err;  
// console.log("Database created");  
// });  
// });  

 module.exports = db