<template>
  <div class="book">
    <img :src=book.image :alt=book.title />
  </div>
</template>

<script setup>
defineProps({
  book: {
    title: String,
    author: String,
    description: String,
    image: String,
  }
})
</script>

<style>
.book {
  margin: 14px;
  width: 200px;
  height: 300px;
}

.book:hover {
  border-color: fuchsia;
  margin: 12px;
  border-width: 2px;
  border-style: solid;
}

.book img {
  width: 100%;
  height: 100%;
}
</style>
