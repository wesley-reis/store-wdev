<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4 flex justify-between items-center">
        <NuxtLink to="/produtos" class="font-bold text-emerald-400 text-xl"
          >STORE WDEV - Produtos</NuxtLink
        >
      </nav>
    </header>

    <div class="container mx-auto p-4">
      <slot />
    </div>

    <footer
      class="container mx-auto p-4 flex justify-between items-center border-t-2"
    >
      <ul class="flex gap-4">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/sobre">Sobre nós</NuxtLink></li>
        <li><NuxtLink to="/produtos">Produtos</NuxtLink></li>
      </ul>
    </footer>
  </div>
</template>

<script setup>
</script>

<style lang="postcss" scoped>
.router-link-exact-active {
  @apply text-emerald-400;
}
</style>