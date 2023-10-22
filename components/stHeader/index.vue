<template>
  <header class="header">
    <NuxtLink class="logo" to="/"> Home </NuxtLink>
    <NuxtLink to="/about"> About </NuxtLink>
    <NuxtLink to="/contact"> Contact </NuxtLink>
  </header>
</template>

<script lang="ts">
export default {
  name: 'StHeader'
};
</script>

<style lang="scss" scoped src="./styles.scss"></style>
