<template>
    <div class="banner">
      <img :src="imageSrc" :alt="altText" />
    </div>
  </template>
  
  <script>
  export default {
    name: 'Banner',
    props: {
      imageSrc: String,
      altText: String
    }
  }
  </script>
  
  <style scoped>
  .banner img {
    width: 100%;
    height: auto;
  }
  </style>