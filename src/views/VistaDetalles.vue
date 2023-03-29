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
            </section>
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
        
</style>