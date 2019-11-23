<template>
<div >
  <v-layout row>
    <v-container id="datalist">
    <v-row v-for="(item) in employeelist" :key="item.email">
        <v-col cols="12" md="4">
          <v-list>{{item.firstname}}</v-list>
        </v-col>
        <v-col cols="12" md="4">
          <v-list>{{item.lastname}}</v-list>
        </v-col>
        <v-col cols="12" md="4">
          <v-list>{{item.email}}</v-list>
        </v-col>                  
      </v-row>
  </v-container>     
  </v-layout>  
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
    employeelist: {
      type: Array
    }
  },
  methods: {
    emitMethod(){
      this.$emit('childToParent', this.childMessage)
    },
  },
  name: 'Child'
}
</script>
<style scoped>
</style>