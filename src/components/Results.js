import React from "react";
import {useDispatch, useSelector} from "react-redux";

const Results = () => {
    const results = useSelector((state) => state.result);
    const types = useSelector((state) => state.types);

    console.log(types)
    
    if (types.resultType === "employee") {
        return (
            <div className="results">
                {results.map(result => <p key={result.employee_id}>{result.first_name} {result.last_name}</p>)}
            </div>
        )
    }
    if (types.resultType === "room") {
        return (
            <div className="results">
                {results.map(result => <p key={result.room_id}>{result.room_id}</p>)}
            </div>
        )
    }

    return (<div>NIGGGGGGGGGGGGGGGGGGER</div>)

}


export default Results;
