import React from "react";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { RootState } from "../../store";
import { Employee, Room } from "../../types";
import EmployeeResult from "./EmployeeResult";
import RoomResult from "./RoomResult";

interface ResultsProps {
    handleSearch: (query: string) => void
}

const Results = ({ handleSearch }: ResultsProps) => {
    const results = useAppSelector((state: RootState) => state.result.value);
    const types = useAppSelector((state: RootState) => state.types.value);

    return (
        <div className="results">
            {results.map((result, index) => {
                switch (types.resultType) {
                    case "employee":
                        return <EmployeeResult key={index} result={result as Employee} />;
                    case "room":
                        return <RoomResult key={index} result={result as Room} />;
                    default:
                        return "";
                }
            })}
        </div>
    );
};

export default Results;
