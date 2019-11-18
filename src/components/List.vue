<template>
<div >
  <button type="button" name="button" v-on:click="$emit('increment')">Click me</button><br>  
  <label for="input">Input:</label>
  <input id="input" type="text" name="msg" v-model="childMessage" v-on:keyup="emitMethod">
  <p>{{childMessage}}</p>
  <div><p>{{ title }}</p>
  <p>{{ parentData }}</p>
  <p>{{ stringProp }}</p></div>
</div>
</template>

<script>
export default {
  data: function () {
    return {      
      childMessage: '',            
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