import * as actionType from "./constants";

import {
	fetchBanners,
	fetchHotRecommend
} from "@/services/recommend"

const changeBannerAction = (res) => {
  return {
    type: actionType.CHANGE_BANNERS,
    banners: res.banners
  }
}

const changeHotRecommend = res => {
	return {
		type: actionType.CHANGE_HOT_RECOMMEND,
		hotRecommend: res.result
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

export const getHotRecommend = () => {
	return dispatch => {
		fetchHotRecommend().then(res => {
			dispatch(changeHotRecommend(res))
		}).catch(e => {
			console.log(e);
		})
	}
}