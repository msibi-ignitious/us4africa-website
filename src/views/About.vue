
<script setup lang="ts">
const journey = [
  {
    title: "The Visionary Beginning",
    date: "Our Foundation",
    description:
      "US4Africa was established with a vision to empower African ministries through support, service and meaningful partnerships.",
    image: "/about.jpg",
  },
  {
    title: "Serving Through Leadership",
    date: "December 2025",
    description:
      "Leadership development and servant-hearted service reflect our commitment to equipping people to make a lasting difference.",
    image: "/leader.jpg",
  },
  {
    title: "Growing Through Partnership",
    date: "Our Ongoing Journey",
    description:
      "We believe local ministries are essential to community transformation. We seek to connect people, resources and organisations around shared goals.",
    image: "/leader.jpg",
  },
  {
    title: "Building a Hopeful Future",
    date: "Looking Ahead",
    description:
      "We continue working towards a future where ministries have greater access to the resources and support they need to serve their communities.",
    image: "/about.jpg",
  },
];

const values = [
  {
    number: "01",
    title: "Faith",
    description:
      "Our work is grounded in faith, compassion and a commitment to serving others.",
  },
  {
    number: "02",
    title: "Service",
    description:
      "We believe meaningful leadership begins with a willingness to serve people and communities.",
  },
  {
    number: "03",
    title: "Partnership",
    description:
      "We value collaboration and seek to strengthen the work of local ministries and community organisations.",
  },
  {
    number: "04",
    title: "Stewardship",
    description:
      "We aim to use resources responsibly, transparently and in support of meaningful community impact.",
  },
];

const team = [
  {
    name: "Michele Mwanza",
    role: "Executive Director",
    description:
      "Provides strategic leadership and oversees organisational direction and operations.",
    image: "/download.png",
  },
  {
    name: "Tariro Mapise",
    role: "Outreach Coordinator",
    description:
      "Supports relationships with ministries and helps connect community needs with appropriate resources.",
    image: "/download.png",
  },
  {
    name: "George Mwanza",
    role: "Program Manager",
    description:
      "Coordinates program planning and delivery, with an emphasis on effective implementation.",
    image: "/download.png",
  },
];

const partners = [
  {
    number: "01",
    title: "Local Ministries",
    description:
      "Supporting ministry-led work that responds to the needs of local communities.",
  },
  {
    number: "02",
    title: "Community Organisations",
    description:
      "Encouraging collaboration with organisations that share a commitment to serving people.",
  },
  {
    number: "03",
    title: "Supporters and Sponsors",
    description:
      "Connecting generous individuals and businesses with opportunities to make a difference.",
  },
];
</script>

<template>
  <main class="about-page">
    <!-- HERO -->
    <section class="about-hero">
      <div class="hero-background"></div>

      <div class="hero-content">
        <span class="eyebrow hero-eyebrow">
          OUR PURPOSE. OUR MISSION. OUR IMPACT.
        </span>

        <h1>
          Empowering ministries.
          <span>Transforming lives.</span>
        </h1>

        <p>
          US4Africa is a dedicated 501(c)(3) charitable organisation
          committed to empowering African ministries through support,
          service and meaningful partnerships.
        </p>

        <div class="hero-actions">
          <RouterLink to="/donate" class="button button-red">
            Support Our Mission
          </RouterLink>

          <a href="#our-story" class="button button-outline">
            Discover Our Story
          </a>
        </div>

        <div class="hero-caption">
          <span class="caption-line"></span>
          <span>Faith in action. Service with purpose.</span>
        </div>
      </div>

      <div class="hero-decoration" aria-hidden="true">US4A</div>
    </section>

    <!-- INTRODUCTION -->
    <section class="intro-section section-space">
      <div class="content-container intro-grid">
        <div class="intro-label">
          <span class="eyebrow">WHO WE ARE</span>
          <h2>
            Every community deserves the opportunity to flourish.
          </h2>
        </div>

        <div class="intro-copy">
          <p class="intro-lead">
            We believe lasting transformation grows when people
            and ministries are equipped to serve effectively.
          </p>
          <p>
            US4Africa exists to connect resources, relationships and
            opportunities with African ministries doing meaningful work.
            Through support and service, we aim to strengthen local efforts
            and contribute to healthier, more hopeful communities.
          </p>

          <RouterLink to="/programs" class="text-link">
            Explore Our Works <span aria-hidden="true">→</span>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- MISSION AND VISION -->
    <section class="mission-section section-space">
      <div class="content-container mission-grid">
        <article class="mission-card">
          <div class="mission-icon" aria-hidden="true">
            <svg viewBox="0 0 48 48" fill="none">
              <path
                d="M24 40S6 29 6 17a10 10 0 0 1 18-6 10 10 0 0 1 18 6c0 12-18 23-18 23Z"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <span class="eyebrow">OUR MISSION</span>
          <h2>Empowering through support and service.</h2>
          <p>
            To empower African ministries by connecting them with
            resources, partnerships and practical support that help
            them serve their communities.
          </p>
        </article>

        <article class="vision-card">
          <div class="vision-number">01 / 02</div>
          <span class="eyebrow">OUR VISION</span>
          <h2>A future where communities can thrive.</h2>
          <p>
            We aspire to see strong, equipped and connected ministries
            contributing to lasting transformation across Africa.
          </p>

          <div class="vision-decoration" aria-hidden="true">
            <span></span><span></span><span></span>
          </div>
        </article>
      </div>
    </section>

    <!-- OUR STORY -->
    <section id="our-story" class="story-section section-space">
      <div class="content-container">
        <div class="section-heading">
          <span class="eyebrow">THE STORY SO FAR</span>
          <h2>Our Journey</h2>
          <p>
            A continuing journey of faith, service and a commitment
            to strengthening ministries and communities.
          </p>
        </div>

        <div class="journey-list">
          <article
            v-for="(item, index) in journey"
            :key="item.title"
            class="journey-item"
          >
            <div class="journey-marker">
              <span>{{ String(index + 1).padStart(2, "0") }}</span>
            </div>

            <div class="journey-image-wrap">
              <img
                :src="item.image"
                :alt="item.title"
                class="journey-image"
                loading="lazy"
              />
            </div>

            <div class="journey-content">
              <span class="journey-date">{{ item.date }}</span>
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- VALUES -->
    <section class="values-section section-space">
      <div class="content-container">
        <div class="section-heading">
          <span class="eyebrow">WHAT GUIDES US</span>
          <h2>Our Core Values</h2>
          <p>
            The principles that shape how we serve, partner and use
            the resources entrusted to us.
          </p>
        </div>

        <div class="values-grid">
          <article
            v-for="value in values"
            :key="value.number"
            class="value-card"
          >
            <span class="value-number">{{ value.number }}</span>
            <h3>{{ value.title }}</h3>
            <p>{{ value.description }}</p>
            <span class="value-accent"></span>
          </article>
        </div>
      </div>
    </section>

    <!-- TEAM -->
    <section class="team-section section-space">
      <div class="content-container">
        <div class="section-heading">
          <span class="eyebrow">THE PEOPLE BEHIND THE MISSION</span>
          <h2>People Who Serve With Purpose</h2>
          <p>
            Our mission is advanced by people committed to leadership,
            collaboration and service.
          </p>
        </div>

        <div class="team-grid">
          <article
            v-for="person in team"
            :key="person.name"
            class="team-card"
          >
            <div class="team-image-wrap">
              <img
                :src="person.image"
                :alt="person.name"
                class="team-image"
                loading="lazy"
              />
            </div>

            <div class="team-content">
              <span class="team-role">{{ person.role }}</span>
              <h3>{{ person.name }}</h3>
              <p>{{ person.description }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>    
<!-- PARTNERSHIPS -->
  <section class="partners-section section-space">
    <div class="content-container">
      <div class="section-heading">
        <span class="eyebrow">STRONGER TOGETHER</span>
        <h2>Partnership Makes a Difference</h2>
        <p>
          Lasting community impact grows through collaboration,
          generosity and a shared commitment to serving others.
        </p>
      </div>

      <div class="partners-list">
        <article
          v-for="partner in partners"
          :key="partner.number"
          class="partner-row"
        >
          <div class="partner-text">
            <span class="partner-number">{{ partner.number }}</span>
            <h3>{{ partner.title }}</h3>
            <p>{{ partner.description }}</p>

            <RouterLink to="/get-involved" class="partner-link">
              Partner With Us
              <span aria-hidden="true">→</span>
            </RouterLink>
          </div>

          <div class="partner-image-wrap">
            <img
              class="partner-image"
              loading="lazy"
            />
          </div>
        </article>
      </div>

      <div class="partners-link-wrap">
        <RouterLink to="/get-involved" class="text-link">
          Discover How to Get Involved
          <span aria-hidden="true">→</span>
        </RouterLink>
      </div>
    </div>
  </section>


    <!-- CALL TO ACTION -->
    <section class="about-cta">
      <div class="cta-pattern" aria-hidden="true"></div>

      <div class="content-container cta-content">
        <span class="eyebrow">BE PART OF THE STORY</span>
        <h2>
          Together, we can help
          <span>make a lasting difference.</span>
        </h2>

        <p>
          Join us in empowering ministries, supporting community initiatives
          and bringing meaningful opportunities to people across Africa.
        </p>

        <div class="cta-actions">
          <RouterLink to="/donate" class="button button-red">
            Give Today
          </RouterLink>

          <RouterLink to="/get-involved" class="button button-white">
            Partner With Us
          </RouterLink>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.about-page {
  --purple: #54208c;
  --purple-dark: #351052;
  --purple-light: #f6f0fb;
  --red: #c6283d;
  --ink: #282132;
  --muted: #706777;
  --line: #eae3ef;
  --white: #ffffff;

  color: var(--ink);
  background: var(--white);
  overflow: hidden;
}

.content-container {
  width: min(1160px, 90%);
  margin: 0 auto;
}

.section-space {
  padding: 94px 0;
}

.eyebrow {
  display: inline-block;
  color: var(--red);
  font-size: 0.76rem;
  font-weight: 800;
  letter-spacing: 0.16em;
  line-height: 1.6;
}

/* HERO */
.about-hero {
  position: relative;
  display: flex;
  align-items: center;
  min-height: 650px;
  min-height: min(780px, 90svh);
  padding: 110px 7%;
  isolation: isolate;
  background: var(--purple-dark);
  color: var(--white);
}

.hero-background {
  position: absolute;
  z-index: -2;
  inset: 0;
  background:
    linear-gradient(
      90deg,
      rgba(38, 11, 59, 0.94) 0%,
      rgba(65, 22, 99, 0.84) 48%,
      rgba(44, 13, 66, 0.36) 100%
    ),
    url("/src/assets/home.jpg") center / cover no-repeat;
}

.hero-content {
  width: min(780px, 100%);
}

.hero-eyebrow {
  margin-bottom: 24px;
  color: #ffb6c0;
}

.hero-content h1 {
  max-width: 800px;
  margin: 0 0 24px;
  color: var(--white);
  font-size: clamp(2.7rem, 6.4vw, 5.5rem);
  font-weight: 800;
  letter-spacing: -0.055em;
  line-height: 1.04;
}

.hero-content h1 span {
  display: block;
  color: #f5c7d0;
}

.hero-content > p {
  max-width: 630px;
  margin: 0;
  color: rgba(255, 255, 255, 0.87);
  font-size: clamp(1rem, 1.8vw, 1.18rem);
  line-height: 1.9;
}

.hero-actions,
.cta-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 32px;
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 50px;
  padding: 14px 24px;
  border: 1px solid transparent;
  border-radius: 5px;
  font-size: 0.92rem;
  font-weight: 750;
  text-align: center;
  text-decoration: none;
  transition:
    background-color 0.25s ease,
    border-color 0.25s ease,
    color 0.25s ease,
    transform 0.25s ease;
}

.button:hover {
  transform: translateY(-2px);
}

.button-red {
  color: var(--white);
  background: var(--red);
  border-color: var(--red);
}

.button-red:hover {
  color: var(--white);
  background: #a91e31;
  border-color: #a91e31;
}

.button-outline {
  color: var(--white);
  background: transparent;
  border-color: rgba(255, 255, 255, 0.65);
}

.button-outline:hover {
  color: var(--purple-dark);
  background: var(--white);
  border-color: var(--white);
}

.hero-caption {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 48px;
  color: rgba(255, 255, 255, 0.74);
  font-size: 0.85rem;
}

.caption-line {
  width: 35px;
  height: 2px;
  background: #ed8192;
}

.hero-decoration {
  position: absolute;
  right: -10px;
  bottom: 12px;
  color: rgba(255, 255, 255, 0.045);
  font-size: clamp(7rem, 18vw, 18rem);
  font-weight: 900;
  letter-spacing: -0.1em;
  pointer-events: none;
}

/* INTRODUCTION */
.intro-grid {
  display: grid;
  grid-template-columns: 1fr 0.9fr;
  gap: 90px;
  align-items: start;
}

.intro-label h2 {
  margin: 17px 0 0;
  color: var(--purple-dark);
  font-size: clamp(2rem, 4vw, 3.2rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 1.2;
}

.intro-copy {
  padding-top: 24px;
}

.intro-copy p {
  color: var(--muted);
  font-size: 0.98rem;
  line-height: 1.9;
}

.intro-copy .intro-lead {
  margin-top: 0;
  color: var(--ink);
  font-size: 1.18rem;
  font-weight: 650;
  line-height: 1.75;
}

.text-link {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  margin-top: 15px;
  color: var(--purple);
  font-weight: 750;
  text-decoration: none;
}

.text-link span {
  transition: transform 0.2s ease;
}

.text-link:hover {
  color: var(--red);
}

.text-link:hover span {
  transform: translateX(4px);
}

/* MISSION AND VISION */
.mission-section {
  background: #faf8fc;
}

.mission-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 26px;
}

.mission-card,
.vision-card {
  position: relative;
  min-height: 360px;
  padding: clamp(28px, 4vw, 48px);
  border-radius: 12px;
  overflow: hidden;
}

.mission-card {
  background: var(--white);
  border: 1px solid var(--line);
}

.mission-icon {
  display: grid;
  place-items: center;
  width: 58px;
  height: 58px;
  margin-bottom: 28px;
  border-radius: 12px;
  color: var(--purple);
  background: var(--purple-light);
}

.mission-icon svg {
  width: 31px;
  height: 31px;
}

.mission-card h2,
.vision-card h2 {
  max-width: 430px;
  margin: 13px 0;
  font-size: clamp(1.65rem, 3vw, 2.4rem);
  font-weight: 800;
  letter-spacing: -0.035em;
  line-height: 1.2;
}

.mission-card h2 {
  color: var(--purple-dark);
}

.mission-card p,
.vision-card p {
  max-width: 470px;
  margin-bottom: 0;
  font-size: 0.96rem;
  line-height: 1.85;
}

.mission-card p {
  color: var(--muted);
}

.vision-card {
  color: var(--white);
  background: var(--purple);
}

.vision-card .eyebrow {
  color: #ffbec8;
}

.vision-card h2 {
  color: var(--white);
}

.vision-card p {
  color: rgba(255, 255, 255, 0.82);
}

.vision-number {
  position: absolute;
  top: 36px;
  right: 34px;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.08em;
}

.vision-decoration {
  display: flex;
  gap: 7px;
  margin-top: 35px;
}

.vision-decoration span {
  display: block;
  width: 26px;
  height: 4px;
  border-radius: 5px;
  background: #f2a2b0;
}

.vision-decoration span:nth-child(2) {
  width: 44px;
  background: var(--white);
}

/* SECTION HEADINGS */
.section-heading {
  max-width: 720px;
  margin: 0 auto 48px;
  text-align: center;
}

.section-heading h2 {
  margin: 13px 0;
  color: var(--purple-dark);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  letter-spacing: -0.045em;
  line-height: 1.15;
}

.section-heading > p {
  max-width: 640px;
  margin: 0 auto;
  color: var(--muted);
  font-size: 0.98rem;
  line-height: 1.85;
}

/* JOURNEY */
.journey-list {
  max-width: 960px;
  margin: 0 auto;
}

.journey-item {
  display: grid;
  grid-template-columns: 54px minmax(180px, 0.8fr) 1.2fr;
  align-items: center;
  gap: 28px;
  padding: 30px 0;
  border-bottom: 1px solid var(--line);
}

.journey-item:first-child {
  padding-top: 0;
}

.journey-marker {
  align-self: stretch;
  display: flex;
  justify-content: center;
  padding-top: 10px;
  border-right: 1px solid #e8dced;
}

.journey-marker span {
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  color: var(--purple);
  background: var(--purple-light);
  font-size: 0.78rem;
  font-weight: 800;
}

.journey-image-wrap {
  overflow: hidden;
  border-radius: 8px;
  background: #f2edf5;
}

.journey-image {
  display: block;
  width: 100%;
  height: 185px;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.journey-item:hover .journey-image {
  transform: scale(1.035);
}

.journey-date {
  color: var(--red);
  font-size: 0.77rem;
  font-weight: 800;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.journey-content h3 {
  margin: 9px 0;
  color: var(--purple-dark);
  font-size: 1.35rem;
  font-weight: 750;
  line-height: 1.35;
}

.journey-content p {
  margin: 0;
  color: var(--muted);
  font-size: 0.92rem;
  line-height: 1.8;
}

/* VALUES */
.values-section {
  background: var(--purple-dark);
}

.values-section .section-heading h2 {
  color: var(--white);
}

.values-section .section-heading > p {
  color: rgba(255, 255, 255, 0.75);
}

.values-section .eyebrow {
  color: #f5a9b6;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
}

.value-card {
  position: relative;
  min-height: 250px;
  padding: 28px 23px 32px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.13);
  border-radius: 9px;
  background: rgba(255, 255, 255, 0.055);
  transition:
    background-color 0.25s ease,
    transform 0.25s ease;
}

.value-card:hover {
  transform: translateY(-4px);
  background: rgba(255, 255, 255, 0.1);
}

.value-number {
  color: #f5a9b6;
  font-size: 0.82rem;
  font-weight: 800;
}

.value-card h3 {
  margin: 25px 0 12px;
  color: var(--white);
  font-size: 1.28rem;
  font-weight: 750;
}

.value-card p {
  margin: 0;
  color: rgba(255, 255, 255, 0.75);
  font-size: 0.89rem;
  line-height: 1.8;
}

.value-accent {
  position: absolute;
  bottom: 0;
  left: 23px;
  width: 35px;
  height: 3px;
  background: #ed7e91;
}

/* TEAM */
.team-section {
  background: #faf8fc;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 25px;
}

.team-card {
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 10px;
  background: var(--white);
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.team-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 36px rgba(53, 16, 82, 0.09);
}

.team-image-wrap {
  overflow: hidden;
  background: #f1eaf6;
}

.team-image {
  display: block;
  width: 100%;
  height: 290px;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.team-card:hover .team-image {
  transform: scale(1.025);
}

.team-content {
  padding: 25px;
}

.team-role {
  color: var(--red);
  font-size: 0.77rem;
  font-weight: 800;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.team-content h3 {
  margin: 9px 0;
  color: var(--purple-dark);
  font-size: 1.3rem;
  font-weight: 800;
}

.team-content p {
  margin: 0;
  color: var(--muted);
  font-size: 0.9rem;
  line-height: 1.8;
}

/* PARTNERSHIPS */
.partners-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}

.partner-card {
  padding: 30px;
  border: 1px solid var(--line);
  border-radius: 9px;
  background: var(--white);
}

.partner-number {
  display: inline-block;
  margin-bottom: 22px;
  color: var(--red);
  font-size: 0.8rem;
  font-weight: 850;
}

.partner-card h3 {
  margin: 0 0 12px;
  color: var(--purple-dark);
  font-size: 1.28rem;
  font-weight: 800;
}

.partner-card p {
  margin: 0;
  color: var(--muted);
  font-size: 0.92rem;
  line-height: 1.8;
}

.partners-link-wrap {
  margin-top: 32px;
  text-align: center;
}

/* FINAL CALL TO ACTION */
.about-cta {
  position: relative;
  overflow: hidden;
  padding: 90px 0;
  color: var(--white);
  background: var(--purple);
  isolation: isolate;
}

.cta-pattern {
  position: absolute;
  z-index: -1;
  top: -170px;
  right: -120px;
  width: 470px;
  height: 470px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 50%;
  box-shadow:
    0 0 0 35px rgba(255, 255, 255, 0.035),
    0 0 0 75px rgba(255, 255, 255, 0.025);
  pointer-events: none;
}

.cta-content {
  text-align: center;
}

.about-cta .eyebrow {
  color: #ffc0ca;
}

.about-cta h2 {
  max-width: 800px;
  margin: 16px auto;
  color: var(--white);
  font-size: clamp(2.2rem, 5vw, 4rem);
  font-weight: 850;
  letter-spacing: -0.045em;
  line-height: 1.15;
}

.about-cta h2 span {
  display: block;
  color: #f5c5ce;
}

.about-cta p {
  max-width: 680px;
  margin: 0 auto;
  color: rgba(255, 255, 255, 0.82);
  font-size: 1rem;
  line-height: 1.9;
}

.cta-actions {
  justify-content: center;
}

.button-white {
  color: var(--purple);
  background: var(--white);
  border-color: var(--white);
}

.button-white:hover {
  color: var(--white);
  background: transparent;
  border-color: var(--white);
}

/* TABLET */
@media (max-width: 991.98px) {
  .section-space {
    padding: 72px 0;
  }

  .intro-grid {
    gap: 42px;
  }

  .values-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .team-grid {
    gap: 18px;
  }

  .team-image {
    height: 245px;
  }

  .journey-item {
    grid-template-columns: 44px minmax(150px, 0.8fr) 1.2fr;
    gap: 20px;
  }
}

/* MOBILE */
@media (max-width: 700px) {
  .content-container {
    width: min(100% - 36px, 540px);
  }

  .section-space {
    padding: 58px 0;
  }

  .about-hero {
    min-height: 650px;
    min-height: 82svh;
    padding: 100px 0 70px;
  }

  .hero-content h1 {
    font-size: clamp(2.55rem, 11vw, 4rem);
  }

  .hero-content > p {
    font-size: 0.98rem;
  }

  .hero-actions {
    align-items: stretch;
    flex-direction: column;
    max-width: 330px;
  }

  .hero-caption {
    margin-top: 32px;
  }

  .hero-decoration {
    bottom: 0;
    font-size: 8rem;
  }

  .intro-grid,
  .mission-grid {
    grid-template-columns: 1fr;
    gap: 25px;
  }

  .intro-copy {
    padding-top: 0;
  }

  .mission-card,
  .vision-card {
    min-height: auto;
    padding: 30px 25px;
  }

  .section-heading {
    margin-bottom: 32px;
  }

  .journey-item {
    grid-template-columns: 35px minmax(0, 1fr);
    gap: 15px;
    padding: 25px 0;
  }

  .journey-marker {
    grid-row: 1 / span 2;
  }

  .journey-image-wrap {
    grid-column: 2;
  }

  .journey-image {
    height: 200px;
  }

  .journey-content {
    grid-column: 2;
  }

  .journey-content h3 {
    font-size: 1.2rem;
  }

  .values-grid,
  .team-grid,
  .partners-grid {
    grid-template-columns: 1fr;
  }

  .value-card {
    min-height: auto;
    padding-bottom: 38px;
  }

  .team-image {
    height: 300px;
  }

  .partner-card {
    padding: 25px;
  }

  .about-cta {
    padding: 65px 0;
  }

  .cta-actions {
    flex-direction: column;
    align-items: stretch;
    max-width: 330px;
    margin-right: auto;
    margin-left: auto;
  }
}

@media (prefers-reduced-motion: reduce) {
  .about-page *,
  .about-page *::before,
  .about-page *::after {
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
  }
}
</style>
