import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type stringAction = PayloadAction<string | null>;
interface TypeState {
    value: {
        resultType: string | null,
        selectedType: string | null
    }
}

export const typeSlice = createSlice({
    name: "type",
    initialState: {
        value: { resultType: null, selectedType: null },
    } as TypeState,
    reducers: {
        setResultType: (state, action: stringAction) => {
            state.value = { ...state.value, resultType: action.payload };
        },
        setSelectedType: (state, action: stringAction) => {
            state.value = { ...state.value, selectedType: action.payload };
        },
        clearTypes: (state) => {
            state.value = { resultType: null, selectedType: null };
        },
    },
});

export const { setResultType, setSelectedType, clearTypes } = typeSlice.actions;

export default typeSlice.reducer;
