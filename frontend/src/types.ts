import React from "react";

export interface Employee {
    employee_id: number,
    gender: string,
    first_name: string,
    last_name: string,
    email: string,
    phone_number?: string,
    room: SimpleRoom
    titles_before: string,
    titles_after: string
}

export interface EmployeeWithRooms {
    employee_id: number,
    gender: string,
    first_name: string,
    last_name: string,
    email: string,
    phone_number?: string,
    rooms: Array<SimpleRoom>,
    titles_before: string,
    titles_after: string
}

export interface SimpleRoom {
    room_id: string,
    floor: string,
    room_type: string,
    room_number: string,
    phone_extensions: number

}

export interface Room {
    room_id: string,
    floor: string,
    room_type: string,
    room_number?: string,
    phone_extension: number,
    teachers: Array<EmployeeWithRooms>
}

export type SVGClickEvent = Event;
export type HTMLClickEvent = React.MouseEvent<HTMLElement>;
export type HTMLInputEvent = React.FormEvent<HTMLInputElement>;
