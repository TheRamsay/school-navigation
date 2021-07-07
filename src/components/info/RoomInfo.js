import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRoom } from "../../services/api";
import PhoneIcon from "@material-ui/icons/Phone";
import PersonIcon from "@material-ui/icons/Person";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import SkeletonInfo from "./SkeletonInfo";
import { setSelectedType } from "../../reducers/typeSlice";
import { setSelectedEmployee } from "../../reducers/selectedSlice";

const RoomInfo = () => {
    const selectedRoomID = useSelector((state) => state.selected.value.room);
    const [room, setRoom] = useState({ teachers: [] });
    const [fetched, setFetched] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        if (selectedRoomID) {
            getRoom(selectedRoomID)
                .then((data) => {
                    setRoom(data);
                    setFetched(true);
                })
                .catch((e) => {
                    setFetched(false);
                });
        }
    }, [selectedRoomID]);

    const handleTeacherClick = (ev) => {
        const employeeID = ev.currentTarget.dataset.employee;
        dispatch(setSelectedEmployee(employeeID));
        dispatch(setSelectedType("employee"));
    };

    const CabinetInfo = () => {
        return (
            <div className="room-info">
                <div className="content">
                    <h3>KABINET {room.room_id}</h3>
                    <p>Učitelé</p>
                    <ul>
                        {room.teachers.map((teacher, index) => (
                            <li
                                key={index}
                                data-employee={teacher.employee_id}
                                onClick={handleTeacherClick}
                            >
                                {teacher.first_name} {teacher.last_name}
                            </li>
                        ))}
                    </ul>
                    <div className="icon-with-text">
                        <PhoneIcon />
                        <p>{room.phone_number}</p>
                    </div>
                </div>
            </div>
        );
    };

    const ClassRoomInfo = () => {
        return (
            <div className="room-info">
                <div className="content">
                    <h3>UČEBNA {room.room_number}</h3>
                    <div className="icon-with-text">
                        <LocalOfferIcon />
                        {room.room_id}
                    </div>
                    {/* <div>
                        <PhoneIcon />
                        {room.phone_number}
                    </div> */}
                </div>
            </div>
        );
    };

    if (fetched) {
        switch (room.room_type) {
            case "učebna":
                return <ClassRoomInfo />;
            case "kabinet":
                return <CabinetInfo />;
            default:
                return (
                    <div className="room-info">
                        <div className="content">
                            <h3>
                                {room.room_type} {room.room_id}
                            </h3>
                            <p className="icon-with-text">
                                <PhoneIcon />
                                {room.phone_number}
                            </p>
                        </div>
                    </div>
                );
        }
    } else {
        return <SkeletonInfo />;
    }
};

export default RoomInfo;
