<template>
    <section id="principal">
      <div class="game-content">
        <section v-if="gameDetails" class="image-container">
          <div id="imagen">
            <img :src="gameDetails.background_image" alt="img">
          </div>
        </section>
        <section v-if="gameDetails" class="details">
          <div id="texto">
            <h3>{{ gameDetails.name }}</h3>
            <p>{{ gameDetails.description_raw }}</p>
          </div>
          <div id="wikis">
            <!-- Formulario para escribir un comentario -->
            <form @submit="submitComment">
              <textarea v-model="commentContent" placeholder="Escribe tu comentario"></textarea>
              <button type="submit">Enviar comentario</button>
            </form>
            <!-- Mostrar comentarios existentes -->
            <div v-for="comment in comments" :key="comment.id" class="comment">
              <p class="username">{{ comment.nombre }}</p>
              <p>{{ comment.contenido }}</p>
              <p class="timestamp">{{ comment.fecha_creacion }}</p>
            </div>
          </div>
        </section>
      </div>
    </section>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'VistaDetalles',
    data() {
      return {
        API_KEY: '5496e25bcb454313b1ac09968d76dca4',
        gameDetails: null,
        commentContent: '',
        comments: [],
      };
    },
    mounted() {
      this.getVistaDetalles();
      this.getComments();
    },
    methods: {
      async getVistaDetalles() {
        // Obtener detalles del juego desde la API
        const res = await axios.get(
          `https://api.rawg.io/api/games/${this.$route.params.game_id}?key=${this.API_KEY}`
        );
        this.gameDetails = res.data;
      },
      async getComments() {
        const gameId = this.$route.params.game_id;
        const res = await axios.get(`http://localhost:3001/comentarios/${gameId}`);
        this.comments = res.data;
      },
      async submitComment(event) {
        event.preventDefault();

        // Obtener el usuario actual (puedes obtenerlo desde la sesión o de alguna otra manera)
        const usuarioId = 1; // Por ejemplo, asumamos que el usuario actual tiene un ID de 1

        // Obtener el game_id desde la ruta
        const gameId = this.$route.params.game_id;

        // Enviar el comentario al servidor
        await axios.post('http://localhost:3001/comentarios', {
          usuario_id: usuarioId,
          game_id: gameId, // Agregar el game_id al objeto enviado al servidor
          contenido: this.commentContent,
        });

        // Limpiar el contenido del comentario y actualizar la lista de comentarios
        this.commentContent = '';
        this.getComments();
      },
    },
  };
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

    @media(max-width: 768px)
        #principal
            height: 130vh
            .game-content
                height: 120vh
                .image-container
                    #imagen
                        img
                            width:70%
                            margin-top: 68px
                .details
                    #texto
                        height: 100vh
                        p
                            font-size: 10px
        
</style>
