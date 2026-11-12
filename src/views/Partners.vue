
<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const partners = [
  {
    name: 'Ithemba Family Church',
    initials: 'IFC',
    category: 'Church',
    description:
      'A local church partner sharing in the mission of strengthening faith, building relationships and encouraging people to grow in their walk with God.',
    accent: 'purple'
  },
  {
    name: 'Impact Soup Kitchen',
    initials: 'IM',
    category: 'Community & Outreach',
    description:
      'A ministry partner committed to creating meaningful impact through service, engagement and initiatives that positively influence communities.',
    accent: 'red'
  },
  {
    name: 'The Leadership Experience (LXP) Trust',
    initials: 'LXP',
    category: 'Leadership Development',
    description:
      'A leadership development experience focused on building character, developing vision and equipping individuals to lead like Jesus.',
    accent: 'purple'
  }
]
</script>

<template>
  <main class="partners-page">
    <!-- Hero -->
    <section class="partners-hero">
      <div class="hero-content">
        <span class="eyebrow">OUR COMMUNITY</span>

        <h1>
          Together, We Make
          <span>an Impact.</span>
        </h1>

        <p>
          Meaningful change happens through partnership. We work alongside
          local ministries who share our commitment to faith, service,
          leadership and empowering communities across Africa.
        </p>
      </div>

      <div class="hero-decoration">
        <div class="decoration-circle circle-one"></div>
        <div class="decoration-circle circle-two"></div>
        <div class="decoration-circle circle-three"></div>
      </div>
    </section>

    <!-- Introduction -->
    <section class="partners-intro" id="our-partners">
      <span class="section-label">WORKING TOGETHER</span>
      <h2>Our Local Ministry Partners</h2>

      <p>
        We believe that lasting transformation is achieved when people and
        ministries work together towards a shared purpose. Our local ministry
        partners are an important part of this journey.
      </p>
    </section>

    <!-- PARTNER LIST -->
    <section class="partners-list-section">
    <div class="partners-list">

        <article
        v-for="(partner, index) in partners"
        :key="partner.name"
        class="partner-row"
        >
        <div class="partner-number">
            {{ String(index + 1).padStart(2, '0') }}
        </div>

        <div
            class="partner-logo"
            :class="partner.accent"
        >
            {{ partner.initials }}
        </div>

        <div class="partner-details">
            <span class="partner-category">
            {{ partner.category }}
            </span>

            <h3>{{ partner.name }}</h3>

            <p>{{ partner.description }}</p>
        </div>
        </article>

    </div>
    </section>


    <!-- Partnership Message -->
    <section id="lxp" class="partnership-banner">
      <div>
        <span class="section-label">ONE PURPOSE. SHARED IMPACT.</span>

        <h2>
          Stronger Together.
          <span>Greater Impact.</span>
        </h2>

        <p>
          We are grateful for the ministries that walk alongside us.
          Together, we seek to serve people, strengthen communities and
          contribute to a brighter future for Africa.
        </p>
      </div>

      <button
        class="contact-button"
        @click="router.push('/contact')"
      >
        Connect With Us
      </button>
    </section>
  </main>
</template>

<style scoped>
.partners-page {
  --purple: #54208c;
  --purple-dark: #351052;
  --purple-light: #f6f0fb;
  --red: #c6283d;
  --ink: #282132;
  --muted: #706777;
  --line: #eae3ef;
  --white: #fff;

  background: var(--white);
  color: var(--ink);
  overflow: hidden;
}

.partners-hero {
  min-height: 400px;
  padding: 90px max(8%, calc((100% - 1200px) / 2));
  background: linear-gradient(115deg, #f8f4fc 0%, #fff 65%);
  position: relative;
  display: flex;
  align-items: center;
}

.hero-content {
  max-width: 680px;
  position: relative;
  z-index: 2;
}

.eyebrow,
.section-label {
  display: inline-block;
  color: var(--red);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 2px;
  margin-bottom: 18px;
}

.hero-content h1 {
  font-size: clamp(42px, 6vw, 68px);
  font-weight: 800;
  line-height: 1.08;
  letter-spacing: -2px;
  margin: 0 0 22px;
}

.hero-content h1 span,
.partnership-banner h2 span {
  color: var(--purple);
}

.hero-content p,
.partners-intro p,
.partnership-banner p {
  color: var(--muted);
  line-height: 1.8;
  font-size: 16px;
}

.hero-content p {
  max-width: 590px;
}

.hero-button {
  display: inline-flex;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
  padding: 14px 23px;
  background: var(--purple);
  color: white;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 700;
  transition: background .25s ease;
}

.hero-button:hover {
  background: var(--purple-dark);
  color: white;
}

.hero-decoration {
  position: absolute;
  right: 10%;
  top: 50%;
  transform: translateY(-50%);
  width: 300px;
  height: 300px;
}

.decoration-circle {
  position: absolute;
  border-radius: 50%;
}

.circle-one {
  width: 240px;
  height: 240px;
  background: var(--purple);
  opacity: .09;
  top: 20px;
  left: 20px;
}

.circle-two {
  width: 170px;
  height: 170px;
  background: var(--red);
  opacity: .12;
  right: 0;
  top: 0;
}

.circle-three {
  width: 100px;
  height: 100px;
  background: var(--purple);
  opacity: .16;
  bottom: 0;
  right: 15px;
}

.decoration-text {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: var(--purple-dark);
  font-weight: 900;
  letter-spacing: 3px;
  line-height: 1.8;
  font-size: 14px;
}

.partners-intro {
  max-width: 760px;
  margin: 90px auto 45px;
  padding: 0 25px;
  text-align: center;
}

.partners-intro h2 {
  font-size: clamp(30px, 4vw, 42px);
  font-weight: 800;
  margin: 0 0 18px;
  letter-spacing: -1px;
}

.partners-intro p {
  margin: 0 auto;
}


/* PARTNER LIST */
.partners-list-section {
  padding: 0 25px 100px;
}

.partners-list {
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  border-top: 1px solid var(--line);
}

.partner-row {
  display: grid;
  grid-template-columns: 45px 90px minmax(0, 1fr) 175px;
  align-items: center;
  gap: 25px;
  padding: 32px 20px;
  border-bottom: 1px solid var(--line);
  background: var(--white);
  transition: background .25s ease;
}

.partner-row:hover {
  background: #faf7fd;
}

.partner-number {
  color: var(--purple);
  font-size: 15px;
  font-weight: 800;
}

.partner-logo {
  width: 76px;
  height: 76px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-weight: 900;
  font-size: 20px;
  letter-spacing: -1px;
}

.partner-logo.purple {
  color: var(--purple);
  background: var(--purple-light);
}

.partner-logo.red {
  color: var(--red);
  background: #fff0f2;
}

.partner-details {
  min-width: 0;
}

.partner-category {
  display: inline-block;
  margin-bottom: 8px;
  color: var(--red);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 1.3px;
  text-transform: uppercase;
}

.partner-details h3 {
  margin: 0 0 9px;
  color: var(--purple-dark);
  font-size: 21px;
  font-weight: 800;
  line-height: 1.3;
}

.partner-details p {
  max-width: 600px;
  margin: 0;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.8;
}

.partner-status {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
}

.partner-status span:first-child {
  color: var(--muted);
  font-size: 9px;
  font-weight: 800;
  letter-spacing: .8px;
  text-align: right;
}

.partner-arrow {
  color: var(--purple);
  font-size: 23px;
  font-weight: 700;
  transition: transform .25s ease;
}

.partner-row:hover .partner-arrow {
  transform: translate(4px, -4px);
}

/* TABLET */
@media (max-width: 900px) {
  .partner-row {
    grid-template-columns: 35px 75px minmax(0, 1fr);
    gap: 18px;
  }

  .partner-status {
    grid-column: 3;
    justify-content: flex-start;
    margin-top: 5px;
  }

  .partner-status span:first-child {
    text-align: left;
  }
}

/* MOBILE */
@media (max-width: 600px) {
  .partners-list-section {
    padding: 0 18px 65px;
  }

  .partner-row {
    grid-template-columns: 35px 65px minmax(0, 1fr);
    gap: 12px;
    padding: 25px 8px;
  }

  .partner-logo {
    width: 58px;
    height: 58px;
    font-size: 16px;
  }

  .partner-details h3 {
    font-size: 17px;
  }

  .partner-details p {
    font-size: 13px;
  }

  .partner-category {
    font-size: 9px;
  }

  .partner-status {
    grid-column: 2 / -1;
    margin-top: 8px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .partner-row,
  .partner-arrow {
    transition: none;
  }
}

.partnership-banner {
  background: var(--purple-dark);
  color: white;
  padding: 70px max(8%, calc((100% - 1200px) / 2));
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 35px;
}

.partnership-banner .section-label {
  color: #e9b8c0;
}

.partnership-banner h2 {
  font-size: clamp(30px, 4vw, 43px);
  font-weight: 800;
  margin: 0 0 17px;
}

.partnership-banner h2 span {
  color: #e7c9f7;
}

.partnership-banner p {
  color: rgba(255,255,255,.75);
  max-width: 650px;
  margin: 0;
}

.contact-button {
  flex-shrink: 0;
  padding: 15px 22px;
  background: white;
  color: var(--purple-dark);
  border: none;
  border-radius: 5px;
  font-weight: 800;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 15px;
  transition: background .2s ease;
}

.contact-button:hover {
  background: #f0e7f7;
}

@media (max-width: 900px) {
  .hero-decoration {
    right: -70px;
    opacity: .5;
  }

  .partners-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .partnership-banner {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 600px) {
  .partners-hero {
    min-height: 390px;
    padding: 75px 25px;
  }

  .hero-decoration {
    display: none;
  }

  .partners-intro {
    margin-top: 65px;
  }

  .partners-grid {
    grid-template-columns: 1fr;
    margin-bottom: 65px;
  }

  .partner-card {
    min-height: 320px;
  }

  .partnership-banner {
    padding: 55px 25px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .partner-card,
  .hero-button,
  .contact-button {
    transition: none;
  }

  .partner-card:hover {
    transform: none;
  }
}
</style>
