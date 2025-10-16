<template>
  <v-layout >
    <v-navigation-drawer permanent>
      <v-list>
        <v-list-item prepend-avatar="../assets/avatar.png" title="Aderbal da Silva Sauro"
          subtitle="aderbal@email.com"></v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list>
        <v-list-item
          prepend-icon="mdi-account-multiple"
          title="Meu perfil"
          value="perfil"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-folder"
          title="Página 2"
          value="pagina2"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-forum"
          title="Página 3"
          value="pagina3"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-logout"
          title="Sair"
          value="sair"
          @click="deslogar"
        ></v-list-item>
      </v-list>

    </v-navigation-drawer>
  </v-layout>
</template>

<script setup>
  import { useRouter } from 'vue-router';

  const router = useRouter();
  const deslogar = () => {
    localStorage.usuarioLogado = false;
    localStorage.email = "";
    router.push("/")
  }
</script>