import React, {useEffect, useState} from "react";
import {getRoom} from "../../services/api";
import PhoneIcon from "@material-ui/icons/Phone";
import PersonIcon from "@material-ui/icons/Person";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import SkeletonInfo from "./SkeletonInfo";
import {setSelectedType} from "../../reducers/typeSlice";
import {setSelectedEmployee} from "../../reducers/selectedSlice";
import {RootState} from "../../store";
import {HTMLClickEvent, Room} from "../../types";
import {useAppDispatch, useAppSelector} from "../../hooks";

const RoomInfo = () => {
    const selectedRoomID = useAppSelector((state: RootState) => state.selected.value.room);
    const [room, setRoom] = useState<Room | null>(null);
    const [fetched, setFetched] = useState(false);
    const dispatch = useAppDispatch();

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

    const handleTeacherClick = (ev: HTMLClickEvent) => {
        const employeeID = ev?.currentTarget?.dataset?.employee;
        if (employeeID !== undefined) {
            dispatch(setSelectedEmployee(employeeID));
            dispatch(setSelectedType("employee"));
        }
    };

    const CabinetInfo = () => {
        if (room !== null) {
            return (
                <div className="room-info">
                    <div className="content">
                        <h3>KABINET {room.room_id}</h3>
                        <p>Učitelé</p>
                        <ul>
                            {room.teachers.map((teacher, index) => (
                                <li className={"clickable"}
                                    key={index}
                                    data-employee={teacher.employee_id}
                                    onClick={handleTeacherClick}
                                >
                                    {teacher.first_name} {teacher.last_name}
                                </li>
                            ))}
                        </ul>
                        <div className="icon-with-text">
                            <PhoneIcon/>
                            <p>{room.phone_extension}</p>
                        </div>
                    </div>
                </div>
            );
        }

        return <></>
    };

    const ClassRoomInfo = () => {
        if (room !== null) {
            return (
                <div className="room-info">
                    <div className="content">
                        <h3>UČEBNA {room.room_number}</h3>
                        <div className="icon-with-text">
                            <LocalOfferIcon/>
                            {room.room_id}
                        </div>
                        {/* <div>
                            <PhoneIcon />
                            {room.phone_number}
                        </div> */}
                    </div>
                </div>
            );
        }
        return <></>;
    };

    if (fetched && room !== null) {
        switch (room.room_type) {
            case "učebna":
                return <ClassRoomInfo/>;
            case "kabinet":
                return <CabinetInfo/>;
            default:
                return (
                    <div className="room-info">
                        <div className="content">
                            <h3>
                                {room.room_type} {room.room_id}
                            </h3>
                            <p className="icon-with-text">
                                <PhoneIcon/>
                                {room.phone_extension}
                            </p>
                        </div>
                    </div>
                );
        }
    } else {
        return <SkeletonInfo/>;
    }
};

export default RoomInfo;
