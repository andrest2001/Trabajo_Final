<template>
    <section id="principal">
        <div class="game-content">
            <section v-if='gameDetails' class="image-container">
                <div id="imagen">
                <img :src="gameDetails.background_image" alt="img">
                </div>
            </section>
            <section v-if="gameDetails" class="details">

                <div id="texto">
                    <h3>{{gameDetails.name}}</h3>
                    <p>{{gameDetails.description_raw}}</p>
                    
                </div>
                <div id="wikis">
                    <h3>Comentarios</h3>
                    <div v-for="comentario in comentarios" :key="comentario.id">
                        <h4>{{ comentario.autor }}</h4>
                        <p>{{ comentario.contenido }}</p>
                        <p>{{ comentario.fecha }}</p>
                    </div>
                    <form @submit.prevent="agregarComentario">

                        <div>
                            <label>Contenido:</label>
                            <textarea v-model="nuevoComentario.contenido" required></textarea>
                        </div>
                        <button type="submit">Enviar Comentario</button>
                    </form>
                </div>
                
            </section>
        </div>
        
    </section>
  </template>
  
<script>


import axios from 'axios'
    export default {
    name: "VistaDetalles",
    data: () => ({
        API_KEY: "5496e25bcb454313b1ac09968d76dca4",
        gameDetails: null,
        comentarios: [],
        nuevoComentario: {
            
            contenido: ''
      },
      loggedIn: false,
      usuario: null
    }),
    mounted() { this.getVistaDetalles(), this.getSubreddit(); this.obtenerComentarios(); this.verificarSesion},
    methods: {
        async getVistaDetalles() {
            // Get game id from router here
            const res = await axios.get(`https://api.rawg.io/api/games/${this.$route.params.game_id}?key=${this.API_KEY}`);
            this.gameDetails = res.data;
        },
        async getSubreddit() {
            const res = await axios.get(`https://api.rawg.io/api/games/${this.$route.params.game_id}/reddit?key=${this.API_KEY}`);
            this.reddit = res.data.results;
        },
        selectWiki(gameId) {
            this.$router.push(`/wikis/${gameId}`);
        },
        async obtenerComentarios() {
            const res = await axios.get('http://localhost:3001/comentarios');
            this.comentarios = res.data;
        },
        async agregarComentario() {
      // Enviar nuevo comentario al servidor
            const comentario = {
                contenido: this.nuevoComentario.contenido
            };

            try {
                const res = await axios.post('http://localhost:3001/comentarios', comentario);
                console.log(res.data.message);
                this.obtenerComentarios();
                this.nuevoComentario.contenido = '';
            } catch (error) {
                console.error('Error al enviar el comentario:', error);
            },
            verificarSesion() {
      // Verificar si el usuario está logeado
      const user = localStorage.getItem('user');

      if (user) {
        this.loggedIn = true;
        this.usuario = JSON.parse(user);
      }
    }} }


</script>

<style lang="sass" scoped>
    #principal
        height: 90vh
        width: 100%
        display: flex
        justify-content: center
        align-items: center
        font-family: 'Roboto', sans-serif
    .game-content
        color: white
        height: 70vh
        display: flex
        justify-content: center
        align-items: center
        flex-direction: column
        border: 1px solid white
        border-radius: 15px
        width: 70%
        

    #imagen
        width: 100%
        display: flex
        justify-content: center
        align-items: center
        padding-bottom: 2rem
        img
            width: 50%

    #texto
        padding: 1rem
    #wikis
        width: 100%
        display: flex
        justify-content: center
        align-items: center
        a
            color: white
            width: 20%
            text-decoration: none
            display: flex
            justify-content: center
            align-items: center
            background-color: orange
            padding: 1rem
            border-radius: 15px
            border: none
        
</style>
