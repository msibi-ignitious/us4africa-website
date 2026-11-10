
<template>
  <Teleport to="body">
    <Transition name="donation-modal">
      <div
        v-if="modelValue"
        class="donation-overlay"
        @click.self="closeModal"
      >
        <div
          class="donation-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="donation-modal-title"
        >
          <button
            type="button"
            class="donation-close"
            aria-label="Close donation modal"
            @click="closeModal"
          >
            &times;
          </button>

          <div class="donation-modal-header">
            <span class="donation-eyebrow">MAKE A DIFFERENCE</span>
            <h2 id="donation-modal-title">Your generosity changes lives.</h2>
            <p>
              Your support helps us empower African ministries through
              support and service.
            </p>
          </div>

          <form @submit.prevent="continueToDonation">
            <div class="donation-field">
              <label>How would you like to give?</label>

              <div class="donation-frequency">
                <button
                  type="button"
                  :class="{ active: frequency === 'once' }"
                  @click="frequency = 'once'"
                >
                  One-time
                </button>

                <button
                  type="button"
                  :class="{ active: frequency === 'monthly' }"
                  @click="frequency = 'monthly'"
                >
                  Monthly
                </button>
              </div>
            </div>

            <div class="donation-field">
              <label>Select an amount</label>

              <div class="donation-amounts">
                <button
                  v-for="amount in amounts"
                  :key="amount"
                  type="button"
                  :class="{ active: selectedAmount === amount && !customAmount }"
                  @click="selectAmount(amount)"
                >
                  ${{ amount }}
                </button>
              </div>

              <div class="donation-custom">
                <span>$</span>
                <input
                  v-model.number="customAmount"
                  type="number"
                  min="1"
                  step="0.01"
                  placeholder="Enter a custom amount"
                  @input="selectedAmount = null"
                />
              </div>
            </div>

            <div class="donation-field">
              <label for="donation-designation">
                Where would you like your donation to go?
              </label>

              <select
                id="donation-designation"
                v-model="designation"
              >
                <option value="where-needed">Where it is needed most</option>
                <option value="dogs">Youth Discipleship (DoGs)</option>
                <option value="kcp">Children Outreach (KCP)</option>
                <option value="general">General Ministry Support</option>
              </select>
            </div>

            <div class="donation-summary">
              <span>Your contribution</span>
              <strong>{{ formattedAmount }}</strong>
              <small>
                {{ frequency === 'monthly' ? 'Monthly donation' : 'One-time donation' }}
              </small>
            </div>

            <p v-if="errorMessage" class="donation-error">
              {{ errorMessage }}
            </p>

            <button
              type="submit"
              class="donation-submit"
              :disabled="!isValidAmount"
            >
              Continue to Donate
            </button>

            <p class="donation-note">
              Thank you for partnering with US4Africa.
            </p>
          </form>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { computed, onBeforeUnmount, ref, watch } from 'vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['update:modelValue', 'donate'])

const frequency = ref('once')
const selectedAmount = ref(50)
const customAmount = ref(null)
const designation = ref('where-needed')
const errorMessage = ref('')

const amounts = [25, 50, 100, 250]

const currentAmount = computed(() => {
  if (
    customAmount.value !== null &&
    customAmount.value !== ''
  ) {
    return Number(customAmount.value)
  }

  return Number(selectedAmount.value)
})

const isValidAmount = computed(() => {
  return (
    Number.isFinite(currentAmount.value) &&
    currentAmount.value > 0
  )
})

const formattedAmount = computed(() => {
  return isValidAmount.value
    ? `$${currentAmount.value.toFixed(2)}`
    : '$0.00'
})

function selectAmount(amount) {
  selectedAmount.value = amount
  customAmount.value = null
  errorMessage.value = ''
}

function closeModal() {
  emit('update:modelValue', false)
}
function continueToDonation() {
  console.log('Continue button clicked')

  if (!isValidAmount.value) {
    errorMessage.value = 'Please enter a valid donation amount.'
    return
  }

  const donationDetails = {
    amount: currentAmount.value.toString(),
    type: frequency.value,
    designation: designation.value,
  }

  console.log('Donation details:', donationDetails)

  emit('donate', donationDetails)
  closeModal()
}

function handleEscape(event) {
  if (event.key === 'Escape' && props.modelValue) {
    closeModal()
  }
}

function handleDonation(donationDetails) {
  router.push({
    name: 'donate',
    query: {
      amount: donationDetails.amount,
      type: donationDetails.type,
      designation: donationDetails.designation,
    },
  })
}

watch(
  () => props.modelValue,
  (isOpen) => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleEscape)
    } else {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleEscape)
    }
  },
  { immediate: true }
)

onBeforeUnmount(() => {
  document.body.style.overflow = ''
  window.removeEventListener('keydown', handleEscape)
})
</script>

<style scoped>
.donation-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: rgba(20, 12, 35, 0.72);
  backdrop-filter: blur(5px);
  overflow-y: auto;
}

.donation-modal {
  position: relative;
  width: 100%;
  max-width: 540px;
  max-height: 90vh;
  overflow-y: auto;
  padding: 38px;
  border-radius: 20px;
  background: #fff;
  color: #282333;
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.25);
}

.donation-close {
  position: absolute;
  top: 14px;
  right: 18px;
  border: 0;
  background: transparent;
  color: #555;
  font-size: 30px;
  cursor: pointer;
}

.donation-modal-header {
  margin-bottom: 26px;
}

.donation-eyebrow {
  color: #7028a5;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 2px;
}

.donation-modal-header h2 {
  margin: 10px 0;
  color: #35204f;
  font-size: clamp(25px, 5vw, 34px);
  line-height: 1.2;
}

.donation-modal-header p {
  color: #777;
  line-height: 1.6;
}

.donation-field {
  margin-bottom: 23px;
}

.donation-field label {
  display: block;
  margin-bottom: 10px;
  font-weight: 700;
  color: #35204f;
}

.donation-frequency,
.donation-amounts {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.donation-amounts {
  grid-template-columns: repeat(4, 1fr);
}

.donation-frequency button,
.donation-amounts button {
  min-height: 44px;
  border: 1px solid #e2dce9;
  border-radius: 9px;
  background: #fff;
  color: #4c3c5e;
  font-weight: 700;
  cursor: pointer;
}

.donation-frequency button.active,
.donation-amounts button.active {
  border-color: #7028a5;
  background: #7028a5;
  color: #fff;
}

.donation-custom {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 12px;
  padding: 0 14px;
  border: 1px solid #e2dce9;
  border-radius: 9px;
}

.donation-custom span {
  font-weight: 700;
  color: #7028a5;
}

.donation-custom input {
  width: 100%;
  min-height: 44px;
  border: 0;
  outline: none;
  background: transparent;
}

.donation-field select {
  width: 100%;
  min-height: 46px;
  padding: 0 12px;
  border: 1px solid #e2dce9;
  border-radius: 9px;
  background: #fff;
  color: #4c3c5e;
}

.donation-summary {
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin: 24px 0;
  padding: 18px;
  border-radius: 12px;
  background: #f7f2fb;
}

.donation-summary span,
.donation-summary small {
  color: #777;
}

.donation-summary strong {
  color: #7028a5;
  font-size: 28px;
}

.donation-error {
  color: #c62828;
  font-size: 13px;
}

.donation-submit {
  width: 100%;
  min-height: 50px;
  border: 0;
  border-radius: 30px;
  background: #c83245;
  color: #fff;
  font-weight: 800;
  cursor: pointer;
  transition: background 0.2s ease;
}

.donation-submit:hover {
  background: #a91f34;
}

.donation-submit:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.donation-note {
  margin-top: 14px;
  color: #888;
  font-size: 12px;
  text-align: center;
}

.donation-modal-enter-active,
.donation-modal-leave-active {
  transition: opacity 0.25s ease;
}

.donation-modal-enter-active .donation-modal,
.donation-modal-leave-active .donation-modal {
  transition: transform 0.25s ease;
}

.donation-modal-enter-from,
.donation-modal-leave-to {
  opacity: 0;
}

.donation-modal-enter-from .donation-modal,
.donation-modal-leave-to .donation-modal {
  transform: translateY(20px);
}

@media (max-width: 600px) {
  .donation-modal {
    padding: 28px 20px;
  }

  .donation-amounts {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (prefers-reduced-motion: reduce) {
  .donation-modal-enter-active,
  .donation-modal-leave-active,
  .donation-modal-enter-active .donation-modal,
  .donation-modal-leave-active .donation-modal {
    transition: none;
  }
}
</style>
