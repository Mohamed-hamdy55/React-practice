import { combineReducers } from "redux";
import languageReducer from "./langauge";
import loadingReducer from "./loading";

const reducer =   combineReducers({
    language:languageReducer,
    loading:loadingReducer,
})

export default reducer;