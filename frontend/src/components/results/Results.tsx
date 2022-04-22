import React, {useEffect, useState} from "react";
import {useAppSelector, useAppDispatch} from "../../hooks";
import {RootState} from "../../store";
import {Employee, EmployeeWithRooms, Room, SimpleRoom} from "../../types";
import EmployeeResult from "./EmployeeResult";
import RoomResult from "./RoomResult";

interface ResultsProps {
    handleSearch: (query: string) => void
}

const Results = ({handleSearch}: ResultsProps) => {
    const results = useAppSelector((state: RootState) => state.result.value);
    const types = useAppSelector((state: RootState) => state.types.value);
    const [parsedResults, setParsedResults] = useState<Array<Employee | Room>>([]);

    useEffect(() => {
        const out: Array<Employee | Room> = []
        results.forEach((result) => {
            switch (types.resultType) {
                case "employee":
                    let data = result as EmployeeWithRooms;
                    if (data.rooms.length === 0) {
                        const {rooms, ...obj} = data
                        out.push(obj as Employee)
                        break
                    }
                    const employees: Array<Employee> = data.rooms.map((room) => {
                        const {rooms, ...employeeWithoutRoom} = data;
                        return {room, ...employeeWithoutRoom};
                    })
                    out.push(...employees);
                    break
                case "room":
                    out.push(result as Room)
                    break
                default:
                    break
            }
        })
        setParsedResults(out);
    }, [results, types.resultType])

    return (
        <div className="results">
            {parsedResults.map((result, index) => {
                switch (types.resultType) {
                    case "employee":
                        return <EmployeeResult key={index} result={result as Employee}/>;
                    case "room":
                        return <RoomResult key={index} result={result as Room}/>;
                    default:
                        return
                }

            })}
        </div>
    );
};

export default Results;
