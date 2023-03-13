<script setup lang="ts">


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
          a software engineer
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
    <div flex items-end justify-center gap12>
      <NuxtLink to="/about">
        <h3 class="mouse-sm">About</h3>
      </NuxtLink>
      <NuxtLink to="/contact">
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
}

#tech-stack-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
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

  li {
    color: #AFBFD6;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.3);
  }
}

.logo-text {
  font-size: 15px;
}
</style>
