<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { getRandomImages } from '../api/get-random-images'
import type { ImageResponse } from '../api/types'

const searchModel = defineModel<string>()

const images = ref<ImageResponse[]>([])
onMounted(() => {
  getRandomImages()
    .then((res) => {
      if (res?.length) {
        images.value = res
      }
    })
    .catch((err) => console.log(err))
})
</script>
<template>
  <div class="page">
    <input type="search" placeholder="Enter your search request" v-model="searchModel" />
    <div v-for="(item, index) in images" :key="index">
      <img :src="item.urls.regular" alt="" />
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
