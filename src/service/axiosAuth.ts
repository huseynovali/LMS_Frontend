import axios from "axios";
export const axiosAuth = axios.create({
    baseURL: '',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Credentials': 'true',
        'Content-Type': 'application/json',
        "Authorization": null
    }
});