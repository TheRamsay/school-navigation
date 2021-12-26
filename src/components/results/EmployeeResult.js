import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import { setSelectedType } from "../../reducers/typeSlice";
import {
    setSelectedEmployee,
    setSelectedRoom,
} from "../../reducers/selectedSlice";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { setFloor } from "../../reducers/floorSlice";
import { getFloor } from "../../services/floor";

const EmployeeResult = ({ result }) => {
    const dispatch = useDispatch();
    const history = useHistory();

    let iconColor = result.gender === "F" ? "female" : "male";

    const handleSelect = (ev) => {
        dispatch(setSelectedType("employee"));
        dispatch(setSelectedRoom(ev.currentTarget.dataset.room));
        dispatch(setSelectedEmployee(ev.currentTarget.dataset.employee));
        dispatch(setFloor(getFloor(result.floor)));
        history.push("/");
    };

    return (
        <div
            data-room={result.room_id}
            data-employee={result.employee_id}
            className="result"
            onClick={handleSelect}
        >
            <div className="result-icon">
                <PersonIcon className={iconColor} />
            </div>
            <div className="result-content">
                <p className="content-primary">
                    <span>{result.title_before}. </span>
                    <span>
                        {result.first_name} {result.last_name}
                    </span>
                    <span>
                        {result.title_after
                            ? ", " + result.title_after + "."
                            : ""}
                    </span>
                </p>
                <p className="content-secondary">kabinet {result.room_id}</p>
            </div>
        </div>
    );
};

export default EmployeeResult;
