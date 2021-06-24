import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Results from "./Results";
import { makeQuery } from "../services/api";
import { useDispatch, useSelector } from "react-redux";
import { clearResult, setResult } from "../reducers/resultReducer";
import { setSelected } from "../reducers/selectedReducer";
import { setResultType, setSelectedType } from "../reducers/typeReducer";

const SearchBox = ({ handleSearch }) => {
	const [value, setValue] = useState("");
	const dispatch = useDispatch();
	const results = useSelector((state) => state.result);
	const selectedID = useSelector((state) => state.selected);

	const handleChange = (ev) => {
		setValue(ev.currentTarget.value);
	};

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
                <div className="fill"></div>
				<input
					id="search-input"
					type="text"
					onChange={handleChange}
					autoComplete="off"
				/>
				<FontAwesomeIcon
					id="search-icon"
					icon={faSearch}
					onClick={() => handleSearch(value)}
					size="1x"
					color="#333030"
				/>
			</div>
		</>
	);
};

export default SearchBox;
