import { defineStore } from 'pinia'

export const useUserData = defineStore({
    id: 'user_data',
    state: () => ({
        user_name: '',
        avatar: ''
    }),
    getters: {
        getUserName(state): string{
            return state.user_name
        },
        getAvatar(state){
            return state.avatar
        }
    },
    actions: {
        loadUserData(user_name:string, avatar:string) {
            this.user_name = user_name
            this.avatar = avatar
        }
    },
})