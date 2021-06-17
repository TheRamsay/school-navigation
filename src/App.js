import './App.css';
import Search from "./components/Search"
import Map from './components/Map';
import FloorPicker from "./components/FloorPicker";
import React, {useState, useEffect} from "react";
import axios from "axios";
import RoomInfo from './components/RoomInfo';

function App() {
    const [currentRoom, setCurrentRoom] = useState(undefined)

    const searchHandler = (data) => {
        console.log(data);
        if (currentRoom) {
            document.getElementById(currentRoom.cabinet_id).classList.remove("selected-room");
        }
        setCurrentRoom(data);
        document.getElementById(data.cabinet_id).classList.add("selected-room");
    }

    const handleSVGClick = (event) => {
        console.log(event) 
        const clickedID = event.currentTarget.id;
        let shouldFetch = true;

        if (currentRoom !== undefined) {
            document.getElementById(currentRoom.cabinet_id).classList.remove("selected-room");
            if (clickedID !== currentRoom.cabinet_id) {
                document.getElementById(clickedID).classList.add("selected-room");
            } else {
                setCurrentRoom(undefined);
                shouldFetch = false;

            }
        } else {
            document.getElementById(clickedID).classList.add("selected-room")
        }
        if (shouldFetch) {
            axios.get("http://127.0.0.1:5000/api/cabinet/" + clickedID)
                .then((res) => res.data)
                .then(data => {
                    setCurrentRoom(data)
                })
        }
    }

    useEffect(() => {
        const svg = document.getElementById("svg-map");
        const elements = svg.getElementsByTagName("path");
        [...elements].forEach((element) => {
            element.addEventListener("click", handleSVGClick)
        })

        return () => {
            [...elements].forEach((element) => {
                element.removeEventListener("click", handleSVGClick)
            })
        }
    })


    return (
        <div className="app">
            <Search searchHandler={(data) => searchHandler(data)} />
            <Map />
            {currentRoom ? <RoomInfo room={currentRoom}/> : ""}
            <FloorPicker />
        </div>
    );
}

export default App;
