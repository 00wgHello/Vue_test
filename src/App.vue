<template>
  <nav>   
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>| 
    <router-link to="/xiaobo">道心被毁</router-link>|
    <router-link to="/HelloWorld">欢迎您</router-link>
   <div class="top"> 
    <router-link to="/python">python工程师</router-link> 
    </div> 
    <div class="left"> 
    <router-link to="/typeScripy">typeScripy工程师</router-link>
    </div>
  </nav>  

  <router-view/>
  
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.left,.top{
  width: 150px;
  height: 50px;
  border: 1px solid #42b983;
  background-color: #9caef5;
}
</style>
