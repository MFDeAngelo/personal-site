<template>
  <div>
    <canvas :width=canvasSize.width :height=canvasSize.height id="canvas" ref="canvas" />
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import animate from '@/components/bezierCurve';

var canvas = ref();

const canvasSize = reactive({ height: 100, width: 100 });
async function animateBackground() {
  /*
  const resizer = new ResizeObserver((entries) => {
    entries.forEach((entry) => {
      canvasSize.width = entry.contentRect.width;
      // canvasSize.height = entry.contentRect.height;
      console.log('here');
    });
  });
  resizer.observe(canvas.value.parentElement);
  */
  var div = canvas.value.parentElement;
  canvasSize.width = canvas.value.parentElement.clientWidth;
  canvasSize.height = canvas.value.parentElement.clientHeight;
  await delay(100);

  animate(canvas.value);
}

const delay = (delayInms) => {
  return new Promise(resolve => setTimeout(resolve, delayInms));
};

onMounted(animateBackground);
</script>

<style scoped>
div {
  width: 100%;
  height: 100vh;
}

div canvas {
  object-fit: contain;
}
</style>
