<template>

    <books-grid v-bind:books="books"/>

</template>

<script>
import BooksGrid from '@/components/BooksGrid'

export default {
  name: 'Recent',
  components: {
    BooksGrid
  },
  data () {
    return {

    }
  },
  computed: {
    books () {
      return this.$store.state.recentBooks
    }
  }
}
</script>
