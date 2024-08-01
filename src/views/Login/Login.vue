<template>
  <AuthLayout>
    <h2 class="title_page">Se connecter à iatrax</h2>
    <div class="google-btn">
      <img src="../../assets/logo/GroupGoogle.png" alt="Google icon" />
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

.form-contain {
  width: 100%;
  padding: 20px;
}

.input-contain {
  margin-bottom: 1rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .forgot-pass {
    text-decoration: none;
    color: gray;
    position: absolute;
    top: 0;
    right: 50px;
  }
  .forgot-pass:hover {
    color: rgb(38, 38, 38);
    font-size:17px;
    transition: ease-in 0.1s;
  }
}

.input-full-width {
  width: 100%;
  /* Assurez-vous que l'élément occupe toute la largeur disponible */
}

.submit-btn {
  margin-top: 1rem;
  width: 100%;
}

.link-contain {
  margin-top: 1rem;
  text-align: center;

  .link-redirect {
    margin-top: 0.5rem;
    display: block;
    color: #007bff;
    text-decoration: none;
  }
  .link-redirect:hover {
    color: #0056b3;
    text-decoration: underline;
  }
}
</style>