import React from "react";
import SearchBox from "./SearchBox";
import Results from "../results/Results";
import { useSelector, useDispatch } from "react-redux";
import { makeQuery } from "../../services/api";
import { setSelectedType } from "../../reducers/typeSlice";
import { setSelected } from "../../reducers/selectedSlice";
import { clearResult } from "../../reducers/resultSlice";

const Search = () => {
    const results = useSelector((state) => state.result.value);
    const dispatch = useDispatch();
    const selectedID = useSelector((state) => state.selected.value);

    const handleSearch = (query) => {
        makeQuery(query).then((data) => {
            dispatch(setSelectedType(data.type));
            const firstResult = data.result[0];
            if (selectedID !== firstResult.room_id) {
                dispatch(setSelected(firstResult.room_id + ""));

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
