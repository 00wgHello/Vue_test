import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//引入axios文件
import axios from 'axios'
//引入mock文件
require('../mock')

// 项目的入口文件, 包放在这里, 相当于全局使用
// 因为V3中, 取消了 this 的关键字

 //在v3 setup 里面 引入 this
const app = createApp(App);
app.config.globalProperties.http = axios;
// app.config.globalProperties.that = this;
app.use(router).mount('#app')
// createApp(App).use(router).mount('#app')

//引入axios封装
import NewAxios from './http/http'
app.config.globalProperties.NewAxios = NewAxios;
