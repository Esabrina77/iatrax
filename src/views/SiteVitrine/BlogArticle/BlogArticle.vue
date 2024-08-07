<template>
    <div class="product-page">
      <Header />
      <main class="main-content">
        <div class="container">
          <div class="hero">
            <img
              src="https://res.cloudinary.com/dql94b74e/image/upload/v1690654522/IA%20TRAX/hero_image_v1_l2e70o.png"
              alt="Hero image"
              class="hero-image"
            />
            <div class="hero-text">
              <h2>Découvrez les bénéfices de notre solution innovante,</h2>
              <p>
                conçue pour optimiser vos relevés de prix grâce à
                l'intelligence artificielle, offrant rapidité, précision et
                réduction significative des coûts opérationnels
              </p>
            </div>
          </div>
  
          <section class="benefits">
            <h2>Avantages clés</h2>
            <div class="benefit-grid">
              <div class="benefit">
                <h3>Efficacité et Rapidité</h3>
                <ul>
                  <li>Relevez 1200 prix à l'heure</li>
                  <li>
                    Augmentez la productivité en réduisant
                    le temps passé sur les relevés de prix
                  </li>
                </ul>
                <img
                  src="https://res.cloudinary.com/dql94b74e/image/upload/v1690654522/IA%20TRAX/benefit_1_s02b1k.png"
                  alt="Efficacité et Rapidité"
                  class="benefit-image"
                />
              </div>
              <div class="benefit">
                <h3>Précision et Fiabilité</h3>
                <ul>
                  <li>Des relevés précis grâce à l'IA</li>
                  <li>
                    Données uniformes et fiables,
                    réduisant les erreurs humaines
                  </li>
                </ul>
                <img
                  src="https://res.cloudinary.com/dql94b74e/image/upload/v1690654522/IA%20TRAX/benefit_2_b8433w.png"
                  alt="Précision et Fiabilité"
                  class="benefit-image"
                />
              </div>
              <div class="benefit">
                <h3>Coût et Rentabilité</h3>
                <ul>
                  <li>
                    Application 20x moins chère que
                    les méthodes traditionnelles
                  </li>
                  <li>Retour sur investissement ultra rapide</li>
                </ul>
                <img
                  src="https://res.cloudinary.com/dql94b74e/image/upload/v1690654522/IA%20TRAX/benefit_3_x3v7m7.png"
                  alt="Coût et Rentabilité"
                  class="benefit-image"
                />
              </div>
              <div class="benefit">
                <h3>Flexibilité et Accessibilité</h3>
                <ul>
                  <li>Utilisation sur n'importe quel smartphone</li>
                  <li>
                    Facilité de déplacement dans le magasin
                    concurrent
                  </li>
                </ul>
                <img
                  src="https://res.cloudinary.com/dql94b74e/image/upload/v1690654522/IA%20TRAX/benefit_4_e9v520.png"
                  alt="Flexibilité et Accessibilité"
                  class="benefit-image"
                />
              </div>
              <div class="benefit">
                <h3>Automatisation et Intégration</h3>
                <ul>
                  <li>Traitement automatique des données</li>
                  <li>
                    Exportation facile vers Excel ou autre
                  </li>
                </ul>
                <img
                  src="https://res.cloudinary.com/dql94b74e/image/upload/v1690654522/IA%20TRAX/benefit_5_z1f03u.png"
                  alt="Automatisation et Intégration"
                  class="benefit-image"
                />
              </div>
            </div>
          </section>
  
          <section class="call-to-action">
            <div class="cta-text">
              <h2>
                Et bien d'autres avantages que vous pouvez
                découvrir en essayant notre service IA
              </h2>
            </div>
            <div class="cta-buttons">
              <button @click="showDownloadModal = true" class="download-btn">
                Télécharger
              </button>
              <div class="app-store-icons">
                <img
                  src="https://res.cloudinary.com/dql94b74e/image/upload/v1690654522/IA%20TRAX/app-store-icon_d362l1.png"
                  alt="App Store Icon"
                />
                <img
                  src="https://res.cloudinary.com/dql94b74e/image/upload/v1690654522/IA%20TRAX/google-play-icon_x5r6n3.png"
                  alt="Google Play Icon"
                />
              </div>
              <p>On vous offre 50 relevés de prix immédiatement.</p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
      <div
        v-if="showDownloadModal"
        class="download-modal"
        @click="showDownloadModal = false"
      >
        <div class="modal-content" @click.stop>
          <img
            src="https://res.cloudinary.com/dql94b74e/image/upload/v1690654522/IA%20TRAX/qr-code_mzw3f5.png"
            alt="QR Code"
            class="qr-code"
          />
          <p>
            Scannez le code QR avec votre smartphone pour télécharger
            l'application.
          </p>
          <button
            @click="showDownloadModal = false"
            class="close-modal-btn"
          >
            Fermer
          </button>
        </div>
      </div>
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
  <style scoped>
  .product-page {
    font-family: 'Arial', sans-serif;
    color: #333;
    background-color: #f5f5f5;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }
  
  .hero {
    display: flex;
    align-items: center;
    margin-bottom: 3rem;
  }
  
  .hero-image {
    width: 50%;
    margin-right: 2rem;
  }
  
  .hero-text {
    width: 50%;
  }
  
  .hero-text h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  
  .hero-text p {
    font-size: 1.2rem;
    line-height: 1.6;
  }
  
  .benefits {
    margin-bottom: 3rem;
  }
  
  .benefit-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }
  
  .benefit {
    padding: 2rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #fff;
  }
  
  .benefit h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  .benefit ul {
    list-style: disc;
    padding-left: 2rem;
  }
  
  .benefit-image {
    max-width: 100%;
    margin-top: 2rem;
  }
  
  .call-to-action {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 3rem;
  }
  
  .cta-text {
    width: 50%;
  }
  
  .cta-buttons {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .download-btn {
    background-color: #007bff;
    color: #fff;
    padding: 1rem 2rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
  }
  
  .app-store-icons {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
  }
  
  .app-store-icons img {
    width: 50px;
  }
  
  .download-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
  }
  
  .modal-content {
    background-color: #fff;
    padding: 2rem;
    border-radius: 8px;
    text-align: center;
  }
  
  .qr-code {
    max-width: 200px;
    margin-bottom: 1rem;
  }
  
  .close-modal-btn {
    background-color: #dc3545;
    color: #fff;
    padding: 0.8rem 1.5rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
  }
  </style>