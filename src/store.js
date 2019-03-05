import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state : {
    todos: [
      {done: false, text: 'Köp Bananer'},
      {done: false, text: 'Köp Ketchup'},
      {done: true, text: 'Köp Godis'}
    ],
    activeSlide: 0
  },
  mutations : {
    swipe (state, activeSlide) {
      state.activeSlide = activeSlide;
    },
    addTodo (state, todo) {
      state.todos.push(todo);
    }
  },
  actions : {
    addTodo (ctx, todo) {
      ctx.commit('addTodo', todo);
      ctx.commit('swipe', 0);
    }
  },
  getters : {
    todos (state) {
      return state.todos;
    },
    doneTodos (state) {
      return state.todos.filter (todo => !todo.done)
    }
  }
})
