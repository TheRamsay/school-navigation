import React from "react";
import { useDispatch, useSelector } from "react-redux";
import EmployeeResult from "./EmployeeResult";
import RoomResult from "./RoomResult";

const Results = ({ handleSearch }) => {
    const results = useSelector((state) => state.result.value);
    const types = useSelector((state) => state.types.value);

    return (
        <div className="results">
            {results.map((result, index) => {
                switch (types.resultType) {
                    case "employee":
                        return <EmployeeResult key={index} result={result} />;
                    case "room":
                        return <RoomResult key={index} result={result} />;
                    default:
                        return "";
                }
            })}
        </div>
    );
};

export default Results;
