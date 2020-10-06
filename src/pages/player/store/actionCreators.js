import * as actionType from "./constants";
import { playWayArr } from "@/common/player-local-data";
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

const changePlaySong = song => {
	return {
		type: actionType.CHANGE_PLAYING_SONG,
		song,
	}
}

const changePlaySongIdx = playIdx => {
	return {
		type: actionType.CHANGE_PLAYING_SONG_IDX,
		playIdx,
	}
}

export const autoChangeSong = () => {
	return (dispatch, getState) => {
		let { playIdx, playWay, playList } = getState()

		// 获取播放顺序得到下一个下标
		let way = playWayArr[playWay]
		let newIdx = playIdx
		switch(way) {
			case "loop":
				newIdx += 1;
				if(newIdx >= playList.length) {
					newIdx = 0
				}
				break;
			case "shuffle":
				while(newIdx === playIdx) {
					newIdx = (Math.random() * playList.length) >> 0
				}
				break;
			case "one":
				newIdx = newIdx < 0 ? 0 : newIdx
				break;
			default:
				break;
		}

		// 获取歌取
		fetchSongUrl(playList[newIdx].id).then(res => {
			let song = res.data[0]
			dispatch(changePlaySongIdx(newIdx))
			dispatch(changePlaySong(song))
		})

	}
}
