import { Map } from "immutable";
import * as actionType from "./constants";

const defaultState = Map({
	banners: [],
  hotRecommend: [],
  newAlbum: [],
  upToplist: {},
  newToplist: {},
	originToplist: {},
	settleSinger: [],
	dj: []
})

function reducer(state = defaultState, action) {
  switch(action.type) {
    case actionType.CHANGE_BANNERS:
			return state.set("banners", action.banners);
		case actionType.CHANGE_HOT_RECOMMEND:
			return state.set("hotRecommend",action.hotRecommend);
		case actionType.CHANGE_NEW_ALBUM:
      return state.set("newAlbum",action.newAlbum);
    case actionType.CHANGE_UP_TOPLIST:
      return state.set("upToplist",action.toplist);
    case actionType.CHANGE_NEW_TOPLIST:
      return state.set("newToplist",action.toplist);
    case actionType.CHANGE_ORIGIN_TOPLIST:
      return state.set("originToplist",action.toplist);
		case actionType.CHANGE_SETTLE_SINGER:
			return state.set("settleSinger",action.settleSinger);
		case actionType.CHANGE_DJ:
			return state.set("dj",action.dj)
    default:
      return state;
  }
}

export default reducer;