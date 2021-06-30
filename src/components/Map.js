import React, { useEffect, useState } from "react";
import axios from "axios";
import RoomInfo from "./info/RoomInfo";
import FirstFloor from "./floors/FirstFloor";
import FloorPicker from "./floors/FloorPicker";
import SecondFloor from "./floors/SecondFloor";
import { useDispatch, useSelector } from "react-redux";
import SearchBox from "./search/SearchBox";
import { setSelectedRoom } from "../reducers/selectedSlice";
import { setSelectedType } from "../reducers/typeSlice";
import EmployeeInfo from "./info/EmployeeInfo";

const Map = () => {
    const floor = useSelector((state) => state.floor.value);
    const selectedType = useSelector((state) => state.types.value.selectedType);
    const floorOptions = { first: <FirstFloor />, second: <SecondFloor /> };
    const selectedRoomID = useSelector((state) => state.selected.value.room);
    const dispatch = useDispatch();
    let info = "";

    const handleSVGClick = (event) => {
        const ID = event.currentTarget.parentElement.id;
        if (ID === selectedRoomID) {
            dispatch(setSelectedType(null));
        } else {
            dispatch(setSelectedType("room"));
        }
        dispatch(setSelectedRoom(ID));
    };

    useEffect(() => {
        const svg = document.getElementById("svg-map");
        const elements = svg.querySelectorAll("g > path");
        [...elements].forEach((element) => {
            element.classList.remove("selected-room");
        });
        if (selectedRoomID !== null) {
            const element = document.getElementById(selectedRoomID)
                .firstElementChild;
            element.classList.add("selected-room");
            element.scrollIntoView({
                behavior: "smooth",
                block: "center",
            });
        }
    }, [selectedRoomID]);

    useEffect(() => {
        const svg = document.getElementById("svg-map");
        const elements = svg.querySelectorAll("path, text");
        [...elements].forEach((element) => {
            element.addEventListener("click", handleSVGClick);
        });

        return () => {
            [...elements].forEach((element) => {
                element.removeEventListener("click", handleSVGClick);
            });
        };
    });

    switch (selectedType) {
        case "room":
            info = <RoomInfo />;
            break;
        case "employee":
            info = <EmployeeInfo />;
            break;
        default:
            info = "";
            break;
    }

    return (
        <div className="map">
            <SearchBox />
            {floor === "first" ? <FirstFloor /> : <SecondFloor />}
            <FloorPicker />
            {info}
        </div>
    );
};

export default Map;
