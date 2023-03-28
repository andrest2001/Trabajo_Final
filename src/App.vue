<template>
  <nav>
    <div>
      
      <router-link to="/" id="inicio"><i class="fa-solid fa-gamepad"></i>Community games</router-link>
    </div>
    <div>
      <router-link to="/">Inicio</router-link>
      <router-link to="/login">Login</router-link>
      <router-link to="/registro">Registro</router-link>
      <router-link to="/contacto">Contacto</router-link>
    </div>
  </nav>


  <router-view/>
</template>

<style lang="sass">
*
  margin: 0
  padding: 0
  box-sizing: border-box
  
body
  background: rgb(85,85,85)
  background: linear-gradient(180deg, rgba(85,85,85,1) 0%, rgba(28,28,31,1) 46%, rgba(0,0,0,1) 100%)
  
  

#inicio
  font-family: 'Orbitron', sans-serif
nav 
  font-family: 'Roboto', sans-serif
  display: flex
  justify-content: center
  align-items: center
  justify-content: space-around
  
  div
    display: flex
    i
      margin-right: 10px

  a
    
    color: white
    margin-right: 30px
    padding: 1.5rem
    text-decoration: none
    &.router-link-exact-active 
      font-weight: bold
    
  

</style>
