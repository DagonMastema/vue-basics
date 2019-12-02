<template>
  <v-container>    
    <v-layout>     
    
    <v-container>
      <v-row>
        <v-col >
          <v-text-field clearable v-model="comments"></v-text-field>           
        </v-col>                
         <v-btn  text color="orange lighten-2" class="mr-4" @click="send">Comment</v-btn>             
      </v-row>  

      <v-col >
            <v-list-item-text  v-for="(line) in commentline" :key="line.comments">        
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

  data: () => ({
     comments: " ",
     commentline: []
  }),
  methods: {
      send () {               
       this.commentline.push({
       comments: this.comments 
       })
      }   
  },
};
</script>