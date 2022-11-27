<template>
  <div>
    <ProdutoDetalhes :produto="produto" />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "products",
});
const { id } = useRoute().params;
const uri = `https://fakestoreapi.com/products/${id}`;
const { data: produto } = await useFetch(uri, { key: id });

if (!produto.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Produto não encontrado",
    fatal: true,
  });
}
</script>

<style scoped>
</style>