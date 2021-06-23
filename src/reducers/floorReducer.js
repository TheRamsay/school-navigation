const floorReducer = (state = "first", action) => {

    switch(action.type){
        case "SET_FLOOR":
            return action.floor;
        default:
            return state
    }
}


export const setFloor = (floor) => {
    return {
        type: "SET_FLOOR",
        floor
    }
}

export default floorReducer;
