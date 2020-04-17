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

/*Constructores/Clases*/
//Se crea la funcion que sera el constructor, se indican los parametros que recibira
//  y se asignan los atributos
// class Pkm {
//   constructor(tipo, generacion, nombre) {
//     this.type = tipo
//     this.gen = generacion
//     this.name = nombre
//     this.damage = 150
//   }
//   atacar(){
//     console.log(`${this.name} has dealed ${this.damage} ponits`)
//   }
// }
// class warrior extends Pkm {
//   constructor(nombre, tipo, dps) {
//     super(nombre, tipo, dps)
//   };
//   speakType(){
//     console.log(`${this.name} is ${this.type} type`)
//   }
// }
// //prototype es como definir aun accion(fn) a un objeto
//
// //aqui unicamente se especifican los valores de los objetos creados a base del constructor
// var char = new  Pkm("fuego", "primera", "chrmndr")
// var cyn = new  Pkm("fuego", "segunda", "cyndql")
// var chk = new  Pkm("planta", "segunda", "chkrt")
//
// var war = new  warrior("eleas", "guerrero", "100")
// var mage = new  warrior("phinis", "mago", "140")
// var tief = new  warrior("runa", "ladron", "55")

// var bryan = {nombre: "bryan",
//               apellido: "reyes",
//               edad: 23,
//               peso: 70
//             };
// var emile = {nombre: "Emlie",
//               apellido: "Valen",
//               edad: 20,
//               peso: 60
//             };
// var omar = {nombre: "Omar",
//               apellido: "Samp",
//               edad: 21,
//               peso: 62
//             };
// var erick = {nombre: "Erick",
//               apellido: "Zaavedra",
//               edad: 26,
//               peso: 75
//             };
// var people = [bryan, emile, omar, erick]
// /*map retorna un nuevo array con una fn que hayamos asignado*/
// const masViejos = personas => {
//   return{
//     ...personas,
//     edad: personas.edad *= 10
//   }
// }
// var envejecer =  people.map(masViejos)
// console.log(envejecer)
// /*map retorna un nuevo array con una fn que hayamos asignado*/



// /*Filtros*/
// const esViejo = (persona) => {
//     return persona.edad > 22
// }
// var viejos = people.filter(esViejo);
// console.log(viejos)
// /*Filtros*/

// for (var i = 0; i < people.length; i++) {
//   console.log(`${people[i].nombre} tiene ${people[i].edad} años`)
// }
// console.log(`al principio ${nombre.nombre} pesa ${nombre.peso} kilos`)
// function PUERKAPERKINS(persona){
//   return persona.peso +=200
// }  =====
// const incremento = 0.2
// const puerkaPerkins = persona =>   nombre.peso += incremento
// const gataPerkins = persona =>   nombre.peso -= incremento
// const seatasca = () => Math.random() < 0.3
// const noseatasca = () => Math.random() < 0.4
// const aqf = nombre.peso - 3
// var dias = 0
//
// while (nombre.peso > aqf) {
//   if (seatasca()) {
//     puerkaPerkins(nombre)
//   }
//   if (noseatasca()) {
//     gataPerkins(nombre)
//   }
//   dias += 1
// }
// console.log(`pasaron ${dias} hasta que ${nombre.nombre} perdio 3 kilos`)
/*switch */
// var signoZodiacal = prompt("Escriba aquí su signo zodiacal");
// switch(signoZodiacal){
//
//     case'aries':
//         alert("Trabajo y negocios: el horizonte tendrá señales favorables. Aproveche. Sus ingresos crecerán. Amor: la relación necesita un cambio pero no se anima a sugerirlo ¡Lo hará bien!.");
//     break
//
//     case'tauro':
//         alert("Trabajo y negocios: habrá estabilidad en su economía y podrá planificar metas más ambiciosas. Amor: su encanto brillará. Estará atento a las sugerencias de su pareja. Dulces vivencias.");
//     break
//
//     case'geminis':
//     case'géminis':
//         alert("Trabajo y negocios: verá con claridad las ventajas de una inversión. Ganará la confianza de gente influyente. Amor: querrá desapegarse de la pareja y divertirse con amigos; le hará bien.");
//     break
//
//     case'cancer':
//     case'cáncer':
//         alert("Trabajo y negocios: se suceden eventos que favorecen a sus intereses. Sus ganancias crecerán como nunca. Amor: seguirá su instinto en un amor a primera vista y el romance será un hecho.");
//     break
//
//     case'leo':
//         alert("Trabajo y negocios: se conduce con audacia y los logros no tardan en llegar. Los riesgos serán mínimos. Amor: se destacará por escuchar con atención y dar confianza a su pareja. Armonía.");
//     break
//
//     case'virgo':
//         alert("Trabajo y negocios: reordenará las tareas que parecen complicadas y se vuelven productivas. Amor: disfrutará hoy del crecimiento de la pareja y lo compartirá celebrando con amigos.");
//     break
//
//     case'libra':
//         alert("Trabajo y negocios: las mudanzas de casa o las reformas serán propicias hoy. Su creatividad brillará. Amor: le ataca el desapego y siente que el amor alguna vez termina. Reflexione.");
//     break
//
//     case'escorpio':
//         alert("Trabajo y negocios: toma una decisión y pone las manos a la obra. Sus negocios serán los más beneficiados. Amor: su energía parece trabada y siente que hace daño; un amigo confidente ayudará.");
//     break
//
//     case'sagitario':
//         alert("Trabajo y negocios: hoy cosechará los frutos de su esfuerzo. Lo que necesita llega y se cumple. Amor: se pondrá dramático ante una situación. Vívalo riendo y estará irresistible.");
//     break
//
//     case'capricornio':
//         alert("Trabajo y negocios: detectará manejos erróneos cuando le propongan un cambio de planes. Amor: le estimula y le atrae el aspecto misterioso que rodea a alguien de su entorno.");
//     break
//
//     case'acuario':
//         alert("Trabajo y negocios: su habilidad para obtener negocios estará al máximo. Momento para celebrar. Amor: la pareja recuperará el fuego en la intimidad luego de sinceras confesiones.");
//     break
//
//     case'piscis':
//         alert("Trabajo y negocios: las cosas parecen estar en su contra pero no todo estará mal. Llega dinero extra. Amor: dejará de lado relaciones ocasionales y optará por la dulzura de la estabilidad.");
//     break
//
//     default:
//         var signoZodiacal = prompt("Signo zodiacal incorrecto, favor escriba otro");
//         switch(signoZodiacal){
//
//             case'aries':
//                 alert("Trabajo y negocios: el horizonte tendrá señales favorables. Aproveche. Sus ingresos crecerán. Amor: la relación necesita un cambio pero no se anima a sugerirlo ¡Lo hará bien!.");
//             break
//
//             case'tauro':
//                 alert("Trabajo y negocios: habrá estabilidad en su economía y podrá planificar metas más ambiciosas. Amor: su encanto brillará. Estará atento a las sugerencias de su pareja. Dulces vivencias.");
//             break
//
//             case'geminis':
//             case'géminis':
//                 alert("Trabajo y negocios: verá con claridad las ventajas de una inversión. Ganará la confianza de gente influyente. Amor: querrá desapegarse de la pareja y divertirse con amigos; le hará bien.");
//             break
//
//             case'cancer':
//             case'cáncer':
//                 alert("Trabajo y negocios: se suceden eventos que favorecen a sus intereses. Sus ganancias crecerán como nunca. Amor: seguirá su instinto en un amor a primera vista y el romance será un hecho.");
//             break
//
//             case'leo':
//                 alert("Trabajo y negocios: se conduce con audacia y los logros no tardan en llegar. Los riesgos serán mínimos. Amor: se destacará por escuchar con atención y dar confianza a su pareja. Armonía.");
//             break
//
//             case'virgo':
//                 alert("Trabajo y negocios: reordenará las tareas que parecen complicadas y se vuelven productivas. Amor: disfrutará hoy del crecimiento de la pareja y lo compartirá celebrando con amigos.");
//             break
//
//             case'libra':
//                 alert("Trabajo y negocios: las mudanzas de casa o las reformas serán propicias hoy. Su creatividad brillará. Amor: le ataca el desapego y siente que el amor alguna vez termina. Reflexione.");
//             break
//
//             case'escorpio':
//                 alert("Trabajo y negocios: toma una decisión y pone las manos a la obra. Sus negocios serán los más beneficiados. Amor: su energía parece trabada y siente que hace daño; un amigo confidente ayudará.");
//             break
//
//             case'sagitario':
//                 alert("Trabajo y negocios: hoy cosechará los frutos de su esfuerzo. Lo que necesita llega y se cumple. Amor: se pondrá dramático ante una situación. Vívalo riendo y estará irresistible.");
//             break
//
//             case'capricornio':
//                 alert("Trabajo y negocios: detectará manejos erróneos cuando le propongan un cambio de planes. Amor: le estimula y le atrae el aspecto misterioso que rodea a alguien de su entorno.");
//             break
//
//             case'acuario':
//                 alert("Trabajo y negocios: su habilidad para obtener negocios estará al máximo. Momento para celebrar. Amor: la pareja recuperará el fuego en la intimidad luego de sinceras confesiones.");
//             break
//
//             case'piscis':
//                 alert("Trabajo y negocios: las cosas parecen estar en su contra pero no todo estará mal. Llega dinero extra. Amor: dejará de lado relaciones ocasionales y optará por la dulzura de la estabilidad.");
//             break
//
//         }
//     break
//
// }
/*switch */


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
// var persona = {
//   nombre: "luis",
//   edad: 25
// }



// function setAge( persona ){
//   var {nombre, edad} = persona
//   console.log(`me llamo ${nombre} y tengo ${edad}`)
// }
// setAge(persona)


// // expresion inicial; condicion; incremento 
// var yo = {
//   nombre: "luis",
//   dinero: 1000 
// }
// console.log(`${yo.nombre} tiene ${yo.dinero} pesos al incio`)
// const ingresos = (persona) => {persona.dinero += 200 }
// const egresos = (persona) => {persona.dinero -= 200 }
// for (i=1; i<10; i++){
//   economia =  Math.random()
//   if (economia < 0.25 ) {
//     //ingresos
//     ingresos(yo)
//   } else if (economia < 0.50) {
//     //egresos
//     egresos(yo)
//   }
// }
// console.log(`y ${yo.nombre} termino con ${yo.dinero} pesos al final`)

var persona = {
  nombre: "luis",
  dinero: 0 
}



// const incremento = 5000
// const ahorra = persona =>   persona.dinero += incremento
// const gasta = persona =>   persona.dinero -= incremento
// const paga = () => Math.random() < .25
// const cobra = () => Math.random() < .50
// const meta = 400000
// var dias = 0

// while (persona.dinero < meta) {
//   // debugger
//   if (cobra()) {
//     ahorra(persona)
//   }
//   if (paga()) {
//     gasta(persona)
//   }
//   dias += 1
// }
// console.log(`pasaron ${dias} quincenas hasta que ${persona.nombre} compro el terreno`)

// var signoZodiacal = prompt("cual es tu signo")
// switch (signoZodiacal){
//   case 'tauro':
//     alert('para tauro....')
//     break
//   case 'virgo':
//     alert('para virgo....')
//     break
//   default:
//     alert('creo que no respondite...')
//     break
// }


var bryan = {
  nombre: "bryan",
  apellido: "reyes",
  edad: 23,
  peso: 70
};
var angus = {
  nombre: "angus",
  apellido: "Valen",
  edad: 20,
  peso: 60
};
var yo = {
  nombre: "luis",
  apellido: "Valen",
  edad: 20,
  peso: 65
};

var people = [bryan, angus, yo]


// //condicion      //recibe el array
// const setMayus = persona => ({
//     //lo desglosa
//     ...persona,
//     //modifica o pisa el atributo nombre
//     nombre: persona.nombre.toUpperCase()
//     //y retorna un nuevo array con datos modificados
// })

// //manera original, usar parentesis evita doble return
// // const setMayus = persona => {
// //   return{
// //     ...persona,
// //     nombre: persona.nombre.toUpperCase()
// //   }
// // }

// const setMayus = persona => {
//     persona.nombre = persona.nombre.toUpperCase()
//     return persona
// }

// //nuevo array de = people.map(condicion)
// var peopleMys = people.map(setMayus)


//acumulador, cada una de las personas
// const  reducer =  ( acumulador,  persona ) => {
//   return acumulador + persona.peso 
// }


//   //                             reducer, valor inicial acumulador 
//   var totalKilos = people.reduce(reducer, 0)
         