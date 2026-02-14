<script lang="ts" setup>
import { images } from '@/entity/image'
import { ImageCard } from '@/entity/image'
import { computed, onMounted, ref, useTemplateRef } from 'vue'
import { Spinner } from '@/shared/ui'

const searchModel = ref('')

const searchQuery = ref('')

const { data: randomImages, isLoading } = images.random()

const search = useTemplateRef<HTMLInputElement>('search')

const {
  data: searchImages,
  isLoading: isSearchLoading,
  refetch: refetchSearch,
} = images.get(searchQuery)

const imagesToShow = computed(() => {
  return searchQuery.value.length > 2 ? (searchImages.value ?? []) : (randomImages.value ?? [])
})

const handleSearch = () => {
  if (searchModel.value.length > 2) {
    searchQuery.value = searchModel.value
    refetchSearch()
  }
}

onMounted(() => search.value?.focus())
</script>
<template>
  <div class="page gallery">
    <input
      ref="search"
      type="search"
      placeholder="Enter your search request"
      v-model="searchModel"
      class="input"
      @keyup.enter="handleSearch"
    />
    <Spinner v-if="isLoading || isSearchLoading" />
    <div class="images-container" v-else>
      <ImageCard
        v-for="(item, index) in imagesToShow"
        :key="index"
        :img-src="item.urls.regular"
        :download-link="item.links.download_location"
      />
    </div>
  </div>
</template>

<style>
.gallery {
  padding-top: 80px;
  padding-inline: 20px;
}
@media (width>768px) {
  .gallery {
    padding: 20px;
  }
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
  box-shadow: 0 0 5px rgb(164, 164, 164);
  transition: box-shadow 0.5s ease;
}
.input:focus-visible {
  border: none;
  outline: none;
  box-shadow: 0 0 5px rgb(69, 69, 69);
}
</style>
