import React from "react";

export interface Employee {
    employee_id: number,
    gender: string,
    title_before?: string,
    first_name: string,
    last_name: string,
    title_after?: string,
    email: string,
    room_id: string,
    floor: string
}

export interface Room {
    room_id: string,
    floor: string,
    room_type: string,
    room_number?: string,
    phone_number: number,
    teachers: Array<Employee>
}

export type SVGClickEvent = Event;
export type HTMLClickEvent = React.MouseEvent<HTMLElement>;
export type HTMLInputEvent = React.FormEvent<HTMLInputElement>;
