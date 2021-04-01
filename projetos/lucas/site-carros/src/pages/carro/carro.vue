<template>
    <div>
        <Header />
        <h1>{{car}}</h1>
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
                car: null,
            }
        },
        mounted() {
            this.getCar()
        },
        methods: {
            getCar() {
                const id = this.$route.params.id
                fetch(`http://localhost:3000/cars/${id}`)
                    .then(response => response.json())
                    .then(response => {
                        this.car = response
                    })
                    .catch(error => {
                        console.error(error)
                    })
            }
        }
    }

</script>

<style scoped>

</style>