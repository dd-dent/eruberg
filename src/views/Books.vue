<template>
  <div>
    <books-grid v-bind:books="books"/>
    <paginator/>
  </div>
</template>

<script>

import Paginator from '@/components/Paginator'
import BooksGrid from '@/components/BooksGrid'

export default {
  name: 'Books',
  components: {
    Paginator,
    BooksGrid
  },
  data () {
    return {

    }
  },
  mounted () {
    this.$store.dispatch('getPage', {
      pageUrl: this.$store.state.nextPage
    })
  },
  computed: {
    books () {
      return this.$store.state.books
    }
  }
}
</script>
