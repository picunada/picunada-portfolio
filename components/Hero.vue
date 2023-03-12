<script setup lang="ts">
import App from '~~/webgl/App';

const webgl: Ref<HTMLCanvasElement | undefined> = ref()
let app: App

onMounted(() => {
  app = new App(webgl.value as HTMLCanvasElement)
})
</script>

<template>
  <section id="hero-element">
    <canvas ref="webgl" class="webgl"></canvas>
  </section>
</template>

<style lang="scss" scoped>
.webgl {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: transform 2s cubic-bezier(0.65, 0, 0.15, 1);
  z-index: -1;
}
</style>
