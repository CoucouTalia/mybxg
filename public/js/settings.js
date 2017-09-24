/**
 * Created by admin on 2017/9/22.
 */
define(['jquery', 'template','ckeditor','uploadify','region','datepicker','language'], function ($, template,CKEDITOR) {
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
                { name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
                { name: 'links', groups: [ 'links' ] },
                { name: 'insert', groups: [ 'insert' ] },
                { name: 'forms', groups: [ 'forms' ] },

            ]
            })
        }
    });
})
