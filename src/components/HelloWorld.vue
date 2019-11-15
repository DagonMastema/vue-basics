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
    <buttoncounter></buttoncounter>
  </div>
</template>

<script>
import buttoncounter from './buttoncounter.vue'

export default {    
  name: 'HelloWorld',
  components: {
    buttoncounter
  },  
  props: {
    msg: String,    
  },
  data: ()=> ({
   message: null,
   form : {
    id: '',
    name: '',
    department: ''
},
   employee: [],
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
