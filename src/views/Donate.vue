
<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { onMounted, nextTick } from 'vue'


const route = useRoute()

type Frequency = 'once' | 'monthly'

const frequency = ref<Frequency>('once')
const selectedAmount = ref(50)
const customAmount = ref<number | null>(null)
const designation = ref('where-needed')
const dedicationEnabled = ref(false)


const donor = ref({
  firstName: '',
  lastName: '',
  email: '',
  country: '',
})

const dedication = ref({
  recipientName: '',
  message: '',
})

const countries = [
  'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola',
  'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia',
  'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh',
  'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan',
  'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil',
  'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cabo Verde',
  'Cambodia', 'Cameroon', 'Canada', 'Central African Republic',
  'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo',
  'Costa Rica', 'Côte d’Ivoire', 'Croatia', 'Cuba', 'Cyprus',
  'Czechia', 'Democratic Republic of the Congo', 'Denmark',
  'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador',
  'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea',
  'Estonia', 'Eswatini', 'Ethiopia', 'Fiji', 'Finland',
  'France', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana',
  'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau',
  'Guyana', 'Haiti', 'Honduras', 'Hungary', 'Iceland', 'India',
  'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy',
  'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati',
  'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho',
  'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg',
  'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta',
  'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico',
  'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro',
  'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 'Nauru', 'Nepal',
  'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria',
  'North Korea', 'North Macedonia', 'Norway', 'Oman', 'Pakistan',
  'Palau', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay',
  'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania',
  'Russia', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia',
  'Saint Vincent and the Grenadines', 'Samoa', 'San Marino',
  'São Tomé and Príncipe', 'Saudi Arabia', 'Senegal', 'Serbia',
  'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia',
  'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa',
  'South Korea', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan',
  'Suriname', 'Sweden', 'Switzerland', 'Syria', 'Taiwan',
  'Tajikistan', 'Tanzania', 'Thailand', 'Timor-Leste', 'Togo',
  'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Türkiye',
  'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine',
  'United Arab Emirates', 'United Kingdom', 'United States',
  'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City',
  'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe'
].sort((a, b) => a.localeCompare(b));

const amounts = [25, 50, 100, 250]

const designations = [
  { value: 'where-needed', label: 'Where Most Needed', description: 'Support the areas where help is needed most.' },
  { value: 'youth', label: 'Youth Discipleship', description: 'Help equip and disciple the next generation.' },
  { value: 'children', label: 'Children Outreach ', description: 'Support children through teaching, activities and care.' },
  { value: 'general', label: 'General Ministry Support', description: 'Strengthen the ministries and communities we serve.' },
  { value: 'leadership', label: 'Leadership Development', description: 'Develop future leaders for African communities.' },
]

const sponsorships = [
  {
    id: 'bronze',
    name: 'Bronze',
    amount: 500,
    benefits: ['Recognition on our website', 'Monthly newsletter feature', 'Social media recognition'],
  },
  {
    id: 'silver',
    name: 'Silver',
    amount: 1000,
    benefits: ['All Bronze benefits', 'Logo on event materials', 'Quarterly impact report'],
  },
  {
    id: 'gold',
    name: 'Gold',
    amount: 2500,
    benefits: ['All Silver benefits', 'Dedicated website feature', 'Invitations to exclusive events'],
  },
]

const currentAmount = computed(() => {
  return customAmount.value !== null ? customAmount.value : selectedAmount.value
})

const formattedAmount = computed(() =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2,
  }).format(currentAmount.value || 0),
)

const selectedDesignation = computed(() =>
  designations.find(item => item.value === designation.value)?.label || 'Where Most Needed',
)


const touched = ref<Record<string, boolean>>({})

const fieldErrors = computed(() => ({
  amount: isValidAmount.value
    ? ''
    : 'Please enter an amount of at least $1.',
  firstName: donor.value.firstName.trim()
    ? ''
    : 'Please enter your first name.',
  lastName: donor.value.lastName.trim()
    ? ''
    : 'Please enter your last name.',
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(donor.value.email.trim())
    ? ''
    : 'Please enter a valid email address.',
  country: donor.value.country
    ? ''
    : 'Please select your country.',
}))

const isValidAmount = computed(() =>
  Number.isFinite(currentAmount.value) && currentAmount.value >= 1,
)

const isDonorDetailsValid = computed(() =>
  donor.value.firstName.trim() !== '' &&
  donor.value.lastName.trim() !== '' &&
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(donor.value.email.trim()) &&
  donor.value.country !== '',
)


const isFormValid = computed(() =>
  isValidAmount.value &&
  isDonorDetailsValid.value &&
  Boolean(designation.value) &&
  Boolean(frequency.value)
)

function markTouched(field: string) {
  touched.value[field] = true
}

function showError(field: keyof typeof fieldErrors.value) {
  return touched.value[field] && fieldErrors.value[field]
} 

function selectAmount(amount: number) {
  selectedAmount.value = amount
  customAmount.value = null
}

function updateCustomAmount() {
  if (customAmount.value !== null) {
    customAmount.value = Math.max(0, customAmount.value)
  }
}

function selectSponsorship(amount: number) {
  frequency.value = 'once'
  selectAmount(amount)
  designation.value = 'general'

  document.getElementById('donation-form')?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
}

function getGiftFromQuery() {
  const type = String(route.query.type || 'once').toLowerCase()
  const requestedAmount = Number(route.query.amount)

  // Always reset frequency when navigating between donation types
  frequency.value =
    type.includes('monthly') || type.includes('recurring')
      ? 'monthly'
      : 'once'

  // Recognise sponsorship amounts and regular donation amounts
  if (Number.isFinite(requestedAmount) && requestedAmount >= 1) {
    return requestedAmount
  }

  if (frequency.value === 'monthly') {
    return 25
  }

  return 50
}

function applyDonationQuery() {
  const amount = getGiftFromQuery()

  selectAmount(amount)

  const requestedDesignation = String(
    route.query.designation || 'where-needed'
  )

  designation.value = designations.some(
    item => item.value === requestedDesignation
  )
    ? requestedDesignation
    : 'where-needed'

  dedicationEnabled.value = route.query.dedication === '1'
}
watch(
  () => route.query,
  () => {
    applyDonationQuery()
  },
  { immediate: true, deep: true }
)
const paymentReady = false

async function scrollToDonorDetails() {
  if (route.query.step === 'details') {
    await nextTick()

    document.getElementById('donor-details')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
}

onMounted(scrollToDonorDetails)

watch(
  () => route.query.step,
  () => {
    scrollToDonorDetails()
  }
)
</script>

<template>
  <main class="donate-page">
    <!-- HERO -->
    <section class="donate-hero">
      <div class="hero-overlay"></div>

      <div class="hero-content">
        <span class="eyebrow">GIVE WITH PURPOSE</span>

        <h1>
          Be Part of
          <span>Lasting Change.</span>
        </h1>

        <p>
          Your generosity empowers African ministries, strengthens communities
          and helps create opportunities for a brighter future.
        </p>

        <div class="hero-trust">
          <span>Meaningful partnerships</span>
          <span class="trust-dot"></span>
          <span>Lasting impact</span>
        </div>
      </div>

      <div class="hero-decoration decoration-one"></div>
      <div class="hero-decoration decoration-two"></div>
    </section>

    <!-- INTRODUCTION
    <section class="intro-section">
      <span class="eyebrow">YOUR GENEROSITY MATTERS</span>

      <h2>Every Gift Has the Power to Make a Difference.</h2>

      <p>
        Behind every ministry is a community of people working to bring hope,
        encouragement and transformation. Your support helps make that work
        possible.
      </p>
    </section>
     -->
    <!-- DONATION FORM -->
    <section id="donation-form" class="donation-section">
      <div class="donation-layout">
        <div class="donation-main">
          <div class="form-heading">
            <span class="eyebrow">MAKE A DIFFERENCE</span>
            <h2>Your Gift. Their Future.</h2>
            <p>
              Choose your contribution and help strengthen ministries and
              communities across Africa.
            </p>
          </div>
          <!-- FREQUENCY -->
          <div class="form-step">

            <div class="frequency-selector">
              <button
                type="button"
                :class="{ active: frequency === 'once' }"
                :aria-pressed="frequency === 'once'"
                @click="frequency = 'once'"
              >
                <span class="frequency-title">One-Time</span>
                <span class="frequency-description">Give once</span>
              </button>

              <button
                type="button"
                :class="{ active: frequency === 'monthly' }"
                :aria-pressed="frequency === 'monthly'"
                @click="frequency = 'monthly'"
              >
                <span class="frequency-title">Monthly</span>
                <span class="frequency-description">Give consistently</span>
                <span class="popular-label">ONGOING SUPPORT</span>
              </button>
            </div>
          </div>

          <!-- AMOUNT -->
          <div class="form-step">

            <div class="amount-grid">
              <button
                v-for="amount in amounts"
                :key="amount"
                type="button"
                :class="{
                  active: customAmount === null && selectedAmount === amount,
                }"
                :aria-pressed="customAmount === null && selectedAmount === amount"
                @click="selectAmount(amount)"
              >
                ${{ amount }}
              </button>
            </div>

            <label class="field-label" for="custom-amount">
              Or enter a custom amount (USD)
            </label>

            <div class="custom-amount-field">
              <span>$</span>
              <input
                id="custom-amount"
                v-model.number="customAmount"
                type="number"
                min="1"
                step="0.01"
                placeholder="Enter your amount"
                @input="updateCustomAmount"
              />
            </div>
            <p v-if="showError('amount')" class="field-error">
              {{ fieldErrors.amount }}
            </p>
          </div>

          <!-- DESIGNATION -->
<!-- DESIGNATION -->
<div class="form-step">
  <label for="designation" class="designation-label">
    Choose where your donation goes
  </label>

  <select
    id="designation"
    v-model="designation"
    class="designation-dropdown"
    name="designation"
  >
    <option
      v-for="item in designations"
      :key="item.value"
      :value="item.value"
    >
      {{ item.label }}
    </option>
  </select>

  <small class="designation-description">
    {{ designations.find(item => item.value === designation)?.description }}
  </small>
</div>

          <!-- DONOR DETAILS -->
          <div id="donor-details" class="form-step">

            <div class="donor-fields">
              <div class="field-group">
                <label for="first-name">First name *</label>
                <input
                  id="first-name"
                  @blur="markTouched('firstName')"
                  :aria-invalid="Boolean(showError('firstName'))"
                  v-model="donor.firstName"
                  type="text"
                  autocomplete="given-name"
                  placeholder="First name"
                  required
                />
              </div>
              <p v-if="showError('firstName')" class="field-error">
                {{ fieldErrors.firstName }}
              </p>
              <div class="field-group">
                <label for="last-name">Last name *</label>
                <input
                  id="last-name"
                  @blur="markTouched('lastName')"
                  :aria-invalid="Boolean(showError('lastName'))"
                  v-model="donor.lastName"
                  type="text"
                  autocomplete="family-name"
                  placeholder="Last name"
                  required
                />
              </div>
              <p v-if="showError('lastName')" class="field-error">
                {{ fieldErrors.lastName }}
              </p>
              <div class="field-group full-width">
                <label for="email">Email address *</label>
                <input
                  id="email"
                  @blur="markTouched('email')"
                  :aria-invalid="Boolean(showError('email'))"
                  v-model="donor.email"
                  type="email"
                  autocomplete="email"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <p v-if="showError('email')" class="field-error">
                {{ fieldErrors.email }}
              </p>
             <div class="form-group">
                <label for="country">Country <span class="required">*</span></label>              
                <select
                  id="country"
                  v-model="donor.country"
                  required
                  @blur="markTouched('country')"
                  :aria-invalid="Boolean(showError('country'))"
                >
                  <option value="" disabled>Select your country</option>
                  <option
                    v-for="country in countries"
                    :key="country"
                    :value="country"
                  >
                    {{ country }}
                  </option>
                </select>

              </div>
              <p v-if="showError('country')" class="field-error">
                {{ fieldErrors.country }}
              </p>
            </div>

            <p class="required-note">* Required fields</p>
          </div>

          <!-- DEDICATION -->
          <div class="form-step dedication-step">
            <label class="dedication-toggle">
              <input v-model="dedicationEnabled" type="checkbox" />

              <span class="custom-checkbox"></span>

              <span>
                <strong>Dedicate this gift</strong>
                <small>
                  Make your contribution in honour or memory of someone.
                </small>
              </span>
            </label>

            <div v-if="dedicationEnabled" class="dedication-fields">
              <div class="field-group">
                <label for="recipient-name">Recipient's name</label>
                <input
                  id="recipient-name"
                  v-model="dedication.recipientName"
                  type="text"
                  placeholder="Enter recipient's name"
                />
              </div>

              <div class="field-group">
                <label for="dedication-message">Optional message</label>
                <textarea
                  id="dedication-message"
                  v-model="dedication.message"
                  rows="3"
                  placeholder="Write a short dedication message..."
                ></textarea>
              </div>
            </div>
          </div>

        </div>

        <!-- DONATION SUMMARY -->
        <aside class="donation-summary">
          <div class="summary-top">
            <span class="summary-label">YOUR CONTRIBUTION</span>
            <div class="summary-icon">♥</div>
          </div>

          <h3>Your Gift Makes a Difference.</h3>

          <p class="summary-description">
            Thank you for standing with ministries and communities across
            Africa.
          </p>

          <div class="summary-divider"></div>

          <div class="summary-row">
            <span>Giving frequency</span>
            <strong>{{ frequency === 'monthly' ? 'Monthly' : 'One-Time' }}</strong>
          </div>

          <div class="summary-row">
            <span>Designation</span>
            <strong>{{ selectedDesignation }}</strong>
          </div>

          <div class="summary-divider"></div>

          <div class="summary-total">
            <span>Your contribution</span>
            <strong>{{ formattedAmount }}</strong>
            <small v-if="frequency === 'monthly'">per month</small>
          </div>

          <div class="summary-dedication" v-if="dedicationEnabled">
            <span>Gift dedication</span>
            <strong>{{ dedication.recipientName || 'Not yet specified' }}</strong>
          </div>

          <button
            type="button"
            class="donate-button"
            disabled
            :aria-disabled="true"
          >
            Payment Setup in Progress
            <span>→</span>
          </button>

          <p class="payment-notice">
            Our secure payment connection is being configured. Donations
            cannot be submitted through this form yet.
          </p>

          <div class="security-note">
            <span>⌑</span>
            <p>
              Your details will be used to support your donation and related
              communication once the secure payment process is connected.
            </p>
          </div>
        </aside>
      </div>
    </section>
    <!-- CLOSING CTA -->
    <section class="donate-cta">
      <span class="eyebrow">THANK YOU FOR GIVING</span>
      <h2>Together, We Can Help Communities Thrive.</h2>
      <p>
        Your generosity helps strengthen ministries, empower people and
        support lasting transformation.
      </p>
    </section>
  </main>
</template>

<style scoped>
:global(html) {
  scroll-behavior: smooth;
}

.donate-page {
  --purple: #54258a;
  --purple-dark: #35145e;
  --purple-light: #f3edfa;
  --red: #d83c51;
  --ink: #242039;
  --muted: #777487;
  --border: #e8e5ed;
  color: var(--ink);
  background: #fff;
  font-family: inherit;
}

.donate-page * {
  box-sizing: border-box;
}

.eyebrow {
  display: inline-block;
  margin-bottom: 15px;
  color: var(--red);
  font-size: .76rem;
  font-weight: 850;
  letter-spacing: .16em;
  text-transform: uppercase;
}

.donate-hero {
  position: relative;
  display: flex;
  min-height: 250px;
  align-items: center;
  overflow: hidden;
  padding: 100px 9%;
  color: #fff;
  background:
    linear-gradient(100deg, rgba(45, 18, 77, .96), rgba(73, 29, 112, .84)),
    url('/src/assets/donate.jpg') center/cover no-repeat;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 80% 20%, rgba(216, 60, 81, .3), transparent 35%),
    radial-gradient(circle at 85% 85%, rgba(135, 85, 190, .4), transparent 38%);
}

.hero-content {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 760px;
}

.donate-hero .eyebrow {
  color: #ffb6c0;
}

.donate-hero h1 {
  max-width: 700px;
  margin: 0 0 22px;
  font-size: clamp(2.8rem, 6vw, 5rem);
  font-weight: 850;
  line-height: 1.06;
  letter-spacing: -.045em;
}

.donate-hero h1 span {
  display: block;
  color: #ffb5c0;
}

.donate-hero p {
  max-width: 590px;
  margin: 0 0 30px;
  color: rgba(255,255,255,.85);
  font-size: 1.1rem;
  line-height: 1.8;
}

.primary-button,
.outline-button {
  display: inline-flex;
  min-height: 49px;
  align-items: center;
  justify-content: center;
  gap: 13px;
  padding: 13px 24px;
  border: 1px solid transparent;
  border-radius: 7px;
  font: inherit;
  font-size: .94rem;
  font-weight: 800;
  text-decoration: none;
  cursor: pointer;
  transition: .2s ease;
}

.primary-button {
  color: #fff;
  background: var(--red);
}

.primary-button:hover {
  color: #fff;
  background: #bd2d43;
  transform: translateY(-2px);
}

.outline-button {
  color: var(--purple);
  border-color: var(--purple);
  background: #fff;
}

.outline-button:hover {
  color: #fff;
  background: var(--purple);
}

.hero-trust {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 28px;
  color: rgba(255,255,255,.75);
  font-size: .85rem;
}

.trust-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #ff9baa;
}

.hero-decoration {
  position: absolute;
  border: 1px solid rgba(255,255,255,.12);
  border-radius: 50%;
}

.decoration-one {
  width: 410px;
  height: 410px;
  top: -100px;
  right: -60px;
}

.decoration-two {
  width: 280px;
  height: 280px;
  right: 130px;
  bottom: -160px;
}

.intro-section {
  max-width: 880px;
  margin: 0 auto;
  padding: 85px 25px 75px;
  text-align: center;
}

.intro-section h2,
.section-heading h2 {
  margin: 0 0 18px;
  color: var(--ink);
  font-size: clamp(1.9rem, 3.5vw, 2.8rem);
  font-weight: 850;
  line-height: 1.2;
  letter-spacing: -.035em;
}

.intro-section p:not(.eyebrow),
.section-heading p:not(.eyebrow) {
  max-width: 720px;
  margin: 0 auto;
  color: var(--muted);
  font-size: 1rem;
  line-height: 1.8;
}

.donation-section {
  padding: 85px 6%;
  background: #f8f7fa;
  scroll-margin-top: 25px;
}

.donation-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 365px;
  align-items: start;
  gap: 55px;
  max-width: 1180px;
  margin: 0 auto;
}

.form-heading {
  margin-bottom: 38px;
}

.form-heading h2 {
  margin: 0 0 12px;
  color: var(--ink);
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  font-weight: 850;
  letter-spacing: -.035em;
}

.form-heading p {
  margin: 0;
  color: var(--muted);
  line-height: 1.7;
}

.form-step {
  padding: 28px 0;
  border-top: 1px solid var(--border);
}

#donor-details {
  scroll-margin-top: 100px;
}
.field-error {
  margin: 7px 0 0;
  color: #c62845;
  font-size: 0.78rem;
  line-height: 1.4;
}

.field-group input[aria-invalid="true"],
.form-group select[aria-invalid="true"] {
  border-color: #c62845;
  background-color: #fff9fa;
}

.field-group input[aria-invalid="true"]:focus,
.form-group select[aria-invalid="true"]:focus {
  box-shadow: 0 0 0 3px rgba(198, 40, 69, 0.1);
}

.form-group select {
  color: var(--ink);
}

.form-group select {
  width: 100%;
  padding: 13px 15px;
  border: 1px solid var(--border);
  border-radius: 8px;
  background: #fff;
  color: var(--text);
  font: inherit;
  outline: none;
}

.form-group select:focus {
  border-color: var(--purple);
  box-shadow: 0 0 0 3px rgba(107, 67, 151, 0.1);
}

.step-heading {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  margin-bottom: 23px;
}

.step-number {
  display: flex;
  width: 35px;
  height: 35px;
  flex: 0 0 35px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: var(--purple);
  background: #eee6f7;
  font-size: .85rem;
  font-weight: 850;
}

.step-heading h3 {
  margin: 0 0 5px;
  color: var(--ink);
  font-size: 1.08rem;
  font-weight: 800;
}

.step-heading p {
  margin: 0;
  color: var(--muted);
  font-size: .88rem;
  line-height: 1.5;
}

.frequency-selector {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.frequency-selector button {
  position: relative;
  display: flex;
  min-height: 90px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 6px;
  padding: 17px 20px;
  border: 1px solid var(--border);
  border-radius: 9px;
  color: var(--ink);
  background: #fff;
  text-align: left;
  cursor: pointer;
  transition: .2s ease;
}

.frequency-selector button.active {
  border: 2px solid var(--purple);
  padding: 16px 19px;
  background: var(--purple-light);
}

.frequency-title {
  font-weight: 850;
}

.frequency-description {
  color: var(--muted);
  font-size: .83rem;
}

.popular-label {
  position: absolute;
  top: 9px;
  right: 10px;
  color: var(--red);
  font-size: .58rem;
  font-weight: 850;
  letter-spacing: .07em;
}

.amount-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 11px;
  margin-bottom: 20px;
}

.amount-grid button {
  min-height: 58px;
  border: 1px solid var(--border);
  border-radius: 8px;
  color: var(--ink);
  background: #fff;
  font-size: 1.05rem;
  font-weight: 800;
  cursor: pointer;
  transition: .2s ease;
}

.amount-grid button:hover,
.amount-grid button.active {
  border-color: var(--purple);
  color: var(--purple);
  background: var(--purple-light);
}

.field-label,
.field-group label {
  display: block;
  margin-bottom: 8px;
  color: var(--ink);
  font-size: .86rem;
  font-weight: 750;
}

.custom-amount-field {
  display: flex;
  height: 52px;
  align-items: center;
  gap: 10px;
  padding: 0 15px;
  border: 1px solid var(--border);
  border-radius: 8px;
  background: #fff;
}

.custom-amount-field span {
  color: var(--muted);
  font-weight: 800;
}

.custom-amount-field input {
  width: 100%;
  height: 100%;
  border: 0;
  outline: 0;
  color: var(--ink);
  background: transparent;
  font: inherit;
}

.designation-list {
  display: grid;
  gap: 10px;
}

.designation-option {
  display: flex;
  align-items: center;
  gap: 13px;
  padding: 16px;
  border: 1px solid var(--border);
  border-radius: 8px;
  background: #fff;
  cursor: pointer;
  transition: .2s ease;
}

.designation-option.active {
  border-color: var(--purple);
  background: var(--purple-light);
}

.designation-option input {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.custom-radio {
  position: relative;
  width: 18px;
  height: 18px;
  flex: 0 0 18px;
  border: 2px solid #b9b4c3;
  border-radius: 50%;
}

.designation-option.active .custom-radio {
  border-color: var(--purple);
}

.designation-option.active .custom-radio::after {
  position: absolute;
  inset: 3px;
  border-radius: 50%;
  background: var(--purple);
  content: '';
}

.designation-content {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.designation-content strong {
  font-size: .91rem;
}

.designation-content small {
  color: var(--muted);
  font-size: .81rem;
  line-height: 1.5;
}

.dedication-toggle {
  display: flex;
  align-items: flex-start;
  gap: 13px;
  cursor: pointer;
}

.dedication-toggle input {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.custom-checkbox {
  position: relative;
  width: 20px;
  height: 20px;
  flex: 0 0 20px;
  border: 1px solid #b9b4c3;
  border-radius: 5px;
  background: #fff;
}
.designation-label {
  display: block;
  margin-bottom: 10px;
  color: #35145e;
  font-weight: 600;
  font-size: 0.95rem;
}

.designation-dropdown {
  width: 100%;
  padding: 14px 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #fff;
  color: #35145e;
  font-size: 0.95rem;
  cursor: pointer;
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.designation-dropdown:focus {
  border-color: #54258a;
  box-shadow: 0 0 0 3px rgba(84, 37, 138, 0.12);
}

.designation-description {
  display: block;
  margin-top: 8px;
  color: #777;
  font-size: 0.82rem;
  line-height: 1.5;
}

.dedication-toggle input:checked + .custom-checkbox {
  border-color: var(--purple);
  background: var(--purple);
}

.dedication-toggle input:checked + .custom-checkbox::after {
  position: absolute;
  top: 2px;
  left: 6px;
  width: 5px;
  height: 10px;
  border: solid #fff;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
  content: '';
}

.dedication-toggle strong,
.dedication-toggle small {
  display: block;
}

.dedication-toggle strong {
  margin-bottom: 5px;
  font-size: .93rem;
}

.dedication-toggle small {
  color: var(--muted);
  font-size: .83rem;
  line-height: 1.5;
}

.dedication-fields {
  display: grid;
  gap: 17px;
  margin-top: 22px;
  padding-left: 33px;
}

.donor-fields {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}

.field-group input,
.field-group textarea {
  width: 100%;
  min-height: 49px;
  padding: 12px 14px;
  border: 1px solid var(--border);
  border-radius: 7px;
  outline: none;
  color: var(--ink);
  background: #fff;
  font: inherit;
  font-size: .9rem;
  transition: border-color .2s ease;
}

.field-group textarea {
  min-height: 95px;
  resize: vertical;
}

.field-group input:focus,
.field-group textarea:focus,
.custom-amount-field:focus-within {
  border-color: var(--purple);
}

.full-width {
  grid-column: 1 / -1;
}

.required-note {
  margin: 14px 0 0;
  color: var(--muted);
  font-size: .78rem;
}

.donation-summary {
  position: sticky;
  top: 25px;
  padding: 27px;
  border: 1px solid var(--border);
  border-radius: 13px;
  background: #fff;
  box-shadow: 0 15px 45px rgba(45, 27, 67, .07);
}

.summary-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.summary-label {
  color: var(--red);
  font-size: .7rem;
  font-weight: 850;
  letter-spacing: .12em;
}

.summary-icon {
  display: flex;
  width: 38px;
  height: 38px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: var(--red);
  background: #fff0f2;
  font-size: 1.1rem;
}

.donation-summary h3 {
  margin: 22px 0 9px;
  color: var(--ink);
  font-size: 1.55rem;
  font-weight: 850;
  line-height: 1.25;
}

.summary-description {
  margin: 0;
  color: var(--muted);
  font-size: .87rem;
  line-height: 1.7;
}

.summary-divider {
  height: 1px;
  margin: 22px 0;
  background: var(--border);
}

.summary-row {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 15px;
  margin: 14px 0;
  font-size: .84rem;
}

.summary-row span {
  color: var(--muted);
}

.summary-row strong {
  max-width: 55%;
  text-align: right;
  font-weight: 750;
}

.summary-total span,
.summary-total small {
  display: block;
  color: var(--muted);
  font-size: .85rem;
}

.summary-total strong {
  display: block;
  margin: 8px 0 3px;
  color: var(--purple);
  font-size: 2.55rem;
  font-weight: 900;
  letter-spacing: -.05em;
}

.summary-dedication {
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 18px;
  padding: 13px;
  border-radius: 7px;
  background: var(--purple-light);
  font-size: .82rem;
}

.summary-dedication span {
  color: var(--muted);
}

.donate-button {
  display: flex;
  width: 100%;
  min-height: 54px;
  align-items: center;
  justify-content: space-between;
  margin-top: 25px;
  padding: 0 18px;
  border: 0;
  border-radius: 7px;
  color: #fff;
  background: #9b95a5;
  font: inherit;
  font-weight: 800;
  cursor: not-allowed;
}

.payment-notice {
  margin: 12px 0 0;
  color: #8b5360;
  font-size: .77rem;
  line-height: 1.6;
  text-align: center;
}

.security-note {
  display: flex;
  gap: 10px;
  margin-top: 23px;
  padding-top: 18px;
  border-top: 1px solid var(--border);
}

.security-note span {
  color: var(--purple);
  font-size: 1.2rem;
}

.security-note p {
  margin: 0;
  color: var(--muted);
  font-size: .74rem;
  line-height: 1.6;
}

.sponsorship-section {
  padding: 90px 6%;
}

.section-heading {
  max-width: 780px;
  margin: 0 auto 42px;
  text-align: center;
}

.sponsorship-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
  max-width: 1120px;
  margin: 0 auto;
}

.sponsorship-card {
  display: flex;
  flex-direction: column;
  padding: 30px;
  border: 1px solid var(--border);
  border-radius: 11px;
  background: #fff;
  box-shadow: 0 8px 30px rgba(45, 27, 67, .04);
}

.sponsorship-card.featured {
  border: 2px solid var(--purple);
  box-shadow: 0 12px 35px rgba(84, 37, 138, .1);
}

.tier-label {
  color: var(--red);
  font-size: .72rem;
  font-weight: 850;
  letter-spacing: .12em;
}

.sponsorship-card h3 {
  margin: 15px 0 5px;
  color: var(--ink);
  font-size: 1.3rem;
  font-weight: 850;
}

.tier-amount {
  margin-top: 12px;
  color: var(--purple);
  font-size: 2.4rem;
  font-weight: 900;
  letter-spacing: -.04em;
}

.tier-frequency {
  margin: 0;
  color: var(--muted);
  font-size: .82rem;
}

.sponsorship-card ul {
  flex: 1;
  margin: 25px 0;
  padding: 0;
  list-style: none;
}

.sponsorship-card li {
  display: flex;
  gap: 10px;
  margin-bottom: 13px;
  color: var(--muted);
  font-size: .88rem;
  line-height: 1.5;
}

.sponsorship-card li span {
  color: var(--red);
  font-weight: 900;
}

.sponsorship-card button {
  width: 100%;
}

.donate-cta {
  max-height: 400px;
  padding: 85px 7%;
  color: #fff;
  background:
    radial-gradient(circle at 15% 80%, rgba(216,60,81,.2), transparent 32%),
    var(--purple-dark);
  text-align: center;
}

.donate-cta .eyebrow {
  color: #ffb6c0;
}

.donate-cta h2 {
  max-width: 800px;
  margin: 0 auto 18px;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 850;
  line-height: 1.2;
}

.donate-cta p {
  max-width: 680px;
  margin: 0 auto 28px;
  color: rgba(255,255,255,.78);
  line-height: 1.8;
}

@media (max-width: 950px) {
  .donation-layout {
    grid-template-columns: 1fr;
    gap: 35px;
  }

  .donation-summary {
    position: static;
  }
}

@media (max-width: 700px) {
  .donate-hero {
    min-height: 450px;
    padding: 75px 25px;
  }

  .hero-decoration {
    opacity: .5;
  }

  .intro-section {
    padding: 65px 23px;
  }

  .donation-section,
  .sponsorship-section {
    padding: 65px 22px;
  }

  .sponsorship-grid {
    grid-template-columns: 1fr;
  }

  .amount-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .donor-fields {
    grid-template-columns: 1fr;
  }

  .full-width {
    grid-column: auto;
  }

  .donation-summary {
    padding: 23px;
  }

  .donate-cta {
    padding: 65px 23px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .donate-page *,
  .donate-page *::before,
  .donate-page *::after {
    scroll-behavior: auto !important;
    transition-duration: .01ms !important;
    animation-duration: .01ms !important;
  }
}
/* Unified donation form */
.form-step {
  padding: 24px 0;
  border-top: none;
}

.form-step + .form-step {
  border-top: 1px solid var(--border);
}

.step-heading,
.step-number {
  display: none;
}

.form-heading {
  margin-bottom: 25px;
}

.donation-main {
  padding: 35px;
  border: 1px solid var(--border);
  border-radius: 14px;
  background: #fff;
  box-shadow: 0 12px 35px rgba(45, 27, 67, .04);
}

@media (max-width: 700px) {
  .donation-main {
    padding: 22px 17px;
  }
}
</style>
