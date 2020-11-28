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
  $("#sect17").show();  

});
// *codigo de clase*//

// JQ replace
// document.addEventListener("DOMContentLoaded", function(){
//   var section = document.querySelectorAll("section")
//   var h4 = document.querySelectorAll("h4")

//   for (let i = 0; i < h4.length; i++) {
//     h4[i].addEventListener('click', function(){
//         var anchor = this.getAttribute("href")

//         document.querySelector("section").style.display = "none";
//         document.querySelector(anchor).style.display = "block";
//         console.log(anchor)
//       }) 
//  }

//   for (let i = 0; i < section.length; i++) {
//     section[i].style.display = "none"; 
//   }
//   // var warmup = document.querySelector('.warmup').children
//   // for (let i = 0; i < warmup.length; i++) {
//   //   console.log(warmup[i].innerHTML)    
//   // }
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
							// .then(registration => console.log('serviceWorker registrado ', registration))
							.catch(err => console.log('No se ha podido regsitrar el serviceWorker', err));

}else{
	console.log('No tienes acceso a los serviceWorker en tu navegador');
}

// // Microservices test
// const URL = "https://sidof.segob.gob.mx/historicoIndicadores/indicadoresHoy/";
// const HEADERS = {
//                   method: 'GET',
//                   mode :"no-cors",
//                   headers: {
//                     "Content-Type": "application/json",
//                     "X-Content-Type-Options": "nosniff"
//                     }                  
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
    completedButton.innerText = "/"
    completedButton.classList.add('complete-btn')
    todoDiv.appendChild(completedButton)
    //trash button
    const trashButton = document.createElement('button')
    trashButton.innerText = "x"
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
        completedButton.innerText = "/"
        completedButton.classList.add('complete-btn')
        todoDiv.appendChild(completedButton)
        //trash button
        const trashButton = document.createElement('button')
        trashButton.innerText = "x"
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