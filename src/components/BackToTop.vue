
<script setup>
  import { onMounted, onUnmounted, ref } from 'vue'

  const isVisible = ref(false)

  function handleScroll() {
  isVisible.value = window.scrollY > 300
  }

  function backToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
  }

  onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })
  })

  onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  })
</script>

<template>
  <Transition name="back-to-top">
    <button
      v-if="isVisible"
      type="button"
      class="back-to-top"
      aria-label="Back to top"
      title="Back to top"
      @click="backToTop"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path d="m18 15-6-6-6 6" />
      </svg>
    </button>
  </Transition>
</template>

<style scoped>
.back-to-top {
  position: fixed;
  right: 26px;
  bottom: 26px;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  padding: 0;
  border: 2px solid #c69a4335;
  border-radius: 50%;
  background: #102140;
  color: #ffffff;
  box-shadow: 0 5px 18px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition:
    background 0.25s ease,
    color 0.25s ease,
    transform 0.25s ease;
}

.back-to-top:hover {
  background: #fffbfb;
  color: #102140;
  transform: translateY(-4px);
}

.back-to-top:focus-visible {
  outline: 3px solid #c0902f00;
  outline-offset: 4px;
}

.back-to-top-enter-active,
.back-to-top-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.back-to-top-enter-from,
.back-to-top-leave-to {
  opacity: 0;
  transform: translateY(12px);
}

@media (max-width: 600px) {
  .back-to-top {
    right: 16px;
    bottom: 18px;
    width: 46px;
    height: 46px;
  }
}
</style>
