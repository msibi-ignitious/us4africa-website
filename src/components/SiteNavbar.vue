
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
            <RouterLink to="/" class="nav-link" @click="closeMenu">
              Home
            </RouterLink>
          </MDBNavbarItem>

          <MDBNavbarItem>
            <RouterLink to="/about" class="nav-link" @click="closeMenu">
              About Us
            </RouterLink>
          </MDBNavbarItem>

          <MDBNavbarItem>
            <RouterLink to="/programs" class="nav-link" @click="closeMenu">
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
            <RouterLink to="/contact" class="nav-link" @click="closeMenu">
              Contact Us
            </RouterLink>
          </MDBNavbarItem>

          <!-- Donations -->
          <MDBNavbarItem class="donate-item">
            <MDBBtn
              tag="router-link"
              to="/donate"
              class="donate-button"
              @click="closeMenu"
            >
              Give
            </MDBBtn>
          </MDBNavbarItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBContainer>
  </MDBNavbar>
</template>

<style scoped>
.site-navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1050;

  padding: 0.8rem 0;
  background-color: #ffffff !important;
  box-shadow: 0 2px 12px rgba(36, 20, 50, 0.07);

  transition:
    box-shadow 0.3s ease,
    padding 0.3s ease;
}

.navbar-container {
  padding-left: 2rem;
  padding-right: 2rem;
}

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
  display: inline-block;
  padding: 0.7rem 0.9rem !important;

  color: #54208c !important;
  font-size: 0.95rem;
  font-weight: 600;
  text-decoration: none;

  transition: color 0.25s ease;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: #c6283d !important;
}

.nav-link::after {
  content: "";
  position: absolute;
  left: 0.9rem;
  right: 0.9rem;
  bottom: 0.35rem;
  height: 2px;
  background: #c6283d;

  transform: scaleX(0);
  transform-origin: center;
  transition: transform 0.25s ease;
}

.nav-link:hover::after,
.nav-link.router-link-active::after {
  transform: scaleX(1);
}

.donate-item {
  margin-left: 0.5rem;
}

.donate-button {
  border: 2px solid #c6283d !important;
  border-radius: 50px !important;
  padding: 0.65rem 1.5rem !important;

  background-color: #c6283d !important;
  color: #ffffff !important;

  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  white-space: nowrap;

  box-shadow: none !important;
  transition:
    background-color 0.25s ease,
    border-color 0.25s ease,
    transform 0.25s ease;
}

.donate-button:hover {
  background-color: #54208c !important;
  border-color: #54208c !important;
  color: #ffffff !important;
  transform: translateY(-1px);
}

.site-navbar.navbar-scrolled {
  padding: 0.45rem 0;
  background-color: #ffffff !important;
  box-shadow: 0 4px 20px rgba(36, 20, 50, 0.12);
}

.navbar-scrolled .navbar-logo-image {
  height: 52px;
}

/* Mobile navigation */
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

  .site-navbar :deep(.navbar-toggler) {
    border-color: #54208c;
    color: #54208c;
  }

  .site-navbar :deep(.navbar-toggler:focus) {
    box-shadow: 0 0 0 0.15rem rgba(84, 32, 140, 0.2);
  }

  .site-navbar :deep(.navbar-collapse) {
    margin-top: 0.75rem;
    padding: 1rem;
    border: 1px solid #eee7f4;
    border-radius: 12px;
    background-color: #ffffff !important;
    box-shadow: 0 8px 24px rgba(36, 20, 50, 0.08);
  }

  .site-navbar-nav {
    margin-left: 0 !important;
    align-items: stretch !important;
    justify-content: flex-start;
    gap: 0;
  }

  .site-navbar-nav :deep(.nav-item) {
    width: 100%;
  }

  .nav-link {
    display: block;
    padding: 0.85rem 0.5rem !important;
  }

  .nav-link::after {
    display: none;
  }

  .donate-item {
    margin: 0.75rem 0 0;
  }

  .donate-button {
    display: block;
    width: 100%;
  }
}

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
