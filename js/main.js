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

// function PUERKAPERKINS(persona){
//   return persona.peso +=200
// }  =====
const incremento = 0.2
const puerkaPerkins = persona =>   nombre.peso += incremento
const gataPerkins = persona =>   nombre.peso -= incremento
const seatasca = () => Math.random() < 0.3
const noseatasca = () => Math.random() < 0.4
const aqf = nombre.peso - 3
var dias = 0

while (nombre.peso > aqf) {
  if (seatasca()) {
    puerkaPerkins(nombre)
  }
  if (noseatasca()) {
    gataPerkins(nombre)
  }
  dias += 1
}
console.log(`pasaron ${dias} hasta que ${nombre.nombre} perdio 3 kilos`)
/*switch */
var signoZodiacal = prompt("Escriba aquí su signo zodiacal");

switch(signoZodiacal){

    case'aries':
        alert("Trabajo y negocios: el horizonte tendrá señales favorables. Aproveche. Sus ingresos crecerán. Amor: la relación necesita un cambio pero no se anima a sugerirlo ¡Lo hará bien!.");
    break

    case'tauro':
        alert("Trabajo y negocios: habrá estabilidad en su economía y podrá planificar metas más ambiciosas. Amor: su encanto brillará. Estará atento a las sugerencias de su pareja. Dulces vivencias.");
    break

    case'geminis':
    case'géminis':
        alert("Trabajo y negocios: verá con claridad las ventajas de una inversión. Ganará la confianza de gente influyente. Amor: querrá desapegarse de la pareja y divertirse con amigos; le hará bien.");
    break

    case'cancer':
    case'cáncer':
        alert("Trabajo y negocios: se suceden eventos que favorecen a sus intereses. Sus ganancias crecerán como nunca. Amor: seguirá su instinto en un amor a primera vista y el romance será un hecho.");
    break

    case'leo':
        alert("Trabajo y negocios: se conduce con audacia y los logros no tardan en llegar. Los riesgos serán mínimos. Amor: se destacará por escuchar con atención y dar confianza a su pareja. Armonía.");
    break

    case'virgo':
        alert("Trabajo y negocios: reordenará las tareas que parecen complicadas y se vuelven productivas. Amor: disfrutará hoy del crecimiento de la pareja y lo compartirá celebrando con amigos.");
    break

    case'libra':
        alert("Trabajo y negocios: las mudanzas de casa o las reformas serán propicias hoy. Su creatividad brillará. Amor: le ataca el desapego y siente que el amor alguna vez termina. Reflexione.");
    break

    case'escorpio':
        alert("Trabajo y negocios: toma una decisión y pone las manos a la obra. Sus negocios serán los más beneficiados. Amor: su energía parece trabada y siente que hace daño; un amigo confidente ayudará.");
    break

    case'sagitario':
        alert("Trabajo y negocios: hoy cosechará los frutos de su esfuerzo. Lo que necesita llega y se cumple. Amor: se pondrá dramático ante una situación. Vívalo riendo y estará irresistible.");
    break

    case'capricornio':
        alert("Trabajo y negocios: detectará manejos erróneos cuando le propongan un cambio de planes. Amor: le estimula y le atrae el aspecto misterioso que rodea a alguien de su entorno.");
    break

    case'acuario':
        alert("Trabajo y negocios: su habilidad para obtener negocios estará al máximo. Momento para celebrar. Amor: la pareja recuperará el fuego en la intimidad luego de sinceras confesiones.");
    break

    case'piscis':
        alert("Trabajo y negocios: las cosas parecen estar en su contra pero no todo estará mal. Llega dinero extra. Amor: dejará de lado relaciones ocasionales y optará por la dulzura de la estabilidad.");
    break

    default:
        var signoZodiacal = prompt("Signo zodiacal incorrecto, favor escriba otro");
        switch(signoZodiacal){

            case'aries':
                alert("Trabajo y negocios: el horizonte tendrá señales favorables. Aproveche. Sus ingresos crecerán. Amor: la relación necesita un cambio pero no se anima a sugerirlo ¡Lo hará bien!.");
            break

            case'tauro':
                alert("Trabajo y negocios: habrá estabilidad en su economía y podrá planificar metas más ambiciosas. Amor: su encanto brillará. Estará atento a las sugerencias de su pareja. Dulces vivencias.");
            break

            case'geminis':
            case'géminis':
                alert("Trabajo y negocios: verá con claridad las ventajas de una inversión. Ganará la confianza de gente influyente. Amor: querrá desapegarse de la pareja y divertirse con amigos; le hará bien.");
            break

            case'cancer':
            case'cáncer':
                alert("Trabajo y negocios: se suceden eventos que favorecen a sus intereses. Sus ganancias crecerán como nunca. Amor: seguirá su instinto en un amor a primera vista y el romance será un hecho.");
            break

            case'leo':
                alert("Trabajo y negocios: se conduce con audacia y los logros no tardan en llegar. Los riesgos serán mínimos. Amor: se destacará por escuchar con atención y dar confianza a su pareja. Armonía.");
            break

            case'virgo':
                alert("Trabajo y negocios: reordenará las tareas que parecen complicadas y se vuelven productivas. Amor: disfrutará hoy del crecimiento de la pareja y lo compartirá celebrando con amigos.");
            break

            case'libra':
                alert("Trabajo y negocios: las mudanzas de casa o las reformas serán propicias hoy. Su creatividad brillará. Amor: le ataca el desapego y siente que el amor alguna vez termina. Reflexione.");
            break

            case'escorpio':
                alert("Trabajo y negocios: toma una decisión y pone las manos a la obra. Sus negocios serán los más beneficiados. Amor: su energía parece trabada y siente que hace daño; un amigo confidente ayudará.");
            break

            case'sagitario':
                alert("Trabajo y negocios: hoy cosechará los frutos de su esfuerzo. Lo que necesita llega y se cumple. Amor: se pondrá dramático ante una situación. Vívalo riendo y estará irresistible.");
            break

            case'capricornio':
                alert("Trabajo y negocios: detectará manejos erróneos cuando le propongan un cambio de planes. Amor: le estimula y le atrae el aspecto misterioso que rodea a alguien de su entorno.");
            break

            case'acuario':
                alert("Trabajo y negocios: su habilidad para obtener negocios estará al máximo. Momento para celebrar. Amor: la pareja recuperará el fuego en la intimidad luego de sinceras confesiones.");
            break

            case'piscis':
                alert("Trabajo y negocios: las cosas parecen estar en su contra pero no todo estará mal. Llega dinero extra. Amor: dejará de lado relaciones ocasionales y optará por la dulzura de la estabilidad.");
            break

        }
    break

}


//var i es un contador iniciado en 1; mientras i sea menor a 365; i se incrementara en 1 y el codigo se ejecutara
// for (var i = 1; i<=365; i++) {
//   var random = Math.random()
//   if (random < 0.25) {
//     puerkaPerkins(nombre)
//   } else if (random < 0.50){
//     gataPerkins(nombre)
//   }
// }

// console.log(`al final ${nombre.nombre} pesa ${nombre.peso.toFixed(2)} kilos`)

/*****************************************************************************valores***************************************************************************************/
/*document. ready*/
// document.addEventListener('DOMContentLoaded', function(){
// /*variables goblaes*/
// var nombre = {nombre: "bryan", apellido: "reyes", edad: 23};
// var otronombre = {nombre: "emile", apellido: "perez", edad: 21};
// /*variables goblaes*/
// /*****************************************************************************descripcion***********************************************************************************/
// /*funcion establecida, que recibe un parametro, y el que se hace con ese parametro*/
// function hace(recibe) {
//   var {nombre} = recibe
//   var {apellido} = recibe
//   var {edad} = recibe
//   var muestra = document.getElementById('code');
//
//   muestra.innerHTML = `mi prr nombre es ${nombre} y tengo ${edad} años`;
//   console.log(`mi prr nombre es ${nombre} y tengo ${edad} años`)
// }
//
// function incrementar(persona){
//   return{
//     ...persona,
//     edad: persona.edad + 1
//   }
// }
// /*****************************************************************************actividad*************************************************************************************/
// /*se llama la funcion con una actividad establecida, y le aplica el parametro*/
// incrementar(nombre);
// hace(nombre);
//
// })
