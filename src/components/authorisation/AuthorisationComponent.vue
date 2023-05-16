<template>
  <ChooseAvatar @callAction="chooseAvatar" v-if="current_step === 'avatar'" />
  <ChooseUsername
    @callAction="chooseUsername"
    v-if="current_step === 'user_name'"
  />
</template>

<script setup lang="ts">
import ChooseAvatar from "@/modals/authorisation/ChooseAvatar.vue";
import ChooseUsername from "@/modals/authorisation/ChooseUsername.vue";
import { computed, ref } from "vue";
import { useAuthorisationStore } from "@/store/authorisation";


const steps = ref(["avatar", "user_name"]);

const authorisation_store = useAuthorisationStore();

const current_step = computed(() => {
  return steps.value[0];
});

const nextStep = () => {
  if (steps.value.length > 1) {
    steps.value.shift();
  } else {
    sendData();
  }
};

const sendData = () => {
  // console.log(authorisation_store.getAuthData)
  // authentificateUser()
  authorisation_store.authentificateUser();
};

const chooseAvatar = (avatar: string) => {
  authorisation_store.changeAvatar(avatar);
  nextStep();
};

const chooseUsername = (user_name: string) => {
  authorisation_store.changeUserName(user_name);
  nextStep();
};
</script>

<style scoped>
</style>