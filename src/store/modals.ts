import { defineStore } from 'pinia'

export const useModalsStore = defineStore({
    id: 'modals',
    state: () => ({
        home:{
            creation: false,
        }
    }),
    getters: {
        getHomeModals(state){
            return state.home
        }
    },
    actions: {
    },
})