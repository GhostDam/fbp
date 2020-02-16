console.log("da wea")
const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')
const btnEmpezar = document.getElementById('btnEmpezar')
const ULTIMO_NIVEL = 4


class Juego {
  constructor() {
    this.inicializar = this.inicializar.bind(this)
    this.inicializar()
    this.generarSecuencia()
    setTimeout(this.siguienteNivel, 500)
  }
  inicializar() {
    this.siguienteNivel = this.siguienteNivel.bind(this)
    this.elegirColor = this.elegirColor.bind(this)
    this.togglebtnEmpezar()
    this.nivel = 1
    this.colores = {
      celeste,
      violeta,
      naranja,
      verde
    }
  }
  togglebtnEmpezar(){
    if (btnEmpezar.classList.contains('hide')) {
      btnEmpezar.classList.remove('hide')
    }else {
      btnEmpezar.classList.add('hide')
    }
  }
  generarSecuencia(){
    this.secuencia = new Array(ULTIMO_NIVEL).fill(0).map(n => Math.floor(Math.random()*4))
  }
  siguienteNivel(){
    this.subnivel = 0
    this.iluminarSecuencia()
    this.agregarClick()
  }
  numeroaColor(num){
    switch (num) {
      case 0:
          return 'celeste'
      case 1:
          return 'violeta'
      case 2:
          return 'naranja'
      case 3:
          return 'verde'
    }
  }
  coloraNum(color){
    switch (color) {
      case 'celeste':
          return 0
      case 'violeta':
          return 1
      case 'naranja':
          return 2
      case 'verde':
          return 3
      }
  }
  iluminarSecuencia(){
    for (let i = 0; i < this.nivel; i++) {
      const color = this.numeroaColor(this.secuencia[i])
      setTimeout(() => this.iluminarColor(color), 1000 * i)
    }
  }

  iluminarColor(color){
    this.colores[color].classList.add('light')
    setTimeout(() => this.apagarColor(color), 350)
  }

  apagarColor(color){
    this.colores[color].classList.remove('light')
  }

  agregarClick(){
      this.colores.celeste.addEventListener('click', this.elegirColor)
      this.colores.verde.addEventListener('click', this.elegirColor)
      this.colores.violeta.addEventListener('click', this.elegirColor)
      this.colores.naranja.addEventListener('click', this.elegirColor)
  }
  eliminarClicks(){
    this.colores.celeste.removeEventListener('click', this.elegirColor)
    this.colores.verde.removeEventListener('click', this.elegirColor)
    this.colores.violeta.removeEventListener('click', this.elegirColor)
    this.colores.naranja.removeEventListener('click', this.elegirColor)

  }
  elegirColor(ev){
    const nombreColor = ev.target.dataset.color
    const numeroColor = this.coloraNum(nombreColor)
    this.iluminarColor(nombreColor)
    if (numeroColor === this.secuencia[this.subnivel]) {
      this.subnivel++
      if (this.subnivel === this.nivel) {
        this.nivel++
        this.eliminarClicks()
        if (this.nivel === (ULTIMO_NIVEL +1)) {
          this.ganarJuego()
        } else{
          setTimeout(this.siguienteNivel, 1500)
          this.puntuacion();
          /*****/
          /*****/
        }
      }
    }else {
      this.perderJuego()
    }
  }
  ganarJuego(){
    swal("you ganar", "wll done", "success")
    .then(this.inicializar)
  }
  perderJuego(){
    swal("mmste", "no rifas", "error")
    .then(() => {
      this.eliminarClicks()
      this.inicializar()
    })
  }
  puntuacion(){
    let puntos = this.subnivel
    const message = document.getElementById('message')
    message.innerText = puntos;
    console.log(message) 
  }
}

function empezarJuego() {
  window.juego = new Juego()
}
