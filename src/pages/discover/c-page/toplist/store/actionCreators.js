import * as actionType from "./constants";
import { fetchAllTopList } from "@/services/toplist"

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
