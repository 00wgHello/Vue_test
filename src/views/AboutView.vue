<template>
  <div class="about">
    <h3>飞哥,你现在年入亿万了吗?</h3>
  </div>
<router-link to="/xiaobo">点击跳到道心世界</router-link>
<div>
  <ul>
      <li v-for="(item,index) in arr" :key="index">{{item.Address}}--{{item.Date}}</li>
  </ul>
  </div>
</template>

<script>
import { getCurrentInstance, reactive, toRefs } from 'vue';
export default {
    name:'AboutView',
    setup(){
      const { proxy } = getCurrentInstance();
      const data = reactive({
        arr:[]
      })
      proxy.http
      .get('/data/index')
      .then((res)=>{
        data.arr = res.data //建议使用深拷贝
        // console.log(res.data);
      })
      .catch((err)=>console.log(err))
      return {...toRefs(data)}
    }
}
</script>

<style scope>
  div{
    height: 100px;    
  }
  li{
    list-style: none;
  }
</style>