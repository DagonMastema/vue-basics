<template>
<div id="componentsdemo">
  <h1></h1>
  <buttoncounter></buttoncounter>
</div>     
</template>

<script>
import Vue from 'vue';
new Vue({el: '#componentsdemo'})  
Vue.component('buttoncounter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})

</script>
<style scoped>
</style>