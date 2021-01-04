<template>
  <v-container fluid>
    <book-dialog ref="bookDialog"/>
    <v-overlay :absolute="true" :value="loading"></v-overlay>
    <v-row v-if="loading">
      <v-col v-for="n in 32" :key="n" lg="3" sm="6">
        <v-skeleton-loader
          type="card"
        ></v-skeleton-loader>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col v-for="book in books" :key="book.id" lg="3" sm="6">
        <v-card :title="book.title" @click="showBook(book.id)">
          <v-row dense>
            <v-col lg="4" sm="5" class="mx-0 pr-0">
              <v-card-text
                class="no-overflow d-block pb-0 pr-0"
                v-text="book.title"
              ></v-card-text>
              <v-card-subtitle
                class="no-overflow d-block pt-0 pr-0"
                v-text="formatAuthors(book.authors)"
              ></v-card-subtitle>
            </v-col>
            <v-spacer></v-spacer>
            <v-col class="mx-0" >
              <v-avatar class="my-2" size="180" tile>
                <v-img contain :src="book.formats['image/jpeg']"></v-img>
              </v-avatar>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BookDialog from '@/components/BookDialog'

export default {
  components: {
    BookDialog
  },
  props: ['books'],
  data () {
    return {
    }
  },
  methods: {
    formatAuthors (authors) {
      return authors.map((author) => author.name).join(', ')
    },
    showBook (bookId) {
      this.$refs.bookDialog.showBookDetails(bookId)
      this.$emit('show-book', bookId)
    }
  },
  computed: {
    loading () {
      return this.$store.state.pageLoading
    }
  }
}
</script>

<style scoped>
.no-overflow {
  white-space: nowrap;
  word-break: normal;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
