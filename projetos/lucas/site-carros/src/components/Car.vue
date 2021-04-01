<template>
    <div class="item">
        <img :src="require(`@/assets/cars/${car.image}`)">
        <p>{{car.name}}</p>
        <router-link :to="{ 
            name: 'carro', 
            params: { 
                id: car.id 
            } 
        }">
            {{car.price}}
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'Car',
        props: ['car']
    }
</script>

<style scoped> 

    .item {
        height: 300px;
        width: 251px;
        background: #fff;
        margin: 10px;
    }



</style>
