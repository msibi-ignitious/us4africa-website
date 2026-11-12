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
          <button
            type="button"
            class="primary-button"
            @click="openDonationModal"
          >
            Donate Now
          </button>

          <button
            type="button"
            class="outline-button"
            @click="openVolunteerModal"
          >
            Volunteer
          </button>
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
              <button
                type="button"
                class="primary-button donate-button"
                @click="openDonation(item)"
              >
                {{ item.buttonText || 'Donate Now' }}
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
          class="primary-button"
          @click="openVolunteerModal"
        >
          Register Your Interest
        </button>
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
      <button
        type="button"
        class="primary-button"
        @click="openDonationModal"
      >
        GIVE TODAY
      </button>

    </section>
    <VolunteerModal v-model="isVolunteerModalOpen" />
    <DonationModal
      v-model="isDonationModalOpen"
      :initial-type="selectedDonationType"
      @donate="continueToDonation"
    />
    <ChurchInquiryModal
      v-model="isChurchInquiryModalOpen"
      @submit="handleChurchInquiry"
    />
  </main>

</template>



<script setup>
  import { reactive, ref } from 'vue'
  import { useRouter } from 'vue-router'

  import VolunteerModal from '../components/VolunteerModal.vue'
  import DonationModal from '../components/DonationModal.vue'
  import ChurchInquiryModal from '../components/ChurchInquiryModal.vue'

  // Router
  const router = useRouter()

  // WhatsApp
  const WHATSAPP_NUMBER = '27737822117'

  // Donation options
  const donationOptions = [
    {
      id: 'prayer-support',
      title: 'Prayer Support',
      category: 'STAND WITH US IN PRAYER',
      description:
        'Become a Prayer Partner through our WhatsApp community and receive regular prayer updates.',
      symbol: '✝',
      imageClass: 'church-support-image',
      image: '/src/assets/pray.jpeg',
      imageAlt: 'Church community gathered together',
      action: 'whatsapp',
      buttonText: 'Join Prayer Community',
    },
    {
      id: 'once-off',
      title: 'Financial Donation',
      category: 'MAKE A DIFFERENCE',
      description:
        'Make a contribution towards initiatives that serve people and communities across Africa.',
      symbol: '♡',
      imageClass: 'onceoff-image',
      image:
        'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=900&q=85',
      imageAlt: 'Volunteers participating in community service',
      buttonText: 'Donate Now',
    },
    {
      id: 'church-support',
      title: 'Church Support',
      category: 'PARTNER WITH US',
      description:
        'Partner with US4Africa through prayer, outreach initiatives and funding.',
      symbol: '✝',
      imageClass: 'church-partnership-image',
      image: 'https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&w=900&q=85',
      imageAlt: 'Church congregation gathered for worship',
      action: 'church-inquiry',
      buttonText: 'Register Your Church',
    },
  ]

  // Enquiry form
  const form = reactive({
    name: '',
    email: '',
    interest: 'General Enquiry',
    message: '',
  })

  const formFeedback = ref('')

  // Modal state
  const isDonationModalOpen = ref(false)
  const isVolunteerModalOpen = ref(false)
  const isChurchInquiryModalOpen = ref(false)
  // Default donation frequency
  const selectedDonationType = ref('once')

  // Open donation modal
  function openDonationModal(type = 'once') {
    selectedDonationType.value = type
    isDonationModalOpen.value = true
  }

  // Open volunteer modal
  function openVolunteerModal() {
    isVolunteerModalOpen.value = true
  }

  // Handle donation card selection
  function openDonation(item) {
    if (!item) return

    if (item.action === 'whatsapp') {
      joinChurchSupporters()
      return
    }

    if (item.action === 'church-inquiry') {
      console.log('Opening Church Inquiry Modal')
      isChurchInquiryModalOpen.value = true
      return
    }

    openDonationModal('once')
  }
  // Navigate to donation page after modal submission
  function continueToDonation(donationDetails) {
    router.push({
      name: 'donate',
      query: {
        amount: donationDetails.amount,
        type: donationDetails.type,
        designation: donationDetails.designation,
      },
    }).catch((error) => {
      console.error('Donation navigation failed:', error)
    })
  }

  // Open WhatsApp prayer support community
  function joinChurchSupporters() {
    const message = encodeURIComponent(
      'Hello US4Africa! I am interested in joining the Church Supporters community. Please share more information with me.'
    )

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }
</script>


<style scoped>
  .get-involved-page {
    --purple: #542477;
    --purple-dark: #35134f;
    --purple-light: #75449a;
    --red: #d62839;
    --red-dark: #b91f30;
    --red-pale: #fff0f1;
    --purple-pale: #f4eef8;
    --white: #ffffff;
    --surface: #fbf9fc;
    --text: #30263a;
    --muted: #716879;
    --border: #e9e2ee;
    --shadow: 0 14px 38px rgba(53, 19, 79, 0.09);

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
    color: var(--red);
    font-size: 0.73rem;
    font-weight: 800;
    letter-spacing: 2px;
    line-height: 1.7;
    text-transform: uppercase;
  }

  .primary-button,
  .outline-button,
  .sponsor-button {
    display: inline-flex;
    min-height: 48px;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 12px 23px;
    border: 1px solid var(--red);
    border-radius: 5px;
    cursor: pointer;
    font: inherit;
    font-size: 0.9rem;
    font-weight: 750;
    text-align: center;
    text-decoration: none;
    transition: transform 0.2s ease, background 0.2s ease, color 0.2s ease,
      box-shadow 0.2s ease;
  }

  .primary-button {
    background: var(--red);
    color: var(--white);
    box-shadow: 0 7px 18px rgba(214, 40, 57, 0.16);
  }

  .primary-button:hover {
    transform: translateY(-2px);
    background: var(--red-dark);
    border-color: var(--red-dark);
    color: var(--white);
    box-shadow: 0 10px 22px rgba(214, 40, 57, 0.22);
  }

  .outline-button {
    border-color: rgba(255, 255, 255, 0.75);
    background: transparent;
    color: var(--white);
  }

  .outline-button:hover {
    background: var(--white);
    color: var(--purple);
  }

  .give-hero {
    position: relative;
    display: flex;
    min-height: min(760px, 88vh);
    align-items: center;
    padding: 100px 9%;
    background:
      linear-gradient(90deg, rgba(42, 15, 63, 0.96), rgba(69, 29, 96, 0.82) 56%, rgba(69, 29, 96, 0.28)),
      url('https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=2000&q=90')
        center / cover no-repeat;
    color: var(--white);
  }

  .hero-shade {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, transparent 68%, rgba(42, 15, 63, 0.22));
    pointer-events: none;
  }

  .hero-content {
    position: relative;
    z-index: 1;
    max-width: 760px;
  }

  .give-hero .eyebrow,
  .photo-caption .eyebrow,
  .closing-cta .eyebrow {
    color: #ffb8c0;
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
    max-width: 620px;
    margin-bottom: 30px;
    color: rgba(255, 255, 255, 0.9);
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
    background: var(--red);
    opacity: 0.95;
  }

  .section-heading {
    max-width: 760px;
    margin: 0 auto 48px;
    text-align: center;
  }

  .section-heading h2 {
    margin: 12px 0;
    color: var(--purple);
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 800;
    line-height: 1.2;
  }

  .section-heading p {
    margin-bottom: 0;
    color: var(--muted);
  }

  .donations-section,
  .sponsorship-section,
  .contact-section {
    padding: 88px 8%;
    scroll-margin-top: 90px;
  }

  .donations-section {
    background: var(--white);
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
    border-radius: 9px;
    background: var(--white);
    box-shadow: 0 8px 25px rgba(53, 19, 79, 0.055);
    transition: transform 0.22s ease, box-shadow 0.22s ease;
  }

  .donation-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow);
  }

  .donation-image {
    position: relative;
    height: 205px;
    overflow: hidden;
    background: var(--purple);
  }

  .donation-image img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }

  .donation-card:hover .donation-image img {
    transform: scale(1.045);
  }

  .donation-symbol {
    position: absolute;
    right: 18px;
    bottom: 16px;
    display: flex;
    width: 46px;
    height: 46px;
    align-items: center;
    justify-content: center;
    border: 2px solid var(--white);
    border-radius: 50%;
    background: var(--red);
    color: var(--white);
    font-size: 1.4rem;
  }

  .donation-card-content {
    display: flex;
    min-height: 280px;
    flex-direction: column;
    padding: 25px;
  }

  .donation-category {
    color: var(--red);
    font-size: 0.7rem;
    font-weight: 800;
    letter-spacing: 1.4px;
  }

  .donation-card h3 {
    margin: 10px 0;
    color: var(--purple);
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
    color: var(--purple);
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

  .sponsorship-section {
    background: var(--surface);
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
    border-radius: 9px;
    background: var(--white);
    box-shadow: 0 8px 24px rgba(53, 19, 79, 0.045);
  }

  .sponsor-card.silver {
    border: 2px solid var(--purple-light);
    box-shadow: 0 15px 35px rgba(53, 19, 79, 0.11);
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
    border-color: #a66b50;
    color: #a66b50;
  }

  .silver .sponsor-emblem {
    border-color: var(--purple-light);
    color: var(--purple-light);
  }

  .gold .sponsor-emblem {
    border-color: var(--red);
    color: var(--red);
  }

  .sponsor-level {
    color: var(--muted);
    font-size: 0.7rem;
    font-weight: 800;
    letter-spacing: 1.8px;
  }

  .sponsor-top h3 {
    margin: 12px 0;
    color: var(--purple);
    font-size: 1.45rem;
  }

  .sponsor-price {
    margin: 15px 0 4px;
    color: var(--purple);
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
    background: var(--purple);
    color: var(--white);
    font-size: 0.7rem;
    font-weight: 850;
    letter-spacing: 1.8px;
    text-align: center;
  }

  .sponsor-benefits {
    flex: 1;
    padding: 24px;
    border-top: 1px solid var(--border);
    background: var(--white);
  }

  .sponsor-benefits h4 {
    margin-bottom: 17px;
    color: var(--purple);
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
    color: var(--red);
    content: "✓";
    font-weight: 800;
  }

  .sponsor-button {
    width: calc(100% - 48px);
    margin: 0 24px 25px;
    border-color: var(--purple);
    background: transparent;
    color: var(--purple);
  }

  .sponsor-button:hover {
    background: var(--purple-pale);
    color: var(--purple-dark);
  }

  .sponsor-card.silver .sponsor-button {
    border-color: var(--red);
    background: var(--red);
    color: var(--white);
  }

  .sponsor-card.silver .sponsor-button:hover {
    background: var(--red-dark);
  }

  .volunteer-section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: stretch;
    gap: clamp(40px, 6vw, 85px);
    padding: 95px 9%;
    background: var(--white);
    scroll-margin-top: 90px;
  }

  .volunteer-photo {
    position: relative;
    min-height: 480px;
    overflow: hidden;
    border-radius: 8px;
    background: var(--purple);
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
    background: linear-gradient(transparent, rgba(42, 15, 63, 0.94));
    color: var(--white);
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
    color: var(--purple);
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 800;
    line-height: 1.2;
  }

  .volunteer-content > p {
    color: var(--muted);
  }

  .volunteer-content .volunteer-lead {
    margin-bottom: 13px;
    color: var(--purple);
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
    background: var(--red-pale);
    color: var(--red);
    font-size: 0.8rem;
    font-weight: 800;
  }

  .contact-section {
    background: var(--purple-pale);
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
    border-radius: 9px;
    background: var(--white);
    box-shadow: 0 8px 25px rgba(53, 19, 79, 0.045);
  }

  .contact-information h3,
  .contact-form-panel h3 {
    margin: 12px 0 15px;
    color: var(--purple);
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
    background: var(--red-pale);
    color: var(--red);
    font-size: 1.2rem;
  }

  .detail-label {
    display: block;
    margin-bottom: 5px;
    color: var(--purple);
    font-size: 0.88rem;
    font-weight: 800;
  }

  .contact-detail a {
    color: var(--red-dark);
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
    border-radius: 7px;
  }

  .map-panel-heading {
    padding: 20px;
  }

  .map-panel-heading h4 {
    margin-bottom: 8px;
    color: var(--purple);
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
    background: var(--surface);
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
    color: var(--purple);
    font-size: 0.86rem;
    font-weight: 750;
  }

  .form-field input,
  .form-field select,
  .form-field textarea {
    width: 100%;
    min-width: 0;
    padding: 13px 14px;
    border: 1px solid #d9d1e0;
    border-radius: 5px;
    background: var(--white);
    color: var(--text);
    font: inherit;
    font-size: 0.91rem;
  }

  .form-field input:focus,
  .form-field select:focus,
  .form-field textarea:focus {
    border-color: var(--purple-light);
    outline: 3px solid rgba(117, 68, 154, 0.14);
  }

  .form-field textarea {
    resize: vertical;
  }

  .submit-button {
    width: 100%;
  }

  .form-feedback {
    margin: 0;
    color: var(--purple);
    font-size: 0.85rem;
    overflow-wrap: anywhere;
  }

  .privacy-note {
    margin: 0;
    color: var(--muted);
    font-size: 0.77rem;
    line-height: 1.6 !important;
  }

  .closing-cta {
    padding: 78px 8%;
    background: var(--purple-dark);
    color: var(--white);
    text-align: center;
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
    color: rgba(255, 255, 255, 0.84);
  }

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

  @media (max-width: 640px) {
    .give-hero {
      min-height: 500px;
      padding: 70px 24px;
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
