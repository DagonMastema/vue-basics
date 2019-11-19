<template >
  <div class="hello">
    <div id="components-demo">
      <!-- <button-counter></button-counter> -->
    </div>
    <ButtonCounter></ButtonCounter>
    <p>
      <router-link to="/mail">Mail</router-link>
    </p>
    <router-view>show</router-view>
    <!--<Child title="This is my title"></Child>
    <Child :parentData="{msg: 'xxx'}"></Child>
    <Child :parentData="myData"></Child>
    <Child :stringProp="stringMessage"></Child>-->
    <Child :parentData="myData" v-on:childToParent="onChildClick" v-on:increment="counter++"></Child>    
    <p>{{ counter }}<p>
    <h1>{{ msg }}</h1>
    <p>Enter value : <input v-model.lazy="message"></p>
    <p>Entered Message : {{ message }}</p>
    

  <v-simple-table>
      <thead>
        <tr>
          <th class="text">Id</th>
          <th class="text">Name</th>
          <th class="text">Department</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in employee" :key="item.id">
          <td>
            <div v-if="item.edit"><input v-model.lazy="item.id" placeholder="id"></div>
            <p v-else>{{ item.id }}</p>
          </td>
          <td>
            <div v-if="item.edit"><input v-model.lazy="item.name" placeholder="name"></div>
            <p v-else>{{ item.name }}</p>
          </td>
          <td>
            <div v-if="item.edit"><input v-model.lazy="item.department" placeholder="department"></div>
            <p v-else>{{ item.department}}</p>
          </td>
          <td><button v-on:click="remove(index)">Remove</button></td>
          <td><button v-on:click="edit(item)">Edit Row</button></td>

        </tr>
      </tbody>
  </v-simple-table>
  <br>
  <br>
    <input v-model.lazy="form.id" placeholder="id">
    <input v-model.lazy="form.name" placeholder="Name">
    <input v-model.lazy="form.department" placeholder="department">
    <br>
    <button v-on:click="add()">Add Row</button>
    <br>
    <div>
      <info-card v-for="x in cards" :key='x.frontData' :frontType="'graph'"
      :frontTitle="x.front.title"
      :frontData="x.front.graphData"
      :backTitle="x.back.title"
      :backData="x.back.message"/>
      <br>
      <br>  
      <br>
      <br>    
      <h5 v-for="x in array" :key='x.id'>id: {{x.id}}, Name: {{x.first_name}} {{x.last_Name}}</h5>     
      </div>
  </div>
</template>

<script>
import ButtonCounter from './ButtonCounter.vue'
import Child from './List.vue'
import InfoCard from 'vue-info-card'

// import Vue from 'vue';
export default {
  name: 'HelloWorld',
  components: {
    ButtonCounter,
    Child,
    InfoCard,
  },
  props: {
    msg: String,
  },
  data: ()=> ({
    array:[
 {
   id: '1',
   first_name: 'abc',
   last_Name: 'xyz'
 },
 {
   id: '2',
   first_name: 'any',
   last_Name: 'name'
 },
 {
   id: '3',
   first_name: 'def',
   last_Name: 'suv'
 }
],
   cards:[
     {
     front: {
        title: 'Some Number',
        graphData: [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 5, 6, 2, 4, 5],
      },
      back: {
        title: 'Quote of the day',
        message: '“Create the highest, grandest vision possible for your life, because you become what you believe”',
      }, 
      },
      {
      front: {
        title: 'Some Number',
        graphData: [3, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
      },
      back: {
        title: 'Quote of the day',
        message: '“Wherever life plants you, bloom with grace”',
      }, 
      },
      {
      front: {
        title: 'Some Number',
        graphData: [1, 2, 3, 5, 3, 2, 1, 5, 9, 6, 3, 5, 8, 9, 2, 4],
      },
      back: {
        title: 'Quote of the day',
        message: 'Success is not final, failure is not fatal: it is the courage to continue that counts.',
      }, 
      }],
   myData: {name:"myname",age:20},
   stringMessage: "stringMessage",
   counter: 0,
   fromChild: '',
   message: null,
   form : {
    id: '',
    name: '',
    department: ''
},
   employee: [],
   card: []
  }),
  methods: {
    add() {
      this.employee.push({
        id: this.form.id,
        name: this.form.name,
        department: this.form.department,
        edit: true
      })
      this.form.id="";
      this.form.name="";
      this.form.department=""
    },
    remove(index) {
      // var index = this.employee.indexOf(item)
      this.employee.splice(index,1)
    },
    edit(item){
     item.edit = !item.edit
    },
    onChildClick (value) {
      this.fromChild = value
    },

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  background-color: darkkhaki;
  color: white;
}
td{
  border: 1px solid darkkhaki;
  border-collapse: collapse;
  padding: 8px;
}
h1 {
  margin: 40px 0 0;
  color: darkgreen;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>