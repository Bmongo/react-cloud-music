import { Map } from "immutable";
import * as actionType from "./constants";

const defaultState = Map({
	banners: [],
  hotRecommend: [],
  newAlbum: []
})

function reducer(state = defaultState, action) {
  switch(action.type) {
    case actionType.CHANGE_BANNERS:
			return state.set("banners", action.banners);
		case actionType.CHANGE_HOT_RECOMMEND:
			return state.set("hotRecommend",action.hotRecommend);
		case actionType.CHANGE_NEW_ALBUM:
			return state.set("newAlbum",action.newAlbum);
    default:
      return state;
  }
}

export default reducer;