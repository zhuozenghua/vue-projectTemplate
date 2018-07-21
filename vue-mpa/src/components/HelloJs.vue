<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li><a href="index.html" target="_blank">index page</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hellojs',
  data () {
    return {
      msg: 'Welcome to Your Vue.js MPA'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
