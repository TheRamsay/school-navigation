import React, { useEffect } from "react";
import SearchBox from "./SearchBox";
import Results from "../results/Results";
import { useSelector, useDispatch } from "react-redux";
import { makeQuery } from "../../services/api";
import { setSelectedType, clearTypes } from "../../reducers/typeSlice";
import { clearSelected, setSelectedRoom } from "../../reducers/selectedSlice";
import { clearResult } from "../../reducers/resultSlice";

const Search = () => {
    const results = useSelector((state) => state.result.value);
    const dispatch = useDispatch();
    const selectedRoomID = useSelector((state) => state.selected.value.room);

    useEffect(() => {
        dispatch(clearSelected());
        dispatch(clearTypes());
    }, []);

    const handleSearch = (query) => {
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
            <SearchBox handleSearch={handleSearch} />
            {results.length !== 0 ? (
                <Results handleSearch={handleSearch} />
            ) : (
                ""
            )}
        </div>
    );
};

export default Search;
