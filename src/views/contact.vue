<template>
  <section class="contact-page">
    <div class="contact-card">
      <h1>Contact Us</h1>
      <p>If you have any questions or inquiries, please feel free to contact us:</p>
      <ul>
        <li><strong>Email:</strong> contact@example.com</li>
        <li><strong>Phone:</strong> (250) 788 843 037</li>
      </ul>
      <button type="button" @click="sendMessage">Send a message</button>
    </div>
  </section>
</template>

<script setup>
const sendMessage = () => {
  window.alert('Thank you! We will get back to you soon.');
}
</script>

<style scoped>
.contact-page {
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: #f3f4f6;
}
.contact-card {
  width: 100%;
  max-width: 620px;
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 16px 40px rgba(15, 23, 42, 0.08);
}
.contact-card h1 {
  margin-bottom: 1rem;
}
.contact-card p {
  margin-bottom: 1rem;
  color: #374151;
}
.contact-card ul {
  list-style: none;
  padding: 0;
  margin-bottom: 1.5rem;
}
.contact-card li {
  margin-bottom: 0.5rem;
  color: #1f2937;
}
.contact-card button {
  background: #10b981;
  color: white;
  border: none;
  padding: 0.95rem 1.5rem;
  border-radius: 999px;
  cursor: pointer;
  font-weight: 700;
}
.contact-card button:hover {
  opacity: 0.95;
}
</style>