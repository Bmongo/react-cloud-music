import { Map } from "immutable";
import * as actionType from "./constants";

const defaultState = Map({
  banners: []
})

function reducer(state = defaultState, action) {
  switch(action.type) {
    case actionType.CHANGE_BANNERS:
      return state.set("banners", action.banners);
    default:
      return state;
  }
}

export default reducer;