<template>
  <div class="card">
    <div class="grid grid-cols-2 gap-10">
      <div class="p-7">
        <img :src="produto.image" :alt="produto.title" class="mx-auto my-7" />
      </div>
      <div class="p-7">
        <h2 class="text-4xl my-7">{{ produto.title }}</h2>
        <p class="text-xl my-7">R$ {{ produto.price }}</p>
        <p class="font-bold border-b-2 mb-4 pb-2">Descrição:</p>
        <p class="mb-7">{{ produto.description }}</p>
        <button class="btn flex">
          <i class="material-icons mr-2">add_shopping_cart</i>
          <span>Adicionar ao carrinho</span>
        </button>
      </div>
    </div>
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
img {
  @apply max-w-sm;
}
</style>