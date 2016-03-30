var express = require('express');
var router = express.Router();

var userObj={
    huo:{
        name:'huo',
        website : 'www.baidu.com'
    }
};

/* GET home page. */
//routes/index.js是路由文件，相当于控制器，用于组织展示的内容：
//功能是调用模板解析引擎，翻译名为index的模板，并传入一个对象作为参数，这个对象只有一个属性，即title: 'Express'。
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
    res.send('11111');
});

//app.get是路由规则创建函数，它接受两个参数，第一个参数是请求的路径，第二个参数是一个回调函数，该路由规则被触发时调用回调函数，其参数表传递两个参数，分别是req和res，表示请求信息和响应信息。
router.get('/hello', function (req, res, next) {
    res.send('The time is ' + new Date().toString());
});

//Express支持同一路径绑定多个路由响应函数，但当你访问任何被这两条同样的规则匹配到的路径时，会发现请求总是被前一条路由规则捕获，后面的规则会被忽略。原因是Express在处理路由规则时，会优先匹配先定义的路由规则，因此后面相同的规则被屏蔽。
//路径规则/user/:username会被自动编译为正则表达式，类似于\/user\/([^\/]+)\/?这样的形式

//router.get('/user/:username', function (req, res) {
//    res.send('user:' + req.params.username);
//});
//router.get('/user/:username', function (req, res) {
//    //res.send('user:' + req.params.username);
//    res.send('6666666666666');
//});


//Express提供了路由控制权转移的方法，即回调函数的第三个参数next，通过调用next()，会将路由控制权转移给后面的规则.这说明请求先被第一条路由规则捕获，使用next()转移控制权，又被第二条规则捕获，向浏览器返回了信息。这是一个非常有用的工具，可以让我们轻易地实现中间件，而且还能提高代码的复用程度。例如我们针对一个用户查询信息和修改信息的操作，分别对应了GET和PUT操作，而两者共有的一个步骤是检查用户名是否合法，因此可以通过next()方法实现：

    //all:所有方法
    router.all('/user/:username', function (req,res,next) {
        if(userObj[req.params.username]){
            next();
        }else{
            next(new Error(req.params.username + 'does no exist.'));
        }
    });

    router.get('/user/:username', function (req,res) {
        //用户一定存在,直接展示
        res.send(JSON.stringify(userObj[req.params.username]));
    });
    //put: 请求服务器存储一个资源
    router.put('/user/:username', function () {
        res.send('Done');
    });


//req.body就是POST请求信息解析过后的对象，例如我们要访问用户传递的password域的值，只需访问req.body['password']即可。
//req.flash是Express提供的一个奇妙的工具，通过它保存的变量只会在用户当前和下一次的请求中被访问，之后会被清除，通过它我们可以很方便地实现页面的通知和错误信息显示功能。
//res.redirect是重定向功能，通过它会向用户返回一个303See Other状态，通知浏览器转向相应页面。
//crypto是Node.js的一个核心模块，功能是加密并生成各种散列，使用它之前首先要声明var crypto=require('crypto')。我们代码中使用它计算了密码的散列值。

module.exports = router;
