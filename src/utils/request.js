import axios from 'axios';
import qs from 'qs';
import {baseUrl} from './config';

// 创建axios实例
const service = axios.create({
  baseURL: baseUrl, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// request拦截器
service.interceptors.request.use(
  config => {
    if(config.method === 'post') {
      config.data = qs.stringify(config.data);
    }
    console.log(config)
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)


// 响应拦截器
service.interceptors.response.use(
  response => {
      // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
      // 否则的话抛出错误
      // if (response.state == 200) {
      //     return Promise.resolve(response);
      // } else {
      //     return Promise.reject(response);
      // }
  },
  error => { }
)

function request(url, data = {}, method = 'get'){
  console.log(data);
  return new Promise((resolve, reject) =>{
    service({
        method,
        url,
        data
      })
      .then(res => {
        resolve(res)
      })
      .catch(error => {
        reject(error);
        console.log(error)
      })
    })
}


export default request