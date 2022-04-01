const vm = new Vue ({
    created() {
        var url = "https://jsonplaceholder.typicode.com/users";
        fetch(url)
        .then(respuesta => respuesta.json())
            .then(respuesta => this.usuarios = respuesta)
    },
    el: "#app",
    data: {
        usuarios:[],
    },
});
Vue.config.devtools = true;