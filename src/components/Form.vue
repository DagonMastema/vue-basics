<template>
    <div>
      <Child :employeelist="employee"></Child>
  <v-form v-model="valid" ref="form">
    <v-container>
      <h1>Form</h1>
      <p>Fill the details</p>

      <v-row>
        <v-col cols="12" md="4">
          <v-text-field v-model="firstname" :rules="nameRules" :counter="10" label="First name"
            required></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field v-model="lastname" :rules="nameRules" :counter="10" label="Last name"
            required></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field v-model="email" :rules="emailRules" label="E-mail"></v-text-field>
        </v-col>      

        <v-spacer></v-spacer>  

        <v-btn :disabled="!valid" color="success" class="mr-4" @click="add">Submit</v-btn>  
        <v-btn  color="error" class="mr-4" @click="reset">Reset</v-btn>       
      </v-row>          
    </v-container>
  </v-form> 
    </div>
</template>

<script>
import Child from './List.vue'

export default {
  name: 'Form',

  components: {
   Child
  },
  data: ()=> ({
    valid: true,
    dialog: false,
    employee: [],
      firstname: '',
      lastname: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => /.+@.+\..+/.test(v) || "email should be valid"
      ]      
  }),
   methods:{
      validate () {
      this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },  
      add () {
        this.employee.push({
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,        
        })      
      }
    }, 
}

</script>

<style scoped>

</style>