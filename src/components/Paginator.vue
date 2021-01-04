<template>
  <v-bottom-navigation app grow>
    <v-btn @click="goToPreviousPage()" :disabled="$store.state.previousPage === null">
      <span>Previous Page</span>
    </v-btn>

    <v-btn @click="goToNextPage()" :disabled="$store.state.nextPage === null">
      <span>Next Page</span>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>

export default {
  data () {
    return {
      previousPage: this.$store.state.previousPage,
      nextPage: this.$store.state.nextPage
    }
  },
  methods: {
    goToPreviousPage () {
      // window.scrollTo(0, 0)
      document.getElementById('app').scrollIntoView({ behavior: 'smooth' })
      this.$store.dispatch('getPage', { pageUrl: this.$store.state.previousPage })
    },
    goToNextPage () {
      // window.scrollTo(0, 0)
      document.getElementById('app').scrollIntoView({ behavior: 'smooth' })
      this.$store.dispatch('getPage', { pageUrl: this.$store.state.nextPage })
    }
  }
}
</script>
