<template>
  <form>
    <label for="">
      名字: <input type="text" v-model="newname" />
    </label>
    <label for="">
      年龄: <input type="text" v-model="newage" />
    </label>
    <button @click="newtj" @mouseout="newlikai">提交</button>
  </form>
</template>

<script>
import {getCurrentInstance,ref} from 'vue'
export default {
   name:'NewZi',
  setup(){
    const {proxy} = getCurrentInstance()
    const newname = ref('')
    const newage = ref(0)
    const newtj = ()=>{
      proxy.$emit('newtj',{newname:proxy.newname,newage:proxy.newage})
    }
    return{newname,newage,newtj,}
  },
  methods:{
    newlikai(){
      this.newname = '',
      this.newage = ''
    }
  }
   
};
</script>

<style>

</style>