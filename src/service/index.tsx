import axios from "axios";
import { baseUrl } from "../config/api";


export const instance = axios.create({
    baseURL: baseUrl,
    headers: {
        'Content-Type': 'application/json',
    },
});