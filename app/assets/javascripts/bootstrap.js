$(document).ready(function($) {
  // hover over top menu buttons. hides home page picture and display each picture
  $(".footer_menu_items").hover(function(){
    var hoverArr = ["#home_pic", "#landscape_pic", "#portrait_pic", "#product_pic" ] ;
    if (window.location != "/" ){ 
      var hoverItem = $(this).children().text();
      hoverItem = hoverItem.toLowerCase().replace(/\s/g,"");
      hideOther(hoverArr);
      $("#"+hoverItem+"_pic").children().css("display","block");
    }
  });
});

function hideOther(otherArr){
  for(var i = 0 ; i < otherArr.length ; i++){
    console.log("hi") ;
    $(otherArr[i]).children().css("display","none");
  }
}

