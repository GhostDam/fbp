$(document).ready(function(){
  // $(".hamburguer").on('click', function(){
  //   $(this).toggleClass('open') 
  //   $(this).next().toggleClass('visible') 
  // })
  $("section").hide();
  
  $("h4").click(function(){
    var ref = $(this).attr("href")
    var color = $(ref).css( "background-color" );
    $("h4").css( "background-color", "#333333" );
    $(this).css( "background-color", color );
    $("section").hide();
    $(ref).show();
  });
});
// *codigo de clase*//

// JQ replace
// document.addEventListener("DOMContentLoaded", function(){
//   var section = document.querySelector("section")
//   section.style.display = "none"; 

// })

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


//*Service worker
if('serviceWorker' in navigator){
	navigator.serviceWorker.register('sw.js')
							.then(registration => console.log('serviceWorker registrado ', registration))
							.catch(err => console.log('No se ha podido regsitrar el serviceWorker', err));

}else{
	console.log('No tienes acceso a los serviceWorker en tu navegador');
}
