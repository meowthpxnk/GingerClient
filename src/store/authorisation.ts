import { defineStore } from 'pinia'
import { authentificateUser } from '@/api'
import { useCookies } from "vue3-cookies";
import router from '@/router';
const { cookies } = useCookies();

export const useAuthorisationStore = defineStore({
    id: 'authorisation',
    state: () => ({
        user_name: '',
        avatar: '',
    }),
    getters: {
        getAuthData(state) {
            return {
                user_name: state.user_name,
                avatar: state.avatar
            }
        }
    },
    actions: {
        changeUserName(user_name: string) {
            this.user_name = user_name
        },
        changeAvatar(avatar: string) {
            this.avatar = avatar
        },

        
        authentificateUser() {
            authentificateUser({
                avatar: this.avatar,
                user_name: this.user_name,
            }).then(data => {
                console.log(data)
                if (data.status === 'ok'){
                    const secret_key = data.result.secret_key
                    cookies.set('user_name', this.user_name)
                    cookies.set('avatar', this.avatar)
                    cookies.set('secret_key', secret_key)
                    router.push({name: 'home'})
                } else {
                    throw Error('Not Valid Status')
                }
            })
        }
    },
})