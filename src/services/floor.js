export const getFloor = (floor) => {
    switch (floor) {
        case 1 || "1":
            return "first";
        case 2 || "2":
            return "second";
        case 3 || "3":
            return "third";
        case 4 || "4":
            return "fourth";
        default:
            return "first";
    }
};
