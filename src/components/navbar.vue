<template>
  <nav class="navbar">
    <!-- Logo -->
    <img src="../assets/sos.jpg" class="navbar-logo" alt="Logo" />

    <!-- Navigation -->
    <ul class="navbar-links">
      <li><router-link to="/">{{ text.home }}</router-link></li>
      <li><router-link to="/about">{{ text.about }}</router-link></li>
      <li><router-link to="/services">{{ text.services }}</router-link></li>

      <!-- Gallery -->
      <li class="dropdown">
        <span>{{ text.gallery }} ▾</span>
        <ul class="dropdown-menu">
          <li><router-link to="/gallery">{{ text.images }}</router-link></li>
          <li><router-link to="/gallery">{{ text.videos }}</router-link></li>
        </ul>
      </li>

      <!-- Destination -->
      <li class="dropdown">
        <span>{{ text.destination }} ▾</span>
        <ul class="dropdown-menu">
          <li><router-link to="/destination">{{ text.kigali }}</router-link></li>
          <li><router-link to="/destination">{{ text.south }}</router-link></li>
          <li><router-link to="/destination">{{ text.west }}</router-link></li>
          <li><router-link to="/destination">{{ text.north }}</router-link></li>
          <li><router-link to="/destination">{{ text.east }}</router-link></li>
        </ul>
      </li>

      <li><router-link to="/contact">{{ text.contact }}</router-link></li>

      <!-- Language switch -->
      <li class="language-switch">
        <button @click="changeLanguage('en')">English</button>
        <button @click="changeLanguage('rw')">Kinyarwanda</button>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref } from "vue"

const translations = {
  en: {
    home: "Home",
    about: "About",
    services: "Services",
    gallery: "Gallery",
    images: "Images",
    videos: "Videos",
    destination: "Destination",
    kigali: "Kigali",
    south: "South",
    west: "West",
    north: "North",
    east: "East",
    contact: "Contact",
  },

  rw: {
    home: "Ahabanza",
    about: "Ibitwerekeyeho",
    services: "Serivisi",
    gallery: "Amafoto",
    images: "Amashusho",
    videos: "Amavidewo",
    destination: "Aho Wasura",
    kigali: "Kigali",
    south: "Amajyepfo",
    west: "Iburengerazuba",
    north: "Amajyaruguru",
    east: "Iburasirazuba",
    contact: "Twandikire",
  },
}

const text = ref(translations.en)

const changeLanguage = (lang) => {
  text.value = translations[lang]
}
</script>

<style scoped>
.navbar {
  background: #166534;
  color: white;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

.navbar-logo {
  height: 40px;
  width: auto;
}

.navbar-links {
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
}

.navbar-links li {
  position: relative;
}

.navbar-links a,
.navbar-links span {
  color: white;
  text-decoration: none;
  cursor: pointer;
}

.navbar-links a:hover,
.navbar-links span:hover {
  color: #facc15;
}

/* Dropdown */
.dropdown-menu {
  position: absolute;
  left: 0;
  top: 100%;
  margin-top: 0.5rem;
  background: #166534;
  border-radius: 0.5rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  opacity: 0;
  visibility: hidden;
  transform: translateY(0.5rem);
  transition: 0.2s ease;
  min-width: 140px;
  z-index: 10;
}

.dropdown:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-menu a {
  display: block;
  padding: 0.75rem 1rem;
}

.dropdown-menu a:hover {
  background: #14532d;
}

/* Language buttons */
.language-switch {
  display: flex;
  gap: 0.5rem;
}

.language-switch button {
  background: white;
  color: #166534;
  border: none;
  padding: 0.4rem 0.7rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
}

.language-switch button:hover {
  background: #facc15;
}
</style>
