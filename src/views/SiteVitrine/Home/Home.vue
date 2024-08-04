<template>
  <div id="app">
    <Header />
    <main class="main">
      <section class="hero">
        <div class="hero-content">
          <h1>RELEVER LES PRIX DES <br> CONCURRENTS "IN STORE"</h1>
          <p>Une tâche chronophage et coûteuse.</p>
          <div class="hero-buttons">
            <button class="hero-button" @click="showDownloadModal = true">Télécharger</button>
            <div class="download-modal" v-if="showDownloadModal">
              <div class="modal-content">
                <h2>Téléchargez l'application</h2>
                <p>Et découvrez les avantages d'une solution IA pour votre relevé de prix.</p>
                <div class="download-buttons">
                  <a href="#" class="app-button">
                    <img src="" alt="Apple App Store">
                  </a>
                  <a href="#" class="app-button">
                    <img src="" alt="Google Play Store">
                  </a>
                </div>
                <button class="close-modal" @click="showDownloadModal = false">Fermer</button>
              </div>
            </div>
          </div>
        </div>
        <div class="hero-image">
          <img src="" alt="Supermarket Aisle">
        </div>
      </section>

      <section class="section">
        <div class="section-content">
          <div class="section-left">
            <h2>Le relevé des prix des magasins concurrents est une tâche laborieuse et longue, nécessitant de nombreuses heures de travail manuel.</h2>
            <p>Cette activité consomme non seulement du temps précieux, mais aussi des ressources importantes, impactant ainsi le budget global de votre magasin.</p>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="section-content">
          <div class="section-left">
            <img src="" alt="Piggy Bank">
          </div>
          <div class="section-right">
            <h2>Les méthodes traditionnelles de relevé de prix sont inefficaces et sujettes à des erreurs.</h2>
            <p>Les méthodes manuelles de relevé de prix sont non seulement lentes, mais aussi vulnérables aux erreurs humaines. Elles détournent vos employés de tâches plus stratégiques, réduisant leur productivité globale. Les relevés incorrects ou incomplets peuvent conduire à des décisions basées sur des données inexactes, compromettant ainsi la précision de vos stratégies tarifaires.</p>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="section-content">
          <div class="section-left">
            <h2>Découvrez notre application innovante boostée à l'IA qui permet de relever les prix 20x plus rapidement* et 20x moins cher*.</h2>
            <p>Grâce à notre technologie avancée, vous pouvez automatiser le processus de relevé de prix, améliorer la précision des données collectées et réduire significativement les coûts et le temps associés.</p>
          </div>
          <div class="section-right">
            <img src="" alt="Coins">
          </div>
        </div>
      </section>

      <section class="cta">
        <div class="cta-content">
          <h2>Essayez gratuitement notre application et constatez par vous-même les gains de temps et de précision.</h2>
          <div class="cta-buttons">
            <button class="cta-button" @click="showDownloadModal = true">Télécharger</button>
            <div class="download-modal" v-if="showDownloadModal">
              <div class="modal-content">
                <h2>Téléchargez l'application</h2>
                <p>Et découvrez les avantages d'une solution IA pour votre relevé de prix.</p>
                <div class="download-buttons">
                  <a href="#" class="app-button">
                    <img src="" alt="Apple App Store">
                  </a>
                  <a href="#" class="app-button">
                    <img src="" alt="Google Play Store">
                  </a>
                </div>
                <button class="close-modal" @click="showDownloadModal = false">Fermer</button>
              </div>
            </div>
          </div>
          <p>On vous offre 50 relevés de prix immédiatement.</p>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from  "@/components/Header/Header.vue";
import Footer from "@/components/Footer/Footer.vue";
export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      showDownloadModal: false,
    };
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}

.main {
  padding: 50px 0;
}

.hero {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 0;
}

.hero-content {
  flex: 1;
  padding: 0 50px;
}

.hero-image {
  flex: 1;
  display: flex;
  justify-content: center;
}

.hero-image img {
  width: 100%;
  max-width: 500px;
}

h1, h2 {
  font-weight: bold;
}

.hero-buttons {
  display: flex;
  gap: 20px;
  margin-top: 20px;
}

.hero-button {
  background-color: #007bff;
  color: #fff;
  padding: 15px 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.section {
  padding: 50px 0;
}

.section-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.section-left, .section-right {
  flex: 1;
  padding: 0 50px;
}

.section-left img, .section-right img {
  width: 100%;
  max-width: 500px;
}

.cta {
  background-color: #f8f9fa;
  padding: 50px 0;
}

.cta-content {
  text-align: center;
  padding: 0 50px;
}

.cta-buttons {
  display: flex;
  gap: 20px;
  margin-top: 20px;
}

.cta-button {
  background-color: #007bff;
  color: #fff;
  padding: 15px 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.download-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background-color: #fff;
  padding: 30px;
  border-radius: 5px;
  text-align: center;
}

.download-buttons {
  display: flex;
  gap: 20px;
  margin-top: 20px;
}

.app-button {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  text-decoration: none;
  color: #333;
}

.close-modal {
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
}
</style>