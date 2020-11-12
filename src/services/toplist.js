import request from "./request"

export const fetchAllTopList = () => {
  return request({
    url: "/toplist"
  })
}