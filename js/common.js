$(function() {
	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");
	
	function heightDetect() {
		$(".main_head").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});
	


	$(".nav_mnu ul a").mPageScroll2id();
	// $(".animation_1").animated("flipInY", "fadeOutDown");
});
