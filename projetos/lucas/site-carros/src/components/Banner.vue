<template>
    <b-container fluid class="content">
        <b-row>
            <b-col md="12">
                <img v-if="image" :src="require(`@/assets/${image}`)">
            </b-col>
        </b-row>
    </b-container>
</template>

<script>

    export default {
        name: 'Banner',
        props: ['image']
    }

</script>

<style scoped>
    .container {
        height: 420px;
        width: 1400px;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .content img {
        width: 100%;
    }
</style>
