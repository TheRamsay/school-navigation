import React, { useEffect, useState } from "react";
import axios from "axios";
import Results from "../results/Results";
import { makeQuery } from "../../services/api";
import { useDispatch, useSelector } from "react-redux";
import { setResult } from "../../reducers/resultSlice";
import { setResultType } from "../../reducers/typeSlice";
import { clearResult } from "../../reducers/resultSlice";
import SearchIcon from "@material-ui/icons/Search";
import { useHistory, useLocation } from "react-router";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const SearchBox = ({ handleSearch }) => {
    const [value, setValue] = useState("");
    const dispatch = useDispatch();
    const results = useSelector((state) => state.result.value);
    const selectedID = useSelector((state) => state.selected.value);
    const history = useHistory();
    const location = useLocation();

    const handleChange = (ev) => {
        setValue(ev.currentTarget.value);
    };

    const handleFocus = (ev) => {
        if (location.pathname !== "/search") {
            history.push("/search");
        }
    };

    const goHome = () => history.push("/");

    useEffect(() => {
        if (location.pathname === "/search") {
            document.getElementById("search-input").focus();
        }
    });

    useEffect(() => {
        makeQuery(value).then((data) => {
            if (value.length > 0) {
                if (data.result) {
                    dispatch(setResult(data.result));
                    dispatch(setResultType(data.type));
                } else {
                    dispatch(setResult([]));
                    dispatch(setResultType(null));
                }
            } else {
                dispatch(clearResult());
            }
        });
    }, [value]);

    return (
        <>
            <div className="searchbox">
                {location.pathname === "/search" ? (
                    <ArrowBackIcon onClick={goHome} />
                ) : (
                    <div className="fill"></div>
                )}
                <input
                    id="search-input"
                    type="text"
                    onChange={handleChange}
                    onFocus={handleFocus}
                    autoComplete="off"
                />
                <SearchIcon
                    id="search-icon"
                />
            </div>
        </>
    );
};

export default SearchBox;
