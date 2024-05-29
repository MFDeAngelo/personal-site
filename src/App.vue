<template>
  <div style="position: relative">
    <BackgroundCurves style="position: absolute; z-index: -100;" />
    <AppHeader></AppHeader>
    <router-view />
  </div>
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue';
import BackgroundCurves from '@/components/BackgroundCurves.vue';
</script>

<style>
@import '@/style/scrollbar.css';

body {
  background-color: black;
  height: calc(100% - 16px);
}

html {
  height: 100%;
}

:root {
  --primary-color: #F0F0F0;
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
