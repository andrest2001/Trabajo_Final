<template>
<div id="principal">
    <div class="search">

      <form @submit="getSearchResults">
        <input placeholder="Buscar Juegos" type="search" value='' @input="handleChange"/>
        <button>Buscar</button>
      </form>

      <section class="search-results container-grid" id="busqueda">
        <div v-for="(result, index) in searchResults" :key="result.id" id="busqueda_juegos">
          <div id="cartita">
            <GameCard v-if="index >= lastDisplay && index < currentDisplay" :result="result" @click="selectGame(result.id)" :genre="false"/>
          </div>
          
        </div>
      </section>
    </div>

    <div v-if="searched === false" class="genres" id="generos">
      <h2>Géneros</h2>
      <section id="juegos">
        <div v-for="(genre, index) in genres" :key="genre.id" id="div_carta">
          <GenreCard v-if="index >= lastDisplay && index < currentDisplay" v-bind:genre="genre" @click="selectGenre(genre.id)" />
        </div>
      </section>
    </div>
    <div class='pagination'>
      <p v-for="page in pageNumber" :key="page" @click='handlePage(page)'>{{page}}</p>
    </div>
  </div>



</template>

<script>
import GameCard from '@/components/GameCard.vue'

import axios from 'axios'
import GenreCard from '../components/GenreCard.vue'

  export default {
    name: 'HomePage',
    components:{
    GenreCard,
    GameCard,
    
},
    data: () => ({
      API_KEY: '5496e25bcb454313b1ac09968d76dca4',
      windowWidth: window.innerWidth,
      genres: [],
      searchQuery: '',
      searchResults: [],
      searched: false,
      pageNumber: '',
      currentPage: 1,
      lastDisplay: 0,
      currentDisplay: 3,
      numberOfDisplay: 3,
      pageArray: []
    }),
    mounted() {
      this.getGenres()
    },
    methods: {
      async getGenres() {
        const res = await axios.get(`https://api.rawg.io/api/genres?key=${this.API_KEY}`)
        this.genres = res.data.results
        this.pageNumber = Math.ceil(this.genres.length / this.numberOfDisplay)
      },
      
      async getSearchResults(e) {
        e.preventDefault()
        const res = await axios.get(`https://api.rawg.io/api/games?key=${this.API_KEY}&search=${this.searchQuery}`)
        this.searchResults = res.data.results
        this.searched = true
      },
      handleChange(event) {
        this.searchQuery = event.target.value
      },
      selectGame(gameId) {
        this.$router.push(`/details/${gameId}`)
      },
      selectGenre(genreId){
        this.$router.push(`/games/${genreId}`)
      },
      handlePage(page){
        this.currentPage = page
        this.displayPage()
      },
      displayPage (){
        this.lastDisplay = (this.currentPage - 1) * this.numberOfDisplay
        this.currentDisplay = this.currentPage * this.numberOfDisplay
      },
    }
  }

    

</script>

<style lang="sass" scoped>
    #principal
        font-family: 'Roboto', sans-serif
        color: white
        display: flex
        flex-direction: column
        height: 100vh

    .pagination
      display: flex
      justify-content: center
      align-items: center
      margin-bottom: 500px
      cursor: pointer
      p
        padding-right: 40px
        font-size: 20px
        &.router-link-exact-active 
          font-weight: bold
    .search
      display: flex
      flex-direction: column
      justify-content: center
      align-items: center
      margin-right: 20px
      width: 100%
      #busqueda
        
        width: 100%
        display: flex
        flex-direction: row
        justify-content: center
        align-items: center
        flex-wrap: wrap
        #busqueda_juegos
          width: 30%
          padding-right: 40px
          padding-bottom: 20px
          padding-top: 20px
      input
        border: none
        background: white
        border-radius: 15px
        padding: 1.5rem
        width: 100%
        
        font-style: italic
      button
        border: none
        color: white
        background: orange
        border-radius: 15px
        padding: 1.5rem
        width: 40%
        font-style: italic
    #div_carta
      width: 30%
      margin-top: 30px
      padding-right: 40px
      padding-bottom: 40px


    #generos
      width: 100%
      margin-top: 20px
      
      h2
        padding-left: 95px
        padding-bottom: 20px

    #juegos
      width: 100%
      display: flex
      justify-content: center
      align-items: center
      flex-wrap: wrap

    form
      display: flex
      width: 50%
      justify-content: center
      align-items: center
      input
        margin-right: 15px
        padding: 1rem

  @media (max-width: 768px)
    #principal
        height: 100vh
        padding-bottom: 20px
        width: 100%
        #generos
          h2
            padding-left: 20px
            padding-bottom: 10px
          #juegos
            width: 100%
            display: flex
            align-items: center
            justify-content: center
            flex-direction: column
            #div_carta
              width: 65%
        .pagination
          margin-bottom: 200px
          p
            font-size: 16px


    

    .search
      margin-right: 0
      margin-top: 15px
      form
        display: flex
        justify-content: center
        align-items: center
        flex-direction: row
        width: 100%
        
        input
          margin-right: 20px
          margin-bottom: 15px
          margin-left: 15px
          width: 80%
          margin-top: 15px

        button
          width: 30%
          margin-right: 20px
          
        

        

        #busqueda
          #busqueda_juegos
            width: 100%
            padding-right: 0

        

       
      
</style>