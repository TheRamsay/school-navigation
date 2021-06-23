import React, {useEffect, useState} from "react";
import axios from "axios";
import RoomInfo from "./RoomInfo";
import FirstFloor from "./FirstFloor";
import SecondFloor from "./SecondFloor";
import {useSelector} from "react-redux";

const Map = () => {

    const floor = useSelector(state => state.floor)
    const floorOptions = {first: <FirstFloor />, second: <SecondFloor />}

    return (
        <div className="map">
            {floor === "first" ? <FirstFloor /> : <SecondFloor />}
        </div>

    )
}

export default Map;
