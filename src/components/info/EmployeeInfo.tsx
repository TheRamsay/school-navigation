import React, { useState, useEffect } from "react";
import { getEmployee } from "../../services/api";
import SkeletonInfo from "./SkeletonInfo";
import EmailIcon from "@material-ui/icons/Email";
import RoomIcon from "@material-ui/icons/Room";
import {
    setSelectedRoom,
    setSelectedEmployee,
} from "../../reducers/selectedSlice";
import { setSelectedType } from "../../reducers/typeSlice";
import { RootState } from "../../store";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { Employee, HTMLClickEvent } from "../../types";

const EmployeeInfo = () => {
    const selectedEmployeeID = useAppSelector(
        (state: RootState) => state.selected.value.employee
    );
    const selectedRoomID = useAppSelector((state: RootState) => state.selected.value.room);
    const [employee, setEmployee] = useState<Employee | null>(null);
    const [fetched, setFetched] = useState(false);
    const dispatch = useAppDispatch();

    const handleRoomClick = (ev: HTMLClickEvent) => {
        const roomID = ev.currentTarget.dataset.room;
        if (roomID !== selectedRoomID && roomID !== undefined) {
            dispatch(setSelectedRoom(roomID));
        }
        dispatch(setSelectedType("room"));
        dispatch(setSelectedEmployee(null));
    };

    useEffect(() => {
        if (selectedEmployeeID !== null) {
            getEmployee(selectedEmployeeID).then((data) => {
                setEmployee(data);
                setFetched(true);
            });
        }
    }, [selectedEmployeeID]);

    if (fetched && employee !== null) {
        return (
            <div className="room-info">
                <h3 className="info-title">
                    {employee.first_name} {employee.last_name}
                </h3>
                <div
                    className="content"
                    data-room={employee.room_id}
                >
                    <div
                        className="icon-with-text"
                        onClick={handleRoomClick}
                    >
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
