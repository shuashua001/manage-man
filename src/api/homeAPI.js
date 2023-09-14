import http from '../utils/request.js'

export const getHomeDataApi = ()=> {
  return http({
    method: 'get',
    url: '/home'
  })
}

export const getUserDataApi = (params)=> {
  return http({
    method: 'get',
    url: '/user/getUser',
    params
  })
}

export const addUserApi = (data)=> {
  return http({
    method: 'post',
    url: '/user/add',
    data
  })
}

export const delUserDataApi = (data)=> {
  return http({
    method: 'post',
    url: '/user/del',
    data
  })
}

export const editUserDataApi = (data)=> {
  return http({
    method: 'post',
    url: '/user/edit',
    data
  })
}