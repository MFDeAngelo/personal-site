<template>
  <div class="card">
    <img :src=img :alt=img />
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  img: String
})
</script>

<style scoped>
.card {
  margin: 20px;
  border-width: 2px;
  border-color: var(--primary-color);
  border-radius: 20px;
  border-style: solid;
  display: flex;
  gap: 12px;
  padding: 8px;
  color: var(--primary-color);
  text-align: left;
  max-width: calc(50% - 80px);
  min-width: 700px;
}

.card:hover {
  border-color: fuchsia;
  background-color: black;
}

.card div {
  width: 75%;
  float: right;
}

img {
  width: 250px;
  height: 250px;
}
</style>
