import { getTopics } from '@/api'
import { TopicModel } from '@/api/types'
import { defineStore } from 'pinia'

export const useTopicsStore = defineStore({
    id: 'topics_store',
    state: () => ({
        topics: [] as TopicModel[],
    }),
    getters: {
        getTopics(state){
            return state.topics;
        }
    },
    actions: {
        loadTopics() {
            getTopics()
                .then(data => {
                    console.log(data)
                    this.topics = data.result
                })
        }
    },
})