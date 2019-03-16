'user strict';

const mysql = require('mysql');

//local mysql db connection
const connection=mysql.createConnection({
    host:'localhost',
  
    database:'simple_react_sql_db'
});

connection.connect(function(err){
    (err)?console.log(err):console.log(connection);
});

module.exports = connection;