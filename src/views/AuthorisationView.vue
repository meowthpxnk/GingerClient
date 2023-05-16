<template>
    <div>
        <AuthorisationComponent/>
    </div>
</template>

<script setup lang="ts">
import AuthorisationComponent from '@/components/authorisation/AuthorisationComponent.vue';
import { verifySecretKeyRequest } from "@/methods/user_data";
verifySecretKeyRequest()
</script>

<style scoped>

</style>