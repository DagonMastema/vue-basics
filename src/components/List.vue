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
        <v-col cols="12" md="2">
          <v-btn color="amber lighten-2"  @click.stop="dialog = true">Edit</v-btn>
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
          <v-text-field v-model="firstname" :rules="nameRules" :counter="10" label="First name"
            required></v-text-field>
        </v-col>
        <v-col >
          <v-text-field v-model="lastname" :rules="nameRules" :counter="10" label="Last name"
            required></v-text-field>
        </v-col>
        <v-col >
          <v-text-field v-model="email" :rules="emailRules" label="E-mail"></v-text-field>
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
  
  
  
}
</script>
<style scoped>
</style>