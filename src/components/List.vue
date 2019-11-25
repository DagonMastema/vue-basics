<template>
<div >
  <v-layout row>
    <v-container id="datalist">
    <v-row v-for="(item) in employeelist" :key="item.email">
        <v-col cols="12" md="2">
          <v-list>{{item.firstname}}</v-list>
        </v-col>
        <v-col cols="12" md="2">
          <v-list>{{item.lastname}}</v-list>
        </v-col>
        <v-col cols="12" md="2">
          <v-list>{{item.email}}</v-list>
        </v-col> 
        <v-spacer></v-spacer>
        <v-col cols="12" md="1">  
          <v-dialog v-model="dialog"  max-width="350">       
          <template v-slot:activator="{ on }">
            <v-btn color="amber lighten-2" dark v-on="on" @click="edit()">Edit</v-btn>
          </template>
          <v-card>
            <v-card-title class="headline">EDIT</v-card-title>
                <v-col cols="12" md="15">                                 
                  <v-text-field v-model="firstname" :rules="nameRules" :counter="10" label="First name"
                  required></v-text-field>{{item.firstname}}                                   
                </v-col>
                <v-col cols="12" md="15" >                    
                    <v-text-field v-model="lastname" :rules="nameRules" :counter="10" label="Last name"
                    required></v-text-field>{{item.lastname}}                    
                </v-col>
                <v-col cols="12" md="15">                                      
                    <v-text-field  v-model="email" :rules="emailRules" label="E-mail"></v-text-field>{{item.email}}                    
                </v-col>
                <v-card-actions>
                <v-spacer></v-spacer>
                  <v-btn color="green darken-4" text @click="dialog = false">SAVE</v-btn>                
                </v-card-actions>
          </v-card>
          </v-dialog>          
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
      type: Array,     
    }
  },
  methods: {
    edit(item){
     item.edit = !item.edit     
    },    
  },
  name: 'Child',
  dialog: false,
  edit: true,
}
</script>
<style scoped>
</style>