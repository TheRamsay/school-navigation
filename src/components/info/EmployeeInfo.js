import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getEmployee } from "../../services/api";
import SkeletonInfo from "./SkeletonInfo";
import EmailIcon from "@material-ui/icons/Email";
import RoomIcon from "@material-ui/icons/Room";

const EmployeeInfo = () => {
    const selectedEmployeeID = useSelector(
        (state) => state.selected.value.employee
    );
    const [employee, setEmployee] = useState(null);
    const [fetched, setFetched] = useState(false);

    useEffect(() => {
        getEmployee(selectedEmployeeID).then((data) => {
            setEmployee(data);
            setFetched(true);
        });
    }, [selectedEmployeeID]);

    if (fetched) {
        return (
            <div className="room-info">
                <div className="content">
                    <h3>
                        {employee.first_name} {employee.last_name}
                    </h3>

                    <div className="icon-with-text">
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
