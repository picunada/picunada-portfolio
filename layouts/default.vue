<script setup lang="ts">
let preloaded = ref(false);
const route = useRoute()

const preloaderClasses = computed(() => {
  return {
    'preloader--loaded': preloaded.value
  }
})

const pageClasses = computed(() => {
  return {
    'page--about': route.path === '/about',
    'page--contact': route.path === '/contact',
  }
})

const backClasses = computed(() => {
  return {
    'right': route.path === '/about',
    'left': route.path === '/contact',
  }
})

onMounted(() => {
  nextTick(() => {
    preloaded.value = true;
  });
});

</script>

<template>
  <main w-screen>
    <div>
      <Transition name="page">
        <NuxtLink v-if="route.path === '/about'"
          class="back-link  mt-4 lg:mt-0 mb-5 lg:mb-0 block text-end md:text-start text-xl flex flex-row"
          :class="backClasses" to="/">
          <h4 text-black uppercase font-300 class="mouse-sm">Back</h4>
          <div i-material-symbols:arrow-outward-sharp text-7 cursor-crosshair text-black class="mouse-sm" />
        </NuxtLink>
      </Transition>
      <Transition name="page">
        <NuxtLink v-if="route.path === '/contact'"
          class="back-link  mt-4 lg:mt-0 mb-5 lg:mb-0 block text-end md:text-start text-xl flex flex-row"
          :class="backClasses" to="/">
          <div i-material-symbols:arrow-insert-sharp text-7 cursor-crosshair text-black class="mouse-sm" />
          <h4 text-black uppercase font-300 class="mouse-sm">Back</h4>
        </NuxtLink>
      </Transition>
    </div>

    <!-- <div class="moons">
        <div class="moon" data-speed="0.3">🌑</div>
        <div class="moon" data-speed="0.37">🌑</div>
        <div class="moon" data-speed="0.35">🌑</div>
        <div class="moon" data-speed="0.4">🌑</div>
        <div class="moon" data-speed="0.2">🌑</div>
        <div class="moon" data-speed="0.3">🌑</div>
        <div class="moon" data-speed="0.45">🌑</div>
      </div> -->

    <div id="page-wrapper" :class="pageClasses" asscroll-container>

      <slot asscroll></slot>
    </div>

    <div class="preloader" :class="preloaderClasses">
      <div class="preloader__overlay" />
    </div>
  </main>
</template>

<style lang="scss" scoped>
.preloader__overlay {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: #050016;
  z-index: 9998;
  transition: all 2s cubic-bezier(0.4, 0, 0, 1);
  transform: translateX(0) translateZ(0);
  backface-visibility: hidden;
}

.preloader--loaded {
  .preloader__overlay {
    pointer-events: none;
    transform: translateX(-100%) translateZ(0);
  }
}

#page-wrapper {
  --uno: w-screen 2xl:w-80% relative h-screen m-auto;
}

.back-link {
  color: #212A36;
  position: fixed;
  top: 40px;
  z-index: 2;

  &.left {
    left: 60px;

    @media screen and (max-width: 992px) {
      position: absolute;
      top: 20px;
      left: 30px;
    }
  }

  &.right {
    right: 60px;

    @media screen and (max-width: 992px) {
      position: absolute;
      top: 20px;
      right: 30px;
    }
  }
}

.moons {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -4;
  pointer-events: none;
}

.moon {
  position: absolute;
  font-size: 5vw;

  &:nth-child(1) {
    top: 2%;
    left: 16%;
    transform: scale(0.3 * 2);
  }

  &:nth-child(2) {
    top: 4%;
    right: 15%;
    transform: scale(0.37 * 2);
  }

  &:nth-child(3) {
    top: 80%;
    right: 35%;
    transform: scale(0.35 * 2);
  }

  &:nth-child(4) {
    top: 90%;
    left: 35%;
    transform: scale(0.4 * 2);
  }

  &:nth-child(5) {
    top: 10%;
    left: 45%;
    transform: scale(0.2 * 2);
  }

  &:nth-child(6) {
    top: 70%;
    left: 10%;
    transform: scale(0.3 * 2);
  }

  &:nth-child(7) {
    top: 60%;
    right: 10%;
    transform: scale(0.45 * 2);
  }
}
</style>
