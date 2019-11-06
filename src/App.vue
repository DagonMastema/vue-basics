<template>
<<<<<<< HEAD
  <div id= "app">    
    <HelloWorld msg="List of Employees"/>
    <ol>
    <li v-for="todo in todos" v-bind:key="todo">
      {{ todo.text }}
    </li>
  </ol>
=======
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js"/>
>>>>>>> ccb871f0f303b60d6c5c71ce76b17b4129ea08f9
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

//export default {
  //name: 'app',
  //components: {
    //HelloWorld
 // }  
//}
var app = new Vue({
  el: '#app',
  data: {
    todos: [
      { text: 'abc' },
      { text: 'def' },
      { text: 'xyz' }
    ]
  }
})
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
