import * as actionType from "./constants";
import { fetchSongUrl, fetchSongsDetail } from "@/services/player"

const changeList = detailArr => {
	return {
		type: actionType.CHANGE_PLAY_LIST,
		playList: detailArr
	}
}

export const getListDetail = ids => {
	return dispatch => {
		fetchSongsDetail(ids).then(res => {
			dispatch(changeList(res.songs))
		})
	}
}

const changePlayingSong = song => {
  return {
    type: actionType.CHANGE_PLAYING_SONG,
    playSong: song
  }
}

export const getSongUrl = id => {
	return dispatch => {
		fetchSongUrl(id).then(res => {
			dispatch(changePlayingSong(res.data[0]))
		})
	}
}

const changePlayWay = way => {
	return {
		type: actionType.CHANGE_PLAY_WAY,
		playWay: way
	}
}

export const changeWay = idx => {
	return (dispatch, getState) => {
		let playWay = getState().getIn(["player","playWay"])
		playWay = typeof idx === 'number' ? idx : playWay + 1;
		playWay = playWay > 2 ? 0 : playWay;
		dispatch(changePlayWay(playWay))
	}
}
