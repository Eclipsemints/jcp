$(document).ready(function($) {
  $('#landscape_button').hover(function() {
    $('#landscape_pic').animate({"opacity":"1"}, 500);
    $('#home_pic').animate({"opacity":"0"}, 500);
  }, function() {
    $('#landscape_pic').animate({"opacity":"0"}, 500);
    $('#home_pic').animate({"opacity":"1"}, 500);
  });
  $('#portrait_button').hover(function() {
    $('#portrait_pic').animate({"opacity":"1"}, 500);
    $('#home_pic').animate({"opacity":"0"}, 500);
  }, function() {
    $('#portrait_pic').animate({"opacity":"0"}, 500);
    $('#home_pic').animate({"opacity":"1"}, 500);
  });
  $('#product_button').hover(function() {
    $('#product_pic').animate({"opacity":"1"}, 500);
    $('#home_pic').animate({"opacity":"0"}, 500);
  }, function() {
    $('#product_pic').animate({"opacity":"0"}, 500);
    $('#home_pic').animate({"opacity":"1"}, 500);
  });

});

