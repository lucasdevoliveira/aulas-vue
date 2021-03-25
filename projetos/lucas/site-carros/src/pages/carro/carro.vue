<template>
    <div>
        <Header />
        <h1>Carro selecionado: {{id}}</h1>
    </div>
</template>

<script>

    import Header from '../../components/Header.vue'

    export default {
        name: 'Carro',
        components: {
            Header
        },
        data: () => {
            return {
                id: null,
            }
        },
        mounted() {
            this.getCar()
        },
        methods: {
            getCar() {
                this.id = this.$route.params.id
            }
        }
    }

</script>

<style scoped>

</style>