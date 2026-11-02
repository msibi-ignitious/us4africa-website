
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

              <div class="social-links" aria-label="Social media">
                <!-- Replace # with your official profile URLs -->
                <a
                  href="#"
                  aria-label="Facebook"
                  class="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MDBIcon icon="facebook-f" />
                </a>

                <a
                  href="#"
                  aria-label="Instagram"
                  class="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MDBIcon icon="instagram" />
                </a>

                <a
                  href="#"
                  aria-label="YouTube"
                  class="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MDBIcon icon="youtube" />
                </a>

                <a
                  href="#"
                  aria-label="LinkedIn"
                  class="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MDBIcon icon="linkedin-in" />
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
                <RouterLink to="/contact">Support Our Mission</RouterLink>
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
                <MDBIcon icon="arrow-right" class="ms-2" />
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
  gap: 11px;
}

.social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 41px;
  height: 41px;

  color: #54208c;
  background: #f5f0fa;
  border: 1px solid #e7dcef;
  border-radius: 50%;

  text-decoration: none;
  transition:
    color 0.25s ease,
    background-color 0.25s ease,
    border-color 0.25s ease,
    transform 0.25s ease;
}

.social-link:hover {
  color: #ffffff;
  background: #54208c;
  border-color: #54208c;
  transform: translateY(-3px);
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
