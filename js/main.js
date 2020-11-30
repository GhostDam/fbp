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
  var section = document.querySelectorAll("section")
  var link = document.querySelectorAll(".temas")
  var home = document.querySelector(".welcome")
  var goHome = document.querySelector(".icon-home")
  var mensaje = document.querySelector("#mensaje")

  section.forEach(function (sect) {
    sect.style.display = "none";
  })

  link.forEach(function (e) {
    e.addEventListener('click', ()=>{
      var anchor = e.getAttribute("href")
      var sect = document.querySelector(anchor)
      var style = window.getComputedStyle(sect);
      var color = style.backgroundColor

      section.forEach(function (sect) {
              sect.style.display = "none";
            })
      link.forEach(function (h) {
        h.style.backgroundColor = "#333333"
      })
      document.querySelector(anchor).style.display = "block";
      e.style.backgroundColor = color
      home.style.display = "none";
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
    "Hay personas que creen que por su bien escogen la cuarta via, ser bueno, hacerse bueno, darse por vencido, y la ultima, si no lo intentan, no pueden fallar"
  ]
  
  goHome.addEventListener('click', function() {
      section.forEach(function (sect) {
        sect.style.display = "none";
      })
      home.style.display = "block"
  })

  var frase = motivaciones[Math.floor(Math.random() * motivaciones.length)]
  mensaje.innerText = `"${frase}"`
})

// Microservices test
// const URL = "https://sidof.segob.gob.mx/historicoIndicadores/indicadoresHoy/";
// const HEADERS = {
//                   method: 'GET',
//                   mode :"no-cors",
//                   headers: {
//                     "Content-Type": "application/json",
//                     "X-Content-Type-Options": "nosniff"
//                     },
//                     crossDomain:true
//                 } 

// fetch(URL, HEADERS)
//     .then(function (data) {
//       console.log('Request succeeded with JSON response', data);
//     })
//     .catch(function (error) {
//       console.log('Request failed', error);
//     });


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
  filterOption.addEventListener('click', filterTodo)
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
  function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function (todo) {
      switch (e.target.value) {
        case "all":
                todo.style.display = "flex"
          break;
        case "completed":
            if (todo.classList.contains('completed')) {
              todo.style.display = "flex"
            }else{
              todo.style.display = "none"
            }
          break;
        case "uncompleted":
            if (!todo.classList.contains('completed')) {
              todo.style.display = "flex"
            }else{
              todo.style.display = "none"
            }
          break;
      }
    })
  }

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
})
