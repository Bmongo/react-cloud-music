import * as actionType from "./constants";
import { fetchSongUrl, fetchSongsDetail } from "@/services/player"

const changeList = detailArr => {
	return {
		type: actionType.CHANGER_PLAY_LIST,
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
    type: actionType.CHANGER_PLAYING_SONG,
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
