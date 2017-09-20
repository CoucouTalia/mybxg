/**
 * Created by admin on 2017/9/20.
 */
define(['jquery','template'],function($,template){
//调用后台接口获取所有讲师数据
    $.ajax({
        type:'get',
        dataType:'json',
        url:'/api/teacher',
        success:function(data){
         var html=template('teacherTpl',{list:data.result});
            $("#teacherInfo").html(html);

        }

    })
})
