import React, { useEffect, useState } from "react";
import axios from "axios";
import RoomInfo from "./info/RoomInfo";
import FirstFloor from "./floors/FirstFloor";
import FloorPicker from "./floors/FloorPicker";
import SecondFloor from "./floors/SecondFloor";
import { useDispatch, useSelector } from "react-redux";
import SearchBox from "./search/SearchBox";
import { setSelected } from "../reducers/selectedSlice";
import { setSelectedType } from "../reducers/typeSlice";

const Map = () => {
    const floor = useSelector((state) => state.floor.value);
    const selectedType = useSelector((state) => state.types.value.selectedType);
    const floorOptions = { first: <FirstFloor />, second: <SecondFloor /> };
    const selectedID = useSelector((state) => state.selected.value);
    const dispatch = useDispatch();

    const handleSVGClick = (event) => {
        const ID = event.currentTarget.parentElement.id;
        if (ID === selectedID) {
            dispatch(setSelectedType(null));
        } else {
            dispatch(setSelectedType("room"));
        }
        dispatch(setSelected(ID));
    };

    useEffect(() => {
        const svg = document.getElementById("svg-map");
        const elements = svg.querySelectorAll("g > path");
        [...elements].forEach((element) => {
            element.classList.remove("selected-room");
        });

        // if (selectedID !== null) {
        //     const element = document.getElementById(selectedID)
        //         .firstElementChild;
        //     element.classList.add("selected-room");
        // }

        if (selectedID !== null) {
            const element = document.getElementById(selectedID)
                .firstElementChild;
            element.classList.add("selected-room");
            element.scrollIntoView({
                behavior: "smooth",
                block: "center",
            });
        }
    }, [selectedID]);

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

    return (
        <div className="map">
            <SearchBox />
            {floor === "first" ? <FirstFloor /> : <SecondFloor />}
            <FloorPicker />
            {selectedType === "room" ? <RoomInfo /> : ""}
        </div>
    );
};

export default Map;
