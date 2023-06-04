
<template>
  <section>
    <form id="formulario" action="https://formspree.io/f/mwkjjoob" method="POST">
      
      <h1>CONTACTO</h1>
      <div id="izquierda">
        <p>Nombre y apellidos</p>
      </div>
      
      <input type="text" placeholder="Escriba aquí su nombre y apellidos">
      <div id="izquierda">
        <p>Correo electrónico</p>
      </div>
      <input type="email" name="email" placeholder="Escriba aquí su correo electrónico">
      <div id="izquierda">
        <p>Sugerencia o problema</p>
      </div>
      <textarea name="message"></textarea>
      <div id="izquierda">
        <button>Entrar</button>
      </div>

    </form>


  </section>
</template>

<script>

export default{
  name:'VistaContacto',
  components: {
     
   }
  
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
      textarea
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
  
  @media (max-width: 768px) 
    section
      height:100vh
      margin-top: 80px
      width: 100%
      
      #formulario
        height:100vh
        width: 80%
        
        h1
          margin-top: 0px

        #izquierda
          width:100%
        input
          width: 100%
        textarea
          width:100%

        button
          width: 50%
      
  

</style>
