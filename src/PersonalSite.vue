<template>
  <div class="container">
    <BackgroundCurves class="background" />
    <AppHeader style="flex: 0 1 auto;"></AppHeader>
    <div id='page-content'>
      <router-view class="router" />
    </div>
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

#page-content {
  display: flex;
  justify-content: center;
  overflow: auto;
}

.router {
  flex: 0 1 auto;
  max-width: 1000px;
}

.background {
  position: absolute;
  z-index: -100;
}
</style>
