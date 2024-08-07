<template>
    <div class="product-page">
      <Header />
      <main class="main-content">
        <div class="banner">
          <img src="/images/banner.jpg" alt="Banner image" />
          <div class="banner-text">
            <h1>Découvrez les bénéfices de notre solution innovante</h1>
            <p>
              Conçue pour optimiser vos relevés de prix grâce à l'intelligence
              artificielle, offrant rapidité, précision et réduction
              significative des coûts opérationnels.
            </p>
          </div>
        </div>
  
        <section class="features">
          <div class="feature-section">
            <h2>Efficacité et Rapidité</h2>
            <ul>
              <li>Relevez 1200 prix à l'heure</li>
              <li>
                Augmentez la productivité en réduisant le temps passé sur les
                relevés de prix
              </li>
            </ul>
            <img src="/images/feature-1.jpg" alt="Feature image" />
          </div>
  
          <div class="feature-section">
            <h2>Précision et Fiabilité</h2>
            <ul>
              <li>Des relevés précis grâce à l'IA</li>
              <li>
                Données uniformes et fiables, réduisant les erreurs humaines
              </li>
            </ul>
            <img src="/images/feature-2.jpg" alt="Feature image" />
          </div>
  
          <div class="feature-section">
            <h2>Coût et Rentabilité</h2>
            <ul>
              <li>
                Application 20x moins chère que les méthodes traditionnelles
              </li>
              <li>Retour sur investissement ultra rapide</li>
            </ul>
            <img src="/images/feature-3.jpg" alt="Feature image" />
          </div>
  
          <div class="feature-section">
            <h2>Flexibilité et Accessibilité</h2>
            <ul>
              <li>Utilisation sur n'importe quel smartphone</li>
              <li>
                Facilité de déplacement dans le magasin concurrent
              </li>
            </ul>
            <div class="phone-mockup">
              <img src="/images/iphone.png" alt="iPhone mockup" />
              <img src="/images/android.png" alt="Android mockup" />
            </div>
          </div>
  
          <div class="feature-section">
            <h2>Automatisation et Intégration</h2>
            <ul>
              <li>Traitement automatique des données</li>
              <li>Exportation facile vers Excel ou autre</li>
            </ul>
            <img src="/images/feature-4.jpg" alt="Feature image" />
          </div>
        </section>
  
        <section class="call-to-action">
          <h2>
            Et bien d'autres avantages que vous pouvez découvrir en essayant
            notre service IA
          </h2>
          <button @click="showDownloadModal = true">
            Télécharger
          </button>
        </section>
      </main>
      <Footer />
  
      <div
        v-if="showDownloadModal"
        class="download-modal"
        @click="showDownloadModal = false"
      >
        <div class="modal-content" @click.stop>
          <h2>Téléchargez l'application</h2>
          <p>
            Essayez gratuitement notre application et constatez par
            vous-même les gains de temps et de précision.
          </p>
          <div class="download-buttons">
            <a href="#" target="_blank">
              <img src="/images/app-store.png" alt="App Store button" />
            </a>
            <a href="#" target="_blank">
              <img src="/images/google-play.png" alt="Google Play button" />
            </a>
          </div>
          <p>On vous offre 50 relevés de prix immédiatement</p>
          <button @click="showDownloadModal = false">Fermer</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Header from "@/components/Header/Header.vue";
  import Footer from "@/components/Footer/Footer.vue";
  export default {
    name: "Product",
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
  
  <style scoped>
  .product-page {
    font-family: sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  .main-content {
    padding: 20px;
  }
  
  .banner {
    position: relative;
    margin-bottom: 20px;
  }
  
  .banner img {
    width: 100%;
  }
  
  .banner-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: white;
  }
  
  .banner-text h1 {
    margin-bottom: 10px;
  }
  
  .features {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  
  .feature-section {
    width: 48%;
    margin-bottom: 20px;
  }
  
  .feature-section h2 {
    margin-bottom: 10px;
  }
  
  .feature-section ul {
    list-style: disc;
    padding-left: 20px;
    margin-bottom: 10px;
  }
  
  .feature-section img {
    width: 100%;
  }
  
  .phone-mockup {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  
  .phone-mockup img {
    width: 150px;
    margin: 0 10px;
  }
  
  .call-to-action {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .call-to-action button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
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
  }
  
  .modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
  }
  
  .download-buttons {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  
  .download-buttons img {
    width: 100px;
    margin: 0 10px;
  }
  
  .download-modal button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
    display: block;
    width: fit-content;
  }
  </style>