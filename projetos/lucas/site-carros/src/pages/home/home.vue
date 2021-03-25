<template>
    <div>
        <Header />
        <Banner :image="banner" />
        <Cars :cars="cars" />
    </div>
</template>

<script>

    import Header from '../../components/Header.vue'
    import Banner from '../../components/Banner.vue'
    import Cars from '../../components/Cars.vue'

    export default {
        name: 'Home',
        components: {
            Header,
            Banner,
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
