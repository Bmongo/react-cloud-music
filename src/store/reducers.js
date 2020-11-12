import { combineReducers } from "redux-immutable";

import playerReducer from "../pages/player/store";
import recommendReducer from "../pages/discover/c-page/recommend/store/";
import topListReducer from "../pages/discover/c-page/toplist/store"

export default combineReducers({
  player: playerReducer,
  recommend: recommendReducer,
  topList: topListReducer
})
