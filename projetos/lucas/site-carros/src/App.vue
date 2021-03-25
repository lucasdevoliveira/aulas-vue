<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  #app {
    background: #F3F5F8;
  }

  #app ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  #app h1 {
    margin: 0;
  }

  #app h1 a {
    color: #666;
  }

  #app li a {
    color: #666;
  }

</style>
