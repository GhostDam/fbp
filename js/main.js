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
//*codigo de clase*//
var nombre = {nombre: "bryan",
              apellido: "reyes",
              edad: 23,
              peso: 70
            };

console.log(`al principio ${nombre.nombre} pesa ${nombre.peso} kilos`)
//var i es un contador iniciado en 1; mientras i sea menor a 365; i se incrementara en 1 y el codigo se ejecutara
for (var i = 1; i<=365; i++) {
  var random = Math.random()
  if (random < 0.25) {
    //aumenta de peso
  } else if (random < 0.50){
    //adelgazar
  }
}

console.log(`al final ${nombre.nombre} pesa ${nombre.peso} kilos`)

/*****************************************************************************valores***************************************************************************************/
/*document. ready*/
document.addEventListener('DOMContentLoaded', function(){
/*variables goblaes*/
var nombre = {nombre: "bryan", apellido: "reyes", edad: 23};
var otronombre = {nombre: "emile", apellido: "perez", edad: 21};
/*variables goblaes*/
/*****************************************************************************descripcion***********************************************************************************/
/*funcion establecida, que recibe un parametro, y el que se hace con ese parametro*/
function hace(recibe) {
  var {nombre} = recibe
  var {apellido} = recibe
  var {edad} = recibe
  var muestra = document.getElementById('code');

  muestra.innerHTML = `mi prr nombre es ${nombre} y tengo ${edad} años`;
  console.log(`mi prr nombre es ${nombre} y tengo ${edad} años`)
}

function incrementar(persona){
  return{
    ...persona,
    edad: persona.edad + 1
  }
}
/*****************************************************************************actividad*************************************************************************************/
/*se llama la funcion con una actividad establecida, y le aplica el parametro*/
incrementar(nombre);
hace(nombre);

})
