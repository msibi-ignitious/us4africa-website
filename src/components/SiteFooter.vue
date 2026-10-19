<script setup lang="ts">
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-vue-ui-kit";
</script>

<template>
  <MDBFooter class="site-footer">
    <!-- Main Footer -->
    <MDBContainer class="footer-container">
      <MDBRow class="gy-5">
        <!-- About US4Africa -->
        <MDBCol lg="4" md="6">
          <div class="footer-brand">
            <a href="/" class="footer-logo-link">
              <img
                src="/us4africa-logo.png"
                alt="US4Africa"
                class="footer-logo"
              />
            </a>

            <p class="footer-description">
              US4Africa exists to empower communities and ministries across
              Africa through faith, resources, leadership development, and
              meaningful partnerships.
            </p>

            <div class="social-links">
              <a
                href="#"
                class="social-link"
                aria-label="Facebook"
              >
                <MDBIcon icon="facebook-f" />
              </a>

              <a
                href="#"
                class="social-link"
                aria-label="Instagram"
              >
                <MDBIcon icon="instagram" />
              </a>

              <a
                href="#"
                class="social-link"
                aria-label="YouTube"
              >
                <MDBIcon icon="youtube" />
              </a>

              <a
                href="#"
                class="social-link"
                aria-label="LinkedIn"
              >
                <MDBIcon icon="linkedin-in" />
              </a>
            </div>
          </div>
        </MDBCol>

        <!-- Quick Links -->
        <MDBCol lg="2" md="6">
          <h5 class="footer-heading">Quick Links</h5>

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

        <!-- Our Work -->
        <MDBCol lg="3" md="6">
          <h5 class="footer-heading">Our Work</h5>

          <ul class="footer-links">
            <li>
              <a href="/programs#children">
                Children Ministry
              </a>
            </li>

            <li>
              <a href="/programs#youth">
                Youth Discipleship
              </a>
            </li>

            <li>
              <a href="/programs#leadership">
                Leadership Development
              </a>
            </li>

            <li>
              <a href="/get-involved">
                Volunteer
              </a>
            </li>

            <li>
              <a href="/donate">
                Support Our Work
              </a>
            </li>
          </ul>
        </MDBCol>

        <!-- Contact -->
        <MDBCol lg="3" md="6">
          <h5 class="footer-heading">Contact Us</h5>

          <ul class="contact-list">
            <li>
              <MDBIcon icon="envelope" class="contact-icon" />
              <a href="mailto:info@us4africa.org">
                info@us4africa.org
              </a>
            </li>

            <li>
              <MDBIcon icon="phone" class="contact-icon" />
              <a href="tel:+10000000000">
                +1 (000) 000-0000
              </a>
            </li>

            <li>
              <MDBIcon icon="map-marker-alt" class="contact-icon" />
              <span>
                United States
              </span>
            </li>
          </ul>

          <a href="/donate" class="footer-donate-btn">
            Donate Now
          </a>
        </MDBCol>
      </MDBRow>
    </MDBContainer>

    <!-- Bottom Bar -->
    <div class="footer-bottom">
      <MDBContainer>
        <MDBRow class="align-items-center">
          <MDBCol md="6">
            <p class="copyright">
              © {{ new Date().getFullYear() }} US4Africa.
              All rights reserved.
            </p>
          </MDBCol>

          <MDBCol md="6">
            <div class="legal-links">
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms & Conditions</a>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  </MDBFooter>
</template>

<style scoped>
.site-footer {
  background-color: #111827;
  color: #ffffff;
}

/* Main footer */

.footer-container {
  padding-top: 70px;
  padding-bottom: 60px;
}

/* Logo */

.footer-logo-link {
  display: inline-block;
  margin-bottom: 20px;
}

.footer-logo {
  width: 170px;
  height: auto;
  display: block;
}

.footer-description {
  max-width: 390px;
  margin-bottom: 25px;

  color: rgba(255, 255, 255, 0.72);
  font-size: 0.95rem;
  line-height: 1.8;
}

/* Headings */

.footer-heading {
  margin-bottom: 25px;

  color: #ffffff;
  font-size: 1.05rem;
  font-weight: 700;
}

/* Links */

.footer-links {
  padding: 0;
  margin: 0;

  list-style: none;
}

.footer-links li {
  margin-bottom: 13px;
}

.footer-links a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: all 0.2s ease;
}

.footer-links a:hover {
  color: #ffffff;
  padding-left: 4px;
}

/* Social media */

.social-links {
  display: flex;
  gap: 10px;
}

.social-link {
  width: 40px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 50%;

  color: #ffffff;
  text-decoration: none;

  transition: all 0.2s ease;
}

.social-link:hover {
  background-color: #ffffff;
  color: #111827;
}

/* Contact */

.contact-list {
  padding: 0;
  margin: 0 0 25px;

  list-style: none;
}

.contact-list li {
  display: flex;
  align-items: flex-start;

  margin-bottom: 17px;

  color: rgba(255, 255, 255, 0.72);
  line-height: 1.5;
}

.contact-list a {
  color: rgba(255, 255, 255, 0.72);
  text-decoration: none;
}

.contact-list a:hover {
  color: #ffffff;
}

.contact-icon {
  width: 22px;
  margin-right: 10px;
  margin-top: 3px;
}

/* Donate button */

.footer-donate-btn {
  display: inline-block;

  padding: 11px 24px;

  border-radius: 5px;

  background-color: #ffffff;
  color: #111827;

  font-weight: 600;
  text-decoration: none;

  transition: all 0.2s ease;
}

.footer-donate-btn:hover {
  transform: translateY(-2px);
}

/* Bottom bar */

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  padding: 20px 0;
}

.copyright {
  margin: 0;

  color: rgba(255, 255, 255, 0.55);
  font-size: 0.85rem;
}

.legal-links {
  display: flex;
  justify-content: flex-end;
  gap: 20px;
}

.legal-links a {
  color: rgba(255, 255, 255, 0.55);
  font-size: 0.85rem;
  text-decoration: none;
}

.legal-links a:hover {
  color: #c82323;
}

/* Mobile */

@media (max-width: 767px) {
  .footer-container {
    padding-top: 55px;
    padding-bottom: 40px;
  }

  .footer-logo {
    width: 150px;
  }

  .footer-heading {
    margin-bottom: 18px;
  }

  .footer-bottom {
    text-align: center;
  }

  .legal-links {
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 10px;
  }
}
</style>