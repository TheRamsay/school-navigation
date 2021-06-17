import React, {useEffect, useState} from "react";
import axios from "axios";
import MapSVG from "./MapSVG";
import RoomInfo from "./RoomInfo";

const Map = () => {

    return (
        <div className="map">
            <MapSVG />
        </div>

    )
}

export default Map;
