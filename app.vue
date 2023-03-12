<template>
  <client-only>
    <LazyHero />
  </client-only>

  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>

  <client-only>
    <LazyCursor />
  </client-only>
</template>

