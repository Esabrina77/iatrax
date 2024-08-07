<template>
    <div id="app">
        <Header />
      <main>
        <section class="hero">
          <div class="container">
            <img src="https://i.ibb.co/2y511Yf/hero-image.jpg" alt="Hero Image" class="hero-image">
            <div class="hero-content">
              <h2>Découvrez les bénéfices de notre solution innovante,</h2>
              <p>conçue pour optimiser vos relevés de prix grâce à l'intelligence artificielle, offrant rapidité, précision et réduction significative des coûts opérationnels.</p>
            </div>
          </div>
        </section>
  
        <section class="features">
          <div class="container">
            <div class="feature">
              <img src="https://i.ibb.co/C4nG15j/feature-1-image.jpg" alt="Feature 1 Image">
              <h3>Efficacité et Rapidité</h3>
              <ul>
                <li>Relevez 1200 prix à l'heure</li>
                <li>Augmentez la productivité en réduisant le temps passé sur les relevés de prix</li>
              </ul>
            </div>
  
            <div class="feature">
              <img src="https://i.ibb.co/J5H13vQ/feature-2-image.jpg" alt="Feature 2 Image">
              <h3>Précision et Fiabilité</h3>
              <ul>
                <li>Des relevés précis grâce à l'IA</li>
                <li>Données uniformes et fiables, réduisant les erreurs humaines</li>
              </ul>
            </div>
  
            <div class="feature">
              <img src="https://i.ibb.co/87qN4pL/feature-3-image.jpg" alt="Feature 3 Image">
              <h3>Coût et Rentabilité</h3>
              <ul>
                <li>Application 20x moins chère que les méthodes traditionnelles</li>
                <li>Retour sur investissement ultra rapide</li>
              </ul>
            </div>
          </div>
        </section>
  
        <section class="features">
          <div class="container">
            <div class="feature">
              <img src="https://i.ibb.co/H2Y2yD8/feature-4-image.jpg" alt="Feature 4 Image">
              <h3>Flexibilité et Accessibilité</h3>
              <ul>
                <li>Utilisation sur n'importe quel smartphone</li>
                <li>Facilité de déplacement dans le magasin concurrent</li>
              </ul>
            </div>
  
            <div class="feature">
              <img src="https://i.ibb.co/12F8q4M/feature-5-image.jpg" alt="Feature 5 Image">
              <h3>Automatisation et Intégration</h3>
              <ul>
                <li>Traitement automatique des données</li>
                <li>Exportation facile vers Excel ou autre</li>
              </ul>
            </div>
          </div>
        </section>
  
        <section class="cta">
          <div class="container">
            <h2>Et bien d'autres avantages que vous pouvez découvrir en essayant notre service IA</h2>
            <div class="cta-content">
              <img src="https://i.ibb.co/gX2B64S/qr-code-placeholder.png" alt="QR Code" class="qr-code">
              <p>Essayez gratuitement notre application et constatez par vous-même les gains de temps et de précision</p>
              <button>Télécharger</button>
              <div class="app-stores">
                <img src="https://i.ibb.co/0F84YqC/app-store-icon.png" alt="App Store">
                <img src="https://i.ibb.co/Xj7vT5n/play-store-icon.png" alt="Play Store">
              </div>
              <p>On vous offre 50 relevés de prix immédiatement</p>
            </div>
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
    name: 'Avantages',
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
  #app {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
    color: #333;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }
  
  .hero {
    background-color: #fff;
    padding: 4rem 0;
  }
  
  .hero-image {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    display: block;
  }
  
  .hero-content {
    text-align: center;
    margin-top: 2rem;
  }
  
  .hero-content h2 {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  
  .hero-content p {
    font-size: 1.2rem;
    line-height: 1.6;
  }
  
  .features {
    padding: 4rem 0;
  }
  
  .feature {
    background-color: #fff;
    padding: 2rem;
    margin-bottom: 2rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    text-align: left;
  }
  
  .feature img {
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
    display: block;
    margin-bottom: 1rem;
  }
  
  .feature h3 {
    font-size: 1.8rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  
  .feature ul {
    list-style: disc;
    padding-left: 2rem;
  }
  
  .feature li {
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 0.5rem;
  }
  
  .cta {
    padding: 4rem 0;
    text-align: center;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
  }
  
  .cta h2 {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 2rem;
  }
  
  .cta-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .qr-code {
    width: 150px;
    height: 150px;
    margin-bottom: 2rem;
  }
  
  .cta button {
    background-color: #007bff;
    color: #fff;
    padding: 1rem 2rem;
    border: none;
    border-radius: 4px;
    font-size: 1.2rem;
    cursor: pointer;
    margin-bottom: 1rem;
  }
  
  .app-stores {
    display: flex;
    gap: 1rem;
  }
  
  .app-stores img {
    width: 120px;
  }
  
  /* Responsive Styling */
  
  @media screen and (max-width: 768px) {
    .hero-image {
      max-width: 100%;
    }
  
    .feature {
      margin-bottom: 1rem;
    }
  
    .features .feature {
      display: block;
    }
  
    .app-stores img {
      width: 80px;
    }
  }
  </style>