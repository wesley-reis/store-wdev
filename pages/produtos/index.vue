<template>
  <div>
    <div>
      <ul class="flex justify-center items-center gap-5">
        <li class="uppercase text-emerald-900 font-semibold mb-7">
          Categorias:
        </li>
        <li
          v-for="(category, index) in categories"
          :key="index"
          class="
            uppercase
            text-emerald-400
            font-semibold
            hover:text-emerald-500
            mb-7
          "
        >
          <NuxtLink :to="`/produtos/category/${category}`">{{
            category
          }}</NuxtLink>
        </li>
      </ul>
    </div>
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

useHead({
  title: "Store WDEV | Produtos",
});

const { data: produtos } = await useFetch("https://fakestoreapi.com/products");
const { data: categories } = await useFetch(
  "https://fakestoreapi.com/products/categories"
);
</script>

<style scoped>
</style>