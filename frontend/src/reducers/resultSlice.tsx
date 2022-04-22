import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EmployeeWithRooms, Room } from "../types";

type arrayAction = PayloadAction<Array<EmployeeWithRooms | Room>>;
interface ResultState {
    value: Array<EmployeeWithRooms | Room>
}

export const resultSlice = createSlice({
    name: "result",
    initialState: {
        value: [],
    } as ResultState,
    reducers: {
        setResult: (state, action: arrayAction) => {
            state.value = action.payload;
        },
        clearResult: (state) => {
            state.value = [];
        },
    },
});

export const { setResult, clearResult } = resultSlice.actions;

export default resultSlice.reducer;

