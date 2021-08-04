import axios from "axios";

export const callGet = async (url) => {
    const response = await axios.get(url);

    return response.data ? response.data : "error";
}

export const callPost = async (url, payload) => {
    const response = await axios.post(url, payload);

    return response.data ? response.data : "error";
}