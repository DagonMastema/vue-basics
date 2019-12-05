<template>
  <v-container>
    <v-card>
    <v-form v-model="valid" ref="form">
    <v-container>
      <h1>POST</h1>
      <v-row>
        <v-col cols="12" md="8">
          <v-textarea clearable v-model="contents" :rules="contentsRules" :counter="500" label="Post"
            required></v-textarea>           
        </v-col>
        <v-spacer></v-spacer>
        <v-card-actions>
        <v-btn :disabled="!valid" color="success" class="mr-4" @click="add">Post</v-btn>          
        </v-card-actions>     
      </v-row>          
    </v-container>
    </v-form>
     </v-card>
    <pre>{{posts}}</pre> 
  <v-container v-for="(post,index) in posts" :key="post.contents">
    <v-row >
      <v-col cols="12" md="12">
      <v-card class="mx-auto" raised > 
        <v-list-item-avatar size="40" color="powder blue"></v-list-item-avatar>       
          <v-list-item-content class="ma-3">      
            <v-list-item-title class="mb-4" >{{post.contents}}</v-list-item-title>        
            <v-list-item-text></v-list-item-text>            
          </v-list-item-content>
          
        <v-card-actions>
          <v-spacer></v-spacer>           
          <v-btn color="orange lighten-2"  text @click="remove(index)">DELETE</v-btn>                            
        </v-card-actions>
        <Comments :commentlist="post.commentline"></Comments>        
      </v-card>
      </v-col>                                               
    </v-row>             
  </v-container>

  </v-container>

</template>

<script>
import Comments from './Comments.vue'

export default {
  name: 'Post',

  components: {
   Comments
  },

  data: () => ({
    
     valid: true,
     
     comments: " ",
     contents: " ",
     contentsRules: [
        v => !!v || 'It is empty',
        v => (v && v.length <= 500) || 'Comments should be within 500 characters',
      ],
      posts: [
         {
        contents: 'postdata 1',
        commentline: [        
       {comments: "1"},
       {comments: "22"},
       {comments: "3"},         
     ]},
      {
        contents: 'postdata 2',
        commentline: [        
       {comments: "1"},
       {comments: "2"},
       {comments: "23"},         
     ]},
      {
        contents: 'postdata 3',
        commentline: [        
       {comments: "11"},
       {comments: "2"},
       {comments: "3"},         
     ]},
      ],
      //commentline: []
  }),
  methods:{
      validate () {
      this.$refs.form.validate()
      },      
      add () {
        this.posts.push({
        contents: this.contents,         
        //edit: false,              
        })      
      },      
      remove(index){
      this.posts.splice(index,1)
      confirm("Are you sure you want to delete")
    },
    
    },
};
</script>