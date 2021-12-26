import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEmployee } from "../../services/api";
import SkeletonInfo from "./SkeletonInfo";
import EmailIcon from "@material-ui/icons/Email";
import RoomIcon from "@material-ui/icons/Room";
import {
    setSelectedRoom,
    setSelectedEmployee,
} from "../../reducers/selectedSlice";
import { setSelectedType } from "../../reducers/typeSlice";

const EmployeeInfo = () => {
    const selectedEmployeeID = useSelector(
        (state) => state.selected.value.employee
    );
    const selectedRoomID = useSelector((state) => state.selected.value.room);
    const [employee, setEmployee] = useState(null);
    const [fetched, setFetched] = useState(false);
    const dispatch = useDispatch();

    const handleRoomClick = (ev) => {
        const roomID = ev.currentTarget.dataset.room;
        if (roomID !== selectedRoomID) {
            dispatch(setSelectedRoom(roomID));
        }
        dispatch(setSelectedType("room"));
        dispatch(setSelectedEmployee(null));
    };

    useEffect(() => {
        getEmployee(selectedEmployeeID).then((data) => {
            setEmployee(data);
            setFetched(true);
        });
    }, [selectedEmployeeID]);

    if (fetched) {
        return (
            <div className="room-info">
                <h3 className="info-title">
                    {employee.first_name} {employee.last_name}
                </h3>
                <div
                    className="content"
                    data-room={employee.room_id}
                    onClick={handleRoomClick}
                >
                    <div className="icon-with-text">
                        <RoomIcon />
                        <p>{employee.room_id}</p>
                    </div>
                    <div className="icon-with-text">
                        <EmailIcon />
                        <p>{employee.email}</p>
                    </div>
                </div>
            </div>
        );
    } else {
        return <SkeletonInfo />;
    }
};

export default EmployeeInfo;
