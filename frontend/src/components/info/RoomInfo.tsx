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

type TeachersProps = { room: Room };

const Teachers = ({room}: TeachersProps) => {
    const dispatch = useAppDispatch();

    const handleTeacherClick = (ev: HTMLClickEvent) => {
        const employeeID = ev?.currentTarget?.dataset?.employee;
        if (employeeID !== undefined) {
            dispatch(setSelectedEmployee(employeeID));
            dispatch(setSelectedType("employee"));
        }
    };
    return (
        <>
            <p>Lidé</p>
            <ul>
                {room?.teachers && room.teachers.map((teacher, index) => (
                    <li className={"clickable"}
                        key={index}
                        data-employee={teacher.employee_id}
                        onClick={handleTeacherClick}
                    >
                        {teacher.titles_before}{teacher.first_name} {teacher.last_name}{teacher.titles_after}
                    </li>
                ))}
            </ul>
        </>
    )
}

const RoomInfo = () => {
    const selectedRoomID = useAppSelector((state: RootState) => state.selected.value.room);
    const [room, setRoom] = useState<Room | null>(null);
    const [fetched, setFetched] = useState(false);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!selectedRoomID) {
            return;
        }
        let isCanceled = false;
        getRoom(selectedRoomID)
            .then((data) => {
                if (!isCanceled) {
                    setRoom(data);
                    setFetched(true);
                }
            })
            .catch(() => {
                if (!isCanceled) {
                    setFetched(false);
                }
            });

        return () => {
            isCanceled = true;
        };
    }, [selectedRoomID]);

    const CabinetInfo = () => {
        if (room !== null) {
            return (
                <div className="room-info">
                    <div className="content">
                        <h3>KABINET {room.room_id}</h3>
                        {room.teachers.length > 0 && <Teachers room={room}/>}
                        <div className="icon-with-text">
                            <PhoneIcon/>
                            <p>{room.phone_extension ? "541 649 " + room.phone_extension : ""}</p>
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
                            <LocalOfferIcon className={"room-id-icon"}/>
                            <p>{room.room_id}</p>
                        </div>
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
                                {room.room_type.toUpperCase()} {room.room_id}
                            </h3>
                            {room.teachers.length > 0 && <Teachers room={room}/>}
                            <div className="icon-with-text">
                                {room.phone_extension && <PhoneIcon/>}
                                <p>{room.phone_extension ? "541 649 " + room.phone_extension : ""}</p>
                            </div>
                        </div>
                    </div>
                );
        }
    } else {
        return <SkeletonInfo/>;
    }
};

export default RoomInfo;
