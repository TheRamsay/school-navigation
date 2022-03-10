import './App.css';
import SearchBox from "./components/search/SearchBox";
import Map from "./components/Map";
import FloorPicker from "./components/floors/FloorPicker";
import React, {useState, useEffect} from "react";
import axios from "axios";
import RoomInfo from "./components/info/RoomInfo";
import Search from "./components/search/Search";
import {Switch, Route} from "react-router-dom";
import {setSelectedEmployee, setSelectedRoom} from "./reducers/selectedSlice";
import {axiosInstance} from './services/api';
import {RootState} from "./store";
import Test from "./components/Test";
import {useAppDispatch, useAppSelector} from './hooks';
import {setSelectedType} from "./reducers/typeSlice";


function App() {
    const dispatch = useAppDispatch();
    const floor = useAppSelector((state: RootState) => state.floor);

    useEffect(() => {
        dispatch(setSelectedEmployee(null))
        dispatch(setSelectedRoom(null))
        dispatch(setSelectedType(null))
    }, [])

    useEffect(() => {
        dispatch(setSelectedRoom(null))
    }, [floor])


    console.log(window.location.origin);
    if (window.location.origin === "http://localhost:3000") {
        axiosInstance.defaults.baseURL = "http://localhost:8000/api";
    } else {
        console.log("JJ");
        axiosInstance.defaults.baseURL = window.location.origin + "/api";
    }

    return (
        <div className="app">
            <Switch>
                <Route path="/search">
                    <Search/>
                </Route>
                <Route path="/" exact>
                    <Map/>
                </Route>
            </Switch>
        </div>
    );

    return (
        <div className="app">
            <Test/>
        </div>
    );
}

export default App;
