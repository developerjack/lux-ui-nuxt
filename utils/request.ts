import axios from 'axios';

const service = axios.create({
    timeout: 5000
});

service.interceptors.request.use(
    config => {
        if (localStorage.getItem('access_token') !== null) {
            config.headers['Authorization'] = `bearer ${localStorage.getItem('access_token')}`;
        }
        return config;
    },
    error => {
        // do something with request error
        return Promise.reject(error);
    }
);
service.interceptors.response.use(
    config => {
        const { data } = config
        return data;
    },
    error => {
        // do something with request error
        return Promise.reject(error);
    }
);

export const request = service;