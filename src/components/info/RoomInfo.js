import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getRoom } from "../../services/api";
import PhoneIcon from "@material-ui/icons/Phone";
import PersonIcon from "@material-ui/icons/Person";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import Skeleton from "@material-ui/lab/Skeleton";

const RoomInfo = () => {
    const selectedID = useSelector((state) => state.selected.value);
    const [room, setRoom] = useState({ teachers: [] });
    const [fetched, setFetched] = useState(false);

    useEffect(() => {
        getRoom(selectedID).then((data) => {
            setRoom(data);
            setFetched(true);
        });
    }, [selectedID]);

    const CabinetInfo = () => {
        return (
            <div className="room-info">
                <div className="content">
                    <h3>KABINET {room.room_id}</h3>
                    <p>Učitelé</p>
                    <ul>
                        {room.teachers.map((teacher, index) => (
                            <li key={index}>
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
        return (
            <div className="room-info skeleton">
                <Skeleton height={80} width={200}/>
                <Skeleton />
                <Skeleton />
                <Skeleton />
            </div>
        );
    }
};

export default RoomInfo;
