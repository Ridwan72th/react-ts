import axios from "axios";

export const instance = axios.create({
    baseURL: 'http://localhost:3003/api/',
    headers: {
        'Content-Type': 'application/json',
    },
});