<template>
    <div id="app">
    <img src="../../assets/logo.png">
       <HelloJs></HelloJs>
    </div>
</template>

<script>
import HelloJs from '@/components/HelloJs.vue'
export default {
  name: 'app',
  components: { HelloJs }
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
