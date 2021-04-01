<template>
    <b-container>
        <b-row>
            <b-col class="search" md="3">
                <h1>Busque o seu carro:</h1>
                <Input :label="'marca'" />
            </b-col>
            <b-col class="list" md="9">
                <div v-for="(car, index) in cars" :key="index">
                    <Car :car="car" />
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>

    import Car from './Car'
    import Input from './Input'

    export default {
        name: 'Cars',
        components: {
            Car,
            Input
        },
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

</style>