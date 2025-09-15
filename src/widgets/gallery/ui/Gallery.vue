<script lang="ts" setup>
import { ImageCard } from '@/entities/image-card/'
import { DownloadButton } from '@/features/download-image'
import { useGallery } from '../models/useGallery'
import SearchBar from './SearchBar.vue'

const { loading, error, data, query, searchImages } = useGallery()
</script>

<template>
  <div class="gallery">
    <SearchBar v-model="query" @search="() => searchImages()" />
    <div class="images-container">
      <div v-if="loading">LOADING....</div>
      <div v-else-if="error">Something goes wrong....</div>
      <template v-else>
        <ImageCard
          v-for="(item, index) in data"
          :key="index"
          :img-src="item.urls.regular"
          :download-link="item.links.download_location"
        >
          <DownloadButton :download-link="item.links.download_location"
        /></ImageCard>
      </template>
    </div>
  </div>
</template>

<style>
.gallery {
  padding-block: 15px;
  padding-inline: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
}

.images-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
  flex: 1;
  justify-content: center;
}
.input {
  padding: 10px;
  border-radius: 15px;
  width: 100%;
  max-width: 550px;
  border: none;
  box-shadow: 0 0 10px rgb(164, 164, 164);
  transition: box-shadow 0.5s ease;
}
.input:focus-visible {
  border: none;
  outline: none;
  box-shadow: 0 0 10px rgb(69, 69, 69);
}
</style>
