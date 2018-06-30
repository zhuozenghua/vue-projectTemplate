<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Item msg="Welcome to Your Vue.js App"></Item>
    <Test/>
    <SearchBar msg="Welcome to Your Vue.js App"></SearchBar>

  </div>
</template>

<script>
import SearchBar from './components/SearchBar.vue'
import Item from './components/Item.jsx'
import Test from './components/Test.vue'


export default {
  name: 'app',
  components: {
    SearchBar,
    Item,Test
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
