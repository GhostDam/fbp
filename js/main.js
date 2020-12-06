//*Service worker
if('serviceWorker' in navigator){
	navigator.serviceWorker.register('sw.js')
							// .then(registration => console.log('serviceWorker registrado ', registration))
							.catch(err => console.log('No se ha podido regsitrar el serviceWorker', err));

}else{
	console.log('No tienes acceso a los serviceWorker en tu navegador');
}

//* Navegacion de pestañas
document.addEventListener("DOMContentLoaded", function(){
    if(navigator.onLine) {
        var reload = document.querySelector(".icon-home")
        reload.addEventListener('click', function(){
            window.location.reload(true)
          })
    }
  //selectores
  var link = document.querySelectorAll(".temas")
  var secciones = document.querySelectorAll("section")
  var home = document.querySelector(".welcome")
  var goHome = document.querySelector(".icon-home")
  var mensaje = document.querySelector("#mensaje")


  //funciones
  function hideAll() {
    secciones.forEach(function (sect) {
      sect.style.display = "none";
    })    
  }

  function listarTemas(div) {
    //var seccion =  div
    var temas =  div.querySelectorAll('h3')
    //crear Div con clase
    const lista_temas = document.createElement('div')
    lista_temas.classList.add('listado_temas')

    if (!div.querySelector('.listado_temas')) {
      div.appendChild(lista_temas)
    }
     temas.forEach(function (tema) {
      var id = tema.parentElement.getAttribute('id')
      var enlace = document.createElement('a')

      enlace.innerText = tema.innerText;
      enlace.setAttribute("href", `#${id}`)
      lista_temas.appendChild(enlace)
    })

    var enlace = div.querySelectorAll('a')

    enlace.forEach(function (e) {
      e.addEventListener('click', ()=>{
        var style = window.getComputedStyle(div);
        var color = style.backgroundColor
          
        enlace.forEach(function (h) {
          h.style.backgroundColor = "lightslategrey"
        })
          e.style.backgroundColor = color
      })
    })


    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.querySelector('.listado_temas').style.bottom = "3rem";
      } else {
        document.querySelector('.listado_temas').style.bottom = "0";
      }
      prevScrollpos = currentScrollPos;
    }


  }

  
  link.forEach(function (e) {
    e.addEventListener('click', ()=>{
      hideAll()

      var anchor = e.getAttribute("href")
      var sect = document.querySelector(anchor)
      var style = window.getComputedStyle(sect);
      var color = style.backgroundColor

      link.forEach(function (h) {
        h.style.backgroundColor = "#333333"
      })

      sect.style.display = "flex";
      e.style.backgroundColor = color
      home.style.display = "none";

      listarTemas(sect)
    })
  })

  //animacion buscador
  const input = document.querySelector('#searcher')
  function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add('focus')
  }

  function blurFunc() {
    let parent = this.parentNode;
      parent.classList.remove('focus')
      this.value = "";
    }
  input.addEventListener('focus', focusFunc)
  input.addEventListener('blur', blurFunc)


  //frases
  const motivaciones = [
    "Todos los grandes desarrolladores llegaron ahi resolviendo problemas que no estaban calificados para resolver, hasta que en realidad lo hicieron",
    "No hables mal de ti mismo, porque el guerrero que esta dentro de ti escuchará tus palabras y se debilitara por ellas",
    "Jiujitsu: The gentle art of folding clothes while people are still in them, Involuntary yoga",
    "No man has te right to be an amateur in the matter of physical training. It is a shame for man to grow old without seeing the beauty and strength of which his body is capable.... -Socrates",
    "Taijutsu: The art of gracefully letting your oponent to hurt himself.",
    "Hay personas que creen que por su bien escogen la cuarta via, ser bueno, hacerse bueno, darse por vencido, y la ultima, si no lo intentan, no pueden fallar",
    "Carl Friedrich Gauss estaba en la primaria cuando se le asigno un problema a su clase, sumar los numeros del 1 al 100 (1+2+3...) el solo sumo 100 + 1 = 101, 99 + 2 = 101, 3 + 98 = 101... asi que 50 x 101 = 5050"
  ]
  
  goHome.addEventListener('click', function() {
    secciones.forEach(function (sect) {
        sect.style.display = "none";
      })
      home.style.display = "block"
  })

  var frase = motivaciones[Math.floor(Math.random() * motivaciones.length)]
  mensaje.innerText = `"${frase}"`


  hideAll()
})


// // ToDo Class
document.addEventListener("DOMContentLoaded", function () {
  //Selectors
  const todoInput = document.querySelector('.todo-input')
  const todoButton = document.querySelector('.todo-button')
  const todoList = document.querySelector('.todo-list')
  const filterOption = document.querySelector('.filter-todo')
  //Event listeners
  todoButton.addEventListener('click', addTodo)
  todoList.addEventListener('click', deleteCheck)
  // filterOption.addEventListener('click', filterTodo)
  //Functions
  function addTodo(e) {
    e.preventDefault()
    //crear Div
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')
    //crear li
    const newTodo = document.createElement('li')
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item')
    todoDiv.appendChild(newTodo)

    //Add TODO to local storage
    saveLocalTodos(todoInput.value)

    //check mark button
    const completedButton = document.createElement('button')
    completedButton.innerHTML = "<div class='icon-check'></div>"
    completedButton.classList.add('complete-btn')
    todoDiv.appendChild(completedButton)
    //trash button
    const trashButton = document.createElement('button')
    trashButton.innerHTML = "<div class='icon-trash'></div>"
    trashButton.classList.add('trash-btn')
    todoDiv.appendChild(trashButton)
    //apend to list
    todoList.appendChild(todoDiv)
    //clear todo input
    todoInput.value = ""
  }

  function deleteCheck(e) {
    const item =  e.target
    //delete
    if (item.classList[0] === "trash-btn") {
      const ToDo = item.parentElement;
      //animate
      ToDo.classList.add('fall')
      //remove index
      removeLocalTodos(ToDo)
      ToDo.addEventListener('transitionend', () =>{ 
        ToDo.remove()
      })
    }
    //check
    if (item.classList[0] === "complete-btn") {
      const ToDo = item.parentElement;
      ToDo.classList.toggle('completed')
    }
  }

  //filtro
  // function filterTodo(e) {
  //   const todos = todoList.childNodes;
  //   todos.forEach(function (todo) {
  //     switch (e.target.value) {
  //       case "all":
  //               todo.style.display = "flex"
  //         break;
  //       case "completed":
  //           if (todo.classList.contains('completed')) {
  //             todo.style.display = "flex"
  //           }else{
  //             todo.style.display = "none"
  //           }
  //         break;
  //       case "uncompleted":
  //           if (!todo.classList.contains('completed')) {
  //             todo.style.display = "flex"
  //           }else{
  //             todo.style.display = "none"
  //           }
  //         break;
  //     }
  //   })
  // }

  //save to local
  function saveLocalTodos(todo) {
      //buscare si tengo todos
      let todos;
      if (localStorage.getItem('todos')===null) {
        //si no tengo, creo el archivo
        todos = []
      }else{
        //si tengo, cargo las tareas al archivo
        todos = JSON.parse(localStorage.getItem('todos'))
      }

      //y si tengo, solo voy a guardar la tarea en archivo
      todos.push(todo)
      //y se guarda todo de nuevo
      localStorage.setItem('todos', JSON.stringify(todos))
  }

  //get todos
  function getTodos() {
    //buscare si tengo todos
    let todos;
    if (localStorage.getItem('todos')===null) {
      //si no tengo, creo el archivo
      todos = []
    }else{
      //si tengo, cargo las tareas al archivo
      todos = JSON.parse(localStorage.getItem('todos'))
    }
    todos.forEach(function (todo) {
        //crear Div
        const todoDiv = document.createElement('div')
        todoDiv.classList.add('todo')
        //crear li
        const newTodo = document.createElement('li')
        newTodo.innerText = todo;
        newTodo.classList.add('todo-item')
        todoDiv.appendChild(newTodo)
        //check mark button
        const completedButton = document.createElement('button')
        completedButton.innerHTML = "<div class='icon-check'></div>"
        completedButton.classList.add('complete-btn')
        todoDiv.appendChild(completedButton)
        //trash button
        const trashButton = document.createElement('button')
        trashButton.innerHTML = "<div class='icon-trash'></div>"
        trashButton.classList.add('trash-btn')
        todoDiv.appendChild(trashButton)
        //apend to list
        todoList.appendChild(todoDiv)

    })
  }  

  //remove todos
  function removeLocalTodos(todo) {
    let todos;
    if (localStorage.getItem('todos')===null) {
      //si no tengo, creo el archivo
      todos = []
    }else{
      //si tengo, cargo las tareas al archivo
      todos = JSON.parse(localStorage.getItem('todos'))
    }
    //el todo, es todo el div, asi que la expresion e abajo
    //es para navegar hasta el texto, asi que buscaremos
    //su indice en el array en base al texto
    //indexOf('texto')
    const todoIndex = todo.children[0].innerText
          //que vamos a borrar, cuantas veces
    todos.splice(todos.indexOf(todoIndex), 1)
    //y regresamos la info al array de local storage
    localStorage.setItem('todos', JSON.stringify(todos))
  }
  getTodos()

  //estilizar input
  const inputs = document.querySelectorAll('.input')

  function focusFunc() {
    let parent = this.parentNode.parentNode;
    parent.classList.add('focus')
  }

  function blurFunc(params) {
    let parent = this.parentNode.parentNode;
    if (this.value=="") {
      parent.classList.remove('focus')
    }
  }

  inputs.forEach(input => {
    input.addEventListener('focus', focusFunc)
    input.addEventListener('blur', blurFunc)
  });



})
