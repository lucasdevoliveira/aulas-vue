<template>
  <div class="content">
    <div class="container">
      <h1><router-link to="/home">Logo</router-link></h1>
      <ul class="list">
        <li class="item"><router-link to="/home">home</router-link></li>
        <li class="item"><router-link to="/carros">carros</router-link></li>
        <li class="item"  ><router-link to="/contato">contato</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'Header'
  }

</script>

<style scoped>

  .content {
    width: 100%;
  }

  .container {
    height: 70px;
    width: 1400px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .list {
    display: flex;
    
  }

  .item {
    padding: 10px 15px;
    margin: 5px;
  }

</style>
