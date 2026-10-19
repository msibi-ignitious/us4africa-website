
<script setup>
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const gifts = [
  {
    id: 'once50',
    title: 'One-Time Donation',
    amount: 50,
    frequency: 'One time',
    category: 'Individual Giving',
    description: 'Make a single contribution to support our mission.',
  },
  {
    id: 'monthly25',
    title: 'Monthly Supporter',
    amount: 25,
    frequency: 'Monthly',
    category: 'Individual Giving',
    description: 'Provide consistent support through monthly giving.',
  },
  {
    id: 'partner100',
    title: 'Corporate Partnership',
    amount: 100,
    frequency: 'One time',
    category: 'Partnership',
    description: 'Help us expand our reach through corporate support.',
  },
  {
    id: 'bronze',
    title: 'Bronze Sponsorship',
    amount: 500,
    frequency: 'One time',
    category: 'Corporate Sponsorship',
    description: 'Website recognition, newsletter feature and social media recognition.',
  },
  {
    id: 'silver',
    title: 'Silver Sponsorship',
    amount: 1000,
    frequency: 'One time',
    category: 'Corporate Sponsorship',
    description: 'All Bronze benefits, plus logo placement on event materials and a quarterly impact report.',
  },
  {
    id: 'gold',
    title: 'Gold Sponsorship',
    amount: 2500,
    frequency: 'One time',
    category: 'Corporate Sponsorship',
    description: 'All Silver benefits, plus a dedicated website feature and invitations to exclusive events.',
  },
]

// Replace each value with the matching pre-filled Donorbox link.
// Create these links in Donorbox using its "Link to Donation Page" settings.
const donorboxLinks = {
  once50: 'PASTE_DONORBOX_LINK_FOR_50_ONE_TIME',
  monthly25: 'PASTE_DONORBOX_LINK_FOR_25_MONTHLY',
  partner100: 'PASTE_DONORBOX_LINK_FOR_100_PARTNERSHIP',
  bronze: 'PASTE_DONORBOX_LINK_FOR_500_BRONZE',
  silver: 'PASTE_DONORBOX_LINK_FOR_1000_SILVER',
  gold: 'PASTE_DONORBOX_LINK_FOR_2500_GOLD',
}

function getGiftFromQuery() {
  const type = String(route.query.type || '').toLowerCase()
  const amount = Number(route.query.amount || 0)

  if (type.includes('bronze') || amount === 500) return 'bronze'
  if (type.includes('silver') || amount === 1000) return 'silver'
  if (type.includes('gold') || amount === 2500) return 'gold'
  if (type.includes('monthly') || type.includes('recurring')) return 'monthly25'
  if (type.includes('corporate partnership') || amount === 100) return 'partner100'
  if (amount === 25) return 'monthly25'
  if (amount === 50) return 'once50'

  return 'once50'
}

const selectedGiftId = ref(getGiftFromQuery())

watch(
  () => [route.query.amount, route.query.type],
  () => {
    selectedGiftId.value = getGiftFromQuery()
  }
)

const selectedGift = computed(
  () => gifts.find((gift) => gift.id === selectedGiftId.value) || gifts[0]
)

const checkoutUrl = computed(
  () => donorboxLinks[selectedGiftId.value]
)

const checkoutReady = computed(() => {
  return (
    typeof checkoutUrl.value === 'string' &&
    checkoutUrl.value.startsWith('https://') &&
    !checkoutUrl.value.includes('PASTE_DONORBOX_LINK')
  )
})

const formatAmount = (amount) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(amount)
</script>

<template>
  <main class="donate-page">
    <!-- Hero -->
    <section class="donate-hero">
      <div class="hero-content">
        <p class="eyebrow">GIVE WITH PURPOSE</p>
        <h1>Make a Difference That Lasts</h1>
        <p>
          Your generosity empowers African ministries through support,
          service and lasting partnerships.
        </p>
        <a href="#giving-options" class="btn-gold">Choose How to Give</a>
      </div>
    </section>

    <!-- Introduction -->
    <section class="intro-section">
      <p class="eyebrow">SUPPORT OUR MISSION</p>
      <h2>Every Gift Helps Move the Mission Forward</h2>
      <p class="intro-copy">
        Whether you make a once-off donation, give monthly or partner with us
        as a corporate sponsor, your contribution helps support the work of
        ministries and communities across Africa.
      </p>
    </section>

    <!-- Giving options -->
    <section id="giving-options" class="giving-section">
      <div class="section-heading">
        <p class="eyebrow">YOUR GIVING OPTIONS</p>
        <h2>Choose How You Would Like to Give</h2>
        <p>Select an option below to see your giving details.</p>
      </div>

      <div class="giving-grid">
        <button
          v-for="gift in gifts"
          :key="gift.id"
          type="button"
          class="giving-card"
          :class="{ selected: selectedGiftId === gift.id }"
          :aria-pressed="selectedGiftId === gift.id"
          @click="selectedGiftId = gift.id"
        >
          <span class="gift-category">{{ gift.category }}</span>
          <h3>{{ gift.title }}</h3>
          <p class="gift-amount">{{ formatAmount(gift.amount) }}</p>
          <p class="gift-frequency">{{ gift.frequency }}</p>
          <p class="gift-description">{{ gift.description }}</p>
          <span class="select-label">
            {{ selectedGiftId === gift.id ? 'Selected' : 'Select this option' }}
          </span>
        </button>
      </div>
    </section>

    <!-- Selected gift / checkout -->
    <section class="checkout-section">
      <div class="checkout-copy">
        <p class="eyebrow">YOUR CONTRIBUTION</p>
        <h2>Ready to Make an Impact?</h2>
        <p>
          Review your selected giving option before continuing to secure
          checkout.
        </p>
      </div>

      <div class="checkout-card">
        <div class="checkout-card-top">
          <span class="selected-pill">Your selection</span>
          <h3>{{ selectedGift.title }}</h3>
          <p class="checkout-amount">
            {{ formatAmount(selectedGift.amount) }}
          </p>
          <p class="checkout-frequency">{{ selectedGift.frequency }}</p>
        </div>

        <p class="checkout-description">
          {{ selectedGift.description }}
        </p>

        <a
          v-if="checkoutReady"
          :href="checkoutUrl"
          class="btn-gold checkout-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Continue to Secure Donation
          <span aria-hidden="true">↗</span>
        </a>

        <div v-else class="setup-notice">
          <strong>Secure checkout setup required</strong>
          <p>
            This option is selected and ready to connect. Add its matching
            pre-filled Donorbox link in <code>Donate.vue</code> to activate
            the checkout button.
          </p>
        </div>

        <p class="secure-note">
          Your payment will be processed through your configured Donorbox
          donation page. You will leave this website to complete checkout.
        </p>
      </div>
    </section>

    <!-- Sponsorship benefits -->
    <section class="sponsor-section">
      <div class="section-heading">
        <p class="eyebrow">PARTNER WITH US</p>
        <h2>Corporate Sponsorship</h2>
        <p>
          Businesses can support our mission while receiving recognition
          appropriate to their sponsorship level.
        </p>
      </div>

      <div class="sponsor-grid">
        <article class="sponsor-card">
          <span class="tier-label">BRONZE</span>
          <h3>Bronze Sponsor</h3>
          <p class="sponsor-amount">$500</p>
          <ul>
            <li>Recognition on our website</li>
            <li>Feature in our monthly newsletter</li>
            <li>Social media recognition</li>
          </ul>
          <button type="button" class="btn-outline" @click="selectedGiftId = 'bronze'; document.getElementById('giving-options')?.scrollIntoView({ behavior: 'smooth' })">
            Select Bronze
          </button>
        </article>

        <article class="sponsor-card featured">
          <span class="tier-label">SILVER</span>
          <h3>Silver Sponsor</h3>
          <p class="sponsor-amount">$1,000</p>
          <ul>
            <li>All Bronze benefits</li>
            <li>Logo on event materials</li>
            <li>Quarterly impact report</li>
          </ul>
          <button type="button" class="btn-gold" @click="selectedGiftId = 'silver'; document.getElementById('giving-options')?.scrollIntoView({ behavior: 'smooth' })">
            Select Silver
          </button>
        </article>

        <article class="sponsor-card">
          <span class="tier-label">GOLD</span>
          <h3>Gold Sponsor</h3>
          <p class="sponsor-amount">$2,500</p>
          <ul>
            <li>All Silver benefits</li>
            <li>Dedicated website feature</li>
            <li>Invitations to exclusive events</li>
          </ul>
          <button type="button" class="btn-outline" @click="selectedGiftId = 'gold'; document.getElementById('giving-options')?.scrollIntoView({ behavior: 'smooth' })">
            Select Gold
          </button>
        </article>
      </div>
    </section>

    <!-- Closing CTA -->
    <section class="donate-cta">
      <p class="eyebrow">THANK YOU FOR GIVING</p>
      <h2>Together, We Can Help Communities Thrive</h2>
      <p>
        Thank you for considering a gift to US4Africa. Your support helps
        strengthen the ministries and communities we serve.
      </p>
      <a href="#giving-options" class="btn-gold">Choose Your Gift</a>
    </section>
  </main>
</template>

<style scoped>
:global(html) {
  scroll-behavior: smooth;
}

.donate-page {
  color: #17243d;
  background: #fff;
  font-family: inherit;
}

.donate-hero {
  min-height: 450px;
  display: flex;
  align-items: center;
  padding: 80px 8%;
  color: #fff;
  background:
    linear-gradient(90deg, rgba(8, 24, 54, .92), rgba(8, 24, 54, .55)),
    url('/donate.jpg') center/cover no-repeat;
}

.hero-content {
  width: 100%;
  max-width: 760px;
}

.eyebrow {
  margin: 0 0 12px;
  color: #b58a35;
  font-size: .78rem;
  font-weight: 800;
  letter-spacing: .16em;
  text-transform: uppercase;
}

.donate-hero h1 {
  margin: 0 0 20px;
  font-size: clamp(2.5rem, 5vw, 4.3rem);
  font-weight: 800;
  line-height: 1.08;
}

.donate-hero p:not(.eyebrow) {
  max-width: 620px;
  font-size: 1.12rem;
  line-height: 1.8;
}

.btn-gold,
.btn-outline {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 5px;
  padding: 13px 22px;
  font-size: .95rem;
  font-weight: 750;
  text-decoration: none;
  cursor: pointer;
  transition: transform .2s ease, background .2s ease;
}

.btn-gold {
  border: 1px solid #c69a43;
  background: #c69a43;
  color: #102140;
}

.btn-gold:hover {
  background: #d9b461;
  color: #102140;
  transform: translateY(-2px);
}

.btn-outline {
  border: 1px solid #172e54;
  background: transparent;
  color: #172e54;
}

.btn-outline:hover {
  background: #172e54;
  color: #fff;
}

.intro-section,
.giving-section,
.sponsor-section {
  padding: 78px 7%;
}

.intro-section {
  max-width: 1050px;
  margin: 0 auto;
  text-align: center;
}

.intro-section h2,
.section-heading h2,
.checkout-copy h2,
.donate-cta h2 {
  margin: 0 0 16px;
  color: #142747;
  font-size: clamp(1.8rem, 3vw, 2.6rem);
  font-weight: 800;
  line-height: 1.2;
}

.intro-copy {
  max-width: 800px;
  margin: 0 auto;
  color: #5a6576;
  line-height: 1.8;
}

.giving-section {
  background: #f5f7fa;
}

.section-heading {
  max-width: 780px;
  margin: 0 auto 38px;
  text-align: center;
}

.section-heading > p:last-child,
.checkout-copy > p:last-child,
.donate-cta > p:not(.eyebrow) {
  color: #5d6879;
  line-height: 1.8;
}

.giving-grid,
.sponsor-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
  max-width: 1200px;
  margin: 0 auto;
}

.giving-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 285px;
  padding: 26px;
  border: 1px solid #e0e5ec;
  border-radius: 10px;
  background: #fff;
  color: #17243d;
  text-align: left;
  cursor: pointer;
  box-shadow: 0 5px 22px rgba(18, 38, 68, .04);
  transition: border-color .2s ease, transform .2s ease, box-shadow .2s ease;
}

.giving-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 28px rgba(18, 38, 68, .08);
}

.giving-card.selected {
  border: 2px solid #c69a43;
  padding: 25px;
  box-shadow: 0 10px 25px rgba(198, 154, 67, .12);
}

.gift-category,
.tier-label {
  color: #a77b26;
  font-size: .74rem;
  font-weight: 800;
  letter-spacing: .09em;
  text-transform: uppercase;
}

.giving-card h3,
.sponsor-card h3 {
  margin: 15px 0 8px;
  color: #142747;
  font-size: 1.2rem;
  font-weight: 800;
}

.gift-amount,
.sponsor-amount {
  margin: 5px 0 0;
  color: #142747;
  font-size: 2rem;
  font-weight: 850;
}

.gift-frequency,
.checkout-frequency {
  margin: 2px 0 12px;
  color: #7a8492;
  font-size: .9rem;
}

.gift-description {
  margin: 0 0 18px;
  color: #5d6879;
  font-size: .95rem;
  line-height: 1.65;
}

.select-label {
  margin-top: auto;
  color: #142747;
  font-size: .9rem;
  font-weight: 800;
}

.checkout-section {
  display: grid;
  grid-template-columns: 1fr minmax(320px, 470px);
  align-items: center;
  gap: 50px;
  padding: 85px 8%;
  background: #fff;
}

.checkout-copy {
  max-width: 560px;
}

.checkout-card {
  padding: 30px;
  border: 1px solid #e0e5ec;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 14px 40px rgba(18, 38, 68, .09);
}

.selected-pill {
  display: inline-block;
  margin-bottom: 14px;
  padding: 6px 10px;
  border-radius: 20px;
  background: #f5eddd;
  color: #80601d;
  font-size: .77rem;
  font-weight: 800;
}

.checkout-card h3 {
  margin: 0;
  color: #142747;
  font-size: 1.35rem;
}

.checkout-amount {
  margin: 8px 0 0;
  color: #142747;
  font-size: 2.5rem;
  font-weight: 850;
}

.checkout-description {
  margin: 18px 0 22px;
  color: #5d6879;
  line-height: 1.7;
}

.checkout-button {
  width: 100%;
  box-sizing: border-box;
}

.setup-notice {
  padding: 15px;
  border-radius: 6px;
  background: #f5f7fa;
  color: #35445b;
  font-size: .9rem;
  line-height: 1.6;
}

.setup-notice p {
  margin: 7px 0 0;
}

.secure-note {
  margin: 16px 0 0;
  color: #788292;
  font-size: .8rem;
  line-height: 1.6;
}

.sponsor-section {
  background: #f5f7fa;
}

.sponsor-card {
  display: flex;
  flex-direction: column;
  padding: 30px;
  border: 1px solid #e1e5eb;
  border-radius: 10px;
  background: #fff;
}

.sponsor-card.featured {
  border: 2px solid #c69a43;
}

.sponsor-card ul {
  flex: 1;
  margin: 20px 0 28px;
  padding-left: 20px;
  color: #5d6879;
  line-height: 1.9;
}

.sponsor-card .btn-gold,
.sponsor-card .btn-outline {
  width: 100%;
  box-sizing: border-box;
}

.donate-cta {
  padding: 80px 7%;
  background: #102140;
  color: #fff;
  text-align: center;
}

.donate-cta h2 {
  max-width: 780px;
  margin-right: auto;
  margin-left: auto;
  color: #fff;
}

.donate-cta > p:not(.eyebrow) {
  max-width: 700px;
  margin: 0 auto 28px;
  color: #d6dce6;
}

@media (max-width: 900px) {
  .giving-grid,
  .sponsor-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .checkout-section {
    grid-template-columns: 1fr;
    gap: 25px;
  }
}

@media (max-width: 600px) {
  .donate-hero {
    min-height: 400px;
    padding: 65px 24px;
  }

  .intro-section,
  .giving-section,
  .sponsor-section {
    padding: 58px 22px;
  }

  .giving-grid,
  .sponsor-grid {
    grid-template-columns: 1fr;
  }

  .checkout-section {
    padding: 60px 22px;
  }

  .checkout-card {
    padding: 23px;
  }

  .donate-cta {
    padding: 60px 22px;
  }
}
</style>
