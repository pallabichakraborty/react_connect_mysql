const mysql = require('mysql');
var sql = require('../db.js');

module.exports= function(app){
    app.get('/',function(req,res) {
        sql.query('SELECT * FROM users', function(err,data){
            (err)? res.send(err):res.json({users:data});
        })
    })
}