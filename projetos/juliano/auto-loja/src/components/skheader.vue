<template>
    <div class='skheader'>
    <h1> {{vhead}} </h1>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
    <a href="#"> <img alt="Vue logo" src="../assets/logo.png" height="20px"> </a>
    </div>
</template>

<script>
export default {
  name: 'skheader',
  props: {
    vhead: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.skheader{
  display: flex;
  justify-content: space-between;
  vertical-align:-webkit-baseline-middle
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: ;
}
li {
  display: inline-block;
  margin: 20px 20px;
}
a {
  color: #42b983;
  padding: 20px 20px;
}
</style>
