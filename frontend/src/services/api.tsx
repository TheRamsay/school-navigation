import axios from "axios";

export const axiosInstance = axios.create({});

const makeQuery = async (query: string): Promise<any> => {
    const res = await axiosInstance.get(`/search/?query=${query}`);
    return res.data;
};

const getRoom = (id: string): Promise<any> => {
    return axiosInstance.get(`/room/${id}`).then((res) => res.data);
};

const getEmployee = (id: string) => {
    return axiosInstance.get(`/employee/${id}`).then((res) => res.data);
};


const getEmployeeInRoom = (employeeID: string, roomID: string) => {
    return axiosInstance.get(`/employee/${employeeID}/room/${roomID}`).then((res) => res.data);
};
export {makeQuery, getRoom, getEmployee, getEmployeeInRoom};
