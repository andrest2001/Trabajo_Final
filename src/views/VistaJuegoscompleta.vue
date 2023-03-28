<template>
  <div id="principal">
    <div v-if="games">
      <form>
        <label for="rating">Sort by rating:</label>
        <select name="rating" id="rating" @input="handleSelect">
          <option value="non" selected disabled>Select an Option</option>
          <option value="ascending" >ascending order</option>
          <option value="descending" >descending order</option>
        </select>
      </form>
      <div id="juegos">
        <div v-for="game in pageArray" :key="game.id" id="contenedor">
          <GameCard  :result="game" :genre='true'
            @click="selectGame(game.id)"/>
        </div>
        
  
      </div>
      
  
        
      </div>
        <div  class='page'>
          <p v-for="page in pageNumber" :key="page" @click="handlePage(page)" class='page-numbers'>{{page}}</p>
        </div>
      <div class="paginate">
    </div>
  </div>
</template>
  
  <script>
  import axios from 'axios'
  import GameCard from '../components/GameCard.vue'
  
    export default {
      name: 'ViewGames',
      components: {GameCard},
      data: () => ({
        games: [],
        API_KEY: '5496e25bcb454313b1ac09968d76dca4',
        sort: '',
        pageNumber: '',
        currentPage: 1,
        pageArray: [],
        lastDisplay: 0,
        currentDisplay: 8,
        displayPerPage: 8,
      }),
      mounted() {
        this.getGamesByGenre()
      },
      methods: {
        async getGamesByGenre() {
          // Get Genre Id here
          const res = await axios.get(`https://api.rawg.io/api/games?genres=${this.$route.params.genre_id}&key=${this.API_KEY}`)
  
          this.games = res.data.results
          this.pageNumber = Math.ceil(this.games.length / this.displayPerPage)
          this.pageArray = this.games.slice(0, this.displayPerPage)
  
        
        },
        handleSelect(e){
          this.sort = e.target.value
          this.sortGameByRating(this.sort)
        },
        sortGameByRating (sort) {
          if(sort === 'ascending'){
          this.games.sort((game1, game2)=> game1.rating - game2.rating)}
          else{
            this.games.sort((game1, game2)=> game2.rating - game1.rating)
          }
        },
        selectGame(gameId) {
          this.$router.push(`/details/${gameId}`)
        }
        ,
        handlePage(page){
          this.currentPage = page
          this.displayPage()
        },
        displayPage (){
          this.lastDisplay = (this.currentPage - 1) * this.displayPerPage
          this.currentDisplay = this.currentPage * this.displayPerPage
          this.pageArray = this.games.slice(this.lastDisplay, this.currentDisplay)
        }
      }
    }
  </script>

<style lang="sass" scoped>
  #principal
    font-family: 'Roboto', sans-serif
    color: white
    display: flex
    flex-direction: column
    #juegos
      width: 100%
      display: flex
      justify-content: center
      align-items: center
      flex-wrap: wrap
      #contenedor
        width: 30%
        padding-right: 40px
        padding-bottom: 20px
        padding-top: 20px
    form
      width: 100%
      display: flex
      width: 24%
      justify-content: center
      align-items: center
      label
        font-size: 18px
        padding-right: 15px
      select
        padding: .5rem
        border: none
        border-radius: 15px

    .page
      display: flex
      justify-content: center
      align-items: center
      padding-bottom: 75px
      padding-top: 75px
      p
        padding-right: 40px
        font-size: 20px
</style>