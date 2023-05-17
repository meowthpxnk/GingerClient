
import { useCookies } from "vue3-cookies";
import { useUserData } from "@/store/user_data";
import { verifySecretKey } from "@/api";
import router from "@/router";
const { cookies } = useCookies();


export const verifySecretKeyRequest = () => {
    const secret_key = cookies.get('secret_key')
    const user_name = cookies.get('user_name')

    if (secret_key && user_name) {
        verifySecretKey({
            secret_key: secret_key,
            user_name: user_name,
        }).then(data => {
            if (data.result) {
                router.push({ name: 'home' })

                const user_data = useUserData()
                const avatar = cookies.get('avatar')

                user_data.loadUserData(
                    user_name, avatar
                )

            } else {
                router.push({ name: 'authorisation' })
            }
        })
    } else {
        router.push({ name: 'authorisation' })
    }
}
