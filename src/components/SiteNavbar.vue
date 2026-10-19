<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBCollapse,
  MDBBtn,
} from "mdb-vue-ui-kit";

const collapse = ref(false);
const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

const closeMenu = () => {
  collapse.value = false;
};

onMounted(() => {
  handleScroll();
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <MDBNavbar
    expand="lg"
    light
    fixed="top"
    class="site-navbar"
    :class="{ 'navbar-scrolled': isScrolled }"
  >
    <MDBContainer fluid class="navbar-container">

      <!-- Logo -->
      <MDBNavbarBrand
        tag="router-link"
        to="/"
        class="navbar-logo"
        @click="closeMenu"
      >
        <img
          src="/us4africa-logo.png"
          alt="US4Africa"
          class="navbar-logo-image"
        />
      </MDBNavbarBrand>

      <!-- Mobile toggle -->
      <MDBNavbarToggler
        @click="collapse = !collapse"
        aria-controls="navbar-menu"
        aria-label="Toggle navigation"
      />

      <!-- Navigation -->
      <MDBCollapse
        id="navbar-menu"
        v-model="collapse"
        navbar
      >
        <MDBNavbarNav right class="site-navbar-nav">

          <MDBNavbarItem>
            <RouterLink
              to="/"
              class="nav-link"
              @click="closeMenu"
            >
              Home
            </RouterLink>
          </MDBNavbarItem>

          <MDBNavbarItem>
            <RouterLink
              to="/about"
              class="nav-link"
              @click="closeMenu"
            >
              About Us
            </RouterLink>
          </MDBNavbarItem>

          <MDBNavbarItem>
            <RouterLink
              to="/programs"
              class="nav-link"
              @click="closeMenu"
            >
              Our Works
            </RouterLink>
          </MDBNavbarItem>

          <MDBNavbarItem>
            <RouterLink
              to="/get-involved"
              class="nav-link"
              @click="closeMenu"
            >
              Get Involved
            </RouterLink>
          </MDBNavbarItem>

          <MDBNavbarItem>
            <RouterLink
              to="/contact"
              class="nav-link"
              @click="closeMenu"
            >
              Contact Us
            </RouterLink>
          </MDBNavbarItem>

          <!-- Donate -->
          <MDBNavbarItem class="donate-item">
            <MDBBtn
              tag="router-link"
              to="/donate"
              color="primary"
              class="donate-button"
              @click="closeMenu"
            >
              Donate Now
            </MDBBtn>
          </MDBNavbarItem>

        </MDBNavbarNav>
      </MDBCollapse>

    </MDBContainer>
  </MDBNavbar>
</template>

<style scoped>

/* ==========================================
   NAVBAR BASE
========================================== */

.site-navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  z-index: 1050;

  padding: 0.8rem 0;

  background: transparent;

  box-shadow: none;

  transition:
    background-color 0.3s ease,
    box-shadow 0.3s ease,
    padding 0.3s ease;
}

/* ==========================================
   NAVIGATION
========================================== */

.site-navbar :deep(.navbar-collapse) {
  flex-grow: 1;
}

.site-navbar-nav {
  margin-left: auto !important;

  display: flex !important;
  align-items: center;

  justify-content: flex-end;

  gap: 0.25rem;
}

.nav-link {
  position: relative;

  padding: 0.7rem 0.9rem !important;

  color: white !important;

  font-size: 0.95rem;
  font-weight: 600;

  transition: color 0.25s ease;
}

/* ==========================================
   CONTAINER
========================================== */

.navbar-container {
  padding-left: 2rem;
  padding-right: 2rem;
}


/* ==========================================
   LOGO
========================================== */

.navbar-logo {
  display: flex;
  align-items: center;

  margin-right: 2rem;
}

.navbar-logo-image {
  display: block;

  width: auto;
  height: 58px;

  object-fit: contain;
}


/* ==========================================
   NAVIGATION
========================================== */

.navbar-nav {
  gap: 0.25rem;
}

.nav-link {
  position: relative;

  padding: 0.7rem 0.9rem !important;

  color: white !important;

  font-size: 0.95rem;
  font-weight: 600;

  transition: color 0.25s ease;
}


/* Underline hover effect */

.nav-link::after {
  content: "";

  position: absolute;

  left: 0.9rem;
  right: 0.9rem;
  bottom: 0.35rem;

  height: 2px;

  background: currentColor;

  transform: scaleX(0);
  transform-origin: center;

  transition: transform 0.25s ease;
}

.nav-link:hover::after,
.nav-link.router-link-active::after {
  transform: scaleX(1);
}


/* ==========================================
   DONATE BUTTON
========================================== */

.donate-item {
  margin-left: 0.5rem;
}

.donate-button {
  border-radius: 50px;

  padding: 0.7rem 1.4rem;

  font-weight: 700;

  white-space: nowrap;
}


/* ==========================================
   SCROLLED NAVBAR
========================================== */

.site-navbar.navbar-scrolled {
  padding: 0.45rem 0;

  background: rgba(20, 30, 40, 0.97);

  box-shadow:
    0 4px 20px rgba(0, 0, 0, 0.12);
}

.site-navbar.navbar-scrolled .navbar-logo-image {
  height: 52px;
}


/* ==========================================
   MOBILE
========================================== */

@media (max-width: 991.98px) {

  .navbar-container {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .navbar-logo-image {
    height: 50px;
  }

  .site-navbar {
    padding: 0.65rem 0;
  }

  /*
   * Mobile menu gets its own background.
   * This prevents white text from disappearing
   * when the menu is opened.
   */

  .site-navbar-nav {
    margin-left: 0 !important;

    display: flex !important;
    align-items: stretch !important;
    justify-content: flex-start;
  }

  .site-navbar :deep(.navbar-collapse) {
    margin-top: 0.75rem;

    padding: 1rem;

    border-radius: 12px;

    background: rgba(20, 30, 40, 0.98);
  }

  .navbar-nav {
    align-items: stretch !important;
    gap: 0;
  }

  .nav-link {
    padding: 0.85rem 0.5rem !important;
  }

  .nav-link::after {
    display: none;
  }

  .donate-item {
    margin: 0.75rem 0 0;
  }

  .donate-button {
    width: 100%;
  }
}


/* ==========================================
   SMALL MOBILE
========================================== */

@media (max-width: 575.98px) {

  .navbar-logo-image {
    height: 45px;
  }

  .navbar-container {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }
}

</style>