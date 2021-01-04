import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    books: null,
    recentBooks: [],
    recentBookIds: new Set(),
    previousPage: null,
    nextPage: 'http://gutendex.com/books/',
    pageLoading: false
  },
  mutations: {
    togglePageLoading (state) {
      state.pageLoading = !state.pageLoading
    },
    setState (state, payload) {
      state.books = payload.books
      state.previousPage = payload.previousPage
      state.nextPage = payload.nextPage
    },
    addToRecent (state, { book }) {
      if (!state.recentBookIds.has(book.id)) {
        state.recentBookIds.add(book.id)
        state.recentBooks.push(book)
      }
    }
  },
  actions: {
    async getPage ({ commit, state }, { pageUrl }) {
      if (state.loading) {
        return
      }
      commit('togglePageLoading')
      const response = await axios.get(pageUrl)
      commit({
        type: 'setState',
        books: response.data.results,
        previousPage: response.data.previous,
        nextPage: response.data.next
      })
      commit('togglePageLoading')
    },
    async getBook ({ commit }, { bookId }) {
      const response = await axios.get(`http://gutendex.com/books/${bookId}`)
      commit('addToRecent', { book: response.data })
      return response.data
    }
  },
  getters: {
    books: (state) => {
      return state.books
    }
  }
})
