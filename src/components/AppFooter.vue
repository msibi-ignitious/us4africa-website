<template>
  <footer class="site-footer">

    <!-- Main Footer -->
    <div class="footer-main">
      <MDBContainer>
        <MDBRow class="g-5">

          <!-- Brand -->
          <MDBCol lg="4" md="6">
            <div class="footer-brand">

              <!-- Replace with your actual logo -->
              <img
                src="/us4africa-logo.png"
                alt="US4Africa"
                class="footer-logo"
              />

              <p class="footer-description">
                Connecting people, resources, and ministries to create
                lasting transformation across Africa.
              </p>

              <div class="social-links">
                <a
                  href="#"
                  aria-label="Facebook"
                  class="social-link"
                >
                  <MDBIcon icon="facebook-f" />
                </a>

                <a
                  href="#"
                  aria-label="Instagram"
                  class="social-link"
                >
                  <MDBIcon icon="instagram" />
                </a>

                <a
                  href="#"
                  aria-label="YouTube"
                  class="social-link"
                >
                  <MDBIcon icon="youtube" />
                </a>

                <a
                  href="#"
                  aria-label="LinkedIn"
                  class="social-link"
                >
                  <MDBIcon icon="linkedin-in" />
                </a>
              </div>

            </div>
          </MDBCol>

          <!-- Quick Links -->
          <MDBCol lg="2" md="6">
            <h5 class="footer-heading">
              Quick Links
            </h5>

            <ul class="footer-links">
              <li>
                <a href="/">Home</a>
              </li>

              <li>
                <a href="/about">About Us</a>
              </li>

              <li>
                <a href="/programs">Programs</a>
              </li>

              <li>
                <a href="/get-involved">Get Involved</a>
              </li>

              <li>
                <a href="/contact">Contact Us</a>
              </li>
            </ul>
          </MDBCol>

          <!-- Get Involved -->
          <MDBCol lg="3" md="6">
            <router-link to="/get-involved">
              <h5 class="footer-heading">
                Get Involved
              </h5>
            </router-link>
            <ul class="footer-links">
              <li>
                <router-link to="/donate">
                  Donate
                </router-link>
              </li>

              <li>
                <router-link to="/get-involved">
                  Volunteer
                </router-link>
              </li>

              <li>
                <router-link to="/get-involved">
                  Partner With Us
                </router-link>
              </li>

              <li>
                <router-link to="/contact">
                  Support Our Mission
                </router-link>
              </li>
            </ul>
          </MDBCol>

          <!-- Contact -->
          <MDBCol lg="3" md="6">
            <h5 class="footer-heading">
              Connect With Us
            </h5>

            <div class="contact-item">
              <MDBIcon icon="envelope" />
              <a href="mailto:info@us4africa.org">
                info@us4africa.org
              </a>
            </div>

            <div class="contact-item">
              <MDBIcon icon="globe" />
              <span>
                Serving communities across Africa
              </span>
            </div>

            <router-link to="/donate">
              <MDBBtn
                color="primary"
                size="lg"
                class="footer-donate"
                href="/donate"
              >
                Donate Now
              </MDBBtn>
            </router-link>
          </MDBCol>

        </MDBRow>
      </MDBContainer>
    </div>

    <!-- Bottom Bar -->
    <div class="footer-bottom">
      <MDBContainer>
        <MDBRow class="align-items-center">

          <MDBCol md="6">
            <p class="copyright">
              © {{ currentYear }} US4Africa. All rights reserved.
            </p>
          </MDBCol>

          <MDBCol md="6">
            <div class="legal-links">
              <a href="/privacy-policy">
                Privacy Policy
              </a>

              <a href="/terms">
                Terms of Use
              </a>
            </div>
          </MDBCol>

        </MDBRow>
      </MDBContainer>
    </div>

  </footer>
</template>

<script setup>
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon
} from 'mdb-vue-ui-kit'
import router from '../router';

const currentYear = new Date().getFullYear()
</script>

<style scoped>
/* =========================================
   FOOTER
========================================= */

.site-footer {
  background-color: #111d33;
  color: #ffffff;
}

/* =========================================
   MAIN FOOTER
========================================= */

.footer-main {
  padding: 80px 0 70px;
}

/* =========================================
   BRAND
========================================= */

.footer-brand {
  max-width: 360px;
}

.footer-logo {
  width: 170px;
  height: auto;
  margin-bottom: 24px;
}

.footer-description {
  margin-bottom: 28px;

  font-size: 0.98rem;
  line-height: 1.8;

  color: rgba(255, 255, 255, 0.72);
}

/* =========================================
   SOCIAL LINKS
========================================= */

.social-links {
  display: flex;
  gap: 12px;
}

.social-link {
  width: 40px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;

  color: #ffffff;

  text-decoration: none;

  transition:
    background-color 0.25s ease,
    border-color 0.25s ease,
    transform 0.25s ease;
}

.social-link:hover {
  background-color: #b58a3a;
  border-color: #b58a3a;
  color: #ffffff;

  transform: translateY(-3px);
}

/* =========================================
   HEADINGS
========================================= */

.footer-heading {
  margin-bottom: 25px;

  font-size: 1.05rem;
  font-weight: 700;

  color: #ffffff;
}

/* =========================================
   LINKS
========================================= */

.footer-links {
  margin: 0;
  padding: 0;

  list-style: none;
}

.footer-links li {
  margin-bottom: 13px;
}

.footer-links a {
  color: rgba(255, 255, 255, 0.7);

  text-decoration: none;

  font-size: 0.95rem;

  transition:
    color 0.2s ease,
    padding-left 0.2s ease;
}

.footer-links a:hover {
  color: #d4a84f;
  padding-left: 4px;
}

/* =========================================
   CONTACT
========================================= */

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;

  margin-bottom: 18px;

  color: rgba(255, 255, 255, 0.72);

  font-size: 0.95rem;
  line-height: 1.6;
}

.contact-item .fa {
  margin-top: 4px;
  color: #d4a84f;
}

.contact-item a {
  color: rgba(255, 255, 255, 0.72);
  text-decoration: none;

  transition: color 0.2s ease;
}

.contact-item a:hover {
  color: #d4a84f;
}

/* =========================================
   DONATE BUTTON
========================================= */

.footer-donate {
  margin-top: 15px;

  border-radius: 8px;

  padding: 12px 25px;

  font-weight: 600;
}

/* =========================================
   BOTTOM BAR
========================================= */

.footer-bottom {
  padding: 22px 0;

  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.copyright {
  margin: 0;

  font-size: 0.85rem;

  color: rgba(255, 255, 255, 0.55);
}

.legal-links {
  display: flex;
  justify-content: flex-end;
  gap: 25px;
}

.legal-links a {
  font-size: 0.85rem;

  color: rgba(255, 255, 255, 0.55);

  text-decoration: none;

  transition: color 0.2s ease;
}

.legal-links a:hover {
  color: #d4a84f;
}

/* =========================================
   TABLET
========================================= */

@media (max-width: 991px) {
  .footer-main {
    padding: 65px 0 55px;
  }
}

/* =========================================
   MOBILE
========================================= */

@media (max-width: 767px) {
  .footer-main {
    padding: 55px 0 45px;
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
    margin-top: 12px;
    gap: 18px;
  }
}
</style>