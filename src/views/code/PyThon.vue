<template>
  <div>
    <h3>我是python工程师</h3> 
    <img src="../../assets/logo.png" alt="">   
  </div>
  <br>
  <input type="text" v-model="txt"><br>
  <button @click="newtj">点击页面跳转</button>
  
</template>

<script>
import {useRouter} from 'vue-router'
import {ref} from 'vue'
export default {
  name:'PyThon',
  setup(){
    let txt = ref('')
    const router = useRouter()
    const newtj = () => {
      // 第一种格式发送
      router.push({path:'/TypeScripy',query:{user:txt.value}})
      //第二种格式发送
      // router.push({name:'TypeScripy',params:{name:txt.value}})
    }
    return {txt,newtj}
  }
}
</script>

<style>

</style>