<template >
  <div class="hello">
    <h1>{{ msg }}</h1>    
    <p>Enter value : <input v-model.lazy="message"></p>
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
          <td><button v-on:click="remove()">Remove</button></td>         
        </tr>
      </tbody>
  </v-simple-table>
  <br>
   
    <input v-model.lazy="Id" placeholder="Id">
    <input v-model.lazy="name" placeholder="Name">
    <input v-model.lazy="Department" placeholder="Department">
    <br>
    <button v-on:click="add()">Add Row</button>  
     
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,    
  },
  data: ()=> ({
   message: null,
   Id:"",
   name:"",
   Department:"",
   
    employee: [{
      Id: '',
      name: '',
      Department: '',
    }],
  }),
  methods: {
          add() {
              this.employee.push({
                Id: this.Id,
                name: this.name,
                Department: this.Department,
              })
            },
          remove(index) {
              this.employee.splice(index,1)
          }
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
