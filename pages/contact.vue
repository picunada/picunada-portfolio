<script setup lang="ts">
useHead({
  title: 'Contact',
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
  <section class="page">
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
  </section>
</template>

<style lang="scss" scoped>
.page-enter-active {
  transition: all 1.5s cubic-bezier(0.4, 0, 0, 1);
  transition-delay: 0.5s;
}

.page-leave-active {
  transition: all 1s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateX(10%) translateZ(0);
  transform-origin: left center;
}

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
