import SearchBox from "./components/search/SearchBox";
import Map from "./components/Map";
import FloorPicker from "./components/floors/FloorPicker";
import React, { useState, useEffect } from "react";
import axios from "axios";
import RoomInfo from "./components/info/RoomInfo";
import { useDispatch, useSelector } from "react-redux";
import EmployeeInfo from "./components/info/EmployeeInfo";
import Search from "./components/search/Search";
import { Switch, Route, Link } from "react-router-dom";
import { setSelectedRoom } from "./reducers/selectedSlice";

function App() {
    const dispatch = useDispatch();
    const selectedRoomID = useSelector((state) => state.selected.value.room);
    const types = useSelector((state) => state.types);
    const floor = useSelector((state) => state.floor);

    // useEffect(() => {
    //     dispatch(setSelected(null));
    // }, [floor]);

    return (
        <div className="app">
            <Switch>
                <Route path="/search">
                    <Search />
                </Route>
                <Route path="/" exact>
                    <Map />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
