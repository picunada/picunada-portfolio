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
  <main>
    <div id="page-wrapper" :class="pageClasses" asscroll-container>
      <TransitionGroup name="page">
        <NuxtLink v-if="route.path === '/about'"
          class="back-link  mt-4 lg:mt-0 mb-5 lg:mb-0 block text-end md:text-start text-xl flex flex-row"
          :class="backClasses" to="/">
          <h4 text-black uppercase font-300 class="mouse-sm">Back</h4>
          <div i-material-symbols:arrow-outward-sharp text-7 cursor-crosshair text-black class="mouse-sm" />
        </NuxtLink>
        <NuxtLink v-if="route.path === '/contact'"
          class="back-link  mt-4 lg:mt-0 mb-5 lg:mb-0 block text-end md:text-start text-xl flex flex-row"
          :class="backClasses" to="/">
          <div i-material-symbols:arrow-insert-sharp text-7 cursor-crosshair text-black class="mouse-sm" />
          <h4 text-black uppercase font-300 class="mouse-sm">Back</h4>
        </NuxtLink>
      </TransitionGroup>

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

  &.page--about {
    --uno: m-0 w-60%
  }

  &.page--contact {
    --uno: m-0 w-60% absolute right-0
  }
}

.back-link {
  color: #212A36;
  position: fixed;
  top: 40px;


  @media screen and (max-width: 992px) {
    position: relative;
    top: 0;
    left: 0;
  }

  &.left {
    left: 60px;
  }

  &.right {
    right: 60px;
  }
}
</style>
