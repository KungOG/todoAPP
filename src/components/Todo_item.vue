<template>
    <article class="todos" :class="{completed : todo.done}" v-touch:swipe.right="completed">
        <aside class="done" v-if="todo.done">
            <img src="../assets/check.svg" alt="done">
        </aside>
        <section class="text">
            {{todo.text}}
        </section>
    </article>
</template>

<script>
export default {
    name: 'todos',
    props: ['todo', 'index'],
    methods: {
        completed () {
            console.log(this.index);
            this.$parent.$parent.todos[this.index].done =
            !this.$parent.$parent.todos[this.index].done; 
        }
    }
}
</script>
<style lang="scss">
</style>

