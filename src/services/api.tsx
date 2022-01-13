import axios from "axios";

// const BASE_URL = "http://78.47.245.96/api/";
const BASE_URL = "http://localhost:8000/api/";

// const makeQuery = (query) => {
//     const data = new FormData();
//     data.append("query", query);
//     return axios.post(BASE_URL + "search/", data).then((res) => res.data);
// };

export const axiosInstance = axios.create({
    // withCredentials: true,
    // headers: {
    //     "X-CSRFToken": Cookies.get("csrftoken"),
    // },
});

const makeQuery = async (query: string): Promise<any> => {
    const res = await axiosInstance.get("/search/?query=" + query);
    return res.data;
    // return axios
    //     .get(BASE_URL + "search/?query=" + query)
    //     .then((res) => res.data);
};

const getRoom = (id: string) => {
    return axiosInstance.get(`/room/${id}`).then((res) => res.data);
};

const getEmployee = (id: string) => {
    return axiosInstance.get(`/employee/${id}`).then((res) => res.data);
};

export { makeQuery, getRoom, getEmployee };
