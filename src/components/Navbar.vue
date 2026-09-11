<template>
  <nav>
    <div class="brand">
      <img src="@/assests/logo.png" alt="logo" class="Logo" />
      <div class="brand-text">
        <span class="brand-name">Apex Global Academy</span>
        <span class="brand-tagLine">Knowledge Without Limits.</span>
      </div>
    </div>

    <div class="nav-right">
      <ul>
        <li><router-link to="/"active-class="active">Home</router-link></li>
        <li><router-link to="/about_us"active-class="active">About</router-link></li>
        <li><router-link to="/admissions"active-class="active">Admissions</router-link></li>
        <li><router-link to="/academics"active-class="active">Academics</router-link></li>
        <li><router-link to="/contact_us"active-class="active">Campus life</router-link></li>
        <li><router-link to="/contact_us"active-class="active">News</router-link></li>
        <li><router-link to="/contact_us"active-class="active">Contact</router-link></li>
        <li><router-link to="/sample-data" active-class="active">Sample Data</router-link></li>
        <li><router-link to="/sample-vmodel" active-class="active">Sample V-model</router-link></li>
        <li><router-link to="/sample-methods" active-class="active">Sample Methods</router-link></li>
      </ul>

      <div class="portal-btn">
        <button type="button">Portal Login</button>
      </div>
    </div>


  </nav>
</template>

<style scoped>
nav {
  font-family: 'Times New Roman', serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 50px;
  background-color: #1d1c1c;
  flex-wrap: wrap;
  gap: 1rem;
}

.brand {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.Logo {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
}

.brand-text {
  display: flex;
  flex-direction: column;
}

.brand-name {
  font-size: 1.2rem;
  font-weight: 700;
  color: #ec2020;
}

.brand-tagLine {
  font-size: 1rem;
  color: #ffffff;
  letter-spacing: 1px;
}

nav ul {
  list-style: none;
  display: flex;
  gap: 26px;
  margin: 0;
  padding: 0;
}

  .nav-right {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.portal-btn button {
  background-color: #ec2020;
  color: #ffffff;
  border: none;
  padding: .6rem 1.4rem;
  border-radius: 8px;
  font-weight: 700;
}

nav a {
  text-decoration: none;
  color: #e6e5eb;
  font-weight: 600;
  transition: color .2s;
}

nav a.active {
  color: #ec3030;
  font-weight: 700;
}

nav a:hover {
  color: #ec3030;

}

nav a.active::after {
  content: '';
  display: block;
  width: 100%;
  height: 2px;
  background-color: #ec3030;
}


</style>