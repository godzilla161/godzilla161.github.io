$(function() {
	function heightDetect() {
		$(".main_head").css("height", 
		$(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});




	$(".nav_mnu ul a",".btn a").mPageScroll2id();


$(".menu").click(function() {
	$(".sandwich").toggleClass("active");
	$(".nav_mnu").slideToggle(1000);
});
	

	$(".nav_mnu ul a").click(function() {
		$(".nav_mnu").fadeOut(600);
		$(".sandwich").toggleClass("active");
		$(".top_text").css("opacity", "1");
	});

});
