import React, {useEffect, useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import {useSelector} from "react-redux";
import {getRoom} from "../services/api";


const RoomInfo = () => {
    const selectedID = useSelector(state => state.selected);
    const [room, setRoom] = useState({teachers: []})

    useEffect(() => {
        getRoom(selectedID).then(data => {
            setRoom(data);
        });
    }, [selectedID])

    return (
        <div className="room-info cabinet">
            <div className="content">
                <h3>{room.room_type} č. {room.room_id}</h3>
                <p>Učitelé</p>
                <ul>
                    {room.teachers.map((teacher, index) => <li key={index}>{teacher.first_name} {teacher.last_name}</li>)}
                </ul>
            </div>
            <p><FontAwesomeIcon icon={faPhone} />  {room.phone_number}</p>
        </div>
    )
    
}

export default RoomInfo;
