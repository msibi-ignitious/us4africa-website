<script setup lang="ts">
import { MDBContainer, MDBBtn } from "mdb-vue-ui-kit";

const impactSlides = [
  {
    number: "01",
    title: "Supporting Local Ministries",
    description:
      "At US4Africa, we collaborate with local African ministries to strengthen their efforts in spreading the Gospel and serving their communities. Our partnerships empower indigenous leaders with the resources and support they need to make a lasting impact.",
    button: "Discover More",
    image: "/leader.jpg",
    alt: "Supporting local ministries",
  },
  {
    number: "02",
    title: "Fostering Leadership Development",
    description:
      "Investing in future leaders is essential for sustainable growth. Through leadership development, mentoring, and practical training, US4Africa equips emerging leaders to serve with character, vision, and purpose within their communities.",
    button: "Learn About Leadership",
    image: "/leader.jpg",
    alt: "Leadership development",
  },
  {
    number: "03",
    title: "Building Empowered Communities",
    description:
      "Strong communities are built when people have the opportunity, resources, and support to thrive. US4Africa works alongside local communities to encourage sustainable development, strengthen relationships, and create opportunities for meaningful change.",
    button: "See Our Community Work",
    image: "/leader.jpg",
    alt: "Building empowered communities",
  },
];
</script>

<template>
  <section class="impact-section">
    <MDBContainer>
      <!-- Section heading -->
      <div class="impact-heading text-center">
        <span class="section-label">OUR AREAS OF IMPACT</span>

        <h2>
          Creating Impact Through
          <span>Faith, Leadership &amp; Community</span>
        </h2>

        <p>
          US4Africa works alongside local ministries, leaders, and communities
          to create meaningful and lasting change across Africa.
        </p>
      </div>

      <div class="impact-carousel" aria-label="Impact areas carousel">
        <div v-for="slide in impactSlides" :key="slide.number" class="impact-slide">
          <div class="impact-content">
            <div class="impact-text">

              <h3>{{ slide.title }}</h3>

              <p>{{ slide.description }}</p>

              <MDBBtn class="impact-btn">
                {{ slide.button }}
              </MDBBtn>
            </div>

            <div class="impact-image">
              <img :src="slide.image" :alt="slide.alt" />
            </div>
          </div>
        </div>
      </div>
    </MDBContainer>
  </section>
</template>

<style scoped>
.impact-section {
  padding: 100px 0;
  background: #ffffff;
}

.impact-heading {
  max-width: 800px;
  margin: 0 auto 50px;
}

.section-label {
  display: inline-block;
  margin-bottom: 12px;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 2px;
  color: #e54848;
}

.impact-heading h2 {
  margin-bottom: 18px;
  font-size: 2.6rem;
  font-weight: 700;
  line-height: 1.2;
  color: #222;
}

.impact-heading h2 span {
  display: block;
  color: #e54848;
}

.impact-heading p {
  margin: 0 auto;
  max-width: 680px;
  font-size: 1.05rem;
  line-height: 1.7;
  color: #666;
}

.impact-carousel {
  overflow: hidden;
  border-radius: 12px;
}

.impact-slide {
  min-height: 480px;
}

.impact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 480px;
  background: #f8f8f5;
}

.impact-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px;
}

.impact-number {
  margin-bottom: 12px;
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 2px;
  color: #e54848;
}

.impact-text h3 {
  margin-bottom: 20px;
  font-size: 2.3rem;
  font-weight: 700;
  line-height: 1.2;
  color: #222;
}

.impact-text p {
  margin-bottom: 30px;
  max-width: 540px;
  font-size: 1rem;
  line-height: 1.8;
  color: #555;
}

.impact-btn {
  align-self: flex-start;
  padding: 12px 25px;
  background-color: #e54848 !important;
  color: #fff !important;
  font-weight: 600;
  border-radius: 4px;
}

.impact-image {
  min-height: 480px;
}

.impact-image img {
  width: 100%;
  height: 100%;
  min-height: 480px;
  object-fit: cover;
  display: block;
}

/* Mobile */
@media (max-width: 991.98px) {
  .impact-section {
    padding: 70px 0;
  }

  .impact-heading h2 {
    font-size: 2.1rem;
  }

  .impact-content {
    grid-template-columns: 1fr;
  }

  .impact-image {
    order: -1;
    min-height: 300px;
  }

  .impact-image img {
    min-height: 300px;
    max-height: 350px;
  }

  .impact-text {
    padding: 40px 30px 70px;
  }

  .impact-text h3 {
    font-size: 1.9rem;
  }
}

@media (max-width: 575.98px) {
  .impact-section {
    padding: 60px 0;
  }

  .impact-heading h2 {
    font-size: 1.8rem;
  }

  .impact-text {
    padding: 35px 22px 65px;
  }

  .impact-text h3 {
    font-size: 1.7rem;
  }

  .impact-text p {
    font-size: 0.95rem;
  }
}
</style>