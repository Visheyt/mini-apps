<script lang="ts" setup>
import { ref, watch } from 'vue'
import { navData } from '../data/nav-data'
import MenuCloseIcon from '../icons/MenuCloseIcon.vue'
import { useRoute } from 'vue-router'
import MenuOpenIcon from '../icons/MenuOpenIcon.vue'

const isOpen = ref<boolean>(false)

const asideRef = ref<HTMLElement | null>(null)
const route = useRoute()

const handleClose = () => {
  isOpen.value = false
}

const handleOpen = () => {
  isOpen.value = true
}

watch(route, () => {
  isOpen.value = false
})
</script>

<template>
  <button @click="handleOpen" class="menu-btn open-btn"><MenuOpenIcon /></button>
  <aside class="aside" :class="isOpen ? 'open' : 'close'" ref="asideRef">
    <div class="logo">
      <h1>Mini Apps</h1>
      <button @click="handleClose" class="menu-btn"><MenuCloseIcon /></button>
    </div>
    <nav class="nav">
      <RouterLink v-for="item in navData" :key="item.id" :to="item.to">
        <component :is="item.icon" />
        <span>{{ item.name }}</span>
      </RouterLink>
    </nav>
  </aside>
</template>
<style>
.aside {
  display: flex;
  height: 100%;
  position: absolute;
  flex-direction: column;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  max-width: 350px;
  background: rgba(255, 255, 255, 0.47);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  color: #474747;
  transform: translateX(0px);
  transition: transform 0.3s ease;
  gap: 30px;
}
.close {
  transform: translateX(-350px);
}
.logo {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(128, 128, 128, 0.279);
  padding: 20px;
}
.nav {
  display: flex;
  gap: 10px;
  font-size: 20px;
  font-weight: 600;
  flex-direction: column;
  gap: 20px;
  padding-inline: 20px;
}
.nav a {
  border: none;
  text-decoration: none;
  transition: color 0.5s ease;
  width: 100%;
  padding: 8px;
  border-radius: 5px;
  background-color: inherit;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  gap: 10px;
}
.nav a:hover {
  background: rgba(255, 255, 255, 0.25);
  color: #000;
}
.nav a.router-link-exact-active {
  background: rgba(255, 255, 255, 0.251);
  color: #000;
  outline: none;
}
.menu-btn {
  padding: 5px;
  border-radius: 5px;
  background-color: inherit;
  transition: background-color 0.5s ease;
}
.menu-btn:hover {
  background: rgba(134, 134, 134, 0.25);
}
.open-btn {
  position: absolute;
  left: 0;
  top: 20px;
}
</style>
