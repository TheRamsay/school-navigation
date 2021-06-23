const typeReducer = (state = {}, action) => {
    switch(action.type) {
        case "SET_RESULT_TYPE":
            return { ...state, resultType: action.resultType}
        case "SET_SELECTED_TYPE":
            return { ...state, selectedType: action.selectedType}
        default:
            return state;
    }
}

export const setSelectedType = (selectedType) => {
    return {
        type: "SET_SELECTED_TYPE",
        selectedType
    }
};

export const setResultType = (resultType) => {
    return {
        type: "SET_RESULT_TYPE",
        resultType
    }
};

export default typeReducer;
