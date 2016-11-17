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
 


$('#nav').localScroll(1200);
$('#intro').parallax("50%", 0.5);



 
})(jQuery); 