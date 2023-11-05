<template>
  <div class="home-page grid">
    <div v-for="i in 24 * 15" :key="i"></div>
    <!-- <st-photo /> -->
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.home-page {
  width: 100%;
  height: 100%;
  // display: grid;
  // grid-template-columns: repeat(24, 1fr);
  // grid-template-rows: repeat(15, 1fr);
}

.grid {
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  grid-template-rows: repeat(15, 1fr);
}

// .grid::before {
//   content: '';
//   width: 0;
//   padding-bottom: 100%;
//   grid-row: 1 / 1;
//   grid-column: 1 / 1;
// }

// .grid > *:first-child {
//   grid-row: 1 / 1;
//   grid-column: 1 / 1;
// }

.grid > * {
  border: 1px solid var(--gray-700);
}
</style>
