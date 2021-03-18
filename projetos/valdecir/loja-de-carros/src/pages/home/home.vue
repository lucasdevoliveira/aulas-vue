<template>
    <div>
        <Header />
        <Banner />
        <Cars />
    </div>
</template>
<script>
    estou aqui
    import Header from '../../components/Header.vue'
    import Banner from '../../components/Banner.vue'
    import Cars from '../../components/Cars.vue'

    export default {
        name: 'Home',
        components: {
            Header,
            Banner,
            Cars
        }
    }

</script>

<style scoped>

</style>