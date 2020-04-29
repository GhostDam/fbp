$(document).ready(function(){
  $("section").hide();
  $("h4").click(function(){
    var ref = $(this).attr("href")
    var color = $(ref).css( "background-color" );
    $("h4").css( "background-color", "#ffffff" );
    $(this).css( "background-color", color );
    $("section").hide();
    $(ref).show();
  });
});
//*codigo de clase*//

/*
  Factorial,
  un factorial es un num que se multiplica 
  por sus "antepasados"

  factorial de 6

   !6 = * 5 * 4 * 3 * 2 * 1 = 720

   !12 = 12 * ... * 5 * 4 * 3 * 2 * 1 = 

*/ 

function factorial(n) {
  //si no existe
  //se crea el objeto de guardado
  if (!this.cache) {
    this.cache = {}
  }

  //si existe regresa lo
  //guardado
  if (this.cache[n]) {
    return this.cache[n]
  }

  if (n===1) {
      return 1
    }
  this.cache[n] = n * factorial(n - 1)
  return this.cache[n]
}