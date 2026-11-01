<template>
  <section class="join-us-section">
    <div class="join-us-overlay"></div>

    <MDBContainer class="join-us-container">
      <MDBRow class="justify-content-center">
        <MDBCol lg="8" xl="7">
          <div class="join-us-content text-center">
            <span class="section-label">
              MAKE A DIFFERENCE
            </span>

            <h2>
              Join Us in Making a Difference
            </h2>

            <p>
              Your generosity, time, and partnership help us expand our reach
              and strengthen communities across Africa. Together, we can equip
              local ministries, empower people, and create lasting transformation.
            </p>

            <div class="join-us-actions">
              <router-link to="/donate"
                >
                <MDBBtn
                color="primary"
                size="lg"
                class="join-us-primary"
                >
                Donate Now
                </MDBBtn>
              </router-link>

              <router-link to="/get-involved" >
                <MDBBtn
                  outline
                  color="light"
                  size="lg"
                >
                  Get Involved
                </MDBBtn>
              </router-link>  
            </div>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  </section>
</template>

<script setup>
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn
} from 'mdb-vue-ui-kit'
import router from '../router';
</script>

<style scoped>
.join-us-section {
  position: relative;
  min-height: 560px;
  display: flex;
  align-items: center;

  background-image: url('/join-us-africa.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  overflow: hidden;
}

.join-us-overlay {
  position: absolute;
  inset: 0;

  background: rgba(10, 24, 45, 0.72);
}

.join-us-container {
  position: relative;
  z-index: 2;
  padding-top: 100px;
  padding-bottom: 100px;
}

.join-us-content {
  color: #ffffff;
}

.section-label {
  display: inline-block;
  margin-bottom: 20px;

  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 2px;

  color: #ab1e8d;
}

.join-us-content h2 {
  margin-bottom: 25px;

  font-size: clamp(2.3rem, 5vw, 4rem);
  font-weight: 700;
  line-height: 1.1;

  color: #ffffff;
}

.join-us-content p {
  max-width: 720px;
  margin: 0 auto 35px;

  font-size: 1.1rem;
  line-height: 1.8;

  color: rgba(255, 255, 255, 0.9);
}

.join-us-actions {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
}

.join-us-actions .btn {
  min-width: 150px;
  padding: 13px 28px;

  border-radius: 8px;
  font-weight: 600;
}

/* Mobile */
@media (max-width: 767px) {
  .join-us-section {
    min-height: 520px;
  }

  .join-us-container {
    padding-top: 75px;
    padding-bottom: 75px;
  }

  .join-us-content h2 {
    font-size: 2.3rem;
  }

  .join-us-content p {
    font-size: 1rem;
    line-height: 1.7;
  }

  .join-us-actions {
    flex-direction: column;
    align-items: center;
  }

  .join-us-actions .btn {
    width: 100%;
    max-width: 260px;
  }
}
</style>