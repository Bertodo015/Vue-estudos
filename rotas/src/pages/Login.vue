<!--> <-->
<template>
    
    <v-sheet class="mx-auto mt-16 px-2 py-2" width="300">
        <v-form>
            <v-text-field 
                v-model="email" 
                type="email"
                placeholder="email@email.com"
                label="E-mail"
                color="primary"
            ></v-text-field>

            <v-text-field
                v-model="senha"
                label="Senha"
                :rules="senhaRegras"
            ></v-text-field>
            <v-btn 
                to="/about" 
                color="success"
                class="d-flex justify-center align-center"
                heigth="200px"
            >Login</v-btn>
        </v-form>
    </v-sheet>

</template>

<script setup>
    import { ref } from 'vue'
    const email = ref('')

    const senha = ref('')
    const senhaRegras = [
        value => {
            if (senha.value.length >= 5) return true
            return "A senha deve conter ao menos 5 caracteres."
        }
    ]

</script>