<script lang="ts" setup>
import DownloadIcon from '@/shared/icons/DownloadIcon.vue'
import { useDownloadImage } from '../../composables/useDownloadImage'

const { imgSrc, downloadLink } = defineProps<{
  imgSrc: string
  downloadLink: string
}>()

const handleClick = useDownloadImage(downloadLink)
</script>
<template>
  <div class="card">
    <img :src="imgSrc" alt="" class="card-img" width="350" height="233" loading="lazy" />
    <div class="gradient-overlay"></div>
    <div class="card-buttons">
      <button @click="handleClick" class="download-btn">Download</button>
    </div>
    <button @click="handleClick" class="mobile-btn"><DownloadIcon /></button>
  </div>
</template>

<style>
.card {
  max-width: 350px;
  width: 100%;
  aspect-ratio: 3 / 2;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  border-radius: 5px;
  display: flex;
}
.card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.mobile-btn {
  border-radius: 50%;
  background-color: rgba(242, 242, 242, 0.648);
  width: 25px;
  height: 25px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 5px;
  top: 5px;
  font-weight: 900;
  font-size: 15px;
  padding: 5px;
}
.mobile-btn svg {
  width: 10px;
  height: 10px;
}
.card-buttons {
  display: none;
}
@media (width> 768px) {
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
  .mobile-btn {
    display: none;
  }
}
</style>
