'use strict';
require([
    'jquery',
    'avalon'
], function ($, avalon) {
    var vm = avalon.define({
        $id: 'mainController',
        username:'',
        password:'',
        init: function () {
            console.log('chats.js init');
        },
        login: function () {
            var data = {
                username: vm.username,
                password: vm.password
            };
            $.ajax({
                url:'/login',
                data:data,
                //dataType:'json',
                success: function (data) {
                    console.log('data:'+data);
                }
            });
        }
    });
    avalon.scan(document.body);
    vm.init();
});