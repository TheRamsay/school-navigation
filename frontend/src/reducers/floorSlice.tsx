import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type floor = "0" | "1" | "2" | "3" | "4";

interface FloorState {
    value: string
}

export const floorSlice = createSlice({
    name: "floor",
    initialState: {
        value: "1",
    } as FloorState,
    reducers: {
        setFloor: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        },
    },
});

export const {setFloor} = floorSlice.actions;

export default floorSlice.reducer;
