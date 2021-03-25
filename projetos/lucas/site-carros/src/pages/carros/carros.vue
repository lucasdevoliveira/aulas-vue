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
                banner: '',
                cars: []
            }
        },
        methods: {
            fetchCars () {
                fetch('http://localhost:3000/cars')
                    .then(response => response.json())
                    .then(response => {
                        this.banner = response.banner
                        console.log(this.banner)
                        this.cars = response.cars
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