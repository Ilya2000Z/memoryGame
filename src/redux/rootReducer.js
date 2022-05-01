import { combineReducers } from "redux";
import { TilesReducer } from "./tilesReducer";
export const rootReducer = combineReducers({
    Tiles: TilesReducer
})
