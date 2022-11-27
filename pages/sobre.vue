<template>
  <div>
    <h2>About</h2>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos
      perferendis quaerat, veritatis nemo doloribus impedit voluptates sed ab
      quis laborum aliquid eaque aliquam cupiditate exercitationem sit tempore
      optio quisquam fuga.
    </p>
    <div>{{ data }}</div>
  </div>
</template>

<script setup>
// const { data } = await useFetch("/api/produtos-api?nome=wesley", {
//   method: "POST",
//   body: { idade: 44 },
// });
const { data } = await useFetch("/api/produtos-api");
//const { data } = await useFetch("/api/currency/CAD");
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}
p {
  margin: 20px 0;
}
</style>