<template>
  <div id="app">
    <section class="slider">
      <Todo />
      <AddTodo />
      </section>
  </div>
</template>
<script>
import Todo from './views/Todo.vue'
import AddTodo from './views/AddTodo.vue'
export default {
  name: 'app',
  components: {
    Todo,
    AddTodo
  }
}
</script>
<style lang="scss">
@import './scss/main.scss';



</style>
