/**
 * Created by admin on 2017/9/22.
 */
define(['jquery', 'template', 'uploadify'], function ($, template) {
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
        }
    });
})
