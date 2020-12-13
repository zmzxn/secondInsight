/*
 * @Author: zhangmeng 
 * @Date: 2020-12-13 23:18:15 
 * @Last Modified by: zhangmeng
 * @Last Modified time: 2020-12-13 23:34:26
 */
import request from '@/utils/request'

// 获取文章列表列表
export function getArticleList (params = []) {
  return request({
      url: '',
      method: 'get',
      params: params
  })
}