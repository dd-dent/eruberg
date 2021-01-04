<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <v-card v-if="book">
        <v-card-title class="headline grey lighten-2">Book Details</v-card-title>
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header>Title</v-expansion-panel-header>
            <v-expansion-panel-content>{{ book.title }}</v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel v-if="book.authors.length">
            <v-expansion-panel-header>Authors</v-expansion-panel-header>
            <v-expansion-panel-content>
              <ul>
                <li v-for="(author, i) in book.authors" :key="i">
                  {{ author.name}} <span v-if="author.birth_year">({{author.birth_year}}-{{ author.death_year }})</span>
                </li>
              </ul>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel v-if="book.bookshelves.length">
            <v-expansion-panel-header>Bookshelves</v-expansion-panel-header>
            <v-expansion-panel-content>
              <ul>
                <li v-for="(shelf, i) in book.bookshelves" :key="i">{{shelf}}</li>
              </ul>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <v-img :src="book.formats['image/jpeg']" max-height="300" contain></v-img>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'BookDialog',
  data () {
    return {
      dialog: false,
      book: null
    }
  },
  methods: {
    showBookDetails (bookId) {
      this.$store.dispatch('getBook', { bookId }).then((book) => {
        this.book = book
        this.dialog = true
      })
    }
  }
}
</script>
