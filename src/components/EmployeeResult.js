import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import PersonIcon from '@material-ui/icons/Person';

const EmployeeResult = ({ result }) => {

    let iconColor = result.gender === "F" ? "female" : "male"

    return (
        <div className="result">
            <div className="result-icon">
                <PersonIcon className={iconColor}/>
            </div>
            <div className="result-content">
                <p className="content-primary">{result.first_name} {result.last_name}</p> 
                <p className="content-secondary">kabinet {result.room_id}</p>
            </div>
        </div>
    )

}

export default EmployeeResult;
