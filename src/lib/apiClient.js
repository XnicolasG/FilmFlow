import axios from "axios";

export const apiClient = axios.create({
    baseURL:'https://api.themoviedb.org/3/',
    headers:{
        'Content-Type': 'application/json;charset=utf-8',
    },
    params:{
        'api_key': import.meta.env.PUBLIC_APIKEY
    },
});