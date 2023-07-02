<script setup lang="ts">
interface HeaderProps {
  title: string;
}
const props = defineProps<HeaderProps>();
console.log(props.title);
</script>

<template>
  <header />
  <div>{{ title }}</div>
</template>
