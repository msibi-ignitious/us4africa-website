
<template>
  <main class="us-home">
    <!-- Hero -->
    <section class="hero">
      <div class="hero-copy">
        <span class="eyebrow">FAITH • SERVICE • COMMUNITY</span>

        <h1>
          Empowering Ministries.
          <span>Strengthening Communities.</span>
        </h1>

        <p class="hero-description">
          We partner with African ministries to equip leaders,
          support communities and help people experience lasting
          transformation through faith and service.
        </p>

        <div class="hero-actions">
          <RouterLink to="/donate" class="btn btn-red">
            Give Today <span aria-hidden="true">↗</span>
          </RouterLink>
          <RouterLink to="/programs" class="btn btn-outline">
            Explore Our Work
          </RouterLink>
        </div>

        <p class="hero-note">
          Your generosity helps local ministries serve their communities.
        </p>
      </div>

      <div class="hero-visual">
        <img
          src="/com.jpg"
          alt="Community-focused work supported by US4Africa"
          class="hero-image"
        />
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

    <!-- Mission -->
    <section class="mission section-pad">
      <div class="mission-heading">
        <span class="eyebrow purple-text">WHY WE EXIST</span>
        <h2>Change grows when communities are equipped.</h2>
      </div>
      <div class="mission-copy">
        <p>
          US4Africa is a charitable organisation dedicated to
          empowering African ministries through support and service.
          We believe local leaders are essential to creating meaningful,
          sustainable change in the communities they serve.
        </p>
        <RouterLink to="/about" class="text-link">
          Discover our journey <span aria-hidden="true">→</span>
        </RouterLink>
      </div>
    </section>

    <!-- Impact areas -->
    <section class="impact section-pad">
      <div class="section-heading">
        <div>
          <span class="eyebrow purple-text">WHERE WE FOCUS</span>
          <h2>Our work. Our purpose.</h2>
        </div>
        <RouterLink to="/programs" class="text-link">
          Explore all programmes →
        </RouterLink>
      </div>

      <div class="impact-grid">
        <article class="impact-card">
          <img
            src="/youth.jpg"
            alt="Community-focused work supported by US4Africa"
            loading="lazy"
          />
          <div class="impact-card-body">
            <span class="card-number">YOUTH MINISTRY</span>
            <h3>Growing the next generation</h3>
            <p>
              Supporting youth discipleship, spiritual growth and
              the development of young leaders through our partners.
            </p>
            <RouterLink to="/programs" class="text-link">
              Discover the work →
            </RouterLink>
          </div>
        </article>

        <article class="impact-card">
          <img
            src="/children.jpg"
            alt="Children's outreach and learning"
            loading="lazy"
          />
          <div class="impact-card-body">
            <span class="card-number">CHILDREN MINISTRY</span>
            <h3>Helping children flourish</h3>
            <p>
              Supporting caring environments where children can learn,
              grow, build relationships and explore their potential.
            </p>
            <RouterLink to="/programs" class="text-link">
              Discover the work →
            </RouterLink>
          </div>
        </article>

        <article class="impact-card">
          <img
            src="/slt.jpg"
            alt="Ministry leadership and community development"
            loading="lazy"
          />
          <div class="impact-card-body">
            <span class="card-number"> LEADERSHIP DEVELOPMENT</span>
            <h3>Equipping local leaders</h3>
            <p>
              Helping ministries access resources, encouragement and
              partnerships that strengthen their community work.
            </p>
            <RouterLink to="/programs" class="text-link">
              Discover the work →
            </RouterLink>
          </div>
        </article>
      </div>
    </section>

   <!-- Stories -->
  <section class="stories section-pad">
    <div class="stories-heading">
      <span class="eyebrow">BEHIND THE IMPACT</span>
      <h2>Transformative Impact — Real Stories, Real Change</h2>
      <p>
        Discover how faith, partnership and service are making a
        difference in the lives of people and communities.
      </p>
      <!--outerLink to="/stories" class="btn btn-white">
        Read impact stories →
      </RouterLink> -->
    </div>

    <div class="stories-grid">
      <article class="story-card">
        <img
          src="/stud.jpg"
          alt="A student pursuing their education"
          loading="lazy"
        />
        <div class="story-card-content">
          <span class="story-category">LEADERSHIP DEVELOPMENT</span>
          <h3>A Student’s Journey</h3>
          <p>
            A story of perseverance, opportunity and the hope that
            education can bring.
          </p>
          <RouterLink to="/stories" class="story-link">
            Read the story ↗
          </RouterLink>
        </div>
      </article>

      <article class="story-card">
        <img
          src="/hope.jpg"
          alt="Children learning and taking part in activities"
          loading="lazy"
        />
        <div class="story-card-content">
          <span class="story-category">CHILDREN</span>
          <h3>Hope for the Children</h3>
          <p>
            Creating spaces where children can learn, grow and
            experience care and encouragement.
          </p>
          <RouterLink to="/stories" class="story-link">
            Read the story ↗
          </RouterLink>
        </div>
      </article>

      <article class="story-card">
        <img
          src="/mentorship.jpg"
          alt="A mentor encouraging a young person"
          loading="lazy"
        />
        <div class="story-card-content">
          <span class="story-category">MENTORSHIP</span>
          <h3>Growing Through Mentorship</h3>
          <p>
            Discover the impact of guidance, discipleship and
            relationships that help people grow.
          </p>
          <RouterLink to="/stories" class="story-link">
            Read the story ↗
          </RouterLink>
        </div>
      </article>

      <article class="story-card">
        <img
          src="/com.jpg"
          alt="Community members working together"
          loading="lazy"
        />
        <div class="story-card-content">
          <span class="story-category">COMMUNITY</span>
          <h3>Stronger Communities</h3>
          <p>
            Local people and ministries working together to bring
            meaningful change to their communities.
          </p>
          <RouterLink to="/stories" class="story-link">
            Read the story ↗
          </RouterLink>
        </div>
      </article>
    </div>
  </section>

    <!-- Blog -->
    <section class="updates section-pad">
      <div class="section-heading">
        <div>
          <span class="eyebrow purple-text">FROM OUR COMMUNITY</span>
          <h2>News, reflections & updates.</h2>
        </div>
        <RouterLink to="/blog" class="text-link">
          Visit the blog →
        </RouterLink>
      </div>

      <div class="blog-intro">
        <div class="blog-icon" aria-hidden="true">✳</div>
        <div>
          <h3>Stories worth sharing.</h3>
          <p>
            Follow our journey through programme updates, partner
            highlights, community projects and reflections on service.
          </p>
        </div>
        <RouterLink to="/blog" class="btn btn-outline">
          Read our blog
        </RouterLink>
      </div>
    </section>

    <!-- Call to action -->
    <section class="home-cta section-pad">
      <div>
        <span class="eyebrow">BE PART OF THE CHANGE</span>
        <h2>There is a place for you in this story.</h2>
        <p>
          Give, volunteer or partner with us to help local ministries
          continue serving their communities.
        </p>
      </div>
      <div class="cta-actions">
        <RouterLink to="/donate" class="btn btn-white">
          Support our work
        </RouterLink>
        <RouterLink to="/get-involved" class="cta-link">
          Get involved →
        </RouterLink>
      </div>
    </section>
  </main>
</template>

<script setup>
import { RouterLink } from 'vue-router'
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

.us-home * {
  box-sizing: border-box;
}

.us-home a {
  text-decoration: none;
}

.section-pad {
  padding: 88px max(6%, calc((100% - 1200px) / 2));
}

.eyebrow {
  display: inline-block;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 2px;
  line-height: 1.6;
}

.purple-text {
  color: var(--purple);
}

.hero {
  min-height: 590px;
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  align-items: center;
  gap: 52px;
  padding: 72px max(6%, calc((100% - 1200px) / 2)) 88px;
  overflow: hidden;
}

.hero-copy {
  max-width: 590px;
}

.hero-copy .eyebrow {
  color: var(--purple);
  margin-bottom: 22px;
}

.hero h1 {
  font-size: clamp(40px, 5vw, 66px);
  letter-spacing: -2.5px;
  line-height: 1.08;
  font-weight: 800;
  margin: 0 0 24px;
}

.hero h1 span {
  color: var(--purple);
  display: block;
}

.hero-description {
  color: var(--muted);
  font-size: 17px;
  line-height: 1.85;
  max-width: 530px;
  margin-bottom: 28px;
}

.hero-actions,
.cta-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 13px;
}

.btn {
  min-height: 48px;
  padding: 14px 21px;
  border-radius: 5px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  font-size: 13px;
  font-weight: 750;
  transition: transform 0.2s, background 0.2s;
}

.btn:hover {
  transform: translateY(-2px);
}

.btn-red {
  background: var(--red);
  color: white;
}

.btn-red:hover {
  background: #a91f2b;
}

.btn-outline {
  color: var(--purple);
  border: 1px solid #d8c8e3;
  background: white;
}

.btn-outline:hover {
  background: #f8f3fb;
}

.btn-white {
  color: var(--purple-dark);
  background: white;
}

.hero-note {
  color: var(--muted);
  font-size: 12px;
  margin-top: 20px;
  line-height: 1.6;
}

.hero-visual {
  position: relative;
  min-width: 0;
  padding: 0 0 34px 20px;
}

.hero-image {
  display: block;
  width: 100%;
  height: 440px;
  object-fit: cover;
  border-radius: 180px 180px 8px 8px;
  position: relative;
  z-index: 1;
  background: #f1eaf5;
}

.purple-orb {
  position: absolute;
  z-index: 0;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background: #eee2f6;
  right: -20px;
  top: -30px;
}

.image-caption {
  position: absolute;
  z-index: 2;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  gap: 13px;
  padding: 19px;
  max-width: 330px;
  background: white;
  box-shadow: 0 12px 35px #27143b18;
  border: 1px solid var(--line);
  border-radius: 6px;
}

.caption-mark {
  color: var(--red);
  font-size: 30px;
}

.image-caption strong,
.image-caption span {
  display: block;
}

.image-caption strong {
  font-size: 13px;
  margin-bottom: 4px;
}

.image-caption div span {
  color: var(--muted);
  font-size: 11px;
  line-height: 1.5;
}

.mission {
  display: grid;
  grid-template-columns: 1fr 0.9fr;
  gap: 80px;
  align-items: start;
  background: #faf8fc;
  border-top: 1px solid #f3eef6;
  border-bottom: 1px solid #f3eef6;
}

.mission h2,
.section-heading h2,
.stories h2,
.home-cta h2 {
  font-size: clamp(30px, 3.4vw, 44px);
  line-height: 1.18;
  letter-spacing: -1.2px;
  margin: 13px 0 0;
  font-weight: 800;
}

.mission-copy p {
  font-size: 16px;
  line-height: 1.9;
  color: var(--muted);
  margin: 0 0 22px;
}

.text-link {
  color: var(--purple);
  font-weight: 750;
  font-size: 13px;
  display: inline-flex;
  gap: 8px;
  align-items: center;
}

.text-link:hover {
  color: var(--red);
}

.section-heading {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 25px;
  margin-bottom: 35px;
}

.section-heading h2 {
  margin-top: 10px;
}

.impact-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 25px;
}

.impact-card {
  border: 1px solid var(--line);
  border-radius: 7px;
  overflow: hidden;
  background: white;
  transition: transform 0.25s, box-shadow 0.25s;
}

.impact-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px #29133d0d;
}

.impact-card > img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  display: block;
  background: #f1eaf5;
}

.impact-card-body {
  padding: 25px 23px 28px;
}

.card-number {
  color: var(--red);
  font-size: 10px;
  letter-spacing: 1.5px;
  font-weight: 800;
}

.impact-card h3 {
  font-size: 21px;
  line-height: 1.3;
  margin: 13px 0 12px;
}

.impact-card p {
  color: var(--muted);
  line-height: 1.8;
  font-size: 14px;
  min-height: 100px;
  margin-bottom: 22px;
}

.stories {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background: var(--purple-dark);
  color: white;
}

.stories-heading {
  width: 100%;
  max-width: 850px;
  margin: 0 auto 2.5rem;
  text-align: center;
}

.stories-heading .eyebrow {
  color: #e8c7f8;
}

.stories h2 {
  margin-bottom: 20px;
}

.stories-heading > p {
  color: #e2d7e9;
  font-size: 15px;
  line-height: 1.9;
  margin-bottom: 27px;
}

.stories-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1.25rem;
  width: 100%;
}

.story-card {
  overflow: hidden;
  border-radius: 1.25rem;
  background: #fff;
  box-shadow: 0 12px 35px rgba(30, 20, 60, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.story-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 18px 45px rgba(30, 20, 60, 0.14);
}

.story-card img {
  display: block;
  width: 100%;
  height: 220px;
  object-fit: cover;
}

.story-card-content {
  padding: 1.5rem;
}

.story-category {
  color: #8b2bd1;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
}

.story-card h3 {
  margin: 0.75rem 0;
  color: #25143b;
  font-size: 1.25rem;
}

.story-card p {
  color: #686273;
  line-height: 1.7;
}

.story-link {
  display: inline-block;
  margin-top: 0.5rem;
  color: #8b2bd1;
  font-weight: 700;
  text-decoration: none;
}

.story-link:hover {
  color: #d62845;
}

.story-feature {
  position: relative;
  min-height: 390px;
  border-radius: 7px;
  overflow: hidden;
  background: #352040;
}

.story-feature > img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  inset: 0;
  opacity: 0.56;
}

.story-overlay {
  position: absolute;
  inset: 0;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  background: linear-gradient(transparent 10%, #170c22e8 100%);
}

.story-overlay > span {
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 2px;
  color: #f3d7ff;
}

.story-overlay h3 {
  font-size: 27px;
  margin: 12px 0;
}

.story-overlay p {
  color: #eee5f2;
  font-size: 14px;
  line-height: 1.7;
  max-width: 390px;
}

.story-link {
  color: white;
  font-size: 13px;
  font-weight: 750;
  margin-top: 10px;
}

.updates {
  background: #fff;
}

.blog-intro {
  display: flex;
  align-items: center;
  gap: 25px;
  padding: 30px;
  border: 1px solid var(--line);
  border-radius: 7px;
}

.blog-icon {
  width: 60px;
  height: 60px;
  display: grid;
  place-items: center;
  flex-shrink: 0;
  border-radius: 50%;
  background: #f3eaf8;
  color: var(--purple);
  font-size: 30px;
}

.blog-intro > div:nth-child(2) {
  flex: 1;
}

.blog-intro h3 {
  margin: 0 0 8px;
  font-size: 21px;
}

.blog-intro p {
  color: var(--muted);
  font-size: 14px;
  line-height: 1.8;
  margin: 0;
}

.blog-intro .btn {
  flex-shrink: 0;
}

.home-cta {
  background: var(--purple);
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
}

.home-cta h2 {
  max-width: 640px;
}

.home-cta > div:first-child > p {
  max-width: 620px;
  color: #eee1f5;
  line-height: 1.8;
  margin: 18px 0 0;
}

.home-cta .eyebrow {
  color: #f0d8ff;
}

.cta-actions {
  flex-shrink: 0;
}

.cta-link {
  color: white;
  font-size: 13px;
  font-weight: 750;
  padding: 12px 0;
}

@media (max-width: 900px) {
  .hero {
    grid-template-columns: 1fr 0.85fr;
    gap: 28px;
  }

  .hero-image {
    height: 360px;
  }

  .mission {
    gap: 35px;
  }

  .impact-grid {
    gap: 15px;
  }

  .impact-card-body {
    padding: 20px 16px;
  }

  .stories-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .home-cta {
    align-items: flex-start;
    flex-direction: column;
  }
}

@media (max-width: 650px) {
  .section-pad {
    padding: 58px 22px;
  }

  .hero {
    grid-template-columns: 1fr;
    padding: 55px 22px 65px;
    gap: 35px;
  }

  .hero h1 {
    font-size: clamp(39px, 10vw, 54px);
    letter-spacing: -1.7px;
  }

  .hero-description {
    font-size: 15px;
  }

  .hero-visual {
    padding-left: 12px;
    margin-right: 10px;
  }

  .hero-image {
    height: 330px;
  }

  .image-caption {
    max-width: 290px;
    padding: 14px;
  }

  .mission,
  .stories {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .section-heading {
    align-items: flex-start;
    flex-direction: column;
  }

  .impact-grid {
    grid-template-columns: 1fr;
    gap: 22px;
  }

  .impact-card > img {
    height: 235px;
  }

  .impact-card p {
    min-height: 0;
  }
 .story-card {
    transition: none;
  }

  .story-card:hover {
    transform: none;
  }
  .blog-intro {
    align-items: flex-start;
    flex-direction: column;
    padding: 23px;
  }

  .home-cta {
    gap: 28px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .impact-card,
  .btn {
    transition: none;
  }
 .story-card {
    transition: none;
  }

  .story-card:hover {
    transform: none;
  }
}
</style>
