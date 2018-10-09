<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout row wrap>
        <v-flex xs12 class="text-xs-center" mt-5>
          <h1>Así de Simple!</h1>
        </v-flex>
        <v-flex xs12 sm6 offset-sm3 mt-3>
          <blockquote class="blockquote text-xs-center">
            Presiona para listar todos los usuarios
          </blockquote>
        </v-flex>
        <v-flex xs12 class="text-xs-center" mt-4>
          <v-btn
            color="primary"
            @click.native="listarUsuarios()">Listar</v-btn>
        </v-flex>
        <template>
          <v-data-table
            :headers="headers"
            :items="desserts"
            hide-actions
            class="elevation-1"
          >
            <template slot="items" slot-scope="props">
              <td>{{ props.item.name }}</td>
              <td class="text-xs-right">{{ props.item.calories }}</td>
              <td class="text-xs-right">{{ props.item.fat }}</td>
              <td class="text-xs-right">{{ props.item.carbs }}</td>
              <td class="text-xs-right">{{ props.item.protein }}</td>
              <td class="text-xs-right">{{ props.item.iron }}</td>
            </template>
          </v-data-table>
        </template>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
  const axios = require('axios')
  export default {
    data () {
      return {
        headers: [
          {
            text: 'Dessert (100g serving)',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'Calories', value: 'calories' },
          { text: 'Fat (g)', value: 'fat' },
          { text: 'Carbs (g)', value: 'carbs' },
          { text: 'Protein (g)', value: 'protein' },
          { text: 'Iron (%)', value: 'iron' }
        ],
        desserts: [
          {
            value: false,
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%'
          }
        ]
      }
    },
    methods: {
      listarUsuarios () {
        const BASE_URL = 'http://192.168.10.10/api/users'
        axios.get(BASE_URL)
          .then((res) => {
            console.log(res)
          })
          .catch(function (error) {
            console.log(error)
          })
      }
    },

    name: 'Listado-Total',
  }
</script>

<style scoped>

</style>
