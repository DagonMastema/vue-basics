<template>
    <div>

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
        
        
        <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">Validate</v-btn>
         
      </v-row>
    </v-container>
  </v-form>
    </div>
</template>

<script>

export default {
  name: 'Form',
  data: ()=> ({
    valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],

      email: '',
      emailRules: [
        v => /.+@.+/.test(v) || "email should be valid"
      ]
      
  }),
   methods:{
          validate () {
        this.$refs.form.validate()
      }
    }, 
}

</script>

<style scoped>

</style>