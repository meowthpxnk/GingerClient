import { AuthorisationModel, VerifySecretKeyModel, GameCreationModel } from "./types";
import { apiAuthResponce, apiGetAvatars, apiGetTopics, apiVerifySecretKey, apiGenerateGame, apiGetLobbies } from "./response_types";
import './types'
import axios from "axios";
const BASE_URL = 'http://localhost:5000/api/';

const api = axios.create({
    baseURL: BASE_URL,
    // withCredentials: true,
});

// const config = {
//     method: 'GET',
//     mode: 'no-cors',
//     headers: {
//         'Access-Control-Allow-Origin': '*',
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//     },
//     withCredentials: true,
//     credentials: 'same-origin',
//     crossdomain: true,
// };

api.defaults.headers.common['Content-Type'] = 'application/json';

api.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config;
        const errMessage = error.response.data.message as string;
        if (errMessage.includes('not logged in') && !originalRequest._retry) {
            originalRequest._retry = true;
            return api(originalRequest);
        }
        return Promise.reject(error);
    }
);

export const authentificateUser = async (user_auth_data: AuthorisationModel) => {
    const response = await api.post<apiAuthResponce>('authentificate_user', user_auth_data);
    return response.data;
}

export const verifySecretKey = async (coockie_key_data: VerifySecretKeyModel) => {
    const response = await api.get<apiVerifySecretKey>('verify_secret_key', { params: coockie_key_data });
    return response.data;
}

export const getAvatars = async () => {
    const response = await api.get<apiGetAvatars>('getAvatars');
    return response.data;
}

export const getTopics = async () => {
    const response = await api.get<apiGetTopics>('getTopics');
    return response.data;
}

export const generateGame = async (game_generation_data: GameCreationModel) => {
    const response = await api.post<apiGenerateGame>('generateGame', game_generation_data);
    return response.data;
}

export const getLobbies = async () => {
    const response = await api.get<apiGetLobbies>('getLobbies');
    return response.data;
}