$(function(){
 
 $('.depth1>li').mouseover(function(){
  $(this).children('.depth2').stop().slideDown();
 });
 
 $('.depth1>li').mouseleave(function(){
  $(this).children('.depth2').stop().slideUp();
 });
 
 $(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 500) {
                $('#MOVE_TOP_BTN').fadeIn();
            } else {
                $('#MOVE_TOP_BTN').fadeOut();
            }
        });
        
        $("#MOVE_TOP_BTN").click(function() {
            $('html, body').animate({
                scrollTop : 0
            }, 400);
            return false;
        });
    });
 
  $('.bulpop').click(function(){
  $('#modal').addClass('on');
 });
 
 $('#modal button').click(function(){
  $('#modal').removeClass('on');
 });
 
});