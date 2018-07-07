$(document).ready(function() {


  $(".s_portfolio li").click(function() {
    $(".s_portfolio li").removeClass("active");
    $(this).addClass("active");
  });


  $(".section_work").animated("fadeInUp", "fadeOutDown");
  $(".top_text").animated("fadeInDown", "fadeOutUp");

  $(".animation_1").animated("flipInY", "fadeOutDown");
  $(".work_item").animated("fadeInLeft", "fadeOutDown");
  $(".inner_contry").animated("fadeInLeft", "fadeOutDown");
  $(".social_wrap").animated("fadeInUp", "fadeOutDown");


  function heightDetect() {
    $(".main_head").css("height", $(window).height());
  };
  heightDetect();
  $(window).resize(function() {
    heightDetect();
  });

  $(".toggle_mnu").click(function() {
    $(".sandwich").toggleClass("active");
  });

  $(".top_mnu ul a").click(function() {
    $(".top_mnu").fadeOut(600);
    $(".sandwich").toggleClass("active");
    $(".top_text").css("opacity", "1");
  }).append("<span>");

  $(".toggle_mnu").click(function() {
    if ($(".top_mnu").is(":visible")) {
      $(".top_text").css("opacity", "1");
      $(".top_mnu").fadeOut(600);
      $(".top_mnu li a").removeClass("fadeInUp animated");
    } else {
      $(".top_text").css("opacity", ".1");
      $(".top_mnu").fadeIn(600);
      $(".top_mnu li a").addClass("fadeInUp animated");
    };
  });

  


  $(window).load(function() {


  $(".work_section figcaption").delay(250).animated("fadeInDown", "fadeOutUp");
  $(".info_section").animated("fadeInDown", "fadeOutUp");
  $(".contry_section h1").animated("fadeInDown", "fadeOutUp");
  $(".main_footer h2").animated("fadeInDown", "fadeOutUp");
  });
  
  
}); 
