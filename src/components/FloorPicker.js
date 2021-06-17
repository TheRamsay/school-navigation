import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";

const FloorPicker = () => {
    
    return (
        <div className="floor-picker">
            <FontAwesomeIcon icon={faLayerGroup} size="2x" color="#333030" />
        </div>
    )
}

export default FloorPicker;
