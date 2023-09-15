//submenu
$('.submenu').hide();
$('.gnb>li').mouseover(function () {
    $('.submenu').stop().slideDown();
})
$('#header_wrap').mouseleave(function () {
    $('.submenu').stop().slideUp();
})
//submenu end