<template>
  <div>
    <b-container>
      <b-row class="row">
        <b-col md="9" class="center">
          <h1><router-link to="/home">Logo</router-link></h1>
        </b-col>
        <b-col md="3" class="center">
          <ul class="list">
            <li class="item"><router-link to="/home">home</router-link></li>
            <li class="item"><router-link to="/carros">carros</router-link></li>
            <li class="item"  ><router-link to="/contato">contato</router-link></li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>

  export default {
    name: 'Header'
  }

</script>

<style scoped>

  .row {
    height: 70px;
  }

  .center {
    display: flex;
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
