<template>
  <main class="us-home">
    <!-- HERO -->
    <section class="hero">
      <div class="hero-copy">
        <span class="eyebrow">FAITH • SERVICE • COMMUNITY</span>
        <h1>Empowering Ministries.<span>Strengthening Communities.</span></h1>
        <p class="hero-description">
          We partner with African ministries to equip leaders, support communities
          and help people experience lasting transformation through faith and service.
        </p>
        <div class="hero-actions">
          <button
            type="button"
            class="btn btn-red"
            @click="openDonationModal"
          >
            Give Today
          </button>
          <RouterLink to="/programs" class="btn btn-outline">Explore Our Work</RouterLink>
        </div>
        <p class="hero-note">Your generosity helps local ministries serve their communities.</p>
      </div>

      <div class="hero-visual">
        <img src="/src/assets/com.jpg" alt="Community-focused work supported by US4Africa" class="hero-image" />
        <div class="image-caption">
          <span class="caption-mark">✳</span>
          <div>
            <strong>Local action. Lasting impact.</strong>
            <span>Working together for stronger communities.</span>
          </div>
        </div>
        <div class="purple-orb" aria-hidden="true"></div>
      </div>
    </section>

    <!-- MISSION: INFINITE FULL-WIDTH CAROUSEL -->
    <section class="mission-section">
      <div class="mission-intro">
        <span class="eyebrow purple-text">OUR MISSION</span>
        <h2>Empowering ministries. Transforming communities.</h2>
        <p>
          We believe lasting transformation begins when local ministries and leaders
          have the support, resources and partnerships they need to serve their communities.
        </p>
      </div>

      <div class="mission-carousel">
        <button class="carousel-arrow" type="button" aria-label="Previous mission card" @click="scrollMission(-1)">&#10094;</button>

        <div
          ref="missionCarousel"
          class="mission-track"
          aria-label="Our mission"
          @scroll.passive="handleMissionScroll"
          @keydown.left.prevent="scrollMission(-1)"
          @keydown.right.prevent="scrollMission(1)"
          tabindex="0"
        >
          <!-- Clone of final slide -->
          <article class="mission-card" data-clone aria-hidden="true">
            <img src="/src/assets/slt.jpg" alt="" />
            <div class="mission-card-content">
              <span> OUR VISION</span>
              <h3>Transforming Lives</h3>
              <p>Investing in local leadership and sustainable community development for lasting impact.</p>
              <span class="mission-card-link">Learn about our vision →</span>
            </div>
          </article>

          <article class="mission-card">
            <img src="/src/assets/canzi2.jpeg" alt="Youth ministry and discipleship" />
            <div class="mission-card-content">
              <span>OUR PURPOSE</span>
              <h3>Supporting Local Ministries</h3>
              <p>At US4Africa, we collaborate with local African ministires to enhance their efforts in spreading the Gospel And serving communities. Our partnerrship empowers indigenous leaders with the resources they need to make lasting impact within their communities.</p>
              <RouterLink to="/about#partners">Discover More</RouterLink>
            </div>
          </article>

          <article class="mission-card">
            <img src="/src/assets/children.jpg" alt="Children participating in community outreach" />
            <div class="mission-card-content">
              <span>OUR COMMITMENT</span>
              <h3>Building Empowered Communities</h3>
              <p>We believe in the potential of every community. Through strategic support and outreach, we help transform lives by providing educationla materials, community development, and spiritual guidance.</p>
              <RouterLink to="/get-involved">Get Involved →</RouterLink>
            </div>
          </article>

          <article class="mission-card">
            <img src="/src/assets/slt.jpg" alt="Leadership development and ministry training" />
            <div class="mission-card-content">
              <span>OUR VISION</span>
              <h3>Fostering Leadership Development</h3>
              <p>Investing in future leaders is crucial for sustainable growth. Our Leadership Experience (LXP) Trust focuses on nurturing and mentoring emerging leaders within African ministries.</p>
              <RouterLink to="/partners">Learn about LXP →</RouterLink>
            </div>
          </article>

          <!-- Clone of first slide -->
          <article class="mission-card" data-clone aria-hidden="true">
            <img src="/src/assets/youth.jpg" alt="" />
            <div class="mission-card-content">
              <span>01 / OUR PURPOSE</span>
              <h3>Empowering Ministries</h3>
              <p>Equipping African ministries with the support, resources and partnerships to fulfil their calling.</p>
              <span class="mission-card-link">Discover our mission →</span>
            </div>
          </article>
        </div>

        <button class="carousel-arrow" type="button" aria-label="Next mission card" @click="scrollMission(1)">&#10095;</button>
      </div>

      <div class="mission-pagination" aria-label="Carousel slide position">
        <span>{{ String(missionIndex + 1).padStart(2, '0') }}</span>
        <span class="pagination-line"><span :style="{ width: `${((missionIndex + 1) / 3) * 100}%` }"></span></span>
        <span>03</span>
      </div>
    </section>

    <!-- OUR WORK -->
    <section class="impact section-pad">
      <div class="section-heading">
        <div>
          <span class="eyebrow purple-text">WHERE WE FOCUS</span>
          <h2>Our work. Our purpose.</h2>
        </div>
        <RouterLink to="/programs" class="text-link">Explore all programmes →</RouterLink>
      </div>

      <div class="impact-grid">
        <article class="impact-card">
          <img src="/src/assets/ministry.jpeg" alt="Youth ministry and discipleship" loading="lazy" />
          <div class="impact-card-body">
            <h3>Empowerment Through Resources</h3>
            <p>We aim to empower ministries by providing essential resources, including training, materials, and financial support, enabling them to effectively reach and serve their communities. We believe that sustainable transformation occurs when local ministries are equipped with the tools, knowledge, and support they need to fulfill their calling and multiply their impact.</p>
          </div>
        </article>

        <article class="impact-card">
          <img src="/src/assets/food.jpeg" alt="Children's outreach and learning" loading="lazy" />
          <div class="impact-card-body">
            <h3>Community Transformation</h3>
            <p>Our mission goes beyond spiritual guidance: we focus on holistic community transformation addressing educational and socio-economic barriers while also engaging issues of worldview and mindset. Many communities face limiting beliefs that affect how they see opportunity, responsibility, and their own potential. Through teaching, mentoring, and practical development initiatives, we help cultivate new ways of thinking that promote dignity, resilience, and hope. We create pathways for individuals and communities to grow, overcome challenges, and build a sustainable future.</p>
          </div>
        </article>

        <article class="impact-card">
          <img src="/src/assets/com.jpg" alt="Ministry leadership and community development" loading="lazy" />
          <div class="impact-card-body">
            <h3>Sustainable Impact</h3>
            <p>We pursue sustainable impact by building long-term, trust-based partnerships with local ministries. Rather than offering quick, short-lived interventions, we walk alongside leaders over time—helping them strengthen their capacity, refine their vision, and grow their influence in their own communities. This ongoing collaboration ensures that every resource, training effort, and project investment contributes to lasting change, continued growth, and ministries that can stand strong long after external support has ended.</p>
          </div>
        </article>
      </div>
    </section>

    <!-- STORIES -->
    <section class="stories section-pad">
      <div class="stories-heading">
        <span class="eyebrow">BEHIND THE IMPACT</span>
        <h2>Transformative Impact — Real Stories, Real Change</h2>
        <p>Discover how faith, partnership and service are making a difference in the lives of people and communities.</p>
        <RouterLink to="/blog" class="btn btn-white">
          Explore all stories →
        </RouterLink>
      </div>

      <div class="stories-grid">
        <article class="story-card">
          <img src="/src/assets/stud.jpg" alt="A student pursuing their education" loading="lazy" />
          <div class="story-card-content">
            <span class="story-category">LEADERSHIP DEVELOPMENT</span>
            <h3>A Student’s Journey</h3>
            <p>A story of perseverance, opportunity and the hope that education can bring.</p>
            <RouterLink to="/blog/a-students-journey" class="story-link">Read the story ↗</RouterLink>
          </div>
        </article>

        <article class="story-card">
          <img src="/src/assets/hope.jpg" alt="Children learning and taking part in activities" loading="lazy" />
          <div class="story-card-content">
            <span class="story-category">CHILDREN</span>
            <h3>Hope for the Children</h3>
            <p>Creating spaces where children can learn, grow and experience care and encouragement.</p>
            <RouterLink to="/blog/hope-for-the-children" class="story-link">Read the story ↗</RouterLink>
          </div>
        </article>

        <article class="story-card">
          <img src="/src/assets/mentorship.jpg" alt="A mentor encouraging a young person" loading="lazy" />
          <div class="story-card-content">
            <span class="story-category">YOUTH</span>
            <h3>Growing Through Mentorship</h3>
            <p>Discover the impact of guidance, discipleship and relationships that help people grow.</p>
            <RouterLink to="/blog/growing-through-mentorship" class="story-link">Read the story ↗</RouterLink>
          </div>
        </article>

        <article class="story-card">
          <img src="/src/assets/com.jpg" alt="Community members working together" loading="lazy" />
          <div class="story-card-content">
            <span class="story-category">COMMUNITY</span>
            <h3>Stronger Communities</h3>
            <p>Local people and ministries working together to bring meaningful change to their communities.</p>
            <RouterLink to="/blog/stronger-communities" class="story-link">Read the story ↗</RouterLink>
          </div>
        </article>
      </div>
    </section>

    <!-- DONATION CALL TO ACTION -->
    <section class="home-cta section-pad" id="home-donation">

      <div class="cta-copy">
        <span class="eyebrow">BE PART OF THE CHANGE</span>

        <h2>Your generosity can make a lasting difference.</h2>

        <p>
          Support African ministries, empower local leaders and help
          communities access the resources they need to flourish.
        </p>

        <button
          type="button"
          class="btn btn-white cta-donate-button"
          @click="openDonationModal"
        >
          Donate Today <span aria-hidden="true">↗</span>
        </button>
      </div>

    </section>
    <DonationModal
      v-model="isDonationModalOpen"
      @donate="continueToDonation"
    />
  </main>
</template>

<script setup>
  import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
  import { RouterLink, useRouter } from 'vue-router'
  import DonationModal from '../components/DonationModal.vue'

  const router = useRouter()

  const frequency = ref('once')
  const selectedAmount = ref(50)
  const customAmount = ref(null)
  const designation = ref('where-needed')
  const missionCarousel = ref(null)
  const missionIndex = ref(0)

  const amounts = [25, 50, 100, 250]

  const designations = [
    { value: 'where-needed', label: 'Where Most Needed' },
    { value: 'dogs', label: 'Youth Discipleship (DoGs)' },
    { value: 'kcp', label: 'Children Outreach (KCP)' },
    { value: 'general', label: 'General Ministry Support' },
  ]

  const currentHomeAmount = computed(() =>
    customAmount.value !== null ? Number(customAmount.value) : selectedAmount.value
  )

  const isValidAmount = computed(() =>
    Number.isFinite(currentHomeAmount.value) && currentHomeAmount.value >= 1
  )

  const formattedHomeAmount = computed(() =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 2,
    }).format(currentHomeAmount.value || 0)
  )
  
  const isDonationModalOpen = ref(false)

  function openDonationModal() {
    isDonationModalOpen.value = true
  }
function handleDonationKeydown(event) {
  if (event.key === 'Escape' && isDonationModalOpen.value) {
    isDonationModalOpen.value = false
  }
}
  
async function continueToDonation(donationDetails) {
  console.log('1. Donation event received:', donationDetails)

  if (!donationDetails) {
    console.error('No donation details received.')
    return
  }

  try {
    console.log('2. Attempting navigation...')

    const result = await router.push({
      path: '/donate',
      query: {
        amount: String(donationDetails.amount),
        type: String(donationDetails.type),
        designation: String(donationDetails.designation),
      },
    })

    console.log('3. Navigation result:', result)
    console.log('4. Current route:', router.currentRoute.value.fullPath)

  } catch (error) {
    console.error('Navigation error:', error)
  }
}
 /*
  * Infinite carousel:
  * The first and last slides are cloned in the template.
  * We start on the first real slide (index 1), then silently jump
  * from a clone to its matching real slide after scrolling settles.
  */
  let missionScrollTimer = null
  let isRepositioning = false

  function missionSlideWidth() {
    return missionCarousel.value?.clientWidth || 0
  }

  function scrollMission(direction) {
    const track = missionCarousel.value
    if (!track || isRepositioning) return

    track.scrollTo({
      left: track.scrollLeft + direction * missionSlideWidth(),
      behavior: 'smooth',
    })
  }

  function handleMissionScroll() {
    if (missionScrollTimer) window.clearTimeout(missionScrollTimer)

    missionScrollTimer = window.setTimeout(() => {
      const track = missionCarousel.value
      if (!track || isRepositioning) return

      const width = missionSlideWidth()
      if (!width) return

      const rawIndex = Math.round(track.scrollLeft / width)
      const totalSlides = track.children.length

      if (rawIndex === 0) {
        isRepositioning = true
        track.scrollTo({ left: width * (totalSlides - 2), behavior: 'auto' })
        missionIndex.value = 2
      } else if (rawIndex === totalSlides - 1) {
        isRepositioning = true
        track.scrollTo({ left: width, behavior: 'auto' })
        missionIndex.value = 0
      } else {
        missionIndex.value = rawIndex - 1
      }

      requestAnimationFrame(() => {
        isRepositioning = false
      })
    }, 120)
  }

  function setInitialMissionSlide() {
    const track = missionCarousel.value
    if (!track) return
    track.scrollTo({ left: missionSlideWidth(), behavior: 'auto' })
  }

  onMounted(async () => {
    await nextTick()
    setInitialMissionSlide()
    window.addEventListener('resize', setInitialMissionSlide)
    window.addEventListener('keydown', handleDonationKeydown)
  })

  onBeforeUnmount(() => {
    if (missionScrollTimer) window.clearTimeout(missionScrollTimer)
    window.removeEventListener('resize', setInitialMissionSlide)
    window.removeEventListener('keydown', handleDonationKeydown)
document.body.style.overflow = ''
  })
</script>

<style scoped>
.us-home {
  --purple: #682d91;
  --purple-dark: #45205f;
  --red: #c62836;
  --ink: #25212a;
  --muted: #706b75;
  --line: #ece8ef;
  background: #fff;
  color: var(--ink);
  font-family: inherit;
}
.us-home * { box-sizing: border-box; }
.us-home a { text-decoration: none; }
.section-pad { padding: 88px max(6%, calc((100% - 1200px) / 2)); }
.eyebrow { display: inline-block; font-size: 11px; font-weight: 800; letter-spacing: 2px; line-height: 1.6; }
.purple-text { color: var(--purple); }

.hero {
  min-height: 590px;
  display: grid;
  grid-template-columns: 1.05fr .95fr;
  align-items: center;
  gap: 52px;
  padding: 72px max(6%, calc((100% - 1200px) / 2)) 88px;
  overflow: hidden;
}
.hero-copy { max-width: 590px; }
.hero-copy .eyebrow { color: var(--purple); margin-bottom: 22px; }
.hero h1 { font-size: clamp(40px, 5vw, 66px); letter-spacing: -2.5px; line-height: 1.08; font-weight: 800; margin: 0 0 24px; }
.hero h1 span { color: var(--purple); display: block; }
.hero-description { color: var(--muted); font-size: 17px; line-height: 1.85; max-width: 530px; margin-bottom: 28px; }
.hero-actions { display: flex; flex-wrap: wrap; gap: 13px; }
.hero-note { color: var(--muted); font-size: 12px; margin-top: 20px; line-height: 1.6; }
.hero-visual { position: relative; min-width: 0; padding: 0 0 34px 20px; }
.hero-image { display: block; width: 100%; height: 440px; object-fit: cover; border-radius: 180px 180px 8px 8px; position: relative; z-index: 1; background: #f1eaf5; }
.purple-orb { position: absolute; z-index: 0; width: 140px; height: 140px; border-radius: 50%; background: #eee2f6; right: -20px; top: -30px; }
.image-caption { position: absolute; z-index: 2; bottom: 0; left: 0; display: flex; align-items: center; gap: 13px; padding: 19px; max-width: 330px; background: white; box-shadow: 0 12px 35px #27143b18; border: 1px solid var(--line); border-radius: 6px; }
.caption-mark { color: var(--red); font-size: 30px; }
.image-caption strong, .image-caption div span { display: block; }
.image-caption strong { font-size: 13px; margin-bottom: 4px; }
.image-caption div span { color: var(--muted); font-size: 11px; line-height: 1.5; }
.btn { min-height: 48px; padding: 14px 21px; border-radius: 5px; display: inline-flex; align-items: center; justify-content: center; gap: 12px; font-size: 13px; font-weight: 750; transition: transform .2s, background .2s; }
.btn:hover { transform: translateY(-2px); }
.btn-red { background: var(--red); color: white; }
.btn-red:hover { background: #a91f2b; }
.btn-outline { color: var(--purple); border: 1px solid #d8c8e3; background: white; }
.btn-outline:hover { background: #f8f3fb; }
.btn-white { color: var(--purple-dark); background: white; }

/* Mission carousel — image left, content right */
.mission-section { background: #faf8fc; padding: 90px 5%; overflow: hidden; }
.mission-intro { max-width: 760px; margin: 0 auto 45px; text-align: center; }
.mission-intro h2 { color: var(--ink); font-size: clamp(30px, 4vw, 46px); font-weight: 800; line-height: 1.2; margin: 15px 0; }
.mission-intro p { color: var(--muted); font-size: 15px; line-height: 1.8; }
.mission-carousel { display: flex; align-items: center; gap: 22px; width: 100%; }
.mission-track { display: flex; width: 100%; flex: 1; min-width: 0; overflow-x: auto; scroll-snap-type: x mandatory; scroll-behavior: smooth; scrollbar-width: none; -webkit-overflow-scrolling: touch; overscroll-behavior-x: contain; }
.mission-track::-webkit-scrollbar { display: none; }
.mission-card { display: flex; flex: 0 0 100%; width: 100%; min-width: 100%; min-height: 430px; overflow: hidden; border-radius: 14px; scroll-snap-align: start; background: #fff; border: 1px solid var(--line); box-shadow: 0 14px 38px rgba(35,12,55,.08); }
.mission-card img { position: static; flex: 0 0 50%; width: 50%; height: auto; min-height: 430px; object-fit: cover; display: block; }
.mission-card-content { display: flex; flex: 1; flex-direction: column; align-items: flex-start; justify-content: center; width: 50%; max-width: 650px; padding: clamp(35px, 5vw, 76px); color: var(--ink); }
.mission-card-content > span:first-child { color: var(--red); font-size: 11px; font-weight: 800; letter-spacing: 2px; }
.mission-card h3 { color: var(--purple-dark); font-size: clamp(30px, 3.5vw, 46px); font-weight: 800; line-height: 1.15; margin: 20px 0; }
.mission-card p { color: var(--muted); font-size: 16px; line-height: 1.9; margin-bottom: 28px; }
.mission-card a, .mission-card-link { display: inline-block; color: white; background: var(--red); padding: 13px 22px; border-radius: 4px; font-size: 13px; font-weight: 750; text-decoration: none; }
.mission-card a:hover { background: var(--purple-dark); color: white; }
.carousel-arrow { width: 46px; height: 46px; flex-shrink: 0; border: 1px solid #d8c8e3; border-radius: 50%; background: white; color: var(--purple); font-size: 18px; cursor: pointer; transition: .2s ease; z-index: 2; }
.carousel-arrow:hover { background: var(--purple); color: white; }
.mission-pagination { display: flex; align-items: center; justify-content: center; gap: 14px; margin-top: 25px; color: var(--purple); font-size: 12px; font-weight: 800; }
.pagination-line { width: 80px; height: 2px; background: #e3d8e9; overflow: hidden; }
.pagination-line span { display: block; height: 100%; background: var(--red); transition: width .2s ease; }

/* Our work */
.section-heading { display: flex; align-items: end; justify-content: space-between; gap: 25px; margin-bottom: 35px; }
.section-heading h2, .stories h2 { font-size: clamp(30px, 3.4vw, 44px); line-height: 1.18; letter-spacing: -1.2px; margin: 13px 0 0; font-weight: 800; }
.text-link { color: var(--purple); font-weight: 750; font-size: 13px; display: inline-flex; gap: 8px; align-items: center; }
.text-link:hover { color: var(--red); }
.impact-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 25px; }
.impact-card { border: 1px solid var(--line); border-radius: 7px; overflow: hidden; background: white; transition: transform .25s, box-shadow .25s; }
.impact-card:hover { transform: translateY(-5px); box-shadow: 0 15px 35px #29133d0d; }
.impact-card > img { width: 100%; height: 220px; object-fit: cover; display: block; background: #f1eaf5; }
.impact-card-body { padding: 25px 23px 28px; }
.card-number { color: var(--red); font-size: 10px; letter-spacing: 1.5px; font-weight: 800; }
.impact-card h3 { font-size: 21px; line-height: 1.3; margin: 13px 0 12px; }
.impact-card p { color: var(--muted); line-height: 1.8; font-size: 14px; min-height: 100px; margin-bottom: 22px; }

/* Stories */
.stories { display: flex; flex-direction: column; align-items: stretch; background: var(--purple-dark); color: white; }
.stories-heading { width: 100%; max-width: 850px; margin: 0 auto 2.5rem; text-align: center; }
.stories-heading .eyebrow { color: #e8c7f8; }
.stories h2 { margin-bottom: 20px; }
.stories-heading > p { color: #e2d7e9; font-size: 15px; line-height: 1.9; margin-bottom: 27px; }
.stories-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 1.25rem; width: 100%; }
.story-card { overflow: hidden; border-radius: 12px; background: #fff; box-shadow: 0 12px 35px rgba(30,20,60,.08); transition: transform .3s ease, box-shadow .3s ease; }
.story-card:hover { transform: translateY(-6px); box-shadow: 0 18px 45px rgba(30,20,60,.14); }
.story-card img { display: block; width: 100%; height: 220px; object-fit: cover; }
.story-card-content { padding: 1.5rem; }
.story-category { color: #8b2bd1; font-size: .75rem; font-weight: 700; letter-spacing: .12em; }
.story-card h3 { margin: .75rem 0; color: #25143b; font-size: 1.25rem; }
.story-card p { color: #686273; line-height: 1.7; font-size: 14px; }
.story-link { display: inline-block; margin-top: .5rem; color: var(--purple); font-weight: 700; }
.story-link:hover { color: var(--red); }

/* Donation form */
/* DONATION CALL TO ACTION */

.home-cta {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: var(--purple);
  color: white;
  min-height: 340px;
}

.cta-copy {
  max-width: 750px;
  margin: 0 auto;
}

.cta-copy h2 {
  margin: 14px 0 20px;
  font-size: clamp(32px, 4vw, 48px);
  line-height: 1.2;
  font-weight: 800;
  letter-spacing: -1.2px;
}

.cta-copy p {
  max-width: 620px;
  margin: 0 auto 28px;
  color: #eee1f5;
  line-height: 1.9;
}

.home-cta .eyebrow {
  color: #f0d8ff;
}

.cta-donate-button {
  border: none;
  cursor: pointer;
  min-width: 180px;
}

.cta-donate-button:hover {
  background: #f3edfa;
  color: var(--purple-dark);
}

/* Bottom CTA */

.home-donation-prompt {
  padding: 35px;
  border: 1px solid rgba(255,255,255,0.35);
  border-radius: 12px;
  background: white;
  color: var(--ink);
}

.home-donation-prompt .eyebrow {
  color: var(--red);
}

.home-donation-prompt h3 {
  margin: 12px 0;
  color: var(--purple-dark);
  font-size: 28px;
}

.home-donation-prompt p {
  color: var(--muted);
  font-size: 14px;
  line-height: 1.8;
  margin-bottom: 25px;
}
@media (max-width: 650px) {
  .home-cta {
    min-height: 300px;
    padding: 65px 22px;
  }

  .cta-copy h2 {
    font-size: 34px;
  }
}
@media (max-width: 900px) {
  .hero { grid-template-columns: 1fr .85fr; gap: 28px; }
  .hero-image { height: 360px; }
  .impact-grid { gap: 15px; }
  .impact-card-body { padding: 20px 16px; }
  .stories-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .home-cta { grid-template-columns: 1fr; gap: 35px; }
  .home-donation-form { width: 100%; max-width: 650px; }
}
@media (max-width: 650px) {
  .section-pad { padding: 58px 22px; }
  .hero { grid-template-columns: 1fr; padding: 55px 22px 65px; gap: 35px; }
  .hero h1 { font-size: clamp(39px, 10vw, 54px); letter-spacing: -1.7px; }
  .hero-description { font-size: 15px; }
  .hero-visual { padding-left: 12px; margin-right: 10px; }
  .hero-image { height: 330px; }
  .image-caption { max-width: 290px; padding: 14px; }
  .mission-section { padding: 65px 18px; }
  .mission-carousel { gap: 0; }
  .mission-card { flex-direction: column; min-height: 0; }
  .mission-card img { flex: 0 0 auto; width: 100%; height: 240px; min-height: 240px; }
  .mission-card-content { width: 100%; max-width: none; padding: 30px 25px 35px; }
  .mission-card h3 { font-size: 30px; margin: 14px 0; }
  .mission-card p { font-size: 14px; }
  .carousel-arrow { display: none; }
  .section-heading { align-items: flex-start; flex-direction: column; }
  /* Our Work - Mobile List Layout */
  .impact-grid {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
  }

  .impact-card {
    display: flex;
    flex-direction: column;
    width: 100%;
    border-radius: 10px;
    transform: none;
  }

  .impact-card:hover {
    transform: none;
    box-shadow: none;
  }

  .impact-card > img {
    width: 100%;
    height: 220px;
    object-fit: cover;
  }

  .impact-card-body {
    padding: 22px 20px 25px;
  }

  .impact-card h3 {
    font-size: 20px;
  }

  .impact-card p {
    min-height: 0;
    font-size: 14px;
    line-height: 1.75;
    margin-bottom: 18px;
  }.stories-grid { grid-template-columns: 1fr; }

  .story-card { transition: none; }
  .story-card:hover { transform: none; }
  .home-donation-form { padding: 23px 18px; }
  .home-amount-grid { grid-template-columns: repeat(2, 1fr); }
  .home-cta { gap: 28px; }
}
@media (prefers-reduced-motion: reduce) {
  .impact-card, .btn, .story-card, .mission-track { transition: none; scroll-behavior: auto; }
  .impact-card:hover, .story-card:hover, .btn:hover { transform: none; }
}

@media (min-width: 651px) and (max-width: 950px) {
  .impact-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 650px) {
  .donation-modal-overlay {
    padding: 12px;
    align-items: center;
  }

  .donation-modal {
    padding: 30px 20px;
    max-height: 92vh;
  }

  .donation-modal-header h2 {
    font-size: 27px;
  }

  .home-donation-prompt {
    padding: 25px 20px;
  }
}

</style>
