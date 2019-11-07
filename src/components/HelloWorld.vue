<template>
  <div class="hello">
    <h1>{{ msg }}</h1>    
    <p>Enter value : <input v-model="message"></p>
    <p>Entered Message : {{ message }}</p>
    <div class="table">
      <table :height="height" :width="width" :border="border" :aria-colcount="columns" :aria-rowcount="rows" ></table>
    </div>
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
   height:100,
   width:500,
   border:1 ,
   columns:3,
   rows:4,
 })
 

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.table{
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: minimax(5px, auto); 
  text-align: center;
  }
.cell{
  border :  0.5px solid black ;
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
