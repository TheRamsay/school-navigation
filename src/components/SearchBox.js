import React, {useEffect, useState} from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Results from "./Results";
import { makeQuery } from "../services/api";
import {useDispatch, useSelector} from "react-redux";
import {clearResult, setResult} from "../reducers/resultReducer";
import {setSelected} from "../reducers/selectedReducer";
import {setResultType, setSelectedType} from "../reducers/typeReducer";

const SearchBox = ({searchHandler}) => {
    const [value, setValue] = useState("");
    const dispatch = useDispatch();
    const results = useSelector(state => state.result)
    const selectedID = useSelector(state => state.selected);

    const handleChange = (ev) => {
        setValue(ev.currentTarget.value);
    }


    useEffect(() => {
        makeQuery(value).then(data => {
            if (value.length > 0) {

                if (data.result) {
                    dispatch(setResult(data.result));
                    dispatch(setResultType(data.type));
                } else {
                    dispatch(setResult([]));
                    dispatch(setResultType(null));
                }
            } else {
                dispatch(clearResult())
            }
        }) 
    }, [value])


	const handleSearch = () => {
        makeQuery(value).then(data => {
            dispatch(setSelectedType(data.type));
            const firstResult = data.result[0];
            if (selectedID !== firstResult.room_id) {
                dispatch(setSelected(firstResult.room_id))
                const element = document.getElementById(firstResult.room_id).firstElementChild;
                element.scrollIntoView({ "behavior": "smooth", "block": "center"});
                element.classList.add("selected-room")
            }
        })
        dispatch(clearResult)
        document.getElementById("search-input").value = "";
        setValue("");
    }


    return (
        <>
            <div className="searchbox">
                <input id="search-input" type="text" onChange={handleChange} autoComplete="off"/>
                <FontAwesomeIcon icon={faSearch} onClick={handleSearch} size="1x" color="#333030"/>
                { results.length !== 0 ? <Results /> : "" }
            </div>
            {}
        </>
    )


}

export default SearchBox;
