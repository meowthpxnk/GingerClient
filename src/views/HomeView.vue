<template>
  <HomeComponent/>
</template>

<script setup lang="ts">
import { verifySecretKeyRequest } from "@/methods/user_data";
import HomeComponent from "@/components/home/HomeComponent.vue";
verifySecretKeyRequest()
</script>