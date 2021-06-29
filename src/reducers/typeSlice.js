import { createSlice } from "@reduxjs/toolkit";

export const typeSlice = createSlice({
    name: "type",
    initialState: {
        value: { resultType: null, selectedType: null },
    },
    reducers: {
        setResultType: (state, action) => {
            state.value = { ...state.value, resultType: action.payload };
        },
        setSelectedType: (state, action) => {
            state.value = { ...state.value, selectedType: action.payload };
        },
    },
});

export const { setResultType, setSelectedType } = typeSlice.actions;

export default typeSlice.reducer;
