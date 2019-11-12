<template >
  <div class="hello">
    <h1>{{ msg }}</h1>    
    <p>Enter value : <input v-model="message"></p>
    <p>Entered Message : {{ message }}</p>
        
  <v-simple-table>
      <thead>
        <tr>
          <th class="text">Id</th>
          <th class="text">Name</th>
          <th class="text">Department</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in employee" :key="item.Id">
          <td>{{ item.Id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.Department }}</td>
        </tr>
      </tbody>
  </v-simple-table>
  <br>
   
    <input v-model="Id" placeholder="Id">
    <input v-model="name" placeholder="Name">
    <input v-model="Department" placeholder="Department">
    <br>
    <button v-on:click="$emit('Add')">Add</button>
    <button v-on:click="$emit('Remove')">Remove</button> 
    <button v-on:click="$emit('Edit')">Edit</button>       
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String    
  },
  data: ()=> ({
   message: null,
    employee: [{
      Id: '',
      name: '',
      Department: '',
      rowData:[] ,
          },
        ],
         methods: {
           Add:()=> {
            this.rowData.push({
              Id: '',
              name: '',
              Department: ''
            })
           }
          
         }
     })
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
