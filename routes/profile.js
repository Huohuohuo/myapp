var express = require('express');
var profile = express.Router();

//  '/'指/login的路径
profile.all('/', function (req, res) {
    res.render('profile');
});

// '/haha'指/login/haha 的路径
//profile.all('/haha', function (req, res) {
//    res.send('hahahah');
//});

module.exports = profile;
