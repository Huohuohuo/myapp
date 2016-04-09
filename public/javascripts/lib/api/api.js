// 接口列表
(function (window, undefined) {
    //var host = 'http://127.0.0.1/';//For local dev
    var host = 'https://expresscar.by-health.com/';//营养学院 健康快车 生产环境

    var apiPrefix = 'healthExpressAPI/';

    var api = {
        downLoadImgUrl: host + 'fileUpload/',//下载图片
        downReport: host + 'excel/',//下载报告
        redirectURL: host + 'login/login.html',//重定向回登录页面

        projectAdd: host + apiPrefix + 'project/add',//添加体检项目
        projectDelete: host + apiPrefix + 'project/delete',//删除体检项目
        projectSearch: host + apiPrefix + 'project/search',//查询体检项目
        projectEdit: host + apiPrefix + 'project/edit',//编辑体检项目
        projectUpload: host + apiPrefix + 'project/upload/111/test',//上传项目图片

        questionnaireAdd: host + apiPrefix + 'questionnaire/add',//添加问卷
        questionnaireDelete: host + apiPrefix + 'questionnaire/delete',//删除问卷
        questionnaireSearch: host + apiPrefix + 'questionnaire/search',//查询问卷
        questionnaireEdit: host + apiPrefix + 'questionnaire/edit',//编辑问卷
        questionnaireDetails: host + apiPrefix + 'questionnaire/details',//问卷预览详情

        physicalAdd: host + apiPrefix + 'physical/add',//添加体检题目
        physicalDelete: host + apiPrefix + 'physical/delete',//删除体检题目
        physicalSearch: host + apiPrefix + 'physical/search',//查询体检题目
        physicalEdit: host + apiPrefix + 'physical/edit',//编辑体检题目
        physicalDetails: host + apiPrefix + 'physical/details',//体检问卷预览详情

        questionAdd: host + apiPrefix + 'question/add',//添加活动题目
        questionDelete: host + apiPrefix + 'question/delete',//删除活动题目
        questionSearch: host + apiPrefix + 'question/search',//查询活动题目
        questionEdit: host + apiPrefix + 'question/edit',//编辑活动题目

        userCheck: host + apiPrefix + 'user/check',//检测用户是否存在
        userSearch: host + apiPrefix + 'user/search',//查询用户
        userGetAnswerReport: host + apiPrefix + 'user/getanswerreport',//获取用户报告
        userGetProperty: host + apiPrefix + 'user/getproperty',//获取自定义属性
        userAddProperty: host + apiPrefix + 'user/addproperty',//添加自定义属性
        userDelProperty: host + apiPrefix + 'user/delproperty',//删除自定义属性
        userSaveProperty: host + apiPrefix + 'user/saveproperty',//保存自定义属性
        userEdit: host + apiPrefix + 'user/edit',//编辑用户
        userAddReport: host + apiPrefix + 'user/addreport',//生成排队号
        userDeleteReport: host + apiPrefix + 'user/deletereport',//删除排队号
        userAdd: host + apiPrefix + 'user/add',//添加用户
        userReportList: host + apiPrefix + 'user/reportlist',//查询待体检列表
        userAddAnswer: host + apiPrefix + 'user/addanswer',//添加问卷答案
        userEditReport: host + apiPrefix + 'user/editreport',//添加体检问卷答案
        userGetPerPhysical: host + apiPrefix + 'user/getPerPhysical',//已检查过的项目
        userExportExcel: host + apiPrefix + 'user/exportexcel',//数据导出

        adminSearch: host + apiPrefix + 'admin/search',//查询账号
        adminRegister: host + apiPrefix + 'admin/register',//注册账号
        adminLogin: host + apiPrefix + 'admin/login',//管理员登录
        adminForbid: host + apiPrefix + 'admin/forbid',//禁用管理员
        adminEdit: host + apiPrefix + 'admin/edit',//编辑管理员
        adminLoginOut: host + apiPrefix + 'admin/loginout',//管理员登出
        adminModifyAccount: host + apiPrefix + 'admin/modifyAccount',//修改自己昵称和密码的接口
        adminGetCar: host + apiPrefix + 'car/admingetcar',// 超级管理员获取快车信息

        getOperator: host + apiPrefix + 'car/getoperator', // 查询操作员列表
        addoperator: host + apiPrefix + 'car/addoperator', // 保存我的快车

        carSearch: host + apiPrefix + 'car/search',//查询快车
        carAdd: host + apiPrefix + 'car/add',//添加快车
        carForbid: host + apiPrefix + 'car/forbid',//禁用快车
        carEdit: host + apiPrefix + 'car/edit',//编辑快车
        carMyCar: host + apiPrefix + 'car/mycar'//我的快车信息
    };

    if (typeof module === 'object' && module && typeof module.exports === 'object') {
        module.exports = api;
    } else {
        window.api = api;
        if (typeof define === 'function' && define.amd) {
            define('api', [], function () {
                return api;
            });
        }
    }
})(window);