
<script setup lang="ts">
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-vue-ui-kit";
import { RouterLink } from "vue-router";

const currentYear = new Date().getFullYear();
</script>

<template>
  <MDBFooter class="site-footer">
    <!-- Main Footer -->
    <MDBContainer class="footer-container">
      <MDBRow class="gy-5">
        <!-- Brand and Mission -->
        <MDBCol lg="4" md="6">
          <div class="footer-brand">
            <RouterLink to="/" class="footer-logo-link" aria-label="US4Africa Home">
              <img
                src="/us4africa-logo.png"
                alt="US4Africa"
                class="footer-logo"
              />
            </RouterLink>

            <p class="footer-description">
              US4Africa is a dedicated charitable organisation empowering
              African ministries and communities through support, service,
              leadership development, and meaningful partnerships.
            </p>

            <h6 class="social-heading">Connect with us</h6>

            <div class="social-links">
              <!-- Replace # with your official social media URLs -->
              <a href="#" class="social-link" aria-label="Facebook">
                <MDBIcon icon="facebook-f" />
              </a>

              <a href="#" class="social-link" aria-label="Instagram">
                <MDBIcon icon="instagram" />
              </a>

              <a href="#" class="social-link" aria-label="YouTube">
                <MDBIcon icon="youtube" />
              </a>

              <a href="#" class="social-link" aria-label="LinkedIn">
                <MDBIcon icon="linkedin-in" />
              </a>
            </div>
          </div>
        </MDBCol>

        <!-- Quick Links -->
        <MDBCol lg="2" md="6">
          <h5 class="footer-heading">Explore</h5>

          <ul class="footer-links">
            <li><RouterLink to="/">Home</RouterLink></li>
            <li><RouterLink to="/about">About Us</RouterLink></li>
            <li><RouterLink to="/programs">Our Works</RouterLink></li>
            <li><RouterLink to="/get-involved">Get Involved</RouterLink></li>
            <li><RouterLink to="/contact">Contact Us</RouterLink></li>
          </ul>
        </MDBCol>

        <!-- Our Works -->
        <MDBCol lg="3" md="6">
          <h5 class="footer-heading">Our Works</h5>

          <ul class="footer-links">
            <li>
              <RouterLink to="/programs#children">
                Children Outreach
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/programs#youth">
                Youth Discipleship
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/programs#leadership">
                Leadership Development
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/programs#stories">
                Impact Stories
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/get-involved">
                Volunteer With Us
              </RouterLink>
            </li>
          </ul>
        </MDBCol>

        <!-- Contact and Giving -->
        <MDBCol lg="3" md="6">
          <h5 class="footer-heading">Get in Touch</h5>

          <p class="contact-intro">
            Have a question or want to partner with us? We'd love to hear
            from you.
          </p>

          <ul class="contact-list">
            <li>
              <MDBIcon icon="envelope" class="contact-icon" />
              <a href="mailto:Admin@us4africa.org">
                Admin@us4africa.org
              </a>
            </li>

            <li>
              <MDBIcon icon="phone" class="contact-icon" />
              <a href="tel:+27737822117">
                +27 73 782 2117
              </a>
            </li>
          </ul>

          <RouterLink to="/donate" class="footer-donate-btn">
            Support Our Mission
            <MDBIcon icon="arrow-right" class="donate-icon" />
          </RouterLink>
        </MDBCol>
      </MDBRow>

      <!-- Mission statement strip -->
      <div class="footer-mission">
        <p>
          <span class="mission-highlight">Together,</span>
          we can empower ministries and transform lives across Africa.
        </p>
      </div>
    </MDBContainer>

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
              <RouterLink to="/privacy">Privacy Policy</RouterLink>
              <RouterLink to="/terms">Terms &amp; Conditions</RouterLink>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  </MDBFooter>
</template>

<style scoped>
.site-footer {
  --brand-purple: #54208c;
  --brand-red: #c6283d;
  --text-main: #292333;
  --text-muted: #686273;
  --border-color: #eee8f3;

  background: #ffffff;
  color: var(--text-main);
  border-top: 1px solid var(--border-color);
}

/* Main layout */
.footer-container {
  padding-top: 72px;
  padding-bottom: 38px;
}

.footer-brand {
  max-width: 360px;
}

.footer-logo-link {
  display: inline-flex;
  margin-bottom: 22px;
}

.footer-logo {
  display: block;
  width: 175px;
  height: auto;
  object-fit: contain;
}

.footer-description,
.contact-intro {
  color: var(--text-muted);
  font-size: 0.94rem;
  line-height: 1.85;
}

.footer-description {
  margin-bottom: 24px;
}

/* Section headings */
.footer-heading {
  position: relative;
  margin: 5px 0 25px;
  padding-bottom: 13px;
  color: var(--brand-purple);
  font-size: 1.05rem;
  font-weight: 750;
}

.footer-heading::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 35px;
  height: 3px;
  border-radius: 3px;
  background: var(--brand-red);
}

.social-heading {
  margin-bottom: 13px;
  color: var(--brand-purple);
  font-size: 0.9rem;
  font-weight: 700;
}

/* Quick links */
.footer-links,
.contact-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.footer-links li {
  margin-bottom: 14px;
}

.footer-links a,
.contact-list a {
  color: var(--text-muted);
  text-decoration: none;
  font-size: 0.92rem;
  transition: color 0.2s ease;
}

.footer-links a:hover,
.contact-list a:hover,
.legal-links a:hover {
  color: var(--brand-red);
}

/* Social links */
.social-links {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.social-link {
  display: inline-flex;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;

  border: 1px solid #e3d8ef;
  border-radius: 50%;
  background: #ffffff;
  color: var(--brand-purple);
  text-decoration: none;

  transition:
    color 0.2s ease,
    background-color 0.2s ease,
    border-color 0.2s ease,
    transform 0.2s ease;
}

.social-link:hover {
  background: var(--brand-purple);
  border-color: var(--brand-purple);
  color: #ffffff;
  transform: translateY(-3px);
}

/* Contact details */
.contact-intro {
  margin-bottom: 20px;
}

.contact-list {
  margin-bottom: 23px;
}

.contact-list li {
  display: flex;
  align-items: flex-start;
  gap: 11px;
  margin-bottom: 15px;
  overflow-wrap: anywhere;
}

.contact-icon {
  margin-top: 4px;
  color: var(--brand-red);
  flex-shrink: 0;
}

/* Giving CTA */
.footer-donate-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  padding: 13px 19px;
  border: 2px solid var(--brand-red);
  border-radius: 7px;

  background: var(--brand-red);
  color: #ffffff;
  font-size: 0.9rem;
  font-weight: 700;
  text-decoration: none;

  transition:
    background-color 0.2s ease,
    border-color 0.2s ease,
    transform 0.2s ease;
}

.footer-donate-btn:hover {
  background: var(--brand-purple);
  border-color: var(--brand-purple);
  color: #ffffff;
  transform: translateY(-2px);
}

.donate-icon {
  font-size: 0.85rem;
}

/* Closing mission statement */
.footer-mission {
  margin-top: 52px;
  padding: 23px 20px;
  border-top: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
  text-align: center;
}

.footer-mission p {
  margin: 0;
  color: var(--text-muted);
  font-size: 1rem;
  line-height: 1.7;
}

.mission-highlight {
  color: var(--brand-purple);
  font-weight: 800;
}

/* Copyright bar */
.footer-bottom {
  padding: 21px 0;
  background: #faf8fc;
  border-top: 1px solid var(--border-color);
}

.copyright {
  margin: 0;
  color: var(--text-muted);
  font-size: 0.84rem;
}

.legal-links {
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 22px;
}

.legal-links a {
  color: var(--text-muted);
  font-size: 0.84rem;
  text-decoration: none;
  transition: color 0.2s ease;
}

/* Tablet and mobile */
@media (max-width: 991.98px) {
  .footer-container {
    padding-top: 58px;
  }

  .footer-brand {
    max-width: 450px;
  }
}

@media (max-width: 767.98px) {
  .footer-container {
    padding-top: 48px;
    padding-bottom: 30px;
  }

  .footer-logo {
    width: 155px;
  }

  .footer-heading {
    margin-bottom: 19px;
  }

  .footer-mission {
    margin-top: 32px;
    padding: 20px 10px;
  }

  .footer-bottom {
    text-align: center;
  }

  .legal-links {
    justify-content: center;
    gap: 12px 20px;
  }
}

@media (max-width: 420px) {
  .footer-donate-btn {
    width: 100%;
  }

  .legal-links {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
}
</style>
