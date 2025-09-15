<script lang="ts" setup>
const { imgSrc } = defineProps<{
  imgSrc: string
}>()
</script>
<template>
  <div class="card">
    <img :src="imgSrc" alt="" class="card-img" width="350" height="233" loading="lazy" />
    <div class="card-buttons">
      <slot />
    </div>
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
  opacity: 1;
  transition: opacity 0.6s ease;
}

.mobile-btn svg {
  width: 10px;
  height: 10px;
}
@media (width>768px) {
  .mobile-btn {
    opacity: 0;
  }
  .card:hover .mobile-btn {
    opacity: 1;
  }
}
</style>
