new Vue({
    el: "#app",
    data: {
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
        computed: {
            filtroTareas() {
                return this.tareas.filter(tarea => {
                    return tarea.tiempo <= this.tiempo && tarea.nombre.includes(this.busqueda);
                })
            }
        }
})