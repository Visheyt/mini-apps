<script lang="ts" setup>
import { useFetch } from '@/shared/composables/useFetch'
import ImageCard from './components/image-card/ImageCard.vue'
import { getRandomImages } from './api/get-random-images'
import { onMounted } from 'vue'
import type { ImageResponse } from './api/types'

const searchModel = defineModel<string>()

const { loading, error, data, execute } = useFetch<ImageResponse[]>()

onMounted(() => {
  execute(getRandomImages)
})
</script>
<template>
  <div class="page">
    <input
      type="search"
      placeholder="Enter your search request"
      v-model="searchModel"
      class="input"
    />
    <div class="images-container" v-if="!loading && !error">
      <ImageCard
        v-for="(item, index) in data"
        :key="index"
        :img-src="item.urls.regular"
        :download-link="item.links.download_location"
      />
    </div>
    <div v-else>LOADING....</div>
  </div>
</template>

<style>
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
