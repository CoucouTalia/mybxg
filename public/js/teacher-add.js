define(['jquery', 'template','util','datepicker','language','validate','form'], function ($, template,util) {
    //获取url中的参数
    var tcId=util.qs('tc_id');
    console.log(tcId)
    if(tcId){
        //编辑操作
        $.ajax({
            type:'get',
            url:'/api/teacher/edit',
            data:{tc_id:tcId},
            dataType:'json',
            success:function(data){
                data.result.operate='编辑讲师';
              var html=template('teacherTpl',data.result);
                $("#teacherInfo").html(html);
                submitForm('/api/teacher/update');
            }
        });
    }else {
        //添加操作
        var html = template('teacherTpl',{operate:'添加讲师'});
        $("#teacherInfo").html(html);
        submitForm('/api/teacher/add')
    }
   //基于表单验证插件和表单提交插件提交表单
    function submitForm(url){
        $('#teacherForm').validate({
            sendForm:false,
            valid:function(){
               $(this).ajaxSubmit({
                   url:url,
                   dataType:'json',
                   success:function(data){
                       if(data.code==200){
                           location.href='/teacher/list';
                       }
                   }

               });
            },
            description:{
                tcName:{
                    required:'用户名不能为空'
                },
                tcPass:{
                    required:'密码不能为空',
                    pattern:'必须为6为数字'
                },
                tcJoinDate:{
                    required:'日期不能为空'
                }
            }
        });
    }
    //提交表单
    /*function submitForm(url){
        $('#teacherBtn').click(function(){
            $.ajax({
                type:'post',
                url:url,
                data:$('#teacherForm').serialize(),
                dataType:'json',
                success:function(data){
                    if(data.code==200){
                        location.href='/teacher/list';
                    }
                }
            });
        });

    }*/

});