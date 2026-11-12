
<script setup lang="ts">
import mentorshipImage from '../assets/mentorship.jpg'
import sltImage from '../assets/slt1.jpeg'
import sltStud from '../assets/slt.jpg'
import youthImage from '../assets/youth.jpg'
import ithembaImage from '../assets/ithemba.jpeg'
import v4allImage from '../assets/v4all.jpg'
import mamacImage from '../assets/mamac.jpg'
import mamabImage from '../assets/mamab.jpg'
import micheleImage from '../assets/michele.jpeg'
const journey = [
  {
    title: "The Visionary Beginning",
    date: "Our Foundation",
    description:
      "US4Africa was established with a vision to empower African ministries through support, service and meaningful partnerships.",
    image: mentorshipImage,
  },
  {
    title: "Serving Through Leadership",
    date: "Our Heart",
    description:
      "Leadership development and servant-hearted service reflect our commitment to equipping people to make a lasting difference.",
    image: sltImage,
  },
  {
    title: "Growing Through Partnership",
    date: "Our Ongoing Journey",
    description:
      "We believe local ministries are essential to community transformation. We seek to connect people, resources and organisations around shared goals.",
    image: youthImage,
  },
  {
    title: "Building a Hopeful Future",
    date: "Looking Ahead",
    description:
      "We continue working towards a future where ministries have greater access to the resources and support they need to serve their communities.",
    image: sltStud,
  },
]
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
      "With over 15 years of experience in nonprofit leadership, MIchele Mwanza guides our strategic vision and oversees all operations at US4Africa. Her passion for service and deep understanding of African communities empower our initiatives.",
    image: micheleImage,
  },
  {
    name: "Blessings",
    role: "Outreach Coordinator",
    description:
      "Blessings Liato  brings a wealth of experience in community engagement and outreach. As the Outreach Coordinator, she is dedicated to building relationships with local ministries and ensuring their needs are met effectively..",
    image: mamabImage,
  },
  {
    name: "George Mwanza",
    role: "Program Manager",
    description:
      "George Mwanza is responsible for the implementation and management of our various programs in Africa. His hands-on approach and commitment to excellence ensure that our projects are impactful and sustainable.",
    image: "/download.png",
  },
  {
    name: "NEW TEAM MEMBER",
    role: "Board Member",
    description:
      "Contributes to organisational leadership, governance and strategic guidance in support of the US4Africa mission.",
    image: "/download.png",
  },
];

const partners = [
  {
    number: "01",
    title: "Local Ministries",
    description:
      "US4Africa collaborates with numerous local churches across Africa, providing them with the resources and support they need to reach their communities. These partnerships are essential for fostering spiritual growth and community development, as local churches are often at the heart of their communities, addressing both spiritual and practical needs.",
    image: ithembaImage,
    buttonText: "View Partners",
  },
  {
    number: "02",
    title: "Non-Profit Organisations",
    description:
      "We are proud to partner with a variety of non-profit organisations that share our mission of empowering African ministries. These collaborations allow us to combine resources, expertise and networks to enhance the effectiveness of our collective efforts in ministry and outreach.",
    image: v4allImage,
    buttonText: "Explore Collaborations",
  },
]

import { ref } from 'vue'
import { useRouter } from 'vue-router'
import DonationModal from '../components/DonationModal.vue'

const router = useRouter()

const isDonationModalOpen = ref(false)

function openDonationModal() {
  isDonationModalOpen.value = true
}

async function continueToDonation(donationDetails: {
  amount: string | number
  type: string
  designation: string
}) {
  try {
    await router.push({
      name: 'donate',
      query: {
        amount: String(donationDetails.amount),
        type: donationDetails.type,
        designation: donationDetails.designation,
      },
    })

    isDonationModalOpen.value = false
  } catch (error) {
    console.error('Donation navigation failed:', error)
  }
}
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
        </div>

        <div class="hero-caption">
          <span class="caption-line"></span>
          <span>Faith in action. Service with purpose.</span>
          <span class="caption-line"></span>          
        </div>
      </div>

      <div class="hero-decoration" aria-hidden="true">US4A</div>
    </section>

    <!-- INTRODUCTION -->
    <section class="intro-section section-space">
      <div class="content-container intro-grid">
        <div class="intro-label">
          <span class="eyebrow">WHAT WE BELIEVE</span>
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
            Explore Our Works
          </RouterLink>
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
  <section id="partners" class="partners-section section-space">
    <div class="content-container">
      <div class="section-heading">
        <span class="eyebrow">STRONGER TOGETHER</span>
        <h2>Partnership Makes a Difference</h2>
        <p>
          Lasting community impact grows through collaboration,
          generosity and a shared commitment to serving others.
        </p>
      </div>

       <div class="partners-grid">
      <article
        v-for="partner in partners"
        :key="partner.number"
        class="partner-card"
      >
        <h3 class="partner-title">
          {{ partner.title }}
        </h3>

        <div class="partner-card-content">
          <div class="partner-image-wrap">
            <img
              :src="partner.image"
              :alt="partner.title"
              class="partner-image"
              loading="lazy"
            />
          </div>

          <div class="partner-info">
            <p>{{ partner.description }}</p>

            <RouterLink
              to="/get-involved"
              class="partner-button"
            >
              {{ partner.buttonText }}
              <span aria-hidden="true">→</span>
            </RouterLink>
          </div>
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

        <div class="journey-grid">
          <article
            v-for="(item, index) in journey"
            :key="item.title"
            class="journey-card"
          >
            <div class="journey-image-wrap">
              <img
                :src="item.image"
                :alt="item.title"
                class="journey-image"
                loading="lazy"
              />

              <span class="journey-number">
                {{ String(index + 1).padStart(2, "0") }}
              </span>
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
         <button
            type="button"
            class="button button-red"
            @click="openDonationModal"
          >
            Give Today
          </button>

          <RouterLink to="/get-involved" class="button button-white">
            Partner With Us
          </RouterLink>
        </div>
      </div>
    </section>
    <DonationModal
      v-model="isDonationModalOpen"
      @donate="continueToDonation"
    />
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
  min-height: min(780px, 90svh);

  /* Align hero content with the other page sections */
  padding: 110px max(5%, calc((100% - 1160px) / 2));

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
.story-section {
  background: #faf8fc;
}

.journey-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 22px;
  align-items: stretch;
}

.journey-card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: var(--white);
  border: 1px solid var(--line);
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(53, 16, 82, 0.04);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.journey-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 14px 32px rgba(53, 16, 82, 0.11);
}

.journey-image-wrap {
  position: relative;
  overflow: hidden;
  height: 210px;
  background: var(--purple-light);
}

.journey-image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.45s ease;
}

.journey-card:hover .journey-image {
  transform: scale(1.06);
}

.journey-number {
  position: absolute;
  top: 14px;
  left: 14px;
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  color: var(--white);
  background: var(--purple);
  font-size: 0.85rem;
  font-weight: 800;
  border: 2px solid rgba(255, 255, 255, 0.8);
}

.journey-content {
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 25px 22px 28px;
}

.journey-date {
  color: var(--red);
  font-size: 0.76rem;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.journey-content h3 {
  margin: 12px 0;
  color: var(--purple-dark);
  font-size: 1.2rem;
  font-weight: 800;
  line-height: 1.4;
}

.journey-content p {
  margin: 0;
  color: var(--muted);
  font-size: 0.9rem;
  line-height: 1.8;
}

/* JOURNEY RESPONSIVE */
@media (max-width: 991.98px) {
  .journey-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px;
  }
}

@media (max-width: 600px) {
  .journey-grid {
    grid-template-columns: 1fr;
    gap: 22px;
  }

  .journey-image-wrap {
    height: 230px;
  }

  .journey-content {
    padding: 23px;
  }
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
  grid-template-columns: repeat(4, minmax(0, 1fr));
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
  object-position: center top;
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

.partnerships-section {
  padding: 100px 0;
  background: #f8f7fb;
}

.section-heading {
  max-width: 720px;
  margin: 0 auto 55px;
  text-align: center;
}

.section-eyebrow {
  display: inline-block;
  margin-bottom: 12px;
  color: #7b2cbf;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.section-heading h2 {
  margin-bottom: 18px;
  color: #24113b;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
}

.section-heading p {
  color: #666;
  line-height: 1.8;
}

.partners-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 28px;
  max-width: 1050px;
  margin: 0 auto;
}

.partner-card {
  overflow: hidden;
  padding: 28px;
  background: #fff;
  border: 1px solid #eee8f4;
  border-radius: 18px;
  box-shadow: 0 8px 30px rgba(40, 15, 65, 0.06);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.partner-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 38px rgba(40, 15, 65, 0.11);
}

.partner-title {
  margin-bottom: 22px;
  color: #35145b;
  font-size: 1.5rem;
  font-weight: 800;
}

.partner-card-content {
  display: grid;
  grid-template-columns: 38% 1fr;
  gap: 30px;
  align-items: center;
}

.partner-image-wrap {
  overflow: hidden;
  min-height: 260px;
  height: 100%;
  border-radius: 12px;
}

.partner-image {
  display: block;
  width: 100%;
  height: 100%;
  min-height: 260px;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.partner-card:hover .partner-image {
  transform: scale(1.05);
}

.partner-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.partner-number {
  margin-bottom: 12px;
  color: #d62839;
  font-size: 0.85rem;
  font-weight: 800;
  letter-spacing: 2px;
}

.partner-info p {
  margin-bottom: 24px;
  color: #62606a;
  font-size: 0.98rem;
  line-height: 1.85;
}

.partner-button {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 12px 22px;
  color: #fff;
  background: #6b2ca3;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 700;
  text-decoration: none;
  transition: background 0.25s ease, gap 0.25s ease;
}

.partner-button:hover {
  gap: 18px;
  color: #fff;
  background: #d62839;
}

button.button {
  font-family: inherit;
  cursor: pointer;
}

button.button:focus-visible {
  outline: 3px solid rgba(255, 255, 255, 0.8);
  outline-offset: 4px;
}

/* Responsive layout */
@media (max-width: 768px) {
  .partnerships-section {
    padding: 65px 18px;
  }

  .partner-card {
    padding: 20px;
  }

  .partner-card-content {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .partner-image-wrap,
  .partner-image {
    min-height: 220px;
    max-height: 260px;
  }

  .partner-title {
    font-size: 1.3rem;
  }
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
    padding: 100px 18px 70px;
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
