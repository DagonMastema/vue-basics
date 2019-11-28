<template>
<div >
  <v-layout row>
    <v-container id="datalist">
    <v-row v-for="(item,index) in employeelist" :key="item.email">
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
        <v-col cols="12" md="2">
          <v-btn color="amber lighten-2"  @click="edit(item,index)">Edit</v-btn>
        </v-col>
        <v-col cols="12" md="2">
          <v-btn color="amber lighten-2"  @click="remove(index)">Delete</v-btn>
        </v-col>                                               
      </v-row>          
  </v-container>

  <template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="290">
      <!--<template v-slot:activator="{dialog}"></template>-->
      <v-card>
        <v-card-title class="headline">EDIT</v-card-title>
        <v-col >
          <v-text-field v-model="editeddata.firstname" :rules="nameRules" :counter="10" label="First name"
            required></v-text-field>
        </v-col>
        <v-col >
          <v-text-field v-model="editeddata.lastname" :rules="nameRules" :counter="10" label="Last name"
            required></v-text-field>
        </v-col>
        <v-col >
          <v-text-field v-model="editeddata.email" :rules="emailRules" label="E-mail"></v-text-field>
        </v-col>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">SAVE</v-btn>          
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
  </v-layout>    
    
     
</div>
</template>

<script>
export default {
  data: function () {
    return {
    dialog: false,
    editeddata: {
      firstname: '',
      lastname: '',
      email: ''
  },
    }
  },
  props: {
    employeelist: {
      type: Array,     
    }
  },
  methods: {    
    edit(item){
     this.dialog= true     
     this.editeddata.firstname=item.firstname
     this.editeddata.lastname=item.lastname
     this.editeddata.email=item.email
     var index = this.employeelist.indexOf(item)     
     this.employeelist.splice(index,1,this.editeddata)
     
    },    
    remove(index){
      this.employeelist.splice(index,1)
    }  
  },
  name: 'Child',
  
  
  
}
</script>
<style scoped>
</style>