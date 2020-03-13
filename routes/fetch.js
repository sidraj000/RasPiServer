var express = require("express");
var router = express.Router();
const mysql = require('mysql');
var db = require('../connect');

//insert data
router.post('/insertdata', (req, res) => {
    var data  = req.query.Value;
   
  var value=[[data]];
      db.query("INSERT INTO data (Value)  VALUES ?", [value], (err, result) => {
         if(err) {
             console.log(err);
             res.status(500).send({ error: 'Error in inserting data into table' })
         }
        console.log("done");
        res.send(result);
      });
   });
 
   //showdata
 router.get('/data', (request, response) => {
   db.query("SELECT * FROM data", (error, result) => {
        if (error) throw error;
 
        response.send(result);
    });
   });

   module.exports = router;