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

export const changeSong = ActionIdx => {
	return (dispatch, getState) => {
		let playIdx = getState().getIn(["player", "playIdx"])
		let playWay = getState().getIn(["player", "playWay"])
		let playList = getState().getIn(["player", "playList"])
		if(!playList || playList.length === 0) return;

		// 获取播放顺序得到下一个下标
		let way = playWayArr[playWay]
		let newIdx = playIdx
		if(!ActionIdx) {
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
		} else {
			newIdx += ActionIdx
			if(newIdx >= playList.length) {
				newIdx = 0
			} else if(newIdx < 0) {
				newIdx = playList.length - 1
			}
		}

		// 获取歌取
		fetchSongUrl(playList[newIdx].id).then(res => {
			let song = res.data[0]
			dispatch(changePlaySongIdx(newIdx))
			dispatch(changePlaySong(song))
		})

	}
}

export const addSongToList = info => {
	return (dispatch, getState) => {
		let playList = getState().getIn(["player", "playList"])
		let ids = []
		if(info instanceof Array) {
			// 如果是数组，是加入一个歌单的情况
			// 1.获取不在列表中的数组
			
		} else {
			let findIdx = playList.findIndex(v => v.id === Number(info))
			if(findIdx === -1) ids.push(info)
		}
		if(ids.length === 0) return
	}
}
