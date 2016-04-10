var express = require('express');
var login = express.Router();
var mysql = require('mysql');
var url = require('url');
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'huo',
    port: 3306
});


login.all('/', function (req, res) {
    //res.render('login',{'title':'login'});
    var temp = url.parse(req.url, true).query;
    var username = temp.username;
    var password = temp.password;
    var sql = 'SELECT * from user where username="' + username + '";';
    console.log(temp);
    console.log(username);
    console.log(password);
    console.log(sql);
    conn.connect();


    conn.query(sql, function (err, rows, fields) {
        if (err) throw err;
        if(rows.length){
            console.log('True!!!');

        }
    });

    conn.end();
});

module.exports = login;





