import { LobbyModel, TopicModel } from "./types";

export interface apiAuthResponce {
    status: 'ok',
    result: {
        'secret_key': string,
    },
}

export interface apiVerifySecretKey {
    status: 'ok',
    result: boolean,
}

export interface apiGetAvatars {
    status: 'ok',
    result: string[],
}

export interface apiGetTopics {
    status: 'ok',
    result: TopicModel[],
}

export interface apiGetLobbies {
    status: 'ok',
    result: LobbyModel[],
}

export interface apiGenerateGame {
    status: 'ok'
}