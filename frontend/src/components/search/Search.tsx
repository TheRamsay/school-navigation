import React, {useEffect, useState, useMemo, useRef, useCallback} from "react";
import SearchBox from "./SearchBox";
import Results from "../results/Results";
import {makeQuery} from "../../services/api";
import {setSelectedType, clearTypes} from "../../reducers/typeSlice";
import {clearSelected, setSelectedRoom} from "../../reducers/selectedSlice";
import {clearResult} from "../../reducers/resultSlice";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {RootState} from "../../store";

const Search = () => {
    const results = useAppSelector((state) => state.result.value);
    const dispatch = useAppDispatch();
    const selectedRoomID = useAppSelector((state) => state.selected.value.room);

    useEffect(() => {
        dispatch(clearSelected());
        dispatch(clearTypes());
    }, []);

    const handleSearch = (query: string) => {
        makeQuery(query).then((data) => {
            dispatch(setSelectedType(data.type));
            const firstResult = data.result[0];
            if (selectedRoomID !== firstResult.room_id) {
                dispatch(setSelectedRoom(firstResult.room_id + ""));
            }
        });
        dispatch(clearResult);
    };

    return (
        <div className="search">
            <div className={"search-fill"}></div>
            <SearchBox/>
            {results.length !== 0 ? (
                <Results handleSearch={handleSearch}/>
            ) : (
                ""
            )}
        </div>
    );
};

export default Search;
