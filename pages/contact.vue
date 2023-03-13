<script setup lang="ts">


</script>

<template>
  <div>
    <div id="contact-container">
      <div pt50>
        <h2 color-black text-4xl class="mouse-sm">Connect</h2>
        <h3 color-black font-300 pt2>
          I am open to connecting with recruiters who are looking for a software engineer with experience in Python,
          JavaScript, and iOS development. Please feel free to reach out to me if you think I would be a good fit for your
          team or if you have any questions about my experience and qualifications. Thank you for your consideration.
        </h3>
        <h2 class="mb-6 mt4"><a href="mailto:xlaystgoku@gmail.com" target="blank" class="mouse-md"
            style="color: #404040">xlaystgoku@gmail.com</a></h2>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#contact-container {
  --uno: flex flex-col w-60% xl:pt40 pl40;

  @media screen and (min-width: 800px) {
    transform: translateX(40%);
  }

  @media screen and (max-width: 800px) {
    --uno: w-100% px4
  }
}
</style>
