<template>
  <div class="photo" @click="randomPhoto">
    <NuxtImg provider="cloudinary" :src="`/${num}`" quality="80" />
  </div>
</template>

<script lang="ts" setup>
const photos = [1, 2, 3, 4, 5];

const num = ref(1);

function randomPhoto() {
  num.value = photos[Math.floor(Math.random() * photos.length)];
}
</script>

<script lang="ts">
export default {
  name: 'StPhoto'
};
</script>

<style lang="scss" scoped src="./styles.scss"></style>
