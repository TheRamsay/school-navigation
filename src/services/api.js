import axios from "axios";

const BASE_URL = "http://78.47.245.96/api/";

// const makeQuery = (query) => {
//     const data = new FormData();
//     data.append("query", query);
//     return axios.post(BASE_URL + "search/", data).then((res) => res.data);
// };

const makeQuery = (query) => {
    return axios
        .get(BASE_URL + "search/?query=" + query)
        .then((res) => res.data);
};

const getRoom = (id) => {
    return axios.get(BASE_URL + `room/${id}`).then((res) => res.data);
};

const getEmployee = (id) => {
    return axios.get(BASE_URL + `employee/${id}`).then((res) => res.data);
};

export { makeQuery, getRoom, getEmployee };
