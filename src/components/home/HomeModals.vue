<template>
  <CreateLobby v-if="modals.creation" @close="closeCreationModal" />
</template>

<script setup lang="ts">
import CreateLobby from "@/modals/lobby_create/CreateLobby.vue";
import { useModalsStore } from "@/store/modals";
const modals_store = useModalsStore();
const modals = modals_store.getHomeModals;

const closeCreationModal = () => {
  modals.creation = false;
};
</script>

<style scoped>
</style>