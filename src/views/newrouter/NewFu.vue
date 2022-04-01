<template>
 <router-link to="/about">点此跳转About页面</router-link>
  <div>
      <new-zi @newtj="newtj"></new-zi>
      <hr>
      <table class="divv" width="500" height="30" border="1" cellpadding="0" 
      cellspacing="0" align="center">
          <tr>
              <th>名字</th>
              <th>年龄</th>
              <th>操作</th>
          </tr>
          <tr v-for="(item,index) in arr" :key="index">
              <td>{{item.newname}}</td>
              <td>{{item.newage}}</td>
              <td><a @click="del(index)">删除</a></td>
          </tr>
           </table>
           <div class="xinl">
          
              <button @click="newdel">删除全部</button>      
              <button v-if="!arr.length">暂无数据</button>
          
          </div>    
  </div>
 
</template>

<script>
import { reactive, toRefs } from 'vue';
import NewZi from './NewZi.vue'
export default {
  components: { NewZi },
   name:'NewFu',
  setup(){
     const data = reactive({
         arr:[]
     }) 
     return{...toRefs(data)}
  },
  methods:{
      newtj(val){ //val就是子组件传过来的值, 你无需再对他进行解剖
          this.arr.push(val); //已经获取到值了, 就将该值赋值给一个空数组
      },
      del(n){
          let newww = window.confirm('确定删除我吗?');
          if(newww){
              this.arr.splice(n,1);
          }
      },
      newdel(){
          this.arr = [];
      }
  }
};


</script>

<style scope>
 /* .divv{ */
     /* background-color: #cc3306; */
     /* margin: 0 auto;
     width: 33%;
 } */
 .xinl{
     margin: 0 auto;
 }
</style>