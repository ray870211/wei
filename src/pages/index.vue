<script setup lang="ts">
import { ref, watch } from 'vue';

import Header from '@/components/organisms/Header.vue';
const msgRef = ref('Hello, Vue 3!');
setTimeout(() => {
  msgRef.value = 'Hello, Vue 3 + TypeScript!';
}, 3000);

// const isVue3 = computed(() => {
//   if (msgRef.value === 'Hello, Vue 3 + TypeScript!') return msgRef.value;
// });

watch(msgRef, () => {
  // alert('msgRef changed');
});
const titleRef = 'abcv';
</script>

<template>
  <Header :title="titleRef" />
</template>
