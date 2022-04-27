import './App.css';
import FloorMap from "./components/FloorMap";
import React, {useEffect} from "react";
import Search from "./components/search/Search";
import {Switch, Route} from "react-router-dom";
import {clearSelected, setSelectedEmployee, setSelectedRoom} from "./reducers/selectedSlice";
import {axiosInstance} from './services/api';
import {RootState} from "./store";
import {useAppDispatch, useAppSelector} from './hooks';
import {clearTypes, setSelectedType} from "./reducers/typeSlice";
import {useHistory} from "react-router";


function App() {
    const dispatch = useAppDispatch();
    const history = useHistory();
    const floor = useAppSelector((state: RootState) => state.floor);

    useEffect(() => {
        dispatch(clearSelected());
        dispatch(clearTypes());
    }, [])


    useEffect(() => {
        const escHandler = (ev: KeyboardEvent) => {
            if ("Escape" === ev.key) {
                history.push("/");
            }
        }
        document.addEventListener("keydown", escHandler);

        return () => document.removeEventListener("keydown", escHandler);
    })
    if (window.location.origin === "http://localhost:3000") {
        axiosInstance.defaults.baseURL = "http://localhost:8000/api";
    } else {
        axiosInstance.defaults.baseURL = window.location.origin + "/api";
    }

    return (
        <div className="app">
            <Switch>
                <Route path="/search">
                    <Search/>
                </Route>
                <Route path="/" exact>
                    <FloorMap/>
                </Route>
            </Switch>
        </div>
    );
}

export default App;
