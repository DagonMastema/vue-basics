<template>
<div>
    <!--<pre>{{info}}</pre>-->
  <v-layout row wrap>  
    <v-card class="ma-5" max-width="340" raised v-for="x in info" :key='x.id'>
      <v-list-item-content class="ma-3">      
        <v-list-item-title class="headline font-weight-bold mb-4" >{{x.title}}</v-list-item-title>        
        <v-list-item-text>{{x.body}}</v-list-item-text>
      </v-list-item-content>
    </v-card> 
  </v-layout>   
</div>    
</template>

<script>
import axios from 'axios'
 

export default {
    name: 'Test',    
    data () {
    return {
      info: []
    }
  },
  mounted () {
    axios
      .get('http://jsonplaceholder.typicode.com/posts')
      .then(response => (this.info = response.data))
  }
}
</script>