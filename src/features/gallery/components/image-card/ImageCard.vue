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
    <div class="gradient-overlay"></div>
    <div class="card-buttons">
      <button @click="handleClick" class="download-btn">Download</button>
    </div>
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
  cursor: pointer;
}
.card-img {
  width: 100%;
  height: 100%;
  border-radius: 5px;
}
.gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  opacity: 0;
  background: linear-gradient(to bottom, rgb(74 72 72 / 30%), rgba(0, 0, 0, 0.6));
  transition: opacity 0.3s ease;
  z-index: 1;
}

.card-buttons {
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  transform: translateY(100%);
  transition: transform 0.3s ease;
  padding: 10px;
  z-index: 2;
}

.card:hover .gradient-overlay {
  opacity: 1;
}

.card:hover .card-buttons {
  transform: translateY(0);
}
.download-btn {
  border-radius: 2px;
  border: none;
  padding: 7px;
  cursor: pointer;
  background-color: inherit;
  color: white;
  font-weight: 600;
}
</style>
