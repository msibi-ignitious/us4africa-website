
<template>
  <main v-if="post" class="article-page">
    <section class="article-hero">
      <RouterLink to="/blog" class="back-link">
        ← Back to all stories
      </RouterLink>

      <div class="article-heading">
        <span class="category">{{ post.category }}</span>
        <h1>{{ post.title }}</h1>
        <p>{{ post.excerpt }}</p>

        <div class="article-meta">
          <span>{{ formatDate(post.date) }}</span>
          <span>{{ post.readTime }}</span>
        </div>
      </div>
    </section>

    <div class="article-cover">
      <img :src="post.image" :alt="post.title">
    </div>

    <article class="article-body">
      <p class="introduction">{{ post.introduction }}</p>

      <p v-for="(paragraph, index) in post.paragraphs" :key="index">
        {{ paragraph }}
      </p>

      <div class="article-callout">
        <span class="eyebrow">OUR MISSION</span>
        <h2>Empowering ministries. Transforming communities.</h2>
        <p>
          We believe lasting transformation begins with partnership,
          service and the empowerment of local communities.
        </p>
        <RouterLink to="/about">Discover our mission →</RouterLink>
      </div>

      <div class="article-share">
        <RouterLink to="/blog">← Explore more stories</RouterLink>
        <RouterLink to="/donate">Support our work ↗</RouterLink>
      </div>
    </article>

    <section class="related-section">
      <div class="related-inner">
        <span class="eyebrow">KEEP EXPLORING</span>
        <h2>More stories from US4Africa</h2>

        <div class="related-grid">
          <RouterLink
            v-for="item in relatedPosts"
            :key="item.id"
            :to="`/blog/${item.slug}`"
            class="related-card"
          >
            <img :src="item.image" :alt="item.title">
            <div>
              <span>{{ item.category }}</span>
              <h3>{{ item.title }}</h3>
              <p>Read story →</p>
            </div>
          </RouterLink>
        </div>
      </div>
    </section>
  </main>

  <main v-else class="not-found">
    <span class="eyebrow">STORY NOT FOUND</span>
    <h1>We couldn't find this story.</h1>
    <p>The article may have moved or no longer be available.</p>
    <RouterLink to="/blog">Return to the blog →</RouterLink>
  </main>
</template>

<script setup>
import { computed } from "vue";
import { RouterLink, useRoute } from "vue-router";
import { blogPosts } from "../data/blogPosts";

const route = useRoute();

const post = computed(() =>
  blogPosts.find(item => item.slug === route.params.slug)
);

const relatedPosts = computed(() =>
  blogPosts
    .filter(item => item.slug !== post.value?.slug)
    .slice(0, 2)
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
.article-page {
  --purple: #682d91;
  --dark: #45205f;
  --red: #c62836;
  --ink: #25212a;
  --muted: #706b75;
  --line: #ece8ef;
  color: var(--ink);
}

.article-hero {
  background: #faf8fc;
  padding: 55px 22px 70px;
}

.back-link {
  display: block;
  max-width: 850px;
  margin: 0 auto 55px;
  color: var(--purple);
  font-size: 13px;
  font-weight: 750;
}

.article-heading {
  max-width: 850px;
  margin: auto;
  text-align: center;
}

.category,
.eyebrow {
  color: var(--red);
  font-size: 11px;
  font-weight: 850;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.article-heading h1 {
  font-size: clamp(38px, 6vw, 64px);
  letter-spacing: -2px;
  line-height: 1.12;
  margin: 20px 0;
}

.article-heading > p {
  color: var(--muted);
  font-size: 17px;
  line-height: 1.8;
  max-width: 680px;
  margin: auto;
}

.article-meta {
  display: flex;
  justify-content: center;
  gap: 25px;
  color: var(--muted);
  font-size: 12px;
  margin-top: 25px;
}

.article-cover {
  max-width: 1100px;
  margin: -15px auto 0;
  padding: 0 20px;
}

.article-cover img {
  display: block;
  width: 100%;
  height: 480px;
  object-fit: cover;
  border-radius: 8px;
}

.article-body {
  max-width: 760px;
  margin: 65px auto 85px;
  padding: 0 22px;
}

.article-body > p {
  color: #5d5762;
  font-size: 16px;
  line-height: 2;
  margin-bottom: 25px;
}

.article-body .introduction {
  color: var(--dark);
  font-size: 20px;
  font-weight: 600;
  line-height: 1.8;
}

.article-callout {
  background: #faf7fc;
  border-left: 4px solid var(--purple);
  padding: 30px;
  margin: 50px 0;
}

.article-callout h2 {
  color: var(--dark);
  font-size: 27px;
  line-height: 1.3;
  margin: 15px 0;
}

.article-callout p {
  color: var(--muted);
  line-height: 1.8;
  font-size: 14px;
}

.article-callout a {
  display: inline-block;
  margin-top: 12px;
  color: var(--purple);
  font-weight: 800;
  font-size: 13px;
}

.article-share {
  display: flex;
  justify-content: space-between;
  gap: 15px;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  padding: 22px 0;
  font-size: 13px;
  font-weight: 800;
}

.article-share a { color: var(--purple); }

.related-section {
  background: #faf8fc;
  padding: 75px 6%;
}

.related-inner {
  max-width: 1100px;
  margin: auto;
}

.related-inner h2 {
  font-size: clamp(28px, 4vw, 40px);
  margin: 15px 0 30px;
}

.related-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 25px;
}

.related-card {
  display: flex;
  overflow: hidden;
  background: white;
  border: 1px solid var(--line);
  border-radius: 7px;
  color: var(--ink);
}

.related-card img {
  width: 42%;
  min-height: 180px;
  object-fit: cover;
}

.related-card div { padding: 20px; }

.related-card span {
  color: var(--purple);
  font-size: 10px;
  font-weight: 800;
  text-transform: uppercase;
}

.related-card h3 {
  font-size: 17px;
  line-height: 1.4;
}

.related-card p {
  color: var(--red);
  font-size: 12px;
  font-weight: 800;
}

.not-found {
  min-height: 55vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 40px 20px;
}

.not-found h1 { color: var(--dark); }

.not-found p { color: var(--muted); }

.not-found a {
  color: var(--purple);
  font-weight: 800;
}

@media(max-width: 650px) {
  .article-cover img { height: 280px; }
  .article-body { margin: 45px auto 60px; }
  .related-grid { grid-template-columns: 1fr; }
  .related-card img { min-height: 160px; }
  .article-share { flex-direction: column; }
}
</style>
