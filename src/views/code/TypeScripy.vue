<template>
  <div>
    <h3>我是TypeScripy工程师</h3>
    <img :src="urlimg" alt="">
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    name:'TypeScripy',
    setup(){
      let urlimg = ref(require('../../assets/logo.png'))
      return {urlimg}
    }
}
</script>

<style>

</style>