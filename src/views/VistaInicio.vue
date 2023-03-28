<template>
  <section id="principal">
    
    <div id="descripcion">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime id ducimus quos! Enim, nostrum voluptates. Aliquid nesciunt voluptatem cumque unde minima adipisci sunt corporis, obcaecati, iusto repellendus nemo, nostrum reiciendis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam non ea accusamus, pariatur ducimus repudiandae rem mollitia impedit sit vel consequuntur quas, debitis aut harum corrupti quis? Fugit, rem maxime.
      </p>
    </div>
    <div id="cubos">
      <div id="juegos">
        <router-link to="./juegos">
          <h1>All Games</h1>
          <img src="../assets/mdi_controller.png" alt="">
        </router-link>
      </div>
      <div id="wikis">
        <router-link to="./VistaLogin.vue">
          <h1>Wikis</h1>
          <img src="../assets/Vector.png" alt="">
        </router-link>
        
      </div>
      <div id="foros">
        <h1>Foros</h1>
        <img src="../assets/maki_art-gallery.png" alt="">
      </div>
      <div id="tendencias">
        <h1>Tendencias</h1>
        <img src="../assets/mdi_fire.png" alt="">
      </div>
      
    </div>
    
    <div id="titulo_bloques">
        <h1>LAST UPLOADS</h1>
    </div>
    <div id="bloque2">
      
      
      <div id="bloques">
        <img src="../assets/atomic_heart.jpg" alt="">
        <div id="descripcion_bloque">
          <h1>GUÍA BÁSICA DE ATOMIC HEART</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, provident repellat saepe at iste animi esse sint quo, velit consequuntur, assumenda earum ullam error voluptas delectus nam dolorum illum ex.</p>
        </div>
      </div>
    </div>

    <div id="bloque2">
      
      
      <div id="bloques">
        <img src="../assets/the-last-of-us.jpg" alt="">
        <div id="descripcion_bloque">
          <h1>GUÍA BÁSICA THE LAST OF US</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, provident repellat saepe at iste animi esse sint quo, velit consequuntur, assumenda earum ullam error voluptas delectus nam dolorum illum ex.</p>
        </div>
      </div>
    </div>
    

    <footer>
      <div id="izquierda_f">
        <div id="social">
          <p id="negrita">Social</p>
          <p>Twitter</p>
          <p>Instagram</p>
          <p>Twitch</p>
        </div>
        <div id="informacion">
          <p id="negrita">Información</p>
          <p>Contáctanos</p>
          <p>Política de privacidad</p>
          <p>xd</p>
        </div>
      </div>
      <div id="derecha_f">
          <p>© 2011-2022 Andrés Toledano. All Rights Reserved.</p>
      </div>
    </footer>
  </section>

  <router-view/>
</template>

<script>

export default {
  
  name: 'VistaInicio',


}
</script>


<style lang="sass" scoped>
  #principal
    font-family: 'Roboto', sans-serif
    color: white
    display: flex
    justify-content: center
    align-items: center
    width: 100%
    display: flex
    flex-direction: column

    
    p
      font-size: 20px
      
    #descripcion
      
      padding-top: 3rem
      width: 70%
      p
        font-size: 25px
    #cubos
      display: flex
      justify-content: center
      align-items: center
      margin-top: 20px
      text-align: center
      #wikis, #foros, #tendencias, #juegos
        border: 1px solid white
        padding: 3rem
        border-radius: 15px
        background-color: orange
        width: 20%
        height: 100%
        text-align: center
        margin-right: 20px
        width: 220px
        height: 210px
        text-decoration: none
        a
          text-decoration: none
        h1
          background: orange
          color: white
        img
          background: orange
          text-decoration: none
          border-bottom: none
          width: 50%
  #bloque2
    width: 100%
    display: flex
    align-items: center
    
    flex-direction: column
    
    #bloques
      width: 80%
      border: 1px solid white
      padding: .5rem
      display: flex
      
      
      border-radius: 15px
      margin-bottom: 30px
      margin-top: 10px
      img
        width: 20%
        border-radius: 15px
      #descripcion_bloque
        padding: 5px
        padding-left: 15px
  #titulo_bloques
    width: 80%
    margin-top: 15px
    text-decoration: underline
    
  footer
    border-top: 2px solid white
    display: flex
    width: 100%
    height: 30vh
    #negrita
      font-weight: bold
    #izquierda_f
      display: flex
      width: 50%
      justify-content: center
      align-items: center
      div
        padding-left: 100px
        padding-bottom: 100px
        padding-top: 100px
    #derecha_f
      display: flex
      width: 50%
      justify-content: center
      align-items: center
      
    
</style>