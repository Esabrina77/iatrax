<template>
    <form @submit.prevent="submitForm">
      <label for="email">Entrez votre email</label>
      <input type="email" id="email" v-model="email" required />
      <button type="submit">S'inscrire</button>
    </form>
  </template>
  
  <script>
  export default {
    name: 'NewsletterForm',
    data() {
      return {
        email: ''
      };
    },
    methods: {
      submitForm() {
        // Logique de soumission du formulaire
        console.log('Email soumis:', this.email);
      }
    }
  }
  </script>
  
  <style scoped>
  /* Ajoutez des styles ici */
  </style>