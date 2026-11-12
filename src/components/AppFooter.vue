
<script setup lang="ts">
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from "mdb-vue-ui-kit";

const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="site-footer">
    <!-- Main Footer -->
    <div class="footer-main">
      <MDBContainer>
        <MDBRow class="g-5">
          <!-- Brand -->
          <MDBCol lg="4" md="6">
            <div class="footer-brand">
              <RouterLink to="/" class="brand-link" aria-label="US4Africa Home">
                <img
                  src="/src/assets/us4africa-logo.png"
                  alt="US4Africa"
                  class="footer-logo"
                />
              </RouterLink>

              <p class="footer-description">
                Empowering African ministries through support and service.
                We connect people, resources and communities to create
                lasting transformation across Africa.
              </p>

              
<div class="social-links" aria-label="Follow US4Africa on social media">
  <!-- Facebook -->
  <a
    href="YOUR_FACEBOOK_URL"
    aria-label="Facebook"
    class="social-link"
    target="_blank"
    rel="noopener noreferrer"
  >
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M13.5 21v-8.2h2.8l.4-3.2h-3.2V7.5c0-.9.3-1.5 1.6-1.5h1.7V3.1c-.8-.1-1.7-.2-2.5-.2-2.5 0-4.2 1.5-4.2 4.3v2.4H7.3v3.2h2.8V21z"
      />
    </svg>
  </a>

  <!-- Instagram -->
  <a
    href="YOUR_INSTAGRAM_URL"
    aria-label="Instagram"
    class="social-link"
    target="_blank"
    rel="noopener noreferrer"
  >
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      />
      <circle
        cx="12"
        cy="12"
        r="4"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
    </svg>
  </a>

  <!-- YouTube -->
  <a
    href="YOUR_YOUTUBE_URL"
    aria-label="YouTube"
    class="social-link"
    target="_blank"
    rel="noopener noreferrer"
  >
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6z"
      />
    </svg>
  </a>

  <!-- LinkedIn -->
  <a
    href="YOUR_LINKEDIN_URL"
    aria-label="LinkedIn"
    class="social-link"
    target="_blank"
    rel="noopener noreferrer"
  >
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M5.2 3a2.2 2.2 0 1 0 0 4.4 2.2 2.2 0 0 0 0-4.4ZM3.3 9h3.8v12H3.3zm6.2 0h3.6v1.6h.1A4 4 0 0 1 16.8 8c3.9 0 4.6 2.5 4.6 5.7V21h-3.8v-6.5c0-1.5 0-3.4-2.1-3.4s-2.4 1.6-2.4 3.3V21H9.5z"
      />
    </svg>
  </a>
</div>

            </div>
          </MDBCol>

          <!-- Explore -->
          <MDBCol lg="2" md="6" sm="6">
            <h5 class="footer-heading">Explore</h5>

            <ul class="footer-links">
              <li>
                <RouterLink to="/">Home</RouterLink>
              </li>
              <li>
                <RouterLink to="/about">About Us</RouterLink>
              </li>
              <li>
                <RouterLink to="/programs">Our Works</RouterLink>
              </li>
              <li>
                <RouterLink to="/get-involved">Get Involved</RouterLink>
              </li>
              <li>
                <RouterLink to="/contact">Contact Us</RouterLink>
              </li>
            </ul>
          </MDBCol>

          <!-- Get Involved -->
          <MDBCol lg="3" md="6" sm="6">
            <h5 class="footer-heading">Make a Difference</h5>

            <ul class="footer-links">
              <li>
                <RouterLink to="/donate">Make a Donation</RouterLink>
              </li>
              <li>
                <RouterLink to="/get-involved">Volunteer With Us</RouterLink>
              </li>
              <li>
                <RouterLink to="/get-involved">Partner With Us</RouterLink>
              </li>
              <li>
                <RouterLink to="/programs">Explore Our Works</RouterLink>
              </li>
              <li>
                <RouterLink to="/get-involved">Support Our Mission</RouterLink>
              </li>
            </ul>
          </MDBCol>

          <!-- Contact -->
          <MDBCol lg="3" md="6">
            <h5 class="footer-heading">Connect With Us</h5>

            <div class="contact-item">
              <MDBIcon icon="envelope" />
              <a href="mailto:Admin@us4africa.org">
                Admin@us4africa.org
              </a>
            </div>

            <div class="contact-item">
              <MDBIcon icon="phone" />
              <a href="tel:+27737822117">+27 73 782 2117</a>
            </div>

            <div class="contact-item">
              <MDBIcon icon="globe" />
              <span>Serving communities across Africa</span>
            </div>

            <RouterLink to="/donate" class="footer-cta-link">
              <MDBBtn class="footer-donate">
                Give Today
              </MDBBtn>
            </RouterLink>

            <p class="footer-cta-note">
              Your generosity helps support lasting change.
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>

    <!-- Bottom Bar -->
    <div class="footer-bottom">
      <MDBContainer>
        <MDBRow class="align-items-center gy-3">
          <MDBCol md="6">
            <p class="copyright">
              © {{ currentYear }} US4Africa. All rights reserved.
            </p>
          </MDBCol>

          <MDBCol md="6">
            <div class="legal-links">
              <RouterLink to="/privacy-policy">
                Privacy Policy
              </RouterLink>

              <RouterLink to="/terms">
                Terms of Use
              </RouterLink>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  </footer>
</template>

<style scoped>
/* FOOTER */
.site-footer {
  background: #ffffff;
  color: #30243a;
  border-top: 4px solid #54208c;
}

/* MAIN SECTION */
.footer-main {
  padding: 76px 0 64px;
}

/* BRAND */
.footer-brand {
  max-width: 360px;
}

.brand-link {
  display: inline-block;
  margin-bottom: 20px;
}

.footer-logo {
  display: block;
  width: 175px;
  max-width: 100%;
  height: auto;
  object-fit: contain;
}

.footer-description {
  margin: 0 0 25px;
  color: #655d6b;
  font-size: 0.95rem;
  line-height: 1.85;
}

/* SOCIAL LINKS */

.social-links {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 13px;
  margin-top: 22px;
}

.social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  color: #54208c;
  background: #f5f0fa;
  border: 1px solid #e7dcef;
  border-radius: 50%;
  text-decoration: none;
  transition: all 0.25s ease;
}

.social-link svg {
  display: block;
  width: 19px;
  height: 19px;
}

.social-link:hover {
  color: #ffffff;
  background: #c6283d;
  border-color: #c6283d;
  transform: translateY(-4px);
  box-shadow: 0 5px 14px rgba(198, 40, 61, 0.2);
}

.social-link:focus-visible {
  outline: 3px solid #54208c;
  outline-offset: 4px;
}

/* HEADINGS */
.footer-heading {
  position: relative;
  margin: 0 0 24px;
  padding-bottom: 12px;

  color: #54208c;
  font-size: 1.02rem;
  font-weight: 750;
}

.footer-heading::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 36px;
  height: 3px;
  background: #c6283d;
  border-radius: 3px;
}

/* NAVIGATION LINKS */
.footer-links {
  margin: 0;
  padding: 0;
  list-style: none;
}

.footer-links li {
  margin-bottom: 13px;
}

.footer-links a {
  color: #655d6b;
  font-size: 0.93rem;
  line-height: 1.6;
  text-decoration: none;

  transition:
    color 0.2s ease,
    padding-left 0.2s ease;
}

.footer-links a:hover {
  color: #c6283d;
  padding-left: 4px;
}

/* CONTACT */
.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 17px;

  color: #655d6b;
  font-size: 0.92rem;
  line-height: 1.7;
  overflow-wrap: anywhere;
}

.contact-item :deep(svg),
.contact-item :deep(i) {
  flex-shrink: 0;
  margin-top: 5px;
  color: #c6283d;
}

.contact-item a {
  color: #655d6b;
  text-decoration: none;
  transition: color 0.2s ease;
}

.contact-item a:hover {
  color: #54208c;
}

/* DONATION CTA */
.footer-cta-link {
  display: inline-block;
  margin-top: 9px;
  text-decoration: none;
}

.footer-donate {
  padding: 12px 22px !important;
  border: 2px solid #c6283d !important;
  border-radius: 50px !important;

  color: #ffffff !important;
  background: #c6283d !important;

  font-size: 0.9rem;
  font-weight: 700;
  text-transform: none;
  box-shadow: none !important;

  transition:
    background-color 0.25s ease,
    border-color 0.25s ease,
    transform 0.25s ease;
}

.footer-donate:hover {
  color: #ffffff !important;
  background: #54208c !important;
  border-color: #54208c !important;
  transform: translateY(-2px);
}

.footer-cta-note {
  margin: 12px 0 0;
  color: #817887;
  font-size: 0.82rem;
  line-height: 1.6;
}

/* BOTTOM BAR */
.footer-bottom {
  padding: 21px 0;
  background: #f8f5fb;
  border-top: 1px solid #eee6f3;
}

.copyright {
  margin: 0;
  color: #716778;
  font-size: 0.83rem;
  line-height: 1.7;
}

.legal-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 24px;
}

.legal-links a {
  color: #716778;
  font-size: 0.83rem;
  text-decoration: none;
  transition: color 0.2s ease;
}

.legal-links a:hover {
  color: #c6283d;
}

/* TABLET */
@media (max-width: 991.98px) {
  .footer-main {
    padding: 60px 0 48px;
  }

  .footer-brand {
    max-width: 420px;
  }
}

/* MOBILE */
@media (max-width: 767.98px) {
  .footer-main {
    padding: 48px 0 38px;
  }

  .footer-brand {
    max-width: none;
  }

  .footer-heading {
    margin-bottom: 18px;
  }

  .footer-bottom {
    text-align: center;
  }

  .legal-links {
    justify-content: center;
    gap: 18px;
  }
}

@media (max-width: 575.98px) {
  .footer-logo {
    width: 155px;
  }

  .footer-main {
    padding-top: 40px;
  }

  .social-link {
    width: 39px;
    height: 39px;
  }

  .legal-links {
    gap: 16px;
  }
}
</style>
