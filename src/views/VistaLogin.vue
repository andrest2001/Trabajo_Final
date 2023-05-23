<template>
  <section>
    <div id="formulario">
      
      <h1>LOGIN</h1>
      <div id="izquierda">
        <p>Nombre de usuario o correo electrónico</p>
      </div>
      
      <input type="text" placeholder="Escriba aquí su nombre o correo electrónico">
      <div id="izquierda">
        <p>Contraseña</p>
      </div>
      <input type="text" placeholder="Escriba aquí su contraseña">
      <div id="izquierda">
        <button>Entrar</button>
      </div>
      <div id="izquierda">
        <p>¿Has olvidado la contraseña? Haz click <router-link to="/restablecer">aquí</router-link> para restrablecerla</p>
      </div>
    
    </div>
  </section>
  <router-view></router-view>
</template>

<script>

export default {
  name: 'VistaLogin',

}
</script>

<style lang="sass" scoped>
  
    
  section
    width: 100%
    display: flex
    justify-content: center
    align-items: center
    padding-top: 20px
    font-family: 'Roboto', sans-serif
    padding-bottom: 126px
    color: white
    #formulario
      width: 70%
      height: 80vh
      display: flex
      justify-content: center
      align-items: center
      flex-direction: column
      padding: 2rem
      border: 2px solid white
      border-radius: 15px
      #izquierda
        width: 60%
        a
          list-style: none
          color: white
      h1
        font-size: 32px
      h1, p
        font-style: italic
      p,input, button
        font-size: 21px
      p,button,h1,input
        margin-top: 20px
      input
        border: none
        background: white
        border-radius: 15px
        padding: 1rem
        width: 60%
        font-style: italic
      button
        border: none
        background: orange
        border-radius: 15px
        padding: 1rem
        width: 20%
        color: white
    

    
</style>