import { Map } from "immutable";
import * as actionType from "./constants";

const defaultState = Map({
  //0循环 1随机 2单曲循环
  playWay: 0,
	playIdx: -1,
	playSong: {},
	playSongInfo: {},
  playList: []
})

function reducer(state = defaultState, action) {
  switch(action.type) {
    case actionType.CHANGE_PLAYING_SONG_IDX:
      return state.set("playIdx", action.playIdx);
		case actionType.CHANGE_PLAYING_SONG:
			return state.set("playSong", action.playSong);
		case actionType.CHANGE_PLAY_LIST:
      return state.set("playList",action.playList);
    case actionType.CHANGE_PLAY_WAY:
      return state.set("playWay", action.playWay)
    default:
      return state;
  }
}

export default reducer;
