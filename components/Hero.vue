<script setup lang="ts">
import App from '~~/webgl/App';

const webgl: Ref<HTMLCanvasElement | undefined> = ref()
let app: App

const route = useRoute();

const webglClasses = computed(() => {
  return {
    'webgl--about': route.path === '/about',
    'webgl--contact': route.path === '/contact',
  }
});

onMounted(() => {
  app = new App(webgl.value as HTMLCanvasElement)
})
</script>

<template>
  <section id="webgl-element" :class="webglClasses">
    <div id="webgl-canvas__container" :class="webglClasses">
      <canvas ref="webgl" id="webgl-canvas" :class="webglClasses"></canvas>
      <svg id="noise" viewBox="0 0 243 243">
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="1.3"></feTurbulence>
        </filter>

        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
    </div>

    <span class="airplane mouse-lg"></span>
  </section>
</template>

<style lang="scss" scoped>
body.fixed-webgl {
  #webgl-element {
    position: fixed;
  }
}

#webgl-element {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: transform 2s cubic-bezier(0.65, 0, 0.15, 1);
  overflow: hidden;

  &.webgl--about {
    transition-delay: 0.8s;
    transform: translateX(60vw);

    @media screen and (max-width: 1200px) {
      transform: translateX(70vw);
    }

    @media screen and (max-width: 768px) {
      transition-delay: 0s;
      transform: translateX(120vw);
    }
  }

  &.webgl--contact {
    transition-delay: 0.8s;
    transform: translateX(-60vw);

    @media screen and (max-width: 1200px) {
      transform: translateX(-70vw);
    }

    @media screen and (max-width: 768px) {
      transition-delay: 0s;
      transform: translateX(-120vw);
    }
  }
}

#webgl-canvas__container {
  position: relative;
  width: 100%;
  height: 100%;
  transition: all 1.8s cubic-bezier(0.7, 0, 0, 1);
  border-radius: 0;
  box-shadow: transparent 0 0px 20px -10px, transparent 0px 13px 156px -10px;
  object-fit: cover;
  z-index: -1;
  clip-path: polygon(-10% -10%, 110% -10%, 110% 110%, -10% 110%);
  background-color: #030205;
  overflow: hidden;

  &.webgl--about {
    transform: scale(0.8) perspective(400px) rotateX(2deg);
    backface-visibility: hidden;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: rgb(50 50 93 / 20%) 0 40px 20px -20px, #d216eb -80px 13px 156px -120px;
    transition: all 2.5s cubic-bezier(0.5, 0, 0, 1);
    clip-path: polygon(-10% -10%, 110% -10%, 110% 110%, -10% 110%);

    @media screen and (max-width: 1200px) {
      box-shadow: none;
    }

    @media screen and (max-width: 768px) {
      transform: scale(0.9);
    }

  }

  &.webgl--contact {
    transform: scale(0.8) perspective(400px) rotateX(2deg);
    backface-visibility: hidden;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: rgb(50 50 93 / 20%) 0 40px 20px -20px, #d216eb -80px 13px 156px -120px;
    transition: all 2.5s cubic-bezier(0.5, 0, 0, 1);
    clip-path: polygon(-10% -10%, 110% -10%, 110% 110%, -10% 110%);

    @media screen and (max-width: 1200px) {
      box-shadow: none;
    }

    @media screen and (max-width: 768px) {
      transform: scale(0.9);
    }

  }
}

#webgl-canvas {
  position: relative;
  width: 100%;
  height: 100%;
}

#noise {
  position: relative;
  z-index: -1;
  filter: url(#noiseFilter);
  opacity: 0.15;
  width: 100%;
  height: 1000%;
}

.airplane {
  position: absolute;
  margin: auto;
  top: 45%;
  left: 40%;
  width: 20%;
  height: 10%;
}
</style>
