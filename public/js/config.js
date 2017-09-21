/**
 * Created by admin on 2017/9/20.
 */
require.config({
    baseUrl:'/public/assets',
    paths:{
       jquery:'jquery/jquery.min',
        template:'artTemplate/template-web',
        bootstrap:'bootstrap/js/bootstrap',
       common:'../js/common',
        login:'../js/login',
        cookie:'jquery-cookie/jquery.cookie',
        teacherlist:'../js/teacher-list'
    },
    shim:{
        bootstrap:{
            deps:['jquery']
        }
    }
});