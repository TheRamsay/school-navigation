import React, {useState} from "react";
import LayersIcon from "@material-ui/icons/Layers";
import {setFloor} from "../../reducers/floorSlice";
import {RootState} from "../../store";
import {HTMLClickEvent} from "../../types";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {clearSelected} from "../../reducers/selectedSlice";
import {clearTypes} from "../../reducers/typeSlice";

const FloorPicker = () => {
    const [active, setActive] = useState(false);
    const dispatch = useAppDispatch();
    const floor = useAppSelector((state: RootState) => state.floor.value);

    const toggleActive = () => {
        setActive(!active);
    };

    const changeFloor = (ev: HTMLClickEvent) => {
        dispatch(setFloor(ev.currentTarget.id));
        dispatch(clearSelected());
        dispatch(clearTypes());
        toggleActive();
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
            <div className="floor-picker clickable" onClick={toggleActive}>
                <LayersIcon/>
            </div>
            {active ? <FloorMenu/> : ""}
        </>
    );
};

export default FloorPicker;
