import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import { setSelectedType } from "../../reducers/typeSlice";
import { setSelected } from "../../reducers/selectedSlice";
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
        dispatch(setSelected(ev.currentTarget.dataset.room));
        dispatch(setFloor(getFloor(result.floor)));
        history.push("/");
    };

    return (
        <div
            data-room={result.room_id}
            className="result"
            onClick={handleSelect}
        >
            <div className="result-icon">
                <PersonIcon className={iconColor} />
            </div>
            <div className="result-content">
                <p className="content-primary">
                    {result.first_name} {result.last_name}
                </p>
                <p className="content-secondary">kabinet {result.room_id}</p>
            </div>
        </div>
    );
};

export default EmployeeResult;
