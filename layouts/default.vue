<template>
  <main>
    <st-header />
    <slot />

    <st-footer />
  </main>
</template>

<style lang="scss" scoped>
main {
  background-color: var(--black);
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
