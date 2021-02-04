<template>

</template>

<script>
export default {

}
</script>
<template>
  <v-dialog v-model="dialog" persistent max-width="600">
    <template v-slot:activator="{ on }">
      <v-btn
        v-on="on"
        outlined
        :large="large"
        :color="color"
        class="ml-3"
      >
        <v-icon>{{ icon }}</v-icon>
        <span>Usuário</span>
      </v-btn>
    </template>
    <v-card>
      <v-card-title
        class="modal-header elevation-10"
      >
        <v-row>
          <v-col>
            <slot name="title"></slot>
          </v-col>
          <v-col class="text-right">
            <v-icon @click="dialog = false" color="white">mdi-window-close</v-icon>
          </v-col>
        </v-row>
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col sm="6">
            <v-text-field
              label="Nome"
              name="nome"
              type="text"
              required
              v-model="payload.nome"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col sm="6">
            <v-text-field
              label="Login"
              name="login"
              type="text"
              required
              v-model="payload.login"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col sm="6">
            <v-text-field
              label="Senha"
              name="senha"
              type="password"
              required
              v-model="payload.senha"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <div class="flex-grow-1"></div>
        <v-btn color="error" outlined text @click="dialog = false">Fechar</v-btn>
        <v-btn color="info" outlined text @click="onConfirm">Salvar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {

}
</script>
