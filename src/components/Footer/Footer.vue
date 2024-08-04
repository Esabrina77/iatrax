<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-left">
        <p>© 2021 Iatrax - Intelligence artificielle et computer vision</p>
        <p>2 Rue Marc Donadille 13013 MARSEILLE</p>
      </div>
      <div class="footer-right">
        <h3>Notre newsletter</h3>
        <form @submit.prevent="subscribe">
          <input type="email" v-model="email" placeholder="Entrez votre email" class="email-input" />
          <button type="submit" class="subscribe-button">S'inscrire</button>
        </form>
        <div class="footer-links">
          <a href="/product">Notre produit</a>
          <a href="/blog">Blog</a>
          <a href="/users">Nos utilisateurs</a>
          <a href="/pricing">Tarifs</a>
          <a href="/advantages">Avantages</a>
          <a href="/custom">Sur mesure</a>
        </div>
      </div>
    </div>
    <div class="image-logo">
      <img src="@/assets/logo/iatraxfooter.png" alt="Iatrax Logo" />
    </div>
   </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      email: ''
    }
  },
  methods: {
    subscribe() {
      // Logique pour s'inscrire à la newsletter
      alert(`Subscribed with email: ${this.email}`);
    }
  }
}
</script>

<style scoped>
.footer {
  background-color: #000;
  color: #fff;
  padding: 20px;
  display: flex;
  height: 500px;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
}

.footer-left {
  flex: 1;
}

.footer-left p {
  margin: 0;
}

.footer-right {
  flex: 1;
  text-align: right;
}

.footer-right h3 {
  margin: 0 0 10px;
}
.image-logo{
  width: 100vw
}
form {
  margin-bottom: 20px;
}

.email-input {
  padding: 10px;
  border: none;
  border-radius: 20px;
  width: 70%;
}

.subscribe-button {
  display: none;
}

.footer-links {
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  flex-wrap: wrap;
}

.footer-links a {
  color: #fff;
  text-decoration: none;
  font-weight: bold;
}

.footer-links a:hover {
  text-decoration: underline;
}
</style>