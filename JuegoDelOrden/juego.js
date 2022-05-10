new Vue ({
    created() {
        this.BuscarUsuarios();
    },
    el: "#juego",
    data: {
        usuarios:[],
        lista:[],
        usuariosOrdenados:[],
        cartelIncorrecto: false,
        cartelCorrecto: false,
        juegoSinIniciar: true,
    },
    methods: {
        Ordenar: function (elemento, evento) {
            if (elemento == this.usuariosOrdenados[this.lista.length]) {
                // console.log('esto es verde');
                evento.target.classList.add("correcto");
                this.lista.push(elemento);

                if (this.lista.length == this.usuariosOrdenados.length) {
                    // alert('bien');
                    this.cartelCorrecto = true;
                }
            }else{
                // console.log('esto es rojo');
                // evento.target.classList.add("incorrecto");
                this.cartelIncorrecto = true;
                //setTimeout llama a la funcion despues de ciertos milisegundos 1seg = 1000ms
                setTimeout(this.RestaurarBoton, 1500);
            }
        },
        // SortArray ordena alfabeticamente los usuarios
        SortArray: function (x, y){
            return x.localeCompare(y);
        },

        RestaurarBoton: function () {
            this.cartelIncorrecto = false;
        },

        SortArrayDos: function (a, b){
            return Math.random() - 0.5;
        },
        
        ReiniciarJuego: function () {
            this.lista = [];
            this.cartelCorrecto = false;
            this.usuarios = [];
            this.BuscarUsuarios();
            this.reiniciar = false;
        },

        BuscarUsuarios: function () {
            var url = "https://jsonplaceholder.typicode.com/users";
            fetch(url)
            .then(respuesta => respuesta.json())
                .then(respuestaJson => {
                    //
                    this.usuarios = respuestaJson.map(function(elemento){
                        return elemento.name;
                    });
                    this.usuariosOrdenados = this.usuarios.slice();
                    this.usuariosOrdenados = this.usuariosOrdenados.sort(this.SortArray);

                    this.usuarios = this.usuarios.sort(this.SortArrayDos);
                });
        },
        IniciarJuego: function () {
            this.juegoSinIniciar = false;
        },

        CerrarCartelExito: function () {
            this.cartelCorrecto = false;
        }
    }
});

Vue.config.devtools = true;