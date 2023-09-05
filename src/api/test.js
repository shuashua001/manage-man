import http from '../utils/request.js'

export const getHomeData = ()=> {
  return http({
    method: 'get',
    url: '/home'
  })
}