import React from "react";
import SearchBox from "./SearchBox";
import Results from "./Results";
import { useSelector, useDispatch } from "react-redux";
import { makeQuery } from "../services/api";
import { setSelectedType  } from "../reducers/typeReducer";
import { clearResult } from "../reducers/resultReducer";
import { setSelected } from "../reducers/selectedReducer";

const Search = () => {
    const results = useSelector(state => state.result)
    const dispatch = useDispatch();
	const selectedID = useSelector((state) => state.selected);

	const handleSearch = (query) => {
		makeQuery(query).then((data) => {
			dispatch(setSelectedType(data.type));
			const firstResult = data.result[0];
			if (selectedID !== firstResult.room_id) {
				dispatch(setSelected(firstResult.room_id + ""));
				const element = document.getElementById(
					firstResult.room_id
				).firstElementChild;
				element.scrollIntoView({ behavior: "smooth", block: "center" });
				element.classList.add("selected-room");
			}
		});
        dispatch(clearResult);
	};


    return (
        <div className="search">
            <SearchBox handleSearch={handleSearch}/>
            {results.length !== 0 ? (
                <Results handleSearch={handleSearch} />
            ) : (
                ""
            )}
        </div>
    )

}

export default Search
