<template>
  <PersonalSite></PersonalSite>
</template>

<script setup>
import PersonalSite from '@/PersonalSite.vue';
</script>

<style>
@import '@/style/scrollbar.css';

body {
  background-color: black;
  margin: 0px;
}

html {
  overflow: hidden;
}

:root {
  --primary-color: #E0E0E0;
  --primary-color-inactive: #D0D0D0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--primary-color);
}

a {
  color: fuchsia;
}

.center {
  text-align: center;
}
</style>
