<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1> -->

    <button @click="fn">点击获取后台数据</button><br>
    <button @click="fn1">点击获取</button>
    <ul>
      <li v-for="(item,index) in arr" :key="index">{{item.title}}--{{item.price}}</li>
    </ul>  
  </div>
</template>

<script>
import { getCurrentInstance, reactive, toRefs } from 'vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup(){
    const { proxy } = getCurrentInstance()
    const data = reactive({
      arr:[]
    })
    
    let url = 'https://www.fastmock.site/mock/fa8a771554dfd181a46f8e1b742dd651/test/pro'
    const fn = ()=>{
      proxy.NewAxios.handlepost(url).then((res)=>{
        data.arr = res.datas
        // console.log(res.data);
      }).catch((err)=>{
        console.log(err);
      })
    };
    const fn1 = ()=>{
      proxy.NewAxios.handleget(url,{name:'nihao'}).then((res)=>{
        console.log(res);
      }).catch((err)=>{
        console.log(err);
      })
    }
    return{fn,fn1,...toRefs(data)}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
// li {
//   display: inline-block;
//   margin: 0 10px;
// }
a {
  color: #42b983;
}
</style>
