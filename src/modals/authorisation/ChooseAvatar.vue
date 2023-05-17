<template>
  <div>
    <div class="modal-bg">
      <div class="popup-win authorisation" v-if="true">
        <div class="choose">
          <ul>
            <li v-for="avatar in avatars" :key="avatar" @click = 'chooseAvatar(avatar)' :class="{'choosen': avatar === clicked_avatar}">
              <div class="avatar">
                <img
                  :src="'http://localhost:5000/images/avatars/' + avatar"
                  alt=""
                />
              </div>
            </li>
          </ul>
        </div>
        <div class="action-pannel">
          <div class="title">
            <span>Choose avatar</span>
          </div>
          <div class="action">
            <button @click='actionButton'><img src="@/assets/icons/check.png" alt="" /></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import { getAvatars } from '@/api'
import {defineEmits, ref} from 'vue'

const emit = defineEmits(['callAction'])


const clicked_avatar = ref(null)

const chooseAvatar = (avatar) =>{
    clicked_avatar.value = avatar
    console.log(avatar)
}

getAvatars().then(data => {
  avatars.value = data.result
})

const avatars = ref([]);

const actionButton = () =>{
    if (clicked_avatar.value !== null){
        emit('callAction', clicked_avatar.value);
    }
}

</script>

<style lang="scss" scoped>
</style>