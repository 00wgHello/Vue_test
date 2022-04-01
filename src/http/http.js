import axios from "axios"

//使用create方法创建axios实例
export const instance = axios.create({
    url:'/add',  //根据后台的接口地址
    beseURL:'/',  //放在url的前面
    timeout:7000, //请求超时间
    method:'get',//请求方式  可以不写默认get
    header:{
        'Content-Type': 'application/json;charset=UTF-8'       
    }
});

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });

// 封装需要的函数
const NewAxios = {
    handleget (url, params) {
        return instance.get(url, { params }).then((res) => {
            return res;
        })
    },
    handlepost (url, params) {
        return new Promise((resolve, reject) => {
            instance.get(url, params).then((res) => {
                resolve(res.data);
                console.log(res.data);
            }).catch(err => {
                reject(err);
            })
        })
    }
}
export default NewAxios
