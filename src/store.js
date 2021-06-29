import resultReducer from "./reducers/resultSlice";
import selectedReducer from "./reducers/selectedSlice";
import typeReducer from "./reducers/typeSlice";
import floorReducer from "./reducers/floorSlice";
import { configureStore } from "@reduxjs/toolkit";

// const reducer = combineReducers({
//     result: resultReducer,
//     selected: selectedReducer,
//     types: typeReducer,
//     floor: floorReducer
// });

// const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
// export default store;

export default configureStore({
    reducer: {
        result: resultReducer,
        selected: selectedReducer,
        types: typeReducer,
        floor: floorReducer,
    },
});
