<template>
  <div>
    <Head>
      <Title>Store WDEV | {{ category }}</Title>
      <Meta name="description" :content="`produto por categoria${category}`" />
    </Head>
    <div class="text-emerald-600 text-xl mb-7">
      <span class="text-gray-800">Categoria:</span> {{ category }}
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

const { category } = useRoute().params;
const uri = `https://fakestoreapi.com/products/category/${category}`;
const { data: produtos } = await useFetch(uri, { key: category });

if (!produtos.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Categoria não encontrado",
    fatal: true,
  });
}
</script>

<style scoped>
</style>