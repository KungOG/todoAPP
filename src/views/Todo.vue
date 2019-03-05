<template>
    <main id="todo" v-touch:swipe.left="swipe">
       <header>
            <h1>RemindMe-Delux</h1>
            <p>Bara för att jag inte kommer ihåg</p>
       </header>
       <section class="todo-content">
           <todoitem v-for="(todo, index) in todos" :key="index" :index="index" :todo="todo" />
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
    methods : {
        swipe() {
            this.$store.commit('swipe', 0);
        }
    },
    components : {
        todoitem
    },
    computed : {
        todos () {
            return this.$store.getters.todos;
        }
    }

}
</script>
<style lang="scss">
</style>