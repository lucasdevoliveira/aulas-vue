<template>
    <div>
        <Header />
        <Banner />
        <Cars />
    </div>
</template>

<script>

    import Header from '../../components/Header.vue'
    import Banner from '../../components/Banner.vue'
    import Cars from '../../components/Cars.vue'

    // import { BButton } from 'bootstrap-vue'

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
