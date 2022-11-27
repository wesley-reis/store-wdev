<template>
  <div>
    produto {{ id }}

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita aliquid
      ratione et, soluta ad magnam, dolorem voluptates fuga culpa labore
      repudiandae ullam veniam voluptatem mollitia praesentium quas quibusdam
      veritatis quae.
    </p>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "products",
});
const { id } = useRoute().params;
</script>

<style scoped>
</style>