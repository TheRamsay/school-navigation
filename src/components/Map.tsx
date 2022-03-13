import React, { useEffect, useState } from "react";
import axios from "axios";
import RoomInfo from "./info/RoomInfo";
import FirstFloor from "./floors/FirstFloor";
import FloorPicker from "./floors/FloorPicker";
import SecondFloor from "./floors/SecondFloor";
import SearchBox from "./search/SearchBox";
import {
    setSelectedEmployee,
    setSelectedRoom,
} from "../reducers/selectedSlice";
import { setSelectedType } from "../reducers/typeSlice";
import EmployeeInfo from "./info/EmployeeInfo";
import { RootState } from "../store";
import { SVGClickEvent } from "../types";
import { useAppDispatch, useAppSelector } from "../hooks";
import ZoomablePannableMap from "./floors/ZoomablePannableMap";

const Map = () => {
    const floor = useAppSelector((state: RootState) => state.floor.value);
    const selectedType = useAppSelector((state: RootState) => state.types.value.selectedType);
    const floorOptions = { first: <FirstFloor />, second: <SecondFloor /> };
    const selectedRoomID = useAppSelector((state: RootState) => state.selected.value.room);
    const dispatch = useAppDispatch();
    let info: JSX.Element | null = null;

    const handleSVGClick = (event: SVGClickEvent) => {
        const element = event.currentTarget as Element;
        if (element.classList.contains("nonclickable")) {
        }
        ;

        const ID = element.parentElement?.id;
        if (ID == undefined) {
            console.log("No ID found for element" + event.currentTarget);
        } else {
            if (ID === selectedRoomID) {
                dispatch(setSelectedType(null));
            } else {
                dispatch(setSelectedType("room"));
            }
            dispatch(setSelectedRoom(ID));
            dispatch(setSelectedEmployee(null));
        }
    };

    useEffect(() => {
        const svg = document.getElementById("svg-map");
        const elements = svg?.querySelectorAll("g > path") as NodeListOf<Element>
        [...elements].forEach((element) => {
            element.classList.remove("selected-room");
        });
        if (selectedRoomID !== null) {
            const element = document.getElementById(selectedRoomID)?.firstElementChild;
            if (element) {
                element.classList.add("selected-room");
                element.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                });
            }
        }
    }, [selectedRoomID]);

    useEffect(() => {
        const svg = document.getElementById("svg-map");
        if (!svg) {
            console.error("SVG map not found");
            return;
        }
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
            info = null;
            break;
    }

    return (
        <div className="map">
            <SearchBox />
            {floor === "first" ? <ZoomablePannableMap children={<FirstFloor />} /> : <ZoomablePannableMap children={<SecondFloor />} />}
            <FloorPicker />
            {info}
        </div>
    );
};

export default Map;
