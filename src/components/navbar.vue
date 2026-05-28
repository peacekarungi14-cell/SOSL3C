<template>
  <nav class="navbar">
    <img src="../assets/sos.jpg" class="navbar-logo" alt="Logo" />
    <ul class="navbar-links">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/services">Services</router-link></li>
      <li class="dropdown">
        <span>Gallery ▾</span>
        <ul class="dropdown-menu">
          <li><router-link to="/gallery">Images</router-link></li>
          <li><router-link to="/gallery">Videos</router-link></li>
        </ul>
      </li>
      <li class="dropdown">
        <span>Destination ▾</span>
        <ul class="dropdown-menu">
          <li><router-link to="/destination">Kigali</router-link></li>
          <li><router-link to="/destination">South</router-link></li>
          <li><router-link to="/destination">West</router-link></li>
          <li><router-link to="/destination">North</router-link></li>
          <li><router-link to="/destination">East</router-link></li>
        </ul>
      </li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>
  </nav>
</template>

<script setup></script>

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
  transition: opacity 0.2s ease, transform 0.2s ease;
  min-width: 140px;
  z-index: 10;
}
.dropdown:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}
.dropdown-menu li {
  width: 100%;
}
.dropdown-menu a {
  display: block;
  padding: 0.75rem 1rem;
}
.dropdown-menu a:hover {
  background: #14532d;
}
</style>