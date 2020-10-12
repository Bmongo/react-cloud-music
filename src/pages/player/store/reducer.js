import { Map } from "immutable";
import * as actionType from "./constants";

const defaultState = Map({
  //0循环 1随机 2单曲循环
  playWay: 0,
	playIdx: -1,
	playSong: {},
	playSongInfo: {},
	playList: [],
	
	// 存放播放列表的idx
	locationArr: []
})

function reducer(state = defaultState, action) {
  switch(action.type) {
    case actionType.CHANGE_PLAYING_SONG_IDX:
      return state.set("playIdx", action.playIdx);
		case actionType.CHANGE_PLAYING_SONG:
			return state.set("playSong", action.song);
		case actionType.CHANGE_PLAY_LIST:
      return state.set("playList",action.playList);
    case actionType.CHANGE_PLAY_WAY:
			return state.set("playWay", action.playWay);
		case actionType.CHANGE_LOCATION_ARR:
			return state.set("locationArr", action.arr);
		case actionType.CHANGE_PLAYING_SONG_INFO:
			return state.set("playSongInfo", action.info);
    default:
      return state;
  }
}

export default reducer;
