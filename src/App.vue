<template>
  <v-app>
    <template>      
        <v-navigation-drawer app v-model="drawer" class="blue" dark permanent>
          <v-list>
            <v-list-item v-for="item in items" :key="item.title" link>
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
    </template>
    
    
    <v-app-bar app color="primary" >
      <div class="d-flex align-center">
        

        

        
      </div>

      <v-spacer></v-spacer>

      
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
//import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    //HelloWorld,
  },

  data: () => ({
    drawer: true,
    items: [
          { title: 'DemoNavigation'},
          { title: 'Home'},
          { title: 'Mail'},
        ],
  }),
};
</script>
