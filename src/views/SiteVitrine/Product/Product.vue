<template>
  <div>
    <Header />
    <main class="main">
      <section class="hero">
          <img src="@/assets/images/kyle-wagner-7dpHzyA7rb8-unsplash 1magasin.png" alt="Hero Image">
        <div class="hero-content">
          <h2>Découvrez notre application innovante, conçue pour révolutionner le relevé des prix en magasin.</h2>
          <h3>Grâce à l'intelligence artificielle, relevez jusqu'à 1200 prix à l'heure, soit 20 fois plus rapidement que les méthodes traditionnelles.</h3>
        </div>
      </section>
      <section class="features">
        <div class="features-container">
          <h2>Notre application innovante repose sur trois intelligences artificielles distinctes</h2>
          <div class="features-grid">
            <div class="feature">
              <h3>1</h3>
              <h4>IA de Détection d'Objets</h4>
            </div>
            <div class="feature">
              <h3>2</h3>
              <h4>IA de Compréhension</h4>
             </div>
            <div class="feature">
              <h3>3</h3>
              <h4>IA de Lecture de Caractères (OCR)</h4>
             </div>
          </div>
        </div>
        </section>

      <section class="features section3">
        <p>Notre application automatise entièrement le processus: filmez les étiquettes avec votre smartphone, et l'IA reconnaît et enregistre automatiquement les prix, les codes EAN, éliminant ainsi les erreurs humaines. Les données peuvent ensuite être facilement exportées vers Excel (ou autre) pour une analyse rapide et efficace.</p>
          <div class="features-grid">
            <div class="feature">
              <h3>1</h3>
              <p>créez votre compte utilisateur</p>
            </div>
            <div class="feature">
              <h3>2</h3>
              <p>téléchargez et installez l'application sur votre smartphone</p>
            </div>
            <div class="feature">
              <h3>3</h3>
              <p>filmez les étiquettes des produits en magasins concurrents</p>
            </div>
            <div class="feature">
              <h3>4</h3>
              <p>I'IA reconnaît et enregistre automatiquement les prix et les codes EAN</p>
            </div>
            <div class="feature">
              <h3>5</h3>
              <p>exportez les données vers Excel pour une analyse approfondie</p>
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
  name: 'Product',
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
  @import "./Product.scss";
  </style>