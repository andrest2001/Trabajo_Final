<template>
  <section>
    <div id="formulario">
      
      <h1>CONTACTO</h1>
      <div id="izquierda">
        <p>Nombre y apellidos</p>
      </div>
      
      <input type="text" placeholder="Escriba aquí su nombre y apellidos">
      <div id="izquierda">
        <p>Correo electrónico</p>
      </div>
      <input type="text" placeholder="Escriba aquí su correo">
      <div id="izquierda">
        <p>Sugerencia o problema</p>
      </div>
      <input type="text" placeholder="Escriba aquí lo que necesite" id="input_grande">
      <div id="izquierda">
        <button>Entrar</button>
      </div>

    </div>
  </section>
</template>

<script>
export default{
  name:'VistaContacto'
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
      #input_grande
        border: none
        background: white
        border-radius: 15px
        padding: 1rem
        padding-bottom: 10rem
        width: 60%
        font-style: italic
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

