import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const RoomInfo = ({ room }) => {
    console.log(room)
    const teacherCount = room.teachers.length
    
    if (teacherCount == 0) {
        return (
            <div className="room-info classroom">
                <div className="content">
                    <h3>Učebna č. {room.cabinet_id} </h3>
                </div>
            </div>
        )
    }

    return (
        <div className="room-info cabinet">
            <div className="content">
                <h3>Kabinet č. {room.cabinet_id}</h3>
                <p>Učitelé</p>
                <ul>
                    {[...room.teachers].map((teacher, index) => <li key={index}>{teacher}</li>)}
                </ul>
            </div>
            <p><FontAwesomeIcon icon={faPhone} />  {room.phone}</p>
        </div>
    )

}


export default RoomInfo;
