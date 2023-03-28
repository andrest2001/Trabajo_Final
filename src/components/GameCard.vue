<template>
    <div id="carta">
      <div>
        
        <img :src="result.background_image" alt="img">
      </div>
      <div>
        
        <h1>{{result.name}}</h1>
        <div id="metacritic">
          <h4 v-if='genre === true'>Rating: {{result.rating}}</h4>
          <img src="../assets/Metacritic.svg.png" alt="">
        </div>
        
      </div>
    </div>
  </template>
  
  <script>
    export default {
      name: 'GameCard',
      props: {
        result: Object,
        genre: Boolean,
  
      }
    }
  </script>

<style lang="sass" scoped>
  #carta
    border: 1px solid white
    border-radius: 15px
    width: 100%
    height: 47vh
    
    h1
        padding-left: 10px
    h4
      padding-left: 10px
      font-size: 20px
        
    img
        width: 100%
        height: 36vh
        border-radius: 15px 15px 0px 0px
    #metacritic
      display: flex
      h4
        padding-right: 15px
      img
        
        width: 25px
        height: 25px
</style>
  