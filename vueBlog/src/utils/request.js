/*
 * @Author: zhangmeng 
 * @Date: 2020-12-13 23:00:27 
 * @Last Modified by: zhangmeng
 * @Last Modified time: 2020-12-13 23:33:48
 */
import axios from 'axios'
import { Notification } from 'element-ui';

// 创建请求
const service = axios.create({
  baseURL: '', // api的base_url
  method: `get`,
  withCredentials: true, // 后端session
  timeout: 60000 // request timeout
})

// 请求处理
service.interceptors.request.use(config => {
  // Do something before request is sent
  if (typeof config.params !== 'object') {
      config.params = {
          t: new Date().getTime()
      }
  }
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// respone interceptor
service.interceptors.response.use(
  response => {
    const res = response.data
    return res
  },
  error => {
      console.log('err' + error) // for debug
      Notification({
          title: '温馨提示',
          message: error.message,
          type: 'error',
          duration: 3 * 1000
      })
      return Promise.reject(error)
  })

export default service
