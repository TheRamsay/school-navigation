import React from "react";
import { useDispatch, useSelector } from "react-redux";
import EmployeeResult from "./EmployeeResult";
import RoomResult from "./RoomResult";

const Results = ({ handleSearch }) => {
    const results = useSelector((state) => state.result.value);
    const types = useSelector((state) => state.types.value);

    const selectResult = (event) => {
        handleSearch(event.currentTarget.innerHTML);
    };

    return (
        <div className="results">
            {results.map((result) => {
                switch (types.resultType) {
                    case "employee":
                        return (
                            <EmployeeResult
                                key={result.employee_id}
                                result={result}
                            />
                        );
                    case "room":
                        return (
                            <RoomResult key={result.room_id} result={result} />
                        );
                    default:
                        return "";
                }
            })}
        </div>
    );
};

export default Results;
