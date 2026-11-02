
<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

function logout() {
  sessionStorage.removeItem("us4africa_admin_token");
  sessionStorage.removeItem("us4africa_admin");
  router.replace("/admin/login");
}
</script>

<template>
  <header class="admin-nav">
    <div class="brand">
      <!-- Use the same logo path as your existing admin pages -->
      <img src="/src/assets/us4africa-logo.png" alt="US4Africa logo" />
      <div>
        <strong>US4Africa</strong>
        <span>Administration Portal</span>
      </div>
    </div>

    <nav class="nav-links">
      <RouterLink to="/admin/dashboard">
        <span>▦</span> Dashboard
      </RouterLink>

      <RouterLink to="/admin/donors">
        <span>♙</span> Donors
      </RouterLink>
      <RouterLink to="/admin/donations">
        <span>♡</span> Donations
      </RouterLink>
    </nav>

    <button class="logout-button" @click="logout">
      Sign out
    </button>
  </header>
</template>

<style scoped>
.admin-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 16px 40px;
  background: white;
  border-bottom: 1px solid #ece8f3;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand img {
  width: 48px;
  height: 48px;
  object-fit: contain;
}

.brand div {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.brand strong {
  color: #4e2b79;
  font-size: 1.05rem;
}

.brand span {
  color: #888;
  font-size: 0.75rem;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 10px;
}

.nav-links a {
  padding: 11px 15px;
  border-radius: 9px;
  color: #625b70;
  text-decoration: none;
  font-weight: 600;
}

.nav-links a.router-link-active {
  background: #f1eafa;
  color: #663399;
}

.logout-button {
  padding: 10px 17px;
  border: 1px solid #ded9e8;
  border-radius: 9px;
  background: white;
  color: #4e2b79;
  font-weight: 600;
  cursor: pointer;
}

@media (max-width: 700px) {
  .admin-nav {
    flex-wrap: wrap;
    padding: 16px;
  }

  .nav-links {
    order: 3;
    width: 100%;
    overflow-x: auto;
  }

  .logout-button {
    margin-left: auto;
  }
}
</style>
