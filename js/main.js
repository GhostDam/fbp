$(document).ready(function(){
  $("h2.1").click(function(){
    $("section.1").toggle("slow")
  });
  $("h2.2").click(function(){
    console.log("done")
    $("section.2").toggle("slow")
  });

});
