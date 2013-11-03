$(document).ready(function($) {
  // hover over top menu buttons. hides home page picture and display each picture
  $(".footer_menu_items").hover(function(){
    if (window.location != "/" ){ 
      var hoverItem = $(this).children().text();
      hoverItem = hoverItem.toLowerCase().replace(/\s/g,"");
      $("#"+hoverItem+"_pic").children().css("display","block");
      console.log("#"+hoverItem+"_pic");
      if ( hoverItem != 'home'){
        $("#home_pic").children().css("display","none");
      }
      else{
        $("#home_pic").children().css("display","block");
        $("#landscape_pic").children().css("display","none");
        $("#portrait_pic").children().css("display","none");
        $("#product_pic").children().css("display","none");
      }
    }
  });
});

