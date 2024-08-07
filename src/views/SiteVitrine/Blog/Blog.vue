<template>
    <div class="container">
      <Header />
      <main class="product-page">
        <section class="hero">
          <div class="hero-image">
            <img src="/hero-image.jpg" alt="Hero image" />
          </div>
          <div class="hero-text">
            <h2>Découvrez les bénéfices de notre solution innovante</h2>
            <p>
              Conçue pour optimiser vos relevés de prix grâce à
              l'intelligence artificielle, offrant rapidité, précision et
              réduction significative des coûts opérationnels.
            </p>
          </div>
        </section>
        <section class="features">
          <div class="feature-card">
            <h3>Efficacité et Rapidité</h3>
            <ul>
              <li>Relevez 1200 prix à l'heure</li>
              <li>
                Augmentez la productivité en réduisant
                le temps passé sur les relevés de prix
              </li>
            </ul>
            <img src="/feature-image-1.jpg" alt="Feature image 1" />
          </div>
          <div class="feature-card">
            <h3>Précision et Fiabilité</h3>
            <ul>
              <li>Des relevés précis grâce à l'IA</li>
              <li>
                Données uniformes et fiables,
                réduisant les erreurs humaines
              </li>
            </ul>
            <img src="/feature-image-2.jpg" alt="Feature image 2" />
          </div>
          <div class="feature-card">
            <h3>Coût et Rentabilité</h3>
            <ul>
              <li>
                Application 20x moins chère que
                les méthodes traditionnelles
              </li>
              <li>Retour sur investissement ultra rapide</li>
            </ul>
            <img src="/feature-image-3.jpg" alt="Feature image 3" />
          </div>
          <div class="feature-card">
            <h3>Flexibilité et Accessibilité</h3>
            <ul>
              <li>Utilisation sur n'importe quel smartphone</li>
              <li>
                Facilité de déplacement dans le magasin
                concurrent
              </li>
            </ul>
            <img src="/feature-image-4.jpg" alt="Feature image 4" />
          </div>
          <div class="feature-card">
            <h3>Automatisation et Intégration</h3>
            <ul>
              <li>Traitement automatique des données</li>
              <li>
                Exportation facile vers Excel ou autre
              </li>
            </ul>
            <img src="/feature-image-5.jpg" alt="Feature image 5" />
          </div>
        </section>
        <section class="cta">
          <h2>Et bien d'autres avantages que vous pouvez découvrir en essayant notre service IA</h2>
          <button @click="showDownloadModal = true">
            Essayer gratuitement
          </button>
        </section>
        <div v-if="showDownloadModal" class="download-modal">
          <div class="modal-content">
            <img src="/qr-code.png" alt="QR code" />
            <p>
              Essayez gratuitement notre application et constatez par
              vous-même les gains de temps et de précision.
            </p>
            <button @click="showDownloadModal = false">
              Télécharger
            </button>
            <img src="/app-store-icon.png" alt="App store icon" />
            <img src="/google-play-icon.png" alt="Google play icon" />
            <p>On vous offre 50 relevés de prix immédiatement!</p>
          </div>
        </div>
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
  <style scoped>
  .container {
    font-family: "Arial", sans-serif;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
  
  .hero {
    display: flex;
    align-items: center;
    gap: 40px;
    padding: 80px 0;
  }
  
  .hero-image {
    width: 50%;
  }
  
  .hero-image img {
    width: 100%;
    height: auto;
  }
  
  .hero-text {
    width: 50%;
  }
  
  .hero-text h2 {
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  .hero-text p {
    font-size: 18px;
    line-height: 1.5;
  }
  
  .features {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 40px;
    padding: 80px 0;
  }
  
  .feature-card {
    width: calc(50% - 20px);
    padding: 30px;
    border: 1px solid #ddd;
    border-radius: 10px;
  }
  
  .feature-card h3 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  .feature-card ul {
    list-style: disc;
    margin-bottom: 20px;
  }
  
  .feature-card li {
    margin-left: 20px;
    font-size: 16px;
  }
  
  .feature-card img {
    width: 100%;
    height: auto;
  }
  
  .cta {
    text-align: center;
    padding: 80px 0;
  }
  
  .cta h2 {
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  .cta button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 15px 30px;
    border-radius: 5px;
    font-size: 18px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .cta button:hover {
    background-color: #0056b3;
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
    background-color: #fff;
    padding: 40px;
    border-radius: 10px;
    text-align: center;
  }
  
  .modal-content img {
    width: 200px;
    height: auto;
    margin-bottom: 20px;
  }
  
  .modal-content p {
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 20px;
  }
  
  .modal-content button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 15px 30px;
    border-radius: 5px;
    font-size: 18px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .modal-content button:hover {
    background-color: #0056b3;
  }
  
  .modal-content img {
    margin-bottom: 20px;
  }
  
  .modal-content img:nth-child(3) {
    width: 50px;
    margin: 0 10px;
  }
  </style>