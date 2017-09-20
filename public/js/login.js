/**
 * Created by admin on 2017/9/20.
 */
define(['jquery','cookie'],function($){
    $("#loginBtn").click(function () {

        //console.log($("#loginForm").serialize());
        $.ajax({
            url: '/api/login',
            type: 'post',
            data: $("#loginForm").serialize(),
            dataType: 'json',
            success: function (data) {
//                   alert(4);
                console.log(data)
                if (data.code == 200) {
                    $.cookie('loginInfo',JSON.stringify(data.result),{path:'/'});

                    location.href = '/main/index';
                }
            }
        });
        return false;
    });
});