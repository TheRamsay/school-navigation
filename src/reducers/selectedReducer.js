const selectedReducer = (state = null, action) => {
    switch (action.type) {
        case "SET_SELECTED":
            if (state !== null){
                if (state === action.selected_id) {
                    return null;
                }
            }
            return action.selected_id;
        default:
            return state;
    }
};

export const setSelected = (selected_id) => {
    return {
        type: "SET_SELECTED",
        selected_id,
    };
};



export default selectedReducer;
