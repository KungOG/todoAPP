<template>
  <div id="app">
    <section class="slider">
      <Todo :todos="todos"/>
      <AddTodo />
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
        {done: false, text: 'Köp Godis'}
      ]
    }
  },
  components: {
    Todo,
    AddTodo
  }
}
</script>
<style lang="scss">
@import './scss/main.scss';



</style>
