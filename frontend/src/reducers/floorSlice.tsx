import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type floor = "first" | "second" | "third" | "fourth";
interface FloorState {
    value: string
}

export const floorSlice = createSlice({
    name: "floor",
    initialState: {
        value: "first",
    } as FloorState,
    reducers: {
        setFloor: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        },
    },
});

export const { setFloor } = floorSlice.actions;

export default floorSlice.reducer;
