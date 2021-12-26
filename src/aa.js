import './App.css';
import SearchBox from "./components/search/SearchBox"
import Map from './components/Map';
import FloorPicker from "./components/FloorPicker";
import React, {useState, useEffect} from "react";
import axios from "axios";
import RoomInfo from './components/info/RoomInfo';
import {useDispatch, useSelector} from 'react-redux';
import { setSelected } from './reducers/selectedReducer';
import EmployeeInfo from './components/info/EmployeeInfo';
import { setSelectedType } from './reducers/typeReducer';
import Search from './components/search/Search';

function App() {
    const dispatch = useDispatch();
    const selectedID = useSelector((state) => state.selected)
    const types = useSelector((state) => state.types);
    const floor = useSelector((state) => state.floor);


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

    // useEffect(() => {
    //     const svg = document.getElementById("svg-map");
    //     const elements = svg.querySelectorAll("path, text");
    //     [...elements].forEach((element) => {
    //         element.addEventListener("click", handleSVGClick)
    //     })

    //     return () => {
    //         [...elements].forEach((element) => {
    //             element.removeEventListener("click", handleSVGClick)
    //         })
    //     }
    // })


    // return (
    //     <div className="app">
    //         <SearchBox />
    //         <Map />
    //         {/* { type ? type === "room" ? <RoomInfo /> : <EmployeeInfo /> : "" } */} //         { selectedID !== null  ? <RoomInfo /> : "" } //         <FloorPicker />
    //     </div>
    // );
    return (
        <div className="app">
            <Search />
        </div>

    )
}

export default App;
