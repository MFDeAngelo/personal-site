<template>
  <div class="card">
    <img :src=certificate.img alt="Certification Seal" />
    <div style="width:75%;float:right;">
      <h2>{{ certificate.name }}</h2>
      <p>{{ certificate.description }}</p>
      <p class="date">{{ certificate.validDate }}</p>
      <a :href=certificate.verification>Verification</a>
    </div>
  </div>
</template>

<script setup>
defineProps({
  certificate: {
    name: String,
    description: String,
    img: String,
    validDate: Date,
    validation: String
  }
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

img {
  width: 250px;
  height: 250px;
}
</style>
