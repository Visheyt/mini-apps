<script lang="ts" setup>
const { imgSrc } = defineProps<{
  imgSrc: string
  downloadLink: string
}>()
</script>
<template>
  <div class="card">
    <img :src="imgSrc" alt="" class="card-img" />
    <a :href="downloadLink" download="asdasd.jpg">
      <button>Download</button>
    </a>
  </div>
</template>

<style>
.card {
  display: flex;
  max-width: 350px;
  width: 100%;
  height: auto;
  position: relative;
}
.card-img {
  width: 100%;
  height: 100%;
  border-radius: 5px;
}
.description {
  position: absolute;
}
</style>
