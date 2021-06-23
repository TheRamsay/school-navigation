import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import {useDispatch, useSelector} from "react-redux";
import {setFloor} from "../reducers/floorReducer";

const FloorPicker = () => {
    
    const [active, setActive] = useState(false);
    const dispatch = useDispatch();
    const floor = useSelector(state => state.floor)

    const toggleActive = () => {
        setActive(!active)
    };

    const changeFloor = (ev) => {
        dispatch(setFloor(ev.currentTarget.id)) 
    }

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
        )
    }

    return (
        <>
            <div className="floor-picker" onClick={toggleActive}>
                <FontAwesomeIcon icon={faLayerGroup} size="1x" color="#333030" />
            </div>
            {active ? <FloorMenu /> : ""}
        </>
    )

}

export default FloorPicker;
