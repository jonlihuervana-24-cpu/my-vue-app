<script setup>
import Navbar from '../components/Navbar.vue'
</script>

<template>
  <Navbar></Navbar>

  <div class="streetwear-portal">
    <!-- Top Hero Card -->
    <section class="hero-card">
      <div class="hero-text">
        <div class="tags">
          <span class="badge">ESTABLISHED 20055</span>
        </div>
        
        <h1>EXEMPLARY <span class="highlight">CHRISTIAN</span> EDUCATION FOR LIFE.</h1>
        <p>A leading Christian institution in the Philippines, Central Philippine University nurtures intellectual growth and spiritual development through a commitment to <strong>Scientia et Fides</strong> (Science and Faith).</p>
        
        <div class="action-buttons">
          <button class="btn-main">Explore Academics →</button>
          <button class="btn-sub">Request Information</button>
        </div>
      </div>

      <div class="brand-badge">
        <img src="@/assests/logo.png" alt="logo" class="logo" />
        <h2>Apex Global Academy</h2>
        <p class="slogan">"Knowledge Without Limits"</p>
      </div>
    </section>

    <!-- Value Badges Grid -->
    <section class="stats-grid">
      <div class="stat-card">
        <span class="label">118+ YEARS OF EXCELLENCE</span>
      </div>
      <div class="stat-card">
        <span class="label">20+ ACADEMIC PROGRAMS</span>
      </div>
      <div class="stat-card">
        <span class="label">5,000+ ACTIVE STUDENTS</span>
      </div>
      <div class="stat-card">
        <span class="label">20+ PARTNER INSTITUTIONS</span>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Modern Streetwear Font Load */
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Syne:wght@700;800&display=swap');

.streetwear-portal {
  max-width: 1200px;
  margin: 30px auto;
  padding: 0 20px;
  font-family: 'Space Grotesk', sans-serif;
  color: #ffffff;
}

button {
  font-family: 'Space Grotesk', sans-serif;
}

.hero-card {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 30px;
  background: #141414;
  border: 1px solid #222222;
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  align-items: center;
}

.tags {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
}

.badge {
  background: #222222;
  color: #888888;
  font-size: 11px;
  font-weight: bold;
  padding: 6px 12px;
  border-radius: 20px;
  letter-spacing: 1px;
}

h1 {
  font-family: 'Syne', sans-serif;
  font-size: 42px;
  font-weight: 800;
  color: #ffffff;
  line-height: 1.1;
  margin: 0 0 15px 0;
  text-transform: uppercase;
}

.highlight {
  color: #ff3300; /* Vibrant streetwear orange/red accent */
  font-style: italic;
}

p {
  color: #a0a0a0;
  font-size: 15px;
  line-height: 1.6;
  margin-bottom: 25px;
}

.action-buttons {
  display: flex;
  gap: 12px;
}

.btn-main {
  background: #ffffff;
  color: #000000;
  border: none;
  padding: 14px 28px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: transform 0.2s, background 0.2s, color 0.2s;
}

.btn-main:hover {
  background: #ff3300;
  color: #ffffff;
  transform: translateY(-2px);
}

.btn-sub {
  background: transparent;
  color: #ffffff;
  border: 1px solid #333333;
  padding: 14px 28px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: background 0.2s, border-color 0.2s, color 0.2s;
}

.btn-sub:hover {
  background: #ffffff;
  color: #000000;
  border-color: #ffffff;
}

.brand-badge {
  background: #1a1a1a;
  border: 1px solid #2a2a2a;
  border-radius: 12px;
  padding: 40px 20px;
  text-align: center;
}

.brand-badge .logo {
  width: 95px;
  height: 95px;
  object-fit: contain;
  margin-bottom: 15px;
  filter: drop-shadow(0px 8px 12px rgba(0,0,0,0.4));
}

.brand-badge h2 {
  font-family: 'Syne', sans-serif;
  font-size: 22px;
  font-weight: 800;
  color: #ffffff;
  margin: 0 0 8px 0;
}

.slogan {
  font-size: 13px;
  font-style: italic;
  color: #777777;
  margin: 0;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  margin-top: 20px;
}

.stat-card {
  background: #141414;
  border: 1px solid #222222;
  border-radius: 12px;
  padding: 20px 10px;
  text-align: center;
  transition: border-color 0.2s ease;
}

.stat-card:hover {
  border-color: #444444;
}

.stat-card .label {
  display: block;
  font-size: 11px;
  font-weight: 700;
  color: #cccccc;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* Mobile Responsiveness */
@media (max-width: 850px) {
  .hero-card {
    grid-template-columns: 1fr;
    padding: 28px 24px;
  }
  
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .streetwear-portal {
    margin: 20px auto;
    padding: 0 14px;
  }

  .hero-card {
    gap: 24px;
    padding: 24px 18px;
    border-radius: 12px;
  }

  h1 {
    font-size: clamp(2rem, 11vw, 2.6rem);
  }

  p {
    font-size: 14px;
  }

  .action-buttons {
    gap: 10px;
  }

  .btn-main,
  .btn-sub {
    width: 100%;
    padding: 13px 16px;
  }

  .brand-badge {
    padding: 30px 16px;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }
  
  .action-buttons {
    flex-direction: column;
  }
}
</style>