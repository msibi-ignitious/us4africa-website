<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { loginAdmin } from "../../services/auth";

const router = useRouter();

const email = ref("");
const password = ref("");
const loading = ref(false);
const errorMessage = ref("");
const showPassword = ref(false);

async function handleLogin() {
  errorMessage.value = "";

  if (!email.value.trim() || !password.value) {
    errorMessage.value = "Please enter your email and password.";
    return;
  }

  loading.value = true;

  try {
    const result = await loginAdmin(
      email.value.trim(),
      password.value
    );

    // Store the token for authenticated API requests.
    sessionStorage.setItem("us4africa_admin_token", result.token);

    sessionStorage.setItem(
      "us4africa_admin",
      JSON.stringify(result.admin)
    );

    await router.push("/admin/dashboard");
  } catch (error) {
    errorMessage.value =
      error instanceof Error
        ? error.message
        : "Unable to sign in. Please try again.";
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <main class="admin-login">
    <section class="login-brand-panel">
      <div class="brand-content">
        <div class="admin-brand">
          <img src="/us4africa-logo.png" alt="US4Africa logo" />
          <span>US4Africa Admin</span>
        </div>
        <p class="brand-tagline">
          Empowering African Ministries<br />
          Through Support and Service
        </p>

        <div class="brand-divider"></div>

        <p class="brand-caption">
          Administration Portal
        </p>
      </div>

      <div class="brand-decoration decoration-one"></div>
      <div class="brand-decoration decoration-two"></div>
    </section>

    <section class="login-form-panel">
      <div class="login-card">
        <div class="mobile-brand">
          <div class="brand-mark">US</div>
          <span>US4Africa</span>
        </div>

        <div class="login-heading">
          <span class="eyebrow">ADMINISTRATION</span>

          <h2>Welcome back</h2>

          <p>
            Sign in to manage donors, donations and organisational impact.
          </p>
        </div>

        <form @submit.prevent="handleLogin">
          <div class="form-field">
            <label for="admin-email">Email address</label>

            <input
              id="admin-email"
              v-model="email"
              type="email"
              autocomplete="username"
              placeholder="Enter your administrator email"
              required
              :disabled="loading"
            />
          </div>

          <div class="form-field">
            <label for="admin-password">Password</label>

            <div class="password-wrapper">
              <input
                id="admin-password"
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                autocomplete="current-password"
                placeholder="Enter your password"
                required
                :disabled="loading"
              />

              <button
                class="password-toggle"
                type="button"
                @click="showPassword = !showPassword"
                :aria-label="showPassword ? 'Hide password' : 'Show password'"
              >
                {{ showPassword ? "Hide" : "Show" }}
              </button>
            </div>
          </div>

          <div v-if="errorMessage" class="login-error" role="alert">
            {{ errorMessage }}
          </div>

          <button
            class="login-button"
            type="submit"
            :disabled="loading"
          >
            <span v-if="loading" class="button-spinner"></span>

            {{
              loading
                ? "Signing in..."
                : "Sign in to dashboard"
            }}
          </button>
        </form>

        <div class="secure-note">
          <span class="secure-icon">◆</span>
          Secure administrator access
        </div>

        <div class="login-footer">
          <span>© {{ new Date().getFullYear() }} US4Africa</span>
          <span>Administration Portal</span>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.admin-login {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  background: #ffffff;
  color: #242033;
  font-family: "Roboto", "Helvetica Neue", Arial, sans-serif;
}

.login-brand-panel {
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem;
  color: #ffffff;
  background:
    radial-gradient(
      circle at 20% 20%,
      rgba(255, 255, 255, 0.12),
      transparent 35%
    ),
    linear-gradient(145deg, #542080 0%, #351052 100%);
}

.admin-brand {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
}

.admin-brand img {
  display: block;
  width: 54px;
  height: 54px;
  object-fit: contain;
}

.admin-brand span {
  color: #4e2b79;
  font-size: 1.05rem;
  font-weight: 700;
}

.brand-content {
  position: relative;
  z-index: 1;
  max-width: 420px;
  text-align: center;
}

.brand-mark {
  width: 76px;
  height: 76px;
  display: grid;
  place-items: center;
  margin: 0 auto 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.45);
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.12);
  font-size: 1.5rem;
  font-weight: 800;
  letter-spacing: -0.08em;
}

.brand-content h1 {
  margin: 0;
  font-size: clamp(2.5rem, 4vw, 4rem);
  font-weight: 800;
  letter-spacing: -0.055em;
}

.brand-tagline {
  margin-top: 1.5rem;
  color: rgba(255, 255, 255, 0.82);
  font-size: 1.05rem;
  line-height: 1.8;
}

.brand-divider {
  width: 52px;
  height: 4px;
  margin: 2rem auto;
  border-radius: 4px;
  background: #d62839;
}

.brand-caption {
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
}

.brand-decoration {
  position: absolute;
  border: 1px solid rgba(255, 255, 255, 0.09);
  border-radius: 50%;
}

.decoration-one {
  width: 460px;
  height: 460px;
  top: -180px;
  left: -180px;
}

.decoration-two {
  width: 600px;
  height: 600px;
  right: -340px;
  bottom: -260px;
}

.login-form-panel {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem;
}

.login-card {
  width: 100%;
  max-width: 440px;
}

.mobile-brand {
  display: none;
}

.login-heading {
  margin-bottom: 2.5rem;
}

.eyebrow {
  color: #d62839;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.17em;
}

.login-heading h2 {
  margin: 0.8rem 0;
  color: #2b183a;
  font-size: clamp(2rem, 3vw, 2.65rem);
  font-weight: 800;
  letter-spacing: -0.055em;
}

.login-heading p {
  max-width: 360px;
  margin: 0;
  color: #77717f;
  font-size: 0.95rem;
  line-height: 1.7;
}

.form-field {
  margin-bottom: 1.4rem;
}

.form-field label {
  display: block;
  margin-bottom: 0.6rem;
  color: #33283e;
  font-size: 0.84rem;
  font-weight: 700;
}

.form-field input {
  width: 100%;
  min-height: 54px;
  padding: 0.9rem 1rem;
  border: 1px solid #e4dfe8;
  border-radius: 10px;
  outline: none;
  background: #ffffff;
  color: #2b183a;
  font-size: 0.9rem;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;
}

.form-field input::placeholder {
  color: #aaa4b0;
}

.form-field input:focus {
  border-color: #7544a1;
  box-shadow: 0 0 0 4px rgba(84, 32, 128, 0.09);
}

.password-wrapper {
  position: relative;
}

.password-wrapper input {
  padding-right: 5rem;
}

.password-toggle {
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);
  border: 0;
  background: transparent;
  color: #542080;
  font-size: 0.8rem;
  font-weight: 700;
  cursor: pointer;
}

.login-error {
  margin: 1rem 0;
  padding: 0.85rem 1rem;
  border: 1px solid #f3c5ca;
  border-radius: 9px;
  background: #fff3f4;
  color: #a51d2b;
  font-size: 0.85rem;
  line-height: 1.5;
}

.login-button {
  width: 100%;
  min-height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;
  margin-top: 1.8rem;
  border: 0;
  border-radius: 10px;
  background: linear-gradient(100deg, #542080, #7135a2);
  color: #ffffff;
  font-size: 0.9rem;
  font-weight: 800;
  cursor: pointer;
  box-shadow: 0 8px 22px rgba(84, 32, 128, 0.18);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.login-button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 12px 26px rgba(84, 32, 128, 0.24);
}

.login-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.button-spinner {
  width: 17px;
  height: 17px;
  border: 2px solid rgba(255, 255, 255, 0.4);
  border-top-color: #ffffff;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
}

.secure-note {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.55rem;
  margin-top: 2rem;
  color: #8d8794;
  font-size: 0.78rem;
}

.secure-icon {
  color: #542080;
  font-size: 0.7rem;
}

.login-footer {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 3rem;
  padding-top: 1.4rem;
  border-top: 1px solid #eeeaf1;
  color: #a09aa7;
  font-size: 0.72rem;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@media (max-width: 900px) {
  .admin-login {
    grid-template-columns: 1fr;
  }

  .login-brand-panel {
    display: none;
  }

  .login-form-panel {
    min-height: 100vh;
    padding: 2rem 1.25rem;
  }

  .mobile-brand {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    margin-bottom: 3rem;
    color: #542080;
    font-size: 1.3rem;
    font-weight: 800;
  }

  .mobile-brand .brand-mark {
    width: 44px;
    height: 44px;
    margin: 0;
    border-color: #e9dff2;
    border-radius: 12px;
    background: #f4edf9;
    color: #542080;
    font-size: 0.95rem;
  }

  .login-heading {
    margin-bottom: 2rem;
  }

  .login-footer {
    margin-top: 2.5rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
</style>