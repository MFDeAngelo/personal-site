<template>
  <Card :img=work.logo>
    <h2>{{ work.companyName }}</h2>
    <h4>{{ work.title }}</h4>
    <p>{{ work.description }}</p>
    <p class="date">{{ work.startDate }} - {{ work.endDate }}</p>
  </Card>
</template>

<script setup>
import Card from '@/components/education/Card.vue';
defineProps({
  work: {
    companyName: String,
    title: String,
    description: String,
    logo: String,
    startDate: String,
    endDate: String,
  }
})
</script>
