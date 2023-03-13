<template>
  <div flex flex-col w-full h-full overflow-hidden id="index-container">
    <Header></Header>
    <div flex h-full pb-30 items-end justify-between id="index-wrapper">
      <h1 class="lead mouse-lg">
        A newbee software engineer eager to grow
      </h1>
      <div flex flex-row items-center gap2>
        <NuxtLink to="https://github.com/picunada">
          <div i-mdi:github text-3xl class="icon mouse-sm" />
        </NuxtLink>

        <NuxtLink to="https://www.linkedin.com/in/daniil-bezuglov-4b1418234/">
          <div i-mdi:linkedin text-3xl class="icon mouse-sm" />
        </NuxtLink>

      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.lead {
  color: #f2f2f2;
  text-shadow: -1px 0 0 #2cbfd9, 1px 0 0 #ef0969;
  text-transform: uppercase;
  font-size: 50px;
  width: 600px;
  transition: text-shadow .1s ease-in-out;
  user-select: none;

  @media screen and (max-width: 968px) {
    font-size: 30px;
  }
}

#index-wrapper {
  --uno: px4 2xl:px0;
}

.icon {
  color: #AFBFD6;
  text-shadow: -1px 0 0 #2cbfd9, 1px 0 0 #ef0969;
  transition: text-shadow .1s ease-in-out;
}
</style>


