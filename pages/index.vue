<template>
  <div class="home-page">
    <div class="grid">
      <div class="grid-box" v-for="i in 24 * 15" :key="i"></div>
    </div>
    <div class="grid">
      <st-photo />
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.home-page {
  width: 100%;
  height: 100%;
  position: relative;
}

.grid {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  grid-template-rows: repeat(15, 1fr);

  &-box {
    margin: 2px;
    border-width: 1px;
    border-style: solid;
    border-color: var(--gray-700);
    opacity: 0.1;
  }
}
</style>
