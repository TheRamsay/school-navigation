import { createSlice } from "@reduxjs/toolkit";

export const selectedSlice = createSlice({
    name: "selected",
    initialState: {
        value: null,
    },
    reducers: {
        setSelected: (state, action) => {
            if (state.value !== null) {
                if (state.value === action.payload) {
                    state.value = null;
                } else {
                    state.value = action.payload;
                }
            } else {
                state.value = action.payload;
            }
        },
    },
});

export const { setSelected } = selectedSlice.actions;

export default selectedSlice.reducer;
