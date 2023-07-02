<script setup lang="ts">
import { ref, watch } from 'vue';

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
</script>

<template>
  <div class="bg-red-500">
    asd
  </div>
</template>
