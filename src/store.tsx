import resultReducer from "./reducers/resultSlice";
import selectedReducer from "./reducers/selectedSlice";
import typeReducer from "./reducers/typeSlice";
import floorReducer from "./reducers/floorSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        result: resultReducer,
        selected: selectedReducer,
        types: typeReducer,
        floor: floorReducer,
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
