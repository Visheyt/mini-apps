<script lang="ts" setup>
import { useDownloadImage } from '../../composables/useDownloadImage'

const { imgSrc, downloadLink } = defineProps<{
  imgSrc: string
  downloadLink: string
}>()

const handleClick = useDownloadImage(downloadLink)
</script>
<template>
  <div class="card">
    <img :src="imgSrc" alt="" class="card-img" />
    <button @click="handleClick" class="download-btn">Download</button>
  </div>
</template>

<style>
.card {
  display: flex;
  max-width: 350px;
  width: 100%;
  height: auto;
  position: relative;
  overflow: hidden;
}
.card-img {
  width: 100%;
  height: 100%;
  border-radius: 5px;
}
.description {
  position: absolute;
}
.download-btn {
  position: absolute;
  bottom: 0;
  left: 0;
  opacity: 0;
  transition:
    opacity 0.7s ease,
    transform 0.7s ease;
  transform: translateY(50px);
}
.card:hover .download-btn {
  opacity: 1;
  transform: translateY(0);
}
</style>
