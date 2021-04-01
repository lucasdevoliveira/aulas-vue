<template>
    <div>
        <Header />
        <Cars :cars="cars" />
    </div>
</template>

<script>

    import Header from '../../components/Header.vue'
    import Cars from '../../components/Cars.vue'

    export default {
        name: 'Carros',
        components: {
            Header,
            Cars
        },
        data: () => {
            return {
                cars: []
            }
        },
        methods: {
            fetchCars () {
                fetch('http://localhost:3000/cars')
                    .then(response => response.json())
                    .then(response => {
                        this.cars = response
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }
        },
        mounted() {
            this.fetchCars();
        }
    }

</script>

<style scoped>

</style>