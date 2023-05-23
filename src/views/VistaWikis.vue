<template>
    <section id="principal">
        <div class="wiki">
            <section v-if='gameDetails' class="image-container">
                <div id="imagen">
                    <img :src="gameDetails.background_image" alt="img">
                </div>
            </section>
            <section v-if="gameDetails" class="details">

                <div id="texto">
                    <h3>{{gameDetails.name}} Wiki</h3>
                </div>
                <div id="posts">
                    <h1>Post de Bienvenida de Community Games</h1>
                    <h4>Aquí podrás encontrar las principales ayudas de otros usuarios de {{ gameDetails.name }}</h4>
                    <p>Se ruega respeto y seguir las normas de moderación, si no tus comentarios serán eliminados por un administrador y su cuenta será suspendida.
                    ¡Bienvenido/a!
                    </p>
                </div>
                <div id="posts_usuarios">
                    <h1></h1>
                    <h4></h4>
                    <img src="#" alt="">
                    <p></p>
                </div>
            </section>
        </div>
        <div id="botones">
            <button>Agregar post</button>
        </div>
        
    </section>
</template>
  
<script>
  import axios from 'axios'
    export default {
      name: 'VistaDetalles',
      data: () => ({
        API_KEY: '5496e25bcb454313b1ac09968d76dca4',
        gameDetails: null,

      }),
      mounted() {this.getVistaDetalles(), this.getSubreddit()},
      methods: {
        async getVistaDetalles() {
          // Get game id from router here
          const res = await axios.get(`https://api.rawg.io/api/games/${this.$route.params.game_id}?key=${this.API_KEY}`)
          this.gameDetails = res.data
   
        },
        async getSubreddit() {
          const res = await axios.get(`https://api.rawg.io/api/games/${this.$route.params.game_id}/reddit?key=${this.API_KEY}`) 
          this.reddit = res.data.results
        }
      }
    }
</script>

<style lang="sass" scoped>
    #principal
        font-family: 'Roboto', sans-serif
        color: white
        display: flex
        justify-content: center
        align-items: center
        flex-direction: column
        .wiki
            width: 80%
            border: 1px solid white
            border-radius: 15px
            display: flex
            justify-content: center
            align-items: center
            flex-direction: column
            #imagen
                display: flex
                justify-content: center
                align-items: center
                padding-top: 30px
                padding-bottom: 30px
                img
                    width: 33%

    #botones
        padding-top: 30px
        button
            padding: 1rem
            background: orange
            color: white
            border-radius: 15px
    .details
        width: 100%
        display: flex
        flex-direction: column
        justify-content: center
        align-items: center
        padding-bottom: 20px
    #posts
        width: 85%
        display: flex
        justify-content: center
        padding-bottom: 20px
        flex-direction: column
        border: 1px solid white
        border-radius: 15px
        padding: 1rem
        h1
            text-decoration: underline
        h1,h4,p
            padding: 10px
        
</style>