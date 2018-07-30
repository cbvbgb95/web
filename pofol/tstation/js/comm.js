$(function(){
 
 $('.depth1>li').mouseover(function(){
  $(this).children('.depth2').stop().slideDown();
 });
 
 $('.depth1>li').mouseleave(function(){
  $(this).children('.depth2').stop().slideUp();
 });
 
 
 var now = 1;
 var max = 3;
 var width = 1100;
 
 var slide = setInterval(function(){
  if(now<max){
   $('.mainslide>ul').animate({
    'left':(now*width*(-1))+'px'
   });
   now++;
  }else{
   $('.mainslide>ul').animate({
    'left':'0px'
   });
   now=1;
  }
 },2000);
 
 $('.col2 a').click(function(){
  $('#modal').addClass('on');
 });
 
 $('#modal button').click(function(){
  $('#modal').removeClass('on');
 });
 
 $('a').focusin(function(){
  $(this).css('color','#ec6706')
 });
 
 $('a').focusout(function(){
  $(this).css('color','inherit')
 });

 
 
 
 
 
});