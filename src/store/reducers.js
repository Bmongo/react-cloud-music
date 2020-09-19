import { combineReducers } from "redux-immutable";

import recommendReducer from "../pages/discover/c-page/recommend/store/"

export default combineReducers({
  recommend: recommendReducer
})
