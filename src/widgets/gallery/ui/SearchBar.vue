<script lang="ts" setup>
defineEmits<{
  search: []
}>()

const query = defineModel<string>()
</script>

<template>
  <input
    type="search"
    placeholder="Enter your search request"
    v-model="query"
    class="input"
    @keyup.enter="$emit('search')"
  />
</template>

<style></style>
