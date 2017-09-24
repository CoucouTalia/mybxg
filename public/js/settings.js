/**
 * Created by admin on 2017/9/22.
 */
define(['jquery', 'template','ckeditor','uploadify','region','datepicker','language','validate','form'], function ($, template,CKEDITOR) {
    $.ajax({
        type: 'get',
        url: '/api/teacher/profile',
        dataType: 'json',
        success: function (data) {
            console.log(data)
            var html = template('settingsTpl', data.result);
            $('#settingsInfo').html(html);
            //上传头像图片
            $('#upfile').uploadify({
                width: 120,
                height: 120,
                buttonText: '',
                itemTemplate: '<span></span>',
                swf: '/public/assets/uploadify/uploadify.swf',
                uploader: '/api/uploader/avatar',
                fileObjName: 'tc_avatar',
                onUploadSuccess: function(a, b) {
                    console.log(b);
                    console.log($('.preview img'))
                    var obj = JSON.parse(b);
                    $('.preview img').attr('src', obj.result.path);
                }
            });
            //处理三级省级联动
            $('#pcd').region({
                url:'/public/assets/jquery-region/region.json'
            });
            //处理富文本
            CKEDITOR.replace('editor',{
                toolbarGroups : [
                { name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
                { name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] }

            ]
            });
            //处理表单提交
            $('#settingsForm').validate({
                sendForm:false,
                valid:function(){
                    //拼接籍贯信息
                    var p = $("#p").find('option:selected').text();
                    var c = $("#c").find('option:selected').text();
                    var d = $("#d").find('option:selected').text();
                    var hometown=p+'|'+c+'|'+d;
                    //更新富文本内容
                    for(var instance in CKEDITOR.instances){
                        CKEDITOR.instances[instance].updateElement();
                    }
                    //提交表单
                    $(this).ajaxSubmit({
                        type:'post',
                        url:'/api/teacher/modify',
                        data:{tc_hometown:hometown},
                        dataType:'json',
                        success:function(data){
                           console.log(data)
                            if(data.code==200){
                                location.reload();
                            }
                        }
                    })

                }
            })
        }
    });
})
