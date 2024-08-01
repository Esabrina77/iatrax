<template>
<AuthLayout>
    <h1>Vous avez oublié votre mot de passe ?</h1>
    <p>Saisissez l’adresse e-mail que vous avez utilisée lors de votre inscription et nous vous enverrons des instructions pour réinitialiser votre mot de passe.</p>
    <FormInput label="Adresse email" id="email" type="email" v-model="email" />
    <FormButton label="Envoyer un code" @click="sendResetCode" />
  </AuthLayout>
</template>

<script>
import FormInput from "@/components/FormInput/FormInput.vue";
import FormButton from "@/components/FormButton/FormButton.vue";

export default {
    name: "ForgotPassword",
    components: {
        FormInput,
        FormButton
    },
    data() {
        return {
            email: ""
        };
    },
    methods: {
        sendResetCode() {
            // Handle sending reset code
        }
    }
};
</script>

<style scoped>
.auth-page {
    display: flex;
}

.auth-background {
    width: 50%;
    object-fit: cover;
}

.auth-form {
    width: 50%;
    padding: 2rem;
}
</style>