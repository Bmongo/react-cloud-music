import * as actionType from "./constants";

const changePlayingSong = idx => {
  return {
    type: actionType.CHANGER_PLAYING_SONG,
    playIdx: idx
  }
}

export const changePlaying = idx => {
  return dispatch => {
    dispatch(changePlayingSong(idx))
  }
}
