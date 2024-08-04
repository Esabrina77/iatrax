<template>
    <div class="contact-page">
        <!-- <img src="" alt="Background image" class="auth-background"> -->
        <div class="contact-form">
            <h1>Contactez-nous</h1>
            <FormInput label="Nom prénom" id="name" v-model="name" />
            <FormInput label="Entreprise" id="company" v-model="company" />
            <FormInput label="Email" id="email" type="email" v-model="email" />
            <FormInput label="Numéro de téléphone" id="phone" v-model="phone" />
            <FormInput label="Code postal / ville" id="postalCode" v-model="postalCode" />
            <FormInput label="URL site web" id="website" v-model="website" />
            <textarea v-model="message" placeholder="Message"></textarea>
            <FormButton label="Envoyer" @click="sendMessage" />
        </div>
    </div>
</template>

<script>
import FormInput from "@/components/FormInput/FormInput.vue";
import FormButton from "@/components/FormButton/FormButton.vue";

export default {
    name: "Contact",
    components: {
        FormInput,
        FormButton
    },
    data() {
        return {
            name: "",
            company: "",
            email: "",
            phone: "",
            postalCode: "",
            website: "",
            message: ""
        };
    },
    methods: {
        sendMessage() {
            // Handle sending message
        }
    }
};
</script>

<style scoped>
.contact-page {
    display: flex;
}

.auth-background {
    width: 50%;
    object-fit: cover;
}

.contact-form {
    width: 50%;
    padding: 2rem;
}

textarea {
    width: 100%;
    padding: 0.5rem;
    margin-top: 1rem;
}
</style>