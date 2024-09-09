<template>
  <div style="justify-content: center;">
  <h3 class="section-title">Work Experience</h3>
  <WorkCard v-for="work in works" :key=work.companyName :work=work />
  </div>

</template>

<script setup>
import works from '@/data/works';

import WorkCard from '@/components/education/WorkCard.vue';
</script>

<style scoped>

.section-title {
  border-radius: 15px;
  background-color: var(--primary-color);
  text-align: center;
  color: black;
  padding-top: 15px;
  padding-bottom: 15px;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}
</style>
