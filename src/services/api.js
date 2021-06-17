import axios from "axios";

const getTeacher = (name) => {
    const [firstname, surname] = name.split(" ");

    return axios.get(`http://127.0.0.1:5000/api/teacher/${firstname}/${surname}`)
        .then(res => res.data)

};


const getCabinet = (id) => {
    return axios.get(`http://127.0.0.1:5000/api/cabinet/${id}`).then(res => res.data)
}

export {getTeacher, getCabinet};
