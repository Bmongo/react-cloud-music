import request from "./request"

export const fetchBanners = () => {
  return request({
    url: "/banner"
  })
}

export const fetchHotRecommend = () => {
	return request({
		url: "/personalized?limit=8"
	})
}

export const fetchNewAlbum = (offset, limit) => {
  return request({
    url: "/top/album",
    params: {
      type: 'hot',
      offset,
      limit
    }
  })
}

export const fetchRecommendToplist = id => {
  return request({
    url: "/playlist/detail",
    params: {
      id
    }
  })
}
