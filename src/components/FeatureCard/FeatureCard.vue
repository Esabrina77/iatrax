<template>
    <div class="feature-card">
      <img :src="imageSrc" :alt="altText" />
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FeatureCard',
    props: {
      imageSrc: String,
      altText: String,
      title: String,
      description: String
    }
  }
  </script>
  
  <style scoped>
  /* Ajoutez des styles ici */
  </style>