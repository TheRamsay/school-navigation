import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import VpnKeyIcon from '@material-ui/icons/VpnKey';

const RoomResult = ({ result }) => {
    let roomLabel;
    switch(result.room_type) {
        case "učebna":
            roomLabel = `učebna ${result.room_number} (${result.room_id})`;
            break;
        case "kabinet":
            roomLabel = `kabinet ${result.room_id}`;
            break;
    }


    return (
        <div className="result">
            <div className="result-icon">
                <VpnKeyIcon />
            </div>
            <div className="result-content">
                <p className="content-primary">{roomLabel}</p>
                <p className="content-secondary">{result.floor}. patro</p>
            </div>
        </div>
    )

}

export default RoomResult;
