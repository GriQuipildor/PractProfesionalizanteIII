const app = new Vue({
    el: "#app",
    data: {
        enlace : "http://www.vuejs.org",
        baseUrl: "https://placekitten.com/",
        ancho: 50,
        alto: 50,
    },
    computed: {
        urlCompleta() {
            return `${this.baseUrl}/${this.ancho *3}/${this.alto *3}`
        }
    }
});
Vue.config.devtools = true;