<template>
  <v-container
    class="fill-height"
    fluid
    id="login"
  >
    <v-row>
      <v-col
        sm="8"
        offset-sm="2"
        md="6"
        offset-md="3"
        lg="4"
        offset-lg="4"
      >
        <v-card
          class="elevation-12"
          color="primary"
        >
          <v-form lazy-validation @submit.prevent="onLogin">
            <v-card-text>
              <span>
                <v-img
                  src="~@/assets/logo.png"
                  width="350px"
                >
                </v-img>
              </span>
              <v-text-field
                label="Usuário"
                name="login"
                type="text"
                v-model="payload.login"
                :rules="usuariorRules"
                required
                background-color="white"
                solo
              ></v-text-field>

              <v-text-field
                id="password"
                label="Senha"
                name="senha"
                type="password"
                v-model="payload.senha"
                :rules="senhaRules"
                required
                background-color="white"
                solo
              ></v-text-field>
            </v-card-text>

            <v-card-actions>
              <v-row>
                <v-col>
                  <div class="text-center">
                    <v-btn
                      color="secondary"
                      type="submit"
                    >
                      Entrar
                    </v-btn>
                  </div>
                </v-col>
              </v-row>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      payload: {},
      senhaRules: [
        v => !!v || 'O campo senha é obrigatório'
      ],
      usuarioRules: [
        v => !!v || 'O campo usuário é obrigatório'
      ]
    }
  }
}
</script>
