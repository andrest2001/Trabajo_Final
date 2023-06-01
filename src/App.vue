
<template>
  <nav>
    <div id="wikigames">
      <img src="./assets/favicon.png" alt="" id="logo">
      <router-link to="/" id="inicio">Wiki Games</router-link>
    </div>
    <input type="checkbox" id="menu-toggle" class="menu-toggle">
    <label for="menu-toggle" class="hamburger">
      <span class="line"></span>
      <span class="line"></span>
      <span class="line"></span>
    </label>
    <div class="menu">
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
  a
    text-align: center
nav 
  font-family: 'Roboto', sans-serif
  display: flex
  justify-content: center
  align-items: center
  justify-content: space-around
  select
    background: none
    border: none
    color: white
    option
      color: black
  div
    display: flex
    i
      margin-right: 10px

  a
    
    color: white
    margin-right: 30px
    padding: 1.5rem
    text-decoration: none
    font-size: 22px
    &.router-link-exact-active 
      font-weight: bold

  #logo
    width: 15%
    margin-top: 15px
    border-radius: 5px

  #wikigames
    a
      display: flex
      text-align: center
      justify-content: center
      margin-top: 23px
      font-size: 25px
  @media (max-width: 768px) 
    *
    margin: 0
    padding: 0
    box-sizing: border-box

    body
      background: rgb(85, 85, 85)
      background: linear-gradient(180deg, rgba(85, 85, 85, 1) 0%, rgba(28, 28, 31, 1) 46%, rgba(0, 0, 0, 1) 100%)

    #inicio
      font-family: 'Orbitron', sans-serif
      font-size: 10px
      a
        text-align: center
        font-size: 10px

    nav
      font-family: 'Roboto', sans-serif
      display: flex
      justify-content: center
      align-items: center
      justify-content: space-between

    #logo
      position: absolute
      width: 20%
      margin-top: 15px
      margin-left: 7px
      border-radius: 5px

    #wikigames
      a
        display: flex
        
        margin-top: 23px
        font-size: 17px
        margin-left: 78px

    .menu-toggle
      display: none

    .hamburger
      display: flex
      flex-direction: column
      justify-content: space-between
      width: 25px
      height: 20px
      cursor: pointer
      margin-top: 17px
      position: fixed
      right: 20px
      span
        width: 100%
        height: 2px
        background-color: white

    .menu
      display: none
      flex-direction: column
      align-items: center
      margin-top: 20px
      background: black
      a
        color: white
        margin-bottom: 15px
        padding: 10px
        text-decoration: none
        font-size: 18px

    .menu-toggle:checked + .hamburger + .menu
      display: flex
      position: fixed
</style>




