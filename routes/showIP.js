var express = require('express');
var showIP = express.Router();

//var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/db-huo');

//  '/'指/login的路径
showIP.all('/', function (req, res) {
    console.log('req===');
    //console.log(typeof req.connection.remoteAddress);
    console.log(req.connection.remoteAddress);
    //console.log(req.connection.remoteAddress.substr(7));
    var ipCollection = db.get('ipCollection'); //获得数据库中的集合(类似关系数据库中的表)
    var ip;
    ipCollection.find({}, {}, function (e, data) {
        console.log('data===');
        console.log(data);
        ip = data[0].ip;
        res.send('ip:' + ip);
    });
});

module.exports = showIP;
