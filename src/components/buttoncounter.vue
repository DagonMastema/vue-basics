<template>
<div id="componentsdemo">
  <h1>Button Counter </h1>
  <button v-on:click="count++">You clicked me {{ count }} times.</button>
</div>
</template>

<script>
export default {
  data: function () {
    return {
      count: 0
    }
  },
}
</script>
<style scoped>
</style>