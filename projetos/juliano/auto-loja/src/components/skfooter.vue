<template>
    <div class="footer">
        <h1> {{vfooter}} </h1>
    </div>
</template>

<script>
export default {
  name: 'skfooter',
  props: {
    vhead: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer {
    height: 300px;
    background: #333;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
