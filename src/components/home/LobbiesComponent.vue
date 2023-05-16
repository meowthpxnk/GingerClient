<template>
  <div class="lobbies">
    <button class="create-btn" @click="openModal">CREATE +</button>
    <ul class="lobbies-list">
      <li v-for="lobby in lobbies_store.getLobbies" :key="lobby.title">
        <div class="title">
          <span>{{ lobby.title }}</span>
        </div>
        <div class="persons">
          <span>{{ lobby.players.length }}/4</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useModalsStore } from "@/store/modals";
import { useLobbiesStore } from "@/store/lobbies";
import { useSocketsLobbies } from "@/web_sockets/lobbies";
// import {}

const lobbies_store = useLobbiesStore();
const openModal = () => (useModalsStore().getHomeModals.creation = true);
// const SocketLobbies = useSocketsLobbies();
useSocketsLobbies()
lobbies_store.loadLobbies()
</script>

<style scoped>
</style>