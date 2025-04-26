<script lang="ts" setup></script>

<template>
  <header class="header">
    <nav class="nav">
      <RouterLink to="/">Weather</RouterLink>
      <RouterLink to="gallery">Gallery</RouterLink>
      <RouterLink to="music">Music</RouterLink>
    </nav>
  </header>
</template>
<style>
.header {
  display: flex;
  width: 100%;
  height: 80px;
  justify-content: center;
}
.nav {
  max-width: 1440px;
  display: flex;
  gap: 10px;
  font-size: 20px;
  font-weight: 600;
}
.nav a {
  color: rgb(97, 97, 97);
  border: none;
  text-decoration: none;
  transition: color 0.5s ease;
}
.nav a.router-link-exact-active {
  color: black;
  text-decoration: underline;
  text-underline-offset: 10px;
}
</style>
