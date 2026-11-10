<template>
  <main class="programs-page">
    <!-- HERO -->
    <section class="programs-hero" aria-labelledby="programs-title">
      <div class="hero-shade" aria-hidden="true"></div>
      <div class="hero-content">
        <span class="eyebrow">OUR WORK · OUR MISSION</span>
        <h1 id="programs-title">Faith in action.<br /><span>Hope in motion.</span></h1>
        <p class="hero-subtitle">Strengthening ministries. Nurturing young people. Serving communities.</p>
        <p class="hero-description">
          US4Africa partners with African ministries and communities to support meaningful,
          locally rooted work that helps people grow in faith, purpose, and opportunity.
        </p>
        <div class="hero-actions">
          <RouterLink to="/donate" class="primary-button">Support Our Work <span aria-hidden="true">→</span></RouterLink>
          <a href="#initiatives" class="hero-text-link">Explore our initiatives</a>
        </div>
      </div>
      <div class="hero-note"><span class="note-dot"></span> Working alongside local ministries</div>
    </section>

    <!-- INTRO -->
    <section class="programs-intro section-shell">
      <span class="eyebrow">WHY WE DO IT</span>
      <h2>Lasting change starts with <span>people.</span></h2>
      <p>
        We believe communities are strengthened when local ministries are equipped and people
        are supported with care, encouragement, and practical opportunities to grow. Our work
        brings faith and service together through relationships that value dignity and local leadership.
      </p>
    </section>

    <!-- INITIATIVES -->
    <section id="initiatives" class="initiatives-section">
      <div class="section-shell">
        <div class="section-heading">
          <span class="eyebrow">WHAT WE DO</span>
          <h2>Our current initiatives</h2>
          <p>Practical ways we serve, support, and walk alongside communities.</p>
        </div>

        <section id="youth-ministry" class="initiative-row" >
          <div class="initiative-image">
            <img src="/src/assets/youth.jpg" alt="Young people gathered for a group activity" loading="lazy" />
            <span class="image-tag">YOUTH MINISTRY</span>
          </div>
          <div class="initiative-content">
            <span class="initiative-kicker">DISCIPLESHIP · RELATIONSHIPS · PURPOSE</span>
            <h3>Youth Discipleship & Mentorship</h3>
            <p class="initiative-lead">Helping young people grow in faith and lead with character.</p>
            <p>
              Discipleship of God (D.O.Gs), a youth discipleship initiative under The Leadership
              Experience (LXP) Trust, creates space for young people to learn from Scripture,
              build meaningful relationships, and grow in character and leadership.
            </p>
            <ul class="initiative-points">
              <li>Biblical teaching and discipleship</li>
              <li>Mentoring, fellowship, and character development</li>
              <li>Encouragement to serve and influence their communities positively</li>
            </ul>
            <RouterLink to="/contact" class="text-link">Connect with us about D.O.Gs <span aria-hidden="true">↗</span></RouterLink>
          </div>
        </section>

        <section id="children-ministry" class="initiative-row initiative-row-reverse" >
          <div class="initiative-image">
            <img src="/src/assets/children.jpg" alt="Children spending time together outdoors" loading="lazy" />
            <span class="image-tag">CHILDREN MINISTRY</span>
          </div>
          <div class="initiative-content">
            <span class="initiative-kicker">CARE · LEARNING · BELONGING</span>
            <h3>Children Outreach</h3>
            <p class="initiative-lead">Supporting children as they learn, grow, and discover their potential.</p>
            <p>
              Compassion Kids Care Point (KCP), a children’s outreach initiative under LXP Trust,
              provides a caring environment where children can engage with biblical teaching,
              creative activities, and practical learning support.
            </p>
            <ul class="initiative-points">
              <li>Bible teaching and values-based learning</li>
              <li>Creative activities and caring relationships</li>
              <li>Nutritional support, literacy, and numeracy assistance</li>
            </ul>
            <RouterLink to="/contact" class="text-link">Connect with us about KCP <span aria-hidden="true">↗</span></RouterLink>
          </div>
        </section>

        <section id="ministry-empowerment" class="initiative-row">
          <div class="initiative-image">
            <img src="/src/assets/people.jpg" alt="Ministry and community partners collaborating around a table" loading="lazy" />
            <span class="image-tag">SERVANT LEADERSHIP TRAINING</span>
          </div>
          <div class="initiative-content">
            <span class="initiative-kicker">RESOURCES · TRAINING · PARTNERSHIP</span>
            <h3>Leadership & Ministry Empowerment</h3>
            <p class="initiative-lead">Walking alongside ministries so they can serve their communities well.</p>
            <p>
              We seek to strengthen African ministries by helping connect them with resources,
              practical support, training, and relationships that can support their work. We value
              local knowledge and believe sustainable progress is built through collaboration.
            </p>
            <ul class="initiative-points">
              <li>Resource and material support</li>
              <li>Training and opportunities to develop ministry capacity</li>
              <li>Partnerships with people and organisations who share the vision</li>
            </ul>
            <RouterLink to="/get-involved" class="text-link">Explore ministry partnerships <span aria-hidden="true">↗</span></RouterLink>
          </div>
        </section>
      </div>
    </section>

    <!-- IMPACT STORIES -->
<!--
    <section class="impact-section">
      <div class="section-shell">
        <div class="section-heading impact-heading">
          <span class="eyebrow">REAL STORIES, REAL CHANGE</span>
          <h2>Transformative  <span> Impact</span></h2>
          <p>We want to share the voices and experiences of the people, volunteers, and ministry partners connected with our work.</p>
        </div>

          <div class="story-grid">
            <article
              v-for="story in stories"
              :key="story.id"
              class="story-card"
            >
              <div class="story-image">
                <img
                  :src="story.img"
                  :alt="story.title"
                  loading="lazy"
                />
              </div>

              <div class="story-content">
                <div class="story-topline">
                  <span>{{ story.category }}</span>
                  <span class="story-number">{{ story.id }}</span>
                </div>

                <h3>{{ story.title }}</h3>

                <p>{{ story.description }}</p>

                <span class="story-status">
                  {{ story.status }}
                </span>
              </div>
            </article>
          </div>
      </div>
    </section>
  -->
    <!-- VOLUNTEER CTA -->
    <section class="volunteer-cta">
      <div class="cta-orbit orbit-one" aria-hidden="true"></div>
      <div class="cta-orbit orbit-two" aria-hidden="true"></div>
      <div class="cta-content">
        <span class="eyebrow">THERE IS A PLACE FOR YOU</span>
        <h2>Be part of the change.</h2>
        <p>Your time, skills, generosity, and willingness to serve can help strengthen ministries and support communities.</p>
        <div class="cta-actions">
          <button type="button" class="light-button" @click="openVolunteerModal">Become a Volunteer</button>
          <RouterLink to="/get-involved" class="cta-secondary-link">Other ways to get involved</RouterLink>
        </div>
      </div>
    </section>

    <!-- VOLUNTEER REGISTRATION MODAL -->
    <Teleport to="body">
      <div v-if="showVolunteerModal" class="modal-backdrop" @click.self="closeVolunteerModal" @keydown.esc="closeVolunteerModal">
        <section class="volunteer-modal" role="dialog" aria-modal="true" aria-labelledby="volunteer-modal-title">
          <button type="button" class="modal-close" aria-label="Close registration form" @click="closeVolunteerModal">&times;</button>
          <template v-if="!formSubmitted">
            <span class="eyebrow">JOIN OUR MISSION</span>
            <h2 id="volunteer-modal-title">Volunteer registration</h2>
            <p class="modal-description">Tell us a little about yourself and how you would like to contribute.</p>
            <form class="volunteer-form" @submit.prevent="submitVolunteerForm">
              <div class="form-row">
                <div class="form-field">
                  <label for="volunteer-name">Full name *</label>
                  <input id="volunteer-name" v-model.trim="volunteerForm.name" type="text" autocomplete="name" placeholder="Your full name" required />
                </div>
                <div class="form-field">
                  <label for="volunteer-email">Email address *</label>
                  <input id="volunteer-email" v-model.trim="volunteerForm.email" type="email" autocomplete="email" placeholder="you@example.com" required />
                </div>
              </div>
              <div class="form-row">
                <div class="form-field">
                  <label for="volunteer-phone">Phone number</label>
                  <input id="volunteer-phone" v-model.trim="volunteerForm.phone" type="tel" autocomplete="tel" placeholder="Your phone number" />
                </div>
                <div class="form-field">
                  <label for="volunteer-location">Town or city *</label>
                  <input id="volunteer-location" v-model.trim="volunteerForm.location" type="text" autocomplete="address-level2" placeholder="Your town or city" required />
                </div>
              </div>
              <div class="form-field">
                <label for="volunteer-interest">Area of interest *</label>
                <select id="volunteer-interest" v-model="volunteerForm.interest" required>
                  <option value="" disabled>Select an area</option>
                  <option>Youth Discipleship (D.O.Gs)</option>
                  <option>Children Outreach (KCP)</option>
                  <option>Ministry Empowerment</option>
                  <option>Administration and Communications</option>
                  <option>Fundraising and Partnerships</option>
                  <option>Other</option>
                </select>
              </div>
              <div class="form-field">
                <label for="volunteer-message">Tell us more (optional)</label>
                <textarea id="volunteer-message" v-model.trim="volunteerForm.message" rows="3" placeholder="Your skills, availability, or how you would like to help"></textarea>
              </div>
              <label class="consent-field"><input v-model="volunteerForm.consent" type="checkbox" required /><span>I agree that US4Africa may use these details to contact me about volunteering. *</span></label>
              <button type="submit" class="primary-button submit-button">Submit registration <span aria-hidden="true">→</span></button>
              <p class="form-footnote">This form is currently a front-end demonstration. It does not send or save your details until a form service or backend is connected.</p>
            </form>
          </template>
          <div v-else class="success-message">
            <div class="success-icon" aria-hidden="true">✓</div>
            <h2 id="volunteer-modal-title">Thank you for your interest!</h2>
            <p>Your form passed the local checks, but your registration has not been sent or saved yet. Please contact <a href="mailto:Admin@us4africa.org">Admin@us4africa.org</a> to register while the online form is being connected.</p>
            <button type="button" class="primary-button" @click="closeVolunteerModal">Close</button>
          </div>
        </section>
      </div>
    </Teleport>
  </main>
</template>

<script setup>
import { reactive, ref, onBeforeUnmount } from 'vue'

const showVolunteerModal = ref(false)
const formSubmitted = ref(false)

const volunteerForm = reactive({
  name: '',
  email: '',
  phone: '',
  location: '',
  interest: '',
  message: '',
  consent: false,
})

// These are transparent story placeholders, not claims of completed outcomes.
const stories = [
  {
    id: '01',
    category: "A STUDENT'S JOURNEY",
    img: '/src/assets/stud.jpg',
    title: 'Growing in faith and character',
    description: 'Meet Amina, a bright student whose life changed when she received a scholarship through our educational support program. With access to quality education, she is now pursuing her dreams and inspiring her peers. Her story exemplifies the power of opportunity.',
  },
  {
    id: '02',
    category: "HOPE FOR THE KIDS",
    img: '/src/assets/children.jpg',
    title: 'A place to learn and belong',
    description: "Thanks to our healthcare outreach, families like the Kafui's have access to vital medical services. After receiving treatment during one of our medical camps, they are now healthier and more hopeful for the future. Their gratitude fuels our mission.",
  },
  {
    id: '03',
    category: 'YOUTH MENTORSHIP',
    img: '/src/assets/youth-2.jpg',
    title: 'Serving better, together',
    description: 'Through our community development efforts, villages have transformed their living conditions. The construction of new wells has provided clean water, significantly improving health and quality of life. These changes are a testament to the strength of collaboration.',
  },
]

function openVolunteerModal() {
  formSubmitted.value = false
  showVolunteerModal.value = true
  document.body.style.overflow = 'hidden'
}

function closeVolunteerModal() {
  showVolunteerModal.value = false
  document.body.style.overflow = ''
}

function handleEscape(event) {
  if (event.key === 'Escape' && showVolunteerModal.value) closeVolunteerModal()
}

function submitVolunteerForm() {
  // Demo only: connect a backend or form provider before collecting real registrations.
  formSubmitted.value = true
}

if (typeof window !== 'undefined') window.addEventListener('keydown', handleEscape)

onBeforeUnmount(() => {
  if (typeof window !== 'undefined') window.removeEventListener('keydown', handleEscape)
  if (typeof document !== 'undefined') document.body.style.overflow = ''
})
</script>

<style scoped>
.programs-page {
  --purple: #54208c;
  --purple-deep: #321052;
  --purple-soft: #f5f0fa;
  --red: #c6283d;
  --red-dark: #a91e31;
  --ink: #262231;
  --muted: #6f6a78;
  --line: #e9e3ee;
  --white: #fff;
  color: var(--ink);
  background: var(--white);
  overflow: hidden;
}

.programs-page *, .programs-page *::before, .programs-page *::after { box-sizing: border-box; }
.programs-page h1, .programs-page h2, .programs-page h3, .programs-page p { margin-top: 0; }
.programs-page p { line-height: 1.8; }
.section-shell { width: min(1180px, calc(100% - 64px)); margin-inline: auto; }
.eyebrow { display: inline-block; color: var(--red); font-size: .74rem; font-weight: 800; letter-spacing: .18em; line-height: 1.7; text-transform: uppercase; }

.programs-hero {
  position: relative;
  display: flex;
  min-height: min(760px, 90vh);
  align-items: center;
  padding: 110px max(8%, calc((100% - 1180px) / 2));
  color: var(--white);
  background: var(--purple-deep) url('/src/assets/youth-2.jpg') center 40% / cover no-repeat;
  isolation: isolate;
}
.hero-shade { position: absolute; z-index: -1; inset: 0; background: linear-gradient(90deg, rgba(35, 11, 58, .96) 0%, rgba(61, 20, 94, .86) 49%, rgba(61, 20, 94, .24) 100%); }
.hero-content { max-width: 760px; }
.programs-hero .eyebrow { color: #ffb6c0; }
.programs-hero h1 { margin: 18px 0 20px; color: var(--white); font-size: clamp(3.1rem, 7vw, 6rem); font-weight: 850; letter-spacing: -.055em; line-height: 1.02; }
.programs-hero h1 span { color: #ff9eae; }
.hero-subtitle { max-width: 660px; margin-bottom: 16px; font-size: clamp(1.15rem, 2.3vw, 1.55rem); font-weight: 650; line-height: 1.5 !important; }
.hero-description { max-width: 610px; margin-bottom: 30px; color: rgba(255,255,255,.84); font-size: 1.02rem; }
.hero-actions, .cta-actions { display: flex; align-items: center; flex-wrap: wrap; gap: 22px; }
.primary-button, .light-button { display: inline-flex; min-height: 50px; align-items: center; justify-content: center; gap: 14px; padding: 13px 22px; border: 1px solid var(--red); border-radius: 5px; background: var(--red); color: var(--white); cursor: pointer; font: inherit; font-size: .92rem; font-weight: 750; text-decoration: none; transition: transform .2s ease, background .2s ease, box-shadow .2s ease; }
.primary-button:hover { transform: translateY(-2px); background: var(--red-dark); box-shadow: 0 8px 24px rgba(0,0,0,.14); color: var(--white); }
.hero-text-link { color: var(--white); font-weight: 700; text-decoration-color: rgba(255,255,255,.6); text-underline-offset: 5px; }
.hero-note { position: absolute; right: max(8%, calc((100% - 1180px) / 2)); bottom: 34px; display: flex; align-items: center; gap: 10px; color: rgba(255,255,255,.85); font-size: .78rem; letter-spacing: .04em; }
.note-dot { width: 8px; height: 8px; border-radius: 50%; background: #ff9eae; box-shadow: 0 0 0 5px rgba(255,158,174,.18); }

.programs-intro { max-width: 900px; padding-block: 105px 100px; text-align: center; }
.programs-intro h2, .section-heading h2 { margin: 14px 0 20px; color: var(--purple-deep); font-size: clamp(2.1rem, 4.2vw, 3.5rem); font-weight: 800; letter-spacing: -.045em; line-height: 1.12; }
.programs-intro h2 span, .impact-heading h2 span { color: var(--red); }
.programs-intro p { max-width: 790px; margin: 0 auto; color: var(--muted); font-size: 1.05rem; }

.initiatives-section { padding: 88px 0 105px; background: #fbf9fd; scroll-margin-top: 90px; }
.section-heading { max-width: 750px; margin: 0 auto 76px; text-align: center; }
.section-heading > p { margin-bottom: 0; color: var(--muted); }
.initiative-row { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, .95fr); align-items: center; gap: clamp(42px, 7vw, 92px); margin-bottom: 112px; }
.initiative-row:last-child { margin-bottom: 0; }
.initiative-row-reverse .initiative-image { order: 2; }
.initiative-row-reverse .initiative-content { order: 1; }
.initiative-image { position: relative; min-height: 430px; overflow: hidden; border-radius: 10px; background: #e9e1f0; box-shadow: 15px 15px 0 #eadcf5; }
.initiative-image::after { position: absolute; inset: 45% 0 0; background: linear-gradient(transparent, rgba(31, 12, 48, .34)); content: ''; pointer-events: none; }
.initiative-image img { display: block; width: 100%; height: 100%; min-height: 430px; object-fit: cover; transition: transform .55s ease; }
.initiative-image:hover img { transform: scale(1.045); }
.image-tag { position: absolute; z-index: 1; bottom: 20px; left: 22px; color: white; font-size: .72rem; font-weight: 800; letter-spacing: .16em; }
.initiative-kicker { color: var(--red); font-size: .72rem; font-weight: 800; letter-spacing: .14em; }
.initiative-content h3 { margin: 12px 0 16px; color: var(--purple-deep); font-size: clamp(1.9rem, 3.2vw, 2.7rem); font-weight: 800; letter-spacing: -.04em; line-height: 1.12; }
.initiative-lead { margin-bottom: 16px; color: var(--purple); font-size: 1.08rem; font-weight: 700; line-height: 1.6 !important; }
.initiative-content > p:not(.initiative-lead) { color: var(--muted); }
.initiative-points { display: grid; gap: 10px; margin: 22px 0 27px; padding: 0; list-style: none; }
.initiative-points li { position: relative; padding-left: 27px; color: var(--ink); line-height: 1.6; }
.initiative-points li::before { position: absolute; top: .15em; left: 0; display: grid; width: 18px; height: 18px; place-items: center; border-radius: 50%; background: #f9e8ec; color: var(--red); content: '✓'; font-size: .72rem; font-weight: 900; }
.text-link { display: inline-flex; align-items: center; gap: 12px; padding-bottom: 5px; border-bottom: 2px solid #e6a5b0; color: var(--purple); font-weight: 800; text-decoration: none; }
.text-link span { color: var(--red); font-size: 1.15rem; transition: transform .2s ease; }
.text-link:hover span { transform: translate(2px, -2px); }

.impact-section { padding: 105px 0; background: var(--white); }
.impact-heading { margin-bottom: 48px; }

.story-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
  align-items: stretch;
}

.story-card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 10px;
  background: white;
  box-shadow: 0 12px 34px rgba(54, 22, 78, .045);
  transition: transform .3s ease, box-shadow .3s ease;
}

.story-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 18px 40px rgba(54, 22, 78, .10);
}

.story-image {
  width: 100%;
  height: 210px;
  overflow: hidden;
  background: var(--purple-soft);
}

.story-image img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform .5s ease;
}

.story-card:hover .story-image img {
  transform: scale(1.04);
}

.story-content {
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 24px;
}

.story-topline {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 20px;
  color: var(--red);
  font-size: .66rem;
  font-weight: 850;
  letter-spacing: .1em;
}

.story-number {
  color: #b7a9c4;
  font-size: .85rem;
}

.story-content h3 {
  margin-bottom: 12px;
  color: var(--purple-deep);
  font-size: 1.25rem;
  font-weight: 800;
}

.story-content p {
  margin-bottom: 22px;
  color: var(--muted);
  font-size: .92rem;
  line-height: 1.7;
}

.story-status {
  margin-top: auto;
  padding-top: 14px;
  border-top: 1px solid var(--line);
  color: var(--red);
  font-size: .77rem;
  font-weight: 750;
}

/* Tablet */
@media (max-width: 900px) {
  .story-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

/* Mobile */
@media (max-width: 600px) {
  .story-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .story-image {
    height: 220px;
  }

  .story-content {
    padding: 22px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .story-card,
  .story-image img {
    transition: none;
  }

  .story-card:hover {
    transform: none;
  }
}

.volunteer-cta { position: relative; overflow: hidden; padding: 92px 24px; background: linear-gradient(120deg, #351154 0%, #54208c 68%, #6b2b9f 100%); color: white; text-align: center; isolation: isolate; }
.cta-content { position: relative; z-index: 1; max-width: 760px; margin: 0 auto; }
.volunteer-cta .eyebrow { color: #ffb4bf; }
.volunteer-cta h2 { margin: 14px 0 18px; color: white; font-size: clamp(2.4rem, 5vw, 4rem); font-weight: 850; letter-spacing: -.05em; line-height: 1.1; }
.volunteer-cta p { max-width: 650px; margin: 0 auto 28px; color: rgba(255,255,255,.82); }
.cta-actions { justify-content: center; }
.light-button { border-color: white; background: white; color: var(--purple-deep); }
.light-button:hover { transform: translateY(-2px); background: #f7efff; color: var(--purple-deep); }
.cta-secondary-link { color: white; font-weight: 750; text-underline-offset: 5px; }
.cta-orbit { position: absolute; z-index: -1; width: 330px; height: 330px; border: 1px solid rgba(255,255,255,.13); border-radius: 50%; box-shadow: 0 0 0 35px rgba(255,255,255,.035), 0 0 0 75px rgba(255,255,255,.025); }
.orbit-one { top: -190px; left: -110px; }
.orbit-two { right: -110px; bottom: -230px; }

.modal-backdrop { position: fixed; z-index: 9999; inset: 0; display: flex; align-items: center; justify-content: center; overflow-y: auto; padding: 22px 14px; background: rgba(24, 9, 35, .76); backdrop-filter: blur(5px); }
.volunteer-modal { position: relative; width: 100%; max-width: 720px; max-height: calc(100vh - 44px); overflow-y: auto; padding: 38px; border-radius: 12px; background: white; box-shadow: 0 25px 90px rgba(0,0,0,.28); }
.modal-close { position: absolute; top: 13px; right: 15px; display: grid; width: 40px; height: 40px; place-items: center; border: 0; border-radius: 50%; background: var(--purple-soft); color: var(--purple); cursor: pointer; font-size: 1.8rem; line-height: 1; }
.volunteer-modal h2 { margin: 10px 35px 10px 0; color: var(--purple-deep); font-size: clamp(1.7rem, 4vw, 2.3rem); font-weight: 850; letter-spacing: -.035em; }
.modal-description { margin-bottom: 25px; color: var(--muted); font-size: .94rem; }
.volunteer-form { display: flex; flex-direction: column; gap: 17px; }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.form-field { display: flex; min-width: 0; flex-direction: column; gap: 7px; }
.form-field label { color: var(--ink); font-size: .84rem; font-weight: 750; }
.form-field input, .form-field select, .form-field textarea { width: 100%; min-width: 0; padding: 12px 13px; border: 1px solid #dcd4e3; border-radius: 5px; background: white; color: var(--ink); font: inherit; font-size: .9rem; }
.form-field input:focus, .form-field select:focus, .form-field textarea:focus { border-color: var(--purple); outline: 3px solid rgba(84,32,140,.12); }
.form-field textarea { resize: vertical; }
.consent-field { display: flex; align-items: flex-start; gap: 10px; color: var(--muted); font-size: .82rem; line-height: 1.6; }
.consent-field input { flex: 0 0 auto; width: 17px; height: 17px; margin-top: 3px; accent-color: var(--purple); }
.submit-button { width: 100%; }
.form-footnote { margin: 0; color: var(--muted); font-size: .75rem; line-height: 1.6 !important; }
.success-message { padding: 24px 4px 8px; text-align: center; }
.success-icon { display: grid; width: 58px; height: 58px; margin: 0 auto 18px; place-items: center; border-radius: 50%; background: #f0e8f7; color: var(--purple); font-size: 1.8rem; }
.success-message p { margin: 18px 0 25px; color: var(--muted); }
.success-message a { color: var(--purple); font-weight: 750; }

.programs-page a:focus-visible, .programs-page button:focus-visible { outline: 3px solid #ed8191; outline-offset: 4px; }
@media (max-width: 900px) {
  .programs-hero { min-height: 660px; padding: 100px 7%; }
  .initiative-row { gap: 36px; }
  .initiative-image, .initiative-image img { min-height: 360px; }
  .story-grid { grid-template-columns: 1fr; max-width: 650px; margin-inline: auto; }
  .story-card { min-height: 0; }
}
@media (max-width: 680px) {
  .section-shell { width: calc(100% - 40px); }
  .programs-hero { min-height: 680px; padding: 90px 24px 110px; background-position: 57% center; }
  .hero-shade { background: linear-gradient(90deg, rgba(35,11,58,.95), rgba(61,20,94,.74)); }
  .programs-hero h1 { font-size: clamp(2.8rem, 13vw, 4.3rem); }
  .hero-note { right: 24px; bottom: 28px; left: 24px; font-size: .7rem; }
  .hero-actions { align-items: flex-start; flex-direction: column; gap: 18px; }
  .programs-intro { padding-block: 72px; }
  .initiatives-section, .impact-section { padding-block: 72px; }
  .section-heading { margin-bottom: 48px; }
  .initiative-row, .initiative-row-reverse { grid-template-columns: 1fr; gap: 30px; margin-bottom: 75px; }
  .initiative-row-reverse .initiative-image, .initiative-row-reverse .initiative-content { order: initial; }
  .initiative-image, .initiative-image img { min-height: 275px; max-height: 350px; }
  .initiative-content { padding-inline: 4px; }
  .volunteer-cta { padding: 72px 24px; }
  .cta-actions { flex-direction: column; gap: 18px; }
  .volunteer-modal { padding: 34px 21px 24px; }
  .form-row { grid-template-columns: 1fr; }
}
@media (prefers-reduced-motion: reduce) {
  .programs-page *, .programs-page *::before, .programs-page *::after { scroll-behavior: auto !important; transition-duration: .01ms !important; animation-duration: .01ms !important; }
}
</style>
