<template>
  <v-app>
    <v-app-bar app dense dark>

      <v-app-bar-title>Eruberg</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn to="/">
        <span>Books</span>
        <v-icon>mdi-bookshelf</v-icon>
      </v-btn>

      <v-btn to="/recent">
        <span>Recent</span>
        <v-icon>mdi-history</v-icon>
      </v-btn>

    </v-app-bar>

    <v-main>
      <keep-alive>
        <router-view/>
      </keep-alive>
    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',

  components: {

  },

  data: () => ({

  })
}
</script>
