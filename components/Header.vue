<script setup lang="ts">
import { useWindowSize } from '@vueuse/core';

const size = useWindowSize()

</script>

<template>
  <div class="header">
    <div flex items-end>
      <img id="logo-icon" class="mouse-md" src="~/assets/icon.svg" alt="picunada logo">

      <div class="logo-text mouse-md">
        <h3 class="mouse-md">
          Picunada
        </h3>
        <h3 class="mouse-md">
          software engineer
        </h3>
      </div>

      <div id="tech-stack-container">
        <ul class="tech-stack">
          <li class="mouse-sm">Vue</li>
          <li class="mouse-sm">Nuxt</li>
          <li class="mouse-sm">Three.js</li>
          <li class="mouse-sm">Python</li>
          <li class="mouse-sm">Swift</li>
        </ul>
      </div>
    </div>
    <div flex items-end justify-center gap3 text-4 lg:gap12>
      <NuxtLink cursor-pointer z-3 to="/about">
        <h3 class="mouse-sm">About</h3>
      </NuxtLink>
      <NuxtLink cursor-pointer z-3 to="/contact">
        <h3 class="mouse-sm">Contact</h3>
      </NuxtLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1.2rem;
  padding: 1.5rem 1rem 1.5rem 1rem;

  @media screen and (max-width: 968px) {
    gap: 0.2rem;
  }
}

#tech-stack-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;

  @media screen and (max-width: 968px) {
    display: none;
  }
}

#logo-icon {
  width: 40px;
  fill: #fff;
}

.tech-stack {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  list-style-type: none;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0;
  gap: 3rem;
  margin: 0;

  @media screen and (max-width: 968px) {
    gap: 0.5rem;
    font-size: 13px;
  }

  li {
    color: #AFBFD6;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.3);
  }
}

.logo-text {
  font-size: 15px;

  @media screen and (max-width: 968px) {
    font-size: 13px;
  }
}
</style>
