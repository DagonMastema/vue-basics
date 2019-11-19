<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to the Home Page"/> -->
    <p>
      <router-link to="/mail">Mail</router-link> ||
      <router-link to="/hello">Hello</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    // HelloWorld,
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
  background-image: beige;
}
</style>