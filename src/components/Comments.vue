<template>
  <v-container>    
    <v-layout>     
    
    <v-container>
      <v-row>
        <v-col >
          <v-text-field clearable v-model="comments"></v-text-field>           
        </v-col>                
           <v-btn text color="orange lighten-2" @click="send">Comment</v-btn>           
      </v-row>            

      <v-col >
            <v-list-item-text  v-for="(line) in commentlist" :key="line.comments">        
            <v-list-item-subtitle>{{line.comments}}</v-list-item-subtitle>
            </v-list-item-text>    
        </v-col>  
              
    </v-container>
    
    </v-layout>
    
  </v-container>
</template>

<script>
export default {
  name: 'Comments',

  /*props: {
    commentlist: {
      type: Array,     
    },    
  },*/

  data: () => ({
     comments: " ",
     commentlist: []
  }),
  methods: {
    send () {               
       this.commentlist.push({
       comments: this.comments 
       })
      }
  }
  
};
</script>