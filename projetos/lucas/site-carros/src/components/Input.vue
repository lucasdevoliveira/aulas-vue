<template>
    <div class="container">
        <label>{{label}}</label>
        <input type="text" />
    </div>
</template>

<script>

    export default {
        name: 'Input',
        props: ['label']
    }

</script>

<style scoped>
    .container {
        display: flex;
        flex-direction: column;
    }

</style>
