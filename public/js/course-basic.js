/**
 * Created by admin on 2017/9/24.
 */
define(['jquery','template','util','ckeditor'],function($,template,util,CKEDITOR){
//设置导航菜单选中
    util.setMenu('/course/add');
  //获取课程id
    var csId=util.qs('cs_id');
    console.log(csId)
    //操作标志位
    var flag = util.qs('flag');
    //根据id查询课程详细信息
    $.ajax({
        type:'get',
        url:'/api/course/basic',
        data:{cs_id:csId},
        dataType:'json',
        success:function(data){
           console.log(data)
            if(flag){
                data.result.operate='编辑课程';
            }else{
                data.result.operate='添加课程';
            }
            //解析数据，渲染页面
            var html=template('basicTpl',data.result);
            $('#basicInfo').html(html);
        }
    })
})