<script setup lang="ts">
import { MDBContainer } from "mdb-vue-ui-kit";
</script>

<template>
  <section class="approach-section">
    <MDBContainer>
      <!-- Section introduction -->
      <div class="approach-heading text-center">
        <span class="section-label">OUR APPROACH</span>

        <h2>
          Creating Lasting Change,
          <span>Together</span>
        </h2>

        <p>
          We believe meaningful transformation happens when local ministries
          and communities are equipped, supported, and empowered to create
          lasting change from within.
        </p>
      </div>

      <!-- Approach 1 -->
      <div class="approach-item">
        <div class="approach-image">
          <img
            src="https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/23291814/847091_153446.jpeg"
            alt="Ministry resources and empowerment"
          />
        </div>

        <div class="approach-content">

          <h3>Empowerment Through Resources</h3>

          <p>
            We aim to empower ministries by providing essential resources,
            including training, materials, and financial support, enabling
            them to effectively reach and serve their communities.
          </p>

          <p>
            We believe that sustainable transformation occurs when local
            ministries are equipped with the tools, knowledge, and support
            they need to fulfill their calling and multiply their impact.
          </p>
        </div>
      </div>

      <!-- Approach 2 -->
      <div class="approach-item approach-item-reverse">
        <div class="approach-image">
          <img
            src="https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/23291814/751952_421352.jpeg"
            alt="Community transformation"
          />
        </div>

        <div class="approach-content">

          <h3>Community Transformation</h3>

          <p>
            Our mission goes beyond spiritual guidance. We focus on holistic
            community transformation by addressing educational and
            socio-economic barriers while also engaging issues of worldview
            and mindset.
          </p>

          <p>
            Through teaching, mentoring, and practical development initiatives,
            we help cultivate new ways of thinking that promote dignity,
            resilience, and hope. We create pathways for individuals and
            communities to grow, overcome challenges, and build a sustainable
            future.
          </p>
        </div>
      </div>

      <!-- Approach 3 -->
      <div class="approach-item">
        <div class="approach-image">
          <img
            src="https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/23291814/188588_677283.jpeg"
            alt="Sustainable impact through long-term partnerships"
          />
        </div>

        <div class="approach-content">
          <h3>Sustainable Impact</h3>

          <p>
            We pursue sustainable impact by building long-term, trust-based
            partnerships with local ministries. Rather than offering quick,
            short-lived interventions, we walk alongside leaders over time,
            helping them strengthen their capacity, refine their vision, and
            grow their influence in their own communities.
          </p>

          <p>
            This ongoing collaboration ensures that every resource, training
            effort, and project investment contributes to lasting change,
            continued growth, and ministries that can stand strong long after
            external support has ended.
          </p>
        </div>
      </div>
    </MDBContainer>
  </section>
</template>

<style scoped>
.approach-section {
  padding: 110px 0;
  background: #f8f8f5;
}

/* Section heading */
.approach-heading {
  max-width: 800px;
  margin: 0 auto 80px;
}

.section-label {
  display: inline-block;
  margin-bottom: 12px;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 2px;
  color: #e54848;
}

.approach-heading h2 {
  margin-bottom: 20px;
  font-size: 2.7rem;
  font-weight: 700;
  line-height: 1.2;
  color: #222;
}

.approach-heading h2 span {
  color: #e54848;
}

.approach-heading p {
  max-width: 700px;
  margin: 0 auto;
  font-size: 1.05rem;
  line-height: 1.8;
  color: #666;
}

/* Individual approach item */
.approach-item {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 70px;
  margin-bottom: 100px;
}

.approach-item:last-child {
  margin-bottom: 0;
}

/* Alternate the layout */
.approach-item-reverse .approach-image {
  order: 2;
}

.approach-item-reverse .approach-content {
  order: 1;
}

/* Images */
.approach-image {
  height: 430px;
  overflow: hidden;
  border-radius: 8px;
}

.approach-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;
}

.approach-image:hover img {
  transform: scale(1.03);
}

/* Text */
.approach-content {
  max-width: 560px;
}

.approach-number {
  display: block;
  margin-bottom: 12px;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 2px;
  color: #e54848;
}

.approach-content h3 {
  margin-bottom: 22px;
  font-size: 2.2rem;
  font-weight: 700;
  line-height: 1.2;
  color: #222;
}

.approach-content p {
  margin-bottom: 18px;
  font-size: 1rem;
  line-height: 1.8;
  color: #555;
}

.approach-content p:last-child {
  margin-bottom: 0;
}

/* Tablet */
@media (max-width: 991.98px) {
  .approach-section {
    padding: 80px 0;
  }

  .approach-heading {
    margin-bottom: 60px;
  }

  .approach-heading h2 {
    font-size: 2.2rem;
  }

  .approach-item {
    grid-template-columns: 1fr;
    gap: 35px;
    margin-bottom: 75px;
  }

  .approach-item-reverse .approach-image {
    order: 1;
  }

  .approach-item-reverse .approach-content {
    order: 2;
  }

  .approach-image {
    height: 360px;
  }

  .approach-content {
    max-width: none;
  }

  .approach-content h3 {
    font-size: 2rem;
  }
}

/* Mobile */
@media (max-width: 575.98px) {
  .approach-section {
    padding: 65px 0;
  }

  .approach-heading {
    margin-bottom: 50px;
  }

  .approach-heading h2 {
    font-size: 1.9rem;
  }

  .approach-heading p {
    font-size: 0.95rem;
  }

  .approach-item {
    gap: 25px;
    margin-bottom: 60px;
  }

  .approach-image {
    height: 280px;
  }

  .approach-content h3 {
    font-size: 1.7rem;
  }

  .approach-content p {
    font-size: 0.95rem;
    line-height: 1.7;
  }
}
</style>