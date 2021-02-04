<template>
    <v-data-table
    :headers="cabecalho"
    :items="receitas"
    :items-per-page="25"
    class="elevation-1"
  ></v-data-table>
</template>

<script>
export default {
  cabecalho: [
    { text: '#', value: 'id' },
    { text: 'Nome', value: 'nome' },
    { text: 'Tempo de Preparo', value: 'tempo_preparo_minutos' },
    { text: 'Porções', value: 'porcoes' },
    { text: 'Modo de Preparo', value: 'modo_preparo' },
    { text: 'Ingredientes', value: 'ingredientes' }
  ],
  receitas: []
}
</script>
