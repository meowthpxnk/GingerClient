<template>
  <div class="modal-bg" @click.self="close">
    <div class="popup-win lobby">
      <div class="lobby-title">
        <div class="popup-list-header">
          <span>Title</span>
        </div>
        <input type="text" v-model="lobby_title"/>
      </div>
      <div class="lobby-topics">
        <div class="popup-list-header">
          <span>Choose topics</span>
        </div>
        <ul>
          <li
            v-for="topic in topics_store.getTopics"
            :key="topic.title"
            @click="chooseTopic(topic.title)"
          >
            <img
              :src="'http://localhost:5000/images/topics/' + topic.image"
              alt=""
            />
            <div class="mark" v-if="isChoosen(topic.title)">
              <img src="@/assets/icons/check.png" alt="" />
            </div>
          </li>
        </ul>
      </div>
      <div class="action">
        <span> Create lobby </span>
        <button @click="callAction"><img src="@/assets/icons/check.png" alt="" /></button>
      </div>
      <!-- <div class="action-pannel">
        <div class="title">
          <span>Enter your name</span>
        </div>
        <div class="action">
          <button>+</button>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { generateGame } from "@/api";
import { useTopicsStore } from "@/store/topics";
import { defineEmits, ref } from "vue";
import { useUserData } from "@/store/user_data";
import { useSocketsLobbies } from "@/web_sockets/lobbies";
const emit = defineEmits(["close"]);

const topics_store = useTopicsStore();
topics_store.loadTopics();

const choosedTopics = ref([]);

const SocketLobbies = useSocketsLobbies();

const close = () => {
  emit("close");
};
const chooseTopic = (topic) => {
  const idx = choosedTopics.value.indexOf(topic);
  if (idx < 0) {
    choosedTopics.value.push(topic);
  } else {
    choosedTopics.value.splice(idx, 1);
  }
};

const isChoosen = (topic) => {
  const idx = choosedTopics.value.indexOf(topic);
  if (idx < 0) {
    return false;
  }
  return true;
};

const lobby_title = ref('')

const callAction = async () => {
  if (choosedTopics.value.length > 0 && lobby_title.value !== ''){
    const data = {
      title: lobby_title.value, 
      topics: choosedTopics.value,
      user_name: useUserData().getUserName
    }
    await generateGame(data)
    await SocketLobbies.emit('create_lobby', lobby_title.value)
    close()
  }
}
</script>

<style scoped>
</style>