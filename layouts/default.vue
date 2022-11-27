<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4 flex justify-between items-center">
        <NuxtLink to="/" class="font-bold text-xl text-emerald-400"
          >STORE WDEV</NuxtLink
        >
        <ul class="flex gap-4">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/sobre">Sobre nós</NuxtLink></li>
          <li><NuxtLink to="/produtos" class="btn">Produtos</NuxtLink></li>
        </ul>
      </nav>
    </header>

    <div class="container mx-auto p-4">
      <slot />
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="postcss" scoped>
.router-link-exact-active {
  @apply text-emerald-400;
}
</style>