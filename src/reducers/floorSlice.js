import { createSlice } from "@reduxjs/toolkit";

export const floorSlice = createSlice({
    name: "floor",
    initialState: {
        value: "first",
    },
    reducers: {
        setFloor: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { setFloor } = floorSlice.actions;

export default floorSlice.reducer;
