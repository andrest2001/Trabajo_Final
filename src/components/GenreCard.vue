<template>
    <div id="carta">
      <div>
        <img v-bind:src="genre.image_background" alt="img">
      </div>
  
      <div>
        <h1>{{ genre.name }}</h1>
        
      </div>
    </div>
  </template>
    
  <script>
      export default {
        name: 'GenreCard',
        props: {
          genre: Object,
        }
      }
  </script>

<style lang="sass" scoped>
    #carta
        border: 1px solid white
        border-radius: 15px
        width: 100%
        height: 40vh        
        h1
            padding-left: 10px
        
    img
        width: 100%
        height: 36vh
        border-radius: 15px 15px 0px 0px
        
</style>