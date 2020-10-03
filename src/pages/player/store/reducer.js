import { Map } from "immutable";
import * as actionType from "./constants";

const defaultState = Map({
	playIdx: -1,
	playSong: {},
	playSongInfo: {},
  playList: []
})

function reducer(state = defaultState, action) {
  switch(action.type) {
    case actionType.CHANGER_PLAYING_SONG_IDX:
      return state.set("playIdx", action.playIdx);
		case actionType.CHANGER_PLAYING_SONG:
			return state.set("playSong", action.playSong);
		case actionType.CHANGER_PLAY_LIST:
			return state.set("playList",action.playList);
    default:
      return state;
  }
}

export default reducer;
