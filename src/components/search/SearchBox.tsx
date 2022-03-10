import React, {useEffect, useState, useMemo, useRef, useCallback} from "react";
import axios from "axios";
import Results from "../results/Results";
import {makeQuery} from "../../services/api";
import {setResult} from "../../reducers/resultSlice";
import {setResultType} from "../../reducers/typeSlice";
import {clearResult} from "../../reducers/resultSlice";
import SearchIcon from "@material-ui/icons/Search";
import {useHistory, useLocation} from "react-router";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import {RootState} from "../../store";
import {useAppSelector, useAppDispatch} from "../../hooks";
import {HTMLClickEvent, HTMLInputEvent} from "../../types";
import debounce from "lodash.debounce";

const SearchBox = () => {
    const [value, setValue] = useState("");
    const [fetched, setFetched] = useState(true);
    const dispatch = useAppDispatch();
    const results = useAppSelector((state: RootState) => state.result.value);
    const selectedRoomID = useAppSelector((state: RootState) => state.selected.value.room);
    const history = useHistory();
    const location = useLocation();
    const debounceFunctionRef = useRef<(() => void)>();
    debounceFunctionRef.current = () => handleQuery();

    const debounceHandleQuery = useCallback(debounce(() => {
        if (debounceFunctionRef.current) {
            debounceFunctionRef.current()
        }
    }, 250), []);

    const handleChange = (ev: HTMLInputEvent) => {
        setValue(ev.currentTarget.value);
    };

    const handleFocus = () => {
        if (location.pathname !== "/search") {
            history.push("/search");
        }
    };

    const goHome = () => history.push("/");

    const handleQuery = () => {
        if (value.length > 0) {
            makeQuery(value).then((data) => {
                if (data.result) {
                    dispatch(setResult(data.result));
                    dispatch(setResultType(data.type));
                } else {
                    dispatch(setResult([]));
                    dispatch(setResultType(null));
                }
            });
        } else {
            dispatch(clearResult());

        }
    }

    useEffect(() => {
        if (location.pathname === "/search") {
            document.getElementById("search-input")?.focus();
        }
    });

    useEffect(() => {
        debounceHandleQuery();
    }, [value]);


    return (
        <>
            <div className="searchbox">
                {location.pathname === "/search" ? (
                    <ArrowBackIcon onClick={goHome}/>
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
                <SearchIcon id="search-icon"/>
            </div>
        </>
    );
};

export default SearchBox;
