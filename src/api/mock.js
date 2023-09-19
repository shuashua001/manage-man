import Mock from "mockjs";
import homeData from "./mockData/homeData";
import userData from "./mockData/userData";
import permission from './mockData/permission'

Mock.mock('/local/home','get',homeData.getStatiData)

Mock.mock(/local\/user\/getUser/,'get',userData.getUserList)
Mock.mock('/local/user/add','post',userData.createUser)
Mock.mock('/local/user/del','post',userData.deleteUser)
Mock.mock('/local/user/edit','post',userData.updateUser)

Mock.mock(/local\/permission\/getMenu/,'post',permission.getMenu)