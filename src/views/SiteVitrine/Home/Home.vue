<template>
  <div id="app">
    <Header />
    <main class="main">
      <section class="hero">
        <div class="bg-image">
          <img src="../../../assets/images/kyle-wagner-7dpHzyA7rb8-unsplash 1.png" alt="Supermarket Aisle">
        </div>
        <div class="overlay"></div>
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
      </section>

      <section class="section section1">
        <div class="section-content">

          <div class="section-right">
            <h2>Le relevé des prix des magasins concurrents est une tâche laborieuse et longue, nécessitant de
              nombreuses heures
              de travail manuel. Cette activité consomme non seulement
              du temps précieux, mais aussi des ressources importantes, impactant ainsi le budget global de votre
              magasin. </h2>
          </div>
        </div>
      </section>

      <section class="section section2">
        <div class="section-content ">
          <div class="section-left">
            <img src="../../../assets/images/kyryl-levenets-ZKuKJ27UhYM-unsplash 2calcul.png" alt="Calculatrice">
          </div>
          <div class="section-right  color-red">
            <h2>Les méthodes traditionnelles de relevé de prix sont inefficaces et sujettes à des erreurs.</h2>
            <p>Les méthodes manuelles de relevé de prix sont non seulement lentes, mais aussi vulnérables aux erreurs
              humaines. Elles détournent vos employés de tâches plus stratégiques, réduisant leur productivité globale.
              Les relevés incorrects ou incomplets peuvent conduire à des décisions basées sur des données inexactes,
              compromettant ainsi la précision de vos stratégies tarifaires.</p>
          </div>

        </div>
      </section>

      <section class="section section3">
        <div class="section-content">
          <div class="section-left  color-black">
            <h2>Découvrez notre application innovante boostée à l'IA qui permet de relever les prix 20x plus rapidement*
              et 20x moins cher*.</h2>
            <p>Grâce à notre technologie avancée, vous pouvez automatiser le processus de relevé de prix, améliorer la
              précision des données collectées et réduire significativement les coûts et le temps associés.</p>
          </div>
          <div class="section-right">
            <img src="../../../assets/images/kyryl-levenets-ZKuKJ27UhYM-unsplash 2calcul.png" alt="Coins">
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
import Header from "@/components/Header/Header.vue";
import Footer from "@/components/Footer/Footer.vue";
export default {
  name: 'Home',
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

<style lang="scss" scoped>
@import "./Home.scss";
</style>