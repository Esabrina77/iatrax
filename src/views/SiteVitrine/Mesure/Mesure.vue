<template>
    <div class="container">
      <Header />
      <main>
        <section class="hero">
          <div class="hero-image">
            <img src="https://i.imgur.com/n2k162G.jpg" alt="Hero image" />
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
  
        <section class="benefits">
          <h2 class="section-title">Les avantages</h2>
          <div class="benefit-container">
            <div class="benefit">
              <img src="https://i.imgur.com/gB8Q3tR.jpg" alt="Benefit image" />
              <h3>Efficacité et rapidité</h3>
              <ul>
                <li>Relevez 1200 prix à l'heure</li>
                <li>
                  Augmentez la productivité en réduisant le temps passé sur les
                  relevés de prix.
                </li>
              </ul>
            </div>
            <div class="benefit">
              <img src="https://i.imgur.com/L3g0lV1.jpg" alt="Benefit image" />
              <h3>Précision et fiabilité</h3>
              <ul>
                <li>Des relevés précis grâce à l'IA</li>
                <li>
                  Données uniformes et fiables, réduisant les erreurs humaines
                </li>
              </ul>
            </div>
            <div class="benefit">
              <img src="https://i.imgur.com/h69d0Y3.jpg" alt="Benefit image" />
              <h3>Coût et rentabilité</h3>
              <ul>
                <li>
                  Application 20x moins chère que les méthodes
                  traditionnelles
                </li>
                <li>Retour sur investissement ultra rapide</li>
              </ul>
            </div>
            <div class="benefit">
              <img src="https://i.imgur.com/Y02jXvD.jpg" alt="Benefit image" />
              <h3>Flexibilité et accessibilité</h3>
              <ul>
                <li>Utilisation sur n'importe quel smartphone</li>
                <li>Facilité de déplacement dans le magasin concurrent</li>
              </ul>
            </div>
            <div class="benefit">
              <img src="https://i.imgur.com/y3c3Y9X.jpg" alt="Benefit image" />
              <h3>Automatisation et intégration</h3>
              <ul>
                <li>Traitement automatique des données</li>
                <li>Exportation facile vers Excel ou autre</li>
              </ul>
            </div>
          </div>
        </section>
  
        <section class="call-to-action">
          <h2>
            Et bien d'autres avantages que vous pouvez découvrir en
            essayant notre service IA
          </h2>
          <div class="download-button">
            <button @click="showDownloadModal = true">Télécharger</button>
          </div>
          <div class="app-icons">
            <img src="https://i.imgur.com/mQ71B1L.png" alt="App Store icon" />
            <img src="https://i.imgur.com/2n1q5pO.png" alt="Google Play icon" />
          </div>
          <p>On vous offre 50 relevés de prix immédiatement !</p>
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
  
  <style scoped>
  .container {
    font-family: sans-serif;
    background-color: #f5f5f5;
    color: #333;
  }
  
  .hero {
    display: flex;
    align-items: center;
    padding: 50px;
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
  
  .hero-text {
    flex: 1;
    padding-left: 50px;
  }
  
  .hero-text h2 {
    font-size: 3em;
    margin-bottom: 20px;
  }
  
  .hero-text p {
    font-size: 1.2em;
    line-height: 1.5;
  }
  
  .benefits {
    padding: 50px;
  }
  
  .section-title {
    text-align: center;
    margin-bottom: 40px;
  }
  
  .benefit-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .benefit {
    margin: 20px;
    width: 300px;
    text-align: center;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .benefit img {
    width: 100%;
    max-width: 200px;
    margin-bottom: 20px;
  }
  
  .benefit h3 {
    font-size: 1.5em;
    margin-bottom: 10px;
  }
  
  .benefit ul {
    list-style-type: disc;
    margin-top: 0;
    padding-left: 20px;
  }
  
  .call-to-action {
    padding: 50px;
    background-color: #eee;
    text-align: center;
  }
  
  .call-to-action h2 {
    margin-bottom: 20px;
  }
  
  .download-button {
    margin-bottom: 20px;
  }
  
  .download-button button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 10px 20px;
    font-size: 1.2em;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .app-icons {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  
  .app-icons img {
    margin: 0 10px;
  }
  
  .call-to-action p {
    font-size: 1em;
    line-height: 1.5;
  }
  
  /* Responsiveness */
  @media (max-width: 768px) {
    .hero {
      flex-direction: column;
    }
  
    .hero-text {
      padding-left: 0;
      margin-top: 20px;
    }
  
    .benefit-container {
      flex-direction: column;
    }
  
    .benefit {
      margin-bottom: 20px;
    }
  }
  </style>