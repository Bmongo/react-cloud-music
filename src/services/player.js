import request from "./request"

export const fetchSongUrl = id => {
	return request({
		url: "/song/url",
		params: { id }
	})
}

export const fetchSongsDetail = idsInfo => {
	let ids = typeof idsInfo === 'string' || typeof idsInfo === 'number' ? idsInfo : idsInfo instanceof Array ? idsInfo.toString() : ""
	return request({
		url: "/song/detail",
		params: { ids }
	})
}

export const fetchListDetail = id => {
	return request({
		url: "/playlist/detail",
		params: { id }
	})
}
