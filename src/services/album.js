/**
 * @Author: Bmongo
 * @Github: https://github.com/Bmongo
 * @Date: 2020-11-12 16:33:56
 * @LastEditTime: 2020-11-12 16:35:44
 */
import request from "./request"

export const fetchAlbumSongs = id => {
	return request({
		url: "/album",
		params: { id }
	})
}