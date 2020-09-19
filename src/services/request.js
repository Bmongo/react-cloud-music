import axios from 'axios';

import { baseURL, timeout } from "@/common/server.config.js";

const instance = axios.create({baseURL,timeout})

instance.interceptors.request.use(config => {
  return config
},err => {
  console.log(err)
})

instance.interceptors.response(res => {
  console.log(res)
  return res.data
}, err => {
  console.log(err)
})

export default instance;