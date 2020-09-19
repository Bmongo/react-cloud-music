import request from "./request"

export const fetchBanners = () => {
  return request({
    url: "/banner"
  })
}