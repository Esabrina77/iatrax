<template>
  <AuthLayout>
    <h2 class="title_page">S'inscrire à iatrax</h2>
    <div class="google-btn">
      <img src="../../../assets/logo/GroupGoogle.png" alt="Google icon" />
      <FormButton label="S'inscrire avec Google" />
    </div>
    <div class="form-signup">
      <FormInput label="Nom" id="lastName" v-model="lastName" class="input-fixed-width" />
      <FormInput label="Prénom" id="firstName" v-model="firstName" class="input-fixed-width" />
      <FormInput label="Email" id="email" type="email" v-model="email" class="input-fixed-width" />
      <FormInput label="Mot de passe" id="password" type="password" v-model="password" class="input-fixed-width" />
      <FormInput label="Confirmer mot de passe" id="confirmPassword" type="password" v-model="confirmPassword" class="input-fixed-width" />
      <FormInput label="Nom de l'entreprise" id="companyName" v-model="companyName" class="input-fixed-width" />
      <FormInput label="Numéro de téléphone" id="phoneNumber" v-model="phoneNumber" class="input-fixed-width" />
    </div>
    <FormButton class="submit-btn" label="S'inscrire" @click="signup" />
    <router-link class="link-redirect" to="/login">Vous avez un compte ? Se connecter</router-link>
  </AuthLayout>
</template>

<script>
import AuthLayout from '@/components/Layout/AuthLayout.vue'
import FormInput from '@/components/FormInput/FormInput.vue'
import FormButton from '@/components/FormButton/FormButton.vue'

export default {
  name: "Signup",
  components: {
    FormInput,
    FormButton,
    AuthLayout,
  },
  data() {
    return {
      lastName: "",
      firstName: "",
      email: "",
      password: "",
      confirmPassword: "",
      companyName: "",
      phoneNumber: ""
    };
  },
  methods: {
    signup() {
      // Handle signup
    }
  }
};
</script>

<style lang="scss" scoped>
  .title_page {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 2rem;
    width: 100%;
    text-align: start;
    
  }
  .google-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  margin-bottom: 1.5rem;

  img {
    position: absolute;
    z-index: -1;
    left: 30%;
    margin-right: 0.5rem;
  }
}

.form-signup {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.form-signup .form-group {
  width: calc(50% - 0.5rem);
}

.input-fixed-width {
  width: 250px; /* Fixer la largeur des champs de saisie */
}

.submit-btn {
  margin-top: 1rem;
  width: 100%;
}

.link-redirect {
    margin-top: 10px;
    margin-bottom: 50px;
    display: block;
    color: #007bff;
    text-decoration: none;
  }
  .link-redirect:hover {
    color: #0056b3;
    text-decoration: underline;
  }
</style>