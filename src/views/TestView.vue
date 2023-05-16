<template>
  <div style="color: #fff">
    {{ msg }}
    <!-- {{ cookie }} -->
  </div>
</template>

<script setup lang="ts">
// import { useCookie } from "@vue-composable/cookie";
// const { cookie } = useCookie("some-cookie");
// const cookies = useCookies(['locale'])
// const cookie = this.$cookies.get('session')
import { useCookies } from "vue3-cookies";
const msg = "msg";
const { cookies } = useCookies();
// console.log(cookies.set('key', '1234'))
console.log(cookies.get('key'))
// console.log($)
// import cookies
// import { co } from "vue-cookies";
// const { cookies } = useCookies();
// console.log($cookies)
</script>

<style scoped>
</style>