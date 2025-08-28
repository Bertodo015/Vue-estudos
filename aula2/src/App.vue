<script setup>
  import axios from 'axios';
import { ref, reactive } from 'vue';

  const URL = "http://localhost:3000";
  const nome = ref("");

  //reactive pois tem vetor no ref
  const state = reactive({
    produtos: [],
    msgErroAPI: ""
  });

  function carregarDadosAPI() {}
  axios.get(`${URL}/produtos`)
  .then((resposta) => {
    state.msgErroAPI = ""
    state.produtos = resposta.data  //padrão "resposta.data"
  })  //dois meios de criar uma função (acima e abaixo)
  .catch(function (erro) {
    state.msgErroAPI = "Erro ao listar produtos da API"
    console.log(erro);
  })
</script>

<template>
  <h1>Olá mundo!</h1>
  <input v-model="nome" placeholder="Digite..."></input>
  <p>{{ nome }}</p>

  <!--  v-on click = @click -->
  <button @click="carregarDadosAPI">Carregar Dados da API</button>

  <ul v-if="state.produtos.length > 0">
    <li v-for="produto in state.produtos" v-bind:key="produto.id">
      {{ produto.nome }} - R$ {{ produto.preco }}
    </li>
  </ul>

  <p v-if="state.msgErroAPI > 0">{{ state.msgErroAPI }}</p>
</template>

<style scoped>
  h1 {
    color: red
  }
</style>
