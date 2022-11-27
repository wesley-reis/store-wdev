<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="(p, index) in produtos" :key="index">
        <ProdutoCard :produto="p" />
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "products",
});

const { data: produtos } = await useFetch("https://fakestoreapi.com/products");
</script>

<style scoped>
</style>