/**
 * Created by admin on 2017/9/20.
 */
require.config({
    baseUrl:'/public/assets',
    paths:{
       jquery:'jquery/jquery.min',
        template:'artTemplate/template-web',
        bootstrap:'bootstrap/js/bootstrap',
        datepicker:'bootstrap-datepicker/js/bootstrap-datepicker',
        language:'bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min',
        validate:'validate/jquery-validate.min',
        form:'jquery-form/jquery.form',
       common:'../js/common',
        util:'../js/util',
        login:'../js/login',
        settings:'../js/settings',
        cookie:'jquery-cookie/jquery.cookie',
        teacherlist:'../js/teacher-list',
        teacheradd:'../js/teacher-add'
    },
    shim:{
        bootstrap:{
            deps:['jquery']
        },
        language:{
            deps:['jquery','datepicker']
        },
        validate:{
            deps:['jquery']
        }
    }
});