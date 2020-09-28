import { combineReducers } from "redux-immutable";

import playerReducer from "../pages/player/store";
import recommendReducer from "../pages/discover/c-page/recommend/store/";

export default combineReducers({
  player: playerReducer,
  recommend: recommendReducer
})
