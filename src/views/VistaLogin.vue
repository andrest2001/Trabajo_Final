<template>
  <section>
    <div id="formulario">
      <h1 v-if="loggedIn">Ya ha iniciado sesión {{ nombre }}</h1>
      <button v-if="loggedIn" @click="logout">Cerrar sesión</button>
      <form @submit.prevent="login" v-if="!loggedIn">
        <h1>Iniciar sesión</h1>
        <div id="izquierda">
          <label>Usuario:</label></div>
        <input type="text" v-model="nombre" />
        <div id="izquierda">
          <label>Contraseña:</label>        
        </div>
        <input type="password" v-model="password" />
        <button type="submit">Iniciar sesión</button>
        <div v-if="message" class="mensaje">{{ message }}</div>
      </form>
      
    </div>
  </section>

</template>

<script>
import axios from 'axios';
export default {
  name: 'VistaLogin',
  data() {
    return {
      nombre: '',
      password: '',
      message: '',
      loggedIn: false
    };
  },
  created() {
    // Verificar si hay un usuario en el almacenamiento local
    const user = localStorage.getItem('user');
    if (user) {
      this.loggedIn = true;
      this.nombre = JSON.parse(user).nombre;
    }
  },
  methods: {
    login() {
      axios
        .post('http://localhost:3001/login', {
          nombre: this.nombre,
          password: this.password
        })
        .then(response => {
          const { message, user } = response.data;
          this.message = response.data.message;
          if (message === 'Inicio de sesión exitoso') {
          // Almacenar información del usuario en el localStorage
          localStorage.setItem('user', JSON.stringify(user));
          
          this.loggedIn = true;
          this.nombre = user.nombre;
          this.profileImageId = user.profileImageId;
          }
        })
        .catch(error => {
          if (error.response) {
            if (error.response.status === 401) {
              // Credenciales incorrectas
              this.message = 'Usuario y/o contraseña incorrectos';
            } else {
              // Otro error de servidor
              this.message = 'Error en el servidor';
            }
          } else {
            // Error de conexión
            this.message = 'Error de conexión';
          }
        });
    },
    logout() {
      // Borrar la información del usuario del almacenamiento local
      localStorage.removeItem('user');
      
      this.loggedIn = false;
      this.nombre = '';
    }
    
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

    form
      width: 70%
      display: flex
      flex-direction: column
      width: 100%
      justify-content: center
      align-items: center
      h1
        margin-bottom: 25px
      button
        cursor: pointer
      input
        margin-bottom: 15px
      #izquierda
        font-size: 20px
        margin-bottom: 15px
  .mensaje
    margin-top: 10px
    font-size: 25px
    color: red

  @media (max-width: 768px) 
    section
      padding-top: 10px
      padding-bottom: 20px
      height: 95vh
      #formulario
        width: 90%
        padding: 1rem
        #izquierda
          width: 100%
        h1, p, input, button
          font-size: 18px
        input
          width: 100%
        button
          width: 40%
  
</style>