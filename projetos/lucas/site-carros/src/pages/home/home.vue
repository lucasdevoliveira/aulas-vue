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
                banner: 'banner.png',
                cars: []
            }
        },
        methods: {
            getCars () {
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
            this.getCars();
        }
        
    }
</script>

<style scoped>

</style>
