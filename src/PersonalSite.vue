<template>
  <div class="container">
    <BackgroundCurves class="background" />
    <AppHeader style="flex: 0 1 auto;"></AppHeader>
    <router-view class="router" />
  </div>
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue';
import BackgroundCurves from '@/components/BackgroundCurves.vue';
</script>

<style scoped>
.container {
  position: relative;
  display: flex;
  flex-flow: column;
  height: 100vh;
}

.router {
  flex: 0 1 auto;
  overflow: auto;
}

.background {
  position: absolute;
  z-index: -100;
}
</style>
