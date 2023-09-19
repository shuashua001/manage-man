import http from '../utils/request.js'

export const getMenu = (data)=> {
  return http({
    method: 'post',
    url: '/permission/getMenu',
    data
  })
}