import React, {useEffect, useState} from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { getTeacher, getCabinet } from "../services/api";

const Search = ({searchHandler}) => {
    const [value, setValue] = useState("");
    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:5000/api/teacher/all")
            .then(res => res.data)
            .then(data => {
                setTeachers(data);
            })
    }, [])



	const handleSearch = () => {

        if (value.includes(" ")){
            getTeacher(value).then(data => {
                searchHandler(data);
                const element = document.getElementById(data.cabinet_id);
                element.scrollIntoView({ "behavior": "smooth", "block": "center"});
                document.getElementById("search-input").value = "";
                setValue("");
            })
        } else {
            getCabinet(value).then(data => {
                searchHandler(data);
                const element = document.getElementById(data.cabinet_id);
                element.scrollIntoView({ "behavior": "smooth", "block": "center"});
                document.getElementById("search-input").value = "";
                setValue("");
            })
        }
    }

    return (
        <div className="searchbox">
            <input id="search-input" type="text" onChange={(ev) => setValue(ev.currentTarget.value)} />
            <FontAwesomeIcon icon={faSearch} onClick={handleSearch} size="1x" color="#333030"/>
        </div>
    )


}

export default Search;
