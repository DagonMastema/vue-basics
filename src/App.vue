<template>
  <v-app>
    <template>
        <v-navigation-drawer app v-model="drawer" class="blue" dark permanent>
          <v-list>
            <v-list-item v-for="item in items" :key="item.title" link :to="item.route" >
              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
    </template>


    <v-app-bar app color="primary">
      <div class="d-flex align-center">





      </div>

      <v-spacer></v-spacer>


    </v-app-bar>

    <v-content>
      <!--<router-link to="/mail">Mail</router-link>
      <router-link to="/home">HelloWorld</router-link>-->
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
          { title: 'Home', route: '/'},
          { title: 'Form', route: '/form'},
          //{ title: 'List', route: '/list'},
          { title: 'Test', route: '/test'}
        ],
  }),
};
</script>
