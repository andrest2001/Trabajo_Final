<template>
  <section>
    <div id="formulario">
      <h2>Agregar Usuario</h2>
      <form @submit.prevent="agregarUsuario">
        <label>Nombre:</label>
        <input type="text" v-model="nombre" required>
        <label>Correo electrónico:</label>
        <input type="email" v-model="email" required>

        <label>Contraseña: </label>
        <input type="password" v-model="password" required>
        <button type="submit">Agregar Usuario</button>
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
      password: ''
    };
  },
  methods: {
    agregarUsuario() {
      const nuevoUsuario = {
        nombre: this.nombre,
        correo: this.correo,
        password: this.password
      };

      axios.post('/registro', nuevoUsuario)
        .then(response => {
          console.log(response.data.message);
          // Realizar acciones adicionales después de agregar el usuario
        })
        .catch(error => {
          console.error('Error al agregar el usuario:', error);
          // Mostrar un mensaje de error o realizar acciones adicionales
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
