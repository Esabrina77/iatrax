<template>
    <div class="cta-section">
      <p>{{ text }}</p>
      <button @click="onClick">{{ buttonText }}</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CTASection',
    props: {
      text: String,
      buttonText: String
    },
    methods: {
      onClick() {
        // Action à effectuer lors du clic
      }
    }
  }
  </script>
  
  <style scoped>
  /* Ajoutez des styles ici */
  </style>