
<template>
  <div
    v-if="modelValue"
    class="volunteer-modal-overlay"
    @click.self="closeModal"
  >
    <div
      class="volunteer-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="volunteer-modal-title"
    >
      <button
        type="button"
        class="modal-close"
        aria-label="Close volunteer registration"
        @click="closeModal"
      >
        &times;
      </button>

      <span class="eyebrow">MAKE A DIFFERENCE</span>

      <h2 id="volunteer-modal-title">
        Become a Volunteer
      </h2>

      <p class="modal-intro">
        Thank you for your interest in serving with US4Africa.
        Complete the form below and our team will get in touch.
      </p>

      <form
        class="volunteer-registration-form"
        @submit.prevent="submitVolunteer"
      >
        <div class="form-field">
          <label for="volunteer-name">Full Name *</label>
          <input
            id="volunteer-name"
            v-model="form.name"
            type="text"
            placeholder="Enter your full name"
            required
          />
        </div>

        <div class="form-field">
          <label for="volunteer-email">Email Address *</label>
          <input
            id="volunteer-email"
            v-model="form.email"
            type="email"
            placeholder="Enter your email address"
            required
          />
        </div>

        <div class="form-field">
          <label for="volunteer-phone">Phone Number</label>
          <input
            id="volunteer-phone"
            v-model="form.phone"
            type="tel"
            placeholder="Enter your phone number"
          />
        </div>

        <div class="form-field">
          <label for="volunteer-ministry">Area of Interest *</label>
          <select
            id="volunteer-ministry"
            v-model="form.ministry"
            required
          >
            <option value="" disabled>Select an area</option>
            <option>Youth Ministry</option>
            <option>Children's Ministry</option>
            <option>Leadership Development</option>
            <option>Prayer Support</option>
            <option>Community Outreach</option>
            <option>General Volunteering</option>
          </select>
        </div>

        <div class="form-field">
          <label for="volunteer-availability">Availability *</label>
          <select
            id="volunteer-availability"
            v-model="form.availability"
            required
          >
            <option value="" disabled>Select availability</option>
            <option>Weekly</option>
            <option>Monthly</option>
            <option>Occasionally</option>
            <option>Project-based</option>
            <option>Flexible</option>
          </select>
        </div>

        <div class="form-field">
          <label for="volunteer-message">
            Tell us a little about yourself
          </label>
          <textarea
            id="volunteer-message"
            v-model="form.message"
            rows="4"
            placeholder="Share your skills, experience or why you would like to volunteer..."
          ></textarea>
        </div>

        <p
          v-if="feedback"
          class="form-feedback"
          role="status"
        >
          {{ feedback }}
        </p>

        <button
          type="submit"
          class="primary-button volunteer-submit"
        >
          Submit Registration
          <span aria-hidden="true">→</span>
        </button>

        <p class="privacy-note">
          Your information will only be used to contact you
          regarding volunteer opportunities.
        </p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, watch, onBeforeUnmount } from 'vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['update:modelValue'])

const feedback = ref('')

const form = reactive({
  name: '',
  email: '',
  phone: '',
  ministry: '',
  availability: '',
  message: '',
})

function closeModal() {
  emit('update:modelValue', false)
}

function submitVolunteer() {
  const subject = encodeURIComponent(
    `US4Africa Volunteer Registration - ${form.name}`
  )

  const body = encodeURIComponent(
    `Volunteer Registration\n\n` +
    `Name: ${form.name}\n` +
    `Email: ${form.email}\n` +
    `Phone: ${form.phone || 'Not provided'}\n` +
    `Area of Interest: ${form.ministry}\n` +
    `Availability: ${form.availability}\n\n` +
    `Additional Information:\n${form.message || 'None'}`
  )

  feedback.value =
    'Your email application should open. Please send the email to complete your registration.'

  window.location.href =
    `mailto:admin@us4africa.org?subject=${subject}&body=${body}`
}

watch(
  () => props.modelValue,
  (isOpen) => {
    document.body.style.overflow = isOpen ? 'hidden' : ''

    if (isOpen) {
      feedback.value = ''
    }
  },
  { immediate: true }
)

onBeforeUnmount(() => {
  document.body.style.overflow = ''
})
</script>

<style scoped>
.volunteer-modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  overflow-y: auto;
  background: rgba(31, 15, 42, 0.75);
  backdrop-filter: blur(5px);
}

.volunteer-modal {
  position: relative;
  width: 100%;
  max-width: 620px;
  max-height: 90vh;
  overflow-y: auto;
  padding: 38px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 20px 65px rgba(0, 0, 0, 0.25);
  animation: volunteerModalIn 0.25s ease;
}

.modal-close {
  position: absolute;
  top: 15px;
  right: 18px;
  display: flex;
  width: 38px;
  height: 38px;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 50%;
  background: #f4eef8;
  color: #542477;
  font-size: 1.8rem;
  cursor: pointer;
}

.modal-close:hover {
  background: #fff0f1;
  color: #d62839;
}

.eyebrow {
  display: inline-block;
  color: #d62839;
  font-size: 0.73rem;
  font-weight: 800;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.volunteer-modal h2 {
  margin: 12px 0;
  color: #542477;
  font-size: clamp(1.8rem, 4vw, 2.4rem);
  font-weight: 800;
}

.modal-intro {
  margin-bottom: 25px;
  color: #716879;
  font-size: 0.92rem;
  line-height: 1.7;
}

.volunteer-registration-form {
  display: flex;
  flex-direction: column;
  gap: 17px;
}

.form-field {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-field label {
  color: #542477;
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
  background: #fff;
  color: #30263a;
  font: inherit;
  font-size: 0.91rem;
}

.form-field input:focus,
.form-field select:focus,
.form-field textarea:focus {
  border-color: #75449a;
  outline: 3px solid rgba(117, 68, 154, 0.14);
}

.form-field textarea {
  resize: vertical;
}

.primary-button {
  display: inline-flex;
  min-height: 48px;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 12px 23px;
  border: 1px solid #d62839;
  border-radius: 5px;
  background: #d62839;
  color: #fff;
  cursor: pointer;
  font: inherit;
  font-size: 0.9rem;
  font-weight: 750;
  transition: background 0.2s ease, transform 0.2s ease;
}

.primary-button:hover {
  transform: translateY(-2px);
  border-color: #b91f30;
  background: #b91f30;
}

.volunteer-submit {
  width: 100%;
  margin-top: 5px;
}

.form-feedback {
  margin: 0;
  color: #542477;
  font-size: 0.85rem;
  line-height: 1.6;
}

.privacy-note {
  margin: 0;
  color: #716879;
  font-size: 0.77rem;
  line-height: 1.6;
  text-align: center;
}

@keyframes volunteerModalIn {
  from {
    opacity: 0;
    transform: translateY(15px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 640px) {
  .volunteer-modal-overlay {
    align-items: flex-start;
    padding: 12px;
  }

  .volunteer-modal {
    max-height: 95vh;
    margin: auto 0;
    padding: 30px 22px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .volunteer-modal {
    animation: none;
  }
}
</style>
