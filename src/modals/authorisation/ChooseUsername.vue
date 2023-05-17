<template>
  <div class="modal-bg">
    <div class="popup-win authorisation">
      <div class="choose">
        <input type="text" v-model="username"/>
      </div>
      <div class="action-pannel">
        <div class="title">
          <span>Enter your name</span>
        </div>
        <div class="action">
          <button @click='actionButton'><img src="@/assets/icons/check.png" alt="" /></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from "vue";

const emit = defineEmits(['callAction'])


const username = ref('')

const actionButton = () =>{
    if (username.value !== ''){
        emit('callAction', username.value);
    }
}
</script>

<style scoped>
</style>