<template>
    <div class="container">
      <Header />
      <main>
        <div class="hero">
          <div class="hero-image">
            <img src="/hero-image.jpg" alt="Shopping Cart" />
          </div>
          <div class="hero-text">
            <h2>Découvrez les bénéfices de notre solution innovante, conçue pour optimiser vos relevés de prix grâce à l'intelligence artificielle, offrant rapidité, précision et réduction significative des coûts opérationnels.</h2>
            <button class="button">Essayer gratuitement</button>
          </div>
        </div>
  
        <section class="features">
          <h2>Découvrez les avantages</h2>
          <div class="feature-grid">
            <div class="feature-card">
              <img src="/feature-image-1.jpg" alt="Best Price" />
              <h3>Efficacité et Rapidité</h3>
              <ul>
                <li>Relevez 1200 prix à l'heure</li>
                <li>Augmentez la productivité en réduisant le temps passé sur les relevés de prix</li>
              </ul>
            </div>
            <div class="feature-card">
              <img src="/feature-image-2.jpg" alt="Data Analysis" />
              <h3>Précision et Fiabilité</h3>
              <ul>
                <li>Des relevés précis grâce à l'IΑ</li>
                <li>Données uniformes et fiables, réduisant les erreurs humaines</li>
              </ul>
            </div>
            <div class="feature-card">
              <img src="/feature-image-3.jpg" alt="ROI" />
              <h3>Coût et Rentabilité</h3>
              <ul>
                <li>Application 20x moins chère que les méthodes traditionnelles</li>
                <li>Retour sur investissement ultra rapide</li>
              </ul>
            </div>
            <div class="feature-card">
              <img src="/feature-image-4.jpg" alt="Smartphone" />
              <h3>Flexibilité et Accessibilité</h3>
              <ul>
                <li>Utilisation sur n'importe quel smartphone</li>
                <li>Facilité de déplacement dans le magasin concurrent</li>
              </ul>
            </div>
            <div class="feature-card">
              <img src="/feature-image-5.jpg" alt="Phone & Android" />
              <h3>Automatisation et Intégration</h3>
              <ul>
                <li>Traitement automatique des données</li>
                <li>Exportation facile vers Excel ou autre</li>
              </ul>
            </div>
          </div>
        </section>
  
        <section class="call-to-action">
          <h2>Et bien d'autres avantages que vous pouvez découvrir en essayant notre service IA</h2>
          <button class="button" @click="showDownloadModal = true">Essayer gratuitement</button>
        </section>
      </main>
      <Footer />
  
      <div v-if="showDownloadModal" class="download-modal">
        <div class="modal-content">
          <h3>Téléchargez l'application</h3>
          <img src="/qr-code.png" alt="QR Code" />
          <p>Essayez gratuitement notre application et constatez par vous-même les gains de temps et de précision</p>
          <div class="download-buttons">
            <button class="button">Télécharger sur iOS</button>
            <button class="button">Télécharger sur Android</button>
          </div>
          <p>On vous offre 50 relevés de prix immédiatement!</p>
          <button class="button" @click="showDownloadModal = false">Fermer</button>
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
  <style>
  .container {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    color: #333;
    text-align: center;
  }
  
  .hero {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px 0;
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
    padding: 20px;
  }
  
  .hero-text h2 {
    font-size: 2.5em;
    margin-bottom: 20px;
  }
  
  .button {
    background-color: #007bff;
    color: white;
    padding: 15px 30px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .features {
    padding: 50px 0;
  }
  
  .features h2 {
    font-size: 2em;
    margin-bottom: 30px;
  }
  
  .feature-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
  }
  
  .feature-card {
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  .feature-card img {
    width: 100%;
    height: auto;
    margin-bottom: 20px;
  }
  
  .feature-card ul {
    list-style: disc;
    margin-left: 20px;
  }
  
  .call-to-action {
    padding: 50px 0;
    background-color: #e9ecef;
  }
  
  .download-modal {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .modal-content {
    background-color: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    text-align: center;
  }
  
  .download-buttons {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 20px;
  }
</style>