<template>
  <main class="contact-page">
    <!-- HERO -->
    <section class="contact-hero">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <span class="eyebrow">LET'S START A CONVERSATION</span>
        <h1>We'd Love to<br /><span>Hear From You.</span></h1>
        <p>
          Have a question, an idea, or a heart to serve? Connect with
          US4Africa. We'd be glad to hear from you.
        </p>
        <a href="#get-in-touch" class="primary-button">
          Contact Our Team <span aria-hidden="true">→</span>
        </a>
      </div>
      <div class="hero-accent" aria-hidden="true"></div>
    </section>

    <!-- CONTACT -->
    <section id="get-in-touch" class="contact-section">
      <div class="section-heading">
        <span class="eyebrow">GET IN TOUCH</span>
        <h2>Every great connection <span>starts here.</span></h2>
        <p>
          Whether you're exploring a partnership, asking about our work,
          or looking for ways to support African ministries, we're ready
          to connect.
        </p>
      </div>

      <div class="contact-layout">
        <aside class="contact-card">
          <div class="contact-card-heading">
            <span class="eyebrow">CONTACT INFORMATION</span>
            <h3>Let's connect and make an impact.</h3>
            <p>
              Reach out to our team directly or send us a message using
              the form. We look forward to hearing from you.
            </p>
          </div>

          <a class="contact-method" href="mailto:admin@us4africa.org">
            <span class="method-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
            </span>
            <span class="method-copy">
              <small>Email us</small>
              <strong>admin@us4africa.org</strong>
            </span>
            <span class="method-arrow" aria-hidden="true">↗</span>
          </a>

          <a class="contact-method" href="tel:+27737822117">
            <span class="method-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.08 5.18 2 2 0 0 1 5.06 3h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.63 2.63a2 2 0 0 1-.45 2.11L9 10.7a16 16 0 0 0 4.3 4.3l1.24-1.24a2 2 0 0 1 2.11-.45c.85.3 1.73.51 2.63.63A2 2 0 0 1 22 16.92Z" />
              </svg>
            </span>
            <span class="method-copy">
              <small>Call us</small>
              <strong>+27 73 782 2117</strong>
            </span>
            <span class="method-arrow" aria-hidden="true">↗</span>
          </a>

          <div class="contact-reach">
            <span class="reach-mark" aria-hidden="true">✦</span>
            <div>
              <strong>Our reach. Our purpose.</strong>
              <p>
                US4Africa is a dedicated 501(c)(3) charitable organization,
                empowering African ministries through support and service.
              </p>
            </div>
          </div>
        </aside>

        <section class="form-card" aria-labelledby="contact-form-title">
          <span class="eyebrow">SEND US A MESSAGE</span>
          <h3 id="contact-form-title">How can we help?</h3>
          <p class="form-intro">
            Complete the form below and a message will be prepared for
            your email application.
          </p>

          <form @submit.prevent="submitContact">
            <div class="form-row">
              <div class="form-field">
                <label for="contact-name">Full name <span>*</span></label>
                <input
                  id="contact-name"
                  v-model.trim="form.name"
                  type="text"
                  placeholder="Your full name"
                  autocomplete="name"
                  required
                />
              </div>

              <div class="form-field">
                <label for="contact-email">Email address <span>*</span></label>
                <input
                  id="contact-email"
                  v-model.trim="form.email"
                  type="email"
                  placeholder="you@example.com"
                  autocomplete="email"
                  required
                />
              </div>
            </div>

            <div class="form-field">
              <label for="contact-subject">What would you like to discuss?</label>
              <select id="contact-subject" v-model="form.subject">
                <option value="General Enquiry">General enquiry</option>
                <option value="Donations">Donations and giving</option>
                <option value="Volunteering">Volunteering</option>
                <option value="Partnerships">Partnerships and sponsorship</option>
                <option value="Our Programs">Our programmes</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div class="form-field">
              <label for="contact-message">Your message <span>*</span></label>
              <textarea
                id="contact-message"
                v-model.trim="form.message"
                rows="6"
                placeholder="Tell us how we can help..."
                required
              ></textarea>
            </div>

            <button class="primary-button submit-button" type="submit">
              Prepare Message <span aria-hidden="true">→</span>
            </button>

            <p v-if="feedback" class="form-feedback" role="status">
              {{ feedback }}
            </p>

            <p class="privacy-note">
              Please do not include sensitive personal or financial
              information in your message.
            </p>
          </form>
        </section>
      </div>
    </section>

    <!-- FAQ -->
    <section class="faq-section" id="faqs">
      <div class="section-heading">
        <span class="eyebrow">GOOD TO KNOW</span>
        <h2>Frequently asked <span>questions.</span></h2>
        <p>
          A few answers to help you understand our work and how you can
          become part of it.
        </p>
      </div>

      <div class="faq-layout">
        <div class="faq-intro">
          <div class="faq-symbol" aria-hidden="true">?</div>
          <span class="eyebrow">WE'RE HERE TO HELP</span>
          <h3>Still have a question?</h3>
          <p>
            We believe meaningful change happens through connection,
            collaboration and shared purpose.
          </p>
          <a href="#get-in-touch" class="faq-link">
            Send us your question <span aria-hidden="true">→</span>
          </a>
        </div>

        <div class="faq-list">
          <article
            v-for="(faq, index) in faqs"
            :key="faq.question"
            class="faq-item"
            :class="{ 'is-open': openFaq === index }"
          >
            <button
              class="faq-question"
              type="button"
              :aria-expanded="openFaq === index"
              :aria-controls="`faq-answer-${index}`"
              @click="toggleFaq(index)"
            >
              <span>{{ faq.question }}</span>
              <span class="faq-toggle" aria-hidden="true">
                {{ openFaq === index ? '−' : '+' }}
              </span>
            </button>

            <div
              v-if="openFaq === index"
              :id="`faq-answer-${index}`"
              class="faq-answer"
            >
              <p>{{ faq.answer }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- FINAL CTA -->
    <section class="contact-cta">
      <div class="cta-content">
        <span class="eyebrow">BE PART OF THE DIFFERENCE</span>
        <h2>Together, we can help communities thrive.</h2>
        <p>
          Your time, generosity and partnership can help empower ministries
          and strengthen communities across Africa.
        </p>
        <RouterLink to="/get-involved" class="light-button">
          Explore Ways to Get Involved <span aria-hidden="true">→</span>
        </RouterLink>
      </div>
      <div class="cta-decoration" aria-hidden="true"></div>
    </section>
  </main>
</template>

<script setup>
import { reactive, ref } from 'vue'

const openFaq = ref(0)
const feedback = ref('')

const form = reactive({
  name: '',
  email: '',
  subject: 'General Enquiry',
  message: '',
})

const faqs = [
  {
    question: 'How can I donate to US4Africa?',
    answer:
      'You can support US4Africa by making a donation directly through our website. We offer various payment methods to ensure your contribution is secure and convenient. Every donation goes directly towards supporting the ministries of the Leadership Experience Trust in Africa.',
  },
  {
    question: 'How can I get involved with US4Africa?',
    answer:
      'There are many ways to get involved with US4Africa, including volunteering, joining mission teams, or hosting fundraising events. We encourage individuals and groups to connect with us to discuss opportunities for partnership and support in our mission.',
  },
  {
    question: 'What types of support does US4Africa provide?',
    answer:
      'US4Africa provides various forms of support, including financial donations, material resources, and sending teams to assist local ministries. Our goal is to empower and equip local leaders in Africa to fulfill their God-given missions effectively.',
  },
  {
    question: 'Where do donations go?',
    answer:
      'Donations made to US4Africa are directed towards various initiatives, including funding the Leadership Experience, supporting local ministries, and providing material support to communities in need across Africa.',
  },
  {
    question: 'Are donations tax-deductible?',
    answer:
      'Yes, as a registered 501(c)(3) organization, contributions to US4Africa are tax-deductible, allowing donors to make a positive impact while enjoying tax benefits.',
  },
  {
    question: 'How can I learn more about your programmes?',
    answer:
      'Visit the Our Works section of our website to learn more about our focus areas. You can also contact our team with questions about current initiatives and programme opportunities.',
  },
]

function toggleFaq(index) {
  openFaq.value = openFaq.value === index ? -1 : index
}

function submitContact() {
  const subject = encodeURIComponent(
    `US4Africa Contact Enquiry: ${form.subject}`,
  )

  const body = encodeURIComponent(
    `Name: ${form.name}\n` +
    `Email: ${form.email}\n` +
    `Subject: ${form.subject}\n\n` +
    `Message:\n${form.message}`,
  )

  feedback.value =
    'Your email application should open with your message. Please send the email there to complete your enquiry.'

  window.location.href =
    `mailto:admin@us4africa.org?subject=${subject}&body=${body}`
}
</script>

<style scoped>
.contact-page {
  --purple: #55258b;
  --purple-dark: #35145f;
  --purple-soft: #f3eef8;
  --red: #d9364f;
  --red-dark: #b9233b;
  --ink: #292536;
  --muted: #716d7b;
  --line: #e9e5ed;
  --surface: #faf9fc;
  --white: #fff;

  color: var(--ink);
  background: var(--white);
  overflow: hidden;
}

.contact-page *,
.contact-page *::before,
.contact-page *::after {
  box-sizing: border-box;
}

.contact-page h1,
.contact-page h2,
.contact-page h3,
.contact-page h4,
.contact-page p {
  margin-top: 0;
}

.contact-page p {
  line-height: 1.8;
}

.eyebrow {
  display: inline-block;
  color: var(--red);
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 2px;
  line-height: 1.7;
}

.primary-button,
.light-button {
  display: inline-flex;
  min-height: 50px;
  align-items: center;
  justify-content: center;
  gap: 13px;
  padding: 13px 23px;
  border: 1px solid var(--red);
  border-radius: 4px;
  background: var(--red);
  color: var(--white);
  font: inherit;
  font-size: 0.9rem;
  font-weight: 750;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.2s ease;
}

.primary-button:hover {
  transform: translateY(-2px);
  border-color: var(--red-dark);
  background: var(--red-dark);
  color: var(--white);
}

.primary-button:focus-visible,
.light-button:focus-visible,
.contact-method:focus-visible,
.faq-question:focus-visible,
.faq-link:focus-visible {
  outline: 3px solid rgba(217, 54, 79, 0.35);
  outline-offset: 3px;
}

/* Hero */
.contact-hero {
  position: relative;
  display: flex;
  min-height: 490px;
  align-items: center;
  padding: 90px 9%;
  background:
    linear-gradient(
      90deg,
      rgba(35, 13, 63, 0.96) 0%,
      rgba(61, 24, 98, 0.88) 52%,
      rgba(61, 24, 98, 0.34) 100%
    ),
    url('https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=2000&q=85')
      center 42% / cover no-repeat;
  color: var(--white);
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(0deg, rgba(28, 10, 49, 0.2), transparent 65%);
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 720px;
}

.contact-hero .eyebrow {
  color: #ffb7c2;
}

.contact-hero h1 {
  margin: 17px 0 20px;
  color: var(--white);
  font-size: clamp(2.8rem, 6vw, 5rem);
  font-weight: 850;
  letter-spacing: -2px;
  line-height: 1.04;
}

.contact-hero h1 span {
  color: #ff8799;
}

.contact-hero p {
  max-width: 570px;
  margin-bottom: 29px;
  color: rgba(255, 255, 255, 0.88);
  font-size: clamp(1rem, 2vw, 1.15rem);
}

.hero-accent {
  position: absolute;
  right: 8%;
  bottom: 12%;
  width: 5px;
  height: 125px;
  background: var(--red);
}

/* Shared section heading */
.section-heading {
  max-width: 760px;
  margin: 0 auto 48px;
  text-align: center;
}

.section-heading h2 {
  margin: 12px 0;
  color: var(--purple-dark);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 850;
  letter-spacing: -1px;
  line-height: 1.15;
}

.section-heading h2 span {
  color: var(--red);
}

.section-heading > p {
  max-width: 650px;
  margin: 0 auto;
  color: var(--muted);
}

/* Contact section */
.contact-section {
  padding: 95px 8%;
  scroll-margin-top: 30px;
}

.contact-layout {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  align-items: stretch;
  gap: 30px;
  max-width: 1180px;
  margin: 0 auto;
}

.contact-card {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 38px;
  border-radius: 7px;
  background:
    radial-gradient(circle at 100% 0%, rgba(217, 54, 79, 0.22), transparent 35%),
    linear-gradient(145deg, var(--purple), var(--purple-dark));
  color: var(--white);
}

.contact-card .eyebrow {
  color: #ff9aaa;
}

.contact-card-heading h3 {
  margin: 13px 0;
  color: var(--white);
  font-size: clamp(1.65rem, 3vw, 2.1rem);
  font-weight: 800;
  line-height: 1.2;
}

.contact-card-heading > p {
  margin-bottom: 25px;
  color: rgba(255, 255, 255, 0.76);
  font-size: 0.92rem;
}

.contact-method {
  display: flex;
  align-items: center;
  gap: 14px;
  margin: 8px 0;
  padding: 16px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.17);
  color: var(--white);
  text-decoration: none;
}

.method-icon {
  display: flex;
  width: 45px;
  height: 45px;
  flex: 0 0 45px;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  color: #ff9aaa;
}

.method-icon svg {
  width: 20px;
  height: 20px;
  stroke: currentColor;
  stroke-width: 1.7;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.method-copy {
  display: flex;
  min-width: 0;
  flex: 1;
  flex-direction: column;
  gap: 5px;
}

.method-copy small {
  color: rgba(255, 255, 255, 0.65);
  font-size: 0.78rem;
}

.method-copy strong {
  overflow-wrap: anywhere;
  color: var(--white);
  font-size: 0.95rem;
  font-weight: 700;
}

.method-arrow {
  color: #ff9aaa;
  font-size: 1.15rem;
  transition: transform 0.2s ease;
}

.contact-method:hover .method-arrow {
  transform: translate(3px, -3px);
}

.contact-method:hover .method-copy strong {
  color: #ffb7c2;
}

.contact-reach {
  display: flex;
  gap: 13px;
  margin-top: auto;
  padding-top: 30px;
}

.reach-mark {
  color: #ff9aaa;
  font-size: 1.6rem;
}

.contact-reach strong {
  display: block;
  margin-bottom: 7px;
  color: var(--white);
  font-size: 0.9rem;
}

.contact-reach p {
  margin: 0;
  color: rgba(255, 255, 255, 0.72);
  font-size: 0.84rem;
  line-height: 1.7;
}

/* Form */
.form-card {
  padding: 38px;
  border: 1px solid var(--line);
  border-radius: 7px;
  background: var(--white);
  box-shadow: 0 12px 38px rgba(53, 20, 95, 0.07);
}

.form-card > .eyebrow {
  color: var(--red);
}

.form-card h3 {
  margin: 12px 0 8px;
  color: var(--purple-dark);
  font-size: 2rem;
  font-weight: 850;
}

.form-intro {
  margin-bottom: 27px;
  color: var(--muted);
  font-size: 0.9rem;
}

.form-card form {
  display: flex;
  flex-direction: column;
  gap: 19px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
}

.form-field {
  display: flex;
  min-width: 0;
  flex-direction: column;
  gap: 8px;
}

.form-field label {
  color: var(--purple-dark);
  font-size: 0.84rem;
  font-weight: 750;
}

.form-field label span {
  color: var(--red);
}

.form-field input,
.form-field select,
.form-field textarea {
  width: 100%;
  min-width: 0;
  padding: 13px 14px;
  border: 1px solid #ded9e5;
  border-radius: 4px;
  background: #fff;
  color: var(--ink);
  font: inherit;
  font-size: 0.9rem;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.form-field input::placeholder,
.form-field textarea::placeholder {
  color: #a39eaa;
}

.form-field input:focus,
.form-field select:focus,
.form-field textarea:focus {
  border-color: var(--purple);
  outline: none;
  box-shadow: 0 0 0 3px rgba(85, 37, 139, 0.1);
}

.form-field textarea {
  resize: vertical;
}

.submit-button {
  width: 100%;
  margin-top: 2px;
}

.form-feedback {
  margin: 0;
  padding: 12px 14px;
  border-left: 3px solid var(--purple);
  background: var(--purple-soft);
  color: var(--purple-dark);
  font-size: 0.85rem;
  overflow-wrap: anywhere;
}

.privacy-note {
  margin: 0;
  color: var(--muted);
  font-size: 0.76rem;
  line-height: 1.65 !important;
}

/* FAQs */
.faq-section {
  padding: 90px 8%;
  background: var(--surface);
  scroll-margin-top: 30px;
}

.faq-layout {
  display: grid;
  grid-template-columns: 0.75fr 1.25fr;
  align-items: start;
  gap: 55px;
  max-width: 1150px;
  margin: 0 auto;
}

.faq-intro {
  padding: 32px;
  border-top: 4px solid var(--red);
  border-radius: 5px;
  background: var(--purple-dark);
  color: var(--white);
}

.faq-symbol {
  display: flex;
  width: 54px;
  height: 54px;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  border: 1px solid rgba(255, 255, 255, 0.55);
  border-radius: 50%;
  color: #ff9aaa;
  font-size: 1.8rem;
  font-weight: 750;
}

.faq-intro .eyebrow {
  color: #ff9aaa;
}

.faq-intro h3 {
  margin: 12px 0;
  color: var(--white);
  font-size: 1.65rem;
}

.faq-intro p {
  margin-bottom: 24px;
  color: rgba(255, 255, 255, 0.76);
  font-size: 0.9rem;
}

.faq-link {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  color: #ff9aaa;
  font-size: 0.88rem;
  font-weight: 750;
  text-decoration: none;
}

.faq-link:hover {
  color: var(--white);
}

.faq-list {
  border-top: 1px solid var(--line);
}

.faq-item {
  border-bottom: 1px solid var(--line);
}

.faq-question {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 22px 4px;
  border: 0;
  background: transparent;
  color: var(--purple-dark);
  font: inherit;
  font-size: 0.98rem;
  font-weight: 750;
  text-align: left;
  cursor: pointer;
}

.faq-toggle {
  display: flex;
  width: 31px;
  height: 31px;
  flex: 0 0 31px;
  align-items: center;
  justify-content: center;
  border: 1px solid #ded6e8;
  border-radius: 50%;
  color: var(--red);
  font-size: 1.25rem;
  transition: background 0.2s ease, color 0.2s ease;
}

.is-open .faq-toggle {
  border-color: var(--red);
  background: var(--red);
  color: var(--white);
}

.faq-answer {
  padding: 0 45px 21px 4px;
}

.faq-answer p {
  margin: 0;
  color: var(--muted);
  font-size: 0.91rem;
  line-height: 1.8;
}

/* Final CTA */
.contact-cta {
  position: relative;
  overflow: hidden;
  padding: 85px 8%;
  background:
    radial-gradient(circle at 90% 10%, rgba(217, 54, 79, 0.25), transparent 28%),
    linear-gradient(120deg, var(--purple-dark), var(--purple));
  color: var(--white);
  text-align: center;
}

.cta-content {
  position: relative;
  z-index: 1;
  max-width: 790px;
  margin: 0 auto;
}

.contact-cta .eyebrow {
  color: #ff9aaa;
}

.contact-cta h2 {
  margin: 15px auto;
  color: var(--white);
  font-size: clamp(2rem, 4.5vw, 3.25rem);
  font-weight: 850;
  letter-spacing: -1px;
  line-height: 1.15;
}

.contact-cta p {
  max-width: 650px;
  margin: 0 auto 28px;
  color: rgba(255, 255, 255, 0.8);
}

.light-button {
  border-color: var(--white);
  background: var(--white);
  color: var(--purple-dark);
}

.light-button:hover {
  transform: translateY(-2px);
  border-color: #ffb7c2;
  background: #ffb7c2;
  color: var(--purple-dark);
}

.cta-decoration {
  position: absolute;
  right: -65px;
  bottom: -130px;
  width: 280px;
  height: 280px;
  border: 1px solid rgba(255, 255, 255, 0.13);
  border-radius: 50%;
}

.cta-decoration::after {
  position: absolute;
  inset: 25px;
  border: 1px solid rgba(255, 255, 255, 0.13);
  border-radius: 50%;
  content: '';
}

/* Responsive */
@media (max-width: 900px) {
  .contact-layout {
    grid-template-columns: 1fr;
  }

  .faq-layout {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .faq-intro {
    max-width: none;
  }
}

@media (max-width: 600px) {
  .contact-hero {
    min-height: 430px;
    padding: 65px 24px;
    background-position: 60% center;
  }

  .contact-hero h1 {
    letter-spacing: -1px;
  }

  .hero-accent {
    right: 17px;
    bottom: 7%;
    height: 75px;
  }

  .contact-section,
  .faq-section {
    padding: 65px 22px;
  }

  .section-heading {
    margin-bottom: 34px;
  }

  .contact-card,
  .form-card,
  .faq-intro {
    padding: 27px 22px;
  }

  .form-row {
    grid-template-columns: 1fr;
  }

  .faq-question {
    padding: 19px 0;
    font-size: 0.92rem;
  }

  .faq-answer {
    padding-right: 8px;
  }

  .contact-cta {
    padding: 68px 24px;
  }

  .light-button {
    width: 100%;
  }
}

@media (prefers-reduced-motion: reduce) {
  .contact-page *,
  .contact-page *::before,
  .contact-page *::after {
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }
}
</style>
