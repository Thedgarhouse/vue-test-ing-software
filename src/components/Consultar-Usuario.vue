<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 class="text-xs-center" mt-5>
        <h1>Consultar Usuario</h1>
      </v-flex>
      <v-flex xs12 sm6 offset-sm3 mt-3>
        <form>
          <v-layout column>
            <v-flex>
              <v-text-field
                name="Nombre"
                v-model="search"
                label="Nombre"
                id="Nombre"
                type="text"
                required></v-text-field>
            </v-flex>
            <v-flex class="text-xs-center" mt-5>
              <v-btn color="primary"  @click="consultarUsuario">Buscar</v-btn>
            </v-flex>
          </v-layout>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  const axios = require('axios');
    export default {
      data () {
        return {
          search: ''
        }
      },
      methods: {
        consultarUsuario() {
          const BASE_URL = 'http://192.168.10.10/api/users/' + this.search;

          axios.get(BASE_URL)
            .then((res) => {
              console.log(res.data)
            })
            .catch(function (error){
              console.log(error);
            });
        }
      },
    }
</script>

<style scoped>

</style>
