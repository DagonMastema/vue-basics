<template>
<div >
  <button type="button" name="button" v-on:click="$emit('Click')">Click me</button><br>
  <p>{{count}}</p>
  <label for="input">Input: </label>
  <input id="input" type="text" name="msg" v-model="childMessage" v-on:click="emitMethod">
  <p>{{childMessage}}</p>
</div>
</template>

<script>
export default {
  data: function () {
    return {
      count: 0,
      childMessage: ''
    }
  },
  props: {
    parentData: Object,
    stringProp: String,
    title: String
  },
  methods: {
    emitMethod(){
      this.$emit('childToParent', this.childMessage)
    }
  },
  name: 'Child'
}
</script>
<style scoped>
</style>