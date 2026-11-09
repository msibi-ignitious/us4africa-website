
<template>
  <main class="blog-page">
    <section class="blog-hero">
      <div class="blog-hero-inner">
        <span class="eyebrow">THE US4AFRICA JOURNAL</span>
        <h1>Stories of <span>hope, faith & impact.</span></h1>
        <p>
          Discover the people, partnerships and initiatives making
          a difference in communities across Africa.
        </p>
        <a href="#latest-stories" class="blog-hero-link">
          Explore our stories ↓
        </a>
      </div>
    </section>

    <section class="featured-section" v-if="featuredPost">
      <div class="featured-image">
        <img :src="featuredPost.image" :alt="featuredPost.title">
      </div>

      <div class="featured-content">
        <span class="featured-label">FEATURED STORY</span>
        <span class="category">{{ featuredPost.category }}</span>
        <h2>{{ featuredPost.title }}</h2>
        <p>{{ featuredPost.excerpt }}</p>

        <div class="article-meta">
          <span>{{ formatDate(featuredPost.date) }}</span>
          <span>{{ featuredPost.readTime }}</span>
        </div>

        <RouterLink
          :to="`/blog/${featuredPost.slug}`"
          class="read-button"
        >
          Read the story <span>↗</span>
        </RouterLink>
      </div>
    </section>

    <section class="latest-section" id="latest-stories">
      <div class="section-heading">
        <div>
          <span class="eyebrow purple">DISCOVER MORE</span>
          <h2>Stories that inspire.</h2>
          <p>Explore the work, people and impact behind our mission.</p>
        </div>
      </div>

      <div class="category-filters">
        <button
          v-for="category in categories"
          :key="category"
          :class="{ active: selectedCategory === category }"
          @click="selectedCategory = category"
        >
          {{ category }}
        </button>
      </div>

      <div class="blog-grid">
        <article
          v-for="post in filteredPosts"
          :key="post.id"
          class="blog-card"
        >
          <RouterLink :to="`/blog/${post.slug}`" class="card-image">
            <img :src="post.image" :alt="post.title" loading="lazy">
          </RouterLink>

          <div class="card-content">
            <span class="category">{{ post.category }}</span>
            <h3>
              <RouterLink :to="`/blog/${post.slug}`">
                {{ post.title }}
              </RouterLink>
            </h3>

            <p>{{ post.excerpt }}</p>

            <div class="card-footer">
              <span>{{ formatDate(post.date) }}</span>
              <RouterLink :to="`/blog/${post.slug}`">
                Read more ↗
              </RouterLink>
            </div>
          </div>
        </article>
      </div>

      <p v-if="filteredPosts.length === 0" class="empty-state">
        No stories found in this category yet.
      </p>
    </section>

    <section class="blog-cta">
      <span class="eyebrow">BE PART OF THE STORY</span>
      <h2>Help create stories of lasting impact.</h2>
      <p>
        Your generosity helps local ministries serve,
        empower and transform their communities.
      </p>
      <RouterLink to="/donate" class="cta-button">
        Support our work →
      </RouterLink>
    </section>
  </main>
</template>

<script setup>
import { computed, ref } from "vue";
import { RouterLink } from "vue-router";
import { blogPosts } from "../data/blogPosts";

const selectedCategory = ref("All Stories");

const categories = [
  "All Stories",
  "Leadership Development",
  "Children Outreach",
  "Mentorship",
  "Community Development"
];

const featuredPost = computed(() =>
  blogPosts.find(post => post.featured) || blogPosts[0]
);

const filteredPosts = computed(() =>
  blogPosts.filter(post => {
    const matchesCategory =
      selectedCategory.value === "All Stories" ||
      post.category === selectedCategory.value;

    return matchesCategory && post.id !== featuredPost.value?.id;
  })
);

function formatDate(date) {
  return new Date(`${date}T12:00:00`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  });
}
</script>

<style scoped>
.blog-page {
  --purple: #682d91;
  --dark: #45205f;
  --red: #c62836;
  --ink: #25212a;
  --muted: #706b75;
  --line: #ece8ef;
  color: var(--ink);
  background: white;
}

.blog-page * { box-sizing: border-box; }

.blog-page a { text-decoration: none; }

.eyebrow {
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 2px;
}

.purple { color: var(--purple); }

.blog-hero {
  background: #f7f2fa;
  padding: 105px 6%;
  text-align: center;
}

.blog-hero-inner {
  max-width: 850px;
  margin: auto;
}

.blog-hero .eyebrow { color: var(--red); }

.blog-hero h1 {
  font-size: clamp(42px, 6vw, 70px);
  font-weight: 850;
  letter-spacing: -2px;
  line-height: 1.1;
  margin: 22px 0;
}

.blog-hero h1 span { color: var(--purple); }

.blog-hero p {
  color: var(--muted);
  font-size: 17px;
  line-height: 1.8;
  max-width: 650px;
  margin: auto;
}

.blog-hero-link {
  display: inline-block;
  margin-top: 30px;
  color: var(--purple);
  font-size: 13px;
  font-weight: 800;
}

.featured-section {
  max-width: 1200px;
  margin: 85px auto;
  padding: 0 25px;
  display: grid;
  grid-template-columns: 1.1fr .9fr;
  align-items: center;
  gap: 55px;
}

.featured-image img {
  width: 100%;
  height: 420px;
  display: block;
  object-fit: cover;
  border-radius: 8px;
}

.featured-label {
  display: block;
  color: var(--red);
  font-size: 11px;
  font-weight: 850;
  letter-spacing: 2px;
  margin-bottom: 20px;
}

.category {
  color: var(--purple);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.featured-content h2 {
  font-size: clamp(32px, 4vw, 46px);
  line-height: 1.15;
  margin: 16px 0;
}

.featured-content p,
.card-content > p {
  color: var(--muted);
  line-height: 1.8;
  font-size: 14px;
}

.article-meta {
  display: flex;
  gap: 20px;
  color: var(--muted);
  font-size: 12px;
  margin: 22px 0;
}

.read-button,
.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 20px;
  padding: 15px 22px;
  border-radius: 5px;
  background: var(--red);
  color: white;
  font-weight: 750;
  font-size: 13px;
}

.latest-section {
  padding: 80px 6%;
  background: #faf9fb;
}

.section-heading {
  max-width: 1200px;
  margin: auto;
}

.section-heading h2 {
  font-size: clamp(32px, 4vw, 45px);
  margin: 15px 0 10px;
}

.section-heading p {
  color: var(--muted);
  line-height: 1.7;
}

.category-filters {
  max-width: 1200px;
  margin: 35px auto;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.category-filters button {
  padding: 11px 17px;
  border: 1px solid #ddd2e6;
  border-radius: 30px;
  background: white;
  color: var(--purple);
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
}

.category-filters button.active,
.category-filters button:hover {
  background: var(--purple);
  border-color: var(--purple);
  color: white;
}

.blog-grid {
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 25px;
}

.blog-card {
  background: white;
  border: 1px solid var(--line);
  border-radius: 8px;
  overflow: hidden;
  transition: transform .25s ease, box-shadow .25s ease;
}

.blog-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px #27143b12;
}

.card-image img {
  width: 100%;
  height: 235px;
  display: block;
  object-fit: cover;
}

.card-content { padding: 24px; }

.card-content h3 {
  font-size: 21px;
  line-height: 1.3;
  margin: 13px 0;
}

.card-content h3 a { color: var(--ink); }

.card-content h3 a:hover { color: var(--purple); }

.card-footer {
  border-top: 1px solid var(--line);
  padding-top: 17px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  font-size: 11px;
}

.card-footer span { color: var(--muted); }

.card-footer a {
  color: var(--purple);
  font-weight: 800;
  white-space: nowrap;
}

.empty-state {
  text-align: center;
  color: var(--muted);
  padding: 35px;
}

.blog-cta {
  background: var(--dark);
  color: white;
  text-align: center;
  padding: 85px 25px;
}

.blog-cta .eyebrow { color: #e8c7f8; }

.blog-cta h2 {
  font-size: clamp(30px, 4vw, 45px);
  margin: 20px auto;
  max-width: 750px;
}

.blog-cta p {
  max-width: 600px;
  margin: auto auto 28px;
  color: #e2d7e9;
  line-height: 1.8;
}

@media(max-width: 850px) {
  .featured-section { gap: 30px; }
  .blog-grid { grid-template-columns: repeat(2, 1fr); }
}

@media(max-width: 600px) {
  .blog-hero { padding: 75px 22px; }
  .featured-section {
    grid-template-columns: 1fr;
    margin: 55px auto;
  }
  .featured-image img { height: 280px; }
  .latest-section { padding: 60px 20px; }
  .blog-grid { grid-template-columns: 1fr; }
  .category-filters { gap: 8px; }
  .category-filters button { font-size: 11px; }
}

@media(prefers-reduced-motion: reduce) {
  .blog-card { transition: none; }
  .blog-card:hover { transform: none; }
}
</style>
