<template>
  <v-container>
    
    <v-layout text-center wrap>     
        <v-btn color="success">Success</v-btn>
        <v-btn color="error">Error</v-btn>
        <v-btn color="warning">Warning</v-btn>
        <v-btn color="info">Info</v-btn>        
    </v-layout>
    <template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="290">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Open Dialog</v-btn>
      </template>
      <v-card>
        <v-card-title class="headline">Use Google's location service?</v-card-title>
        <v-card-text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus enim corrupti culpa nisi sunt perferendis eos numquam atque! Tenetur mollitia eius odit, repellat omnis illo excepturi consequatur itaque sed vel.</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">Disagree</v-btn>
          <v-btn color="green darken-1" text @click="dialog = false">Agree</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
  </v-container>
</template>

<script>
export default {
  name: 'Home',

  data: () => ({
     dialog: false,
  }),
};
</script>
