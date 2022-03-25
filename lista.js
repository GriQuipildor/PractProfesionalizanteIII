// let formulario = document.querySelector("form");
// let ul = document.querySelector("ul");
// let input = document.querySelector("input[type='text']");
// let tareas = [];

// //elimina el comportamiento por defecto, al recargar la pagina
// formulario.onsubmit = evento => {
//     evento.preventDefault();
//     //guarda la nueva tarea, el valor del input
//     tareas.push(input.value);
//     //crear el elemento "li"
//     var li = document.createElement("li");
//     ul.appendChild(li);
//     li.textContent = input.value;
//     //elimina lo que se escribio en el input para dejar en blanco e ingrar otro valor
//     input.value = null;

//     console.log(tareas);
// }

new Vue({
    el: "#app",
    data: {
        nuevaTarea: '',
        tareas:[],
    },
    methods: {
        guardarTarea(){
            this.tareas.push(this.nuevaTarea);
            this.nuevaTarea = '';
        }
    }
    
})
