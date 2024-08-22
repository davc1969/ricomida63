$(document).ready(function(){
  $(".card img").click(function(){
    $(this).siblings().children("p").hide();
  });

  $(".card-title").click(function(){
    $(this).siblings().show();
  });
})