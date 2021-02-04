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
        <span>Receita</span>
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
          <v-col>
            <v-select
              id="categoria-select"
              v-model="filter.id_categorias"
              item-text="nome"
              item-name="categoria"
              item-value="id"
              :items="categorias"
              label="Categoria"
              placeholder="Categoria"
            >
              <template slot="no-data">
                Nenhuma categoria retornada
              </template>
            </v-select>
          </v-col>
        </v-row>

        <v-row>
          <v-col sm="6">
            <v-text-field
              label="Tempo de Preparo"
              name="tempo-preparo"
              type="int"
              required
              v-model="payload.tempo_preparo_minutos"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col sm="6">
            <v-text-field
              label="Porções"
              name="porcoes"
              type="int"
              required
              v-model="payload.porcoes"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col sm="6">
            <v-textarea
              label="Modo de Preparo"
              name="modo-preparo"
              required
              v-model="payload.modo_preparo"
            ></v-textarea>
          </v-col>
        </v-row>

        <v-row>
          <v-col sm="6">
            <v-textarea
              label="Ingredientes"
              name="ingredientes"
              required
              v-model="payload.ingredientes"
            ></v-textarea>
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
  categorias: [],
  payload: {}
}
</script>
