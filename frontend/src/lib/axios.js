import axios from "axios"

export const axiosInstance = axios.create({
    baseURL: "http://localhost:5001/api",
    withCredentials: true                    // it is used so with every request we send cookies 
})