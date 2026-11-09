
<template>
  <main class="contact-page">

    <!-- HERO -->
    <section id="contact-hero" class="contact-hero">
      <div class="hero-overlay"></div>

      <div class="hero-content">
        <span class="eyebrow">WE'RE HERE FOR YOU</span>
        <h1>Get in Touch with Us</h1>
        <p>
          We're here to assist you and answer any questions
          you may have.
        </p>
      </div>

      <div class="hero-decoration" aria-hidden="true"></div>
    </section>

    <!-- GET IN TOUCH -->
    <section id="get-in-touch" class="get-in-touch-section">
      <div class="contact-grid">
        <!-- CONTACT INFORMATION -->
        <div class="contact-information">
          <div class="contact-info-heading">
            <span class="eyebrow">CONTACT INFORMATION</span>
            <h3>We'd Love to Hear From You</h3>
            <p>
              Whether you have a question about our programs,
              want to partner with us, or wish to support our
              mission, our team is ready to connect.
            </p>
          </div>

          <div class="contact-detail">
            <div class="detail-icon" aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.7"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/>
                <circle cx="12" cy="10" r="2.5"/>
              </svg>
            </div>
            <div>
              <h4>Our Address</h4>
              <p>2085 N Man O War War, Meridien, Idaho</p>
            </div>
          </div>

          <div class="contact-detail">
            <div class="detail-icon" aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.7"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.08 5.18 2 2 0 0 1 5.06 3h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.63 2.63a2 2 0 0 1-.45 2.11L9 10.7a16 16 0 0 0 4.3 4.3l1.24-1.24a2 2 0 0 1 2.11-.45c.85.3 1.73.51 2.63.63A2 2 0 0 1 22 16.92Z"/>
              </svg>
            </div>
            <div>
              <h4>Phone Number</h4>
              <a href="tel:+27737822117">+27 73 782 2117</a>
            </div>
          </div>

          <div class="contact-detail">
            <div class="detail-icon" aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.7"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect x="3" y="5" width="18" height="14" rx="2"/>
                <path d="m3 7 9 6 9-6"/>
              </svg>
            </div>
            <div>
              <h4>Email Address</h4>
              <a href="mailto:admin@us4africa.org">
                admin@us4africa.org
              </a>
            </div>
          </div>

          <div class="contact-divider"></div>

          <div class="contact-mission">
            <span class="mission-mark" aria-hidden="true">✦</span>
            <p>
              <strong>US4Africa</strong><br />
              A dedicated 501(c)(3) charitable organization,
              empowering African ministries through support
              and service.
            </p>
          </div>
        </div>

        <!-- CONTACT FORM -->
        <div class="contact-form-panel">
          <span class="eyebrow">SEND US A MESSAGE</span>
          <h3>How Can We Help?</h3>
          <p class="form-intro">
            Complete the form below and tell us how we can
            assist you.
          </p>

          <form @submit.prevent="submitContact">
            <div class="form-row">
              <div class="form-field">
                <label for="contact-name">Full Name *</label>
                <input
                  id="contact-name"
                  v-model.trim="form.name"
                  type="text"
                  placeholder="Enter your name"
                  autocomplete="name"
                  required
                />
              </div>

              <div class="form-field">
                <label for="contact-email">Email Address *</label>
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
              <label for="contact-subject">Subject</label>
              <select id="contact-subject" v-model="form.subject">
                <option value="General Enquiry">General Enquiry</option>
                <option value="Donations">Donations and Giving</option>
                <option value="Volunteering">Volunteering</option>
                <option value="Partnerships">Partnerships and Sponsorship</option>
                <option value="Our Programs">Our Programs</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div class="form-field">
              <label for="contact-message">Your Message *</label>
              <textarea
                id="contact-message"
                v-model.trim="form.message"
                rows="5"
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>

            <button type="submit" class="gold-button submit-button">
              Submit Message
              <span aria-hidden="true">→</span>
            </button>

            <p
              v-if="feedback"
              class="form-feedback"
              role="status"
            >
              {{ feedback }}
            </p>

            <p class="privacy-note">
              Your information will be included in your enquiry
              email. Please do not submit sensitive personal
              information through this form.
            </p>
          </form>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section id="faqs" class="faq-section">
      <div class="section-heading">
        <span class="eyebrow">HOW CAN WE HELP?</span>
        <h2>Frequently Asked Questions</h2>
        <p>
          Find answers to the most common inquiries about our
          mission and operations.
        </p>
      </div>

      <div class="faq-layout">
        <div class="faq-intro">
          <div class="faq-icon" aria-hidden="true">?</div>
          <h3>Have Questions?</h3>
          <p>
            Learn more about our work, how your contributions
            make a difference, and the many ways you can
            support ministries across Africa.
          </p>

          <a href="#get-in-touch" class="text-link">
            Still need help? Contact us
            <span aria-hidden="true">→</span>
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
      <span class="eyebrow">LET'S MAKE A DIFFERENCE</span>
      <h2>Together, We Can Empower Communities</h2>
      <p>
        Your time, generosity, and partnership can help
        transform lives across Africa.
      </p><RouterLink to="/get-involved" class="gold-button">
        Get Involved 
      </RouterLink>
    </section>

  </main>
</template>

<script setup>
import { reactive, ref } from 'vue'

const openFaq = ref(0)
const feedback = ref('')

const faqs = [
  {
    question: 'How can I donate to US4Africa?',
    answer:
      'You can support US4Africa by making a donation directly through our website. We aim to offer secure and convenient payment options. Your contributions help support ministries and community initiatives connected with The Leadership Experience Trust in Africa. Please use our designated donation page to complete your gift.',
  },
  {
    question: 'How can I get involved with US4Africa?',
    answer:
      'There are several ways to get involved, including volunteering, supporting our programs, making a donation, and exploring corporate or ministry partnerships. Visit our Get Involved page to discover opportunities and contact our team to discuss how your skills and resources can support our mission.',
  },
  {
    question: 'What types of support does US4Africa provide?',
    answer:
      'US4Africa supports African ministries through service, partnerships, and charitable giving. Our work may include youth discipleship, children’s outreach, leadership development, and community initiatives through ministry partners. The specific activities supported depend on program needs, available resources, and confirmed partnerships.',
  },
  {
    question: 'Where does my donation go?',
    answer:
      'Donations help fund charitable activities and ministry initiatives supported by US4Africa. Contributions are allocated according to the purpose of the gift, program needs, and applicable financial and governance requirements. If you wish to support a particular initiative, contact our team before donating to confirm the available options.',
  },
  {
    question: 'Are contributions to US4Africa tax-deductible?',
    answer:
      'US4Africa describes itself as a 501(c)(3) charitable organization. However, whether a particular contribution qualifies for a tax deduction depends on applicable tax rules, the donor’s circumstances, and the organization’s current status. Please consult a qualified tax professional and contact US4Africa for the appropriate documentation before claiming a deduction.',
  },
]

const form = reactive({
  name: '',
  email: '',
  subject: 'General Enquiry',
  message: '',
})

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
    'Your email application should open with your message. ' +
    'Please send the email there to complete your enquiry.'

  window.location.href =
    `mailto:admin@us4africa.org?subject=${subject}&body=${body}`
}
</script>

<style scoped>
.contact-page {
  --navy: #102b46;
  --navy-light: #1d4263;
  --gold: #d5a84b;
  --gold-dark: #9b752e;
  --gold-pale: #f8f0df;
  --white: #fff;
  --cream: #faf9f6;
  --text: #2d3a4b;
  --muted: #707d8c;
  --border: #e2e7ed;

  color: var(--text);
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
  color: var(--gold-dark);
  font-size: 0.73rem;
  font-weight: 800;
  letter-spacing: 2px;
  line-height: 1.8;
}

/* Shared button */

.gold-button {
  display: inline-flex;
  min-height: 49px;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 13px 23px;
  border: 1px solid var(--gold);
  border-radius: 4px;
  background: var(--gold);
  color: var(--navy);
  font: inherit;
  font-size: 0.9rem;
  font-weight: 750;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.2s ease;
}

.gold-button:hover {
  transform: translateY(-2px);
  background: #e6bd68;
  color: var(--navy);
}

/* Hero */

.contact-hero {
  position: relative;
  display: flex;
  min-height: 480px;
  align-items: center;
  padding: 90px 9%;
  background:
    linear-gradient(
      90deg,
      rgba(9, 29, 49, 0.96) 0%,
      rgba(16, 43, 70, 0.83) 55%,
      rgba(16, 43, 70, 0.34) 100%
    ),
    url('https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=2000&q=85')
    center / cover no-repeat;
  color: var(--white);
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    0deg,
    rgba(9, 29, 49, 0.25),
    transparent 55%
  );
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 730px;
}

.contact-hero .eyebrow {
  color: var(--gold);
}

.contact-hero h1 {
  margin: 16px 0 20px;
  color: var(--white);
  font-size: clamp(2.7rem, 5.8vw, 4.7rem);
  font-weight: 800;
  letter-spacing: -1.5px;
  line-height: 1.08;
}

.contact-hero p {
  max-width: 570px;
  margin-bottom: 28px;
  color: rgba(255, 255, 255, 0.9);
  font-size: clamp(1.05rem, 2vw, 1.25rem);
}

.hero-decoration {
  position: absolute;
  right: 8%;
  bottom: 12%;
  width: 5px;
  height: 130px;
  background: var(--gold);
}

/* Headings */

.section-heading {
  max-width: 750px;
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

.section-heading > p {
  margin-bottom: 0;
  color: var(--muted);
}

/* FAQs */

.faq-section {
  padding: 90px 8%;
  background: var(--cream);
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
  padding: 30px;
  border-top: 4px solid var(--gold);
  background: var(--navy);
  color: var(--white);
}

.faq-icon {
  display: flex;
  width: 56px;
  height: 56px;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
  border: 1px solid var(--gold);
  border-radius: 50%;
  color: var(--gold);
  font-size: 1.9rem;
  font-weight: 700;
}

.faq-intro h3 {
  margin-bottom: 13px;
  color: var(--white);
  font-size: 1.55rem;
}

.faq-intro p {
  margin-bottom: 25px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.92rem;
}

.text-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--gold-dark);
  font-size: 0.88rem;
  font-weight: 750;
  text-decoration: none;
}

.faq-intro .text-link {
  color: var(--gold);
}

.text-link:hover {
  text-decoration: underline;
}

.faq-list {
  border-top: 1px solid var(--border);
}

.faq-item {
  border-bottom: 1px solid var(--border);
  background: transparent;
}

.faq-question {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 23px 5px;
  border: 0;
  background: transparent;
  color: var(--navy);
  font: inherit;
  font-size: 1rem;
  font-weight: 750;
  text-align: left;
  cursor: pointer;
}

.faq-question:focus-visible {
  outline: 2px solid var(--gold-dark);
  outline-offset: 3px;
}

.faq-toggle {
  display: flex;
  width: 30px;
  height: 30px;
  flex: 0 0 30px;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--border);
  border-radius: 50%;
  color: var(--gold-dark);
  font-size: 1.3rem;
  transition: background 0.2s ease;
}

.is-open .faq-toggle {
  border-color: var(--gold);
  background: var(--gold);
  color: var(--navy);
}

.faq-answer {
  padding: 0 40px 22px 5px;
}

.faq-answer p {
  margin: 0;
  color: var(--muted);
  font-size: 0.93rem;
}

/* Contact details and form */

.get-in-touch-section {
  padding: 90px 8%;
  background: var(--white);
  scroll-margin-top: 30px;
}

.contact-grid {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  align-items: start;
  gap: 35px;
  max-width: 1150px;
  margin: 0 auto;
}

.contact-information {
  padding: 35px;
  border-radius: 5px;
  background: var(--navy);
  color: var(--white);
}

.contact-information .eyebrow {
  color: var(--gold);
}

.contact-info-heading h3 {
  margin: 12px 0;
  color: var(--white);
  font-size: 1.9rem;
  font-weight: 800;
  line-height: 1.25;
}

.contact-info-heading > p {
  margin-bottom: 32px;
  color: rgba(255, 255, 255, 0.78);
  font-size: 0.91rem;
}

.contact-detail {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin: 27px 0;
}

.detail-icon {
  display: flex;
  width: 46px;
  height: 46px;
  flex: 0 0 46px;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(213, 168, 75, 0.55);
  border-radius: 50%;
  color: var(--gold);
}

.detail-icon svg {
  width: 21px;
  height: 21px;
}

.contact-detail h4 {
  margin: 2px 0 7px;
  color: var(--white);
  font-size: 0.95rem;
  font-weight: 750;
}

.contact-detail p,
.contact-detail a {
  margin: 0;
  color: rgba(255, 255, 255, 0.78);
  font-size: 0.9rem;
  line-height: 1.7;
  overflow-wrap: anywhere;
}

.contact-detail a {
  text-decoration: none;
}

.contact-detail a:hover {
  color: var(--gold);
  text-decoration: underline;
}

.contact-divider {
  height: 1px;
  margin: 32px 0 25px;
  background: rgba(255, 255, 255, 0.18);
}

.contact-mission {
  display: flex;
  align-items: flex-start;
  gap: 14px;
}

.mission-mark {
  color: var(--gold);
  font-size: 1.7rem;
}

.contact-mission p {
  margin-bottom: 0;
  color: rgba(255, 255, 255, 0.78);
  font-size: 0.86rem;
}

.contact-mission strong {
  color: var(--white);
}

.contact-form-panel {
  padding: 35px;
  border: 1px solid var(--border);
  border-radius: 5px;
  background: var(--white);
  box-shadow: 0 10px 35px rgba(16, 43, 70, 0.06);
}

.contact-form-panel > .eyebrow {
  color: var(--gold-dark);
}

.contact-form-panel h3 {
  margin: 12px 0 8px;
  color: var(--navy);
  font-size: 1.9rem;
  font-weight: 800;
}

.form-intro {
  margin-bottom: 28px;
  color: var(--muted);
  font-size: 0.9rem;
}

.contact-form-panel form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.form-field {
  display: flex;
  min-width: 0;
  flex-direction: column;
  gap: 8px;
}

.form-field label {
  color: var(--navy);
  font-size: 0.85rem;
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
  font-size: 0.9rem;
}

.form-field input::placeholder,
.form-field textarea::placeholder {
  color: #9aa4b0;
}

.form-field input:focus,
.form-field select:focus,
.form-field textarea:focus {
  border-color: var(--gold-dark);
  outline: 2px solid rgba(213, 168, 75, 0.18);
}

.form-field textarea {
  resize: vertical;
}

.submit-button {
  width: 100%;
  margin-top: 3px;
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
  font-size: 0.76rem;
  line-height: 1.65 !important;
}

/* Final call to action */

.contact-cta {
  padding: 75px 8%;
  background: var(--navy);
  color: var(--white);
  text-align: center;
}

.contact-cta .eyebrow {
  color: var(--gold);
}

.contact-cta h2 {
  max-width: 800px;
  margin: 15px auto;
  color: var(--white);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  line-height: 1.2;
}

.contact-cta p {
  max-width: 650px;
  margin: 0 auto 27px;
  color: rgba(255, 255, 255, 0.8);
}

/* Responsive */

@media (max-width: 900px) {
  .faq-layout {
    grid-template-columns: 1fr;
    gap: 35px;
  }

  .faq-intro {
    max-width: none;
  }

  .contact-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  .contact-hero {
    min-height: 420px;
    padding: 65px 24px;
    background-position: 60% center;
  }

  .contact-hero h1 {
    letter-spacing: -0.8px;
  }

  .hero-decoration {
    right: 16px;
    bottom: 8%;
    height: 80px;
  }

  .faq-section,
  .get-in-touch-section {
    padding: 65px 22px;
  }

  .section-heading {
    margin-bottom: 35px;
  }

  .faq-intro,
  .contact-information,
  .contact-form-panel {
    padding: 25px 22px;
  }

  .faq-question {
    padding: 20px 0;
    font-size: 0.93rem;
  }

  .faq-answer {
    padding-right: 10px;
  }

  .form-row {
    grid-template-columns: 1fr;
  }

  .contact-cta {
    padding: 65px 24px;
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
