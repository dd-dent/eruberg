import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    books: null,
    prevURL: null,
    nextURL: 'http://gutendex.com/books/'
  },
  mutations: {
    updateBooks (state, payload) {
      state.books = payload.books
    },
    updatePaginationLinks (state, payload) {
      console.log(payload)
      state.prevURL = payload.prevURL
      state.nextURL = payload.nextURL
    }

  },
  actions: {
    async fetchNextPage ({ commit, state }) {
      const response = await axios.get(state.nextURL)
      console.log(response.data)
      commit({
        type: 'updatePaginationLinks',
        prevURL: state.nextURL,
        nextURL: response.data.next
      })
      commit({
        type: 'updateBooks',
        books: response.data.results
      })
    }
  },
  getters: {

  }
})
