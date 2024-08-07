<template>
  <AuthLayout>
    <h2 class="title_page">Se connecter à iatrax</h2>
    <div class="google-btn">
      <img src="@/assets/logo/GroupGoogle.png" alt="Google icon" />
      <FormButton label="Se connecter avec Google" />
    </div>
    <div class="form-contain">
      <div class="input-contain">
        <FormInput label="Email" id="email" type="email" v-model="email" class="input-full-width" />
      </div>
      <div class="input-contain">
        <router-link class="forgot-pass" to="/forgot-password">Oublié ?</router-link>
        <FormInput label="Mot de passe" id="password" type="password" v-model="password" class="input-full-width" />
      </div>
      <FormButton class="submit-btn" label="Se connecter" @click="login" />
      <div class="link-contain">
        <router-link class="link-redirect" to="/signup">Vous n'avez pas de compte ? S'inscrire</router-link>
      </div>
    </div>
  </AuthLayout>
</template>

<script>
import FormInput from "@/components/FormInput/FormInput.vue";
import FormButton from "@/components/FormButton/FormButton.vue";
import AuthLayout from "@/components/Layout/AuthLayout.vue";

export default {
  name: "Login",
  components: {
    FormInput,
    FormButton,
    AuthLayout
  },
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login() {
      // Handle login
    }
  }
};
</script>

<style lang="scss" scoped>
@import './Login.scss';
</style>