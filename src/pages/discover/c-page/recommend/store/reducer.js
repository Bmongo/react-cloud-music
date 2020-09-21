import { Map } from "immutable";
import * as actionType from "./constants";

const defaultState = Map({
	banners: [],
	hotRecommend: [],
})

function reducer(state = defaultState, action) {
  switch(action.type) {
    case actionType.CHANGE_BANNERS:
			return state.set("banners", action.banners);
		case actionType.CHANGE_HOT_RECOMMEND:
			return state.set("hotRecommend",action.hotRecommend)
    default:
      return state;
  }
}

export default reducer;