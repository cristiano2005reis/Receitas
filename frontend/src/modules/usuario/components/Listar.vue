<template>
    <v-data-table
    :headers="cabecalho"
    :items="usuarios"
    :items-per-page="25"
    class="elevation-1"
  ></v-data-table>
</template>

<script>
export default {
  cabecalho: [
    { text: '#', value: 'id' },
    { text: 'Nome', value: 'nome' },
    { text: 'Login', value: 'login' }
  ],
  usuarios: []
}
</script>
