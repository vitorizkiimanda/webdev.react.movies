import axios from "axios";

const baseUrl = "https://api.themoviedb.org/3/";

export const doGet = (param) => {
    const axiosConfig = {
        url: baseUrl + param,
        method: "get",
    };

    return axios(axiosConfig)
        .then((response) => {
            return {
                statusCode: response.status,
                data: response.data,
            };
        })
        .catch((error) => {
            return {
                statusCode: error.response.data.status_code,
                data: error.response.data,
            };
        });
};
