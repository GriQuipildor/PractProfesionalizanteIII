new Vue ({
    el:'#app',
    data: {
        logged: true,
        mensajes: {
            in: "Logeado como @gri.",
            out: "Te has desconectado."
        },
    },
    computed: {
        mensaje() {
            return this.logged ? this.mensajes.in : this.mensajes.out;
        },
        estilos() {
            // return {
            //     'logged-in': this.logged,
            //     'logged-out': !this.logged,
            // }
                // es mismo que el de arriba
            // return this.logged ? 'logged-in' : 'logged-out';
                // es mismo que el de arriba
            return `logged-${this.logged ? 'in' : 'out'}`

        }
    }
})
Vue.config.devtools = true;