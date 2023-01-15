<template>
  <div>
    <h3>{{ titulo }}</h3>
    <input type="text" placeholder="Nome do item" v-model="item" />
    <button type="button" @click="adicionarItem">Adicionar</button>
    <br />
    <ul>
      <li v-for="(item, idx) in itens" :key="idx">{{ item }}</li>
    </ul>
    <button type="button" @click="removerItem">Remover</button>
  </div>
</template>

<script>
import ListaMixin from "@/mixins/ListaMixin";
import RemoverItemListaMixin from "@/mixins/RemoverItemListaMixin";

export default {
  name: "ListaPessoas",
  data: () => ({
    titulo: "Lista Pessoas",
  }),
  mixins: [ListaMixin, RemoverItemListaMixin],
};
</script>