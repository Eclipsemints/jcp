$(function () {
  $(".carousel").carousel();
  var wHeight = $(window).height();
  var wWidth = $(window).width();
  if (wWidth > wHeight) {
    $("img").css("min-width", wWidth);
    $("img").css("max-width", wWidth);
  }
  else {
    $("img").css("min-height", wHeight);
    $("img").css("max-height", wHeight);
  }
  $(".carousel-control").css("top", $(window).height() / 2);
});
$(window).resize(function(){
  $(".carousel-control").css("top", $(window).height() / 2);
});
