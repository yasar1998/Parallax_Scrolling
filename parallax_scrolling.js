
$(window).bind('scroll',function(e){
    parallaxScroll();
});

function parallaxScroll(){
   var scrolled = $(window).scrollTop(); 
   $('.layer-1').css('top',(0-(scrolled*0.25))+'px');
   $(window).scrollLeft();
   $('.layer-2').css('left',(scrolled*2)+'px');
   $('.layer-3').css('left',(0-scrolled*2)+'px');
  
  

   $('.team-1').css('top',(900-(scrolled*.8))+'px');
   $('.team-2').css('top',(900-(scrolled*.8))+'px');
   $('.team-3').css('top',(900-(scrolled*.8))+'px'); 
   $('.team-4').css('top',(1100-(scrolled*.8))+'px'); 
   $('.team-5').css('top',(1100-(scrolled*.8))+'px'); 
   $('.team-6').css('top',(900-(scrolled*.8))+'px'); 
   $('.team-7').css('top',(1300-(scrolled*.8))+'px'); 
   $('.team-8').css('top',(1300-(scrolled*.8))+'px');
   $('.team-9').css('top',(1100-(scrolled*.8))+'px');
   $('.team-10').css('top',(1100-(scrolled*.8))+'px');
   $('.team-11').css('top',(1300-(scrolled*.8))+'px');
   $('.team-12').css('top',(1300-(scrolled*.8))+'px');
}