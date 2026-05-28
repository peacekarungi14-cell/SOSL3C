<template>
  <section class="home-hero">
    <div class="home-content">
      <h1>TEMBERA U RWANDA</h1>
      <p>Discover the beauty of Rwanda with guided tours, local culture, and unforgettable experiences.</p>
      <div class="home-actions">
        <router-link to="/services" class="primary-button">Our Services</router-link>
        <router-link to="/contact" class="secondary-button">Contact Us</router-link>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.home-hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url('/src/assets/image/Rwanda.jpeg') center/cover no-repeat;
  color: white;
  padding: 2rem;
}
.home-content {
  max-width: 720px;
  background: rgba(0, 0, 0, 0.55);
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
}
.home-content h1 {
  font-size: 2.75rem;
  margin-bottom: 1rem;
}
.home-content p {
  margin-bottom: 1.5rem;
  line-height: 1.7;
}
.home-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
}
.primary-button,
.secondary-button {
  padding: 0.9rem 1.8rem;
  border-radius: 999px;
  font-weight: 700;
  text-decoration: none;
}
.primary-button {
  background: #ffc107;
  color: #000;
}
.secondary-button {
  background: rgba(255, 255, 255, 0.16);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.35);
}
.primary-button:hover,
.secondary-button:hover {
  opacity: 0.92;
}
</style>

