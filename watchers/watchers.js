new Vue({
    el: "#app",
    data: {
        password: null,
        estado: "Introduce nueva contraseña",
        novalidos:[
            "admin",
            "12345",
            "password"
        ],
    },
    watch: {
        password(nuevo, antiguo){
            //indexOf retorna el primer índice en el que se puede encontrar un elemento dado en el array, ó retorna -1 si el elemento no esta presente.

                //que no forme parte de los password invalidos
            if (this.novalidos.indexOf(nuevo) > -1) {
                this.estado = "Contraseña no válida";
                return false;
            }
                //que los caracteres sean mayores a 5
            if (nuevo.length < 5) {
                this.estado = "La contraseña debe tener al menos 5 caracteres ";
                return false;
            }

            this.estado = "Contraseña correcta";
        }
    }
})
    Vue.config.devtools = true;
