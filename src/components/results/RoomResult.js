import React from "react";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import { useDispatch } from "react-redux";
import { setSelectedType } from "../../reducers/typeSlice";
import { setSelected } from "../../reducers/selectedSlice";
import { useHistory } from "react-router";
import { setFloor } from "../../reducers/floorSlice";
import { getFloor } from "../../services/floor";

const RoomResult = ({ result }) => {
    const dispatch = useDispatch();
    const history = useHistory();

    let roomLabel;

    switch (result.room_type) {
        case "učebna":
            roomLabel = `učebna ${result.room_number} (${result.room_id})`;
            break;
        case "kabinet":
            roomLabel = `kabinet ${result.room_id}`;
            break;
        default:
            return "";
    }

    const handleSelect = (ev) => {
        dispatch(setSelectedType("room"));
        dispatch(setSelected(ev.currentTarget.dataset.room));
        dispatch(setFloor(getFloor(result.floor)));
        history.push("/");
    };

    return (
        <div
            data-room={result.room_id}
            className="result"
            onClick={handleSelect}
        >
            <div className="result-icon">
                <VpnKeyIcon />
            </div>
            <div className="result-content">
                <p className="content-primary">{roomLabel}</p>
                <p className="content-secondary">{result.floor}. patro</p>
            </div>
        </div>
    );
};

export default RoomResult;
