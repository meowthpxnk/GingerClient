import { getLobbies } from '@/api'
import { LobbyModel } from '@/api/types'
import { defineStore } from 'pinia'

export const useLobbiesStore = defineStore({
    id: 'lobbies_store',
    state: () => ({
        lobbies: [] as LobbyModel[],
    }),
    getters: {
        getLobbies(state){
            return state.lobbies;
        }
    },
    actions: {
        loadLobbies() {
            getLobbies()
                .then(data => {
                    console.log(data)
                    this.lobbies = data.result
                })
        },
        setLobby(lobby: LobbyModel) {
            this.lobbies.push(lobby)
        }
    },
})