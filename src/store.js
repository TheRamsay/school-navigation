import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import floorReducer from "./reducers/floorReducer";
import resultReducer from "./reducers/resultReducer";
import selectedReducer from "./reducers/selectedReducer";
import typeReducer from "./reducers/typeReducer";

const reducer = combineReducers({
    result: resultReducer,
    selected: selectedReducer,
    types: typeReducer,
    floor: floorReducer
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
export default store;
