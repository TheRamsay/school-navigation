import React from "react";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import {setSelectedType} from "../../reducers/typeSlice";
import {setSelectedRoom} from "../../reducers/selectedSlice";
import {useHistory} from "react-router";
import {setFloor} from "../../reducers/floorSlice";
import {getFloor} from "../../services/floor";
import {HTMLClickEvent, Room} from "../../types";
import {useAppDispatch} from "../../hooks";

interface RoomProps {
    result: Room
}

const RoomResult = ({result}: RoomProps) => {
    const dispatch = useAppDispatch();
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
            roomLabel = `místnost ${result.room_id}`;
            return <></>;
    }

    const handleSelect = (ev: HTMLClickEvent) => {
        dispatch(setSelectedType("room"));
        const room = ev?.currentTarget?.dataset?.room;
        if (room) {
            dispatch(setSelectedRoom(room));
        }
        dispatch(setFloor(result.floor));
        history.push("/");
    };

    return (
        <div
            data-room={result.room_id}
            className="result clickable"
            onClick={handleSelect}
        >
            <div className="result-icon">
                <VpnKeyIcon/>
            </div>
            <div className="result-content">
                <p className="content-primary">{roomLabel}</p>
                <p className="content-secondary">{result.floor}. patro</p>
            </div>
        </div>
    );
};

export default RoomResult;
