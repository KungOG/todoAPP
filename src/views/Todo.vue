<template>
    <main id="todo">
       <header>
            <h1>Telefon</h1>
            <h3>hjälp när det inte fastnar</h3>
       </header>
       <section class="todo-content">
           <todoitem v-for="(todo, index) in todos" :key="index" :todo="todo" />
       </section>
       <footer>
           <a href="#" class="btn">Slide to add new Todo</a>
        </footer>
    </main>
</template>
<script>
import todoitem from '../components/Todo_item';

export default {
    name: 'todo',
    props: ['todos'],
    components: {
        todoitem
    }

}
</script>
<style lang="scss">
</style>