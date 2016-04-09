'use strict';
require([
    'jquery',
    'avalon'
], function ($, avalon) {
    var vm = avalon.define({
        $id: 'mainController',
        init: function () {
            console.log('chats.js init');
            console.log(vm.test3()());
        },
        goPages: function () {
            window.location = '/profile';
        },
        test: function (temp1, temp2) {
            var arr1 = [1, 2];
            var arr2 = arr1;
            arr1[1] = 3;
            console.log('arr1===');
            console.log(arr1);
            console.log('arr2===');
            console.log(arr2);
            console.log(arguments);
        },
        test1: function () {
            var result = [];
            for (var i = 0; i < 10; i++) {
                result[i] = function (num) {
                    return function () {
                        return num
                    }
                }(i);
            }
            console.log(result);
        },
        test3: function () {
            console.log(this);
            return function () {
                console.log(this);
                return this;
            };
        }
    });

    avalon.scan(document.body);
    vm.init();
});