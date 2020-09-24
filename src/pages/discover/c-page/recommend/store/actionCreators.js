import * as actionType from "./constants";

import {
	fetchBanners,
	fetchHotRecommend,
	fetchNewAlbum
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
			console.log(res)
			dispatch(changeNewAlbum(res))
		}).catch(e => {
			console.log(e)
		})
	}
}
