<template>
  <v-app>
    <v-app-bar
            color="deep-purple accent-4"
            dense
            dark
            app
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Page title</v-toolbar-title>

      <v-spacer></v-spacer>


      <v-btn @click="changeTheme" icon>
        <v-icon>mdi-theme-light-dark</v-icon>
      </v-btn>

      <v-menu
              left
              bottom
      >
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
                  v-for="n in 5"
                  :key="n"
                  @click="() => {}"
          >
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-content class="mt-7">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

  export default {
    name: 'App',

    components: {},

    data: () => ({
      collapseOnScroll: true,
    }),
    methods: {
      changeTheme() {
        localStorage.setItem('dark', String(!this.$vuetify.theme.dark));
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      }
    }
  };
</script>

<style>
  .value-input {
    outline: none;
  }
</style>
