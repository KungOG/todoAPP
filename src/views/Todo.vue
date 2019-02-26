<template>
    <main id="todo">
       <header>
            <h1>Teflon</h1>
            <p>hjälp när det inte fastnar</p>
       </header>
       <section class="todo-content">
           <todoitem v-for="(todo, index) in todos" :key="index" :todo="todo" />
       </section>
       <footer>
           <a href="#" class="btn" v-touch:swipe.left="swipe">Slide to add new Todo</a>
        </footer>
    </main>
</template>
<script>
import todoitem from '../components/Todo_item';

export default {
    name: 'todo',
    props: ['todos'],
    methods: {
        swipe(e) {
            this.$emit('swipe', 1);
        }
    },
    components: {
        todoitem
    }

}
</script>
<style lang="scss">
</style>