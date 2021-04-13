<template>
    <div class="banner">
        <p> {{vhead}} </p>
    </div>
</template>

<script>
export default {
  name: 'banner',
  props: {
    vhead: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.banner{
    width: 100%;
    height: 400px;
    background: rgb(184, 184, 184);
}
</style>
