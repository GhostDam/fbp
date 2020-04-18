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
//De esta manera se obtiene datos de la api SWAPI.




const opts = {crossDomain:true}
//pasaremos un callback la funcion de obtener pkm
function obtainPkm(pkm, callback) {
  const url = `https://pokeapi.co/api/v2/pokemon/${pkm}` 
  $.get(url, opts, function (data) { 
    console.log(data.name)
      if (callback) {
        callback()    
      }
  })
}

//el motivo por el cual no se ejecuta como
//obtainPkm(4,obtainPkm(5))
//es porque se ejecutaria inmediatamente 5
//por ello se usa una funcion anonima
obtainPkm(4, function() {
  obtainPkm(5, function() {
    obtainPkm(6)    
  })  
})

//la estructura obtenida es el denominado
//callback hell

