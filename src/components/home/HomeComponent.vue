<template>
  <div class="container">
    <div class="home">
      <UserDataComponent/>
      <LobbiesComponent/>
    </div>
    <HomeModals/>
  </div>
</template>

<script setup lang="ts">
import LobbiesComponent from './LobbiesComponent.vue';
import UserDataComponent from './UserDataComponent.vue'
import HomeModals from './HomeModals.vue';
</script>

<style scoped>
</style>