<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
  <!-- <div id="container"></div>  -->
  
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    
  },
  // mounted(){
  //   this.mpas()
  // },
  methods:{
    // mpas(){
    // var map = new window.BMapGL.Map("container");
    // // 创建地图实例 
    // var point = new window.BMapGL.Point(116.404, 39.915);
    // // 创建点坐标 
    // map.centerAndZoom(point, 15);
    // // 初始化地图，设置中心点坐标和地图级别 
    // }
 
  }
}
</script>

<style scope>
  #container {
    width:500px; height: 300px;
    margin: 0 auto;
    }  
</style>
