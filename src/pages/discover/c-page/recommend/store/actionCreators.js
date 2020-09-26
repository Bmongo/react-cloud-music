import * as actionType from "./constants";

import { toplistIds } from "@/common/recommend-local-data";

import {
	fetchBanners,
	fetchHotRecommend,
	fetchNewAlbum,
	fetchRecommendToplist
} from "@/services/recommend"

const changeBannerAction = (res) => {
  return {
    type: actionType.CHANGE_BANNERS,
    banners: res.banners
  }
}

export const getBanners = () => {
  return dispatch => {
    fetchBanners().then(res => {
      dispatch(changeBannerAction(res))
    }).catch(e => {
      console.log(e)
    })
  }
}

const changeHotRecommend = res => {
	return {
		type: actionType.CHANGE_HOT_RECOMMEND,
		hotRecommend: res.result
	}
}

export const getHotRecommend = () => {
	return dispatch => {
		fetchHotRecommend().then(res => {
			dispatch(changeHotRecommend(res))
		}).catch(e => {
			console.log(e);
		})
	}
}

const changeNewAlbum = res => {
	return {
		type: actionType.CHANGE_NEW_ALBUM,
		newAlbum: res.monthData
	}
}

export const getNewAlbum = () => {
	return dispatch => {
		fetchNewAlbum(0, 10).then(res => {
			dispatch(changeNewAlbum(res))
		}).catch(e => {
			console.log(e)
		})
	}
}

const changeRecommendToplist = (res, idx) => {
	let result = {
		toplist: res.playlist
	}
	result.type = idx === 0 ? actionType.CHANGE_UP_TOPLIST : idx === 1 ? actionType.CHANGE_NEW_TOPLIST : actionType.CHANGE_ORIGIN_TOPLIST
	return result
}

export const getRecommendToplist = idx => {
	const id = toplistIds[idx]
	return dispatch => {
		fetchRecommendToplist(id).then(res => {
			dispatch(changeRecommendToplist(res, idx))
		}).catch(e => {
			console.log(e)
		})
	}
}
