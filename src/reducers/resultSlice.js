import { createSlice } from "@reduxjs/toolkit";

export const resultSlice = createSlice({
    name: "result",
    initialState: {
        value: [],
    },
    reducers: {
        setResult: (state, action) => {
            state.value = action.payload;
        },
        clearResult: (state, action) => {
            state.value = [];
        },
    },
});

export const { setResult, clearResult } = resultSlice.actions;

export default resultSlice.reducer;
