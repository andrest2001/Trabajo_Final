<template>
  <section>
    <div id="formulario">
      <h1>Escriba su correo electrónico para recuperar</h1>
      <input type="text" placeholder="Esríbalo aquí">
      <div id="izquierda">
        <button>Recuperar</button>
      </div>
      
    </div>
  </section>
</template>

<script>

export default {
  name: 'VistaRestablecer',

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
        height: 80vh
        padding-bottom: 126px
        #formulario
            width: 40%
            height: 60vh
            display: flex
            justify-content: center
            align-items: center
            flex-direction: column
            padding: 2rem
            border: 2px solid white
            border-radius: 15px
            #izquierda
                width: 68%
            input
                border: none
                background: white
                border-radius: 15px
                padding: 1rem
                width: 68%
                font-style: italic
            button
                border: none
                background: orange
                border-radius: 15px
                padding: 1.2rem
                width: 20%
                color: white
                
            h1, input, button
                margin-bottom: 20px
</style>