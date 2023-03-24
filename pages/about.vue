<script setup>
useHead({
  title: 'About',
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
    <div id="about-container" flex gap4 overflow-auto>
      <div flex flex-row items-center gap4>
        <div w15 h15 rounded-100 overflow-hidden>
          <img id="avatar" src="~/assets/images/linkedin_avatar.png" />
        </div>
        <div>
          <h2 color-black text-4xl class="mouse-md">Daniil Bezuglov</h2>
          <h3 color-neutral text-xl font-400 class="mouse-sm">Software Engineer</h3>
        </div>
      </div>

      <div pt5>
        <h2 color-black class="mouse-md">Career Objective</h2>
        <h3 color-black font-300 pt2>
          Hey, I'am a Daniil.
          I am a problem solver who is eager to grow as a software engineer in an emerging company. I am passionate about
          software development and motivated to advance and expand my skill set through mentorship and challenging
          projects.
          My goal is to work with a team of talented professionals where I can contribute my skills and learn from my
          colleagues.
        </h3>
      </div>
      <div>
        <h2 color-black class="mouse-md">Experience</h2>
        <h3 color-neutral text-xl font-400 pt2 class="mouse-sm">Digital-Spirit, QA Engineer, 2020/09 - 2021/04</h3>
        <h3 color-black font-300>
          As a QA engineer at Digital-Spirit, I tested the code for the Interbank Bus System. I worked with the
          development
          team to improve system resilience and created mock data classes for the testing environment. This experience
          taught me the importance of attention to detail and the ability to work collaboratively with others.
        </h3>
        <h3 color-neutral text-xl font-400 pt2 class="mouse-sm">Lockerbot.io, Software Engineer, 2021/04 - Present</h3>
        <h3 color-black font-300>
          As a software engineer at Lockerbot.io, I collaborated with a startup team to bring projects from start to
          finish. I participated in all stages of development, from planning to deployment. I worked with the team to
          improve the quality of the product and ensure that it met the needs of our customers.
        </h3>
        <h3 color-neutral text-xl font-400 pt2 class="mouse-sm">Outsource</h3>
        <h3 color-black font-300>
          At Outsource, I worked on a variety of projects, including:
        </h3>
        <ul m-0 py2 px4>
          <li color-dark font-300 text-lg>Created an exchange telegram bot (Python, aiogram, PostgreSQL).</li>
          <li color-dark font-300 text-lg>Worked on the backend of the marketplace for private investigators (Django,
            DRF).</li>
          <li color-dark font-300 text-lg>Created an admin dashboard for billing with RSA signing messages logic, using
            Vue 3 +
            Django(DRF) stack.
          </li>
        </ul>
        <h3 color-black font-300>
          This work allowed me to develop my skills in a variety of areas and work with different teams and technologies.
        </h3>
      </div>
      <div>
        <h2 color-black class="mouse-md">Skills</h2>
        <h3 color-black font-300 pt2>
          I am a fast learner. I have experience working with a variety of programming languages and tools, including:
        </h3>
        <ul m-0 py2 px4>
          <li color-dark font-300 text-lg>Python - Django, DRF, Fastapi, Tortoise ORM, aiogram</li>
          <li color-dark font-300 text-lg>JavaScript - Typescript, Vue 3(script setup), Nuxt 3, Pinia or Vuex, Tailwind
            CSS
          </li>
          <li color-dark font-300 text-lg>iOS - Swift, SwiftUI, Combine</li>
          <li color-dark font-300 text-lg>VCS - Git</li>
          <li color-dark font-300 text-lg>Others: Postman, Swagger, Docker</li>
        </ul>
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
  transform: translateX(-10%) translateZ(0);
  transform-origin: left center;
}

#about-container {
  --uno: flex flex-col w-60% 2xl:w-65% py40 pl20;

  @media screen and (min-width: 800px) {
    transform: translateX(-10px);
  }

  @media screen and (max-width: 800px) {
    --uno: w-100% px4
  }
}

#avatar {
  width: 60px;
  transform: translateY(-12px) translateX(-1px);
}
</style>
