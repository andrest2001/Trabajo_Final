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

        <div id="izquierda"><label>Foto de perfil:</label></div>
        <div class="profile-images">
          <img v-for="image in profileImages" :key="image.id" :src="image.src" @click="selectProfileImage(image.id)">
        </div>
        
        <div class="selected-profile-image">
          <img :src="selectedProfileImageSrc" v-if="selectedProfileImageSrc" alt="">
        </div>

        <button type="submit">Agregar Usuario</button>

        <p v-if="mensajeError" class="error">{{ mensajeError }}</p>
      </form>
    </div>
  </section>
</template>



<script>
import axios from 'axios';

export default {
  name: "VistaRegistro",
  data() {
    return {
      nombre: '',
      email: '',
      password: '',
      mensajeError: '',
      selectedProfileImageId: null, // ID de la foto de perfil seleccionada
      selectedProfileImageSrc: '', // URL de la imagen de perfil seleccionada
      profileImages: [
        { id: 1, src: 'https://i.pinimg.com/originals/2a/66/db/2a66dbcb4690dd9907d33d32f08f8439.jpg' },
        { id: 2, src: 'https://image.api.playstation.com/cdn/UP1004/CUSA03041_00/Hpl5MtwQgOVF9vJqlfui6SDB5Jl4oBSq.png?w=440' },
        { id: 3, src: 'https://www.zelda.com/links-awakening/assets/img/home/hero-char.png' },
        { id: 4, src: 'https://assetsio.reedpopcdn.com/god-of-war-walkthrough-guide-5004-1642178551828.jpg?width=1200&height=1200&fit=crop&quality=100&format=png&enable=upscale&auto=webp' }
      ]
    };
  },
  methods: {
    agregarUsuario() {
      const nuevoUsuario = {
      nombre: this.nombre,
      email: this.email,
      password: this.password,
      profileImageId: this.selectedProfileImageId // Agregar el ID de la foto seleccionada
    };

      axios.post('http://localhost:3001/registro', nuevoUsuario)
        .then(response => {
          console.log(response.data.message);
          
        })
        .catch(error => {
          console.error('Error al agregar el usuario:', error.response.data.error);
          this.mensajeError = error.response.data.error;
        });
    },
    selectProfileImage(imageId) {
      this.selectedProfileImageId = imageId;
      this.selectedProfileImageSrc = this.profileImages.find(image => image.id === imageId)?.src || '';
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
    .profile-images
      img
        width: 10%
        border: 1px solid white
        border-radius: 10px
        margin-right: 40px
    .selected-profile-image
      margin-top: 20px
      display: flex
      justify-content: center
      align-items: center
      img
        width: 10%
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


  @media (max-width: 768px) 
    section
      padding-top: 10px
      padding-bottom: 20px
      
      height: 100vh
      #formulario
        width: 90%
        padding: 1rem
        form
          display: flex
          justify-content: center
          align-items: center
          flex-direction: column
          width: 100%
          .profile-images
            img
              width: 15%
              border: 1px solid white
              border-radius: 10px
              margin-right: 20px

          .selected-profile-image
            margin-top: 20px
            display: flex
            justify-content: center
            align-items: center
            img
              width: 10%
        h2
          font-size: 20px
        #izquierda
          width: 100%
          label
            font-size: 16px
        input
          font-size: 16px
          width: 100%
        button
          width: 40%
          font-size: 16px
          
        .error
          font-size: 18px
      
</style>
