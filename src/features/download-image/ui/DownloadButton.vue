<script setup lang="ts">
import DownloadIcon from '@/shared/icons/DownloadIcon.vue'
import { useDownloadImage } from '../model/useDownloadImage'

const props = defineProps<{
  downloadLink: string
}>()

const handleClick = useDownloadImage(props.downloadLink)
</script>

<template>
  <button @click="handleClick" class="download-btn">
    <DownloadIcon />
  </button>
</template>
