<script setup lang="ts">
let preloaded = useState('loaded')
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
    'left': route.path === '/about',
    'right': route.path === '/contact',
  }
})

useHead({
  title: 'Hey, I\'m Picunada',
  meta: [
    {
      name: 'description',
      content: 'Newbee software engineer.'
    }
  ],
  bodyAttrs: {
    class: 'enable-scroll fixed-webgl'
  }
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

    <div id="page-wrapper" :class="pageClasses" asscroll-container>

      <slot asscroll></slot>
    </div>

    <div id="background" :class="backClasses"></div>

    <div class="preloader" :class="preloaderClasses">
      <div class="preloader__overlay">
        <div class="loader">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.preloader__overlay {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
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

.loader {
  display: flex;
  align-items: center;
}

.bar {
  display: inline-block;
  width: 3px;
  height: 20px;
  background-color: rgba(255, 255, 255, .5);
  border-radius: 10px;
  animation: scale-up4 1s linear infinite;
}

.bar:nth-child(2) {
  height: 35px;
  margin: 0 5px;
  animation-delay: .25s;
}

.bar:nth-child(3) {
  animation-delay: .5s;
}

@keyframes scale-up4 {
  20% {
    background-color: #ffff;
    transform: scaleY(1.5);
  }

  40% {
    transform: scaleY(1);
  }
}

#page-wrapper {
  --uno: w-screen 2xl:w-80% relative h-screen m-auto;
}

#background::before {
  position: absolute;
  top: 0;
  background: linear-gradient(180deg, rgb(255, 255, 255), rgb(255, 255, 255), rgb(255, 255, 255), rgb(99, 48, 180));
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
  z-index: -3;
  transition: background 1s cubic-bezier(0.075, 0.82, 0.165, 1);


}

#background::after {
  &.left {
    background: linear-gradient(300deg, rgb(255, 255, 255), rgb(255, 255, 255), rgb(255, 255, 255), rgb(255, 255, 255), rgb(99, 48, 180));
  }

  &.right {
    background: linear-gradient(50deg, rgb(255, 255, 255), rgb(255, 255, 255), rgb(255, 255, 255), rgb(255, 255, 255), rgb(99, 48, 180));
  }
}



.back-link {
  color: #212A36;
  position: fixed;
  top: 40px;
  z-index: 2;

  &.right {
    left: 60px;

    @media screen and (max-width: 992px) {
      position: absolute;
      top: 20px;
      left: 30px;
    }
  }

  &.left {
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
