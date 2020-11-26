import { Map } from "immutable";
import * as actionType from "./constants"

const defaultState = Map({
	currentId: null,
	currentList: {},
  topList: []
})

function reducer (state = defaultState, action) {
  switch(action.type) {
    case actionType.CHANGE_TOP_LIST:
			return state.set("topList", action.topList);
		case actionType.CHANGE_CURRENT_ID:
			return state.set("currentId", Number(action.id))
									.set("currentList", action.currentList)
    default:
      return state;
  }
}

export default reducer