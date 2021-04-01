<template>
  <div id="app">
    <skheader vhead="meuHeader"/>
    <banner vhead="meuBanner"/>
    <img alt="Vue logo" src="./assets/logo.png">    
    <skfooter vfoot="meuBanner"/>
    <!-- <HelloWorld msg="Welcome to a"/> -->
  
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import skheader from './components/skheader.vue'
import banner from './components/banner.vue'
import skfooter from './components/skfooter.vue'

export default {
  name: 'App',
  components: {
    skheader,
    banner,
    skfooter
    //,HelloWorld
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}  

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
