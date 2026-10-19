
<script setup>

const journey = [
  {
    title: 'Closing Event of LXP Staff',
    date: 'December 15, 2025',
    description:
      'A day of reflection, celebration and servant leadership at the LXP 2025 Closing Event and Servant Leadership Training.',
    image: '/download.png'
  },
  {
    title: 'The Visionary Beginning',
    date: 'December 5, 2025',
    description:
      'US4Africa was founded with a vision to uplift and empower communities by supporting the ministries serving them.',
    image: '/download.png'
  },
  {
    title: 'A Commitment to the Future',
    date: 'December 5, 2025',
    description:
      'We remain committed to strengthening ministries and helping communities build a more hopeful and sustainable future.',
    image: '/leader.jpg'
  },
  {
    title: 'Growth Through Partnership',
    date: 'December 5, 2025',
    description:
      'Partnerships with local ministries and organizations help extend our reach and strengthen community impact.',
    image: '/leader.jpg'
  }
]

const team = [
  {
    name: 'Michele Mwanza',
    role: 'Executive Director',
    description:
      'Leads strategic vision and oversees operations, bringing leadership experience and a passion for serving African communities.',
    image: '/download.png'
  },
  {
    name: 'Tariro Mapise',
    role: 'Outreach Coordinator',
    description:
      'Builds relationships with local ministries and works to understand their needs and connect them with appropriate support.',
    image: '/download.png'
  },
  {
    name: 'George Mwanza',
    role: 'Program Manager',
    description:
      'Coordinates program implementation with a focus on effective delivery and sustainable impact.',
    image: '/download.png'
  }
]

const partners = [
  {
    title: 'Local Churches',
    description:
      'We support local churches with resources that help them serve their congregations and communities.',
    linkText: 'View Partners',
    href: '/partners/churches',
    image: '/download.png'
  },
  {
    title: 'Nonprofit Organizations',
    description:
      'We work with like-minded organizations to combine expertise, resources and community impact.',
    linkText: 'Explore Collaborations',
    href: '/partners/organizations',
    image: '/download.png'
  },
  {
    title: 'Corporate Sponsors',
    description:
      'We partner with businesses whose contributions strengthen ministry work and community outreach.',
    linkText: 'See Sponsors',
    href: '/partners/sponsors',
    image: '/download.png'
  }
]
</script>

<template>
  <main class="about-page">
    
    <section id="about-us" class="about-hero">
      <div class="hero-overlay">
        <div class="hero-content">
          <span class="hero-eyebrow">OUR PURPOSE. OUR MISSION. OUR IMPACT.</span>

          <h1>About US4Africa</h1>

          <p>
            A Dedicated 501(c)(3) Charitable Organization,
            Empowering African Ministries Through Support and Service.
          </p>

          <a href="/donate" class="hero-give-button">
            DONATE TODAY
          </a>
        </div>
      </div>
    </section>


    <section id="our-journey" class="section-padding">
      <div class="container">
        <div class="section-heading">
          <span class="eyebrow">OUR STORY</span>
          <h2>Our Journey</h2>
          <p>Discover the heart behind US4Africa's mission.</p>
        </div>

        <div class="journey-grid">
          <article
            v-for="item in journey"
            :key="item.title"
            class="content-card"
          >
            <img
              :src="item.image"
              :alt="item.title"
              class="card-image"
              loading="lazy"
            />
            <div class="card-content">
              <p class="date">{{ item.date }}</p>
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section id="our-team" class="section-padding team-section">
      <div class="container">
        <div class="section-heading">
          <span class="eyebrow">THE PEOPLE BEHIND THE MISSION</span>
          <h2>Our Dedicated Team</h2>
          <p>Meet the individuals driving our mission forward.</p>
        </div>

        <div class="team-grid">
          <article
            v-for="person in team"
            :key="person.name"
            class="team-card"
          >
            <img
              :src="person.image"
              :alt="person.name"
              class="team-image"
              loading="lazy"
            />
            <div class="team-content">
              <h3>{{ person.name }}</h3>
              <p class="team-role">{{ person.role }}</p>
              <p>{{ person.description }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section id="our-partners" class="section-padding">
      <div class="container">
        <div class="section-heading">
          <span class="eyebrow">WORKING TOGETHER</span>
          <h2>Our Partners in Ministry</h2>
          <p>Collaborating for a greater impact.</p>
        </div>

        <div class="partner-grid">
          <article
            v-for="partner in partners"
            :key="partner.title"
            class="content-card partner-card"
          >
            <img
              :src="partner.image"
              :alt="partner.title"
              class="card-image"
              loading="lazy"
            />
            <div class="card-content">
              <h3>{{ partner.title }}</h3>
              <p>{{ partner.description }}</p>
              <RouterLink :to="partner.href" class="text-link">
                {{ partner.linkText }} →
              </RouterLink>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="mission-cta">
      <div class="container">
        <span class="eyebrow">MAKE A DIFFERENCE</span>
        <h2>Be Part of the Mission</h2>
        <p>
          Your generosity and partnership help equip ministries
          and strengthen communities across Africa.
        </p>
        <a href="/donate" class="give-button">GIVE TODAY</a>
      </div>
    </section>

    <AppFooter />
  </main>
</template>

<style scoped>
  .about-page {
    color: #243247;
  }

  .about-hero {
    min-height: 100vh;
    background-image:
      linear-gradient(
        90deg,
        rgba(12, 27, 47, 0.88) 0%,
        rgba(12, 27, 47, 0.64) 52%,
        rgba(12, 27, 47, 0.2) 100%
      ),
      url('/about.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .hero-overlay {
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding: 70px 5%;
  }

  .hero-content {
    width: min(720px, 100%);
    color: #fff;
  }

  .hero-eyebrow {
    display: inline-block;
    margin-bottom: 20px;
    color: hsl(14, 100%, 51%);
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 2px;
  }

  .hero-content h1 {
    margin: 0 0 24px;
    color: #fff;
    font-size: clamp(2.8rem, 6vw, 5rem);
    font-weight: 800;
    line-height: 1.1;
  }

  .hero-content p {
    max-width: 650px;
    margin-bottom: 32px;
    color: #f3f5f8;
    font-size: clamp(1.05rem, 2vw, 1.3rem);
    line-height: 1.8;
  }

  .hero-give-button {
    display: inline-flex;
    align-items: center;
    gap: 16px;
    padding: 15px 34px;
    border: 2px solid #e51313;
    border-radius: 4px;
    background: #e51313;
    color: #ffffff;
    font-weight: 800;
    text-decoration: none;
    transition: background 0.2s ease, color 0.2s ease;
  }

  .hero-give-button:hover {
    background: transparent;
    color: #e51313;
  }

  .container {
    width: min(1120px, 90%);
    margin: 0 auto;
  }

  .section-padding {
    padding: 80px 0;
  }

  .section-heading {
    text-align: center;
    max-width: 700px;
    margin: 0 auto 42px;
  }

  .eyebrow {
    color: #b52916;
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 2px;
  }

  .section-heading h2,
  .mission-cta h2 {
    margin: 12px 0;
    color: #14243a;
    font-size: clamp(2rem, 4vw, 2.8rem);
  }

  .section-heading p,
  .content-card p,
  .team-card p,
  .mission-cta p {
    line-height: 1.7;
  }

  .journey-grid,
  .team-grid,
  .partner-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 28px;
  }

  .content-card,
  .team-card {
    overflow: hidden;
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 5px 24px rgb(20 36 58 / 8%);
  }

  .card-image {
    display: block;
    width: 100%;
    height: 230px;
    object-fit: cover;
    background: #e8edf2;
  }

  .card-content,
  .team-content {
    padding: 24px;
  }

  .card-content h3,
  .team-content h3 {
    color: #14243a;
    margin: 8px 0 12px;
  }

  .date {
    color: #e51313;
    font-size: 0.85rem;
    margin: 0;
  }

  .team-section {
    background: #f5f7fa;
  }

  .team-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .team-image {
    width: 100%;
    height: 300px;
    object-fit: cover;
    background: #e8edf2;
  }

  .team-role {
    color: #e51313;
    font-weight: 700;
  }

  .partner-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .text-link {
    display: inline-block;
    margin-top: 12px;
    color: #e51313;
    font-weight: 700;
    text-decoration: none;
  }

  .text-link:hover {
    text-decoration: underline;
  }

  .mission-cta {
    padding: 75px 0;
    text-align: center;
    color: white;
    background: #14243a;
  }

  .mission-cta h2 {
    color: white;
  }

  .mission-cta p {
    max-width: 650px;
    margin: 0 auto 28px;
  }

  .give-button {
    display: inline-block;
    padding: 14px 32px;
    border-radius: 5px;
    color: #14243a;
    background: #e32c2cee;
    font-weight: 800;
    text-decoration: none;
  }

  .give-button:hover {
    background: #e5c58100;
    color: #ffffff;
    border: 2px solid #e51313;
  }

  @media (max-width: 760px) {
    .about-hero,
    .hero-overlay {
      min-height: 500px;
    }

    .hero-overlay {
      padding: 55px 6%;
    }

    .hero-eyebrow {
      font-size: 0.7rem;
      letter-spacing: 1px;
    }
    .section-padding {
      padding: 55px 0;
    }

    .journey-grid,
    .team-grid,
    .partner-grid {
      grid-template-columns: 1fr;
    }

    .team-image {
      height: 320px;
    }
  }
</style>
