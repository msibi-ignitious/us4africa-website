

<script setup>
import { reactive, computed } from 'vue'
import { Country, City } from 'country-state-city'

defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['update:modelValue', 'submit'])

const countries = Country.getAllCountries()

const form = reactive({
  churchName: '',
  denomination: '',
  country: '',
  city: '',
  website: '',
  contactName: '',
  role: '',
  email: '',
  phone: '',
  congregationSize: '',
  supportType: '',
  message: '',
  consent: false,
})

const selectedCountry = computed(() =>
  countries.find(country => country.name === form.country)
)

const cities = computed(() => {
  if (!selectedCountry.value) return []

  const countryCities = City.getCitiesOfCountry(
    selectedCountry.value.isoCode
  ) || []

  // Remove duplicate city names
  return [...new Set(countryCities.map(city => city.name))].sort()
})

function handleCountryChange() {
  form.city = ''

  if (selectedCountry.value) {
    const callingCode = selectedCountry.value.phonecode.replace(/\D/g, '')
    form.phone = callingCode ? `+${callingCode}` : '+'
  } else {
    form.phone = '+'
  }
}

function updatePhone(event) {
  const digits = event.target.value.replace(/\D/g, '')
  form.phone = `+${digits}`
}

function closeModal() {
  emit('update:modelValue', false)
}

function submitForm() {
  if (!form.consent) return

  const churchDetails = { ...form }
  delete churchDetails.consent

  emit('submit', churchDetails)

  Object.assign(form, {
    churchName: '',
    denomination: '',
    country: '',
    city: '',
    website: '',
    contactName: '',
    role: '',
    email: '',
    phone: '',
    congregationSize: '',
    supportType: '',
    message: '',
    consent: false,
  })

  closeModal()
}
</script>


<template>
  <Teleport to="body">
    <div
      v-if="modelValue"
      class="church-modal-overlay"
      @click.self="closeModal"
    >
      <div
        class="church-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="church-modal-title"
      >
        <button
          type="button"
          class="church-modal-close"
          aria-label="Close modal"
          @click="closeModal"
        >
          &times;
        </button>

        <div class="church-modal-header">
          <span class="church-modal-label">PARTNER WITH US</span>
          <h2 id="church-modal-title">Church Partnership Registration</h2>
          <p>
            Tell us about your church and how you would like to partner
            with US4Africa.
          </p>
        </div>

        <form @submit.prevent="submitForm">
          <h3>Church Information</h3>

          <div class="church-form-grid">
            <label>
              Church Name *
              <input v-model="form.churchName" required />
            </label>

            <label>
              Denomination
              <input v-model="form.denomination" />
            </label>

            <label>
              Country *
              <input
                v-model="form.country"
                list="country-list"
                placeholder="Search for a country..."
                autocomplete="off"
                required
                @change="handleCountryChange"
              />

              <datalist id="country-list">
                <option
                  v-for="country in countries"
                  :key="country.isoCode"
                  :value="country.name"
                />
              </datalist>
            </label>

            <label>
              City / Town *
              <input
                v-model="form.city"
                list="city-list"
                placeholder="Select a country first..."
                :disabled="!selectedCountry"
                autocomplete="off"
                required
              />

              <datalist id="city-list">
                <option
                  v-for="city in cities"
                  :key="city"
                  :value="city"
                />
              </datalist>
            </label>


            <label class="full-width">
              Church Website
              <input v-model="form.website" type="url" placeholder="https://" />
            </label>
          </div>

          <h3>Contact Person</h3>

          <div class="church-form-grid">
            <label>
              Full Name *
              <input v-model="form.contactName" required />
            </label>

            <label>
              Position / Role
              <input v-model="form.role" placeholder="Pastor, Administrator..." />
            </label>

            <label>
              Email Address *
              <input v-model="form.email" type="email" required />
            </label>
                        
            <label>
              Phone Number *
              <input
                :value="form.phone"
                type="tel"
                placeholder="+27"
                inputmode="tel"
                autocomplete="tel"
                required
                @input="updatePhone"
              />
            </label>


            <label class="full-width">
              Approximate Congregation Size
              <select v-model="form.congregationSize">
                <option value="">Select congregation size</option>
                <option value="Below 100">Below 100</option>
                <option value="100–250">100–250</option>
                <option value="251–500">251–500</option>
                <option value="501–1000">501–1000</option>
                <option value="Above 1000">Above 1000</option>
              </select>
            </label>
          </div>

          <h3>Partnership Interests</h3>

          <label>
            How would your church like to support us? *
            <select v-model="form.supportType" required>
              <option value="">Select an option</option>
              <option value="Prayer and spiritual support">Prayer and spiritual support</option>
              <option value="Financial support">Financial support</option>
              <option value="Volunteer support">Volunteer support</option>
              <option value="Mission and outreach partnership">Mission and outreach partnership</option>
              <option value="Multiple forms of support">Multiple forms of support</option>
              <option value="Other">Other</option>
            </select>
          </label>

          <label>
            Tell us more about your church or partnership interests
            <textarea
              v-model="form.message"
              rows="4"
              placeholder="Share any additional information..."
            ></textarea>
          </label>

          <label class="church-consent">
            <input v-model="form.consent" type="checkbox" required />
            <span>
              I confirm that the information provided is accurate and
              consent to US4Africa contacting our church.
            </span>
          </label>

          <div class="church-modal-actions">
            <button
              type="button"
              class="church-cancel-btn"
              @click="closeModal"
            >
              Cancel
            </button>

            <button type="submit" class="church-submit-btn">
              Submit Registration
            </button>
          </div>
        </form>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.church-modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(25, 12, 35, 0.72);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  overflow-y: auto;
}

.church-modal {
  position: relative;
  background: #fff;
  width: 100%;
  max-width: 760px;
  max-height: 90vh;
  overflow-y: auto;
  border-radius: 16px;
  padding: 35px;
  color: #282132;
}

.church-modal-close {
  position: absolute;
  top: 15px;
  right: 20px;
  border: none;
  background: none;
  font-size: 30px;
  cursor: pointer;
  color: #54208c;
}

.church-modal-header {
  margin-bottom: 28px;
}

.church-modal-label {
  color: #c6283d;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 2px;
}

.church-modal-header h2 {
  color: #54208c;
  font-size: 26px;
  margin: 10px 0;
}

.church-modal-header p {
  color: #706777;
  line-height: 1.6;
}

.church-modal h3 {
  color: #54208c;
  font-size: 17px;
  margin: 25px 0 15px;
}

.church-form-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.church-modal form > label {
  display: block;
  margin-bottom: 16px;
}

.church-modal label {
  font-size: 13px;
  font-weight: 600;
  color: #40364a;
}

.church-modal input:not([type="checkbox"]),
.church-modal select,
.church-modal textarea {
  display: block;
  width: 100%;
  margin-top: 7px;
  padding: 12px;
  border: 1px solid #e1d9e8;
  border-radius: 7px;
  background: #fff;
  font: inherit;
  font-size: 14px;
  box-sizing: border-box;
}

.church-modal input:focus,
.church-modal select:focus,
.church-modal textarea:focus {
  outline: none;
  border-color: #54208c;
  box-shadow: 0 0 0 2px rgba(84, 32, 140, 0.1);
}

.full-width {
  grid-column: 1 / -1;
}

.church-consent {
  display: flex !important;
  align-items: flex-start;
  gap: 10px;
  line-height: 1.5;
  margin: 20px 0;
}

.church-consent input {
  margin-top: 3px;
}

.church-modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 25px;
}

.church-modal-actions button {
  border: none;
  border-radius: 7px;
  padding: 12px 20px;
  font-weight: 700;
  cursor: pointer;
}

.church-cancel-btn {
  background: #f1edf4;
  color: #54208c;
}

.church-submit-btn {
  background: #54208c;
  color: #fff;
}

.church-submit-btn:hover {
  background: #351052;
}

@media (max-width: 600px) {
  .church-modal {
    padding: 25px 18px;
  }

  .church-form-grid {
    grid-template-columns: 1fr;
  }

  .full-width {
    grid-column: auto;
  }

  .church-modal-actions {
    flex-direction: column-reverse;
  }

  .church-modal-actions button {
    width: 100%;
  }
}
</style>
```

**Important:** This version displays the form and emits the submitted details to the parent component. It does not yet save registrations to your database or send an email automatically.

After saving, test the Church Support card again. If it still does not open, send me the `openDonation()` function and the Church Support card object from `GetInvolved.vue`, and we can fix the connection directly.
```
`