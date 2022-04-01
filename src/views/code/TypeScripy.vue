<template>
  <div>
    <h3>我是TypeScripy工程师</h3>
    <img :src="urlimg" alt=""><br>
    <h1>{{txt}}</h1>
  </div>
</template>

<script>
import { ref } from 'vue'
import {useRoute} from 'vue-router'
export default {
    name:'TypeScripy',
    setup(){
      let urlimg = ref(require('../../assets/logo.png'))
      
      const msg = ref('')
      const route = useRoute()
      msg.value = route.query.user
      //第一种格式接收:
      // console.log(route.query.user);
      //第二种格式
      // console.log(route.params.name);
      return {urlimg,route,msg}
    },
    computed:{
      txt(){
        return this.route.query.user;
      }
    }
}
</script>

<style>

</style>