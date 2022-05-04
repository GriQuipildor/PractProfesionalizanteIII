Vue.component('post', {
    props: ['post'],
    template: `<article class="post">
        <h1 class="post__titulo">{{ post.titulo}}</h1>
        <p class="post__contenido">{{ post.contenido}}</p>
        </article>`,
});

new Vue ({
    el: "#app",
    data: {
        posts: [
            {
                titulo: 'Titulo de post',
                contenido: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ad reiciendis repellendus, minus aliquid libero doloribus magnam rem ratione similique, ipsa enim adipisci in omnis. Quia dicta dolore consequatur a.'
            },
            {
                titulo: 'Nuevo titutlo de post',
                contenido: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ad reiciendis repellendus, minus aliquid libero doloribus magnam rem ratione similique, ipsa enim adipisci in omnis. Quia dicta dolore consequatur a.'
            },
            {
                titulo: 'Otro titulo',
                contenido: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
            }
        ]
    }
})