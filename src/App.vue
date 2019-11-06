<template>
  <div id= "app">    
    <HelloWorld msg="List of Employees"/>
    <ol>
    <li v-for="todo in todos" v-bind:key="todo">
      {{ todo.text }}
    </li>
  </ol>
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
