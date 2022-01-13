import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type stringAction = PayloadAction<string | null>;
interface SelectedState {
    value: {
        room: string | null,
        employee: string | null
    }
}

export const selectedSlice = createSlice({
    name: "selected",
    initialState: {
        value: { room: null, employee: null },
    } as SelectedState,
    reducers: {
        setSelectedRoom: (state, action: stringAction) => {
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
        setSelectedEmployee: (state, action: stringAction) => {
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
        clearSelected: (state) => {
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
