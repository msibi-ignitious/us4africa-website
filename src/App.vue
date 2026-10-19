<script setup lang="ts">
import SiteNavbar from "./components/SiteNavbar.vue";
import AppFooter from "./components/AppFooter.vue";
import BackToTop from "./components/BackToTop.vue";
</script>

<template>
  <SiteNavbar />

  <RouterView />

  <AppFooter />
<BackToTop />
</template>

<style scoped>
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
}
</style>
