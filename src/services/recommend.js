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

export const fetchRecommendSettleSinger = () => {
	return request({
    url: "/top/artists",
    params: {
      limit: 5
    }
  })
}

export const fetchRecommendDj = () => {
	return request({
    url: "/dj/toplist/popular",
    params: {
      limit: 5
    }
  })
}
