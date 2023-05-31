<template>
  <section>
    <div id="formulario">
      <h2>Agregar Usuario</h2>
      <form @submit.prevent="agregarUsuario">
        <div id="izquierda"><label>Nombre:</label></div>
        
        <input type="text" v-model="nombre" required>
        <div id="izquierda"><label>Correo electrónico:</label></div>
        <input type="email" v-model="email" required>

        <div id="izquierda"><label>Contraseña:</label></div>
        <input type="password" v-model="password" required>
        <button type="submit">Agregar Usuario</button>

        <p v-if="mensajeError" class="error">{{ mensajeError }}</p>
      </form>
    </div>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  name:"VistaRegistro",
  data() {
    return {
      nombre: '',
      email: '',
      password: '',
      mensajeError: ''
    };
  },
  methods: {
    agregarUsuario() {
      const nuevoUsuario = {
        nombre: this.nombre,
        email: this.email,
        password: this.password,
        
      };

      axios.post('http://localhost:3001/registro', nuevoUsuario)
        .then(response => {
          console.log(response.data.message);
          // Realizar acciones adicionales después de agregar el usuario
        })
        .catch(error => {
          console.error('Error al agregar el usuario:', error.response.data.error);
          this.mensajeError = error.response.data.error;
        });
    }
  }
};
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
          h2
            margin-bottom: 50px
            font-size: 25px
        #izquierda
            width: 60%
            label
              font-family: 'Roboto', sans-serif
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
            width: 100%
            font-style: italic
        button
            border: none
            background: orange
            border-radius: 15px
            padding: 1rem
            width: 20%
            color: white
  form
    width: 70%
    #izquierda
      font-size: 20px
      margin-bottom: 15px
      
    input
      margin-bottom: 15px
    button
      cursor: pointer
  .error
    margin-top: 10px
    font-size: 25px
    color: red
      
</style>
