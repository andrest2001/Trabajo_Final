<template>
  <section>
    <div id="formulario">
      
      <h1>REGISTRO</h1>
      <div id="izquierda">
        <p>Nombre de usuario</p>
      </div>
      
      <input type="text" placeholder="Escriba aquí su nombre">
      <div id="izquierda">
        <p>Correo electrónico</p>
      </div>
      <input type="text" placeholder="Escriba aquí su correo">
      <div id="izquierda">
        <p>Confirme su correo electrónico</p>
      </div>
      <input type="text" placeholder="Vuelva a escribir su correo">
      <div id="izquierda">
        <p>Contraseña</p>
      </div>
      <input type="text" placeholder="Escriba su contraseña">
      <div id="izquierda">
        <p>Confirme su contraseña</p>
      </div>
      <input type="text" placeholder="Vuelva a escribir su contraseña">
      <div id="izquierda">
        <button>Entrar</button>
      </div>    
    
    </div>
  </section>
  <router-view></router-view>
</template>

<script>

    export default {
    name: 'VistaRegistro',

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
        color: white
        padding-bottom: 126px

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
