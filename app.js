var express = require('express');//前面已经通过npm安装到了本地，在这里可以直接通过require获取。
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');//bodyParser的功能是解析客户端请求，通常是通过POST发送的内容。

//var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost:27017/db-huo');
//var db = mongoose.connection;
//db.on('error', console.error.bind(console, 'connection error:'));
//db.once('open', function () {
//    console.log('connected to mongodb!');
//});
var routes = require('./routes/index');//routes是一个文件夹形式的本地模块，即./routes/index.js，它的功能是为指定路径组织返回内容，相当于MVC架构中的控制器。
var profile = require('./routes/profile');//个人信息页

var app = express();//通过express()函数创建了一个应用的实例，后面的所有操作都是针对于这个实例进行的。

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
//app.set是Express的参数设置工具,接受一个键（key）和一个值（value）,可用的参数如下所示。
//basepath：基础地址，通常用于res.redirect()跳转。
//views：视图文件的目录，存放模板文件。
//view engine：视图模板引擎。
//view options：全局视图参数对象。
//view cache：启用视图缓存。
//case sensitive routes：路径区分大小写。
//strict routing：严格路径，启用后不会忽略路径末尾的“/”。
//jsonp callback：开启透明的JSONP支持。

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//Express依赖于connect，提供了大量的中间件，可以通过app.use启用
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));//static提供了静态文件支持,配置了静态文件服务器
app.use(express.static(path.join(__dirname, 'node_modules')));

app.use('/', routes);//用户如果访问“/”路径，则由routes/index来控制。
app.use('/profile', profile);//用户如果访问“/login”路径，则由routes/login 来控制。

// catch 404 and forward to error handler  错误控制器
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});
console.log('server started!');
module.exports = app;
