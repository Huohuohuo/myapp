var express = require('express');
var updateIP = express.Router();

//var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/db-huo');

function getNowDateAndTime() {
    var tempDate = new Date(),
        tempHours = tempDate.getHours();
    tempDate.setHours(tempHours + 8);//加上+8时区
    var nowDate = tempDate.toJSON().split('T')[0],
        tempTime = tempDate.toJSON().split('T')[1],
        nowTime = tempTime.split('.')[0];
    return nowDate + ' ' + nowTime;
}

//  '/'指/login的路径
updateIP.all('/', function (req, res) {
    console.log('req===');
    //console.log(typeof req.connection.remoteAddress);
    console.log(req.connection.remoteAddress);
    //console.log(req.connection.remoteAddress.substr(7));
    var ip = req.connection.remoteAddress;
    var ipCollection = db.get('ipCollection'); //获得数据库中的集合(类似关系数据库中的表)
    var _id;

    var updateDate = getNowDateAndTime();

    ipCollection.find({}, {}, function (e, data) {
        console.log('data===');
        console.log(data);
        _id = data[0]._id;
        ipCollection.update({"_id": _id}, {
            "$set": {
                "ip": ip,
                "date": updateDate
            }
        });
        console.log('update IP successfully!');
        res.send('update IP successfully at ' + updateDate + '!');
    });
});

module.exports = updateIP;
