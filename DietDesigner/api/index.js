import axios from 'axios';
const BASE_URL = 'https://cosylab.iiitd.edu.in/design-a-diet/'

let customAxios = axios.create({
    baseURL: BASE_URL
});

customAxios.interceptors.request.use(
    function (config) {
        // Do something before request is sent
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

customAxios.interceptors.response.use(
    (response) => {
        return response;
    },
    error => {
        return Promise.reject(error);
    }
);

const API = {
    getData: (url) => {
        return customAxios.get(url);
    },
    saveData: (url, data) => {
        return customAxios.post(url, data);
    }
};

export default API;