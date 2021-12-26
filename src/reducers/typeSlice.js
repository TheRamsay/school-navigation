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
        clearTypes: (state, action) => {
            state.value = { resultType: null, selectedType: null };
        },
    },
});

export const { setResultType, setSelectedType, clearTypes } = typeSlice.actions;

export default typeSlice.reducer;
