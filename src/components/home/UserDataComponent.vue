<template>
  <div class="user">
    <div class="avatar">
      <img
        :src="'http://localhost:5000/images/avatars/' + user_data.getAvatar"
        alt=""
      />
    </div>
    <div class="username">
      <span>{{ user_data.getUserName }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserData } from "@/store/user_data";
const user_data = useUserData();
</script>

<style scoped>
</style>