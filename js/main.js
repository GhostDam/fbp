$(document).ready(function(){
  $("section").hide();
  $("h2").click(function(){
    var ref = $(this).attr("href")
    var color = $(ref).css( "background-color" );
    $("h2").css( "background-color", "#ffffff" );  
    $(this).css( "background-color", color );
    $("section").hide();
    $(ref).show();
  });
});
