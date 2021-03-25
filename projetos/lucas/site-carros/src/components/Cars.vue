<template>
    <b-container>
        <b-row>
            <b-col class="search" md="3">
                <h1>Busque o seu carro:</h1>
            </b-col>
            <b-col class="list" md="9">
                <div v-for="(car, index) in cars" :key="index">
                    <div class="item">
                        <img :src="require(`@/assets/cars/${car.image}`)">
                        <p>{{car.name}}</p>
                        <router-link :to="{ name: 'carro', params: { id: car.id } }">{{car.price}}</router-link>
                    </div>
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>

    export default {
        name: 'Cars',
        props: ['cars'] 
    }

</script>

<style scoped>
  .content {
    width: 100%;
    margin: 20px 0 0 0
  }

  .search {
    background: #fff;
    height: 400px;
  }

  .list {
      width: 100%;
      height: auto;
      display: flex;
      flex-wrap: wrap;
  }

  .item {
    height: 300px;
    width: 251px;
    background: #fff;
    margin: 10px;
  }

</style>