import axios from 'axios';
const BASE_URL = 'http://10.0.2.2:3001'

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