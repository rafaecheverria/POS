<template>
  <div class="card-header">
    <h4 class="card-title text-white">{{ title }}</h4>
    <p class="card-category">{{ category }}</p>
  </div>
</template>

<script>
export default {
  name: "cabecera",
  props: {
    title: String,
    category: String,
  },
};
</script>

<style>
.card-header:first-child {
  background: #122038;
  padding: 10px;
  width: 100%;
}
</style>