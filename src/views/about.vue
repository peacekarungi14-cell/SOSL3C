<template>
  <section class="about-page">

    <!-- Hero -->
    <div class="hero">
      <h1>About Tembera u Rwanda</h1>
      <p>
        Welcome to Tembera u Rwanda – your trusted guide to discovering the
        beauty, culture, and adventure Rwanda has to offer.
      </p>
    </div>

    <!-- Moving Images -->
    <div class="slider">
      <div class="slide-track">
        <img src="../assets/image/gorilla.jpg" alt="Gorilla" />
        <img src="../assets/image/kigali.jpg" alt="kigali" />
        <img src="../assets/image/kivu.jpg" alt="lake kivu" />
        <img src="../assets/image/volcano.jpg" alt="Volcanoes" />

        <!-- repeat -->
        <img src="../assets/image/gorilla.jpg" alt="Gorilla" />
        <img src="../assets/image/kigali.jpg" alt="kigali" />
        <img src="../assets/image/kivu.jpg" alt="lake kivu" />
        <img src="../assets/image/volcano.jpg" alt="Volcanoes" />
      </div>
    </div>

    <!-- Content -->
    <div class="content">

      <div class="card">
        <h2>Our Mission</h2>
        <p>
          Tembera u Rwanda was created to help tourists explore Rwanda with
          confidence by providing useful travel information, beautiful places to
          visit, and cultural experiences all in one platform.
        </p>
      </div>

      <div class="card">
        <h2>Why Visit Rwanda?</h2>
        <ul>
          <li>Amazing landscapes known as the Land of a Thousand Hills</li>
          <li>Mountain gorilla trekking in Volcanoes National Park</li>
          <li>Beautiful lakes like Lake Kivu</li>
          <li>Rich Rwandan culture and traditional performances</li>
          <li>Local markets, handmade crafts, and delicious food</li>
          <li>Safe, clean, and welcoming tourism experience</li>
        </ul>
      </div>

      <div class="card">
        <h2>What Tembera u Rwanda Offers</h2>
        <ul>
          <li>Tourist attraction recommendations</li>
          <li>Travel guides and destination details</li>
          <li>Hotel and accommodation suggestions</li>
          <li>Popular restaurants and local dishes</li>
          <li>Photos of Rwanda’s top destinations</li>
          <li>Event and cultural festival updates</li>
        </ul>
      </div>

      <div class="card">
        <h2>Our Vision</h2>
        <p>
          We aim to promote Rwanda as one of Africa’s top tourist destinations
          by making travel planning easier, more exciting, and more accessible
          for everyone.
        </p>
      </div>

      <div class="card">
        <h2>Explore Rwanda With Us</h2>
        <p>
          Whether you are visiting for adventure, relaxation, or cultural
          discovery, Tembera u Rwanda helps you experience Rwanda in the best
          way possible.
        </p>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: "AboutView",
};
</script>

<style scoped>
.about-page {
  padding: 40px 20px;
  background: #f8fafc;
  min-height: 100vh;
}

.hero {
  text-align: center;
  margin-bottom: 30px;
}

.hero h1 {
  font-size: 36px;
  color: #00843d;
}

.hero p {
  font-size: 18px;
  color: #444;
  max-width: 700px;
  margin: auto;
}

/* Slider */
.slider {
  overflow: hidden;
  width: 100%;
  margin-bottom: 40px;
}

.slide-track {
  display: flex;
  width: calc(250px * 8);
  animation: scroll 20s linear infinite;
}

.slide-track img {
  width: 250px;
  height: 170px;
  object-fit: cover;
  border-radius: 12px;
  margin-right: 15px;
}

/* left to right */
@keyframes scroll {
  0% {
    transform: translateX(-50%);
  }

  100% {
    transform: translateX(0);
  }
}

/* Cards */
.content {
  display: grid;
  gap: 20px;
  max-width: 1000px;
  margin: auto;
}

.card {
  background: white;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}

.card h2 {
  color: #00843d;
  margin-bottom: 12px;
}

.card p,
.card li {
  color: #333;
  line-height: 1.7;
}

.card ul {
  padding-left: 20px;
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 28px;
  }

  .slide-track img {
    width: 200px;
    height: 140px;
  }
}
</style>