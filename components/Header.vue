<script setup lang="ts">


</script>

<template>
  <div class="header">
    <img id="logo-icon" src="~/assets/icon.svg" alt="picunada logo">

    <div class="logo-text">
      <h3>
        Picunada
      </h3>
      <h3>
        a software engineer
      </h3>
    </div>

    <div id="tech-stack-container">
      <ul class="tech-stack">
        <li>Vue</li>
        <li>Nuxt</li>
        <li>Three.js</li>
        <li>Python</li>
        <li>Swift</li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 1.2rem;
  padding: 1.5rem 1rem 1.5rem 1rem;
}

#tech-stack-container {
  display: flex;
  justify-content: center;
  align-items: center;
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
