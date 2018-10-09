<template>
  <v-app>
    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
    >
      <v-list>
        <v-list-group
          v-for="item in items"
          v-model="item.active"
          :key="item.title"
          :prepend-icon="item.action"
          no-action
        >
          <v-list-tile slot="activator">
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile
            v-for="subItem in item.items"
            :key="subItem.title"
            :to="subItem.path"
            @click=""
          >
            <v-list-tile-content>
              <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-icon>{{ subItem.action }}</v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      app
      :clipped-left="clipped"
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>web</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>web</v-icon>
      </v-btn>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">
          {{ appTitle }}
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>OMG I can edit this too!</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        clipped: false,
        drawer: true,
        fixed: false,
        items: [
          {
            title: 'Inicio',
            action: 'home',
            active: true,
            items: [
              {
                title: 'Información',
                action: 'info',
                path:'About'
              }
            ],
          },
          {
            title: 'Usuarios',
            action: 'account_circle',
            items: [
              {
                title: 'Listado Total',
                action: 'list',
                path: 'Listado-Total'
              },
              {
                title: 'Consultar',
                action: 'filter_list',
                path: 'Consultar-Usuario'
              },
              {
                title: 'Agregar',
                action: 'add',
                path: 'Agregar-Usuario'
              },
              {
                title: 'Actualizar Usuario',
                action: 'update',
                path: 'Actualizar-Usuario'
              },
              {
                title: 'Eliminar Usuario',
                action: 'delete',
                path: 'Eliminar-Usuario'
              },

            ],
          },
          {
            title: 'Tareas',
            action: 'assignment',
            items: [
              {
                title: 'Consulta por Usuario',
                action: 'account_box',
                path: 'Consultar-Tarea-Usuario'
              },
              {
                title: 'Listado Total',
                action: 'list',
                path: 'Listado-Total-Tareas'
              },
              {
                title: 'Consulta Individual',
                action: 'filter_list',
                path: 'Consultar-Tarea-Individual'
              },
              {
                title: 'Agregar',
                action: 'add',
                path: 'Agregar-Tarea'
              },
              {
                title: 'Actualizar Tarea',
                action: 'update',
                path: 'Actualizar-Tarea'
              },
              {
                title: 'Eliminar Tarea',
                action: 'delete',
                path: 'Eliminar-Tarea'
              }
            ]
          },
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
      }
    },
    computed: {
      appTitle() {
        return this.$store.state.appTitle
      }
    }
  }
</script>
