<template>
  <div class="auth-page">
    <div class="image-container">
      <img src="../../assets/images/kyryl-levenets-ZKuKJ27UhYM-unsplash 1.png" alt="Background image" class="auth-background">
      <div class="overlay"></div>
    </div>
    <div class="auth-form">
      <div class="logo-ia">
        <img src="../../assets/logo/iatrax.png" alt="Logo">
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthLayout'
}
</script>

<style lang="scss" scoped>
.auth-page {
  position: relative;
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

.image-container {
  position: relative;
  width: 40%;
  height: 100%;


}

.auth-background {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

// .overlay {
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(0, 0, 0, 0.5); /* Filtre noir transparent */
// }

.auth-form {
  width: 60%;
  height: 100%;
  padding: 2rem 10rem;
  margin-bottom: 50px!important;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo-ia {
  width: 150px;
  margin-bottom: 1.5rem;
  position: absolute;
  top: 25px;
  img {
    width: 100%;
    height: auto;
  }
}
</style>