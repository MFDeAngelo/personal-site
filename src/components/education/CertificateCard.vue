<template>
  <Card :img=certificate.img>
    <h2>{{ certificate.name }}</h2>
    <p>{{ certificate.description }}</p>
    <p class="date">{{ certificate.validDate }}</p>
    <a :href=certificate.verification>Verification</a>
  </Card>
</template>

<script setup>
import Card from '@/components/education/Card.vue';
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
