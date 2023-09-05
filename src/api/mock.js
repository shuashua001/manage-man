import Mock from "mockjs";
import homeData from "./mockData/homeData";

Mock.mock('/local/home','get',homeData.getStatiData)
