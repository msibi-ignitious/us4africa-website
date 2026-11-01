<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

import SiteNavbar from "./components/SiteNavbar.vue";
import AppFooter from "./components/AppFooter.vue";
import BackToTop from "./components/BackToTop.vue";

const route = useRoute();

const isAdminRoute = computed(() => route.path.startsWith("/admin"));
</script>

<template>
  <SiteNavbar v-if="!isAdminRoute" />

  <RouterView />

  <AppFooter v-if="!isAdminRoute" />
  <BackToTop v-if="!isAdminRoute" />
</template>

<style scoped>
#app {
  font-family: Roboto, Helvetica, G, sans-serif;
}
</style>