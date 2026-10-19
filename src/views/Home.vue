<script setup lang="ts">
import { MDBContainer, MDBCard, MDBCardBody } from "mdb-vue-ui-kit";
import ImpactAreas from "../components/ImpactAreas.vue";
import OurApproach from "../components/OurApproach.vue";
import JoinUsSection from "../components/JoinUsSection.vue";
</script>

<template>
  <div class="home-page">

    <!-- ==========================================
         HERO SECTION
    =========================================== -->
    <section class="hero-section">
      <div class="hero-overlay"></div>

      <MDBContainer class="hero-content">
        <div class="row align-items-center hero-row">

          <div class="col-lg-7 col-xl-6 text-white">

            <div class="hero-eyebrow">
              FAITH • SERVICE • TRANSFORMATION
            </div>

            <h1 class="hero-title">
              Empowering Communities 
              in Africa Through Faith
            </h1>

            <p class="hero-text">
              Join us in transforming lives and supporting ministries in Africa.
            </p>

            <div class="hero-buttons">

              <RouterLink
                to="/donate"
                class="btn btn-primary btn-lg hero-primary-btn"
              >
                Donate Now
                <i class="fas fa-heart ms-2"></i>
              </RouterLink>

              <RouterLink
                to="/programs"
                class="btn btn-outline-light btn-lg hero-secondary-btn"
              >
                Discover Our Works
                <i class="fas fa-arrow-right ms-2"></i>
              </RouterLink>

            </div>

          </div>

        </div>
      </MDBContainer>

    </section>

    <!-- ==========================================
         IMPACT AREAS
    =========================================== -->
    <ImpactAreas />

    <!-- ==========================================
         OUR APPROACH
    =========================================== -->
    <OurApproach />


    <!-- ==========================================
         JOIN Us SECTION
    =========================================== -->
    <JoinUsSection />

  </div>
</template>

<style scoped>

/* ==========================================
   HERO
========================================== */

.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;

  background-image:
    url("https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=2200&q=90");

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.hero-overlay {
  position: absolute;
  inset: 0;

  background:
    linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.78) 0%,
      rgba(0, 0, 0, 0.62) 45%,
      rgba(0, 0, 0, 0.25) 100%
    );
}

.hero-content {
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  text-align: left;
  padding-top: 2px;
}
.hero-row {
  min-height: 100vh;
  padding-top: 90px;
  padding-bottom: 80px;
}

.hero-eyebrow {
  display: inline-block;
  margin-bottom: 1.25rem;

  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
}

.hero-title {
  max-width: 850px;
  margin-bottom: 1.5rem;

  font-size: clamp(3rem, 6vw, 5.5rem);
  font-weight: 800;
  line-height: 1.02;
  letter-spacing: -0.03em;
}

.hero-title span {
  display: block;
}

.hero-text {
  max-width: 650px;

  margin-bottom: 2rem;

  font-size: 1.15rem;
  line-height: 1.75;
  color: rgba(255, 255, 255, 0.9);
}

.hero-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.hero-primary-btn,
.hero-secondary-btn {
  border-radius: 50px;
  padding: 0.85rem 1.6rem;
  font-weight: 600;
}

.hero-scroll-indicator {
  position: absolute;
  z-index: 3;
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 0.4rem;

  color: rgba(255, 255, 255, 0.8);

  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
}

.hero-scroll-indicator i {
  font-size: 0.8rem;
}


/* ==========================================
   MISSION
========================================== */

.mission-section {
  padding: 100px 0;
  background: #fff;
}

.section-label {
  margin-bottom: 0.75rem;

  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;

  color: #0d6efd;
}

.section-title {
  margin-bottom: 1.5rem;

  font-size: clamp(2.2rem, 4vw, 3.6rem);
  font-weight: 800;
  line-height: 1.1;
}

.section-title span {
  display: block;
}

.section-text {
  max-width: 650px;

  margin-bottom: 1rem;

  color: #555;
  font-size: 1.05rem;
  line-height: 1.8;
}


/* ==========================================
   MISSION CARDS
========================================== */

.mission-card {
  border: 0;
  border-radius: 18px;

  background: #f8f9fa;

  box-shadow: none;

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.mission-card:hover {
  transform: translateY(-5px);

  box-shadow:
    0 12px 30px rgba(0, 0, 0, 0.08);
}

.mission-icon {
  width: 50px;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 1.2rem;

  border-radius: 50%;

  background: #0d6efd;
  color: white;

  font-size: 1.1rem;
}

.mission-card h3 {
  margin-bottom: 0.75rem;

  font-size: 1.25rem;
  font-weight: 700;
}

.mission-card p {
  margin-bottom: 0;

  color: #666;
  line-height: 1.7;
}


/* ==========================================
   HIGHLIGHT
========================================== */

.mission-highlight {
  display: flex;
  align-items: flex-start;
  gap: 1rem;

  padding: 1.5rem;

  border-radius: 18px;

  background: #f1f5f9;
}

.mission-highlight-icon {
  flex-shrink: 0;

  width: 45px;
  height: 45px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background: #0d6efd;
  color: white;
}

.mission-highlight h4 {
  margin-bottom: 0.4rem;

  font-size: 1.05rem;
  font-weight: 700;
}

.mission-highlight p {
  margin: 0;

  color: #666;
  line-height: 1.6;
}


/* ==========================================
   MOBILE
========================================== */

@media (max-width: 991.98px) {

  .hero-section {
    min-height: 100svh;
  }

  .hero-row {
    min-height: 100svh;

    padding-top: 120px;
    padding-bottom: 100px;
  }

  .hero-title {
    font-size: clamp(2.8rem, 10vw, 4.5rem);
  }

  .hero-text {
    font-size: 1rem;
  }

  .hero-scroll-indicator {
    display: none;
  }

  .mission-section {
    padding: 75px 0;
  }

}


@media (max-width: 575.98px) {

  .hero-row {
    padding-top: 130px;
  }

  .hero-title {
    font-size: 2.75rem;
  }

  .hero-buttons {
    flex-direction: column;
    align-items: stretch;
  }

  .hero-primary-btn,
  .hero-secondary-btn {
    width: 100%;
  }

  .mission-highlight {
    flex-direction: column;
  }

}

</style>