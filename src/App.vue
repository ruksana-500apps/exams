<template>
  <div id="app">
   <products></products>
  </div>
</template>

<script>
import products from '../src/components/products.vue'

export default {
  name: 'App',
  components: {
   products
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
