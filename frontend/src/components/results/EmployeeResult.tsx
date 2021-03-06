import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import {setSelectedType} from "../../reducers/typeSlice";
import {
    setSelectedEmployee,
    setSelectedRoom,
} from "../../reducers/selectedSlice";
import {useHistory} from "react-router";
import {setFloor} from "../../reducers/floorSlice";
import {getFloor} from "../../services/floor";
import {Employee, EmployeeWithRooms, HTMLClickEvent, Room} from "../../types";
import {useAppDispatch} from "../../hooks";

interface EmployeeResultProps {
    result: Employee,
}

const EmployeeResult = ({result}: EmployeeResultProps) => {
    const dispatch = useAppDispatch();
    const history = useHistory();

    let iconColor = result.gender === "F" ? "female" : "male";

    const handleSelect = (ev: HTMLClickEvent) => {
        dispatch(setSelectedType("employee"));
        const room = ev?.currentTarget?.dataset.room;
        const employee = ev?.currentTarget?.dataset.employee;
        if (room) {
            dispatch(setSelectedRoom(room));
        }
        if (employee) {
            dispatch(setSelectedEmployee(employee));
        }
        dispatch(setFloor(result.room.floor));
        history.push("/");
    };

    return (
        <div
            data-room={result?.room?.room_id || ""}
            data-employee={result.employee_id}
            className="result clickable"
            onClick={handleSelect}
        >
            <div className="result-icon">
                <PersonIcon className={iconColor}/>
            </div>
            <div className="result-content">
                <p className="content-primary">
                    <span>{result.titles_before}</span>
                    <span>
                        {result.first_name} {result.last_name}
                    </span>
                    <span>
                        {result.titles_after}
                    </span>
                </p>
                <p className="content-secondary"> {result?.room?.room_id ? `kabinet ${result.room.room_id}` : ""}</p>
            </div>
        </div>
    );
};

export default EmployeeResult;
