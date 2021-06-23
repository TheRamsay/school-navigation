const resultReducer = (state = [], action) => {
    switch (action.type) {
        case "SET_RESULT":
            return [...action.result];
        case "CLEAR_RESULT":
            return [];
        default:
            return state;
    }
};


export const clearResult = () => {
    return {
        type: "CLEAR_RESULT",
    };
};

export const setResult = (result) => {
    return {
        type: "SET_RESULT",
        result,
    };
};


export default resultReducer;
