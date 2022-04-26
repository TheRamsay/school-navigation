import axios from "axios";

const BASE_URL = "http://78.47.245.96/api/";
// const BASE_URL = "http://localhost:8000/api/";

export const axiosInstance = axios.create({ 
});

const makeQuery = async (query: string): Promise<any> => {
    const res = await axiosInstance.get(`${BASE_URL}search/?query=${query}`);
    return res.data;
};

const getRoom = (id: string): Promise<any> => {
    return axiosInstance.get(`${BASE_URL}room/${id}`).then((res) => res.data);
};

const getEmployee = (id: string) => {
    return axiosInstance.get(`${BASE_URL}employee/${id}`).then((res) => res.data);
};


const getEmployeeInRoom = (employeeID: string, roomID: string) => {
    return axiosInstance.get(`${BASE_URL}employee/${employeeID}/room/${roomID}`).then((res) => res.data);
};
export {makeQuery, getRoom, getEmployee, getEmployeeInRoom};
