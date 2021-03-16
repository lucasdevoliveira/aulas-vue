<template>
    <div class='skheader'>
    <h1> {{vhead}} </h1>
    <ul>
      <li><a href="#">Menu1</a></li>
      <li><a href="#">Menu2</a></li>
      <li><a href="#">Menu3</a></li>
      <li><a href="#">Menu4</a></li>
    </ul>
    <profilePic />
    </div>
</template>

<script>
import profilePic from './profile/profile-pic.vue'
export default {
  components: { profilePic },
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
  align-items:center;
}
h3 {
  margin: 40px 0 0
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
  color:cadetblue;
  padding: 20px 20px;
}
</style>
de quando