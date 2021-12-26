<<<<<<< HEAD
import './App.css';
import SearchBox from "./components/SearchBox"
import Map from './components/Map';
import FloorPicker from "./components/FloorPicker";
import React, { useState, useEffect } from "react";
import axios from "axios";
import RoomInfo from './components/RoomInfo';
import { useDispatch, useSelector } from 'react-redux';
import { setSelected } from './reducers/selectedReducer';
import EmployeeInfo from './components/EmployeeInfo';
import { setSelectedType } from './reducers/typeReducer';
import Search from './components/Search';
=======
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
>>>>>>> d61de61271c1a68a70ebcc8babe1a904d660c739

function App() {
    const dispatch = useDispatch();
    const selectedRoomID = useSelector((state) => state.selected.value.room);
    const types = useSelector((state) => state.types);
    const floor = useSelector((state) => state.floor);

<<<<<<< HEAD
    useEffect(() => {
        dispatch(setSelected(null))
    }, [floor])

    // useEffect(() => {
    //     const svg = document.getElementById("svg-map");
    //     const elements = svg.querySelectorAll("g > path");
    //     [...elements].forEach((element) => {
    //         element.classList.remove("selected-room")
    //     })
    //     if (selectedID !== null) {
    //         const element = document.getElementById(selectedID).firstElementChild;
    //         element.classList.add("selected-room");
    //     }
    // }, [selectedID])

    const handleSVGClick = (event) => {
        const ID = event.currentTarget.parentElement.id;
        dispatch(setSelected(ID));
        // if (selectedID === null) {
        //     dispatch(setSelectedType(null))
        // } else {
        //     dispatch(setSelectedType("room"))
        // }
    }

=======
>>>>>>> d61de61271c1a68a70ebcc8babe1a904d660c739
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
