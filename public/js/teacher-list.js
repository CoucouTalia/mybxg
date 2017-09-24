/**
 * Created by admin on 2017/9/20.
 */
define(['jquery','template','util','bootstrap'],function($,template,util){
   //设置导航菜单选中
   //$('.aside .navs a[href="'+location.pathname+'"]').addClass('active');
util.setMenu(location.pathname);
//调用后台接口获取所有讲师数据
    $.ajax({
        type:'get',
        dataType:'json',
        url:'/api/teacher',
        success:function(data){
            //console.log(data)
         var html=template('teacherTpl',{list:data.result});
            $("#teacherInfo").html(html);
            //启用和注销功能
            $(".eod").click(function(){
               //console.log(111)
                var that=this;
                var td = $(this).closest('td');
                var tcId=td.attr('data-tcId');
                var tcStatus=td.attr('data-status');
                //console.log(tcStatus);
                //调后台接口
                $.ajax({
                    type:'post',
                    url:'/api/teacher/handle',
                    data:{
                        tc_id:tcId,
                        tc_status:tcStatus
                    },
                    dataType:'json',
                    success:function(data){
                       console.log(data)
                        if(data.code==200){
                            td.attr('data-status',data.result.tc_status);
                            if(data.result.tc_status==1){
                                $(that).text('启用');
                            }else{
                                $(that).text('注销');
                            }
                        }

                    }
                });
            });
            //查看讲师
            $(".preview").click(function(){
                var td = $(this).closest('td');
                var tcId=td.attr('data-tcId');
                $.ajax({
                    type:'get',
                    url:'/api/teacher/view',
                    data:{
                      tc_id:tcId
                    },
                    dataType:'json',
                    success:function(data){
                       console.log(data)
                       //解析数据，渲染页面
                        var html=template('modalTpl',data.result);
                        $("#modalInfo").html(html);
                        //显示弹窗
                        $("#teacherModal").modal();
                    }
                })
            })
        }
    });
});
