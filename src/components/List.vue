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
          <v-text-field v-model="editdata.firstname" :rules="nameRules" :counter="10" label="First name"
            required></v-text-field>
        </v-col>
        <v-col >
          <v-text-field v-model="editdata.lastname" :rules="nameRules" :counter="10" label="Last name"
            required></v-text-field>
        </v-col>
        <v-col >
          <v-text-field v-model="editdata.email" :rules="emailRules" label="E-mail"></v-text-field>
        </v-col>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="save(item,index)">SAVE</v-btn>          
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
    nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      
      emailRules: [
        v => /.+@.+\..+/.test(v) || "email should be valid"
      ],
    editdata: {

    },
    index: -1
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
     this.editdata=item
     //this.editdata.lastname=item.lastname
     //this.editdata.email=item.email
     //this.index = this.employeelist.indexOf(item)  
     //alert(index)  
     //var x = this.employeelist[index]
     //alert(JSON.stringify(x))
     //alert(JSON.stringify(this.employeelist[index]))
     
    },    
    save(){
     //var index = this.employeelist.indexOf(item) 
     //this.employeelist[this.index].firstname = this.editdata.firstname
     //var x = this.employeelist[index]
     //alert(JSON.stringify(x)) 
     
     this.dialog= false    
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