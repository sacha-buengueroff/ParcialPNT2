<template>
  <div id="app">
    <div class="jumbotron">
      
      <Navbar/>
      <router-view></router-view>

    </div>

  </div>
</template>

<script>

import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
