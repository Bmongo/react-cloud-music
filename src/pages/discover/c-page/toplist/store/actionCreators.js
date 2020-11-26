import * as actionType from "./constants";
import { fetchAllTopList } from "@/services/toplist"
import { fetchListDetail } from "@/services/player";

const changeTopListAct = res => {
  return {
    type: actionType.CHANGE_TOP_LIST,
    topList: res.list || []
  }
}

export const fetchTopList = () => {
  return dispatch => {
    fetchAllTopList().then(res => {
      dispatch(changeTopListAct(res))
    }).catch(e => {
      console.log(e)
    })
  }
}

const changeCurrentIdAct = (id, res) => {
	return {
		type: actionType.CHANGE_CURRENT_ID,
		id,
		currentList: res.playlist
	}
}

export const changeCurrentId = id => {
	id = id || 19723756;
	return dispatch => {
		fetchListDetail(id).then(res => {
			dispatch(changeCurrentIdAct(id, res))
		}).catch(e => {
			console.log(e);
		})
	}
}
