import { createSlice } from "@reduxjs/toolkit";

export const selectedSlice = createSlice({
    name: "selected",
    initialState: {
        value: { room: null, employee: null },
    },
    reducers: {
        setSelectedRoom: (state, action) => {
            if (state.value.room !== null) {
                if (state.value.room === action.payload) {
                    state.value.room = null;
                } else {
                    state.value.room = action.payload;
                }
            } else {
                state.value.room = action.payload;
            }
        },
        setSelectedEmployee: (state, action) => {
            if (state.value.employee !== null) {
                if (state.value.employee === action.payload) {
                    state.value.employee = null;
                } else {
                    state.value.employee = action.payload;
                }
            } else {
                state.value.employee = action.payload;
            }
        },
        clearSelected: (state, action) => {
            state.value = { room: null, employee: null };
        },
    },
});

export const {
    setSelectedRoom,
    setSelectedEmployee,
    clearSelected,
} = selectedSlice.actions;

export default selectedSlice.reducer;
