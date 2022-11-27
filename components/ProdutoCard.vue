<template>
  <div class="card text-center">
    <img :src="produto.image" :alt="produto.title" class="thumb" />
    <p class="font-bold text-gray-500 m-4 truncate">{{ produto.title }}</p>
    <NuxtLink :to="`/produtos/${produto.id}`">
      <p class="btn my-4">Ver detalhes</p>
    </NuxtLink>
  </div>
</template>

<script setup>
const { produto } = defineProps({
  produto: {
    type: Object,
    default: () => {},
  },
});
</script>

<style lang="postcss" scoped>
.thumb {
  @apply max-h-[120px] max-w-[70%] m-auto;
}
</style>