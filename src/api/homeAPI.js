import http from '../utils/request.js'

export const getHomeDataApi = ()=> {
  return http({
    method: 'get',
    url: '/home'
  })
}