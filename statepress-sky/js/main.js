(function ($) {
 "use strict";

/*----------------------------
 jQuery MeanMenu
------------------------------ */
	jQuery('nav#dropdown').meanmenu();	
	
/*----------------------------
 wow js active
------------------------------ */
 new WOW().init();
 
/*----------------------------
 owl active
------------------------------ */  
  $(".featured-project").owlCarousel({
      autoPlay: true, 
	  slideSpeed:2000,
	  pagination:true,
	  navigation:false,	  
      items : 4,
	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,4],
	  itemsDesktopSmall : [980,3],
	  itemsTablet: [768,2],
	  itemsMobile : [479,1],
  });
 /*----------------------------
  property-listing active
 ------------------------------ */  
   $(".total-property-listing").owlCarousel({
       autoPlay: true, 
 	  slideSpeed:2000,
 	  pagination:true,
 	  navigation:false,	  
       items : 1,
 	  /* transitionStyle : "fade", */    /* [This code for animation ] */
 	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
       itemsDesktop : [1199,1],
 	  itemsDesktopSmall : [980,1],
 	  itemsTablet: [768,1],
 	  itemsMobile : [479,1],
   });
   /*----------------------------
     Testimonial Section active
    ------------------------------ */ 
      $(".testimonial-area").owlCarousel({
          autoPlay: true, 
        slideSpeed:2000,
        pagination:true,
        navigation:false, 
        items : 1,
        /* transitionStyle : "fade", */    /* [This code for animation ] */
        navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
          itemsDesktop : [1199,1],
        itemsDesktopSmall : [980,1],
        itemsTablet: [768,1],
        itemsMobile : [479,1],
      });
   /*----------------------------
     Home two listing Property Section active
    ------------------------------ */ 
      $(".home-two-listing").owlCarousel({
          autoPlay: true, 
        slideSpeed:2000,
        pagination:true,
        navigation:false, 
        items : 3,
       autoHeight : true,
        /* transitionStyle : "fade", */    /* [This code for animation ] */
        navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
          itemsDesktop : [1199,3],
        itemsDesktopSmall : [980,2],
        itemsTablet: [768,1],
        itemsMobile : [479,1],
      });
      /*----------------------------
      Featured Property section
      ------------------------------ */  
        $(".listing-property").owlCarousel({
            autoPlay: false, 
          slideSpeed:2000,
          pagination:false,
          navigation:true,    
            items : 3,
          /* transitionStyle : "fade", */    /* [This code for animation ] */
          navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
            itemsDesktop : [1199,2],
          itemsDesktopSmall : [980,1],
          itemsTablet: [768,1],
          itemsMobile : [479,1],
        });
    /*-------------------------------------
    Lightslider activation For Single Property
    --------------------------------------*/
        $('#image-gallery').lightSlider({
            gallery:true,
            item:1,
            thumbItem:4,
            slideMargin: 2,
            speed:500,
            auto:true,
            loop:true,
            onSliderLoad: function() {
            $('#image-gallery').removeClass('cS-hidden');
            }  
        });
	   
/*--------------------------
 scrollUp
---------------------------- */	
	$.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });
	 /*------------------------------------
	 jquery Serch Box activation code 
	 --------------------------------------*/
	 $(".search-button").on('click', function(){
	    $(".search-text").slideToggle('slow');
	});

 /*------------------------------------
 SideSlide menu Activation
 -------------------------------------*/       
    $('#slideBotton').on('click',function(){
        $('#sideSlide').addClass( "highlight" );
    });
    $('.close').on('click',function(){
        $('#sideSlide').removeClass( "highlight" );
    });
/*---------------------
Circular Bars - Knob
--------------------- */	
	  if(typeof($.fn.knob) != 'undefined') {
		$('.knob').each(function () {
		  var $this = $(this),
			  knobVal = $this.attr('data-rel');
	
		  $this.knob({
			'draw' : function () { 
			  $(this.i).val(this.cv + '%')
			}
		  });
		  
		  $this.appear(function() {
			$({
			  value: 0
			}).animate({
			  value: knobVal
			}, {
			  duration : 2000,
			  easing   : 'swing',
			  step     : function () {
				$this.val(Math.ceil(this.value)).trigger('change');
			  }
			});
		  }, {accX: 0, accY: -150});
		});
	  }
/*-------------------------------
Counter Up
---------------------------------*/     
	$('.about-counter').counterUp({
	delay: 50,
	time: 3000
	});

/*--------------------------
 Sticky Menu Activation Code
---------------------------- */		   
	$(window).on('scroll', function(){
		if( $(window).scrollTop()>100 ){
			$('.sticky').addClass('stick');
			} else {
			$('.sticky').removeClass('stick');
		}
	});	   
	$(window).on('scroll', function(){
		if( $(window).scrollTop()>100 ){
			$('.mob-sticky').addClass('mob-stick');
			} else {
			$('.mob-sticky').removeClass('mob-stick');
		}
	}); 
/*-------------------------------------
jQuery portfolio activation code
-------------------------------------*/ 
	$('#dg-container').gallery({
		autoplay	:	true
	});
/*-------------------------------------
Single Property Slider
---------------------------------------*/
$(".preview a").on("click", function(){
    $(".selected").removeClass("selected");
    $(this).addClass("selected");
    var picture = $(this).data();
    
    event.preventDefault(); //prevents page from reloading every time you click a thumbnail


    $(".full img").fadeOut( 100, function() { 
      $(".full img").attr("src", picture.full);
      $(".full").attr("href", picture.full);
      $(".full").attr("title", picture.title);

  }).fadeIn();


});// end on click

$(".full").fancybox({
    helpers : {
        title: {
            type: 'inside'
        }
    },
    closeBtn : true,
});

	
})(jQuery); 