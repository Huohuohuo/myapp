var express = require('express');
var chats = express.Router();

chats.all('/', function (req, res) {
    res.render('chats',{'title':'chats'});
});

module.exports = chats;
