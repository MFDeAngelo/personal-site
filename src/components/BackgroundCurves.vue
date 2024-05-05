<template>
  <div>
    <canvas :width=canvasSize.width :height=canvasSize.height id="canvas" ref="canvas" />
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import animate from '@/components/bezierCurve';

const canvas = ref();

const canvasSize = reactive({ height: 100, width: 100 });
function animateBackground() {
  const resizer = new ResizeObserver((entries) => {
    entries.forEach((entry) => {
      canvasSize.width = entry.contentRect.width;
      // canvasSize.height = entry.contentRect.height;
    });
  });
  resizer.observe(canvas.value.parentElement);
  animate(canvas.value);
}

onMounted(animateBackground);
</script>

<style scoped>
div {
  width: 100%;
  height: 100%;
}

div canvas {
  object-fit: contain;
}
</style>
