
<template>
  <main class="get-involved-page">
    <!-- HERO -->
    <section class="give-hero">
      <div class="hero-shade"></div>

      <div class="hero-content">
        <span class="eyebrow">GIVE • SERVE • EMPOWER</span>
        <h1>Join Us in Making a Difference</h1>
        <p>Your support transforms lives across Africa.</p>

        <div class="hero-actions">
          <router-link to="/donate" class="gold-button">
            Donate Now 
          </router-link>
          <router-link to="/volunteer" class="outline-button">
            Volunteer
          </router-link>
        </div>
      </div>

      <div class="hero-accent" aria-hidden="true"></div>
    </section>

    <!-- DONATIONS -->
    <section id="donation-options" class="donations-section">
      <header class="section-heading">
        <span class="eyebrow">YOUR GENEROSITY MATTERS</span>
        <h2>Support Our Mission</h2>
        <p>
          Every contribution helps us bring hope and resources
          to those in need.
        </p>
      </header>

      <div class="donation-grid">
        <article
          v-for="item in donationOptions"
          :key="item.id"
          class="donation-card"
        >
          <div class="donation-image" :class="item.imageClass">
            <img
              :src="item.image"
              :alt="item.imageAlt"
              loading="lazy"
            />
            <span class="donation-symbol" aria-hidden="true">
              {{ item.symbol }}
            </span>
          </div>

          <div class="donation-card-content">
            <span class="donation-category">{{ item.category }}</span>
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>

            <div class="donation-card-bottom">
              <span class="donation-price">
                ${{ item.amount.toLocaleString('en-US') }}
              </span>

              <button
                type="button"
                class="gold-button donate-button"
                @click="openDonation(item)"
              >
                Donate Now <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </article>
      </div>

      <p class="donation-note">
        Donations are processed through our designated donation
        page. Please confirm the donation details before payment.
      </p>
    </section>

    <!-- CORPORATE SPONSORSHIP -->
    <section id="sponsorship" class="sponsorship-section">
      <header class="section-heading">
        <span class="eyebrow">PARTNER WITH US</span>
        <h2>Corporate Sponsorship Tiers</h2>
        <p>
          Explore our sponsorship tiers and discover how your
          business can contribute to meaningful change.
        </p>
      </header>

      <div class="sponsor-grid">
        <!-- BRONZE -->
        <article class="sponsor-card bronze">
          <div class="sponsor-top">
            <div class="sponsor-emblem" aria-hidden="true">B</div>
            <span class="sponsor-level">BRONZE PARTNER</span>
            <h3>Bronze Sponsor</h3>
            <p class="sponsor-price">
              <span>$</span>500
            </p>
            <span class="contribution-label">Sponsorship contribution</span>
          </div>

          <div class="sponsor-benefits">
            <h4>Partner Benefits</h4>
            <ul>
              <li>Recognition on our website</li>
              <li>Monthly newsletter feature</li>
              <li>Social media shoutout</li>
            </ul>
          </div>

          <button
            type="button"
            class="sponsor-button"
            @click="selectSponsor('Bronze Sponsor', 500)"
          >
            Select Bronze
          </button>
        </article>

        <!-- SILVER -->
        <article class="sponsor-card silver">
          <div class="recommended-label">RECOMMENDED</div>

          <div class="sponsor-top">
            <div class="sponsor-emblem" aria-hidden="true">S</div>
            <span class="sponsor-level">SILVER PARTNER</span>
            <h3>Silver Sponsor</h3>
            <p class="sponsor-price">
              <span>$</span>1,000
            </p>
            <span class="contribution-label">Sponsorship contribution</span>
          </div>

          <div class="sponsor-benefits">
            <h4>Everything in Bronze, plus</h4>
            <ul>
              <li>Logo on event materials</li>
              <li>Quarterly impact report</li>
            </ul>
          </div>

          <button
            type="button"
            class="gold-button sponsor-button"
            @click="selectSponsor('Silver Sponsor', 1000)"
          >
            Select Silver
          </button>
        </article>

        <!-- GOLD -->
        <article class="sponsor-card gold">
          <div class="sponsor-top">
            <div class="sponsor-emblem" aria-hidden="true">G</div>
            <span class="sponsor-level">GOLD PARTNER</span>
            <h3>Gold Sponsor</h3>
            <p class="sponsor-price">
              <span>$</span>2,500
            </p>
            <span class="contribution-label">Sponsorship contribution</span>
          </div>

          <div class="sponsor-benefits">
            <h4>Everything in Silver, plus</h4>
            <ul>
              <li>Personalized feature on our website</li>
              <li>Invitation to exclusive events</li>
            </ul>
          </div>

          <button
            type="button"
            class="sponsor-button"
            @click="selectSponsor('Gold Sponsor', 2500)"
          >
            Select Gold
          </button>
        </article>
      </div>

      <p class="sponsor-note">
        Sponsorship benefits and recognition arrangements are
        subject to confirmation with US4Africa.
      </p>
    </section>

    <!-- VOLUNTEER -->
    <section id="volunteer" class="volunteer-section">
      <div class="volunteer-photo">
        <img
          src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1200&q=85"
          alt="Volunteers working together in their community"
          loading="lazy"
        />
        <div class="photo-caption">
          <span class="eyebrow">PEOPLE MAKING A DIFFERENCE</span>
          <h3>Small Acts. Lasting Impact.</h3>
        </div>
      </div>

      <div class="volunteer-content">
        <span class="eyebrow">GIVE YOUR TIME</span>
        <h2>Become a Volunteer</h2>
        <p class="volunteer-lead">
          Join our team and help us make a lasting impact.
        </p>
        <p>
          Share your skills, time, and passion to support
          African ministries, empower young people, and
          strengthen communities.
        </p>

        <div class="volunteer-points">
          <div class="volunteer-point">
            <span class="point-check" aria-hidden="true">✓</span>
            <span>Support meaningful community initiatives</span>
          </div>
          <div class="volunteer-point">
            <span class="point-check" aria-hidden="true">✓</span>
            <span>Use your gifts and skills to serve others</span>
          </div>
          <div class="volunteer-point">
            <span class="point-check" aria-hidden="true">✓</span>
            <span>Help build lasting ministry partnerships</span>
          </div>
        </div>

        <button
          type="button"
          class="gold-button"
          @click="scrollToContact"
        >
          Register Your Interest <span aria-hidden="true">→</span>
        </button>
      </div>
    </section>

    <!-- CONTACT -->
    <section id="contact" class="contact-section">
      <header class="section-heading">
        <span class="eyebrow">LET'S CONNECT</span>
        <h2>Get in Touch</h2>
        <p>
          Interested in volunteering, sponsorship, or supporting
          our mission? Send us a message.
        </p>
      </header>

      <div class="contact-grid">
        <div class="contact-information">
          <span class="eyebrow">CONTACT US</span>
          <h3>We'd Love to Hear From You</h3>
          <p>
            Reach out to discuss volunteering opportunities,
            corporate partnerships, or ways to support our work.
          </p>

          <div class="contact-detail">
            <span class="contact-icon" aria-hidden="true">✉</span>
            <div>
              <span class="detail-label">Email Address</span>
              <a href="mailto:admin@us4africa.org">
                admin@us4africa.org
              </a>
            </div>
          </div>

          <div class="contact-detail">
            <span class="contact-icon" aria-hidden="true">◎</span>
            <div>
              <span class="detail-label">Our Mission</span>
              <p>
                Empowering African ministries through support
                and service.
              </p>
            </div>
          </div>

          <div class="map-panel">
            <div class="map-panel-heading">
              <h4>Find Us</h4>
              <p>
                Search for US4Africa or open the map to locate
                the organisation.
              </p>
            </div>

            <iframe
              title="Map search for US4Africa"
              src="https://www.google.com/maps?q=US4Africa&output=embed"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              allowfullscreen
            ></iframe>

            <p class="map-note">
              This map uses a name search. Confirm the correct
              organisation location before publishing it as your
              official address.
            </p>
          </div>
        </div>

        <div id="contact-form-panel" class="contact-form-panel">
          <span class="eyebrow">SEND A MESSAGE</span>
          <h3>How Can We Help?</h3>

          <form class="contact-form" @submit.prevent="submitContact">
            <div class="form-field">
              <label for="contact-name">Name *</label>
              <input
                id="contact-name"
                v-model.trim="form.name"
                type="text"
                autocomplete="name"
                placeholder="Your full name"
                required
              />
            </div>

            <div class="form-field">
              <label for="contact-email">Email *</label>
              <input
                id="contact-email"
                v-model.trim="form.email"
                type="email"
                autocomplete="email"
                placeholder="you@example.com"
                required
              />
            </div>

            <div class="form-field">
              <label for="contact-interest">I'm interested in</label>
              <select
                id="contact-interest"
                v-model="form.interest"
              >
                <option value="General Enquiry">General Enquiry</option>
                <option value="Volunteering">Volunteering</option>
              </select>
            </div>

            <div class="form-field">
              <label for="contact-message">Message *</label>
              <textarea
                id="contact-message"
                v-model.trim="form.message"
                rows="5"
                placeholder="Tell us how you'd like to get involved..."
                required
              ></textarea>
            </div>

            <button type="submit" class="gold-button submit-button">
              Submit Message <span aria-hidden="true">→</span>
            </button>

            <p
              v-if="formFeedback"
              class="form-feedback"
              role="status"
            >
              {{ formFeedback }}
            </p>

            <p class="privacy-note">
              Your details will be used to respond to your enquiry.
              Please avoid including sensitive personal information.
            </p>
          </form>
        </div>
      </div>
    </section>

    <!-- FINAL CALL TO ACTION -->
    <section class="closing-cta">
      <span class="eyebrow">TOGETHER, WE CAN DO MORE</span>
      <h2>Be Part of a Story That Changes Lives</h2>
      <p>
        Your generosity and willingness to serve can help
        communities thrive.
      </p>
      <a href="#donation-options" class="gold-button">
        Support Our Mission <span aria-hidden="true">→</span>
      </a>
    </section>
  </main>
</template>

<script setup>
import { reactive, ref } from 'vue'

/**
 * Donation page route.
 * Donation buttons pass the selected amount and donation type
 * to the donation page through query parameters.
 */
const DONATION_PAGE_URL = '/donate'

const donationOptions = [
  {
    id: 'corporate',
    title: 'Corporate Partnership',
    amount: 100,
    category: 'PARTNER WITH US',
    description:
      'Help strengthen ministry and community initiatives through meaningful corporate support.',
    symbol: '◆',
    imageClass: 'corporate-image',
    image:
      'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'Colleagues working together on a shared goal',
  },
  {
    id: 'monthly',
    title: 'Monthly Supporter',
    amount: 25,
    category: 'GIVE REGULARLY',
    description:
      'Provide ongoing support that helps us plan and sustain our work.',
    symbol: '↻',
    imageClass: 'monthly-image',
    image:
      'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'Community volunteers supporting others',
  },
  {
    id: 'once-off',
    title: 'One-Time Donation',
    amount: 50,
    category: 'MAKE A DIFFERENCE',
    description:
      'Make a contribution towards initiatives that serve people and communities across Africa.',
    symbol: '♡',
    imageClass: 'onceoff-image',
    image:
      'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'Volunteers participating in community service',
  },
]

const form = reactive({
  name: '',
  email: '',
  interest: 'General Enquiry',
  message: '',
})

const formFeedback = ref('')

function openDonation(item) {
  const destination = new URL(
    DONATION_PAGE_URL,
    window.location.origin,
  )

  destination.searchParams.set('amount', String(item.amount))
  destination.searchParams.set('type', item.id)

  window.location.assign(destination.toString())
}

function selectSponsor(tier, amount) {
  form.interest = tier
  form.message =
    `Hello US4Africa,\n\n` +
    `I am interested in the ${tier} sponsorship package ` +
    `with a listed contribution of $${amount.toLocaleString('en-US')}. ` +
    `Please contact me with further details about the sponsorship ` +
    `benefits, payment process, and next steps.`

  scrollToContact()
}

function scrollToContact() {
  document.getElementById('contact-form-panel')?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })

  window.setTimeout(() => {
    document.getElementById('contact-name')?.focus({
      preventScroll: true,
    })
  }, 450)
}

function submitContact() {
  const subject = encodeURIComponent(
    `US4Africa ${form.interest} enquiry from ${form.name}`,
  )

  const body = encodeURIComponent(
    `Name: ${form.name}\n` +
    `Email: ${form.email}\n` +
    `Interest: ${form.interest}\n\n` +
    `Message:\n${form.message}`,
  )

  formFeedback.value =
    'Your email application should open with your message. ' +
    'Send the email there to complete your enquiry.'

  window.location.href =
    `mailto:admin@us4africa.org?subject=${subject}&body=${body}`
}
</script>

<style scoped>
.get-involved-page {
  --navy: #102b46;
  --navy-light: #1c4163;
  --gold: #d5a84b;
  --gold-dark: #da2424;
  --gold-pale: #f5ecd7;
  --white: #ffffff;
  --cream: #faf9f6;
  --text: #26364a;
  --muted: #6d7989;
  --border: #e5e9ef;

  overflow: hidden;
  background: var(--white);
  color: var(--text);
}

.get-involved-page *,
.get-involved-page *::before,
.get-involved-page *::after {
  box-sizing: border-box;
}

.get-involved-page h1,
.get-involved-page h2,
.get-involved-page h3,
.get-involved-page h4,
.get-involved-page p {
  margin-top: 0;
}

.get-involved-page p {
  line-height: 1.8;
}

.eyebrow {
  display: inline-block;
  color: var(--gold-dark);
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 2.3px;
  line-height: 1.7;
}

/* Buttons */

.gold-button,
.outline-button,
.sponsor-button {
  display: inline-flex;
  min-height: 48px;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 12px 23px;
  border: 1px solid var(--gold-dark);
  border-radius: 4px;
  cursor: pointer;
  font: inherit;
  font-size: 0.9rem;
  font-weight: 750;
  text-align: center;
  text-decoration: none;
  transition:
    transform 0.2s ease,
    background 0.2s ease,
    color 0.2s ease;
}

.gold-button {
  background: var(--gold-dark);
  color: var(--navy);
}

.gold-button:hover {
  transform: translateY(-2px);
  background: #e6bd68;
  color: var(--navy);
}

.outline-button {
  border-color: rgba(255, 255, 255, 0.7);
  background: transparent;
  color: var(--white);
}

.outline-button:hover {
  background: var(--white);
  color: var(--navy);
}

/* Hero */

.give-hero {
  position: relative;
  display: flex;
  min-height: 100vh;
  align-items: center;
  padding: 90px 9%;
  background:
    linear-gradient(
      90deg,
      rgba(8, 29, 49, 0.96),
      rgba(16, 43, 70, 0.84) 56%,
      rgba(16, 43, 70, 0.35)
    ),
    url('https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=2000&q=90')
    center / cover no-repeat;
  color: var(--white);
}

.hero-shade {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    transparent 70%,
    rgba(8, 29, 49, 0.18)
  );
  pointer-events: none;
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 760px;
}

.give-hero .eyebrow {
  color: var(--gold);
}

.give-hero h1 {
  margin: 17px 0;
  color: var(--white);
  font-size: clamp(2.8rem, 6vw, 5rem);
  font-weight: 800;
  letter-spacing: -1.7px;
  line-height: 1.07;
}

.give-hero p {
  margin-bottom: 30px;
  color: rgba(255, 255, 255, 0.89);
  font-size: clamp(1.15rem, 2vw, 1.5rem);
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}

.hero-accent {
  position: absolute;
  right: 7%;
  bottom: 12%;
  width: 5px;
  height: 160px;
  background: var(--gold);
  opacity: 0.8;
}

/* Section headings */

.section-heading {
  max-width: 760px;
  margin: 0 auto 50px;
  text-align: center;
}

.section-heading h2 {
  margin: 12px 0;
  color: var(--navy);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  line-height: 1.2;
}

.section-heading p {
  margin-bottom: 0;
  color: var(--muted);
}

/* Donation cards */

.donations-section {
  padding: 85px 8%;
  background: var(--white);
  scroll-margin-top: 30px;
}

.donation-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 25px;
  max-width: 1200px;
  margin: 0 auto;
}

.donation-card {
  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: 6px;
  background: var(--white);
  box-shadow: 0 8px 25px rgba(16, 43, 70, 0.05);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.donation-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 32px rgba(16, 43, 70, 0.1);
}

.donation-image {
  position: relative;
  height: 205px;
  overflow: hidden;
  background: var(--navy);
}

.donation-image img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.donation-card:hover .donation-image img {
  transform: scale(1.04);
}

.donation-symbol {
  position: absolute;
  right: 18px;
  bottom: 16px;
  display: flex;
  width: 45px;
  height: 45px;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.65);
  border-radius: 50%;
  background: var(--gold);
  color: var(--navy);
  font-size: 1.45rem;
}

.donation-card-content {
  display: flex;
  min-height: 280px;
  flex-direction: column;
  padding: 25px;
}

.donation-category {
  color: var(--gold-dark);
  font-size: 0.71rem;
  font-weight: 800;
  letter-spacing: 1.5px;
}

.donation-card h3 {
  margin: 10px 0;
  color: var(--navy);
  font-size: 1.35rem;
}

.donation-card-content > p {
  flex: 1;
  margin-bottom: 25px;
  color: var(--muted);
  font-size: 0.9rem;
}

.donation-card-bottom {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  padding-top: 18px;
  border-top: 1px solid var(--border);
}

.donation-price {
  color: var(--navy);
  font-size: 1.65rem;
  font-weight: 800;
}

.donate-button {
  padding: 10px 14px;
  font-size: 0.82rem;
}

.donation-note,
.sponsor-note {
  max-width: 900px;
  margin: 30px auto 0;
  color: var(--muted);
  font-size: 0.8rem;
  text-align: center;
}

/* Sponsorship */

.sponsorship-section {
  padding: 90px 8%;
  background: var(--cream);
  scroll-margin-top: 30px;
}

.sponsor-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  align-items: stretch;
  gap: 25px;
  max-width: 1200px;
  margin: 0 auto;
}

.sponsor-card {
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: 7px;
  background: var(--white);
  box-shadow: 0 8px 24px rgba(16, 43, 70, 0.045);
}

.sponsor-card.silver {
  border: 2px solid var(--gold);
  box-shadow: 0 15px 35px rgba(16, 43, 70, 0.09);
}

.sponsor-top {
  padding: 30px 24px 25px;
  text-align: center;
}

.sponsor-emblem {
  display: flex;
  width: 63px;
  height: 63px;
  align-items: center;
  justify-content: center;
  margin: 0 auto 18px;
  border: 2px solid currentColor;
  border-radius: 50%;
  font-size: 1.55rem;
  font-weight: 800;
}

.bronze .sponsor-emblem {
  border-color: #ad794b;
  color: #ad794b;
}

.silver .sponsor-emblem {
  border-color: #8896a6;
  color: #75879b;
}

.gold .sponsor-emblem {
  border-color: var(--gold-dark);
  color: var(--gold-dark);
}

.sponsor-level {
  color: var(--muted);
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 1.8px;
}

.sponsor-top h3 {
  margin: 12px 0;
  color: var(--navy);
  font-size: 1.45rem;
}

.sponsor-price {
  margin: 15px 0 4px;
  color: var(--navy);
  font-size: 3rem;
  font-weight: 800;
  letter-spacing: -1.5px;
  line-height: 1.15;
}

.sponsor-price span {
  margin-right: 3px;
  font-size: 1.55rem;
  vertical-align: top;
}

.contribution-label {
  color: var(--muted);
  font-size: 0.78rem;
}

.recommended-label {
  padding: 10px 12px;
  background: var(--gold);
  color: var(--navy);
  font-size: 0.7rem;
  font-weight: 850;
  letter-spacing: 1.8px;
  text-align: center;
}

.sponsor-benefits {
  flex: 1;
  padding: 24px;
  border-top: 1px solid var(--border);
  background: #fff;
}

.sponsor-benefits h4 {
  margin-bottom: 17px;
  color: var(--navy);
  font-size: 0.95rem;
}

.sponsor-benefits ul {
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.sponsor-benefits li {
  position: relative;
  padding-left: 25px;
  color: var(--muted);
  font-size: 0.88rem;
  line-height: 1.6;
}

.sponsor-benefits li::before {
  position: absolute;
  top: 0;
  left: 0;
  color: var(--gold-dark);
  content: "✓";
  font-weight: 800;
}

.sponsor-button {
  width: calc(100% - 48px);
  margin: 0 24px 25px;
  background: transparent;
  color: var(--navy);
}

.sponsor-button:hover {
  background: var(--gold-pale);
  color: var(--navy);
}

.sponsor-card.silver .sponsor-button {
  background: var(--gold);
}

.sponsor-card.silver .sponsor-button:hover {
  background: #e6bd68;
}

/* Volunteer section */

.volunteer-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: stretch;
  gap: clamp(40px, 6vw, 85px);
  padding: 95px 9%;
  background: var(--white);
  scroll-margin-top: 30px;
}

.volunteer-photo {
  position: relative;
  min-height: 480px;
  overflow: hidden;
  border-radius: 5px;
  background: var(--navy);
}

.volunteer-photo img {
  display: block;
  width: 100%;
  height: 100%;
  min-height: 480px;
  object-fit: cover;
}

.photo-caption {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 55px 25px 25px;
  background: linear-gradient(
    transparent,
    rgba(8, 29, 49, 0.92)
  );
  color: var(--white);
}

.photo-caption .eyebrow {
  color: var(--gold);
}

.photo-caption h3 {
  margin: 10px 0 0;
  color: var(--white);
  font-size: clamp(1.4rem, 3vw, 2rem);
}

.volunteer-content {
  align-self: center;
}

.volunteer-content h2 {
  margin: 14px 0;
  color: var(--navy);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  line-height: 1.2;
}

.volunteer-content > p {
  color: var(--muted);
}

.volunteer-content .volunteer-lead {
  margin-bottom: 13px;
  color: var(--navy);
  font-size: 1.1rem;
  font-weight: 650;
}

.volunteer-points {
  display: flex;
  flex-direction: column;
  gap: 17px;
  margin: 28px 0;
}

.volunteer-point {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  color: var(--text);
  line-height: 1.65;
}

.point-check {
  display: flex;
  width: 24px;
  height: 24px;
  flex: 0 0 24px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--gold-pale);
  color: var(--gold-dark);
  font-size: 0.8rem;
  font-weight: 800;
}

/* Contact */

.contact-section {
  padding: 90px 8%;
  background: #f5f7fa;
  scroll-margin-top: 30px;
}

.contact-grid {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

.contact-information,
.contact-form-panel {
  min-width: 0;
  padding: 32px;
  border: 1px solid var(--border);
  border-radius: 6px;
  background: var(--white);
  box-shadow: 0 8px 25px rgba(16, 43, 70, 0.04);
}

.contact-information h3,
.contact-form-panel h3 {
  margin: 12px 0 15px;
  color: var(--navy);
  font-size: 1.65rem;
  font-weight: 750;
}

.contact-information > p {
  color: var(--muted);
}

.contact-detail {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  margin: 26px 0;
}

.contact-icon {
  display: flex;
  width: 44px;
  height: 44px;
  flex: 0 0 44px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--gold-pale);
  color: var(--navy);
  font-size: 1.2rem;
}

.detail-label {
  display: block;
  margin-bottom: 5px;
  color: var(--navy);
  font-size: 0.88rem;
  font-weight: 800;
}

.contact-detail a {
  color: var(--gold-dark);
  overflow-wrap: anywhere;
}

.contact-detail p {
  margin-bottom: 0;
  color: var(--muted);
  font-size: 0.9rem;
}

.map-panel {
  overflow: hidden;
  margin-top: 35px;
  border: 1px solid var(--border);
  border-radius: 5px;
}

.map-panel-heading {
  padding: 20px;
}

.map-panel-heading h4 {
  margin-bottom: 8px;
  color: var(--navy);
  font-size: 1.1rem;
}

.map-panel-heading p {
  margin-bottom: 0;
  color: var(--muted);
  font-size: 0.85rem;
}

.map-panel iframe {
  display: block;
  width: 100%;
  height: 245px;
  border: 0;
}

.map-note {
  margin: 0;
  padding: 12px 15px;
  background: #fbf8f0;
  color: var(--muted);
  font-size: 0.75rem;
  line-height: 1.6 !important;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 19px;
  margin-top: 25px;
}

.form-field {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-field label {
  color: var(--navy);
  font-size: 0.86rem;
  font-weight: 750;
}

.form-field input,
.form-field select,
.form-field textarea {
  width: 100%;
  min-width: 0;
  padding: 13px 14px;
  border: 1px solid #d9dfe7;
  border-radius: 4px;
  background: var(--white);
  color: var(--text);
  font: inherit;
  font-size: 0.91rem;
}

.form-field input:focus,
.form-field select:focus,
.form-field textarea:focus {
  border-color: var(--gold-dark);
  outline: 2px solid rgba(213, 168, 75, 0.2);
}

.form-field textarea {
  resize: vertical;
}

.submit-button {
  width: 100%;
}

.form-feedback {
  margin: 0;
  color: var(--navy);
  font-size: 0.85rem;
  overflow-wrap: anywhere;
}

.privacy-note {
  margin: 0;
  color: var(--muted);
  font-size: 0.77rem;
  line-height: 1.6 !important;
}

/* Closing call to action */

.closing-cta {
  padding: 75px 8%;
  background: var(--navy);
  color: var(--white);
  text-align: center;
}

.closing-cta .eyebrow {
  color: var(--gold);
}

.closing-cta h2 {
  max-width: 800px;
  margin: 14px auto;
  color: var(--white);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  line-height: 1.2;
}

.closing-cta p {
  max-width: 650px;
  margin: 0 auto 25px;
  color: rgba(255, 255, 255, 0.82);
}

/* Tablet */

@media (max-width: 950px) {
  .donations-section,
  .sponsorship-section {
    padding-right: 5%;
    padding-left: 5%;
  }

  .donation-grid,
  .sponsor-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .donation-card:last-child {
    grid-column: 1 / -1;
  }

  .volunteer-section {
    gap: 35px;
    padding-right: 6%;
    padding-left: 6%;
  }

  .contact-grid {
    grid-template-columns: 1fr;
  }
}

/* Mobile */

@media (max-width: 640px) {
  .give-hero {
    min-height: 475px;
    padding: 65px 24px;
    background-position: 58% center;
  }

  .give-hero h1 {
    letter-spacing: -1px;
  }

  .hero-accent {
    right: 15px;
    height: 100px;
  }

  .donations-section,
  .sponsorship-section,
  .contact-section {
    padding: 65px 22px;
  }

  .donation-grid,
  .sponsor-grid {
    grid-template-columns: 1fr;
  }

  .donation-card:last-child {
    grid-column: auto;
  }

  .donation-image {
    height: 220px;
  }

  .donation-card-content {
    min-height: 0;
  }

  .volunteer-section {
    grid-template-columns: 1fr;
    gap: 35px;
    padding: 65px 24px;
  }

  .volunteer-photo,
  .volunteer-photo img {
    min-height: 320px;
    max-height: 400px;
  }

  .contact-information,
  .contact-form-panel {
    padding: 23px;
  }

  .closing-cta {
    padding: 65px 24px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .get-involved-page *,
  .get-involved-page *::before,
  .get-involved-page *::after {
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }
}
</style>
