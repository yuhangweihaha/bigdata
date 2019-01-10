import axios from 'axios'
import vue from 'vue'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded'
// 请求拦截器
axios.interceptors.request.use(function(config) {
  return config;
}, function(error) {
  return Promise.reject(error);
});
// 响应拦截器
axios.interceptors.response.use(function(response) {
  return response;
}, function(error) {
  return Promise.reject(error);
});

// 封装axios的post请求
export function fetch(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      })
  })
}
export function fetchGet(url, param) {
  return new Promise((resolve, reject) => {
    axios.get(url, {params: param})
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
export default {
  post(url, params) {
    return fetch(url, params);
  },
  get(url, params) {
    return fetchGet(url, params);
  }
}
