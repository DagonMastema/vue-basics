<template>
    <p>{{info}}</p>
</template>

<script>
import axios from 'axios' 

export default {
    name: 'Test',
    components: {
        axios
    },
    data () {
    return {
      info: null
    }
  },
  methods:{
  mounted () {
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => (this.info = response))
  }
  }
}
</script>