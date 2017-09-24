/**
 * Created by admin on 2017/9/24.
 */
define(['jquery','util'],function($,util){
//设置导航菜单选中
//    $('.aside .navs a[href="'+location.pathname+'"]').addClass('active');
    util.setMenu(location.pathname)
})
