import { LobbyModel } from "@/api/types";
import { io } from "socket.io-client";
import { useLobbiesStore } from "@/store/lobbies";
const lobbies_store = useLobbiesStore()
const URL = "http://localhost:5000";
export const socket = io(URL);
socket.on("connect", () => {
    console.log('connected')
});

socket.on("lobby_has_been_created", (lobby: LobbyModel) => {
    lobbies_store.setLobby(lobby)
});

// socket.on("lobby_has_been_started", (lobby_title: string) => {
//     lobbies_store.removeLobby(lobby_title)
// });

export const useSocketsLobbies = () => {
    return socket
}

