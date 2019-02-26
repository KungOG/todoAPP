<template>
  <div id="app">
    <section class="slider" :class="'slide-' + activeSlide">
      <Todo :todos="todos" @swipe="handleSwipe" />
      <AddTodo @swipe="handleSwipe" />
      </section>
  </div>
</template>
<script>
import Todo from './views/Todo.vue'
import AddTodo from './views/AddTodo.vue'
export default {
  name: 'app',
  data () {
    return {
      todos: [
        {done: false, text: 'Köp Bananer'},
        {done: false, text: 'Köp Ketchup'},
        {done: true, text: 'Köp Godis'}
      ],
      activeSlide: 0
    }
  },
  components: {
    Todo,
    AddTodo
  },
  methods: {
    handleSwipe (e) {
      this.activeSlide = e;
    }
  }
}
</script>
<style lang="scss">
@import './scss/main.scss';
</style>
