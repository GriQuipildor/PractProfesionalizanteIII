const vm = new Vue({
    // utilizar metodo del localStore y del JSON
    mounted() {
        if (window.localStorage.getItem('form'))
        this.form = JSON.parse(window.localStorage.getItem('form'));
    },
    el: "#app",
    data: {
        form: {
            nombre: '',
            apellidos: '',
            mensaje: '',
            contacto: '',
            productos: '',
            acepta: false,
        },
    },
});
// observar la propiedad form
vm.$watch('form', (nuevo, antiguo) => {
    // 
    window.localStorage.setItem('formulario',JSON.stringify(nuevo));
    // deep va a observar los cambios dentro de la propiedad internas de form
}, { deep:true })

Vue.config.devtools = true;