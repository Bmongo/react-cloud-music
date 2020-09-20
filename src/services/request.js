import axios from 'axios';

import { baseURL, timeout } from "@/common/server-config";

const instance = axios.create({baseURL,timeout})

instance.interceptors.request.use(config => {
  return config
},err => {
  console.log(err)
})

instance.interceptors.response.use(res => {
  return res.data
}, err => {
  console.log(err)
})

export default instance;
