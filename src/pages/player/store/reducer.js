import { Map } from "immutable";
import * as actionType from "./constants";

const defaultState = Map({
  playIdx: -1,
  playList: []
})

function reducer(state = defaultState, action) {
  switch(action.type) {
    case actionType.CHANGER_PLAYING_SONG:
      return state.set("playing", action.song);
    default:
      return state;
  }
}

export default reducer;