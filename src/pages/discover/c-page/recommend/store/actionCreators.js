import * as actionType from "./constants";

import {
  fetchBanners
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