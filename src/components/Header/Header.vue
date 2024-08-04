<template>
    <header class="header">
<nav class="nav">
  <ul class="nav-list">
    <li class="nav-item"><a href="/">Accueil</a></li>
    <li class="nav-item"><a href="/product">Produit</a></li>
    <li class="nav-item"><a href="/advantages">Avantages</a></li>
    <li class="nav-item"><a href="/users">Utilisateurs</a></li>
    <li class="nav-item"><a href="/pricing">Tarifs</a></li>
    <li class="nav-item"><a href="/blog">Blog</a></li>
    <li class="nav-item"><a href="/custom">Sur mesure</a></li>
  </ul>
  <div class="nav-icons">
    <img src="@/assets/logo/VectoruserIcon.png" alt="User Icon" class="icon">
    <div class="language-selector">
      fr <span class="arrow">▼</span>
    </div>
  </div>
</nav>
</header>

</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>

.header {
  position: fixed;
  display: flex;
  width: 740px;
  height: 60px;
  padding-left: 20px;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  background-color: #d9d9d9ab; /* couleur gris clair */
  border-radius:  30px;
  font-size: 12px;
  overflow: hidden;
}

.nav {
  display: flex;
  width: 90%;
  justify-content: space-around;
  align-items: center;
}

.nav-list {
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
}

.nav-item a {
  text-decoration: none;
  color: black; /* couleur du texte */
  font-weight: bold;
}

.nav-icons {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70px;
}

.icon {
  width: 20px; /* ajustez la taille de l'icône si nécessaire */
  height: 20px;
}

.language-selector {
  display: flex;
  align-items: center;
  gap: 5px;
}

.arrow {
  font-size: 12px;
}
</style>