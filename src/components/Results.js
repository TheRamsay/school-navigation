import React from "react";
import { useDispatch, useSelector } from "react-redux";
import EmployeeResult from "./EmployeeResult";
import RoomResult from "./RoomResult";

const Results = ({ handleSearch }) => {
	const results = useSelector((state) => state.result);
	const types = useSelector((state) => state.types);

    const selectResult = (event) => {
        handleSearch(event.currentTarget.innerHTML);
    }

	// if (types.resultType === "employee") {
	// 	return (
	// 		<div className="results">
	// 			{results.map((result) => (
	// 				<p key={result.employee_id} onClick={selectResult}>
	// 					{result.first_name} {result.last_name}
	// 				</p>
	// 			))}
	// 		</div>
	// 	);
	// }
	// if (types.resultType === "room") {
	// 	return (
	// 		<div className="results">
	// 			{results.map((result) => (
	// 				<p key={result.room_id} onClick={selectResult}>
	// 					{result.room_id}
	// 				</p>
	// 			))}
	// 		</div>
	// 	);
	// }

   let Result;

    return (
        <div className="results">
            {results.map(result => {
                switch(types.resultType){
                    case "employee":
                        return <EmployeeResult result={result} />;
                    case "room":
                        return <RoomResult result={result}/>
                }
            })}
        </div>
    )

};

export default Results;
