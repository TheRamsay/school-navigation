import React, { useState } from "react";
import LayersIcon from "@material-ui/icons/Layers";
import { useDispatch, useSelector } from "react-redux";
import { setFloor } from "../../reducers/floorSlice";

const FloorPicker = () => {
    const [active, setActive] = useState(false);
    const dispatch = useDispatch();
    const floor = useSelector((state) => state.floor.value);

    const toggleActive = () => {
        setActive(!active);
    };

    const changeFloor = (ev) => {
        dispatch(setFloor(ev.currentTarget.id));
    };

    const FloorMenu = () => {
        return (
            <div className="floor-menu">
                <div id="first" className="floor-option" onClick={changeFloor}>
                    1
                </div>
                <div id="second" className="floor-option" onClick={changeFloor}>
                    2
                </div>
                <div id="third" className="floor-option" onClick={changeFloor}>
                    3
                </div>
                <div id="fourth" className="floor-option" onClick={changeFloor}>
                    4
                </div>
            </div>
        );
    };

    return (
        <>
            <div className="floor-picker" onClick={toggleActive}>
                <LayersIcon />
            </div>
            {active ? <FloorMenu /> : ""}
        </>
    );
};

export default FloorPicker;
