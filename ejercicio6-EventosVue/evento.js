    // Modo tradicional
// window.onload = () => {
//     const form = document.querySelector("form");
//     const input = document.querySelector("input[type=text]");
//     form.onsubmit = (evento) => {
//         evento.preventDefault();
//         app.tareas.unshift({
//             nombre:input.value,
//             tiempo: 10,
//         });
//         //limpiar el input despues de añadir texto
//         input.value = null;
//     }
// };

    //Vue
const app = new Vue({
    el: "#app",
    data: {
        nuevaTarea: '',
        tiempo: 0,
        busqueda:'',
        usuario: {
            username: 'griselda',
            role: 'admin'
        },
        tareas: [
            {nombre: 'Aprender JavaScript', tiempo: 3},
            {nombre: 'Aprender Vue.js', tiempo: 7},
            {nombre: 'Reparar el coche', tiempo: 22},
            {nombre: 'Viajar más', tiempo: 16},
            {nombre: 'Comprar la cena', tiempo: 12},
            {nombre: 'Mejorar como desarrollador', tiempo: 9},
        ]            
        },
        methods:{
            guardarTarea(){
                //
                this.tareas.unshift({
                    nombre: this.nuevaTarea,
                        //Math.random devulve un numero entre cero y uno, pero 1 no incluido ej:0,9

                        //Devuelve el máximo entero menor o igual a un número. ej: 5.95 me muestra 5 
                        // lo multiplico para que como mucho llegue a 100 min (entre 0 y 100)
                    tiempo: Math.floor(Math.random() * 100),
                });
                //limpiar el input despues de añadir texto
                this.nuevaTarea = null;
            }
        },

        computed: {
            filtroTareas() {
                return this.tareas.filter(tarea => {
                    return tarea.tiempo <= this.tiempo && tarea.nombre.includes(this.busqueda);
                })
            }
        }
})