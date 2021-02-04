<template>
    <v-data-table
    :headers="cabecalho"
    :items="categorias"
    :items-per-page="25"
    class="elevation-1"
  ></v-data-table>
</template>

<script>
export default {
  cabecalho: [
    { text: '#', value: 'id' },
    { text: 'Nome', value: 'nome' }
  ],
  categorias: []
}
</script>
