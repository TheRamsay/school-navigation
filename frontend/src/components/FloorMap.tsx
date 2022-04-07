import * as d3 from "d3";
import React, {useEffect, useState} from "react";
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
import {setSelectedType} from "../reducers/typeSlice";
import EmployeeInfo from "./info/EmployeeInfo";
import {RootState} from "../store";
import {SVGClickEvent} from "../types";
import {useAppDispatch, useAppSelector} from "../hooks";
import ZoomablePannableMap from "./floors/ZoomablePannableMap";
import ThirdFloor from "./floors/ThirdFloor";

const FloorMap = () => {
    const floor = useAppSelector((state: RootState) => state.floor.value);
    const selectedType = useAppSelector((state: RootState) => state.types.value.selectedType);
    const floorOptions = {first: <FirstFloor/>, second: <SecondFloor/>};
    const selectedRoomID = useAppSelector((state: RootState) => state.selected.value.room);
    const dispatch = useAppDispatch();
    const floorMapper: Map<string, JSX.Element> = new Map(
        [
            ["first", <FirstFloor/>],
            ["second", <SecondFloor/>],
            ["third", <ThirdFloor/>]
        ]);
    let info: JSX.Element | null = null;

    const handleSVGClick = (event: SVGClickEvent) => {
        const element = event.currentTarget as Element;

        const ID = element.parentElement?.id;
        if (ID == undefined) {
            console.log("No ID found for element" + event.currentTarget);
        } else {
            // Kontrola jestli mistnost ma normalni ID, nebo ID vytvorene Illustratorem, ktere vetsinou zacina G+neco
            if (!+ID.charAt(0)) {
                return;
            }
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
                const coords = (element as SVGSVGElement).getBBox();

                // @ts-ignore
                const handleZoom = (e) => {
                    d3.select('#svg-map g')
                        .attr('transform', e.transform);
                }

                const zoom = d3.zoom()
                    .scaleExtent([0.25, 3])
                    // .translateExtent([[0, 0], [1920, 980]])
                    .on('zoom', handleZoom);

                // @ts-ignore
                d3.select("#svg-map").transition().duration(500).call(zoom.translateTo, coords.x, coords.y);
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
            info = <RoomInfo/>;
            break;
        case "employee":
            info = <EmployeeInfo/>;
            break;
        default:
            info = null;
            break;
    }

    return (
        <div className="map">
            <SearchBox/>
            {<ZoomablePannableMap children={floorMapper.get(floor)}/>}
            <FloorPicker/>
            {info}
        </div>
    );
};

export default FloorMap;
