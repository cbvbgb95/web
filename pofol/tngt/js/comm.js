$(function(){

  $(".depth1>li").mouseover(function(){
   $(this).children(".depth2").stop().slideDown();
  });

  $(".depth1>li").mouseleave(function(){
   $(this).children(".depth2").stop().slideUp();
  });

   var num=0;
    $('.main_slide li').eq(num).children('.big').fadeIn('slow');
    $('.main_slide li').eq(num).children('.small').fadeTo("slow",1);


    setInterval(function(){
        $('.main_slide li').eq(num).children('.big').fadeOut('slow');
        $('.main_slide li').eq(num).children('.small').fadeTo("slow",0.5);



        if(num==3){
            num=0;
            $('.main_slide li').eq(num).children('.big').fadeIn('slow');
            $('.main_slide li').eq(num).children('.small').fadeTo("slow",1);
        }else{
            num++;
            $('.main_slide li').eq(num).children('.big').fadeIn('slow');
            $('.main_slide li').eq(num).children('.small').fadeTo("slow",1);
        }
    },2000);
	
	 $("a").focusin(function(){
  $(this).css("color","#f00")
 });
 
 $("a").focusout(function(){
  $(this).css("color","inherit")
 });

})