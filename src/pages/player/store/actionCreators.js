import * as actionType from "./constants";
import { shuffleFun } from "@/utils/utilsFun";
import { playWayArr } from "@/common/player-local-data";
import { fetchSongUrl, fetchSongsDetail } from "@/services/player"

const locationArrAct = arr => {
	return {
		type: actionType.CHANGE_LOCATION_ARR,
		arr
	}
}

const getLocationArr = getState => {
	let playList = getState().getIn(["player", "playList"])
	let playWay = getState().getIn(["player", "playWay"])
	let playIdx = getState().getIn(["player", "playIdx"])
	let locationArr = getState().getIn(["player", "locationArr"])

	let way = playWayArr[playWay]
	let arr = []

	if (way !== 'one') {
		for (let i = 0; i < playList.length; i++) {
			arr.push(i)
		}
		if (way === 'shuffle') {
			arr = shuffleFun(arr)
		}
	} else if (playIdx !== -1) {
		arr.push(locationArr[playIdx])
	}

	return arr
}

const changeList = detailArr => {
	return {
		type: actionType.CHANGE_PLAY_LIST,
		playList: detailArr
	}
}

export const getListDetail = ids => {
	return (dispatch, getState) => {
		fetchSongsDetail(ids).then(res => {
			dispatch(changeList(res.songs))
			let arr = getLocationArr(getState)
			dispatch(locationArrAct(arr))
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
		let playWay = getState().getIn(["player", "playWay"])
		playWay = typeof idx === 'number' ? idx : playWay + 1;
		playWay = playWay > 2 ? 0 : playWay;
		dispatch(changePlayWay(playWay))
		let arr = getLocationArr(getState)
		dispatch(locationArrAct(arr))
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
		ActionIdx = !ActionIdx && ActionIdx !== 0 ? 1 : ActionIdx
		let playIdx = getState().getIn(["player", "playIdx"])
		let playWay = getState().getIn(["player", "playWay"])
		let playList = getState().getIn(["player", "playList"])
		let playSong = getState().getIn(["player", "playSong"])
		let locationArr = getState().getIn(["player", "locationArr"])

		if (!playList || playList.length === 0) return;

		// 获取播放顺序得到下一个下标
		let way = playWayArr[playWay]
		let newIdx = playIdx + ActionIdx
		if (newIdx >= playList.length) {
			newIdx = 0
		} else if (newIdx < 0) {
			newIdx = playList.length - 1
		}


		if ((playSong.id && way === 'one') || (playSong.id && playList.length === 1 && way === 'loop')) {
			dispatch(changePlaySong({ ...playSong }))
		} else {
			// 获取歌取
			fetchSongUrl(playList[locationArr[newIdx]].id).then(res => {
				let song = res.data[0]
				dispatch(changePlaySongIdx(newIdx))
				dispatch(changePlaySong(song))
			})
		}

	}
}

export const addSongToList = info => {
	return (dispatch, getState) => {
		let playList = getState().getIn(["player", "playList"])
		let ids = []
		if (info instanceof Array) {
			// 如果是数组，是加入一个歌单的情况
			// 获取不在列表中的数组
			let hasIds = playList.map(v => v.id);
			info.forEach(id => {
				if (!hasIds.includes(id)) {
					ids.push(id)
				}
			})
		} else {
			let findIdx = playList.findIndex(v => v.id === Number(info))
			if (findIdx === -1) ids.push(info)
		}
		if (ids.length === 0) return

		fetchSongsDetail(ids).then(res => {
			dispatch(changeList([...playList, ...res.songs]))
			let arr = getLocationArr(getState)
			dispatch(locationArrAct(arr))
		})
	}
}
