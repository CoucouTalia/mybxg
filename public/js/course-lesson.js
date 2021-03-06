/**
 * Created by admin on 2017/9/25.
 */
define(['jquery','template','util','bootstrap','form'],function($,template,util){
    //设置导航菜单选中
  util.setMenu('/course/add');
    //获取课程id
    var csId=util.qs('cs_id');
    //获取所有的课时列表数据
    $.ajax({
        type:'get',
        url:'/api/course/lesson',
        data:{cs_id:csId},
        dataType:'json',
        success:function(data){
           //console.log(data)
            //解析数据渲染页面
            var html=template('lessonTpl',data.result);
            $('#lessonInfo').html(html);
            //处理添加课时操作
            $('#addLesson').click(function(){
                var html=template('modalTpl',{operate:'添加课时'});
                $('#modalInfo').html(html);
                //处理弹窗
               $('#chapterModal').modal();
                //处理添加课时表单提交
                $('#editOraddBtn').click(function(){
                    console.log(1)
                    $("#lessonForm").ajaxSubmit({
                        type:'post',
                        url:'/api/course/chapter/add',
                        data:{ct_cs_id:csId},
                        dataType:'json',
                        success:function(data){
                            console.log(data)
                            if(data.code==200){
                                location.reload();
                            }
                        }
                    });
                });
            });
            $('.editLesson').click(function(){
                //获取课时ID
                var ctId=$(this).attr('data-ctId');
                $.ajax({
                    type:'get',
                    url:'/api/course/chapter/edit',
                    data:{ct_id:ctId},
                    dataType:'json',
                    success:function(data){
                       console.log(data);
                        data.result.operate='修改课时';
                        var html=template('modalTpl',data.result);
                            $('#modalInfo').html(html);
                        $('#chapterModal').modal();
                        //处理修改课时提交
                        $('#editOraddBtn').click(function(){
                            $("#lessonForm").ajaxSubmit({
                                type:'get',
                                url:'/api/course/chapter/modify',
                                data:{ct_cs_id:csId,ct_id:ctId},
                                dataType:'json',
                                success:function(data){
                                    console.log(data)
                                    if(data.code==200){
                                        location.reload();
                                    }
                                }
                            });
                        });
                    }
                });

            });
        }
    });
});
