export interface AuthorisationModel {
    user_name: string,
    avatar: string,
}

export interface VerifySecretKeyModel {
    user_name: string,
    secret_key: string,
}

export interface TopicModel {
    title: string,
    image: string
}

export interface LobbyModel {
    title: string,
    players: string[],
    status: string,
    topics: string[],
}

export interface GameCreationModel {
    title: string,
    user_name: string,
    topics: string[],
}